<template>
  <div class="var-checkbox__wrap" @click="handleClick" v-bind="$attrs">
    <div class="var-checkbox">
      <div
        class="var-checkbox__action"
        :class="[
          checked ? 'var-checkbox--checked' : 'var-checkbox--unchecked',
          errorMessage || checkboxGroupErrorMessage ? 'var-checkbox--error' : null,
          formDisabled || disabled ? 'var-checkbox--disabled' : null,
        ]"
        :style="{ color: checked ? checkedColor : uncheckedColor }"
        v-ripple="{ disabled: formReadonly || readonly || formDisabled || disabled || !ripple }"
      >
        <slot name="checked-icon" v-if="checked">
          <var-icon
            class="var-checkbox__icon"
            name="checkbox-marked"
            :class="[withAnimation ? 'var-checkbox--with-animation' : null]"
            :size="iconSize"
            var-checkbox-cover
          />
        </slot>
        <slot name="unchecked-icon" v-else>
          <var-icon
            class="var-checkbox__icon"
            name="checkbox-blank-outline"
            :class="[withAnimation ? 'var-checkbox--with-animation' : null]"
            :size="iconSize"
            var-checkbox-cover
          />
        </slot>
      </div>

      <div
        class="var-checkbox__text"
        :class="[
          errorMessage || checkboxGroupErrorMessage ? 'var-checkbox--error' : null,
          formDisabled || disabled ? 'var-checkbox--disabled' : null,
        ]"
      >
        <slot />
      </div>
    </div>

    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import Icon from '../icon'
import Ripple from '../ripple'
import FormDetails from '../form-details'
import { defineComponent, ref, Ref, computed, ComputedRef, watch, nextTick } from 'vue'
import { props, ValidateTriggers } from './props'
import { useValidation } from '../utils/components'
import { CheckboxProvider, useCheckboxGroup } from './provide'
import { useForm } from '../form/provide'

export default defineComponent({
  name: 'VarCheckbox',
  directives: { Ripple },
  components: {
    [Icon.name]: Icon,
    [FormDetails.name]: FormDetails,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const value: Ref<any> = ref(false)
    const checked: ComputedRef<boolean> = computed(() => value.value === props.checkedValue)
    const checkedValue: ComputedRef<boolean> = computed(() => props.checkedValue)
    const withAnimation: Ref<boolean> = ref(false)
    const { checkboxGroup, bindCheckboxGroup } = useCheckboxGroup()
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

      props['onUpdate:modelValue']?.(value.value)
      onChange?.(value.value)
      validateWithTrigger('onChange')

      changedValue === checkedValue ? checkboxGroup?.onChecked(checkedValue) : checkboxGroup?.onUnchecked(checkedValue)
    }

    const handleClick = (e: Event) => {
      const { disabled, readonly, checkedValue, uncheckedValue, onClick } = props

      if (form?.disabled.value || disabled) {
        return
      }

      onClick?.(e)

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

    // expose
    const reset = () => {
      props['onUpdate:modelValue']?.(props.uncheckedValue)
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
    }

    bindCheckboxGroup?.(checkboxProvider)
    bindForm?.(checkboxProvider)

    return {
      withAnimation,
      checked,
      errorMessage,
      checkboxGroupErrorMessage: checkboxGroup?.errorMessage,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
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
@import '../form-details/formDetails';
@import '../icon/icon';
@import './checkbox';
</style>
