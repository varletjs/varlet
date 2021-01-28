<template>
	<div class="var-radio-group__wrap">
		<div class="var-radio-group" :class="[`var-radio-group--${direction}`]" v-bind="$attrs">
			<slot />
		</div>

		<var-form-details class="var-radio-group__form-details" :error-message="errorMessage" />
	</div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, nextTick, watch } from 'vue'
import { props, ValidateTriggers } from './props'
import { useAtChildrenCounter, useChildren, useParent, useValidation } from '../utils/components'
import { RadioGroupProvider, RADIO_GROUP_BIND_RADIO_KEY, RADIO_GROUP_COUNT_RADIO_KEY } from './provide'
import { RadioProvider } from '../radio/provide'
import FormDetails from '../form-details'
import { FORM_BIND_FORM_ITEM_KEY, FormProvider } from '../form/provide'

export default defineComponent({
  name: 'VarRadioGroup',
  components: {
    [FormDetails.name]: FormDetails,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const { bindChildren: bindRadio, childProviders: radioProviders } = useChildren<RadioGroupProvider, RadioProvider>(
      RADIO_GROUP_BIND_RADIO_KEY
    )
    const { bindParent: bindForm } = useParent<FormProvider, RadioGroupProvider>(FORM_BIND_FORM_ITEM_KEY)
    const { length } = useAtChildrenCounter(RADIO_GROUP_COUNT_RADIO_KEY)

    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()
    const errorMessageComputed: ComputedRef<string> = computed(() => errorMessage.value)

    const validate = () => v(props.rules, props.modelValue)

    const validateWithTrigger = (trigger: ValidateTriggers) =>
      nextTick(() => vt(props.validateTrigger, trigger, props.rules, props.modelValue))

    const syncAllRadio = () => {
      radioProviders.forEach(({ sync }) => sync(props.modelValue))
    }

    const onToggle = (changedValue: any) => {
      props['onUpdate:modelValue']?.(changedValue)
      props.onChange?.(changedValue)

      validateWithTrigger('onChange')
    }

    const reset = () => {
      props['onUpdate:modelValue']?.(undefined)
      resetValidation()
    }

    watch(() => props.modelValue, syncAllRadio)

    watch(() => length.value, syncAllRadio)

    const radioGroupProvider: RadioGroupProvider = {
      onToggle,
      validate,
      reset,
      resetValidation,
      errorMessage: errorMessageComputed,
    }

    bindRadio(radioGroupProvider)
    bindForm?.(radioGroupProvider)

    return {
      errorMessage,
      reset,
      validate,
      resetValidation,
    }
  },
})
</script>

<style lang="less">
@import './radioGroup';
</style>
