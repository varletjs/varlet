<template>
  <div
    ref="root"
    :class="n()"
    :tabindex="disabled || formDisabled ? undefined : '0'"
    @focusin="handleFocus"
    @click="handleClick"
  >
    <var-menu-select
      same-width
      auto-complete-cover
      trigger="manual"
      placement="bottom"
      :disabled="disabled || formDisabled || readonly || formReadonly"
      :class="n('menu-select')"
      :popover-class="variant === 'standard' && hint ? n('--standard-menu-margin') : undefined"
      v-model:show="isShowMenuSelect"
      @update:model-value="handleAutoComplete"
    >
      <var-input
        ref="input"
        v-bind="{
          enterkeyhint,
          maxlength,
          placeholder,
          size,
          variant,
          line,
          hint,
          textColor,
          blurColor,
          readonly,
          disabled,
          clearable,
        }"
        autocomplete="off"
        :is-force-focusing-effect="isFocusing"
        :is-force-error-effect="!!errorMessage"
        @input="handleInput"
        @blur="handleBlur"
        @clear="handleClear"
        @change="handleChange"
        v-model="value"
      >
        <template #prepend-icon v-if="$slots['prepend-icon']">
          <slot name="prepend-icon" />
        </template>

        <template #append-icon v-if="$slots['append-icon']">
          <slot name="append-icon" />
        </template>

        <template #clear-icon="{ clear }" v-if="$slots['clear-icon']">
          <slot name="clear-icon" :clear="clear" />
        </template>

        <template #extra-message v-if="$slots['extra-message']">
          <slot name="extra-message" />
        </template>
      </var-input>

      <template #options>
        <div ref="optionsRef" :class="n('options')">
          <var-menu-option
            v-for="option in localOptions"
            :key="option[valueKey]"
            :label="option[labelKey]"
            :value="option[valueKey]"
            :option="option"
            :ripple="option.ripple"
            :disabled="option.disabled"
          />
        </div>
      </template>
    </var-menu-select>

    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import VarInput from '../input'
import VarMenuSelect from '../menu-select'
import VarMenuOption from '../menu-option'
import VarFormDetails from '../form-details'
import { defineComponent, nextTick, ref, watch } from 'vue'
import { type AutoCompleteValidateTrigger, props } from './props'
import { createNamespace, useValidation } from '../utils/components'
import { useClickOutside, useEventListener, useVModel } from '@varlet/use'
import { call, preventDefault, raf } from '@varlet/shared'
import { useForm } from '../form/provide'
import { AutoCompleteProvider } from './provide'

const { name, n } = createNamespace('auto-complete')

export default defineComponent({
  name,
  components: {
    VarInput,
    VarMenuSelect,
    VarMenuOption,
    VarFormDetails,
  },
  props,
  setup(props) {
    const root = ref<HTMLElement>()
    const input = ref<InstanceType<typeof VarInput>>()
    const optionsRef = ref<HTMLElement>()

    const isFocusing = ref(false)
    const value = useVModel(props, 'modelValue')
    const localOptions = ref(props.options)
    const isShowMenuSelect = ref(false)

    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()

    const { bindForm, form } = useForm()

    let clearing = false

    const autoCompleteProvider: AutoCompleteProvider = {
      reset,
      resetValidation,
      validate,
    }

    useClickOutside(
      () => root.value!,
      'click',
      () => {
        // After the clear operation is executed, the clear button will be removed from the component tree,
        // resulting in a false positive of click outside.
        if (clearing) {
          clearing = false
          return
        }

        isShowMenuSelect.value = false
        handleBlur()
      }
    )

    watch(() => props.options, syncOptions)

    call(bindForm, autoCompleteProvider)

    useEventListener(() => window, 'keydown', handleKeydown)

    // expose
    function reset() {
      value.value = ''
      resetValidation()
    }

    // expose
    function validate() {
      return v(props.rules, value.value)
    }

    function validateWithTrigger(trigger: AutoCompleteValidateTrigger) {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    async function handleKeydown(event: KeyboardEvent) {
      if (
        form?.disabled.value ||
        form?.readonly.value ||
        props.disabled ||
        props.readonly ||
        !isFocusing.value ||
        !isShowMenuSelect.value
      ) {
        return
      }

      const { key } = event

      if (key === 'Tab') {
        preventDefault(event)
        root.value!.focus()
        isShowMenuSelect.value = false
        return
      }

      if (!['ArrowUp', 'ArrowDown', 'Enter'].includes(key)) {
        input.value!.focus()
        return
      }

      if (key === 'Enter') {
        await raf()
        input.value!.focus()
      }
    }

    async function syncOptions() {
      // wait for the menu-select to close
      await raf()

      // Menu select is not updated when closed,
      // to solve the flickering problem caused by options changing when closed
      if (isShowMenuSelect.value) {
        localOptions.value = props.options
      }
    }

    async function handleInput(newValue: string, event: Event) {
      call(props.onInput, newValue, event)
      isShowMenuSelect.value = getShowMenuSelect(newValue)
      validateWithTrigger('onInput')
    }

    function handleClear() {
      clearing = true
      isShowMenuSelect.value = getShowMenuSelect(value.value!)
      validateWithTrigger('onClear')
    }

    function handleFocus() {
      if (isFocusing.value) {
        return
      }

      isFocusing.value = true
      input.value!.focus()
      isShowMenuSelect.value = getShowMenuSelect(value.value ?? '')
      syncOptions()
      call(props.onFocus)
      validateWithTrigger('onFocus')
    }

    function handleBlur() {
      if (isShowMenuSelect.value || !isFocusing.value) {
        return
      }

      isFocusing.value = false
      call(props.onBlur)
      validateWithTrigger('onBlur')
    }

    function handleClick(event: Event) {
      if (props.disabled || form?.disabled.value) {
        return
      }

      call(props.onClick, event)
      validateWithTrigger('onClick')
    }

    function handleChange(newValue: string) {
      call(props.onChange, newValue)
      validateWithTrigger('onChange')
    }

    function handleAutoComplete(newValue: string) {
      if (newValue === value.value) {
        return
      }

      value.value = newValue
      call(props.onChange, newValue)
      validateWithTrigger('onChange')
    }

    function getShowMenuSelect(newValue: string) {
      if (props.disabled || props.readonly || form?.disabled.value || form?.readonly.value) {
        return false
      }

      return newValue.length > 0 && props.options.length > 0
    }

    return {
      root,
      optionsRef,
      input,
      value,
      isShowMenuSelect,
      localOptions,
      isFocusing,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      errorMessage,
      n,
      handleInput,
      handleClear,
      handleFocus,
      handleClick,
      handleBlur,
      handleChange,
      handleAutoComplete,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../icon/icon';
@import '../field-decorator/fieldDecorator';
@import '../form-details/formDetails';
@import '../input/input';
@import '../menu/menu';
@import '../menu-option/menuOption';
@import '../menu-select/menuSelect';
@import '../form-details/formDetails';
@import './autoComplete';
</style>
