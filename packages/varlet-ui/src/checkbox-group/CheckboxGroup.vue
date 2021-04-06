<template>
  <div class="var-checkbox-group__wrap" v-bind="$attrs">
    <div class="var-checkbox-group" :class="[`var-checkbox-group--${direction}`]">
      <slot />
    </div>
    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import FormDetails from '../form-details'
import { defineComponent, computed, ComputedRef, watch, nextTick } from 'vue'
import { props, ValidateTriggers } from './props'
import { useValidation } from '../utils/components'
import { CheckboxGroupProvider, useCheckboxes } from './provide'
import { useForm } from '../form/provide'
import { uniq } from '../utils/shared'

export default defineComponent({
  name: 'VarCheckboxGroup',
  components: {
    [FormDetails.name]: FormDetails,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const max: ComputedRef<number | string | undefined> = computed(() => props.max)
    const checkedCount: ComputedRef<number> = computed(() => props.modelValue.length)
    const { length, checkboxes, bindCheckboxes } = useCheckboxes()
    const { bindForm } = useForm()
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()
    const checkboxGroupErrorMessage: ComputedRef<string> = computed(() => errorMessage.value)

    const validateWithTrigger = (trigger: ValidateTriggers) => {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    const change = (changedModelValue: any) => {
      props['onUpdate:modelValue']?.(changedModelValue)
      props.onChange?.(changedModelValue)
      validateWithTrigger('onChange')
    }

    const onChecked = (changedValue: any) => {
      const { modelValue } = props

      if (!modelValue.includes(changedValue)) {
        change([...modelValue, changedValue])
      }
    }

    const onUnchecked = (changedValue: any) => {
      const { modelValue } = props

      if (!modelValue.includes(changedValue)) {
        return
      }

      change(modelValue.filter((value) => value !== changedValue))
    }

    const syncCheckboxes = () => checkboxes.forEach(({ sync }) => sync(props.modelValue))

    // expose
    const checkAll = () => {
      const checkedValues: any[] = checkboxes.map(({ checkedValue }) => checkedValue.value)
      const changedModelValue: any[] = uniq(checkedValues)

      props['onUpdate:modelValue']?.(changedModelValue)

      return changedModelValue
    }

    // expose
    const inverseAll = () => {
      const checkedValues: any[] = checkboxes
        .filter(({ checked }) => !checked.value)
        .map(({ checkedValue }) => checkedValue.value)

      const changedModelValue: any[] = uniq(checkedValues)

      props['onUpdate:modelValue']?.(changedModelValue)

      return changedModelValue
    }

    // expose
    const reset = () => {
      props['onUpdate:modelValue']?.([])
      resetValidation()
    }

    // expose
    const validate = () => v(props.rules, props.modelValue)

    watch(() => props.modelValue, syncCheckboxes, { deep: true })

    watch(() => length.value, syncCheckboxes)

    const checkboxGroupProvider: CheckboxGroupProvider = {
      max,
      checkedCount,
      onChecked,
      onUnchecked,
      validate,
      resetValidation,
      reset,
      errorMessage: checkboxGroupErrorMessage,
    }

    bindCheckboxes(checkboxGroupProvider)
    bindForm?.(checkboxGroupProvider)

    return {
      errorMessage,
      checkAll,
      inverseAll,
      reset,
      validate,
      resetValidation,
    }
  },
})
</script>

<style lang="less">
@import '../form-details';
@import './checkboxGroup';
</style>
