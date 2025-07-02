<template>
  <div :class="classes(n(), n('$--box'))" @mousedown="handleMousedown">
    <var-field-decorator
      v-bind="{
        value: modelValue,
        id,
        size,
        variant,
        placeholder,
        ariaLabel,
        line,
        hint,
        textColor,
        focusColor,
        blurColor,
        isFocusing: isForceFocusingEffect != null ? isForceFocusingEffect : isFocusing,
        isError: isForceErrorEffect != null ? isForceErrorEffect : !!errorMessage,
        formDisabled,
        disabled,
        clearable,
        cursor,
        composing: isComposing,
        hintCenter: !textarea,
        onClick: handleClick,
        onClear: handleClear,
      }"
    >
      <template v-if="$slots['prepend-icon']" #prepend-icon>
        <slot name="prepend-icon" />
      </template>

      <input
        v-if="normalizedType === 'password'"
        tabindex="-1"
        :aria-label="ariaLabel"
        :class="n('autocomplete')"
        :placeholder="!hint ? placeholder : undefined"
        :style="{
          '--input-placeholder-color': placeholderColor,
        }"
        :enterkeyhint="enterkeyhint"
      />
      <textarea
        v-if="textarea"
        :id="id"
        ref="el"
        :aria-label="ariaLabel"
        :class="
          classes(
            n('input'),
            n('--textarea'),
            [formDisabled || disabled, n('--disabled')],
            [errorMessage, n('--error')],
            [errorMessage, n('--caret-error')],
          )
        "
        :autocomplete="autocomplete ? autocomplete : 'new-password'"
        :disabled="formDisabled || disabled"
        :readonly="formReadonly || readonly"
        :type="normalizedType"
        :value="modelValue"
        :placeholder="!hint ? placeholder : undefined"
        :maxlength="maxlength"
        :rows="rows"
        :enterkeyhint="enterkeyhint"
        :inputmode="inputmode"
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
        @compositionstart="handleCompositionStart"
        @compositionend="handleCompositionEnd"
      />
      <input
        v-else
        :id="id"
        ref="el"
        :aria-label="ariaLabel"
        :class="
          classes(
            n('input'),
            [formDisabled || disabled, n('--disabled')],
            [errorMessage, n('--error')],
            [errorMessage, n('--caret-error')],
          )
        "
        :autocomplete="autocomplete ? autocomplete : 'new-password'"
        :disabled="formDisabled || disabled"
        :readonly="formReadonly || readonly"
        :type="normalizedType"
        :value="modelValue"
        :placeholder="!hint ? placeholder : undefined"
        :maxlength="maxlength"
        :enterkeyhint="enterkeyhint"
        :inputmode="inputmode"
        :style="{
          color: !errorMessage ? textColor : undefined,
          caretColor: !errorMessage ? focusColor : undefined,
          '--input-placeholder-color': placeholderColor,
        }"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @change="handleChange"
        @compositionstart="handleCompositionStart"
        @compositionend="handleCompositionEnd"
      />

      <template #clear-icon="{ clear }">
        <slot name="clear-icon" :clear="clear" />
      </template>

      <template #append-icon>
        <slot name="append-icon" />
      </template>
    </var-field-decorator>

    <var-form-details v-if="isShowFormDetails" :error-message="errorMessage" :extra-message="maxlengthText">
      <template v-if="$slots['extra-message']" #extra-message>
        <slot name="extra-message" />
      </template>
    </var-form-details>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
import { call, isEmpty, preventDefault, toNumber } from '@varlet/shared'
import { onSmartMounted, useClientId } from '@varlet/use'
import VarFieldDecorator from '../field-decorator'
import VarFormDetails from '../form-details'
import { useForm } from '../form/provide'
import { createNamespace, useValidation } from '../utils/components'
import { props, type InputType, type InputValidateTrigger } from './props'
import { type InputProvider } from './provide'

const { name, n, classes } = createNamespace('input')

export default defineComponent({
  name,
  components: {
    VarFormDetails,
    VarFieldDecorator,
  },
  props,
  setup(props) {
    const id = useClientId()
    const el = ref<HTMLInputElement | null>(null)
    const isFocusing = ref(false)
    const isComposing = ref(false)
    const { bindForm, form } = useForm()
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()
    const cursor = computed(() => (props.disabled || props.readonly ? '' : 'text'))
    const normalizedType = computed<InputType>(() => {
      if (props.type === 'number') {
        return 'text'
      }

      return props.type
    })
    const maxlengthText = computed(() => {
      const { maxlength, modelValue } = props

      if (!maxlength) {
        return ''
      }

      if (isEmpty(modelValue)) {
        return `0 / ${maxlength}`
      }

      return `${String(modelValue).length}/${maxlength}`
    })
    const placeholderColor = computed(() => {
      const { hint, blurColor, focusColor } = props

      if (hint) {
        return undefined
      }

      if (errorMessage.value) {
        return 'var(--field-decorator-error-color)'
      }

      if (isFocusing.value) {
        return focusColor || 'var(--field-decorator-focus-color)'
      }

      return blurColor || 'var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))'
    })

    const inputProvider: InputProvider = {
      reset,
      validate,
      resetValidation,
    }

    call(bindForm, inputProvider)

    onSmartMounted(() => {
      if (props.autofocus) {
        focus()
      }
    })

    function validateWithTrigger(trigger: InputValidateTrigger) {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    function handleFocus(e: FocusEvent) {
      isFocusing.value = true

      call(props.onFocus, e)
      validateWithTrigger('onFocus')
    }

    function handleBlur(e: FocusEvent) {
      isFocusing.value = false

      call(props.onBlur, e)
      validateWithTrigger('onBlur')
    }

    function updateValue(e: Event) {
      const target = e.target as HTMLInputElement

      let { value } = target

      if (props.type === 'number') {
        value = formatNumber(value)
      }

      // avoid vue cannot render when the target is the same with props.modelValue
      const targetValue = withMaxlength(value)
      if (targetValue === props.modelValue) {
        target.value = targetValue
      }

      return targetValue
    }

    function handleCompositionStart() {
      isComposing.value = true
    }

    function handleCompositionEnd(e: Event) {
      if (!isComposing.value) {
        return
      }

      isComposing.value = false
      e.target!.dispatchEvent(new Event('input'))
    }

    function handleInput(e: Event) {
      if (isComposing.value) {
        return
      }

      const value = updateValue(e)

      call(props['onUpdate:modelValue'], value)
      call(props.onInput, value, e)
      validateWithTrigger('onInput')
    }

    function handleChange(e: Event) {
      const value = withTrim(updateValue(e))

      if (props.modelModifiers.trim) {
        call(props['onUpdate:modelValue'], value)
      }

      call(props.onChange, value, e)
      validateWithTrigger('onChange')
    }

    function handleClear() {
      const { disabled, readonly, clearable, onClear } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly || !clearable) {
        return
      }

      call(props['onUpdate:modelValue'], '')
      call(onClear, '')
      validateWithTrigger('onClear')
    }

    function handleClick(e: Event) {
      const { disabled, onClick } = props

      if (form?.disabled.value || disabled) {
        return
      }

      call(onClick, e)
      validateWithTrigger('onClick')
    }

    function formatNumber(value: string) {
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

    function withTrim(value: string) {
      return props.modelModifiers.trim ? value.trim() : value
    }

    function withMaxlength(value: string) {
      return props.maxlength ? value.slice(0, toNumber(props.maxlength)) : value
    }

    function handleMousedown(e: MouseEvent) {
      const { disabled } = props

      if (form?.disabled.value || disabled || e.target === el.value) {
        return
      }

      focus()
      preventDefault(e)
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

    // expose
    function focus() {
      ;(el.value as HTMLInputElement)?.focus()
    }

    // expose
    function blur() {
      ;(el.value as HTMLInputElement).blur()
    }

    return {
      el,
      id,
      isFocusing,
      isComposing,
      errorMessage,
      placeholderColor,
      normalizedType,
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
@import '../icon/icon';
@import '../field-decorator/fieldDecorator';
@import '../form-details/formDetails';
@import './input';
</style>
