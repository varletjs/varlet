<template>
	<div class="var-checkbox__wrap" @click="handleClick" v-bind="$attrs">
		<div class="var-checkbox">
			<div
				class="var-checkbox__action"
				v-ripple="{ disabled: formDisabled || disabled || !ripple }"
				:class="[
					checked ? 'var-checkbox--checked' : 'var-checkbox--unchecked',
					errorMessage || checkboxGroupErrorMessage ? 'var-checkbox--error' : null,
					formDisabled || disabled ? 'var-checkbox--disabled' : null,
				]"
				:style="{ color: checked ? checkedColor : uncheckedColor }"
			>
				<slot name="checked-icon" v-if="checked">
					<var-icon class="var-checkbox__icon" name="checkbox-marked" :style="{ fontSize: iconSize }" />
				</slot>
				<slot name="unchecked-icon" v-else>
					<var-icon class="var-checkbox__icon" name="checkbox-blank-outline" :style="{ fontSize: iconSize }" />
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

		<var-form-details class="var-checkbox__form-details" :error-message="errorMessage" />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed, ComputedRef, watch, nextTick } from 'vue'
import { props, ValidateTriggers } from './props'
import { useAtParentIndex, useParent, useValidation } from '../utils/components'
import {
  CHECKBOX_GROUP_BIND_CHECKBOX_KEY,
  CHECKBOX_GROUP_COUNT_CHECKBOX_KEY,
  CheckboxGroupProvider,
} from '../checkbox-group/provide'
import { CheckboxProvider } from './provide'
import Icon from '../icon'
import Ripple from '../ripple'
import FormDetails from '../form-details'
import { FORM_BIND_FORM_ITEM_KEY, FormProvider } from '../form/provide'

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
    const { bindParent: bindCheckboxGroup, parentProvider: checkboxGroupProvider } = useParent<
			CheckboxGroupProvider,
			CheckboxProvider
		>(CHECKBOX_GROUP_BIND_CHECKBOX_KEY)
    const { bindParent: bindForm, parentProvider: formProvider } = useParent<FormProvider, CheckboxProvider>(
      FORM_BIND_FORM_ITEM_KEY
    )
    useAtParentIndex(CHECKBOX_GROUP_COUNT_CHECKBOX_KEY)

    const value: Ref<any> = ref(false)
    const checked: ComputedRef<boolean> = computed(() => value.value === props.checkedValue)
    const checkedValue: ComputedRef<boolean> = computed(() => props.checkedValue)

    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()

    const validate = () => v(props.rules, props.modelValue)

    const validateWithTrigger = (trigger: ValidateTriggers) =>
      nextTick(() => vt(props.validateTrigger, trigger, props.rules, props.modelValue))

    const change = (changedValue: any) => {
      value.value = changedValue
      props['onUpdate:modelValue']?.(value.value)
      props.onChange?.(value.value)

      validateWithTrigger('onChange')

      changedValue === props.checkedValue
        ? checkboxGroupProvider?.onChecked(props.checkedValue)
        : checkboxGroupProvider?.onUnchecked(props.checkedValue)
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

      const maximum = checkboxGroupProvider
        ? checkboxGroupProvider.checkedCount.value >= Number(checkboxGroupProvider.max.value)
        : false

      if (!checked.value && maximum) {
        return
      }

      change(checked.value ? props.uncheckedValue : props.checkedValue)
    }

    const sync = (values: Array<any>) => {
      value.value = values.includes(props.checkedValue) ? props.checkedValue : props.uncheckedValue
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
      checked,
      errorMessage,
      checkboxGroupErrorMessage: checkboxGroupProvider?.errorMessage,
      formDisabled: formProvider?.disabled,
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
@import './checkbox';
</style>
