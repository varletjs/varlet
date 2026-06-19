<template>
  <div :class="n()">
    <div :class="n('content')">
      <transition :name="`${nDate()}${reverse ? '-reverse' : ''}-translatex`">
        <div :key="panelKey">
          <ul :class="n('head')">
            <li v-for="week in sortWeekList" :key="week">{{ getDayAbbr(week) }}</li>
          </ul>
          <ul :class="n('body')">
            <li v-for="(cell, index) in days" :key="index">
              <var-button
                type="primary"
                var-day-picker-cover
                round
                :elevation="panelProps.buttonElevation"
                v-bind="{
                  ...buttonProps(cell),
                }"
                @click="selectDay(cell)"
              >
                {{ cell.day }}
              </var-button>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { onSmartMounted } from '@varlet/use'
import { computed, defineComponent, ref, watch, type ComputedRef, type PropType, type Ref } from 'vue'
import VarButton from '../button'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import { createNamespace } from '../utils/components'
import { createDayjs } from '../utils/shared'
import { DatePickerFormats, DatePickerUnits, ShiftDirections, WeekHeader, type Week } from './constants'
import { type DatePickerSelectionState, type PanelDatePickerProps, type DatePickerPreviewState } from './types'

const dayjs = createDayjs()

type Dayjs = ReturnType<typeof dayjs>

const DAYS_PER_WEEK = 7
const WEEKS_PER_PANEL = 6

const MonthOffset = {
  Prev: -1,
  Current: 0,
  Next: 1,
} as const

type MonthOffset = (typeof MonthOffset)[keyof typeof MonthOffset]

type DayCell = {
  value: string
  day: number
  monthOffset: MonthOffset
}

const { n } = createNamespace('day-picker')
const { n: nDate } = createNamespace('date-picker')

export default defineComponent({
  name: 'DayPickerPanel',
  components: {
    VarButton,
  },
  props: {
    selection: {
      type: Object as PropType<DatePickerSelectionState>,
      required: true,
    },
    preview: {
      type: Object as PropType<DatePickerPreviewState>,
      required: true,
    },
    current: {
      type: String,
      required: true,
    },
    panelProps: {
      type: Object as PropType<PanelDatePickerProps>,
      required: true,
    },
  },
  emits: ['choose-day'],

  setup(props, { emit }) {
    const [, , currentDay] = props.current.split('-')
    const days: Ref<Array<DayCell>> = ref([])
    const reverse: Ref<boolean> = ref(false)
    const panelKey: Ref<number> = ref(0)

    const { t: pt } = injectLocaleProvider()

    const previewIsSelectedMonth: ComputedRef<boolean> = computed(
      () =>
        props.selection.selectedYear === props.preview.previewYear &&
        props.selection.selectedMonth === props.preview.previewMonth,
    )

    const sortWeekList: ComputedRef<Array<Week>> = computed(() => {
      const index = WeekHeader.findIndex((week: Week) => week === props.panelProps.firstDayOfWeek)

      if (index === -1 || index === 0) {
        return [...WeekHeader]
      }

      return [...WeekHeader.slice(index), ...WeekHeader.slice(0, index)]
    })

    function getDayAbbr(key: Week): string {
      return (pt || t)('datePickerWeekDict')?.[key].abbr ?? ''
    }

    function createCell(date: Dayjs, monthOffset: MonthOffset): DayCell {
      return {
        value: date.format(DatePickerFormats.Day),
        day: date.date(),
        monthOffset,
      }
    }

    function initDays() {
      const {
        preview: { previewMonth, previewYear },
      }: { preview: DatePickerPreviewState } = props

      const firstDay = dayjs(`${previewYear}-${previewMonth}-01`)
      const lastDay = firstDay.endOf(DatePickerUnits.Month)
      const daysInMonth = firstDay.daysInMonth()

      const leadingCount = Math.max(
        0,
        sortWeekList.value.findIndex((week: Week) => week === `${firstDay.day()}`),
      )
      const trailingCount = WEEKS_PER_PANEL * DAYS_PER_WEEK - leadingCount - daysInMonth

      const cells: Array<DayCell> = []

      for (let offset = leadingCount; offset > 0; offset--) {
        cells.push(createCell(firstDay.subtract(offset, DatePickerUnits.Day), MonthOffset.Prev))
      }

      for (let day = 1; day <= daysInMonth; day++) {
        cells.push(createCell(firstDay.date(day), MonthOffset.Current))
      }

      for (let offset = 1; offset <= trailingCount; offset++) {
        cells.push(createCell(lastDay.add(offset, DatePickerUnits.Day), MonthOffset.Next))
      }

      days.value = cells
    }

    function isInRange(value: string) {
      const { min, max } = props.panelProps
      const isBeforeMax = max ? dayjs(value).isSameOrBefore(dayjs(max), DatePickerUnits.Day) : true
      const isAfterMin = min ? dayjs(value).isSameOrAfter(dayjs(min), DatePickerUnits.Day) : true

      return isBeforeMax && isAfterMin
    }

    function getSelectedValue() {
      const { selectedYear, selectedMonth, selectedDay } = props.selection

      return selectedYear && selectedMonth && selectedDay
        ? `${selectedYear}-${selectedMonth}-${selectedDay}`
        : undefined
    }

    function isSingleSelectedDate(value: string) {
      const selectedValue = getSelectedValue()

      return selectedValue ? dayjs(value).isSame(dayjs(selectedValue), DatePickerUnits.Day) : false
    }

    function isSelectedDate(value: string): boolean {
      const {
        selection: { selectedDays, selectedRangeDays },
        panelProps: { range },
      }: { selection: DatePickerSelectionState; panelProps: PanelDatePickerProps } = props

      if (!range) {
        return selectedDays.includes(value)
      }

      if (!selectedRangeDays.length) {
        return false
      }

      if (selectedRangeDays.length === 1) {
        return dayjs(value).isSame(dayjs(selectedRangeDays[0]), DatePickerUnits.Day)
      }

      const isBeforeMax = dayjs(value).isSameOrBefore(dayjs(selectedRangeDays[1]), DatePickerUnits.Day)
      const isAfterMin = dayjs(value).isSameOrAfter(dayjs(selectedRangeDays[0]), DatePickerUnits.Day)

      return isBeforeMax && isAfterMin
    }

    function isDateDisabled(value: string) {
      const { allowedDates } = props.panelProps

      return !isInRange(value) || (allowedDates ? !allowedDates(value) : false)
    }

    function shouldShowOutline(value: string, selected: boolean, disabled: boolean) {
      const { multiple, range, showCurrent } = props.panelProps
      const current = showCurrent && dayjs(value).isSame(dayjs(props.current), DatePickerUnits.Day)

      if (!current) {
        return false
      }

      if ((range || multiple || previewIsSelectedMonth.value) && disabled) {
        return true
      }

      if (range || multiple) {
        return !selected
      }

      return previewIsSelectedMonth.value ? props.selection.selectedDay !== currentDay : true
    }

    function buttonProps(cell: DayCell) {
      const {
        panelProps: { color, multiple, range },
      }: { panelProps: PanelDatePickerProps } = props

      const { value, monthOffset } = cell
      const isCurrentMonth = monthOffset === MonthOffset.Current
      const singleSelected = isSingleSelectedDate(value)
      const selected = range || multiple ? isSelectedDate(value) : singleSelected
      const disabled = isDateDisabled(value)
      const text = disabled || (range || multiple ? !selected : !singleSelected)
      const outline = shouldShowOutline(value, selected, disabled)
      const cover = !disabled && !outline && !selected
      const textColor = !disabled && outline ? (color ?? '') : ''

      return {
        text,
        outline,
        textColor,
        [`${nDate()}-color-cover`]: cover,
        class: [n('button'), { [n('button--usable')]: isCurrentMonth, [n('button--adjacent')]: !isCurrentMonth }],
        disabled,
      }
    }

    // expose for internal
    function shiftPreview(direction: ShiftDirections) {
      reverse.value = direction === ShiftDirections.Prev
      panelKey.value += direction === ShiftDirections.Prev ? -1 : 1
    }

    // expose for internal
    function shiftYearPreview(direction: ShiftDirections) {
      reverse.value = direction === ShiftDirections.Prev
      panelKey.value += direction === ShiftDirections.Prev ? -1 : 1
    }

    function selectDay(cell: DayCell) {
      emit('choose-day', cell.day, cell.monthOffset)
    }

    onSmartMounted(() => {
      initDays()
    })

    watch(
      () => props.preview,
      () => {
        initDays()
      },
    )

    return {
      n,
      nDate,
      days,
      reverse,
      panelKey,
      sortWeekList,
      shiftPreview,
      shiftYearPreview,
      getDayAbbr,
      selectDay,
      buttonProps,
    }
  },
})
</script>
