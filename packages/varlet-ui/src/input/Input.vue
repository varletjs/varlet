<template>
  <div
    class="var-input var--box"
    :class="[disabled ? 'var-input--disabled' : null]"
    @click="handleClick"
    v-bind="$attrs"
  >
    <div
      class="var-input__controller"
      :class="[
        isFocus ? 'var-input--focus' : null,
        errorMessage ? 'var-input--error' : null,
        formDisabled || disabled ? 'var-input--disabled' : null,
      ]"
      :style="{
        color: isFocus ? focusColor : blurColor,
      }"
    >
      <div class="var-input__icon" :class="[!hint ? 'var-input--non-hint' : null]">
        <slot name="prepend-icon" />
      </div>

      <div class="var-input__wrap" :class="[!hint ? 'var-input--non-hint' : null]">
        <component
          class="var-input__input"
          ref="el"
          autocomplete="off"
          :is="textarea ? 'textarea' : 'input'"
          :id="id"
          :disabled="formDisabled || disabled || formReadonly || readonly"
          :type="type"
          :value="modelValue"
          :maxlength="maxlength"
          :rows="rows"
          :class="[formDisabled || disabled ? 'var-input--disabled' : null, textarea ? 'var-input--textarea' : null]"
          :style="{
            color: textColor,
            caretColor: focusColor,
            resize: resize ? 'vertical' : 'none',
          }"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @change="handleChange"
        />
        <label
          class="var-input__placeholder"
          :class="[computePlaceholderState(), !hint ? 'var-input--placeholder-non-hint' : null]"
          :for="id"
        >
          {{ placeholder }}
        </label>
        <div
          class="var-input__line"
          :class="[
            formDisabled || disabled ? 'var-input--line-disabled' : null,
            errorMessage ? 'var-input--line-error' : null,
          ]"
          :style="{ background: blurColor }"
          v-if="line"
        >
          <div
            class="var-input__dot"
            :class="[
              isFocus ? 'var-input--spread' : null,
              formDisabled || disabled ? 'var-input--line-disabled' : null,
              errorMessage ? 'var-input--line-error' : null,
            ]"
            :style="{ background: focusColor }"
          ></div>
        </div>
      </div>

      <div class="var-input__icon" :class="[!hint ? 'var-input--non-hint' : null]">
        <slot name="append-icon">
          <var-icon
            class="var-input__clear-icon"
            name="close-circle"
            size="14px"
            v-if="clearable"
            @click="handleClear"
          />
        </slot>
      </div>
    </div>

    <var-form-details :error-message="errorMessage" :maxlength-text="maxlengthText" />
  </div>
</template>

<script lang="ts">
import FormDetails from '../form-details'
import Icon from '../icon'
import { defineComponent, getCurrentInstance, ref, Ref, computed, ComputedRef, nextTick } from 'vue'
import { props, ValidateTriggers } from './props'
import { isEmpty, isNumber, toNumber } from '../utils/shared'
import { useValidation } from '../utils/components'
import { useForm } from '../form/provide'
import { InputProvider } from './provide'

export default defineComponent({
  name: 'VarInput',
  components: {
    [Icon.name]: Icon,
    [FormDetails.name]: FormDetails,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const id: Ref<string> = ref(`var-input-${getCurrentInstance()!.uid}`)
    const el: Ref<HTMLInputElement | null> = ref(null)
    const isFocus: Ref<boolean> = ref(false)
    const isNumberValue: ComputedRef<boolean> = computed(() => isNumber(props.modelValue))
    const maxlengthText: ComputedRef<string> = computed(() => {
      const { maxlength, modelValue } = props

      if (!maxlength) {
        return ''
      }

      if (isEmpty(modelValue)) {
        return `0 / ${maxlength}`
      }

      return `${String(modelValue).length}/${maxlength}`
    })
    const { bindForm, form } = useForm()
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()

    const validateWithTrigger = (trigger: ValidateTriggers) => {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    const computePlaceholderState = () => {
      const { hint, modelValue } = props

      if (!hint && !isEmpty(modelValue)) {
        return 'var-input--placeholder-hidden'
      }
      if (hint && (!isEmpty(modelValue) || isFocus.value)) {
        return 'var-input--placeholder-hint'
      }
    }

    const normalizeValue = (value: string) => (isNumberValue.value ? toNumber(value) : value)

    const handleFocus = (e: Event) => {
      isFocus.value = true

      props.onFocus?.(e)
      validateWithTrigger('onFocus')
    }

    const handleBlur = (e: Event) => {
      isFocus.value = false

      props.onBlur?.(e)
      validateWithTrigger('onBlur')
    }

    const handleInput = (e: Event) => {
      const { value } = e.target as HTMLInputElement
      const normalizedValue = normalizeValue(value)

      props['onUpdate:modelValue']?.(normalizedValue)
      props.onInput?.(normalizedValue, e)
      validateWithTrigger('onInput')
    }

    const handleChange = (e: Event) => {
      const { value } = e.target as HTMLInputElement

      props.onChange?.(normalizeValue(value), e)
      validateWithTrigger('onChange')
    }

    const handleClear = (e: Event) => {
      const { disabled, readonly, clearable, onClear } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly || !clearable) {
        return
      }

      props['onUpdate:modelValue']?.(isNumberValue.value ? 0 : '')
      onClear?.(e)

      validateWithTrigger('onClear')
    }

    const handleClick = (e: Event) => {
      const { disabled, onClick } = props

      if (form?.disabled.value || disabled) {
        return
      }

      onClick?.(e)

      validateWithTrigger('onClick')
    }

    // expose
    const reset = () => {
      props['onUpdate:modelValue']?.(isNumberValue.value ? 0 : '')
      resetValidation()
    }

    // expose
    const validate = () => v(props.rules, props.modelValue)

    // expose
    const focus = () => {
      ;(el.value as HTMLInputElement).focus()
    }

    // expose
    const blur = () => {
      ;(el.value as HTMLInputElement).blur()
    }

    const inputProvider: InputProvider = {
      reset,
      validate,
      resetValidation,
    }

    bindForm?.(inputProvider)

    return {
      el,
      id,
      isFocus,
      errorMessage,
      maxlengthText,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      computePlaceholderState,
      handleFocus,
      handleBlur,
      handleInput,
      handleChange,
      handleClear,
      handleClick,
      validate,
      resetValidation,
      reset,
      focus,
      blur,
    }
  },
})
</script>

<style lang="less">
@import './input';
</style>
