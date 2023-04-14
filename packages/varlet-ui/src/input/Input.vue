<template>
  <div :class="classes(n(), n('$--box'))" @mousedown="handleMousedown">
    <var-field-decorator
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
        textarea,
        cursor,
        composing: isComposing,
        alwaysCustomPlaceholder: false,
        onClick: handleClick,
        onClear: handleClear,
      }"
    >
      <template #prepend-icon>
        <slot name="prepend-icon" />
      </template>

      <input
        :class="n('autocomplete')"
        :placeholder="!hint ? placeholder : undefined"
        v-if="type === 'password'"
        :style="{
          '--input-placeholder-color': placeholderColor,
        }"
      />
      <textarea
        :class="
          classes(
            n('input'),
            n('--textarea'),
            [formDisabled || disabled, n('--disabled')],
            [errorMessage, n('--error')],
            [errorMessage, n('--caret-error')]
          )
        "
        ref="el"
        autocomplete="new-password"
        :id="id"
        :disabled="formDisabled || disabled || formReadonly || readonly"
        :type="type"
        :value="modelValue"
        :placeholder="!hint ? placeholder : undefined"
        :maxlength="maxlength"
        :rows="rows"
        :style="{
          color: !errorMessage ? textColor : undefined,
          caretColor: !errorMessage ? focusColor : undefined,
          resize: resize ? 'vertical' : 'none',
          '--input-placeholder-color': placeholderColor,
        }"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @change="handleChange"
        @touchstart="handleTouchstart"
        @compositionstart="handleCompositionStart"
        @compositionend="handleCompositionEnd"
        v-if="textarea"
      >
      </textarea>
      <input
        :class="
          classes(
            n('input'),
            [formDisabled || disabled, n('--disabled')],
            [errorMessage, n('--error')],
            [errorMessage, n('--caret-error')]
          )
        "
        ref="el"
        autocomplete="new-password"
        :id="id"
        :disabled="formDisabled || disabled || formReadonly || readonly"
        :type="type"
        :value="modelValue"
        :placeholder="!hint ? placeholder : undefined"
        :maxlength="maxlength"
        :style="{
          color: !errorMessage ? textColor : undefined,
          caretColor: !errorMessage ? focusColor : undefined,
          '--input-placeholder-color': placeholderColor,
        }"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @change="handleChange"
        @touchstart="handleTouchstart"
        @compositionstart="handleCompositionStart"
        @compositionend="handleCompositionEnd"
        v-else
      />

      <template #append-icon>
        <slot name="append-icon" />
      </template>
    </var-field-decorator>

    <var-form-details :error-message="errorMessage" :extra-message="maxlengthText" @mousedown.stop />
  </div>
</template>

<script lang="ts">
import VarFormDetails from '../form-details'
import VarFieldDecorator from '../field-decorator/FieldDecorator.vue'
import { defineComponent, getCurrentInstance, ref, computed, nextTick, type Ref, type ComputedRef } from 'vue'
import { props, type InputType, type InputValidateTrigger } from './props'
import { isEmpty, toNumber } from '@varlet/shared'
import { useValidation, createNamespace, call } from '../utils/components'
import { useForm } from '../form/provide'
import { useMounted } from '@varlet/use'
import { type InputProvider } from './provide'

const { n, classes } = createNamespace('input')

export default defineComponent({
  name: 'VarInput',
  components: {
    VarFormDetails,
    VarFieldDecorator,
  },
  props,
  setup(props) {
    const id: Ref<string> = ref(`var-input-${getCurrentInstance()!.uid}`)
    const el: Ref<HTMLInputElement | null> = ref(null)
    const isFocus: Ref<boolean> = ref(false)
    const isComposing: Ref<boolean> = ref(false)
    const type: ComputedRef<InputType> = computed(() => {
      if (props.type === 'number') {
        return 'text'
      }

      return props.type
    })
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
    const cursor: ComputedRef<string> = computed(() => (props.disabled || props.readonly ? '' : 'text'))
    const placeholderColor: ComputedRef<string | undefined> = computed(() => {
      const { hint, blurColor, focusColor } = props

      if (hint) {
        return undefined
      }

      if (errorMessage.value) {
        return 'var(--field-decorator-error-color)'
      }

      if (isFocus.value) {
        return focusColor || 'var(--field-decorator-focus-color)'
      }

      return blurColor || 'var(--field-decorator-blur-color)'
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

    const updateValue = (e: Event) => {
      const target = e.target as HTMLInputElement

      let { value } = target

      if (props.type === 'number') {
        value = formatNumber(value)
      }

      return withMaxlength(withTrim(value))
    }

    const handleCompositionStart = () => {
      isComposing.value = true
    }

    const handleCompositionEnd = (e: Event) => {
      if (!isComposing.value) {
        return
      }

      isComposing.value = false
      e.target!.dispatchEvent(new Event('input'))
    }

    const handleInput = (e: Event) => {
      if (isComposing.value) {
        return
      }

      const value = updateValue(e)

      call(props['onUpdate:modelValue'], value)
      call(props.onInput, value, e)
      validateWithTrigger('onInput')
    }

    const handleChange = (e: Event) => {
      const value = updateValue(e)

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

    const formatNumber = (value: string) => {
      const minusIndex = value.indexOf('-')
      const dotIndex = value.indexOf('.')

      if (minusIndex > -1) {
        value = minusIndex === 0 ? '-' + value.replace(/-/g, '') : value.replace(/-/g, '')
      }

      if (dotIndex > -1) {
        value = value.slice(0, dotIndex + 1) + value.slice(dotIndex).replace(/\./g, '')
      }

      return value.replace(/[^-0-9.]/g, '')
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

    function handleMousedown(e: MouseEvent) {
      const { disabled } = props

      if (form?.disabled.value || disabled || e.target === el.value) {
        return
      }

      focus()
      e.preventDefault()
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

    useMounted(() => {
      if (props.autofocus) {
        focus()
      }
    })

    return {
      el,
      id,
      isFocus,
      isComposing,
      errorMessage,
      placeholderColor,
      type,
      cursor,
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
      handleCompositionStart,
      handleCompositionEnd,
      handleMousedown,
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
@import '../icon/icon';
@import '../field-decorator/fieldDecorator';
@import './input';
</style>
