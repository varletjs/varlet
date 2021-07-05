<template>
  <div class="var-radio-group__wrap">
    <div class="var-radio-group" :class="[`var-radio-group--${direction}`]">
      <slot />
    </div>

    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import FormDetails from '../form-details'
import { computed, defineComponent, nextTick, watch } from 'vue'
import { props } from './props'
import { useValidation } from '../utils/components'
import { useRadios } from './provide'
import { useForm } from '../form/provide'
import type { ComputedRef } from 'vue'
import type { ValidateTriggers } from './props'
import type { RadioGroupProvider } from './provide'

export default defineComponent({
  name: 'VarRadioGroup',
  components: {
    [FormDetails.name]: FormDetails,
  },
  props,
  setup(props) {
    const { length, radios, bindRadios } = useRadios()
    const { bindForm } = useForm()
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()
    const radioGroupErrorMessage: ComputedRef<string> = computed(() => errorMessage.value)

    const validateWithTrigger = (trigger: ValidateTriggers) => {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    const syncRadios = () => radios.forEach(({ sync }) => sync(props.modelValue))

    const onToggle = (changedValue: any) => {
      props['onUpdate:modelValue']?.(changedValue)
      props.onChange?.(changedValue)
      validateWithTrigger('onChange')
    }

    // expose
    const validate = () => v(props.rules, props.modelValue)

    // expose
    const reset = () => {
      props['onUpdate:modelValue']?.(undefined)
      resetValidation()
    }

    watch(() => props.modelValue, syncRadios)

    watch(() => length.value, syncRadios)

    const radioGroupProvider: RadioGroupProvider = {
      onToggle,
      validate,
      reset,
      resetValidation,
      errorMessage: radioGroupErrorMessage,
    }

    bindForm?.(radioGroupProvider)
    bindRadios(radioGroupProvider)

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
@import '../form-details/formDetails';
@import './radioGroup';
</style>
