<template>
  <div :class="classes(n())">
    <var-input-box
      v-bind="{
        value: modelValue,
        id,
        size,
        variant,
        placeholder,
        line,
        hint,
        textColor,
        focusColor,
        blurColor,
        isFocus,
        errorMessage,
        formDisabled,
        disabled,
        clearable,
        onClick: handleClick,
        onClear: handleClear,
      }"
    >
      <template #prepend-icon>
        <slot name="prepend-icon" />
      </template>

      <input :class="n('autocomplete')" v-if="type === 'password'" />
      <textarea
        :class="
          classes(
            n('input'),
            n('--textarea'),
            [formDisabled || disabled, n('--disabled')],
            [errorMessage, n('--caret-error')]
          )
        "
        ref="el"
        autocomplete="new-password"
        :id="id"
        :disabled="formDisabled || disabled || formReadonly || readonly"
        :type="type"
        :value="modelValue"
        :maxlength="maxlength"
        :rows="rows"
        :style="{
          color: textColor,
          caretColor: !errorMessage ? focusColor : undefined,
          resize: resize ? 'vertical' : 'none',
        }"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @change="handleChange"
        @touchstart="handleTouchstart"
        v-if="textarea"
      >
      </textarea>
      <input
        :class="classes(n('input'), [formDisabled || disabled, n('--disabled')], [errorMessage, n('--caret-error')])"
        ref="el"
        autocomplete="new-password"
        :id="id"
        :disabled="formDisabled || disabled || formReadonly || readonly"
        :type="type"
        :value="modelValue"
        :maxlength="maxlength"
        :style="{
          color: textColor,
          caretColor: !errorMessage ? focusColor : undefined,
        }"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @change="handleChange"
        @touchstart="handleTouchstart"
        v-else
      />

      <template #append-icon>
        <slot name="append-icon" />
      </template>
    </var-input-box>

    <var-form-details :error-message="errorMessage" :extra-message="maxlengthText" />
  </div>
</template>

<script lang="ts">
import VarFormDetails from '../form-details'
import VarInputBox from './InputBox.vue'
import { defineComponent, getCurrentInstance, ref, computed, nextTick, onMounted } from 'vue'
import { props } from './props'
import { isEmpty, toNumber } from '@varlet/shared'
import { useValidation, createNamespace, call } from '../utils/components'
import { useForm } from '../form/provide'
import type { Ref, ComputedRef } from 'vue'
import type { InputValidateTrigger } from './props'
import type { InputProvider } from './provide'

const { n, classes } = createNamespace('input')

export default defineComponent({
  name: 'VarInput',
  components: {
    VarFormDetails,
    VarInputBox,
  },
  props,
  setup(props) {
    const id: Ref<string> = ref(`var-input-${getCurrentInstance()!.uid}`)
    const el: Ref<HTMLInputElement | null> = ref(null)
    const isFocus: Ref<boolean> = ref(false)
    const maxlengthText: ComputedRef<string> = computed(() => {
      const { maxlength, modelValue } = props

      if (!maxlength) {
        return ''
      }

      if (isEmpty(modelValue)) {
        return `0 / ${maxlength}`
      }

      return `${String(modelValue).length}/${maxlength}`
    })
    const { bindForm, form } = useForm()
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()

    const validateWithTrigger = (trigger: InputValidateTrigger) => {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    const handleFocus = (e: FocusEvent) => {
      isFocus.value = true

      call(props.onFocus, e)
      validateWithTrigger('onFocus')
    }

    const handleBlur = (e: FocusEvent) => {
      isFocus.value = false

      call(props.onBlur, e)
      validateWithTrigger('onBlur')
    }

    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement
      let { value } = target

      value = withMaxlength(withTrim(value))
      target.value = value

      call(props['onUpdate:modelValue'], value)
      call(props.onInput, value, e)
      validateWithTrigger('onInput')
    }

    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      let { value } = target

      value = withMaxlength(withTrim(value))
      target.value = value

      call(props.onChange, value, e)
      validateWithTrigger('onChange')
    }

    const handleClear = () => {
      const { disabled, readonly, clearable, onClear } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly || !clearable) {
        return
      }

      call(props['onUpdate:modelValue'], '')
      call(onClear, '')
      validateWithTrigger('onClear')
    }

    const handleClick = (e: Event) => {
      const { disabled, onClick } = props

      if (form?.disabled.value || disabled) {
        return
      }

      call(onClick, e)
      validateWithTrigger('onClick')
    }

    const withTrim = (value: string) => (props.modelModifiers.trim ? value.trim() : value)

    const withMaxlength = (value: string) => (props.maxlength ? value.slice(0, toNumber(props.maxlength)) : value)

    const handleTouchstart = (e: Event) => {
      const { disabled, readonly } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      e.stopPropagation()
    }

    // expose
    const reset = () => {
      call(props['onUpdate:modelValue'], '')
      resetValidation()
    }

    // expose
    const validate = () => v(props.rules, props.modelValue)

    // expose
    const focus = () => {
      ;(el.value as HTMLInputElement)?.focus()
    }

    // expose
    const blur = () => {
      ;(el.value as HTMLInputElement).blur()
    }

    const inputProvider: InputProvider = {
      reset,
      validate,
      resetValidation,
    }

    call(bindForm, inputProvider)

    onMounted(() => {
      if (props.autofocus) {
        focus()
      }
    })

    return {
      el,
      id,
      isFocus,
      errorMessage,
      maxlengthText,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      n,
      classes,
      isEmpty,
      handleFocus,
      handleBlur,
      handleInput,
      handleChange,
      handleClear,
      handleClick,
      handleTouchstart,
      validate,
      resetValidation,
      reset,
      focus,
      blur,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../form-details/formDetails';
@import './input';
</style>
