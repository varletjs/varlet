<template>
  <div
    ref="rootEl"
    :class="classes(n(), n('$--box'))"
    :style="{
      '--otp-input-gutter': gutterStyle,
      '--otp-input-cell-height': cellHeightStyle,
      '--otp-input-cell-max-width': cellMaxWidthStyle,
    }"
    @click="handleClick"
    @keydown="handleKeydown"
    @paste="handlePaste"
  >
    <div :class="n('cells')">
      <template v-for="(_, index) in cellIndexes" :key="index">
        <div :class="n('cell')" :data-index="index">
          <var-input
            :ref="(el) => setInputRef(el, index)"
            :model-value="getDisplayChar(index)"
            :type="nativeInputType"
            :maxlength="1"
            autocomplete="one-time-code"
            placeholder=""
            :hint="false"
            :variant="variant"
            :text-color="textColor"
            :focus-color="focusColor"
            :blur-color="blurColor"
            :disabled="formDisabled || disabled"
            :readonly="formReadonly || readonly"
            :inputmode="resolvedInputmode"
            :is-force-focusing-effect="activeIndex === index"
            :is-force-error-effect="!!errorMessage"
            :is-show-form-details="false"
            @focus="(event) => handleFocus(index, event)"
            @blur="(event) => handleBlur(index, event)"
            @input="(value) => handleCellInput(index, value)"
          />
        </div>

        <div v-if="shouldRenderSeparator(index)" :class="n('separator')">
          <slot name="separator" :index="index" />
        </div>
      </template>
    </div>

    <var-form-details :class="n('details')" :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import { call, clamp, isEmpty, toNumber } from '@varlet/shared'
import { onSmartMounted } from '@varlet/use'
import { computed, defineComponent, nextTick, ref, useSlots, type ComponentPublicInstance } from 'vue'
import VarFormDetails from '../form-details'
import { useForm } from '../form/provide'
import Input from '../input/Input.vue'
import { createNamespace, flatFragment, useValidation } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props, type OtpInputSource, type OtpInputValidateTrigger } from './props'

const { name, n, classes } = createNamespace('otp-input')

export default defineComponent({
  name,
  components: {
    VarFormDetails,
    VarInput: Input,
  },
  props,
  setup(props) {
    const slots = useSlots()
    const rootEl = ref<HTMLElement | null>(null)
    const inputRefs = ref<Array<InstanceType<typeof Input> | null>>([])
    const activeIndex = ref(-1)
    const interactionVersion = ref(0)
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()
    const { bindForm, form } = useForm()
    const normalizedLength = computed(() => toNumber(props.length))
    const normalizedMaskSymbol = computed(() => splitChars(props.maskSymbol)[0] ?? '•')
    const normalizedValue = computed(() => normalizeValue(props.modelValue))
    const cellIndexes = computed(() => Array.from({ length: normalizedLength.value }))
    const gutterStyle = computed(() => toSizeUnit(props.gutter))
    const cellHeightStyle = computed(() => toSizeUnit(props.cellHeight))
    const cellMaxWidthStyle = computed(() => toSizeUnit(props.cellMaxWidth))
    const resolvedInputmode = computed(() => (props.type === 'digit' ? 'numeric' : undefined))
    const nativeInputType = computed(() => (props.type === 'digit' ? 'tel' : 'text'))
    const formDisabled = computed(() => form?.disabled.value ?? false)
    const formReadonly = computed(() => form?.readonly.value ?? false)

    bindForm?.({
      validate,
      resetValidation,
      reset,
    })

    onSmartMounted(() => {
      if (props.autofocus) {
        focus()
      }
    })

    function splitChars(value: string) {
      return Array.from(value)
    }

    function normalizeValue(value: string) {
      return filterByType(String(value ?? '')).slice(0, normalizedLength.value)
    }

    function filterByType(value: string) {
      if (isEmpty(value)) {
        return ''
      }

      switch (props.type) {
        case 'digit':
          return value.replace(/\D+/g, '')

        case 'alphanumeric':
          return splitChars(value)
            .filter((char) => /[A-Za-z0-9]/.test(char))
            .join('')

        default:
          return value
      }
    }

    function getValueChars() {
      return splitChars(normalizedValue.value)
    }

    function getDisplayChar(index: number) {
      const char = getValueChars()[index] ?? ''

      if (!char) {
        return ''
      }

      return props.mask ? normalizedMaskSymbol.value : char
    }

    function setInputRef(el: Element | ComponentPublicInstance | InstanceType<typeof Input> | null, index: number) {
      if (el && '$' in el) {
        inputRefs.value[index] = el as InstanceType<typeof Input>
        return
      }

      inputRefs.value[index] = null
    }

    function shouldRenderSeparator(index: number) {
      if (index >= normalizedLength.value - 1 || !slots.separator) {
        return false
      }

      const vNodes = slots.separator({ index })
      return flatFragment(vNodes).length > 0
    }

    function validateWithTrigger(trigger: OtpInputValidateTrigger, value = normalizedValue.value) {
      nextTick(() => {
        vt(props.validateTrigger, trigger, props.rules, value)
      })
    }

    function emitStableChange(value = normalizedValue.value) {
      call(props.onChange, value)
      validateWithTrigger('onChange', value)
    }

    function maybeEmitComplete(value: string) {
      if (splitChars(value).length !== normalizedLength.value) {
        return
      }

      call(props.onComplete, value)
      validateWithTrigger('onComplete', value)
    }

    function updateValue(value: string, source: OtpInputSource, index: number, emitChange = false) {
      if (value === normalizedValue.value) {
        syncCellInput(index)
        return
      }

      call(props['onUpdate:modelValue'], value)
      call(props.onInput as any, value, { index, source })
      validateWithTrigger('onInput', value)
      maybeEmitComplete(value)

      if (emitChange) {
        emitStableChange(value)
      }
    }

    function focus(index = getFocusIndex()) {
      const targetIndex = clamp(index, 0, normalizedLength.value - 1)
      inputRefs.value[targetIndex]?.focus?.()
    }

    function blur() {
      inputRefs.value.forEach((inputRef) => inputRef?.blur?.())
      activeIndex.value = -1
    }

    function clear() {
      if (normalizedValue.value === '') {
        return
      }

      call(props['onUpdate:modelValue'], '')
      call(props.onInput as any, '', { index: 0, source: 'delete' })
      validateWithTrigger('onInput', '')
      validateWithTrigger('onClear', '')
      emitStableChange('')
    }

    function validate() {
      return v(props.rules, normalizedValue.value)
    }

    function reset() {
      clear()
      resetValidation()
    }

    function getFocusIndex() {
      return Math.min(getValueChars().length, normalizedLength.value - 1)
    }

    function syncCellInput(index: number) {
      const inputEl = inputRefs.value[index]?.el as HTMLInputElement | null | undefined

      if (inputEl) {
        inputEl.value = getDisplayChar(index)
      }
    }

    function syncAllCellInputs() {
      cellIndexes.value.forEach((_, index) => {
        syncCellInput(index)
      })
    }

    function replaceFrom(index: number, charsToInsert: string[], source: OtpInputSource, emitChange = false) {
      const currentInteractionVersion = ++interactionVersion.value
      const valueChars = getValueChars()
      const targetIndex = clamp(index, 0, valueChars.length)
      const nextChars = [...valueChars]
      let lastIndex = targetIndex

      charsToInsert.forEach((char, offset) => {
        const currentIndex = targetIndex + offset

        if (currentIndex >= normalizedLength.value) {
          return
        }

        nextChars[currentIndex] = char
        lastIndex = currentIndex
      })

      const nextValue = nextChars.join('').slice(0, normalizedLength.value)
      updateValue(nextValue, source, targetIndex, emitChange)

      nextTick(() => {
        if (currentInteractionVersion !== interactionVersion.value) {
          return
        }

        if (
          splitChars(nextValue).length >= normalizedLength.value &&
          props.autoBlur &&
          lastIndex >= normalizedLength.value - 1
        ) {
          blur()
          return
        }

        activeIndex.value = clamp(lastIndex + 1, 0, normalizedLength.value - 1)
        focus(activeIndex.value)
      })
    }

    function removeAt(index: number, emitChange = false) {
      const currentInteractionVersion = ++interactionVersion.value
      const valueChars = getValueChars()

      if (index < 0 || index >= valueChars.length) {
        syncAllCellInputs()
        return
      }

      valueChars.splice(index, 1)
      const nextValue = valueChars.join('')
      updateValue(nextValue, 'delete', index, emitChange)

      nextTick(() => {
        if (currentInteractionVersion !== interactionVersion.value) {
          return
        }

        focus(clamp(index, 0, normalizedLength.value - 1))
      })
    }

    function removeWithBackspace(index: number) {
      const valueChars = getValueChars()

      if (index < 0 || index > valueChars.length) {
        syncAllCellInputs()
        return
      }

      if (!valueChars[index]) {
        if (index <= 0) {
          syncAllCellInputs()
          return
        }

        removeAt(index - 1)
        nextTick(() => {
          activeIndex.value = index - 1
          focus(index - 1)
        })
        return
      }

      const isLastFilledCell = index === valueChars.length - 1
      removeAt(index)

      nextTick(() => {
        if (!isLastFilledCell && index > 0) {
          activeIndex.value = index - 1
          focus(index - 1)
          return
        }

        activeIndex.value = clamp(index, 0, normalizedLength.value - 1)
        inputRefs.value[activeIndex.value]?.select?.()
      })
    }

    function handleClick() {
      validateWithTrigger('onClick')
    }

    function handleFocus(index: number, event: FocusEvent) {
      const valueChars = getValueChars()

      interactionVersion.value += 1
      activeIndex.value = index
      call(props.onFocus as any, index, event)
      validateWithTrigger('onFocus')

      if (valueChars[index]) {
        nextTick(() => {
          inputRefs.value[index]?.select?.()
        })
      }
    }

    function handleBlur(index: number, event: FocusEvent) {
      const relatedTarget = event.relatedTarget as Node | null
      const isLeavingComponent = !relatedTarget || !rootEl.value?.contains(relatedTarget)

      if (isLeavingComponent) {
        activeIndex.value = -1
        emitStableChange()
      }

      call(props.onBlur as any, index, event)
      validateWithTrigger('onBlur')
    }

    function handleCellInput(index: number, value: string) {
      if (formDisabled.value || formReadonly.value || props.disabled || props.readonly) {
        syncCellInput(index)
        return
      }

      const valueChars = getValueChars()
      const filtered = splitChars(filterByType(value))

      if (index > valueChars.length) {
        if (filtered.length === 0) {
          nextTick(() => focus(valueChars.length))
          syncCellInput(index)
          return
        }

        replaceFrom(valueChars.length, filtered, 'input')
        return
      }

      if (filtered.length === 0) {
        if (value === '') {
          removeAt(index)
        } else {
          syncCellInput(index)
        }

        return
      }

      replaceFrom(index, filtered, 'input')
    }

    function handlePaste(event: ClipboardEvent) {
      if (!props.allowPaste || formDisabled.value || formReadonly.value || props.disabled || props.readonly) {
        return
      }

      const rawValue = event.clipboardData?.getData('text') ?? ''

      if (!rawValue) {
        return
      }

      event.preventDefault()

      const transformedValue = props.pasteTransform ? props.pasteTransform(rawValue) : rawValue
      const filteredValue = filterByType(transformedValue)

      call(props.onPaste as any, filteredValue, event)

      if (!filteredValue) {
        syncAllCellInputs()
        return
      }

      replaceFrom(0, splitChars(filteredValue), 'paste', true)
    }

    function handleKeydown(event: KeyboardEvent) {
      if (formDisabled.value || formReadonly.value || props.disabled || props.readonly) {
        return
      }

      const target = event.target as HTMLElement | null
      const cell = target?.closest(`.${n('cell')}`) as HTMLElement | null
      const indexAttr = cell?.dataset.index

      if (indexAttr == null) {
        return
      }

      const index = Number(indexAttr)
      const chars = getValueChars()

      if (event.key === 'Backspace' && chars.length > 0) {
        event.preventDefault()
        removeWithBackspace(index)
        return
      }

      if (event.key === 'ArrowLeft' && index > 0) {
        event.preventDefault()
        focus(index - 1)
        return
      }

      if (event.key === 'ArrowRight' && index < normalizedLength.value - 1) {
        event.preventDefault()
        focus(clamp(index + 1, 0, chars.length))
        return
      }
    }

    return {
      rootEl,
      activeIndex,
      errorMessage,
      formDisabled,
      formReadonly,
      cellIndexes,
      gutterStyle,
      cellHeightStyle,
      cellMaxWidthStyle,
      resolvedInputmode,
      nativeInputType,
      n,
      classes,
      isEmpty,
      setInputRef,
      getDisplayChar,
      shouldRenderSeparator,
      handleClick,
      handleFocus,
      handleBlur,
      handleCellInput,
      handleKeydown,
      handlePaste,
      focus,
      blur,
      clear,
      validate,
      resetValidation,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './otpInput';
</style>
