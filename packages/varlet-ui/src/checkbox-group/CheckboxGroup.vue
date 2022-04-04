<template>
  <div :class="n('wrap')">
    <div :class="classes(n(), n(`--${direction}`))">
      <slot />
    </div>
    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import VarFormDetails from '../form-details'
import { defineComponent, computed, watch, nextTick } from 'vue'
import { props } from './props'
import { useValidation, createNamespace, call } from '../utils/components'
import { useCheckboxes } from './provide'
import { useForm } from '../form/provide'
import { uniq } from '../utils/shared'
import type { ComputedRef } from 'vue'
import type { ValidateTriggers } from './props'
import type { CheckboxGroupProvider } from './provide'

const { n, classes } = createNamespace('checkbox-group')
export default defineComponent({
  name: 'VarCheckboxGroup',
  components: { VarFormDetails },
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
      call(props['onUpdate:modelValue'], changedModelValue)
      call(props.onChange, changedModelValue)
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

    const resetWithAnimation = () => {
      checkboxes.forEach((checkbox) => checkbox.resetWithAnimation())
    }

    // expose
    const checkAll = () => {
      const checkedValues: any[] = checkboxes.map(({ checkedValue }) => checkedValue.value)
      const changedModelValue: any[] = uniq(checkedValues)

      resetWithAnimation()

      call(props['onUpdate:modelValue'], changedModelValue)

      return changedModelValue
    }

    // expose
    const inverseAll = () => {
      const checkedValues: any[] = checkboxes
        .filter(({ checked }) => !checked.value)
        .map(({ checkedValue }) => checkedValue.value)
      const changedModelValue: any[] = uniq(checkedValues)

      resetWithAnimation()

      call(props['onUpdate:modelValue'], changedModelValue)

      return changedModelValue
    }

    // expose
    const reset = () => {
      call(props['onUpdate:modelValue'], [])
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
    call(bindForm, checkboxGroupProvider)

    return {
      errorMessage,
      n,
      classes,
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
@import '../styles/common';
@import '../form-details/formDetails';
@import './checkboxGroup';
</style>
