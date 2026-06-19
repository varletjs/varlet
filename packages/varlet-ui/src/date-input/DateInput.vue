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
            <var-icon :class="n('calendar-icon')" name="calendar" />
          </slot>
        </template>

        <template v-if="$slots['extra-message']" #extra-message>
          <slot name="extra-message" />
        </template>
      </var-input>

      <template #menu>
        <div @pointerdown.prevent>
          <var-date-picker
            ref="picker"
            :class="n('picker')"
            :model-value="pickerValue"
            :type="pickerType"
            :multiple="multiple"
            :range="range"
            :allowed-dates="allowedDates"
            :min="pickerMin"
            :max="pickerMax"
            :first-day-of-week="firstDayOfWeek"
            :show-title="false"
            :elevation="false"
            @change="handlePickerChange"
          >
            <template v-if="isDatetime" #actions>
              <div :class="n('datetime')">
                <div v-if="range" :class="classes(n('datetime-row'), n('datetime-row--range'))">
                  <time-select
                    :hour="rangeTimes[0].hour"
                    :minute="rangeTimes[0].minute"
                    :second="rangeTimes[0].second"
                    :use-seconds="useSeconds"
                    :readonly="readonly || formReadonly"
                    :disabled="disabled || formDisabled || rangeSelecting"
                    :is-hour-allowed="startAllowFns.isHourAllowed"
                    :is-minute-allowed="startAllowFns.isMinuteAllowed"
                    :is-second-allowed="startAllowFns.isSecondAllowed"
                    @change="(time) => handleRangeTimeChange(0, time)"
                  />
                  <var-icon :class="n('datetime-arrow')" name="arrow-right" />
                  <time-select
                    :hour="rangeTimes[1].hour"
                    :minute="rangeTimes[1].minute"
                    :second="rangeTimes[1].second"
                    :use-seconds="useSeconds"
                    :readonly="readonly || formReadonly"
                    :disabled="disabled || formDisabled || rangeSelecting"
                    :is-hour-allowed="endAllowFns.isHourAllowed"
                    :is-minute-allowed="endAllowFns.isMinuteAllowed"
                    :is-second-allowed="endAllowFns.isSecondAllowed"
                    @change="(time) => handleRangeTimeChange(1, time)"
                  />
                </div>
                <div v-else :class="n('datetime-row')">
                  <time-select
                    :hour="singleTime.hour"
                    :minute="singleTime.minute"
                    :second="singleTime.second"
                    :use-seconds="useSeconds"
                    :readonly="readonly || formReadonly"
                    :disabled="disabled || formDisabled"
                    :is-hour-allowed="singleAllowFns.isHourAllowed"
                    :is-minute-allowed="singleAllowFns.isMinuteAllowed"
                    :is-second-allowed="singleAllowFns.isSecondAllowed"
                    @change="handleTimeChange"
                  />
                </div>
              </div>
            </template>
          </var-date-picker>
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
import { type Dayjs } from 'dayjs/esm/index.js'
import { computed, defineComponent, nextTick, ref, watch } from 'vue'
import VarDatePicker from '../date-picker'
import VarFormDetails from '../form-details'
import { useForm } from '../form/provide'
import VarIcon from '../icon'
import VarInput from '../input'
import { type InputValidateTrigger } from '../input/props'
import VarMenu from '../menu'
import { createNamespace, useValidation } from '../utils/components'
import { createDayjs } from '../utils/shared'
import { props, type DateInputType, type DateInputValue } from './props'
import TimeSelect from './TimeSelect.vue'

const DateInputDefaultFormats = {
  Year: 'YYYY',
  Month: 'YYYY-MM',
  Date: 'YYYY-MM-DD',
  Datetime: 'YYYY-MM-DD HH:mm:ss',
  DatetimeMinute: 'YYYY-MM-DD HH:mm',
} as const

const dayjs = createDayjs()

type TimeParts = {
  hour: number
  minute: number
  second: number
}

const { name, n, classes } = createNamespace('date-input')

export default defineComponent({
  name,
  components: {
    VarIcon,
    VarInput,
    VarMenu,
    VarFormDetails,
    VarDatePicker,
    TimeSelect,
  },
  props,
  setup(props) {
    const inputEl = ref<InstanceType<typeof VarInput> | null>(null)
    const picker = ref<{ rangeSelecting: boolean; syncModelValue: () => void } | null>(null)
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
    const isDatetime = computed(() => props.type === 'datetime')
    const pickerType = computed(() => (isDatetime.value ? 'date' : props.type) as 'year' | 'month' | 'date')
    const pickerMin = computed(() => truncateBound(props.min))
    const pickerMax = computed(() => truncateBound(props.max))
    const rangeSelecting = computed(() => Boolean(picker.value?.rangeSelecting))
    const singleTime = computed(() => getTimeParts(getDayjsObjectsByModelValue()[0]))
    const rangeTimes = computed(() => {
      const dayjsObjects = getDayjsObjectsByModelValue()

      return [getTimeParts(dayjsObjects[0]), getTimeParts(dayjsObjects[1])]
    })

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
        props.useSeconds,
        props.multiple,
        props.range,
        props.separator,
        props.rangeSeparator,
      ],
      () => updateStatesByModelValue(),
      { immediate: true },
    )

    call(bindForm, dateInputProvider)

    function getDefaultFormat(type: DateInputType = props.type) {
      if (type === 'year') {
        return DateInputDefaultFormats.Year
      }

      if (type === 'month') {
        return DateInputDefaultFormats.Month
      }

      if (type === 'datetime') {
        return props.useSeconds ? DateInputDefaultFormats.Datetime : DateInputDefaultFormats.DatetimeMinute
      }

      return DateInputDefaultFormats.Date
    }

    function getPickerFormat() {
      return isDatetime.value ? DateInputDefaultFormats.Date : getDefaultFormat()
    }

    function getDisplayFormat() {
      return props.format || getDefaultFormat()
    }

    function truncateBound(value: string | undefined) {
      if (!value || !isDatetime.value) {
        return value
      }

      const dayjsObject = dayjs(value)

      return dayjsObject.isValid() ? dayjsObject.format(DateInputDefaultFormats.Date) : value
    }

    function getBoundObject(value: string | undefined) {
      if (!value) {
        return
      }

      const dayjsObject = dayjs(value)

      return dayjsObject.isValid() ? dayjsObject : undefined
    }

    function getTimeParts(dayjsObject?: Dayjs): TimeParts {
      return {
        hour: dayjsObject?.hour() ?? 0,
        minute: dayjsObject?.minute() ?? 0,
        second: dayjsObject?.second() ?? 0,
      }
    }

    function clampDatetime(dayjsObject: Dayjs) {
      const min = getBoundObject(props.min)
      const max = getBoundObject(props.max)

      if (min && dayjsObject.isBefore(min)) {
        return min
      }

      if (max && dayjsObject.isAfter(max)) {
        return max
      }

      return dayjsObject
    }

    function createTimeAllowFns(getObject: () => Dayjs | undefined, getTime: () => TimeParts) {
      function isAllowed(unit: 'hour' | 'minute' | 'second', value: number) {
        const time = getTime()
        const candidate = (getObject() ?? dayjs())
          .hour(unit === 'hour' ? value : time.hour)
          .minute(unit === 'minute' ? value : time.minute)
          .second(unit === 'second' ? value : time.second)

        const min = getBoundObject(props.min)
        const max = getBoundObject(props.max)

        if (min && candidate.endOf(unit).isBefore(min)) {
          return false
        }

        if (max && candidate.startOf(unit).isAfter(max)) {
          return false
        }

        return props.allowedTimes ? props.allowedTimes(candidate.format(DateInputDefaultFormats.Datetime)) : true
      }

      return {
        isHourAllowed: (hour: number) => isAllowed('hour', hour),
        isMinuteAllowed: (minute: number) => isAllowed('minute', minute),
        isSecondAllowed: (second: number) => isAllowed('second', second),
      }
    }

    const singleAllowFns = createTimeAllowFns(
      () => getDayjsObjectsByModelValue()[0],
      () => singleTime.value,
    )
    const startAllowFns = createTimeAllowFns(
      () => getDayjsObjectsByModelValue()[0],
      () => rangeTimes.value[0],
    )
    const endAllowFns = createTimeAllowFns(
      () => getDayjsObjectsByModelValue()[1],
      () => rangeTimes.value[1],
    )

    function applyTime(base: Dayjs, time: TimeParts) {
      return clampDatetime(base.hour(time.hour).minute(time.minute).second(time.second).millisecond(0))
    }

    function commitDateTimes(dayjsObjects: Dayjs[]) {
      if (props.range) {
        const sorted = [...dayjsObjects].sort((a, b) => a.valueOf() - b.valueOf())

        pickerValue.value = sorted.map((dayjsObject) => dayjsObject.format(getPickerFormat()))
        displayValue.value = sorted
          .map((dayjsObject) => dayjsObject.format(getDisplayFormat()))
          .join(props.rangeSeparator)
        updateModelValue(sorted.map(dayjsObjectToModelValue))

        return
      }

      const [dayjsObject] = dayjsObjects

      pickerValue.value = dayjsObject.format(getPickerFormat())
      displayValue.value = dayjsObject.format(getDisplayFormat())
      updateModelValue(dayjsObjectToModelValue(dayjsObject))
    }

    function handleTimeChange(time: TimeParts) {
      if (isDisabled.value || isReadonly.value) {
        return
      }

      const [dayjsObject] = getDayjsObjectsByModelValue()

      commitDateTimes([applyTime(dayjsObject ?? dayjs(), time)])
    }

    function handleRangeTimeChange(index: number, time: TimeParts) {
      if (isDisabled.value || isReadonly.value) {
        return
      }

      const dayjsObjects = getDayjsObjectsByModelValue()

      if (dayjsObjects.length < 2) {
        return
      }

      const next = [...dayjsObjects]
      next[index] = applyTime(dayjsObjects[index], time)

      commitDateTimes(next)
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

    function getDayjsObjectsByModelValue() {
      if (isMultipleOrRange.value) {
        return (isArray(props.modelValue) ? props.modelValue : []).map(modelValueToDayjsObject).filter(isTruthy)
      }

      const dayjsObject = isArray(props.modelValue) ? undefined : modelValueToDayjsObject(props.modelValue)

      return dayjsObject ? [dayjsObject] : []
    }

    function updateDisplayValueByDayjsObjects(dayjsObjects: Dayjs[]) {
      displayValue.value = dayjsObjects
        .map((dayjsObject) => dayjsObject.format(getDisplayFormat()))
        .join(props.range ? props.rangeSeparator : props.separator)
    }

    function updateStatesByModelValue() {
      const dayjsObjects = getDayjsObjectsByModelValue()

      if (isMultipleOrRange.value) {
        pickerValue.value = dayjsObjects.map((dayjsObject) => dayjsObject.format(getPickerFormat()))
      } else {
        const [dayjsObject] = dayjsObjects
        pickerValue.value = dayjsObject ? dayjsObject.format(getPickerFormat()) : undefined
      }

      if (!isFocusing.value) {
        updateDisplayValueByDayjsObjects(dayjsObjects)
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
      nextTick(() => picker.value?.syncModelValue())
      validateWithTrigger('onClick')
    }

    function handleKeydown(e: KeyboardEvent) {
      if (isDisabled.value || isReadonly.value || e.key !== 'Enter') {
        return
      }

      preventDefault(e)
      showMenu.value = true
      nextTick(() => picker.value?.syncModelValue())
    }

    function updateSingleStatesByDisplayValue(value: string) {
      const dayjsObject = stringToDayjsObject(value, getDisplayFormat())

      if (!dayjsObject) {
        return
      }

      pickerValue.value = dayjsObject.format(getPickerFormat())
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
      pickerValue.value = validDayjsObjects.map((dayjsObject) => dayjsObject.format(getPickerFormat()))
      updateModelValue(modelValue)
    }

    function handleInput(value: string) {
      if (isDisabled.value || isReadonly.value) {
        return
      }

      if (value === displayValue.value) {
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

      updateDisplayValueByDayjsObjects(getDayjsObjectsByModelValue())
    }

    function handlePickerChange(value: string | string[]) {
      if (isDisabled.value || isReadonly.value) {
        return
      }

      pickerValue.value = value

      if (isArray(value)) {
        const dayjsObjects = value
          .map((item) => dayjs(item, getPickerFormat(), true))
          .filter((dayjsObject) => dayjsObject.isValid())

        if (isDatetime.value && props.range) {
          const times = rangeTimes.value

          commitDateTimes(
            dayjsObjects.map((dayjsObject, index) => applyTime(dayjsObject, times[index] ?? getTimeParts())),
          )

          return
        }

        const modelValue = dayjsObjects.map(dayjsObjectToModelValue)

        displayValue.value = dayjsObjects
          .map((dayjsObject) => dayjsObject.format(getDisplayFormat()))
          .join(props.range ? props.rangeSeparator : props.separator)

        updateModelValue(modelValue)

        return
      }

      const dayjsObject = dayjs(value, getPickerFormat(), true)

      if (!dayjsObject.isValid()) {
        return
      }

      if (isDatetime.value) {
        commitDateTimes([applyTime(dayjsObject, singleTime.value)])

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
      const emptyModelValue = getEmptyModelValue()

      clearValue()
      showMenu.value = false
      !isEqual(props.modelValue, emptyModelValue) && call(props['onUpdate:modelValue'], emptyModelValue)
      resetValidation()
    }

    return {
      inputEl,
      picker,
      displayValue,
      pickerValue,
      showMenu,
      isFocusing,
      rangeSelecting,
      formDisabled,
      formReadonly,
      errorMessage,
      menuPopoverClass,
      isDatetime,
      pickerType,
      pickerMin,
      pickerMax,
      singleTime,
      rangeTimes,
      singleAllowFns,
      startAllowFns,
      endAllowFns,
      n,
      classes,
      handleTimeChange,
      handleRangeTimeChange,
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
@import '../ripple/ripple';
@import '../button/button';
@import '../icon/icon';
@import '../menu/menu';
@import '../menu-option/menuOption';
@import '../menu-select/menuSelect';
@import '../field-decorator/fieldDecorator';
@import '../form-details/formDetails';
@import '../input/input';
@import '../date-picker/date-picker';
@import './date-input';
</style>
