<template>
  <li :class="n('wrap')">
    <div role="radio" :aria-checked="checked" :class="n()" v-bind="$attrs" @click="handleClick">
      <div
        ref="action"
        v-ripple="{ disabled: formReadonly || readonly || formDisabled || disabled || !ripple }"
        v-hover:desktop="handleHovering"
        :class="
          classes(
            n('action'),
            [checked, n('--checked'), n('--unchecked')],
            [errorMessage || radioGroupErrorMessage, n('--error')],
            [formDisabled || disabled, n('--disabled')],
          )
        "
        :tabindex="formDisabled || disabled ? undefined : checked ? '0' : '-1'"
        :style="{ color: checked ? checkedColor : uncheckedColor }"
        @focus="isFocusing = true"
        @blur="isFocusing = false"
      >
        <slot v-if="checked" name="checked-icon">
          <var-icon :class="n('icon')" var-radio-cover name="radio-marked" :size="iconSize" />
        </slot>
        <slot v-else name="unchecked-icon">
          <var-icon :class="n('icon')" var-radio-cover name="radio-blank" :size="iconSize" />
        </slot>
        <var-hover-overlay
          :hovering="!disabled && !formDisabled && hovering"
          :focusing="!disabled && !formDisabled && isFocusing"
        />
      </div>
      <div
        v-if="$slots.default"
        :class="
          classes(
            n('text'),
            [errorMessage || radioGroupErrorMessage, n('--error')],
            [formDisabled || disabled, n('--disabled')],
          )
        "
        @click="handleTextClick"
      >
        <slot :checked="checked" />
      </div>
    </div>

    <var-form-details :error-message="errorMessage" />
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
import { call, preventDefault } from '@varlet/shared'
import { useEventListener, useVModel } from '@varlet/use'
import VarFormDetails from '../form-details'
import { useForm } from '../form/provide'
import Hover from '../hover'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import VarIcon from '../icon'
import Ripple from '../ripple'
import { createNamespace, useValidation } from '../utils/components'
import { props, type RadioValidateTrigger } from './props'
import { useRadioGroup, type RadioProvider } from './provide'

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
    const action = ref<HTMLElement>()
    const isFocusing = ref(false)
    const value = useVModel(props, 'modelValue')
    const checked = computed(() => value.value === props.checkedValue)
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
      isFocusing: computed(() => isFocusing.value),
      // keyboard arrow move
      move() {
        action.value!.focus()
        action.value!.click()
      },
      moveable() {
        return !form?.disabled.value && !props.disabled && !form?.readonly.value && !props.readonly
      },
    }

    call(bindRadioGroup, radioProvider)
    call(bindForm, radioProvider)

    useEventListener(() => window, 'keydown', handleKeydown)
    useEventListener(() => window, 'keyup', handleKeyup)

    function handleKeydown(event: KeyboardEvent) {
      if (!isFocusing.value) {
        return
      }

      const { key } = event

      if (key === 'Enter' || key === ' ') {
        preventDefault(event)
      }

      if (key === 'Enter') {
        action.value!.click()
      }
    }

    function handleKeyup(event: KeyboardEvent) {
      if (!isFocusing.value) {
        return
      }

      if (event.key === ' ') {
        preventDefault(event)
        action.value!.click()
      }
    }

    function validateWithTrigger(trigger: RadioValidateTrigger) {
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

      change(checked.value ? uncheckedValue : checkedValue)
    }

    function handleTextClick() {
      action.value!.focus()
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
      action,
      isFocusing,
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
      handleTextClick,
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
