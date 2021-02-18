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
          <var-icon class="var-radio__icon" name="radio-marked" :style="{ fontSize: iconSize }" />
        </slot>
        <slot name="unchecked-icon" v-else>
          <var-icon class="var-radio__icon" name="radio-blank" :style="{ fontSize: iconSize }" />
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

    <var-form-details class="var-radio__form-details" :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, nextTick, ref, Ref, watch } from 'vue'
import { props, ValidateTriggers } from './props'
import { useAtParentIndex, useParent, useValidation } from '../utils/components'
import { RadioGroupProvider, RADIO_GROUP_COUNT_RADIO_KEY, RADIO_GROUP_BIND_RADIO_KEY } from '../radio-group/provide'
import { RadioProvider } from './provide'
import { FORM_BIND_FORM_ITEM_KEY, FormProvider } from '../form/provide'
import Ripple from '../ripple'
import Icon from '../icon'
import FormDetails from '../form-details'

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
    const { bindParent: bindRadioGroup, parentProvider: radioGroupProvider } = useParent<
      RadioGroupProvider,
      RadioProvider
    >(RADIO_GROUP_BIND_RADIO_KEY)
    const { bindParent: bindForm, parentProvider: formProvider } = useParent<FormProvider, RadioProvider>(
      FORM_BIND_FORM_ITEM_KEY
    )
    useAtParentIndex(RADIO_GROUP_COUNT_RADIO_KEY)

    const value: Ref<any> = ref(false)
    const checked: ComputedRef<boolean> = computed(() => value.value === props.checkedValue)

    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()

    const validate = () => v(props.rules, props.modelValue)

    const validateWithTrigger = (trigger: ValidateTriggers) =>
      nextTick(() => vt(props.validateTrigger, trigger, props.rules, props.modelValue))

    const change = (changedValue: any) => {
      if (radioGroupProvider && value.value === props.checkedValue) {
        return
      }

      value.value = changedValue
      props['onUpdate:modelValue']?.(value.value)
      props.onChange?.(value.value)

      validateWithTrigger('onChange')

      radioGroupProvider?.onToggle(props.checkedValue)
    }

    const toggle = (changedValue?: any) => {
      const isInvalidValue = changedValue !== props.uncheckedValue && changedValue !== props.checkedValue
      if (changedValue != null && (isInvalidValue || changedValue === value.value)) {
        return
      }

      if (changedValue == null) {
        changedValue = checked.value ? props.uncheckedValue : props.checkedValue
      }

      change(changedValue)
    }

    const handleClick = (e: Event) => {
      if (formProvider?.disabled.value || formProvider?.readonly.value || props.disabled || props.readonly) {
        return
      }

      props.onClick?.(e)

      change(checked.value ? props.uncheckedValue : props.checkedValue)
    }

    const sync = (v: any) => {
      value.value = v === props.checkedValue ? props.checkedValue : props.uncheckedValue
    }

    const reset = () => {
      props['onUpdate:modelValue']?.(props.uncheckedValue)
      resetValidation()
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
      radioGroupErrorMessage: radioGroupProvider?.errorMessage,
      formDisabled: formProvider?.disabled,
      formReadonly: formProvider?.readonly,
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
