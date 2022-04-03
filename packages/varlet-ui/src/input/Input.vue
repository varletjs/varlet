<template>
  <div class="var-input var--box" :class="[disabled ? 'var-input--disabled' : null]" @click="handleClick">
    <div
      class="var-input__controller"
      :class="[
        isFocus ? 'var-input--focus' : null,
        errorMessage ? 'var-input--error' : null,
        formDisabled || disabled ? 'var-input--disabled' : null,
      ]"
      :style="{
        color: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
      }"
    >
      <div class="var-input__icon" :class="[!hint ? 'var-input--non-hint' : null]">
        <slot name="prepend-icon" />
      </div>

      <div class="var-input__wrap" :class="[!hint ? 'var-input--non-hint' : null]">
        <input class="var-input__autocomplete" v-if="type === 'password'" />
        <textarea
          class="var-input__input var-input--textarea"
          ref="el"
          autocomplete="new-password"
          :id="id"
          :disabled="formDisabled || disabled || formReadonly || readonly"
          :type="type"
          :value="modelValue"
          :maxlength="maxlength"
          :rows="rows"
          :class="[
            formDisabled || disabled ? 'var-input--disabled' : null,
            errorMessage ? 'var-input--caret-error' : null,
          ]"
          :style="{
            color: textColor,
            caretColor: !errorMessage ? focusColor : null,
            resize: resize ? 'vertical' : 'none',
          }"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @change="handleChange"
          v-if="textarea"
        >
        </textarea>
        <input
          class="var-input__input"
          ref="el"
          autocomplete="new-password"
          :id="id"
          :disabled="formDisabled || disabled || formReadonly || readonly"
          :type="type"
          :value="modelValue"
          :maxlength="maxlength"
          :class="[
            formDisabled || disabled ? 'var-input--disabled' : null,
            errorMessage ? 'var-input--caret-error' : null,
          ]"
          :style="{
            color: textColor,
            caretColor: !errorMessage ? focusColor : null,
          }"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @change="handleChange"
          v-else
        />
        <label
          class="var--ellipsis"
          :class="[
            isFocus ? 'var-input--focus' : null,
            errorMessage ? 'var-input--error' : null,
            textarea ? 'var-input__textarea-placeholder' : 'var-input__placeholder',
            computePlaceholderState(),
            !hint ? 'var-input--placeholder-non-hint' : null,
          ]"
          :style="{
            color: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
          }"
          :for="id"
        >
          {{ placeholder }}
        </label>
      </div>

      <div class="var-input__icon" :class="[!hint ? 'var-input--non-hint' : null]">
        <slot name="append-icon">
          <var-icon
            class="var-input__clear-icon"
            var-input-cover
            name="close-circle"
            size="14px"
            v-if="clearable && !isEmpty(modelValue)"
            @click="handleClear"
          />
        </slot>
      </div>
    </div>

    <div
      class="var-input__line"
      :class="[
        formDisabled || disabled ? 'var-input--line-disabled' : null,
        errorMessage ? 'var-input--line-error' : null,
      ]"
      :style="{ background: !errorMessage ? blurColor : undefined }"
      v-if="line"
    >
      <div
        class="var-input__dot"
        :class="[
          isFocus ? 'var-input--spread' : null,
          formDisabled || disabled ? 'var-input--line-disabled' : null,
          errorMessage ? 'var-input--line-error' : null,
        ]"
        :style="{ background: !errorMessage ? focusColor : undefined }"
      ></div>
    </div>

    <var-form-details :error-message="errorMessage" :maxlength-text="maxlengthText" />
  </div>
</template>

<script lang="ts">
import VarFormDetails from '../form-details'
import VarIcon from '../icon'
import { defineComponent, getCurrentInstance, ref, computed, nextTick, onMounted, onUpdated } from 'vue'
import { props } from './props'
import { isEmpty } from '../utils/shared'
import { useValidation } from '../utils/components'
import { useForm } from '../form/provide'
import type { Ref, ComputedRef } from 'vue'
import type { ValidateTriggers } from './props'
import type { InputProvider } from './provide'

export default defineComponent({
  name: 'VarInput',
  components: {
    VarIcon,
    VarFormDetails,
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

    onUpdated(() => {
      console.log('111')

      validate()
    })

    const validateWithTrigger = (trigger: ValidateTriggers) => {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    const computePlaceholderState = () => {
      const { hint, modelValue } = props

      if (!hint && !isEmpty(modelValue)) {
        return 'var-input--placeholder-hidden'
      }
      if (hint && (!isEmpty(modelValue) || isFocus.value)) {
        return 'var-input--placeholder-hint'
      }
    }

    const handleFocus = (e: FocusEvent) => {
      isFocus.value = true

      props.onFocus?.(e)
      validateWithTrigger('onFocus')
    }

    const handleBlur = (e: FocusEvent) => {
      isFocus.value = false

      props.onBlur?.(e)
      validateWithTrigger('onBlur')
    }

    const handleInput = (e: Event) => {
      const { value } = e.target as HTMLInputElement

      props['onUpdate:modelValue']?.(value)
      props.onInput?.(value, e)
      validateWithTrigger('onInput')
    }

    const handleChange = (e: Event) => {
      const { value } = e.target as HTMLInputElement

      props.onChange?.(value, e)
      validateWithTrigger('onChange')
    }

    const handleClear = () => {
      const { disabled, readonly, clearable, onClear } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly || !clearable) {
        return
      }

      props['onUpdate:modelValue']?.('')
      onClear?.('')

      validateWithTrigger('onClear')
    }

    const handleClick = (e: Event) => {
      const { disabled, onClick } = props

      if (form?.disabled.value || disabled) {
        return
      }

      onClick?.(e)

      validateWithTrigger('onClick')
    }

    // expose
    const reset = () => {
      props['onUpdate:modelValue']?.('')
      resetValidation()
    }

    // expose
    const validate = () => v(props.rules, props.modelValue)

    // expose
    const focus = () => {
      ;(el.value as HTMLInputElement).focus()
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

    bindForm?.(inputProvider)

    return {
      el,
      id,
      isFocus,
      errorMessage,
      maxlengthText,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      isEmpty,
      computePlaceholderState,
      handleFocus,
      handleBlur,
      handleInput,
      handleChange,
      handleClear,
      handleClick,
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
@import '../form-details/formDetails';
@import './input';
</style>
