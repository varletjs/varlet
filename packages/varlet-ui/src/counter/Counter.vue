<template>
  <div :class="classes(n(), 'var--box')">
    <div
      :class="
        classes(
          n('controller'),
          'var-elevation--2',
          [disabled || formDisabled, n('--disabled')],
          [errorMessage, n('--error')]
        )
      "
      :style="{ background: color ? color : undefined }"
      v-bind="$attrs"
    >
      <var-icon
        var-counter-cover
        name="minus"
        :class="classes(n('decrement-button'), [!decrementButton, n('--hidden')])"
        :style="{
          width: toSizeUnit(buttonSize),
          height: toSizeUnit(buttonSize),
        }"
        v-ripple="{
          disabled: !ripple || disabled || readonly || disableDecrement || !decrementButton || isMin,
        }"
        @click="decrement"
        @touchstart="pressDecrement"
        @touchend="releaseDecrement"
        @touchcancel="releaseDecrement"
      />
      <input
        :class="n('input')"
        :style="{
          width: toSizeUnit(inputWidth),
          fontSize: toSizeUnit(inputTextSize),
        }"
        :inputmode="toNumber(decimalLength) === 0 ? 'numeric' : 'decimal'"
        :readonly="readonly || formReadonly"
        :disabled="disabled || formDisabled || disableInput"
        v-model="inputValue"
        @change="handleChange"
      />
      <var-icon
        var-counter-cover
        name="plus"
        :class="classes(n('increment-button'), [!incrementButton, n('--hidden')])"
        :style="{
          width: toSizeUnit(buttonSize),
          height: toSizeUnit(buttonSize),
        }"
        v-ripple="{
          disabled: !ripple || disabled || readonly || disableIncrement || !incrementButton || isMax,
        }"
        @click="increment"
        @touchstart="pressIncrement"
        @touchend="releaseIncrement"
        @touchcancel="releaseIncrement"
      />
    </div>

    <var-form-details :error-message="errorMessage"></var-form-details>
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import VarFormDetails from '../form-details'
import Ripple from '../ripple'
import { defineComponent, ref, watch, computed, nextTick } from 'vue'
import { Decimal } from 'decimal.js'
import { props } from './props'
import { toNumber } from '@varlet/shared'
import { toSizeUnit } from '../utils/elements'
import { useForm } from '../form/provide'
import { useValidation, createNamespace, call } from '../utils/components'
import type { Ref, ComputedRef } from 'vue'
import type { ValidateTriggers } from './props'
import type { CounterProvider } from './provide'

const { n, classes } = createNamespace('counter')
const SPEED = 100
const DELAY = 600

export default defineComponent({
  name: 'VarCounter',
  components: {
    VarIcon,
    VarFormDetails,
  },
  directives: { Ripple },
  inheritAttrs: false,
  props,
  setup(props) {
    const inputValue: Ref<string | number> = ref('')
    let incrementTimer: number
    let decrementTimer: number
    let incrementDelayTimer: number
    let decrementDelayTimer: number
    const { bindForm, form } = useForm()
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()
    const { readonly: formReadonly, disabled: formDisabled } = form ?? {}

    // expose
    const validate = () => v(props.rules, props.modelValue)

    const validateWithTrigger = (trigger: ValidateTriggers) => {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    // expose
    const reset = () => {
      const { min } = props

      call(props['onUpdate:modelValue'], min != null ? toNumber(min) : 0)
      resetValidation()
    }

    const counterProvider: CounterProvider = {
      reset,
      validate,
      resetValidation,
    }

    const isMax: ComputedRef<boolean> = computed(() => {
      const { max, modelValue } = props
      return max != null && toNumber(modelValue) >= toNumber(max)
    })

    const isMin: ComputedRef<boolean> = computed(() => {
      const { min, modelValue } = props
      return min != null && toNumber(modelValue) <= toNumber(min)
    })

    const normalizeValue = (value: string) => {
      const { decimalLength, max, min } = props
      let num: number = toNumber(value)

      if (max != null && num > toNumber(max)) {
        num = toNumber(max)
      }

      if (min != null && num < toNumber(min)) {
        num = toNumber(min)
      }

      value = String(num)

      if (decimalLength != null) {
        value = num.toFixed(toNumber(decimalLength))
      }

      return value
    }

    const handleChange = (event: Event) => {
      const { lazyChange, onBeforeChange } = props
      const { value } = event.target as HTMLInputElement
      const normalizedValue = normalizeValue(value)

      lazyChange ? call(onBeforeChange, toNumber(normalizedValue), change) : setNormalizedValue(normalizedValue)

      validateWithTrigger('onInputChange')
    }

    const decrement = () => {
      const {
        disabled,
        readonly,
        disableDecrement,
        decrementButton,
        lazyChange,
        step,
        modelValue,
        onDecrement,
        onBeforeChange,
      } = props

      if (formDisabled?.value || formReadonly?.value || disabled || readonly || disableDecrement || !decrementButton) {
        return
      }

      if (isMin.value) {
        return
      }

      const value = new Decimal(toNumber(modelValue)).minus(new Decimal(toNumber(step))).toString()
      const normalizedValue = normalizeValue(value)
      const normalizedValueNum = toNumber(normalizedValue)

      call(onDecrement, normalizedValueNum)

      if (lazyChange) {
        call(onBeforeChange, normalizedValueNum, change)
      } else {
        setNormalizedValue(normalizedValue)
        validateWithTrigger('onDecrement')
      }
    }

    const increment = () => {
      const {
        disabled,
        readonly,
        disableIncrement,
        incrementButton,
        lazyChange,
        step,
        modelValue,
        onIncrement,
        onBeforeChange,
      } = props

      if (formDisabled?.value || formReadonly?.value || disabled || readonly || disableIncrement || !incrementButton) {
        return
      }

      if (isMax.value) {
        return
      }

      const value = new Decimal(toNumber(modelValue)).plus(new Decimal(toNumber(step))).toString()
      const normalizedValue = normalizeValue(value)
      const normalizedValueNum = toNumber(normalizedValue)

      call(onIncrement, normalizedValueNum)

      if (lazyChange) {
        call(onBeforeChange, normalizedValueNum, change)
      } else {
        setNormalizedValue(normalizedValue)
        validateWithTrigger('onIncrement')
      }
    }

    const pressDecrement = () => {
      const { press, lazyChange } = props

      if (!press || lazyChange) {
        return
      }

      decrementDelayTimer = window.setTimeout(() => {
        continuedDecrement()
      }, DELAY)
    }

    const pressIncrement = () => {
      const { press, lazyChange } = props

      if (!press || lazyChange) {
        return
      }

      incrementDelayTimer = window.setTimeout(() => {
        continuedIncrement()
      }, DELAY)
    }

    const releaseDecrement = () => {
      decrementTimer && clearTimeout(decrementTimer)
      decrementDelayTimer && clearTimeout(decrementDelayTimer)
    }

    const releaseIncrement = () => {
      incrementTimer && clearTimeout(incrementTimer)
      incrementDelayTimer && clearTimeout(incrementDelayTimer)
    }

    const continuedIncrement = () => {
      incrementTimer = window.setTimeout(() => {
        increment()
        continuedIncrement()
      }, SPEED)
    }

    const continuedDecrement = () => {
      decrementTimer = window.setTimeout(() => {
        decrement()
        continuedDecrement()
      }, SPEED)
    }

    const setNormalizedValue = (normalizedValue: string) => {
      inputValue.value = normalizedValue

      const normalizedValueNum = toNumber(normalizedValue)

      call(props['onUpdate:modelValue'], normalizedValueNum)
    }

    const change = (value: string | number) => {
      setNormalizedValue(normalizeValue(String(value)))
      validateWithTrigger('onLazyChange')
    }

    call(bindForm, counterProvider)

    watch(
      () => props.modelValue,
      (newValue) => {
        setNormalizedValue(normalizeValue(String(newValue)))
        call(props.onChange, toNumber(newValue))
      }
    )

    setNormalizedValue(normalizeValue(String(props.modelValue)))

    return {
      n,
      classes,
      inputValue,
      errorMessage,
      formDisabled,
      formReadonly,
      isMax,
      isMin,
      validate,
      reset,
      resetValidation,
      handleChange,
      decrement,
      increment,
      pressDecrement,
      pressIncrement,
      releaseDecrement,
      releaseIncrement,
      toSizeUnit,
      toNumber,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../icon/icon';
@import '../form-details/formDetails';
@import '../ripple/ripple';
@import './counter';
</style>
