<template>
  <div
    ref="root"
    :class="n()"
    :tabindex="disabled || formDisabled ? undefined : '0'"
    @focusin="handleFocus"
    @focusout="handleBlur"
    @click="handleClick"
  >
    <var-menu-select
      trigger="manual"
      placement="bottom"
      same-width
      auto-complete-cover
      :class="n('menu-select')"
      :popover-class="variant === 'standard' && hint ? n('--standard-menu-margin') : undefined"
      v-model:show="isShowMenuSelect"
      @update:model-value="handleAutoComplete"
    >
      <var-input
        ref="input"
        v-bind="{
          readonly,
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
          disabled,
          clearable,
        }"
        autocomplete="off"
        :is-force-focusing-effect="isFocusing"
        @input="handleInput"
        v-model="value"
      />

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

    const autoCompleteProvider: AutoCompleteProvider = {
      reset,
      resetValidation,
      validate,
    }

    useClickOutside(root, 'click', () => {
      isShowMenuSelect.value = false
    })

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
      if (form?.disabled.value || form?.readonly.value || props.disabled || props.readonly || !isFocusing.value) {
        return
      }

      const { key } = event

      if (key === 'Tab' && isShowMenuSelect.value) {
        preventDefault(event)
        isShowMenuSelect.value = false
        handleBlur()
        return
      }

      if (!['ArrowUp', 'ArrowDown', 'Enter'].includes(key) && isShowMenuSelect.value) {
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

    function handleFocus() {
      isFocusing.value = true
      input.value!.focus()
      isShowMenuSelect.value = getShowMenuSelect(value.value ?? '')
      syncOptions()
      call(props.onFocus)
    }

    function handleBlur() {
      if (isShowMenuSelect.value) {
        return
      }

      isFocusing.value = false
      isShowMenuSelect.value = false
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
      n,
      classes,
      handleInput,
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
