<template>
  <div :class="classes(n(), n('$--box'))">
    <var-menu
      v-model:show="showMenu"
      var-date-input-cover
      trigger="manual"
      placement="bottom-start"
      :disabled="disabled || readonly || formDisabled || formReadonly"
      :popover-class="menuPopoverClass"
    >
      <var-input
        ref="inputEl"
        :model-value="displayValue"
        :size="size"
        :variant="variant"
        :placeholder="placeholder"
        :line="line"
        :hint="hint"
        :text-color="textColor"
        :focus-color="focusColor"
        :blur-color="blurColor"
        :tabindex="tabindex"
        :disabled="disabled || formDisabled"
        :readonly="readonly || formReadonly"
        :clearable="clearable"
        :is-force-focusing-effect="isFocusing"
        :is-force-error-effect="!!errorMessage"
        :is-show-form-details="false"
        @focus="handleFocus"
        @blur="handleBlur"
        @click="handleClick"
        @keydown="handleKeydown"
        @clear="handleClear"
        @change="handleChange"
        @update:model-value="handleInput"
      >
        <template v-if="$slots['prepend-icon']" #prepend-icon>
          <slot name="prepend-icon" />
        </template>

        <template #clear-icon="{ clear }">
          <span :class="n('clear-icon-container')" @mousedown.stop @click.stop>
            <slot name="clear-icon" :clear="clear">
              <var-icon :class="n('clear-icon')" name="close-circle" @click="clear" />
            </slot>
          </span>
        </template>

        <template #append-icon>
          <slot name="append-icon">
            <var-icon :class="n('calendar-icon')" name="calendar-month" @click.stop />
          </slot>
        </template>

        <template v-if="$slots['extra-message']" #extra-message>
          <slot name="extra-message" />
        </template>
      </var-input>

      <template #menu>
        <div @mousedown.prevent>
          <var-date-picker
            :class="n('picker')"
            :model-value="pickerValue"
            :type="type"
            :multiple="multiple"
            :range="range"
            :allowed-dates="allowedDates"
            :min="min"
            :max="max"
            :first-day-of-week="firstDayOfWeek"
            :show-title="false"
            :elevation="false"
            @change="handlePickerChange"
          />
        </div>
      </template>
    </var-menu>

    <var-form-details :error-message="errorMessage">
      <template v-if="$slots['extra-message']" #extra-message>
        <slot name="extra-message" />
      </template>
    </var-form-details>
  </div>
</template>

<script lang="ts">
import { call, isArray, isDate, isEqual, isNumber, isTruthy, preventDefault } from '@varlet/shared'
import dayjs, { type Dayjs } from 'dayjs/esm/index.js'
import customParseFormat from 'dayjs/esm/plugin/customParseFormat/index.js'
import { computed, defineComponent, nextTick, ref, watch } from 'vue'
import VarDatePicker from '../date-picker'
import VarFormDetails from '../form-details'
import { useForm } from '../form/provide'
import VarIcon from '../icon'
import VarInput from '../input'
import { type InputValidateTrigger } from '../input/props'
import VarMenu from '../menu'
import { createNamespace, useValidation } from '../utils/components'
import { props, type DateInputValue } from './props'

const DateInputDefaultFormats = {
  Year: 'YYYY',
  Month: 'YYYY-MM',
  Date: 'YYYY-MM-DD',
} as const

dayjs.extend(customParseFormat)

const { name, n, classes } = createNamespace('date-input')

export default defineComponent({
  name,
  components: {
    VarIcon,
    VarInput,
    VarMenu,
    VarFormDetails,
    VarDatePicker,
  },
  props,
  setup(props) {
    const inputEl = ref<InstanceType<typeof VarInput> | null>(null)
    const displayValue = ref('')
    const pickerValue = ref<string | string[]>()
    const showMenu = ref(false)
    const isFocusing = ref(false)

    const { bindForm, form } = useForm()
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()

    const formDisabled = computed(() => form?.disabled.value ?? false)
    const formReadonly = computed(() => form?.readonly.value ?? false)
    const isDisabled = computed(() => props.disabled || formDisabled.value)
    const isReadonly = computed(() => props.readonly || formReadonly.value)
    const isMultipleOrRange = computed(() => props.multiple || props.range)

    const menuPopoverClass = computed(() => {
      const marginClass =
        props.variant === 'standard'
          ? n('--standard-menu-margin')
          : props.variant === 'filled'
            ? n('--filled-menu-margin')
            : ''

      return [n('--menu'), marginClass].filter(isTruthy).join(' ')
    })

    const displayValues = computed(() => {
      const separator = props.range ? props.rangeSeparator : props.separator

      return displayValue.value
        .split(separator)
        .map((item) => item.trim())
        .filter(isTruthy)
    })

    const dateInputProvider = {
      reset,
      validate,
      resetValidation,
    }

    watch(
      () => [
        props.modelValue,
        props.format,
        props.valueFormat,
        props.type,
        props.multiple,
        props.range,
        props.separator,
        props.rangeSeparator,
      ],
      () => updateStatesByModelValue(),
      { immediate: true },
    )

    call(bindForm, dateInputProvider)

    function getDefaultFormat(type: 'year' | 'month' | 'date' = props.type) {
      if (type === 'year') {
        return DateInputDefaultFormats.Year
      }

      if (type === 'month') {
        return DateInputDefaultFormats.Month
      }

      return DateInputDefaultFormats.Date
    }

    function getDisplayFormat() {
      return props.format || getDefaultFormat()
    }

    function stringToDayjsObject(value: string, format: string) {
      const dayjsObject = dayjs(value, format, true)

      return dayjsObject.isValid() ? dayjsObject : undefined
    }

    function modelValueToDayjsObject(value: DateInputValue | undefined) {
      if (value == null || value === '') {
        return
      }

      if (isDate(value) || isNumber(value)) {
        const dayjsObject = dayjs(value)

        return dayjsObject.isValid() ? dayjsObject : undefined
      }

      return stringToDayjsObject(value, props.valueFormat ?? getDisplayFormat())
    }

    function dayjsObjectToModelValue(dayjsObject: Dayjs): DateInputValue {
      if (props.valueFormat === 'timestamp') {
        return dayjsObject.valueOf()
      }

      if (props.valueFormat === 'date') {
        return dayjsObject.toDate()
      }

      if (!props.valueFormat) {
        return dayjsObject.format(getDisplayFormat())
      }

      return dayjsObject.format(props.valueFormat)
    }

    function updateStatesByModelValue() {
      const { modelValue, range } = props

      if (isMultipleOrRange.value) {
        const dayjsObjects = (isArray(modelValue) ? modelValue : []).map(modelValueToDayjsObject).filter(isTruthy)
        pickerValue.value = dayjsObjects.map((dayjsObject) => dayjsObject.format(getDefaultFormat()))

        if (!isFocusing.value) {
          displayValue.value = dayjsObjects
            .map((dayjsObject) => dayjsObject.format(getDisplayFormat()))
            .join(range ? props.rangeSeparator : props.separator)
        }

        return
      }

      const dayjsObject = isArray(modelValue) ? undefined : modelValueToDayjsObject(modelValue)
      pickerValue.value = dayjsObject ? dayjsObject.format(getDefaultFormat()) : undefined

      if (!isFocusing.value) {
        displayValue.value = dayjsObject ? dayjsObject.format(getDisplayFormat()) : ''
      }
    }

    function updateModelValue(value: DateInputValue | DateInputValue[] | undefined) {
      if (isEqual(value, props.modelValue)) {
        return
      }

      call(props['onUpdate:modelValue'], value)
      call(props.onChange, value)
      validateWithTrigger('onChange')
    }

    function validateWithTrigger(trigger: InputValidateTrigger) {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    function handleFocus(e: FocusEvent) {
      isFocusing.value = true
      call(props.onFocus, e)
      validateWithTrigger('onFocus')
    }

    function handleBlur(e: FocusEvent) {
      isFocusing.value = false
      showMenu.value = false
      call(props.onBlur, e)
      validateWithTrigger('onBlur')
    }

    function handleClick() {
      if (isDisabled.value || isReadonly.value) {
        return
      }

      showMenu.value = true
      validateWithTrigger('onClick')
    }

    function handleKeydown(e: KeyboardEvent) {
      if (isDisabled.value || isReadonly.value || e.key !== 'Enter') {
        return
      }

      preventDefault(e)
      showMenu.value = true
    }

    function updateSingleStatesByDisplayValue(value: string) {
      const dayjsObject = stringToDayjsObject(value, getDisplayFormat())

      if (!dayjsObject) {
        return
      }

      pickerValue.value = dayjsObject.format(getDefaultFormat())
      updateModelValue(dayjsObjectToModelValue(dayjsObject))
    }

    function updateMultipleOrRangeStatesByDisplayValue() {
      const isInvalidDisplayValueCount = props.range ? displayValues.value.length !== 2 : !displayValues.value.length

      if (isInvalidDisplayValueCount) {
        return
      }

      const dayjsObjects = displayValues.value.map((item) => stringToDayjsObject(item, getDisplayFormat()))

      if (dayjsObjects.some((dayjsObject) => !dayjsObject)) {
        return
      }

      const validDayjsObjects = dayjsObjects.filter(isTruthy)
      const modelValue = validDayjsObjects.map(dayjsObjectToModelValue)
      pickerValue.value = validDayjsObjects.map((dayjsObject) => dayjsObject.format(getDefaultFormat()))
      updateModelValue(modelValue)
    }

    function handleInput(value: string) {
      if (isDisabled.value || isReadonly.value) {
        return
      }

      displayValue.value = value

      if (value === '') {
        clearValue()
        updateModelValue(getEmptyModelValue())
        validateWithTrigger('onInput')
        return
      }

      if (isMultipleOrRange.value) {
        updateMultipleOrRangeStatesByDisplayValue()
      } else {
        updateSingleStatesByDisplayValue(value)
      }

      validateWithTrigger('onInput')
    }

    function handleChange() {
      if (isDisabled.value || isReadonly.value) {
        return
      }

      isFocusing.value = false
      updateStatesByModelValue()
    }

    function handlePickerChange(value: string | string[]) {
      if (isDisabled.value || isReadonly.value) {
        return
      }

      pickerValue.value = value

      if (isArray(value)) {
        const dayjsObjects = value
          .map((item) => dayjs(item, getDefaultFormat(), true))
          .filter((dayjsObject) => dayjsObject.isValid())

        const modelValue = dayjsObjects.map(dayjsObjectToModelValue)

        displayValue.value = dayjsObjects
          .map((dayjsObject) => dayjsObject.format(getDisplayFormat()))
          .join(props.range ? props.rangeSeparator : props.separator)

        updateModelValue(modelValue)

        return
      }

      const dayjsObject = dayjs(value, getDefaultFormat(), true)

      if (!dayjsObject.isValid()) {
        return
      }

      displayValue.value = dayjsObject.format(getDisplayFormat())
      updateModelValue(dayjsObjectToModelValue(dayjsObject))

      if (!isMultipleOrRange.value) {
        showMenu.value = false
      }
    }

    function getEmptyModelValue() {
      return isMultipleOrRange.value ? [] : undefined
    }

    function clearValue() {
      displayValue.value = ''
      pickerValue.value = isMultipleOrRange.value ? [] : undefined
    }

    function handleClear() {
      if (isDisabled.value || isReadonly.value || !props.clearable) {
        return
      }

      clearValue()
      showMenu.value = false
      call(props['onUpdate:modelValue'], getEmptyModelValue())
      call(props.onClear, '')
      validateWithTrigger('onClear')
    }

    function focus() {
      inputEl.value?.focus()
    }

    function blur() {
      inputEl.value?.blur()
    }

    function select() {
      inputEl.value?.select()
    }

    function validate() {
      return v(props.rules, props.modelValue)
    }

    function reset() {
      clearValue()
      showMenu.value = false
      resetValidation()
    }

    return {
      inputEl,
      displayValue,
      pickerValue,
      showMenu,
      isFocusing,
      formDisabled,
      formReadonly,
      errorMessage,
      menuPopoverClass,
      n,
      classes,
      handleFocus,
      handleBlur,
      handleClick,
      handleKeydown,
      handleInput,
      handleChange,
      handlePickerChange,
      handleClear,
      focus,
      blur,
      select,
      validate,
      resetValidation,
      reset,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../icon/icon';
@import '../menu/menu';
@import '../form-details/formDetails';
@import '../input/input';
@import '../date-picker/date-picker';
@import './date-input';
</style>
