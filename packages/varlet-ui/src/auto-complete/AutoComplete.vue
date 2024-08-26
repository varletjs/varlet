<template>
  <div
    ref="root"
    :class="n()"
    :tabindex="disabled || formDisabled ? undefined : '0'"
    @focusin="handleFocus"
    @click="handleClick"
  >
    <var-menu-select
      trigger="manual"
      placement="bottom"
      same-width
      auto-complete-cover
      :disabled="disabled || formDisabled || readonly || formReadonly"
      :class="n('menu-select')"
      :popover-class="variant === 'standard' && hint ? n('--standard-menu-margin') : undefined"
      v-model:show="isShowMenuSelect"
      @update:model-value="handleAutoComplete"
    >
      <var-input
        ref="input"
        v-bind="{
          validateTrigger,
          rules,
          enterkeyhint,
          onClear,
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
        @input="handleInput"
        @blur="handleBlur"
        @clear="handleClear"
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
  </div>
</template>

<script lang="ts">
import VarInput from '../input'
import VarMenuSelect from '../menu-select'
import VarMenuOption from '../menu-option'
import { defineComponent, ref, watch } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { useClickOutside, useEventListener, useVModel } from '@varlet/use'
import { call, preventDefault, raf } from '@varlet/shared'
import { useForm } from '../form/provide'
import { AutoCompleteProvider } from './provide'

const { name, n, classes } = createNamespace('auto-complete')

export default defineComponent({
  name,
  components: {
    VarInput,
    VarMenuSelect,
    VarMenuOption,
  },
  props,
  setup(props) {
    const isFocusing = ref(false)
    const root = ref<HTMLElement>()
    const input = ref<InstanceType<typeof VarInput>>()
    const optionsRef = ref<HTMLElement>()
    const value = useVModel(props, 'modelValue')
    const localOptions = ref(props.options)
    const isShowMenuSelect = ref(false)
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
      input.value!.reset()
    }

    // expose
    function resetValidation() {
      input.value!.resetValidation()
    }

    // expose
    function validate() {
      return input.value!.validate()
    }

    function handleKeydown(event: KeyboardEvent) {
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
      }
    }

    async function syncOptions() {
      // wait for the menu-select to close
      await raf()

      if (isShowMenuSelect.value) {
        localOptions.value = props.options
      }
    }

    function handleInput(newValue: string, event: Event) {
      isShowMenuSelect.value = getShowMenuSelect(newValue)
      call(props.onInput, newValue, event)
    }

    function handleClear() {
      clearing = true
      isShowMenuSelect.value = getShowMenuSelect(value.value!)
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
    }

    function handleBlur() {
      if (isShowMenuSelect.value || !isFocusing.value) {
        return
      }

      isFocusing.value = false
      call(props.onBlur)
    }

    function handleAutoComplete(newValue: string) {
      if (newValue === value.value) {
        return
      }

      value.value = newValue
      call(props.onChange, newValue)
    }

    function getShowMenuSelect(newValue: string) {
      if (props.disabled || props.readonly || form?.disabled || form?.readonly) {
        return false
      }

      return newValue.length > 0 && props.options.length > 0
    }

    function handleClick(event: Event) {
      if (props.disabled || form?.disabled) {
        return
      }

      call(props.onClick, event)
    }

    return {
      root,
      optionsRef,
      value,
      isShowMenuSelect,
      localOptions,
      isFocusing,
      input,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      n,
      classes,
      handleInput,
      handleClear,
      handleFocus,
      handleClick,
      handleBlur,
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
@import './autoComplete';
</style>
