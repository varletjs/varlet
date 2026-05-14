<template>
  <div :class="n('wrap')">
    <div :role="multiple ? 'group' : 'radiogroup'" :class="n()">
      <template v-if="options.length">
        <var-segmented-button
          v-for="option in options"
          :key="option.value"
          :checked-value="option.value"
          :checkmark="getOptionCheckmark(option)"
          :disabled="option.disabled"
          :ripple="option.ripple"
        >
          <template v-if="hasCustomOptionCheckmark(option)" #checkmark>
            <maybe-v-node :is="renderOptionCheckmark(option)" />
          </template>

          <template #default>
            <maybe-v-node :is="renderOptionLabel(option)" />
          </template>
        </var-segmented-button>
      </template>

      <slot />
    </div>

    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import { call, callOrReturn, isArray } from '@varlet/shared'
import { useEventListener } from '@varlet/use'
import { computed, defineComponent, nextTick, watch } from 'vue'
import type { ButtonSize } from '../button/props'
import VarFormDetails from '../form-details'
import { useForm, type Validation } from '../form/provide'
import VarSegmentedButton from '../segmented-button'
import { createNamespace, MaybeVNode, useValidation } from '../utils/components'
import { props, type SegmentedButtonsOption } from './props'
import { useSegmentedButtons, type SegmentedButtonsProvider } from './provide'

const { name, n, classes } = createNamespace('segmented-buttons')

export default defineComponent({
  name,
  components: {
    VarFormDetails,
    VarSegmentedButton,
    MaybeVNode,
  },
  props,
  setup(props) {
    const { length, buttons, bindButtons } = useSegmentedButtons()
    const { bindForm } = useForm()
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()

    const segmentedButtonsProvider: SegmentedButtonsProvider = {
      multiple: computed(() => props.multiple),
      disabled: computed(() => props.disabled),
      readonly: computed(() => props.readonly),
      ripple: computed(() => props.ripple),
      checkmark: computed(() => props.checkmark),
      size: computed(() => props.size as ButtonSize),
      onToggle,
    }

    const segmentedButtonsValidationProvider: Validation = {
      validate,
      reset,
      resetValidation,
    }

    watch(() => props.modelValue, syncButtons, { deep: true })
    watch(() => length.value, syncButtons)

    bindButtons(segmentedButtonsProvider)
    call(bindForm, segmentedButtonsValidationProvider)

    useEventListener(() => window, 'keydown', handleKeydown)
    useEventListener(() => window, 'keyup', handleKeyup)

    function getSafeModelValue() {
      return props.multiple ? (isArray(props.modelValue) ? props.modelValue : []) : props.modelValue
    }

    function isSelected(value: any) {
      const modelValue = getSafeModelValue()

      return isArray(modelValue) ? modelValue.includes(value) : modelValue === value
    }

    function renderOptionLabel(option: SegmentedButtonsOption) {
      return callOrReturn(option.label, option, isSelected(option.value))
    }

    function hasCustomOptionCheckmark(option: SegmentedButtonsOption) {
      return option.checkmark != null && option.checkmark !== true && option.checkmark !== false
    }

    function getOptionCheckmark(option: SegmentedButtonsOption) {
      if (option.checkmark == null) {
        return undefined
      }

      return typeof option.checkmark === 'boolean' ? option.checkmark : true
    }

    function renderOptionCheckmark(option: SegmentedButtonsOption) {
      return callOrReturn(
        option.checkmark as Exclude<SegmentedButtonsOption['checkmark'], boolean | undefined>,
        option,
        isSelected(option.value),
      )
    }

    function handleKeydown(event: KeyboardEvent) {
      const focusingButtonIndex = buttons.findIndex(({ isFocusing }) => isFocusing.value)

      if (focusingButtonIndex === -1) {
        return
      }

      const hasMoveableButton = buttons.some(({ disabled }, index) =>
        index === focusingButtonIndex ? false : !disabled.value,
      )

      if (!hasMoveableButton) {
        return
      }

      if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault()
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
      }

      if (event.key === 'ArrowLeft') {
        moveButton(focusingButtonIndex, 'prev')
        return
      }

      if (event.key === 'ArrowRight') {
        moveButton(focusingButtonIndex, 'next')
        return
      }

      if (event.key === 'Enter') {
        buttons[focusingButtonIndex].toggle()
      }
    }

    function handleKeyup(event: KeyboardEvent) {
      const focusingButtonIndex = buttons.findIndex(({ isFocusing }) => isFocusing.value)

      if (focusingButtonIndex === -1) {
        return
      }

      if (event.key !== ' ') {
        return
      }

      event.preventDefault()
      buttons[focusingButtonIndex].toggle()
    }

    function moveButton(fromIndex: number, method: 'prev' | 'next') {
      while (true) {
        fromIndex += method === 'prev' ? -1 : 1

        if (fromIndex < 0) {
          fromIndex = buttons.length - 1
        }

        if (fromIndex > buttons.length - 1) {
          fromIndex = 0
        }

        const button = buttons[fromIndex]

        if (!button.disabled.value) {
          button.move(!props.multiple)
          break
        }
      }
    }

    function validateWithTrigger() {
      nextTick(() => {
        vt(['onChange'], 'onChange', props.rules, getSafeModelValue())
      })
    }

    function syncButtons() {
      const modelValue = getSafeModelValue()
      buttons.forEach(({ sync }) => sync(modelValue))
    }

    function change(changedModelValue: any | any[]) {
      call(props['onUpdate:modelValue'], changedModelValue)
      call(props.onChange, changedModelValue)
      validateWithTrigger()
    }

    function onToggle(changedValue: any, checked: boolean) {
      if (!props.multiple) {
        if (checked) {
          return
        }

        change(changedValue)
        return
      }

      const modelValue = getSafeModelValue()

      if (checked) {
        change(modelValue.filter((value: any) => value !== changedValue))
        return
      }

      change([...modelValue, changedValue])
    }

    function validate() {
      return v(props.rules, getSafeModelValue())
    }

    function reset() {
      change(props.multiple ? [] : undefined)
      resetValidation()
    }

    return {
      errorMessage,
      n,
      classes,
      renderOptionLabel,
      renderOptionCheckmark,
      hasCustomOptionCheckmark,
      getOptionCheckmark,
      validate,
      reset,
      resetValidation,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../form-details/formDetails';
@import '../ripple/ripple';
@import '../hover-overlay/hoverOverlay';
@import '../segmented-button/segmentedButton';
@import './segmentedButtons';
</style>
