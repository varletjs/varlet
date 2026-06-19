<template>
  <div :class="classes(n(), formatElevation(elevation, 2), [!showTitle, n('--no-title')])" @pointerdown.capture.prevent>
    <div v-if="showTitle" :class="n('title')" :style="{ background: titleColor || color }">
      <div :class="n('title-select')">
        <div :class="n('title-hint')">{{ titleHint }}</div>
      </div>

      <div
        :class="
          classes(
            n('title-date'),
            [!showYearPanel || type === DatePickerTypes.Year, n('title-date--active')],
            [range, n('title-date--range')],
          )
        "
        @click="switchPanel(DatePickerTypes.Date)"
      >
        <transition :name="multiple ? '' : `${n()}${reverse ? '-reverse' : ''}-translatey`">
          <div v-if="type === DatePickerTypes.Year" :key="`${selectionState.selectedYear}`">
            <slot v-if="range" name="range" :choose="selectionState.selectedRangeYears">
              {{ yearTitle }}
            </slot>
            <slot v-else-if="multiple" name="multiple" :choose="selectionState.selectedYears">
              {{ yearTitle }}
            </slot>
            <slot v-else name="year" :year="selectionState.selectedYear">
              {{ yearTitle }}
            </slot>
          </div>
          <div
            v-else-if="type === DatePickerTypes.Month"
            :key="`${selectionState.selectedYear}${selectionState.selectedMonth}`"
          >
            <slot v-if="range" name="range" :choose="selectionState.selectedRangeMonths">
              {{ monthTitle }}
            </slot>
            <slot v-else-if="multiple" name="multiple" :choose="selectionState.selectedMonths">
              {{ monthTitle }}
            </slot>
            <slot v-else name="month" :month="selectionState.selectedMonth" :year="selectionState.selectedYear">
              {{ monthTitle }}
            </slot>
          </div>
          <div
            v-else
            :key="`${selectionState.selectedYear}${selectionState.selectedMonth}${selectionState.selectedDay}`"
          >
            <slot v-if="range" name="range" :choose="formattedRangeDays">
              {{ dateTitle }}
            </slot>
            <slot v-else-if="multiple" name="multiple" :choose="selectionState.selectedDays">
              {{ dateTitle }}
            </slot>
            <slot v-else name="date" v-bind="dateSlotProps">
              {{ dateTitle }}
            </slot>
          </div>
        </transition>
      </div>
    </div>
    <div :class="n('body')">
      <panel-header
        v-if="panelType"
        :type="headerType"
        :date="headerPreview"
        :show-panel-toggle="type === DatePickerTypes.Date && panelType !== DatePickerTypes.Date"
        @open-date-panel="switchPanel(DatePickerTypes.Date)"
        @open-year-panel="switchPanel(DatePickerTypes.Year)"
        @open-month-panel="switchPanel(DatePickerTypes.Month)"
        @shift-year-preview="shiftDatePanelYearPreview"
        @shift-preview="shiftCurrentPanelPreview"
      />
      <div :class="n('panel')">
        <transition :name="`${n()}-panel-fade`">
          <year-picker-panel
            v-if="panelType === DatePickerTypes.Year"
            ref="yearPanelEl"
            :panel-props="panelProps"
            :selection="selectionState"
            :preview="previewYear"
            @choose-year="selectYearFromPanel"
          />
          <month-picker-panel
            v-else-if="panelType === DatePickerTypes.Month"
            ref="monthPanelEl"
            :selection="selectionState"
            :preview="previewState"
            :panel-props="panelProps"
            @choose-month="selectMonthFromPanel"
          />
          <day-picker-panel
            v-else-if="panelType === DatePickerTypes.Date"
            ref="dayPanelEl"
            :current="currentDate"
            :selection="selectionState"
            :preview="previewState"
            :panel-props="panelProps"
            @choose-day="selectDayFromPanel"
          />
        </transition>
      </div>
    </div>
    <div v-if="$slots.actions" :class="n('actions')">
      <slot name="actions" />
    </div>
  </div>
</template>

<script lang="ts">
import { call, error, isArray, toNumber, uniq } from '@varlet/shared'
import { computed, defineComponent, reactive, ref, watch, type RendererNode } from 'vue'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import { createNamespace, formatElevation } from '../utils/components'
import { createDayjs, padStart } from '../utils/shared'
import {
  DatePickerFormats,
  DatePickerTypes,
  DatePickerUnits,
  MonthList,
  ShiftDirections,
  WeekHeader,
  type Month,
  type Week,
} from './constants'
import DayPickerPanel from './DayPickerPanel.vue'
import MonthPickerPanel from './MonthPickerPanel.vue'
import PanelHeader from './PanelHeader.vue'
import { props } from './props'
import { type DatePickerSelectionState, type PanelDatePickerProps, type DatePickerPreviewState } from './types'
import YearPickerPanel from './YearPickerPanel.vue'

const { name, n, classes } = createNamespace('date-picker')

type PanelType = DatePickerTypes

const dayjs = createDayjs()

export default defineComponent({
  name,
  components: {
    MonthPickerPanel,
    YearPickerPanel,
    DayPickerPanel,
    PanelHeader,
  },
  props,
  setup(props) {
    const { t: pt } = injectLocaleProvider()
    const currentDate = dayjs().format(DatePickerFormats.Day)
    const [currentYear, currentMonth] = currentDate.split('-')
    const currentMonthValue = MonthList.find((month) => month === currentMonth) as Month
    const showYearPanel = ref(false)
    const showMonthPanel = ref(false)
    const rangeSelectionComplete = ref(true)
    const rangeSelecting = computed(() => props.range && !rangeSelectionComplete.value)
    const previewMonth = ref<Month>(currentMonthValue)
    const previewYear = ref(currentYear)
    const reverse = ref(false)
    const yearPanelEl = ref<RendererNode | null>(null)
    const monthPanelEl = ref<RendererNode | null>(null)
    const dayPanelEl = ref<RendererNode | null>(null)

    const selectionState = reactive<DatePickerSelectionState>({
      selectedMonth: undefined,
      selectedYear: undefined,
      selectedDay: undefined,
      selectedYears: [],
      selectedMonths: [],
      selectedDays: [],
      selectedRangeYears: [],
      selectedRangeMonths: [],
      selectedRangeDays: [],
    })

    const panelProps = computed<PanelDatePickerProps>(() => ({
      allowedDates: props.allowedDates,
      type: props.type,
      color: props.color,
      firstDayOfWeek: props.firstDayOfWeek,
      min: props.min,
      max: props.max,
      showCurrent: props.showCurrent,
      multiple: props.multiple,
      range: props.range,
      buttonElevation: props.buttonElevation,
    }))

    const previewState = computed<DatePickerPreviewState>(() => ({
      previewMonth: previewMonth.value,
      previewYear: previewYear.value,
    }))

    const panelType = computed<DatePickerTypes | undefined>(() => {
      if (props.type === DatePickerTypes.Year || showYearPanel.value) {
        return DatePickerTypes.Year
      }

      if (props.type === DatePickerTypes.Month || showMonthPanel.value) {
        return DatePickerTypes.Month
      }

      if (props.type === DatePickerTypes.Date) {
        return DatePickerTypes.Date
      }

      return undefined
    })

    const headerType = computed<DatePickerTypes | DatePickerUnits | undefined>(() =>
      panelType.value === DatePickerTypes.Date ? DatePickerUnits.Day : panelType.value,
    )

    const headerPreview = computed<DatePickerPreviewState>(() =>
      panelType.value === DatePickerTypes.Year
        ? ({
            previewYear: previewYear.value,
          } as DatePickerPreviewState)
        : previewState.value,
    )

    const titleHint = computed<string>(() => props.hint ?? getDefaultHint())

    const yearTitle = computed<string>(() => {
      const { multiple, range } = props

      if (range) {
        return selectionState.selectedRangeYears.length ? selectionState.selectedRangeYears.join(' ~ ') : ''
      }

      return multiple
        ? `${selectionState.selectedYears.length}${(pt || t)('datePickerSelected')}`
        : (selectionState.selectedYear ?? '')
    })

    const monthTitle = computed<string>(() => {
      const { multiple, range } = props

      if (range) {
        return selectionState.selectedRangeMonths.length ? selectionState.selectedRangeMonths.join(' ~ ') : ''
      }

      let monthName = ''

      if (selectionState.selectedMonth) {
        monthName = (pt || t)('datePickerMonthDict')?.[selectionState.selectedMonth].name ?? ''
      }

      return multiple ? `${selectionState.selectedMonths.length}${(pt || t)('datePickerSelected')}` : monthName
    })

    const dateTitle = computed<string>(() => {
      const { multiple, range } = props

      if (range) {
        const formattedDays = selectionState.selectedRangeDays.map((date) =>
          dayjs(date).format(DatePickerFormats.DayPadded),
        )

        return formattedDays.length ? formattedDays.join(' ~ ') : ''
      }

      if (multiple) {
        return `${selectionState.selectedDays.length}${(pt || t)('datePickerSelected')}`
      }

      if (!selectionState.selectedYear || !selectionState.selectedMonth || !selectionState.selectedDay) {
        return ''
      }

      const weekIndex = dayjs(
        `${selectionState.selectedYear}-${selectionState.selectedMonth}-${selectionState.selectedDay}`,
      ).day()

      const week: Week = WeekHeader.find((value) => value === `${weekIndex}`) as Week
      const weekName = (pt || t)('datePickerWeekDict')?.[week].name ?? ''
      const monthName = (pt || t)('datePickerMonthDict')?.[selectionState.selectedMonth].name ?? ''
      const showDay = padStart(selectionState.selectedDay, 2, '0')

      if ((pt || t)('lang') === 'zh-CN') {
        return `${selectionState.selectedMonth}-${showDay} ${weekName.slice(0, 3)}`
      }

      return `${weekName.slice(0, 3)}, ${monthName.slice(0, 3)} ${selectionState.selectedDay}`
    })
    const dateSlotProps = computed<Record<string, string>>(() => {
      const weekIndex = dayjs(
        `${selectionState.selectedYear}-${selectionState.selectedMonth}-${selectionState.selectedDay}`,
      ).day()

      const date = selectionState.selectedDay ? padStart(selectionState.selectedDay, 2, '0') : ''

      return {
        week: `${weekIndex}`,
        year: selectionState.selectedYear ?? '',
        month: selectionState.selectedMonth ?? '',
        date,
      }
    })

    const formattedRangeDays = computed<string[]>(() =>
      selectionState.selectedRangeDays.map((date) => dayjs(date).format(DatePickerFormats.DayPadded)),
    )

    const selectedYearInPreview = computed(() => selectionState.selectedYear === previewYear.value)

    const selectedMonthInPreview = computed(() => selectionState.selectedMonth === previewMonth.value)

    let shouldKeepPreviewOnModelValueChange = false

    watch(
      () => props.modelValue,
      () => {
        const syncPreview = !shouldKeepPreviewOnModelValueChange
        shouldKeepPreviewOnModelValueChange = false

        syncFromModelValue(syncPreview)
      },
      { immediate: true },
    )

    function syncFromModelValue(syncPreview = true) {
      if (!checkValue()) {
        return
      }

      const { modelValue, type } = props

      if (props.range) {
        if (!isArray(modelValue)) {
          return
        }

        rangeSelectionComplete.value = modelValue.length !== 1
        syncRangeValue(modelValue, type, syncPreview)
        return
      }

      if (props.multiple) {
        if (!isArray(modelValue)) {
          return
        }

        syncMultipleValue(modelValue, type, syncPreview)
        return
      }

      syncSingleValue(modelValue as string | undefined, syncPreview)
    }

    function switchPanel(type: PanelType) {
      if (type === DatePickerTypes.Year) {
        showYearPanel.value = true
        showMonthPanel.value = false
        return
      }

      if (type === DatePickerTypes.Month) {
        showYearPanel.value = false
        showMonthPanel.value = true
        return
      }

      showYearPanel.value = false
      showMonthPanel.value = false
    }

    function getDefaultHint() {
      if (props.type === DatePickerTypes.Year) {
        return (pt || t)('datePickerYearHint')
      }

      if (props.type === DatePickerTypes.Month) {
        return (pt || t)('datePickerMonthHint')
      }

      return (pt || t)('datePickerHint')
    }

    function getActivePanelRef() {
      return panelType.value === DatePickerTypes.Year
        ? yearPanelEl
        : panelType.value === DatePickerTypes.Month
          ? monthPanelEl
          : dayPanelEl
    }

    function shiftCurrentPanelPreview(direction: ShiftDirections) {
      getActivePanelRef().value!.shiftPreview(direction)

      if (panelType.value === DatePickerTypes.Date) {
        shiftPreview(DatePickerUnits.Month, direction)
      } else if (panelType.value === DatePickerTypes.Month) {
        shiftPreview(DatePickerUnits.Year, direction)
      }
    }

    function shiftDatePanelYearPreview(direction: ShiftDirections) {
      dayPanelEl.value!.shiftYearPreview(direction)
      shiftPreview(DatePickerUnits.Year, direction)
    }

    function getFormatByType(type: DatePickerTypes) {
      return type === DatePickerTypes.Year
        ? DatePickerFormats.Year
        : type === DatePickerTypes.Month
          ? DatePickerFormats.Month
          : DatePickerFormats.Day
    }

    function getRangeValuesByType(type: DatePickerTypes) {
      return type === DatePickerTypes.Year
        ? selectionState.selectedRangeYears
        : type === DatePickerTypes.Month
          ? selectionState.selectedRangeMonths
          : selectionState.selectedRangeDays
    }

    function setRangeValuesByType(type: DatePickerTypes, value: string[]) {
      if (type === DatePickerTypes.Year) {
        selectionState.selectedRangeYears = value
        return
      }

      if (type === DatePickerTypes.Month) {
        selectionState.selectedRangeMonths = value
        return
      }

      selectionState.selectedRangeDays = value
    }

    function getMultipleValuesByType(type: DatePickerTypes) {
      return type === DatePickerTypes.Year
        ? selectionState.selectedYears
        : type === DatePickerTypes.Month
          ? selectionState.selectedMonths
          : selectionState.selectedDays
    }

    function setMultipleValuesByType(type: DatePickerTypes, value: string[]) {
      if (type === DatePickerTypes.Year) {
        selectionState.selectedYears = value
        return
      }

      if (type === DatePickerTypes.Month) {
        selectionState.selectedMonths = value
        return
      }

      selectionState.selectedDays = value
    }

    function emitModelValueChange(value: string | string[]) {
      call(props['onUpdate:modelValue'], value)
      call(props.onChange, value)
    }

    function getPreviewDayOfMonth() {
      return props.type === DatePickerTypes.Date && selectionState.selectedDay
        ? toNumber(selectionState.selectedDay)
        : undefined
    }

    function emitPreview() {
      call(props.onPreview, toNumber(previewYear.value), toNumber(previewMonth.value), getPreviewDayOfMonth())
    }

    function updateRange(value: string, type: DatePickerTypes) {
      const selectedRangeValues = getRangeValuesByType(type)
      const nextRangeValues = rangeSelectionComplete.value ? [value, value] : [selectedRangeValues[0], value]

      setRangeValuesByType(type, nextRangeValues)
      rangeSelectionComplete.value = !rangeSelectionComplete.value

      if (!rangeSelectionComplete.value) {
        return
      }

      const shouldSwapRange = dayjs(nextRangeValues[0]).isAfter(nextRangeValues[1])
      const nextValue = shouldSwapRange ? [nextRangeValues[1], nextRangeValues[0]] : [...nextRangeValues]

      markPreviewKeep()
      emitModelValueChange(nextValue)
    }

    function updateMultiple(value: string, type: DatePickerTypes) {
      const selectedValues = getMultipleValuesByType(type)
      const formatType =
        type === DatePickerTypes.Year
          ? DatePickerFormats.Year
          : type === DatePickerTypes.Month
            ? DatePickerFormats.Month
            : DatePickerFormats.DayPadded
      const formattedValues = selectedValues.map((date) => dayjs(date).format(formatType))

      const index = formattedValues.findIndex((selectedValue) => selectedValue === value)
      const selected = index !== -1

      if (selected) {
        formattedValues.splice(index, 1)
      }

      if (!selected) {
        formattedValues.push(value)
      }

      markPreviewKeep()
      emitModelValueChange(formattedValues)
    }

    function selectValue(value: string, type: PanelType) {
      if (props.range) {
        updateRange(value, type)
        return
      }

      if (props.multiple) {
        updateMultiple(value, type)
        return
      }

      markPreviewKeep()
      emitModelValueChange(value)
    }

    function isSelectableDate(value: string, unit: DatePickerUnits, checkAllowedDates = true) {
      const { min, max, allowedDates } = props
      const isBeforeMax = max ? dayjs(value).isSameOrBefore(dayjs(max), unit) : true
      const isAfterMin = min ? dayjs(value).isSameOrAfter(dayjs(min), unit) : true
      const isAllowed = checkAllowedDates && allowedDates ? allowedDates(value) : true

      return isBeforeMax && isAfterMin && isAllowed
    }

    function getReverse(dateType: DatePickerUnits, date: Month | number) {
      if (!selectionState.selectedYear || !selectionState.selectedMonth) {
        return false
      }
      if (!selectedYearInPreview.value) {
        return selectionState.selectedYear > previewYear.value
      }

      if (dateType === DatePickerUnits.Year) {
        return (date as number) < toNumber(selectionState.selectedYear)
      }

      if (dateType === DatePickerUnits.Month) {
        return (date as Month) < selectionState.selectedMonth
      }

      return selectedMonthInPreview.value
        ? (date as number) < toNumber(selectionState.selectedDay)
        : selectionState.selectedMonth > previewMonth.value
    }

    function selectDayFromPanel(day: number, monthOffset = 0) {
      const { readonly } = props
      if (readonly) {
        return
      }

      const targetMonth = dayjs(`${previewYear.value}-${previewMonth.value}-01`).add(monthOffset, DatePickerUnits.Month)
      const date = `${targetMonth.format(DatePickerFormats.Month)}-${day}`

      if (!isSelectableDate(date, DatePickerUnits.Day)) {
        return
      }

      reverse.value = monthOffset !== 0 ? monthOffset < 0 : getReverse(DatePickerUnits.Day, day)

      if (monthOffset !== 0) {
        previewYear.value = targetMonth.format(DatePickerFormats.Year)
        previewMonth.value = targetMonth.format(DatePickerFormats.Month).split('-')[1] as Month
        emitPreview()
      }

      selectValue(dayjs(date).format(DatePickerFormats.DayPadded), DatePickerTypes.Date)
    }

    function selectMonthFromPanel(month: Month) {
      const { type, readonly } = props
      const date = `${previewYear.value}-${month}`

      if (readonly || !isSelectableDate(date, DatePickerUnits.Month, type === DatePickerTypes.Month)) {
        return
      }

      reverse.value = getReverse(DatePickerUnits.Month, month)

      if (type === DatePickerTypes.Month) {
        selectValue(date, DatePickerTypes.Month)
        showMonthPanel.value = false
        return
      }

      previewMonth.value = month
      emitPreview()
      showMonthPanel.value = false
    }

    function selectYearFromPanel(year: number) {
      const { type, readonly } = props
      const date = `${year}`

      if (readonly || !isSelectableDate(date, DatePickerUnits.Year, type === DatePickerTypes.Year)) {
        return
      }

      reverse.value = getReverse(DatePickerUnits.Year, year)

      if (type === DatePickerTypes.Year) {
        selectValue(date, DatePickerTypes.Year)
        showYearPanel.value = false
        return
      }

      previewYear.value = `${year}`
      emitPreview()
      showYearPanel.value = false
    }

    function shiftPreview(
      unit: typeof DatePickerUnits.Year | typeof DatePickerUnits.Month,
      direction: ShiftDirections,
    ) {
      const changeValue = direction === ShiftDirections.Prev ? -1 : 1

      if (unit === DatePickerUnits.Year) {
        previewYear.value = `${toNumber(previewYear.value) + changeValue}`
        emitPreview()
        return
      }

      let nextMonth = toNumber(previewMonth.value) + changeValue

      if (nextMonth < 1) {
        previewYear.value = `${toNumber(previewYear.value) - 1}`
        nextMonth = 12
      }

      if (nextMonth > 12) {
        previewYear.value = `${toNumber(previewYear.value) + 1}`
        nextMonth = 1
      }

      previewMonth.value = MonthList.find((month) => toNumber(month) === nextMonth) as Month
      emitPreview()
    }

    function checkValue() {
      if ((props.multiple || props.range) && !isArray(props.modelValue)) {
        error('DatePicker', 'type of prop "modelValue" should be an Array')
        return false
      }

      if (!props.multiple && !props.range && isArray(props.modelValue)) {
        error('DatePicker', 'type of prop "modelValue" should be a String')
        return false
      }

      return true
    }

    function invalidFormatDate(date: string | Array<string> | undefined): boolean {
      if (isArray(date)) {
        return false
      }

      if (date === 'Invalid Date') {
        error('DatePicker', '"modelValue" is an Invalid Date')
        return true
      }

      return false
    }

    function getFallbackDate() {
      if (props.fallbackViewDate) {
        const formatDate = dayjs(props.fallbackViewDate).format(DatePickerFormats.Day)

        if (formatDate !== 'Invalid Date') {
          return props.fallbackViewDate
        }
      }

      return dayjs().format(DatePickerFormats.Day)
    }

    function getSingleDate(value: string | undefined) {
      if (value && !invalidFormatDate(dayjs(value).format(DatePickerFormats.Day))) {
        return value
      }

      return getFallbackDate()
    }

    function getFirstValidDate(value: Array<string>, type: DatePickerTypes) {
      const formatType = getFormatByType(type)

      return value.find((date) => !invalidFormatDate(dayjs(date).format(formatType)))
    }

    function markPreviewKeep() {
      shouldKeepPreviewOnModelValueChange = props.type === DatePickerTypes.Date || props.range || props.multiple
    }

    function syncRangeValue(value: Array<string>, type: DatePickerTypes, syncPreview = true) {
      const formatType = getFormatByType(type)
      const formattedValues = value
        .map((date) => dayjs(date).format(formatType))
        .filter((date) => !invalidFormatDate(date))
        .slice(0, 2)

      setRangeValuesByType(type, formattedValues)

      if (formattedValues.length === 2) {
        const shouldSwapRange = dayjs(formattedValues[0]).isAfter(formattedValues[1])

        if (shouldSwapRange) {
          setRangeValuesByType(type, [formattedValues[1], formattedValues[0]])
        }
      }

      if (syncPreview) {
        syncPreviewValue(getFirstValidDate(value, type) ?? getFallbackDate())
      }
    }

    function syncMultipleValue(value: Array<string>, type: DatePickerTypes, syncPreview = true) {
      const formatType = getFormatByType(type)

      // need uniq
      const formattedValues = uniq(value.map((date) => dayjs(date).format(formatType)))
      setMultipleValuesByType(
        type,
        formattedValues.filter((date) => date !== 'Invalid Date'),
      )

      if (syncPreview) {
        syncPreviewValue(getFirstValidDate(value, type) ?? getFallbackDate())
      }
    }

    function syncSingleValue(value: string | undefined, syncPreview = true) {
      if (!value) {
        selectionState.selectedMonth = undefined
        selectionState.selectedYear = undefined
        selectionState.selectedDay = undefined

        if (syncPreview) {
          syncPreviewValue(getFallbackDate())
        }

        return
      }

      const parsedDate = dayjs(value)
      const formatDate = parsedDate.format(DatePickerFormats.Day)

      if (invalidFormatDate(formatDate)) {
        return
      }

      const [yearValue, monthValue, dayValue] = formatDate.split('-')

      const selectedMonthValue: Month = MonthList.find((month) => month === monthValue) as Month

      selectionState.selectedMonth = selectedMonthValue
      selectionState.selectedYear = yearValue
      selectionState.selectedDay = dayValue

      if (syncPreview) {
        syncPreviewValue(formatDate)
      }
    }

    function syncPreviewValue(value: string | undefined) {
      const parsedDate = value ? dayjs(value) : dayjs(getFallbackDate())
      const formatDate = parsedDate.format(DatePickerFormats.Day)

      if (invalidFormatDate(formatDate)) {
        return
      }

      const [yearValue, monthValue] = formatDate.split('-')
      const previewMonthValue: Month = MonthList.find((month) => month === monthValue) as Month

      previewMonth.value = previewMonthValue
      previewYear.value = yearValue
    }

    // expose
    function resetPreview() {
      showYearPanel.value = false
      showMonthPanel.value = false

      if (!props.range && !props.multiple) {
        syncPreviewValue(getSingleDate(props.modelValue as string | undefined))
        return
      }

      const previewValue = isArray(props.modelValue)
        ? (getFirstValidDate(props.modelValue, props.type) ?? getFallbackDate())
        : getFallbackDate()

      syncPreviewValue(previewValue)
    }

    function syncModelValue() {
      showYearPanel.value = false
      showMonthPanel.value = false
      shouldKeepPreviewOnModelValueChange = false
      syncFromModelValue(true)
    }

    return {
      yearPanelEl,
      monthPanelEl,
      dayPanelEl,
      reverse,
      currentDate,
      previewYear,
      showYearPanel,
      showMonthPanel,
      monthTitle,
      dateTitle,
      yearTitle,
      titleHint,
      panelType,
      headerType,
      headerPreview,
      selectionState,
      previewState,
      panelProps,
      dateSlotProps,
      formattedRangeDays,
      n,
      classes,
      switchPanel,
      shiftCurrentPanelPreview,
      shiftDatePanelYearPreview,
      selectDayFromPanel,
      selectMonthFromPanel,
      selectYearFromPanel,
      shiftPreview,
      resetPreview,
      syncModelValue,
      rangeSelecting,
      formatElevation,
      DatePickerTypes,
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
@import './date-picker';
</style>
