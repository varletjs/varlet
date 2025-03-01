<template>
  <div :class="n('wrap')">
    <div :class="classes(n(), n(`--${direction}`))">
      <template v-if="options.length">
        <var-checkbox
          v-for="option in options"
          :key="option[valueKey]"
          :checked-value="option[valueKey]"
          :disabled="option.disabled"
        >
          <template #default="{ checked }">
            <maybe-v-node :is="isFunction(option[labelKey]) ? option[labelKey](option, checked) : option[labelKey]" />
          </template>
        </var-checkbox>
      </template>
      <slot />
    </div>
    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, watch } from 'vue'
import { call, isFunction, uniq } from '@varlet/shared'
import VarCheckbox from '../checkbox'
import VarFormDetails from '../form-details'
import { useForm } from '../form/provide'
import { createNamespace, MaybeVNode, useValidation } from '../utils/components'
import { props, type CheckboxGroupValidateTrigger } from './props'
import { useCheckboxes, type CheckboxGroupProvider } from './provide'

const { name, n, classes } = createNamespace('checkbox-group')

export default defineComponent({
  name,
  components: { VarFormDetails, VarCheckbox, MaybeVNode },
  props,
  setup(props) {
    const max = computed(() => props.max)
    const checkedCount = computed(() => props.modelValue.length)
    const { length, checkboxes, bindCheckboxes } = useCheckboxes()
    const { bindForm } = useForm()
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()
    const checkboxGroupErrorMessage = computed(() => errorMessage.value)

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

    watch(() => props.modelValue, syncCheckboxes, { deep: true })

    watch(() => length.value, syncCheckboxes)

    bindCheckboxes(checkboxGroupProvider)
    call(bindForm, checkboxGroupProvider)

    function validateWithTrigger(trigger: CheckboxGroupValidateTrigger) {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    function change(changedModelValue: any) {
      call(props['onUpdate:modelValue'], changedModelValue)
      call(props.onChange, changedModelValue)
      validateWithTrigger('onChange')
    }

    function onChecked(changedValue: any) {
      const { modelValue } = props

      if (!modelValue.includes(changedValue)) {
        change([...modelValue, changedValue])
      }
    }

    function onUnchecked(changedValue: any) {
      const { modelValue } = props

      if (!modelValue.includes(changedValue)) {
        return
      }

      change(modelValue.filter((value) => value !== changedValue))
    }

    function syncCheckboxes() {
      checkboxes.forEach(({ sync }) => sync(props.modelValue))
    }

    // expose
    function checkAll() {
      const checkedValues: any[] = checkboxes.map(({ checkedValue }) => checkedValue.value)
      const changedModelValue: any[] = uniq(checkedValues)

      call(props['onUpdate:modelValue'], changedModelValue)

      return changedModelValue
    }

    // expose
    function inverseAll() {
      const checkedValues: any[] = checkboxes
        .filter(({ checked }) => !checked.value)
        .map(({ checkedValue }) => checkedValue.value)
      const changedModelValue: any[] = uniq(checkedValues)

      call(props['onUpdate:modelValue'], changedModelValue)

      return changedModelValue
    }

    // expose
    function reset() {
      call(props['onUpdate:modelValue'], [])
      resetValidation()
    }

    // expose
    function validate() {
      return v(props.rules, props.modelValue)
    }

    return {
      errorMessage,
      n,
      classes,
      checkAll,
      inverseAll,
      reset,
      validate,
      resetValidation,
      isFunction,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../form-details/formDetails';
@import '../ripple/ripple';
@import '../icon/icon';
@import '../hover-overlay/hoverOverlay';
@import '../checkbox/checkbox';
@import './checkboxGroup';
</style>
