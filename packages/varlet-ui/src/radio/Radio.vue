<template>
  <div class="var-radio__wrap">
    <div class="var-radio" @click="handleClick" v-bind="$attrs">
      <div
        class="var-radio__action"
        v-ripple="{ disabled: formReadonly || readonly || formDisabled || disabled || !ripple }"
        :class="[
          checked ? 'var-radio--checked' : 'var-radio--unchecked',
          errorMessage || radioGroupErrorMessage ? 'var-radio--error' : null,
          formDisabled || disabled ? 'var-radio--disabled' : null,
        ]"
        :style="{ color: checked ? checkedColor : uncheckedColor }"
      >
        <slot name="checked-icon" v-if="checked">
          <var-icon class="var-radio__icon" name="radio-marked" :size="iconSize" />
        </slot>
        <slot name="unchecked-icon" v-else>
          <var-icon class="var-radio__icon" name="radio-blank" :size="iconSize" />
        </slot>
      </div>
      <div
        class="var-radio__text"
        :class="[
          errorMessage || radioGroupErrorMessage ? 'var-radio--error' : null,
          formDisabled || disabled ? 'var-radio--disabled' : null,
        ]"
      >
        <slot />
      </div>
    </div>

    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import Ripple from '../ripple'
import Icon from '../icon'
import FormDetails from '../form-details'
import { computed, ComputedRef, defineComponent, nextTick, ref, Ref, watch } from 'vue'
import { props, ValidateTriggers } from './props'
import { useValidation } from '../utils/components'
import { RadioProvider, useRadioGroup } from './provide'
import { useForm } from '../form/provide'

export default defineComponent({
  name: 'VarRadio',
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
    const { radioGroup, bindRadioGroup } = useRadioGroup()
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
      const { checkedValue, onChange } = props

      if (radioGroup && value.value === checkedValue) {
        return
      }

      value.value = changedValue

      props['onUpdate:modelValue']?.(value.value)
      onChange?.(value.value)
      radioGroup?.onToggle(checkedValue)
      validateWithTrigger('onChange')
    }

    const handleClick = (e: Event) => {
      const { disabled, readonly, uncheckedValue, checkedValue, onClick } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      onClick?.(e)
      change(checked.value ? uncheckedValue : checkedValue)
    }

    const sync = (v: any) => {
      const { checkedValue, uncheckedValue } = props
      value.value = v === checkedValue ? checkedValue : uncheckedValue
    }

    // expose
    const reset = () => {
      props['onUpdate:modelValue']?.(props.uncheckedValue)
      resetValidation()
    }

    // expose
    const validate = () => v(props.rules, props.modelValue)

    // expose
    const toggle = (changedValue?: any) => {
      const { uncheckedValue, checkedValue } = props

      const shouldReverse = ![uncheckedValue, checkedValue].includes(changedValue)
      if (shouldReverse) {
        changedValue = checked.value ? uncheckedValue : checkedValue
      }

      change(changedValue)
    }

    watch(
      () => props.modelValue,
      (newValue) => {
        value.value = newValue
      },
      { immediate: true }
    )

    const radioProvider: RadioProvider = {
      sync,
      validate,
      resetValidation,
      reset,
    }

    bindRadioGroup?.(radioProvider)
    bindForm?.(radioProvider)

    return {
      checked,
      errorMessage,
      radioGroupErrorMessage: radioGroup?.errorMessage,
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
@import './radio';
</style>
