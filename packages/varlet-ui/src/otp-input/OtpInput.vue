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
            @focus="() => handleFocus(index)"
            @blur="(event) => handleBlur(event)"
            @input="(value) => handleCellInput(index, value)"
          />
        </div>

        <div v-if="shouldRenderSeparator(index)" :class="n('separator')">
          <slot name="separator" :index="index" />
        </div>
      </template>
    </div>

    <var-form-details :class="n('details')" var-otp-input-cover :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import { call, clamp, toNumber } from '@varlet/shared'
import { onSmartMounted } from '@varlet/use'
import { computed, defineComponent, nextTick, ref, useSlots, type ComponentPublicInstance } from 'vue'
import VarFormDetails from '../form-details'
import { useForm } from '../form/provide'
import VarInput from '../input/Input.vue'
import { createNamespace, flatFragment, useValidation } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props, type OtpInputValidateTrigger } from './props'

const { name, n, classes } = createNamespace('otp-input')

export default defineComponent({
  name,
  components: {
    VarFormDetails,
    VarInput,
  },
  props,
  setup(props) {
    const slots = useSlots()
    const rootEl = ref<HTMLElement | null>(null)
    const inputRefs = ref<Array<InstanceType<typeof VarInput> | null>>([])
    const activeIndex = ref(-1)
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
    let pendingFocusIndex: number | null = null
    let focusEffectQueued = false

    bindForm?.({ validate, resetValidation, reset })

    onSmartMounted(() => {
      if (props.autofocus) {
        focus()
      }
    })

    function splitChars(value: string) {
      return Array.from(value)
    }

    function normalizeValue(value: string) {
      return transformByType(value).slice(0, normalizedLength.value)
    }

    function transformByType(value: string) {
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

    function setInputRef(el: Element | ComponentPublicInstance | InstanceType<typeof VarInput> | null, index: number) {
      inputRefs.value[index] = el && '$' in el ? (el as InstanceType<typeof VarInput>) : null
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

    function maybeEmitComplete(value: string) {
      if (splitChars(value).length !== normalizedLength.value) {
        return
      }

      call(props.onComplete, value)
      validateWithTrigger('onComplete', value)
    }

    function updateValue(value: string, index: number) {
      if (value === normalizedValue.value) {
        syncCellDisplayValue(index)
        return
      }

      call(props['onUpdate:modelValue'], value)
      call(props.onInput, value)
      validateWithTrigger('onInput', value)
      maybeEmitComplete(value)
    }

    function focusCell(index: number) {
      const targetIndex = clamp(index, 0, normalizedLength.value - 1)
      inputRefs.value[targetIndex]?.focus?.()
    }

    // expose
    function focus(index?: number) {
      const targetIndex = index == null ? Math.min(getValueChars().length, normalizedLength.value - 1) : index
      focusCell(targetIndex)
    }

    // expose
    function blur() {
      inputRefs.value.forEach((inputRef) => {
        inputRef?.blur?.()
      })
    }

    // expose
    function validate() {
      return v(props.rules, normalizedValue.value)
    }

    // expose
    function reset() {
      if (normalizedValue.value !== '') {
        call(props['onUpdate:modelValue'], '')
      }

      resetValidation()
    }

    function syncCellDisplayValue(index: number) {
      const inputEl = inputRefs.value[index]?.el as HTMLInputElement | null | undefined

      if (inputEl) {
        inputEl.value = getDisplayChar(index)
      }
    }

    function syncAllCellDisplayValues() {
      cellIndexes.value.forEach((_, index) => {
        syncCellDisplayValue(index)
      })
    }

    function scheduleFocusEffect(index: number) {
      pendingFocusIndex = index

      if (focusEffectQueued) {
        return
      }

      focusEffectQueued = true

      nextTick(() => {
        focusEffectQueued = false

        if (pendingFocusIndex == null) {
          return
        }

        activeIndex.value = pendingFocusIndex
        focusCell(pendingFocusIndex)
        pendingFocusIndex = null
      })
    }

    function replaceChars(index: number, chars: string[]) {
      const valueChars = getValueChars()
      const targetIndex = clamp(index, 0, valueChars.length)
      const nextChars = [...valueChars]
      const processedChars = chars.slice(0, normalizedLength.value - targetIndex)

      processedChars.forEach((char, offset) => {
        nextChars[targetIndex + offset] = char
      })

      const nextValue = nextChars.join('').slice(0, normalizedLength.value)
      updateValue(nextValue, targetIndex)
      const nextFocusIndex = clamp(targetIndex + processedChars.length, 0, normalizedLength.value - 1)

      scheduleFocusEffect(nextFocusIndex)
    }

    function removeAt(index: number, focusIndex = clamp(index, 0, normalizedLength.value - 1)) {
      const valueChars = getValueChars()

      valueChars.splice(index, 1)
      const nextValue = valueChars.join('')
      updateValue(nextValue, index)
      scheduleFocusEffect(focusIndex)
    }

    function removeWithBackspace(index: number) {
      const valueChars = getValueChars()

      if (!valueChars[index]) {
        if (index <= 0) {
          syncAllCellDisplayValues()
          return
        }

        removeAt(index - 1, index - 1)
        return
      }

      const isLastCell = index === valueChars.length - 1
      const nextFocusIndex = !isLastCell && index > 0 ? index - 1 : clamp(index, 0, normalizedLength.value - 1)
      removeAt(index, nextFocusIndex)
    }

    function handleClick(event: Event) {
      if (props.disabled || formDisabled.value) {
        return
      }

      call(props.onClick, event)
      validateWithTrigger('onClick')
    }

    function handleFocus(index: number) {
      const valueChars = getValueChars()

      activeIndex.value = index

      if (valueChars[index]) {
        nextTick(() => {
          inputRefs.value[index]?.select?.()
        })
      }
    }

    function handleBlur(event: FocusEvent) {
      const relatedTarget = event.relatedTarget as Node | null
      const isLeavingComponent = !relatedTarget || !rootEl.value?.contains(relatedTarget)

      if (isLeavingComponent) {
        activeIndex.value = -1
      }
    }

    function handleCellInput(index: number, value: string) {
      const inputChars = splitChars(transformByType(value))
      const valueChars = getValueChars()
      const crossTargetIndex = index > valueChars.length

      if (inputChars.length === 0) {
        if (crossTargetIndex) {
          scheduleFocusEffect(valueChars.length)
          syncCellDisplayValue(index)
          return
        }

        if (value === '') {
          removeAt(index)
        } else {
          syncCellDisplayValue(index)
        }

        return
      }

      if (crossTargetIndex) {
        replaceChars(valueChars.length, inputChars)
        return
      }

      replaceChars(index, inputChars)
    }

    function handlePaste(event: ClipboardEvent) {
      if (!props.allowPaste || formDisabled.value || formReadonly.value || props.disabled || props.readonly) {
        return
      }

      const text = event.clipboardData?.getData('text') ?? ''

      if (!text) {
        return
      }

      event.preventDefault()

      const transformedValue = props.pasteTransform ? props.pasteTransform(text) : text
      const result = transformByType(transformedValue)

      call(props.onPaste, result, event)
      validateWithTrigger('onPaste', result)

      if (!result) {
        syncAllCellDisplayValues()
        return
      }

      replaceChars(0, splitChars(result))
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

      if (event.key === 'Backspace' && getValueChars().length > 0) {
        event.preventDefault()
        removeWithBackspace(index)
        return
      }

      if (event.key === 'ArrowLeft' && index > 0) {
        event.preventDefault()
        focusCell(index - 1)
        return
      }

      if (event.key === 'ArrowRight' && index < normalizedLength.value - 1) {
        event.preventDefault()
        focusCell(index + 1)
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
      reset,
      validate,
      resetValidation,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import '../field-decorator/fieldDecorator';
@import '../form-details/formDetails';
@import '../input/input';
@import './otpInput';
</style>
