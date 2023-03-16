<template>
  <div :class="n('wrap')" @click="handleClick">
    <div :class="n()">
      <div
        :class="
          classes(
            n('action'),
            [checked, n('--checked'), n('--unchecked')],
            [errorMessage || checkboxGroupErrorMessage, n('--error')],
            [formDisabled || disabled, n('--disabled')]
          )
        "
        :style="{ color: checked ? checkedColor : uncheckedColor }"
        v-hover:desktop="handleHovering"
        v-ripple="{ disabled: formReadonly || readonly || formDisabled || disabled || !ripple }"
      >
        <slot name="checked-icon" v-if="checked">
          <var-icon
            :class="classes(n('icon'), [withAnimation, n('--with-animation')])"
            name="checkbox-marked"
            :size="iconSize"
            var-checkbox-cover
          />
        </slot>
        <slot name="unchecked-icon" v-else>
          <var-icon
            :class="classes(n('icon'), [withAnimation, n('--with-animation')])"
            name="checkbox-blank-outline"
            :size="iconSize"
            var-checkbox-cover
          />
        </slot>
        <var-hover-overlay :hovering="!disabled && !formDisabled && hovering" />
      </div>

      <div
        :class="
          classes(
            n('text'),
            [errorMessage || checkboxGroupErrorMessage, n('--error')],
            [formDisabled || disabled, n('--disabled')]
          )
        "
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
import { defineComponent, ref, computed, watch, nextTick } from 'vue'
import { props } from './props'
import { useValidation, createNamespace, call } from '../utils/components'
import { useCheckboxGroup } from './provide'
import { useForm } from '../form/provide'
import type { Ref, ComputedRef } from 'vue'
import type { ValidateTriggers } from './props'
import type { CheckboxProvider } from './provide'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'

const { n, classes } = createNamespace('checkbox')

export default defineComponent({
  name: 'VarCheckbox',
  directives: { Ripple, Hover },
  components: {
    VarIcon,
    VarFormDetails,
    VarHoverOverlay,
  },
  props,
  setup(props) {
    const value: Ref = ref(false)
    const checked: ComputedRef<boolean> = computed(() => value.value === props.checkedValue)
    const checkedValue: ComputedRef<boolean> = computed(() => props.checkedValue)
    const withAnimation: Ref<boolean> = ref(false)
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

    const validateWithTrigger = (trigger: ValidateTriggers) => {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    const change = (changedValue: any) => {
      value.value = changedValue

      const { checkedValue, onChange } = props

      call(props['onUpdate:modelValue'], value.value)
      call(onChange, value.value)
      validateWithTrigger('onChange')

      changedValue === checkedValue ? checkboxGroup?.onChecked(checkedValue) : checkboxGroup?.onUnchecked(checkedValue)
    }

    const handleClick = (e: Event) => {
      const { disabled, readonly, checkedValue, uncheckedValue, onClick } = props

      if (form?.disabled.value || disabled) {
        return
      }

      call(onClick, e)

      if (form?.readonly.value || readonly) {
        return
      }

      withAnimation.value = true
      const maximum = checkboxGroup ? checkboxGroup.checkedCount.value >= Number(checkboxGroup.max.value) : false

      if (!checked.value && maximum) {
        return
      }

      change(checked.value ? uncheckedValue : checkedValue)
    }

    const sync = (values: Array<any>) => {
      const { checkedValue, uncheckedValue } = props
      value.value = values.includes(checkedValue) ? checkedValue : uncheckedValue
    }

    const resetWithAnimation = () => {
      withAnimation.value = false
    }

    // expose
    const reset = () => {
      call(props['onUpdate:modelValue'], props.uncheckedValue)
      resetValidation()
    }

    // expose
    const toggle = (changedValue?: any) => {
      const { checkedValue, uncheckedValue } = props

      const shouldReverse = ![checkedValue, uncheckedValue].includes(changedValue)
      if (shouldReverse) {
        changedValue = checked.value ? uncheckedValue : checkedValue
      }

      change(changedValue)
    }

    // expose
    const validate = () => v(props.rules, props.modelValue)

    watch(
      () => props.modelValue,
      (newValue) => {
        value.value = newValue
      },
      { immediate: true }
    )

    const checkboxProvider: CheckboxProvider = {
      checkedValue,
      checked,
      sync,
      validate,
      resetValidation,
      reset,
      resetWithAnimation,
    }

    call(bindCheckboxGroup, checkboxProvider)
    call(bindForm, checkboxProvider)

    return {
      withAnimation,
      checked,
      errorMessage,
      checkboxGroupErrorMessage: checkboxGroup?.errorMessage,
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
@import '../form-details/formDetails';
@import '../icon/icon';
@import './checkbox';
</style>
