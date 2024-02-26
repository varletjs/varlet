<template>
  <div :class="n('wrap')">
    <div :class="n()">
      <div
        v-for="value in toNumber(count)"
        :key="value"
        :style="getStyle(value)"
        :class="getClass(value)"
        @click="handleClick(value, $event)"
        v-ripple="{ disabled: formReadonly || readonly || formDisabled || disabled || !ripple }"
        v-hover:desktop="createHoverHandler(value)"
      >
        <var-icon
          :class="n('content-icon')"
          var-rate-cover
          :transition="0"
          :namespace="getCurrentState(value).namespace"
          :name="getCurrentState(value).name"
          :style="{ fontSize: toSizeUnit(size) }"
        >
        </var-icon>

        <var-hover-overlay :hovering="hovering && value === currentHoveringValue && !disabled && !formDisabled" />
      </div>
    </div>

    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import VarFormDetails from '../form-details'
import Ripple from '../ripple'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import Hover from '../hover'
import { defineComponent, nextTick, ref } from 'vue'
import { useForm } from '../form/provide'
import { useValidation, createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { toNumber, call } from '@varlet/shared'
import { props } from './props'
import { type RateProvider } from './provide'

const { name, n } = createNamespace('rate')

export default defineComponent({
  name,
  components: {
    VarIcon,
    VarFormDetails,
    VarHoverOverlay,
  },
  directives: { Ripple, Hover },
  props,
  setup(props) {
    const currentHoveringValue = ref<number>(-1)
    const { form, bindForm } = useForm()
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()
    const { hovering } = useHoverOverlay()

    let lastScore = toNumber(props.modelValue)

    const rateProvider: RateProvider = {
      reset,
      validate,
      resetValidation,
    }

    call(bindForm, rateProvider)

    function getStyle(val: number) {
      const { count, gap } = props

      return {
        color: getCurrentState(val).color,
        marginRight: val !== toNumber(count) ? toSizeUnit(gap) : 0,
      }
    }

    function getClass(val: number) {
      const { name, color } = getCurrentState(val)

      return {
        [n('content')]: true,
        [n('--disabled')]: form?.disabled.value || props.disabled,
        [n('--error')]: errorMessage.value,
        [n('--primary')]: name !== props.emptyIcon && !color,
      }
    }

    function getCurrentState(index: number) {
      const {
        modelValue,
        disabled,
        disabledColor,
        color,
        half,
        emptyColor,
        icon,
        halfIcon,
        emptyIcon,
        namespace,
        halfIconNamespace,
        emptyIconNamespace,
      } = props
      let iconColor = color

      if (disabled || form?.disabled.value) {
        iconColor = disabledColor
      }

      if (index <= modelValue) {
        return { color: iconColor, name: icon, namespace }
      }

      if (half && index <= modelValue + 0.5) {
        return { color: iconColor, name: halfIcon, namespace: halfIconNamespace }
      }

      return {
        color: disabled || form?.disabled.value ? disabledColor : emptyColor,
        name: emptyIcon,
        namespace: emptyIconNamespace,
      }
    }

    function changeValue(score: number, event: MouseEvent) {
      const { half, clearable } = props
      const { offsetWidth } = event.target as HTMLElement

      if (half && event.offsetX <= Math.floor(offsetWidth / 2)) {
        score -= 0.5
      }

      // set score to 0 when last score is equal to current score and clearable is true
      if (lastScore === score && clearable) {
        score = 0
      }

      if (lastScore !== score) {
        call(props['onUpdate:modelValue'], score)
        call(props.onChange, score)
      }

      // update last score
      lastScore = score
    }

    function validate() {
      return v(props.rules, props.modelValue)
    }

    function validateWithTrigger() {
      return nextTick(() => vt(['onChange'], 'onChange', props.rules, props.modelValue))
    }

    function handleClick(score: number, event: MouseEvent) {
      const { readonly, disabled } = props

      if (readonly || disabled || form?.disabled.value || form?.readonly.value) {
        return
      }

      changeValue(score, event)
      validateWithTrigger()
    }

    function createHoverHandler(value: number) {
      return (isHover: boolean) => {
        currentHoveringValue.value = value
        hovering.value = isHover
      }
    }

    function reset() {
      call(props['onUpdate:modelValue'], 0)
      resetValidation()
    }

    return {
      errorMessage,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      hovering,
      currentHoveringValue,
      getStyle,
      getClass,
      getCurrentState,
      handleClick,
      createHoverHandler,
      reset,
      validate,
      resetValidation,
      toSizeUnit,
      toNumber,
      n,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import '../icon/icon';
@import '../form-details/formDetails';
@import '../hover-overlay/hoverOverlay';
@import './rate';
</style>
