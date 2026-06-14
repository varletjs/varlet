<template>
  <div :class="classes(n(), formatElevation(elevation, 2), [!showTitle, n('--no-title')])">
    <div v-if="showTitle" :class="n('title')" :style="{ background: titleColor || color }">
      <div :class="n('title-select')">
        <div :class="n('title-hint')">{{ titleHint }}</div>
      </div>

      <div
        :class="
          classes(
            n('title-date'),
            [!isYearPanel || type === 'year', n('title-date--active')],
            [range, n('title-date--range')],
          )
        "
        @click="switchPanel('date')"
      >
        <transition :name="multiple ? '' : `${n()}${reverse ? '-reverse' : ''}-translatey`">
          <div v-if="type === 'year'" :key="`${chooseYear}`">
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
          <div v-else-if="type === 'month'" :key="`${chooseYear}${chooseMonth}`">
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
    <div :class="n('body')" @touchstart="handleTouchstart" @touchmove="handleTouchmove" @touchend="handleTouchend">
      <panel-header
        v-if="panelType"
        :type="headerType"
        :date="headerPreview"
        :month-panel-in-date-mode="type === 'date' && panelType === 'month'"
        :show-panel-toggle="type === 'date' && panelType !== 'date'"
        @check-panel="switchPanel('date')"
        @check-year-panel="switchPanel('year')"
        @check-month-panel="switchPanel('month')"
        @check-year-date="checkHeaderYearDate"
        @check-date="checkHeaderDate"
      />
      <transition :name="`${n()}-panel-fade`">
        <year-picker-panel
          v-if="panelType === 'year'"
          ref="yearPanelEl"
          :component-props="componentProps"
          :preview="previewYear"
          @choose-year="chooseYearFromPanel"
        />
        <month-picker-panel
          v-else-if="panelType === 'month'"
          ref="monthPanelEl"
          :preview="previewDate"
          :component-props="componentProps"
          @choose-month="chooseMonthFromPanel"
          @check-preview="checkPreview"
        />
        <day-picker-panel
          v-else-if="panelType === 'date'"
          ref="dayPanelEl"
          :current="currentDate"
          :choose="selectedDate"
          :preview="previewDate"
          :component-props="componentProps"
          @choose-day="chooseDayFromPanel"
          @check-preview="checkPreview"
        />
      </transition>
    </div>
    <div v-if="$slots.actions" :class="n('actions')">
      <slot name="actions" />
    </div>
  </div>
</template>

<script lang="ts">
import { call, doubleRaf, error, isArray, toNumber } from '@varlet/shared'
import dayjs from 'dayjs/esm/index.js'
import { computed, defineComponent, ref, watch, type RendererNode } from 'vue'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import { createNamespace, formatElevation } from '../utils/components'
import { padStart } from '../utils/shared'
import {
  MONTH_LIST,
  props,
  WEEK_HEADER,
  type Choose,
  type ComponentProps,
  type Month,
  type Preview,
  type TouchDirection,
  type Week,
} from './props'
import DayPickerPanel from './src/day-picker-panel.vue'
import MonthPickerPanel from './src/month-picker-panel.vue'
import PanelHeader from './src/panel-header.vue'
import YearPickerPanel from './src/year-picker-panel.vue'

const { name, n, classes } = createNamespace('date-picker')

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
    const currentDate = dayjs().format('YYYY-MM-D')
    const [currentYear, currentMonth] = currentDate.split('-')
    const monthDes = MONTH_LIST.find((month) => month === currentMonth) as Month
    const isYearPanel = ref(false)
    const isMonthPanel = ref(false)
    const rangeDone = ref(true)
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
    const componentProps = computed<ComponentProps>(() => ({
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
    const selectedDate = computed<Choose>(() => ({
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
    const previewDate = computed<Preview>(() => ({
      previewMonth: previewMonth.value,
      previewYear: previewYear.value,
    }))
    const panelType = computed<string>(() => {
      if (props.type === 'year' || isYearPanel.value) {
        return 'year'
      }

      if (props.type === 'month' || isMonthPanel.value) {
        return 'month'
      }

      if (props.type === 'date') {
        return 'date'
      }

      return ''
    })
    const headerType = computed<string>(() => (panelType.value === 'date' ? 'day' : panelType.value))
    const headerPreview = computed<Preview>(() =>
      panelType.value === 'year'
        ? ({
            previewYear: previewYear.value,
          } as Preview)
        : previewDate.value,
    )
    const titleHint = computed<string>(() => props.hint ?? getDefaultHint())

    const yearTitle = computed<string>(() => {
      const { multiple, range } = props

      if (range) {
        return chooseRangeYear.value.length ? `${chooseRangeYear.value[0]} ~ ${chooseRangeYear.value[1]}` : ''
      }

      return multiple ? `${chooseYears.value.length}${(pt || t)('datePickerSelected')}` : (chooseYear.value ?? '')
    })

    const monthTitle = computed<string>(() => {
      const { multiple, range } = props

      if (range) {
        return chooseRangeMonth.value.length ? `${chooseRangeMonth.value[0]} ~ ${chooseRangeMonth.value[1]}` : ''
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
        const formattedDays = chooseRangeDay.value.map((date) => dayjs(date).format('YYYY-MM-DD'))

        return formattedDays.length ? `${formattedDays[0]} ~ ${formattedDays[1]}` : ''
      }

      if (multiple) {
        return `${chooseDays.value.length}${(pt || t)('datePickerSelected')}`
      }

      if (!chooseYear.value || !chooseMonth.value || !chooseDay.value) {
        return ''
      }
      const weekIndex = dayjs(`${chooseYear.value}-${chooseMonth.value}-${chooseDay.value}`).day()
      const week: Week = WEEK_HEADER.find((value) => value === `${weekIndex}`) as Week
      const weekName = (pt || t)('datePickerWeekDict')?.[week].name ?? ''

      const monthName = (pt || t)('datePickerMonthDict')?.[chooseMonth.value].name ?? ''
      const showDay = padStart(chooseDay.value, 2, '0')

      if ((pt || t)('lang') === 'zh-CN') {
        return `${chooseMonth.value}-${showDay} ${weekName.slice(0, 3)}`
      }
      return `${weekName.slice(0, 3)}, ${monthName.slice(0, 3)} ${chooseDay.value}`
    })
    const isUntouchable = computed(() => !props.touchable || !panelType.value)
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
      selectedDate.value.chooseRangeDay.map((choose) => dayjs(choose).format('YYYY-MM-DD')),
    )
    const isSameYear = computed(() => chooseYear.value === previewYear.value)
    const isSameMonth = computed(() => chooseMonth.value === previewMonth.value)

    let startX = 0
    let startY = 0
    let checkType = ''
    let keepPreviewOnModelValueChange = false
    let touchDirection: TouchDirection | undefined

    watch(
      () => props.modelValue,
      (value) => {
        const syncPreview = !keepPreviewOnModelValueChange
        keepPreviewOnModelValueChange = false

        if (!checkValue()) {
          return
        }

        if (props.range) {
          if (!isArray(value)) {
            return
          }

          rangeDone.value = value.length !== 1
          rangeInit(value, props.type, syncPreview)
        } else if (props.multiple) {
          if (!isArray(value)) {
            return
          }

          multipleInit(value, props.type, syncPreview)
        } else {
          dateInit(getSingleDate(value as string | undefined), syncPreview)
        }
      },
      { immediate: true },
    )

    watch(panelType, resetState)

    function switchPanel(type: string) {
      if (type === 'year') {
        isYearPanel.value = true
      } else if (type === 'month') {
        isMonthPanel.value = true
      } else {
        isYearPanel.value = false
        isMonthPanel.value = false
      }
    }

    function getDefaultHint() {
      if (props.type === 'year') {
        return (pt || t)('datePickerYearHint')
      }

      if (props.type === 'month') {
        return (pt || t)('datePickerMonthHint')
      }

      return (pt || t)('datePickerHint')
    }

    function getCurrentPanelRef() {
      return panelType.value === 'year' ? yearPanelEl : panelType.value === 'month' ? monthPanelEl : dayPanelEl
    }

    function checkHeaderDate(checkType: string) {
      getCurrentPanelRef().value!.forwardRef(checkType)
    }

    function checkHeaderYearDate(checkType: string) {
      dayPanelEl.value!.forwardYearRef(checkType)
    }

    function handleTouchstart(event: TouchEvent) {
      if (isUntouchable.value) {
        return
      }

      const { clientX, clientY } = event.touches[0]
      startX = clientX
      startY = clientY
    }

    function getDirection(x: number, y: number): TouchDirection {
      return x >= y && x > 20 ? 'x' : 'y'
    }

    function handleTouchmove(event: TouchEvent) {
      if (isUntouchable.value) {
        return
      }

      const { clientX, clientY } = event.touches[0]
      const x = clientX - startX
      const y = clientY - startY

      touchDirection = getDirection(Math.abs(x), Math.abs(y))
      checkType = x > 0 ? 'prev' : 'next'
    }

    async function handleTouchend() {
      if (isUntouchable.value || touchDirection !== 'x') {
        return
      }

      await doubleRaf()
      getCurrentPanelRef().value!.forwardRef(checkType)
      resetState()
    }

    function updateRange(date: string, type: string) {
      const rangeDate = type === 'year' ? chooseRangeYear : type === 'month' ? chooseRangeMonth : chooseRangeDay
      rangeDate.value = rangeDone.value ? [date, date] : [rangeDate.value[0], date]
      rangeDone.value = !rangeDone.value

      if (rangeDone.value) {
        const isChangeOrder = dayjs(rangeDate.value[0]).isAfter(rangeDate.value[1])
        const date = isChangeOrder ? [rangeDate.value[1], rangeDate.value[0]] : [...rangeDate.value]

        markPreviewKeep()
        call(props['onUpdate:modelValue'], date)
        call(props.onChange, date)
      }
    }

    function updateMultiple(date: string, type: string) {
      const multipleDates = type === 'year' ? chooseYears : type === 'month' ? chooseMonths : chooseDays
      const formatType = type === 'year' ? 'YYYY' : type === 'month' ? 'YYYY-MM' : 'YYYY-MM-DD'
      const formatDates = multipleDates.value.map((date) => dayjs(date).format(formatType))

      const index = formatDates.findIndex((choose) => choose === date)

      if (index === -1) {
        formatDates.push(date)
      } else {
        formatDates.splice(index, 1)
      }

      markPreviewKeep()
      call(props['onUpdate:modelValue'], formatDates)
      call(props.onChange, formatDates)
    }

    function getReverse(dateType: string, date: Month | number) {
      if (!chooseYear.value || !chooseMonth.value) {
        return false
      }
      if (!isSameYear.value) {
        return chooseYear.value > previewYear.value
      }

      if (dateType === 'year') {
        return (date as number) < toNumber(chooseYear.value)
      }

      if (dateType === 'month') {
        return (date as Month) < chooseMonth.value
      }

      return isSameMonth.value ? (date as number) < toNumber(chooseDay.value) : chooseMonth.value > previewMonth.value
    }

    function chooseDayFromPanel(day: number) {
      const { readonly, range, multiple, onChange, 'onUpdate:modelValue': updateModelValue } = props
      if (day < 0 || readonly) {
        return
      }

      reverse.value = getReverse('day', day)

      const date = `${previewYear.value}-${previewMonth.value}-${day}`
      const formatDate = dayjs(date).format('YYYY-MM-DD')

      if (range) {
        updateRange(formatDate, 'day')
      } else if (multiple) {
        updateMultiple(formatDate, 'day')
      } else {
        markPreviewKeep()
        call(updateModelValue, formatDate)
        call(onChange, formatDate)
      }
    }

    function chooseMonthFromPanel(month: Month) {
      const { type, readonly, range, multiple, onChange, onPreview, 'onUpdate:modelValue': updateModelValue } = props
      reverse.value = getReverse('month', month)

      if (type === 'month' && !readonly) {
        const date = `${previewYear.value}-${month}`

        if (range) {
          updateRange(date, 'month')
        } else if (multiple) {
          updateMultiple(date, 'month')
        } else {
          markPreviewKeep()
          call(updateModelValue, date)
          call(onChange, date)
        }
      } else {
        previewMonth.value = month
        call(
          onPreview,
          toNumber(previewYear.value),
          toNumber(previewMonth.value),
          type === 'date' ? toNumber(chooseDay.value) : undefined,
        )
      }

      isMonthPanel.value = false
    }

    function chooseYearFromPanel(year: number) {
      const { type, readonly, range, multiple, onChange, onPreview, 'onUpdate:modelValue': updateModelValue } = props
      reverse.value = getReverse('year', year)

      if (type === 'year' && !readonly) {
        if (range) {
          updateRange(`${year}`, 'year')
        } else if (multiple) {
          updateMultiple(`${year}`, 'year')
        } else {
          markPreviewKeep()
          call(updateModelValue, `${year}`)
          call(onChange, `${year}`)
        }
      } else {
        previewYear.value = `${year}`
        call(
          onPreview,
          toNumber(previewYear.value),
          toNumber(previewMonth.value),
          type === 'date' ? toNumber(chooseDay.value) : undefined,
        )
      }

      isYearPanel.value = false
    }

    function checkPreview(type: string, checkType: string) {
      const changeValue = checkType === 'prev' ? -1 : 1

      if (type === 'year') {
        previewYear.value = `${toNumber(previewYear.value) + changeValue}`
      } else {
        let checkIndex = toNumber(previewMonth.value) + changeValue

        if (checkIndex < 1) {
          previewYear.value = `${toNumber(previewYear.value) - 1}`
          checkIndex = 12
        }

        if (checkIndex > 12) {
          previewYear.value = `${toNumber(previewYear.value) + 1}`
          checkIndex = 1
        }

        previewMonth.value = MONTH_LIST.find((month) => toNumber(month) === checkIndex) as Month
      }

      call(
        props.onPreview,
        toNumber(previewYear.value),
        toNumber(previewMonth.value),
        props.type === 'date' ? toNumber(chooseDay.value) : undefined,
      )
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
        const formatDate = dayjs(props.fallbackViewDate).format('YYYY-MM-D')

        if (formatDate !== 'Invalid Date') {
          return props.fallbackViewDate
        }
      }

      return dayjs().format('YYYY-MM-D')
    }

    function getSingleDate(value: string | undefined) {
      if (value && !invalidFormatDate(dayjs(value).format('YYYY-MM-D'))) {
        return value
      }

      return getFallbackDate()
    }

    function getFirstValidDate(value: Array<string>, type: string) {
      const formatType = type === 'year' ? 'YYYY' : type === 'month' ? 'YYYY-MM' : 'YYYY-MM-D'

      return value.find((choose) => !invalidFormatDate(dayjs(choose).format(formatType)))
    }

    function markPreviewKeep() {
      keepPreviewOnModelValueChange = props.type === 'date'
    }

    function rangeInit(value: Array<string>, type: string, syncPreview = true) {
      const rangeDate = type === 'year' ? chooseRangeYear : type === 'month' ? chooseRangeMonth : chooseRangeDay
      const formatType = type === 'year' ? 'YYYY' : type === 'month' ? 'YYYY-MM' : 'YYYY-MM-D'
      const formatDateList = value
        .map((choose) => dayjs(choose).format(formatType))
        .filter((date) => !invalidFormatDate(date))
        .slice(0, 2)

      rangeDate.value = formatDateList

      const isChangeOrder = dayjs(rangeDate.value[0]).isAfter(rangeDate.value[1])

      if (rangeDate.value.length === 2 && isChangeOrder) {
        rangeDate.value = [rangeDate.value[1], rangeDate.value[0]]
      }

      if (syncPreview) {
        previewInit(getFirstValidDate(value, type) ?? getFallbackDate())
      }
    }

    function multipleInit(value: Array<string>, type: string, syncPreview = true) {
      const rangeDate = type === 'year' ? chooseYears : type === 'month' ? chooseMonths : chooseDays
      const formatType = type === 'year' ? 'YYYY' : type === 'month' ? 'YYYY-MM' : 'YYYY-MM-D'

      // need uniq
      const formatDateList = Array.from(new Set(value.map((choose) => dayjs(choose).format(formatType))))
      rangeDate.value = formatDateList.filter((date) => date !== 'Invalid Date')

      if (syncPreview) {
        previewInit(getFirstValidDate(value, type) ?? getFallbackDate())
      }
    }

    function dateInit(value: string | undefined, syncPreview = true) {
      const handleValue = value ? dayjs(value) : dayjs(getFallbackDate())
      const formatDate = handleValue.format('YYYY-MM-D')

      if (invalidFormatDate(formatDate)) {
        return
      }

      const [yearValue, monthValue, dayValue] = formatDate.split('-')

      const monthDes: Month = MONTH_LIST.find((month) => month === monthValue) as Month

      chooseMonth.value = monthDes
      chooseYear.value = yearValue
      chooseDay.value = dayValue

      if (syncPreview) {
        previewInit(formatDate)
      }
    }

    function previewInit(value: string | undefined) {
      const handleValue = value ? dayjs(value) : dayjs(getFallbackDate())
      const formatDate = handleValue.format('YYYY-MM-D')

      if (invalidFormatDate(formatDate)) {
        return
      }

      const [yearValue, monthValue] = formatDate.split('-')
      const monthDes: Month = MONTH_LIST.find((month) => month === monthValue) as Month

      previewMonth.value = monthDes
      previewYear.value = yearValue
    }

    function resetState() {
      startY = 0
      startX = 0
      checkType = ''
      touchDirection = undefined
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
      componentProps,
      dateSlotProps,
      formattedRangeDays,
      n,
      classes,
      switchPanel,
      checkHeaderDate,
      checkHeaderYearDate,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      chooseDayFromPanel,
      chooseMonthFromPanel,
      chooseYearFromPanel,
      checkPreview,
      formatElevation,
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
