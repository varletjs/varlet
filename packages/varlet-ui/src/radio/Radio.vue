<template>
  <div :class="n('wrap')">
    <div :class="n()" @click="handleClick" v-bind="$attrs">
      <div
        :class="
          classes(
            n('action'),
            [checked, n('--checked'), n('--unchecked')],
            [errorMessage || radioGroupErrorMessage, n('--error')],
            [formDisabled || disabled, n('--disabled')]
          )
        "
        v-ripple="{ disabled: formReadonly || readonly || formDisabled || disabled || !ripple }"
        v-hover:desktop="handleHovering"
        :style="{ color: checked ? checkedColor : uncheckedColor }"
      >
        <slot name="checked-icon" v-if="checked">
          <var-icon
            :class="classes(n('icon'), [withAnimation, n('--with-animation')])"
            var-radio-cover
            name="radio-marked"
            :size="iconSize"
          />
        </slot>
        <slot name="unchecked-icon" v-else>
          <var-icon
            :class="classes(n('icon'), [withAnimation, n('--with-animation')])"
            var-radio-cover
            name="radio-blank"
            :size="iconSize"
          />
        </slot>
        <var-hover-overlay :hovering="!disabled && !formDisabled && hovering" />
      </div>
      <div
        :class="
          classes(
            n('text'),
            [errorMessage || radioGroupErrorMessage, n('--error')],
            [formDisabled || disabled, n('--disabled')]
          )
        "
        v-if="$slots.default"
      >
        <slot />
      </div>
    </div>

    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import VarFormDetails from '../form-details'
import Ripple from '../ripple'
import Hover from '../hover'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import { computed, defineComponent, nextTick, ref } from 'vue'
import { props, type ValidateTrigger } from './props'
import { useValidation, createNamespace } from '../utils/components'
import { useRadioGroup, type RadioProvider } from './provide'
import { useForm } from '../form/provide'
import { call } from '@varlet/shared'
import { useVModel } from '@varlet/use'

const { name, n, classes } = createNamespace('radio')

export default defineComponent({
  name,
  directives: { Ripple, Hover },
  components: {
    VarIcon,
    VarFormDetails,
    VarHoverOverlay,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const value = useVModel(props, 'modelValue')
    const checked = computed(() => value.value === props.checkedValue)
    const withAnimation = ref(false)
    const { radioGroup, bindRadioGroup } = useRadioGroup()
    const { hovering, handleHovering } = useHoverOverlay()
    const { form, bindForm } = useForm()
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()

    const radioProvider: RadioProvider = {
      sync,
      validate,
      resetValidation,
      reset,
    }

    call(bindRadioGroup, radioProvider)
    call(bindForm, radioProvider)

    function validateWithTrigger(trigger: ValidateTrigger) {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    function change(changedValue: any) {
      const { checkedValue, onChange } = props

      if (radioGroup && value.value === checkedValue) {
        return
      }

      value.value = changedValue

      call(onChange, value.value)
      radioGroup?.onToggle(checkedValue)
      validateWithTrigger('onChange')
    }

    function handleClick(e: Event) {
      const { disabled, readonly, uncheckedValue, checkedValue, onClick } = props

      if (form?.disabled.value || disabled) {
        return
      }

      call(onClick, e)
      if (form?.readonly.value || readonly) {
        return
      }

      withAnimation.value = true
      change(checked.value ? uncheckedValue : checkedValue)
    }

    function sync(v: any) {
      const { checkedValue, uncheckedValue } = props
      value.value = v === checkedValue ? checkedValue : uncheckedValue
    }

    // expose
    function reset() {
      value.value = props.uncheckedValue
      resetValidation()
    }

    // expose
    function validate() {
      return v(props.rules, props.modelValue)
    }

    // expose
    function toggle(changedValue?: any) {
      const { uncheckedValue, checkedValue } = props

      const shouldReverse = ![uncheckedValue, checkedValue].includes(changedValue)
      if (shouldReverse) {
        changedValue = checked.value ? uncheckedValue : checkedValue
      }

      change(changedValue)
    }

    return {
      withAnimation,
      checked,
      errorMessage,
      radioGroupErrorMessage: radioGroup?.errorMessage,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      hovering,
      handleHovering,
      n,
      classes,
      handleClick,
      toggle,
      reset,
      validate,
      resetValidation,
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
@import './radio';
</style>
