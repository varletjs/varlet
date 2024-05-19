<template>
  <div :class="n('wrap')">
    <div :class="classes(n(), n(`--${direction}`))">
      <template v-if="checkboxOptions.length">
        <var-checkbox
          v-for="option in checkboxOptions"
          :key="option.value.toString()"
          :checked-value="option.value"
          :disabled="option.disabled"
        >
          <slot name="label" :option="option">
            {{ isFunction(option.label) ? option.label() : option.label }}
          </slot>
        </var-checkbox>
      </template>
      <slot v-else />
    </div>
    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import VarFormDetails from '../form-details'
import VarCheckbox from '../checkbox'
import { defineComponent, computed, watch, nextTick } from 'vue'
import { props, type CheckboxGroupValidateTrigger, CheckboxGroupOption } from './props'
import { useValidation, createNamespace } from '../utils/components'
import { useCheckboxes, type CheckboxGroupProvider } from './provide'
import { useForm } from '../form/provide'
import { uniq, call, isArray, isFunction, isNumber, isString } from '@varlet/shared'

const { name, n, classes } = createNamespace('checkbox-group')

export default defineComponent({
  name,
  components: { VarFormDetails, VarCheckbox },
  props,
  setup(props) {
    const max = computed(() => props.max)
    const checkedCount = computed(() => props.modelValue.length)
    const checkboxOptions = computed(() => {
      const options = isArray(props.options) ? props.options : []
      return options.map((option) => {
        if (isNumber(option) || isString(option)) {
          return {
            label: option,
            value: option,
          } as CheckboxGroupOption
        }
        return option
      })
    })
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

    function resetWithAnimation() {
      checkboxes.forEach((checkbox) => checkbox.resetWithAnimation())
    }

    // expose
    function checkAll() {
      const checkedValues: any[] = checkboxes.map(({ checkedValue }) => checkedValue.value)
      const changedModelValue: any[] = uniq(checkedValues)

      resetWithAnimation()

      call(props['onUpdate:modelValue'], changedModelValue)

      return changedModelValue
    }

    // expose
    function inverseAll() {
      const checkedValues: any[] = checkboxes
        .filter(({ checked }) => !checked.value)
        .map(({ checkedValue }) => checkedValue.value)
      const changedModelValue: any[] = uniq(checkedValues)

      resetWithAnimation()

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
      checkboxOptions,
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
@import './checkboxGroup';
</style>
