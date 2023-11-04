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
import { computed, defineComponent, nextTick, watch } from 'vue'
import { props, type ValidateTriggers } from './props'
import { useValidation, createNamespace } from '../utils/components'
import { useRadios, type RadioGroupProvider } from './provide'
import { useForm } from '../form/provide'
import { call } from '@varlet/shared'

const { name, n, classes } = createNamespace('radio-group')

export default defineComponent({
  name,
  components: { VarFormDetails },
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
    const radioGroupErrorMessage = computed(() => errorMessage.value)

    const radioGroupProvider: RadioGroupProvider = {
      onToggle,
      validate,
      reset,
      resetValidation,
      errorMessage: radioGroupErrorMessage,
    }

    watch(() => props.modelValue, syncRadios)

    watch(() => length.value, syncRadios)

    call(bindForm, radioGroupProvider)

    bindRadios(radioGroupProvider)

    function validateWithTrigger(trigger: ValidateTriggers) {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    function syncRadios() {
      return radios.forEach(({ sync }) => sync(props.modelValue))
    }

    function onToggle(changedValue: any) {
      call(props['onUpdate:modelValue'], changedValue)
      call(props.onChange, changedValue)
      validateWithTrigger('onChange')
    }

    // expose
    function validate() {
      return v(props.rules, props.modelValue)
    }

    // expose
    function reset() {
      call(props['onUpdate:modelValue'], undefined)
      resetValidation()
    }

    return {
      errorMessage,
      n,
      classes,
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
@import './radioGroup';
</style>
