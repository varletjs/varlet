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
            [!isYearPanel || type === DatePickerTypes.Year, n('title-date--active')],
            [range, n('title-date--range')],
          )
        "
        @click="switchPanel(DatePickerTypes.Date)"
      >
        <transition :name="multiple ? '' : `${n()}${reverse ? '-reverse' : ''}-translatey`">
          <div v-if="type === DatePickerTypes.Year" :key="`${chooseYear}`">
            <slot v-if="range" name="range" :choose="selectedDate.chooseRangeYear">
              {{ yearTitle }}
            </slot>
            <slot v-else-if="multiple" name="multiple" :choose="selectedDate.chooseYears">
              {{ yearTitle }}
            </slot>
            <slot v-else name="year" :year="chooseYear">
              {{ yearTitle }}
            </slot>
          </div>
          <div v-else-if="type === DatePickerTypes.Month" :key="`${chooseYear}${chooseMonth}`">
            <slot v-if="range" name="range" :choose="selectedDate.chooseRangeMonth">
              {{ monthTitle }}
            </slot>
            <slot v-else-if="multiple" name="multiple" :choose="selectedDate.chooseMonths">
              {{ monthTitle }}
            </slot>
            <slot v-else name="month" :month="chooseMonth" :year="chooseYear">
              {{ monthTitle }}
            </slot>
          </div>
          <div v-else :key="`${chooseYear}${chooseMonth}${chooseDay}`">
            <slot v-if="range" name="range" :choose="formattedRangeDays">
              {{ dateTitle }}
            </slot>
            <slot v-else-if="multiple" name="multiple" :choose="selectedDate.chooseDays">
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
            :date-picker-props="datePickerProps"
            :choose="selectedDate"
            :preview="previewYear"
            @choose-year="chooseYearFromPanel"
          />
          <month-picker-panel
            v-else-if="panelType === DatePickerTypes.Month"
            ref="monthPanelEl"
            :choose="selectedDate"
            :preview="previewDate"
            :date-picker-props="datePickerProps"
            @choose-month="chooseMonthFromPanel"
          />
          <day-picker-panel
            v-else-if="panelType === DatePickerTypes.Date"
            ref="dayPanelEl"
            :current="currentDate"
            :choose="selectedDate"
            :preview="previewDate"
            :date-picker-props="datePickerProps"
            @choose-day="chooseDayFromPanel"
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
import { computed, defineComponent, ref, watch, type RendererNode } from 'vue'
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
import { props } from './props'
import DayPickerPanel from './src/day-picker-panel.vue'
import MonthPickerPanel from './src/month-picker-panel.vue'
import PanelHeader from './src/panel-header.vue'
import YearPickerPanel from './src/year-picker-panel.vue'
import { type DatePickerSelectionState, type PanelDatePickerProps, type DatePickerPreviewState } from './types'

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
    const monthDes = MonthList.find((month) => month === currentMonth) as Month
    const isYearPanel = ref(false)
    const isMonthPanel = ref(false)
    const rangeDone = ref(true)
    const rangeSelecting = computed(() => props.range && !rangeDone.value)
    const chooseMonth = ref<Month | undefined>()
    const chooseYear = ref<string | undefined>()
    const chooseDay = ref<string | undefined>()
    const previewMonth = ref<Month>(monthDes)
    const previewYear = ref(currentYear)
    const reverse = ref(false)
    const chooseYears = ref<string[]>([])
    const chooseMonths = ref<string[]>([])
    const chooseDays = ref<string[]>([])
    const chooseRangeYear = ref<string[]>([])
    const chooseRangeMonth = ref<string[]>([])
    const chooseRangeDay = ref<string[]>([])
    const yearPanelEl = ref<RendererNode | null>(null)
    const monthPanelEl = ref<RendererNode | null>(null)
    const dayPanelEl = ref<RendererNode | null>(null)
    const datePickerProps = computed<PanelDatePickerProps>(() => ({
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
    const selectedDate = computed<DatePickerSelectionState>(() => ({
      chooseMonth: chooseMonth.value,
      chooseYear: chooseYear.value,
      chooseDay: chooseDay.value,
      chooseYears: chooseYears.value,
      chooseMonths: chooseMonths.value,
      chooseDays: chooseDays.value,
      chooseRangeYear: chooseRangeYear.value,
      chooseRangeMonth: chooseRangeMonth.value,
      chooseRangeDay: chooseRangeDay.value,
    }))
    const previewDate = computed<DatePickerPreviewState>(() => ({
      previewMonth: previewMonth.value,
      previewYear: previewYear.value,
    }))
    const panelType = computed<DatePickerTypes | undefined>(() => {
      if (props.type === DatePickerTypes.Year || isYearPanel.value) {
        return DatePickerTypes.Year
      }

      if (props.type === DatePickerTypes.Month || isMonthPanel.value) {
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
        : previewDate.value,
    )
    const titleHint = computed<string>(() => props.hint ?? getDefaultHint())

    const yearTitle = computed<string>(() => {
      const { multiple, range } = props

      if (range) {
        return chooseRangeYear.value.length ? chooseRangeYear.value.join(' ~ ') : ''
      }

      return multiple ? `${chooseYears.value.length}${(pt || t)('datePickerSelected')}` : (chooseYear.value ?? '')
    })

    const monthTitle = computed<string>(() => {
      const { multiple, range } = props

      if (range) {
        return chooseRangeMonth.value.length ? chooseRangeMonth.value.join(' ~ ') : ''
      }

      let monthName = ''
      if (chooseMonth.value) {
        monthName = (pt || t)('datePickerMonthDict')?.[chooseMonth.value].name ?? ''
      }
      return multiple ? `${chooseMonths.value.length}${(pt || t)('datePickerSelected')}` : monthName
    })

    const dateTitle = computed<string>(() => {
      const { multiple, range } = props

      if (range) {
        const formattedDays = chooseRangeDay.value.map((date) => dayjs(date).format(DatePickerFormats.DayPadded))

        return formattedDays.length ? formattedDays.join(' ~ ') : ''
      }

      if (multiple) {
        return `${chooseDays.value.length}${(pt || t)('datePickerSelected')}`
      }

      if (!chooseYear.value || !chooseMonth.value || !chooseDay.value) {
        return ''
      }
      const weekIndex = dayjs(`${chooseYear.value}-${chooseMonth.value}-${chooseDay.value}`).day()
      const week: Week = WeekHeader.find((value) => value === `${weekIndex}`) as Week
      const weekName = (pt || t)('datePickerWeekDict')?.[week].name ?? ''

      const monthName = (pt || t)('datePickerMonthDict')?.[chooseMonth.value].name ?? ''
      const showDay = padStart(chooseDay.value, 2, '0')

      if ((pt || t)('lang') === 'zh-CN') {
        return `${chooseMonth.value}-${showDay} ${weekName.slice(0, 3)}`
      }
      return `${weekName.slice(0, 3)}, ${monthName.slice(0, 3)} ${chooseDay.value}`
    })
    const dateSlotProps = computed<Record<string, string>>(() => {
      const weekIndex = dayjs(`${chooseYear.value}-${chooseMonth.value}-${chooseDay.value}`).day()
      const date = chooseDay.value ? padStart(chooseDay.value, 2, '0') : ''

      return {
        week: `${weekIndex}`,
        year: chooseYear.value ?? '',
        month: chooseMonth.value ?? '',
        date,
      }
    })
    const formattedRangeDays = computed<string[]>(() =>
      selectedDate.value.chooseRangeDay.map((choose) => dayjs(choose).format(DatePickerFormats.DayPadded)),
    )
    const isSameYear = computed(() => chooseYear.value === previewYear.value)
    const isSameMonth = computed(() => chooseMonth.value === previewMonth.value)

    let keepPreviewOnModelValueChange = false

    watch(
      () => props.modelValue,
      () => {
        const syncPreview = !keepPreviewOnModelValueChange
        keepPreviewOnModelValueChange = false

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

        rangeDone.value = modelValue.length !== 1
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
        isYearPanel.value = true
        isMonthPanel.value = false
        return
      }

      if (type === DatePickerTypes.Month) {
        isYearPanel.value = false
        isMonthPanel.value = true
        return
      }

      isYearPanel.value = false
      isMonthPanel.value = false
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

    function getRangeRefByType(type: DatePickerTypes) {
      return type === DatePickerTypes.Year
        ? chooseRangeYear
        : type === DatePickerTypes.Month
          ? chooseRangeMonth
          : chooseRangeDay
    }

    function getMultipleRefByType(type: DatePickerTypes) {
      return type === DatePickerTypes.Year ? chooseYears : type === DatePickerTypes.Month ? chooseMonths : chooseDays
    }

    function emitModelValueChange(value: string | string[]) {
      call(props['onUpdate:modelValue'], value)
      call(props.onChange, value)
    }

    function getPreviewDayOfMonth() {
      return props.type === DatePickerTypes.Date && chooseDay.value ? toNumber(chooseDay.value) : undefined
    }

    function emitPreview() {
      call(props.onPreview, toNumber(previewYear.value), toNumber(previewMonth.value), getPreviewDayOfMonth())
    }

    function updateRange(value: string, type: DatePickerTypes) {
      const rangeDate = getRangeRefByType(type)
      rangeDate.value = rangeDone.value ? [value, value] : [rangeDate.value[0], value]
      rangeDone.value = !rangeDone.value

      if (!rangeDone.value) {
        return
      }

      const isChangeOrder = dayjs(rangeDate.value[0]).isAfter(rangeDate.value[1])
      const nextValue = isChangeOrder ? [rangeDate.value[1], rangeDate.value[0]] : [...rangeDate.value]

      markPreviewKeep()
      emitModelValueChange(nextValue)
    }

    function updateMultiple(value: string, type: DatePickerTypes) {
      const multipleDates = getMultipleRefByType(type)
      const formatType =
        type === DatePickerTypes.Year
          ? DatePickerFormats.Year
          : type === DatePickerTypes.Month
            ? DatePickerFormats.Month
            : DatePickerFormats.DayPadded
      const formatDates = multipleDates.value.map((date) => dayjs(date).format(formatType))

      const index = formatDates.findIndex((choose) => choose === value)
      const selected = index !== -1

      if (selected) {
        formatDates.splice(index, 1)
      }

      if (!selected) {
        formatDates.push(value)
      }

      markPreviewKeep()
      emitModelValueChange(formatDates)
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
      if (!chooseYear.value || !chooseMonth.value) {
        return false
      }
      if (!isSameYear.value) {
        return chooseYear.value > previewYear.value
      }

      if (dateType === DatePickerUnits.Year) {
        return (date as number) < toNumber(chooseYear.value)
      }

      if (dateType === DatePickerUnits.Month) {
        return (date as Month) < chooseMonth.value
      }

      return isSameMonth.value ? (date as number) < toNumber(chooseDay.value) : chooseMonth.value > previewMonth.value
    }

    function chooseDayFromPanel(day: number, monthOffset = 0) {
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

    function chooseMonthFromPanel(month: Month) {
      const { type, readonly } = props
      const date = `${previewYear.value}-${month}`

      if (readonly || !isSelectableDate(date, DatePickerUnits.Month, type === DatePickerTypes.Month)) {
        return
      }

      reverse.value = getReverse(DatePickerUnits.Month, month)

      if (type === DatePickerTypes.Month) {
        selectValue(date, DatePickerTypes.Month)
        isMonthPanel.value = false
        return
      }

      previewMonth.value = month
      emitPreview()
      isMonthPanel.value = false
    }

    function chooseYearFromPanel(year: number) {
      const { type, readonly } = props
      const date = `${year}`

      if (readonly || !isSelectableDate(date, DatePickerUnits.Year, type === DatePickerTypes.Year)) {
        return
      }

      reverse.value = getReverse(DatePickerUnits.Year, year)

      if (type === DatePickerTypes.Year) {
        selectValue(date, DatePickerTypes.Year)
        isYearPanel.value = false
        return
      }

      previewYear.value = `${year}`
      emitPreview()
      isYearPanel.value = false
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

      return value.find((choose) => !invalidFormatDate(dayjs(choose).format(formatType)))
    }

    function markPreviewKeep() {
      keepPreviewOnModelValueChange = props.type === DatePickerTypes.Date || props.range || props.multiple
    }

    function syncRangeValue(value: Array<string>, type: DatePickerTypes, syncPreview = true) {
      const rangeDate = getRangeRefByType(type)
      const formatType = getFormatByType(type)
      const formatDateList = value
        .map((choose) => dayjs(choose).format(formatType))
        .filter((date) => !invalidFormatDate(date))
        .slice(0, 2)

      rangeDate.value = formatDateList

      if (rangeDate.value.length === 2) {
        const isChangeOrder = dayjs(rangeDate.value[0]).isAfter(rangeDate.value[1])

        if (isChangeOrder) {
          rangeDate.value = [rangeDate.value[1], rangeDate.value[0]]
        }
      }

      if (syncPreview) {
        syncPreviewValue(getFirstValidDate(value, type) ?? getFallbackDate())
      }
    }

    function syncMultipleValue(value: Array<string>, type: DatePickerTypes, syncPreview = true) {
      const multipleDate = getMultipleRefByType(type)
      const formatType = getFormatByType(type)

      // need uniq
      const formatDateList = uniq(value.map((choose) => dayjs(choose).format(formatType)))
      multipleDate.value = formatDateList.filter((date) => date !== 'Invalid Date')

      if (syncPreview) {
        syncPreviewValue(getFirstValidDate(value, type) ?? getFallbackDate())
      }
    }

    function syncSingleValue(value: string | undefined, syncPreview = true) {
      if (!value) {
        chooseMonth.value = undefined
        chooseYear.value = undefined
        chooseDay.value = undefined

        if (syncPreview) {
          syncPreviewValue(getFallbackDate())
        }

        return
      }

      const handleValue = dayjs(value)
      const formatDate = handleValue.format(DatePickerFormats.Day)

      if (invalidFormatDate(formatDate)) {
        return
      }

      const [yearValue, monthValue, dayValue] = formatDate.split('-')

      const monthDes: Month = MonthList.find((month) => month === monthValue) as Month

      chooseMonth.value = monthDes
      chooseYear.value = yearValue
      chooseDay.value = dayValue

      if (syncPreview) {
        syncPreviewValue(formatDate)
      }
    }

    function syncPreviewValue(value: string | undefined) {
      const handleValue = value ? dayjs(value) : dayjs(getFallbackDate())
      const formatDate = handleValue.format(DatePickerFormats.Day)

      if (invalidFormatDate(formatDate)) {
        return
      }

      const [yearValue, monthValue] = formatDate.split('-')
      const monthDes: Month = MonthList.find((month) => month === monthValue) as Month

      previewMonth.value = monthDes
      previewYear.value = yearValue
    }

    // expose
    function resetPreview() {
      isYearPanel.value = false
      isMonthPanel.value = false

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
      isYearPanel.value = false
      isMonthPanel.value = false
      keepPreviewOnModelValueChange = false
      syncFromModelValue(true)
    }

    return {
      yearPanelEl,
      monthPanelEl,
      dayPanelEl,
      reverse,
      currentDate,
      chooseMonth,
      chooseYear,
      chooseDay,
      previewYear,
      isYearPanel,
      isMonthPanel,
      monthTitle,
      dateTitle,
      yearTitle,
      titleHint,
      panelType,
      headerType,
      headerPreview,
      selectedDate,
      previewDate,
      datePickerProps,
      dateSlotProps,
      formattedRangeDays,
      n,
      classes,
      switchPanel,
      shiftCurrentPanelPreview,
      shiftDatePanelYearPreview,
      chooseDayFromPanel,
      chooseMonthFromPanel,
      chooseYearFromPanel,
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
