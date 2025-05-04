<template>
  <div :class="n()">
    <div :class="n('container')">
      <slot />
    </div>

    <var-form-details :error-message="errorMessage" @mousedown.stop>
      <template v-if="$slots['extra-message']" #extra-message>
        <slot name="extra-message" />
      </template>
    </var-form-details>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
import { call } from '@varlet/shared'
import { useForm } from '../form/provide'
import { createNamespace, useValidation } from '../utils/components'
import { props, type OptInputValidateTrigger } from './props'
import { useInputOtpItems, type InputOtpProvider } from './provide'

const { name, n } = createNamespace('input-otp')

export default defineComponent({
  name,
  props,
  setup(props, { emit }) {
    const { length, bindInputOtpItem } = useInputOtpItems()
    const activeInput = ref()

    const model = computed({
      get: () => props.modelValue,
      set: (value) => {
        call(props.onChange, value)
        call(props['onUpdate:modelValue'], value)
        validateWithTrigger('onChange')
      },
    })

    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()

    const inputOtpProvider: InputOtpProvider = {
      parentModel: model,
      activeInput,
      length,
      disabled: ref(props.disabled),
      readonly: ref(props.readonly),
      variant: ref(props.variant),
      size: ref(props.size),
      textColor: ref(props.textColor),
      focusColor: ref(props.focusColor),
      blurColor: ref(props.blurColor),
      autofocus: ref(props.autofocus),
      onItemChange,
      onItemFocus,
      onItemBlur,
      reset,
      validate,
      resetValidation,
    }

    bindInputOtpItem(inputOtpProvider)

    const { bindForm } = useForm()
    call(bindForm, inputOtpProvider)

    function validateWithTrigger(trigger: OptInputValidateTrigger) {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    function onItemChange(index: number, value?: string) {
      if (value == null) {
        activeInput.value = index
      } else {
        const currentValue = model.value || ''
        if (index < length.value) {
          activeInput.value = value ? index + 1 : index - 1
          emit('update:modelValue', currentValue.slice(0, index) + value + currentValue.slice(index + 1))
        } else {
          emit('update:modelValue', currentValue + value)
        }
      }
    }

    function onItemFocus(index: number) {
      call(props.onFocus, index)
    }

    function onItemBlur(index: number) {
      call(props.onBlur, index)
    }

    // expose
    function reset() {
      call(props['onUpdate:modelValue'], '')
      resetValidation()
    }

    // expose
    function validate() {
      return v(props.rules, props.modelValue)
    }

    return {
      length,
      activeInput,
      errorMessage,
      n,
      reset,
      validate,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../form-details/formDetails';
@import './inputOtp';
</style>
