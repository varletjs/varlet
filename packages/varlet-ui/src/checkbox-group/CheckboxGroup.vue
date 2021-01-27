<template>
	<div class="var-checkbox-group__wrap">
		<div class="var-checkbox-group" :class="[`var-checkbox-group--${direction}`]" v-bind="$attrs">
			<slot />
		</div>
		<var-form-details class="var-checkbox-group__form-details" :error-message="errorMessage" />
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, watch, nextTick } from 'vue'
import { props, ValidateTriggers } from './props'
import { useAtChildrenCounter, useChildren, useParent, useValidation } from '../utils/components'
import { CHECKBOX_GROUP_BIND_CHECKBOX_KEY, CHECKBOX_GROUP_COUNT_CHECKBOX_KEY, CheckboxGroupProvider } from './provide'
import { CheckboxProvider } from '../checkbox/provide'
import { FORM_BIND_FORM_ITEM_KEY, FormProvider } from '../form/provide'
import FormDetails from '../form-details'

export default defineComponent({
  name: 'VarCheckboxGroup',
  components: {
    [FormDetails.name]: FormDetails,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const { bindChildren: bindCheckbox, childProviders: checkboxProviders } = useChildren<
			CheckboxGroupProvider,
			CheckboxProvider
		>(CHECKBOX_GROUP_BIND_CHECKBOX_KEY)
    const { bindParent: bindForm } = useParent<FormProvider, CheckboxGroupProvider>(FORM_BIND_FORM_ITEM_KEY)
    const { length } = useAtChildrenCounter(CHECKBOX_GROUP_COUNT_CHECKBOX_KEY)

    const checkedCount: ComputedRef<number> = computed(() => props.modelValue.length)
    const max: ComputedRef<number | string | undefined> = computed(() => props.max)

    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()
    const errorMessageComputed: ComputedRef<string> = computed(() => errorMessage.value)

    const validate = () => v(props.rules, props.modelValue)

    const validateWithTrigger = (trigger: ValidateTriggers) =>
      nextTick(() => vt(props.validateTrigger, trigger, props.rules, props.modelValue))

    const change = (changedModelValue: any) => {
      props['onUpdate:modelValue']?.(changedModelValue)
      props.onChange?.(changedModelValue)

      validateWithTrigger('onChange')
    }

    const onChecked = (changedValue: any) => {
      if (!props.modelValue.includes(changedValue)) {
        change([...props.modelValue, changedValue])
      }
    }

    const onUnchecked = (changedValue: any) => {
      if (!props.modelValue.includes(changedValue)) {
        return
      }

      change(props.modelValue.filter((value) => value !== changedValue))
    }

    const syncAllCheckbox = () => {
      checkboxProviders.forEach(({ sync }) => sync(props.modelValue))
    }

    const checkAll = () => {
      const checkedValues: any[] = checkboxProviders.map(({ checkedValue }) => checkedValue.value)
      const changedModelValue: any[] = [...new Set(checkedValues)]

      props['onUpdate:modelValue']?.(changedModelValue)

      return changedModelValue
    }

    const uncheckAll = () => {
      const changedModelValue: any[] = []

      props['onUpdate:modelValue']?.(changedModelValue)

      return changedModelValue
    }

    const inverseAll = () => {
      const checkedValues: any[] = checkboxProviders
        .filter(({ checked }) => !checked.value)
        .map(({ checkedValue }) => checkedValue.value)

      const changedModelValue: any[] = [...new Set(checkedValues)]

      props['onUpdate:modelValue']?.(changedModelValue)

      return changedModelValue
    }

    const reset = () => {
      props['onUpdate:modelValue']?.([])
      resetValidation()
    }

    watch(() => props.modelValue, syncAllCheckbox, { deep: true })

    watch(() => length.value, syncAllCheckbox)

    const checkboxGroupProvider: CheckboxGroupProvider = {
      checkedCount,
      max,
      onChecked,
      onUnchecked,
      validate,
      resetValidation,
      reset,
      errorMessage: errorMessageComputed,
    }

    bindCheckbox(checkboxGroupProvider)
    bindForm?.(checkboxGroupProvider)

    return {
      errorMessage,
      checkAll,
      uncheckAll,
      inverseAll,
      reset,
      validate,
      resetValidation,
    }
  },
})
</script>

<style lang="less">
@import './checkboxGroup';
</style>
