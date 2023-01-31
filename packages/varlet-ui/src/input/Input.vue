<template>
  <div
    :class="classes(n(), n(`--${variant}`), [size, n('--small')], n('$--box'), [disabled, n('--disabled')])"
    @click="handleClick"
  >
    <label :class="classes(n('$--relative'), n('$--block'))" :for="id">
      <div
        :class="
          classes(
            n('controller'),
            [isFocus, n('--focus')],
            [errorMessage, n('--error')],
            [formDisabled || disabled, n('--disabled')]
          )
        "
        :style="{
          color: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
        }"
      >
        <div :class="classes(n('icon'), [!hint, n('--non-hint')])" ref="prependRef">
          <slot name="prepend-icon" />
        </div>

        <div :class="classes(n('wrap'), [!hint, n('--wrap-non-hint')])">
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
            :class="
              classes(n('input'), [formDisabled || disabled, n('--disabled')], [errorMessage, n('--caret-error')])
            "
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
          <label
            ref="placeholderRef"
            :class="
              classes(
                n('$--ellipsis'),
                [isFocus, n('--focus')],
                [formDisabled || disabled, n('--disabled')],
                [errorMessage, n('--error')],
                [textarea, n('textarea-placeholder'), n('placeholder')],
                placeholderState,
                [!hint, n('--placeholder-non-hint')]
              )
            "
            :style="{
              color: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
            }"
            :for="id"
          >
            {{ placeholder }}
          </label>
        </div>

        <div :class="classes(n('icon'), [!hint, n('--non-hint')])">
          <slot name="append-icon">
            <var-icon
              :class="n('clear-icon')"
              var-input-cover
              name="close-circle"
              size="14px"
              v-if="clearable && !isEmpty(modelValue)"
              @click="handleClear"
            />
          </slot>
        </div>
      </div>

      <template v-if="line">
        <div
          v-if="variant === 'outlined'"
          :class="classes(n('line'), [isFocus, n('--line-focus')], [formDisabled || disabled, n('--line-disabled')])"
        >
          <template v-if="!(formDisabled || disabled)">
            <div
              :class="classes(n('line__start'), [errorMessage, n('--line-error')])"
              :style="{
                borderColor: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
              }"
            />
            <div
              :class="
                classes(
                  n('line__notch'),
                  [hint && (!isEmpty(modelValue) || isFocus), n('line__notch--hint')],
                  [errorMessage, n('--line-error')]
                )
              "
              :style="{
                borderColor: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
              }"
            >
              <div :class="classes(n('line__placeholder'))">{{ placeholder }}</div>
            </div>
            <div
              :class="classes(n('line__end'), [errorMessage, n('--line-error')])"
              :style="{
                borderColor: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
              }"
            />
          </template>
        </div>

        <div
          :class="
            classes(n('line'), [formDisabled || disabled, n('--line-disabled')], [errorMessage, n('--line-error')])
          "
          :style="{ background: !errorMessage ? blurColor : undefined }"
          v-else
        >
          <div
            :class="
              classes(
                n('dot'),
                [isFocus, n('--line-focus')],
                [formDisabled || disabled, n('--line-disabled')],
                [errorMessage, n('--line-error')]
              )
            "
            :style="{ background: !errorMessage ? focusColor : undefined }"
          />
        </div>
      </template>
    </label>

    <var-form-details :error-message="errorMessage" :extra-message="maxlengthText" />
  </div>
</template>

<script lang="ts">
import VarFormDetails from '../form-details'
import VarIcon from '../icon'
import { defineComponent, getCurrentInstance, ref, computed, nextTick, onMounted, watchEffect } from 'vue'
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
    VarIcon,
    VarFormDetails,
  },
  props,
  setup(props, { slots }) {
    const id: Ref<string> = ref(`var-input-${getCurrentInstance()!.uid}`)
    const el: Ref<HTMLInputElement | null> = ref(null)
    const placeholderRef: Ref<HTMLInputElement | null> = ref(null)
    const prependRef: Ref<HTMLInputElement | null> = ref(null)
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

    const placeholderState = ref('')
    watchEffect(() => {
      const { hint, modelValue, variant } = props
      if (!hint && !isEmpty(modelValue)) {
        placeholderState.value = n('--placeholder-hidden')
        return
      }
      if (hint && (!isEmpty(modelValue) || isFocus.value)) {
        if (!placeholderState.value) {
          nextTick(() => {
            if (variant === 'outlined' && slots['prepend-icon']) {
              const x = prependRef.value!.clientWidth || 0
              placeholderRef.value!.style.transform = `translate(-${x}px, -50%) scale(0.75)`
            }
          })
        }

        placeholderState.value = n('--placeholder-hint')
        return
      }

      placeholderState.value = ''
      if (variant === 'outlined' && placeholderRef.value?.style.transform) {
        placeholderRef.value.style.transform = ''
      }
    })

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
      placeholderRef,
      prependRef,
      id,
      isFocus,
      errorMessage,
      maxlengthText,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      placeholderState,
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
@import '../icon/icon';
@import '../form-details/formDetails';
@import './input';
</style>
