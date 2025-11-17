<template>
  <div :class="n('wrap')">
    <div
      ref="checkbox"
      role="checkbox"
      :aria-checked="isIndeterminate ? 'mixed' : checked"
      :aria-disabled="formDisabled || disabled"
      :class="n()"
      :tabindex="tabindex == null ? (disabled || formDisabled ? undefined : '0') : tabindex"
      @focus="isFocusing = true"
      @blur="isFocusing = false"
      @click="handleClick"
    >
      <div
        v-hover:desktop="handleHovering"
        v-ripple="{ disabled: formReadonly || readonly || formDisabled || disabled || !ripple }"
        :class="
          classes(
            n('action'),
            [checked || isIndeterminate, n('--checked'), n('--unchecked')],
            [errorMessage || checkboxGroupErrorMessage, n('--error')],
            [formDisabled || disabled, n('--disabled')],
          )
        "
        :style="{ color: checked || isIndeterminate ? checkedColor : uncheckedColor }"
      >
        <slot v-if="isIndeterminate" name="indeterminate-icon">
          <var-icon :class="n('icon')" name="minus-box" :size="iconSize" var-checkbox-cover />
        </slot>
        <slot v-if="checked && !isIndeterminate" name="checked-icon">
          <var-icon :class="n('icon')" name="checkbox-marked" :size="iconSize" var-checkbox-cover />
        </slot>
        <slot v-if="!checked && !isIndeterminate" name="unchecked-icon">
          <var-icon :class="n('icon')" name="checkbox-blank-outline" :size="iconSize" var-checkbox-cover />
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
            [errorMessage || checkboxGroupErrorMessage, n('--error')],
            [formDisabled || disabled, n('--disabled')],
          )
        "
        @click="handleTextClick"
      >
        <slot :checked="checked" />
      </div>
    </div>

    <var-form-details :error-message="errorMessage" />
  </div>
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
import { props, type CheckboxValidateTrigger } from './props'
import { useCheckboxGroup, type CheckboxProvider } from './provide'

const { name, n, classes } = createNamespace('checkbox')

export default defineComponent({
  name,
  directives: { Ripple, Hover },
  components: {
    VarIcon,
    VarFormDetails,
    VarHoverOverlay,
  },
  props,
  setup(props) {
    const checkbox = ref<HTMLElement | null>(null)
    const isFocusing = ref(false)
    const value = useVModel(props, 'modelValue')
    const isIndeterminate = useVModel(props, 'indeterminate')
    const checked = computed(() => value.value === props.checkedValue)
    const checkedValue = computed(() => props.checkedValue)
    const { checkboxGroup, bindCheckboxGroup } = useCheckboxGroup()
    const { hovering, handleHovering } = useHoverOverlay()
    const { form, bindForm } = useForm()
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()

    const checkboxProvider: CheckboxProvider = {
      checkedValue,
      checked,
      sync,
      validate,
      resetValidation,
      reset,
    }

    call(bindCheckboxGroup, checkboxProvider)
    call(bindForm, checkboxProvider)

    useEventListener(() => window, 'keydown', handleKeydown)
    useEventListener(() => window, 'keyup', handleKeyup)

    function validateWithTrigger(trigger: CheckboxValidateTrigger) {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    function change(changedValue: any) {
      const { checkedValue, onChange } = props

      value.value = changedValue
      call(onChange, value.value, isIndeterminate.value)
      validateWithTrigger('onChange')
      changedValue === checkedValue ? checkboxGroup?.onChecked(checkedValue) : checkboxGroup?.onUnchecked(checkedValue)
    }

    function handleClick(e: Event) {
      const { disabled, readonly, checkedValue, uncheckedValue, onClick } = props

      if (form?.disabled.value || disabled) {
        return
      }

      call(onClick, e)

      if (form?.readonly.value || readonly) {
        return
      }

      if (isIndeterminate.value === true) {
        isIndeterminate.value = false
        call(props.onChange, value.value, isIndeterminate.value)
        validateWithTrigger('onChange')
        return
      }

      const maximum = checkboxGroup ? checkboxGroup.checkedCount.value >= Number(checkboxGroup.max.value) : false

      if (!checked.value && maximum) {
        return
      }

      change(checked.value ? uncheckedValue : checkedValue)
    }

    function handleTextClick() {
      checkbox.value!.focus()
    }

    function sync(values: Array<any>) {
      const { checkedValue, uncheckedValue } = props
      value.value = values.includes(checkedValue) ? checkedValue : uncheckedValue
    }

    // expose
    function reset() {
      value.value = props.uncheckedValue
      resetValidation()
    }

    // expose
    function toggle(changedValue?: any) {
      const { checkedValue, uncheckedValue } = props

      const shouldReverse = ![checkedValue, uncheckedValue].includes(changedValue)
      if (shouldReverse) {
        changedValue = checked.value ? uncheckedValue : checkedValue
      }

      change(changedValue)
    }

    function handleKeydown(event: KeyboardEvent) {
      if (!isFocusing.value) {
        return
      }

      const { key } = event

      if (key === 'Enter' || key === ' ') {
        preventDefault(event)
      }

      if (key === 'Enter') {
        checkbox.value!.click()
      }
    }

    function handleKeyup(event: KeyboardEvent) {
      if (!isFocusing.value) {
        return
      }

      if (event.key === ' ') {
        preventDefault(event)
        checkbox.value!.click()
      }
    }

    // expose
    function validate() {
      return v(props.rules, props.modelValue)
    }

    return {
      checkbox,
      isFocusing,
      isIndeterminate,
      checked,
      errorMessage,
      checkboxGroupErrorMessage: checkboxGroup?.errorMessage,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      hovering,
      n,
      classes,
      handleHovering,
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
@import '../form-details/formDetails';
@import '../icon/icon';
@import '../hover-overlay/hoverOverlay';
@import './checkbox';
</style>
