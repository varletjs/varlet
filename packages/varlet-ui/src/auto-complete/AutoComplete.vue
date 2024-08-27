<template>
  <div
    ref="root"
    :class="n()"
    :tabindex="disabled || formDisabled ? undefined : '0'"
    @focusin="focus"
    @click="handleClick"
  >
    <var-menu-select
      same-width
      auto-complete-cover
      scrollable
      trigger="manual"
      placement="bottom"
      :disabled="disabled || formDisabled || readonly || formReadonly"
      :class="n('menu-select')"
      :popover-class="variant === 'standard' ? n('--standard-menu-margin') : undefined"
      v-model:show="isShowMenuSelect"
      @update:model-value="handleAutoComplete"
    >
      <var-input
        ref="input"
        v-bind="{
          maxlength,
          enterkeyhint,
          placeholder,
          size,
          variant,
          line,
          hint,
          textColor,
          focusColor,
          blurColor,
          readonly,
          disabled,
          clearable,
        }"
        autocomplete="off"
        :is-force-focusing-effect="isFocusing"
        :is-force-error-effect="!!errorMessage"
        :is-show-form-details="false"
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
            v-for="option in viewOptions"
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

    <var-form-details :error-message="errorMessage" :extra-message="maxlengthText" @mousedown.stop />
  </div>
</template>

<script lang="ts">
import VarInput from '../input'
import VarMenuSelect from '../menu-select'
import VarMenuOption from '../menu-option'
import VarFormDetails from '../form-details'
import { computed, defineComponent, nextTick, ref, watch } from 'vue'
import { type AutoCompleteValidateTrigger, props, type AutoCompleteOption } from './props'
import { createNamespace, useValidation } from '../utils/components'
import { useClickOutside, useEventListener, useVModel } from '@varlet/use'
import { call, isEmpty, preventDefault, raf, toNumber } from '@varlet/shared'
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
    const viewOptions = ref<AutoCompleteOption[]>([])
    const isShowMenuSelect = ref(false)

    const maxlengthText = computed(() => {
      const { maxlength } = props

      if (!maxlength) {
        return ''
      }

      if (isEmpty(value.value)) {
        return `0 / ${maxlength}`
      }

      return `${String(value.value).length}/${maxlength}`
    })

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

        blur()
      }
    )

    watch(() => [props.options, isFocusing.value], changeMenuState)

    call(bindForm, autoCompleteProvider)

    useEventListener(() => window, 'keydown', handleKeydown)

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
      if (isFocusing.value || props.disabled || form?.disabled.value) {
        return
      }

      isFocusing.value = true
      input.value!.focus()
      call(props.onFocus)
      validateWithTrigger('onFocus')
    }

    // expose
    function blur() {
      if (!isFocusing.value) {
        return
      }

      isFocusing.value = false
      isShowMenuSelect.value = false
      input.value!.blur()
      call(props.onBlur)
      validateWithTrigger('onBlur')
    }

    function handleBlur() {
      if (isShowMenuSelect.value) {
        return
      }

      blur()
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
        input.value?.focus()
      }
    }

    async function changeMenuState() {
      if (isFocusing.value) {
        isShowMenuSelect.value = getShowMenuSelect(value.value!)
      }

      // when the menu is closed, the options are not updated, avoiding the flicker of the menu
      if (isShowMenuSelect.value) {
        viewOptions.value = props.options
      }
    }

    async function handleInput(newValue: string, event: Event) {
      changeMenuState()
      call(props.onInput, newValue, event)
      validateWithTrigger('onInput')
    }

    function handleClear() {
      clearing = true
      changeMenuState()
      call(props.onClear, value.value!)
      validateWithTrigger('onClear')
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
      if (props.maxlength != null) {
        newValue = newValue.slice(0, toNumber(props.maxlength))
      }

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

      return props.options.length > 0 && (props.getShow != null ? props.getShow(newValue) : newValue.length > 0)
    }

    return {
      root,
      optionsRef,
      input,
      value,
      isShowMenuSelect,
      viewOptions,
      isFocusing,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      errorMessage,
      maxlengthText,
      n,
      handleInput,
      handleClear,
      handleClick,
      handleChange,
      handleBlur,
      handleAutoComplete,
      reset,
      validate,
      resetValidation,
      blur,
      focus,
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
