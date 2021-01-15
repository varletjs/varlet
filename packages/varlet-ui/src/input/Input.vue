<template>
  <div
    class="var-input var--box"
    :class="[disabled ? 'var-input--disabled' : null]"
    @click="handleClick"
    v-bind="$attrs"
  >
    <div
      class="var-input__controller"
      :class="[
        isFocus ? 'var-input--focus': null,
        errorMessage ? 'var-input--error': null,
        disabled ? 'var-input--disabled' : null
      ]"
      :style="{
        color: isFocus ? activeColor : inactiveColor
      }"
    >
      <slot name="prepend-icon">
        <div
          class="var-input__icon"
          @click="handleClickPrependIcon"
        >
          <var-icon :name="prependIcon" v-if="prependIcon"/>
        </div>
      </slot>

      <div class="var-input__wrap">
        <input
          class="var-input__input"
          ref="input"
          :class="[disabled ? 'var-input--disabled' : null]"
          :style="{
              textAlign,
              color: textColor
            }"
          :id="inputId"
          :type="type"
          :disabled="disabled"
          :readonly="readonly"
          :maxlength="maxlength"
          :value="modelValue"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @change="handleChange"
        >
        <label
          class="var-input__placeholder"
          :class="[
              computePlaceholderState()
            ]"
          :for="inputId"
        >
          {{ placeholder }}
        </label>

        <transition name="var-input-footer-margin">
          <div class="var-input__footer" v-if="errorMessage || maxlength">
            <div class="var-input__message">{{ errorMessage }}</div>
            <div class="var-input__length">{{ maxlengthText }}</div>
          </div>
        </transition>
      </div>

      <slot name="append-icon">
        <div
          class="var-input__icon"
          @click="handleClickAppendIcon"
        >
          <var-icon
            :name="appendIcon || 'close-circle'"
            :size="clearable ? '14px' : null"
            v-if="appendIcon || clearable"
            @click="handleClear"
          />
        </div>
      </slot>

      <div
        class="var-input__line"
        :class="[
          disabled ? 'var-input--line-disabled' : null,
          errorMessage ? 'var-input--line-error': null
        ]"
        :style="{
          background: inactiveColor
        }"
        v-if="line"
      >
        <div
          class="var-input__dot"
          :class="[
            isFocus ? 'var-input--spread' : null,
            disabled ? 'var-input--line-disabled' : null,
            errorMessage ? 'var-input--line-error': null
          ]"
          :style="{
            background: activeColor
          }"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, Ref, computed, ComputedRef, nextTick } from 'vue'
import { props, ValidateTriggers } from './props'
import { isArray, isEmpty, isNumber } from '../utils/shared'
import Icon from '../icon'

export default defineComponent({
  name: 'VarInput',
  components: {
    [Icon.name]: Icon
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const inputId: Ref<string> = ref(`var-input-${getCurrentInstance()!.uid}`)
    const isFocus: Ref<boolean> = ref(false)
    const errorMessage: Ref<string> = ref('')
    const inputEl: Ref<HTMLInputElement | null> = ref(null)

    const isNumberValue: ComputedRef<boolean> = computed(() => isNumber(props.modelValue))
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

    const computePlaceholderState = () => {
      if (!props.hint && !isEmpty(props.modelValue)) {
        return 'var-input--placeholder-hidden'
      }
      if (props.hint && (!isEmpty(props.modelValue) || isFocus.value)) {
        return 'var-input--placeholder-hint'
      }

      return null
    }

    const normalizeValue = (value: string) => {
      return isNumberValue.value
        ? parseFloat(value)
        : value
    }

    const validate = async (): Promise<boolean> => {
      if (!isArray(props.rules)) {
        return false
      }

      const resArr = await Promise.all(props.rules.map(rule => rule(props.modelValue)))

      return !resArr.some((res) => {
        if (res !== true) {
          errorMessage.value = res.toString()
          return true
        }

        return false
      })
    }

    const resetValidation = () => {
      errorMessage.value = ''
    }

    const validateWithTrigger = async (trigger: ValidateTriggers) => {
      await nextTick()

      if (props.validateTrigger.includes(trigger)) {
        await validate() && (errorMessage.value = '')
      }
    }

    const handleFocus = (e: Event) => {
      if (props.disabled) {
        return
      }

      isFocus.value = true
      props.onFocus?.(e)

      validateWithTrigger('onFocus')
    }

    const handleBlur = (e: Event) => {
      if (props.disabled) {
        return
      }

      isFocus.value = false
      props.onBlur?.(e)

      validateWithTrigger('onBlur')
    }

    const handleInput = (e: Event) => {
      if (props.disabled) {
        return
      }

      const { value } = e.target as HTMLInputElement

      props['onUpdate:modelValue']?.(normalizeValue(value))
      props.onInput?.(e)

      validateWithTrigger('onInput')
    }

    const handleChange = (e: Event) => {
      if (props.disabled) {
        return
      }

      props.onChange?.(e)

      validateWithTrigger('onChange')
    }

    const handleClear = () => {
      if (props.disabled || !props.clearable) {
        return
      }

      props['onUpdate:modelValue']?.(undefined)
      props.onClear?.()

      validateWithTrigger('onClear')
    }

    const handleClick = (e: Event) => {
      if (props.disabled || !props.clearable) {
        return
      }

      props.onClick?.(e)

      validateWithTrigger('onClick')
    }

    const handleClickAppendIcon = (e: Event) => {
      props.onClickAppendIcon?.(e)
    }

    const handleClickPrependIcon = (e: Event) => {
      props.onClickPrependIcon?.(e)
    }

    const focus = () => {
      (inputEl.value as HTMLInputElement).focus()
    }

    const blur = () => {
      (inputEl.value as HTMLInputElement).blur()
    }

    return {
      inputEl,
      inputId,
      isFocus,
      errorMessage,
      maxlengthText,
      computePlaceholderState,
      handleFocus,
      handleBlur,
      handleInput,
      handleChange,
      handleClear,
      handleClick,
      handleClickAppendIcon,
      handleClickPrependIcon,
      validate,
      resetValidation,
      focus,
      blur,
    }
  }
})
</script>

<style lang="less">
@import "./input";
</style>
