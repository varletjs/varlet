<template>
  <div :class="classes(n(), [shadow, 'var-elevation--2'])">
    <div :class="n('title')" :style="{ background: headerColor || color }">
      <div :class="classes(n('title-year'), [isYearPanel, n('title-year--active')])" @click="clickEl('year')">
        <slot name="year" :year="chooseYear">
          {{ chooseYear }}
        </slot>
      </div>

      <div
        :class="classes(n('title-date'), [!isYearPanel, n('title-date--active')], [range, n('title-date--range')])"
        @click="clickEl('date')"
      >
        <transition :name="multiple ? '' : `${n()}${reverse ? '-reverse' : ''}-translatey`">
          <div :key="`${chooseYear}${chooseMonth?.index}`" v-if="type === 'month'">
            <slot name="range" :choose="getChoose.chooseRangeMonth" v-if="range">
              {{ getMonthTitle }}
            </slot>
            <slot name="multiple" :choose="getChoose.chooseMonths" v-else-if="multiple">
              {{ getMonthTitle }}
            </slot>
            <slot name="month" :month="chooseMonth?.index" :year="chooseYear" v-else>
              {{ getMonthTitle }}
            </slot>
          </div>
          <div :key="`${chooseYear}${chooseMonth?.index}${chooseDay}`" v-else>
            <slot name="range" :choose="formatRange" v-if="range">
              {{ getDateTitle }}
            </slot>
            <slot name="multiple" :choose="getChoose.chooseDays" v-else-if="multiple">
              {{ getDateTitle }}
            </slot>
            <slot name="date" v-bind="slotProps" v-else>
              {{ getDateTitle }}
            </slot>
          </div>
        </transition>
      </div>
    </div>
    <div :class="n('body')" @touchstart="handleTouchstart" @touchmove="handleTouchmove" @touchend="handleTouchend">
      <transition :name="`${n()}-panel-fade`">
        <year-picker-panel
          :component-props="componentProps"
          :preview="previewYear"
          @choose-year="getChooseYear"
          v-if="getPanelType === 'year'"
        />
        <month-picker-panel
          ref="monthPanelEl"
          :current="currentDate"
          :choose="getChoose"
          :preview="getPreview"
          :click-year="() => clickEl('year')"
          :component-props="componentProps"
          @choose-month="getChooseMonth"
          @check-preview="checkPreview"
          v-else-if="getPanelType === 'month'"
        />
        <day-picker-panel
          ref="dayPanelEl"
          :current="currentDate"
          :choose="getChoose"
          :preview="getPreview"
          :component-props="componentProps"
          :click-month="() => clickEl('month')"
          @choose-day="getChooseDay"
          @check-preview="checkPreview"
          v-else-if="getPanelType === 'date'"
        />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive, watch } from 'vue'
import dayjs from 'dayjs/esm'
import MonthPickerPanel from './src/month-picker-panel.vue'
import YearPickerPanel from './src/year-picker-panel.vue'
import DayPickerPanel from './src/day-picker-panel.vue'
import { props, MONTH_LIST, WEEK_HEADER } from './props'
import { isArray, toNumber } from '@varlet/shared'
import { nextTickFrame } from '../utils/elements'
import { createNamespace, call } from '../utils/components'
import { pack } from '../locale'
import type { Ref, ComputedRef, UnwrapRef, RendererNode } from 'vue'
import type { MonthDict, Choose, Preview, WeekDict, ComponentProps, TouchDirection } from './props'

const { n, classes } = createNamespace('date-picker')

export default defineComponent({
  name: 'VarDatePicker',
  components: {
    MonthPickerPanel,
    YearPickerPanel,
    DayPickerPanel,
  },
  props,
  setup(props) {
    let startX = 0
    let startY = 0
    let checkType = ''
    let touchDirection: TouchDirection | undefined
    const currentDate: string = dayjs().format('YYYY-MM-D')
    const [currentYear, currentMonth] = currentDate.split('-')
    const monthDes: MonthDict = MONTH_LIST.find((month) => month.index === currentMonth) as MonthDict
    const isYearPanel: Ref<boolean> = ref(false)
    const isMonthPanel: Ref<boolean> = ref(false)
    const rangeDone: Ref<boolean> = ref(true)
    const chooseMonth: Ref<MonthDict | undefined> = ref()
    const chooseYear: Ref<string | undefined> = ref()
    const chooseDay: Ref<string | undefined> = ref()
    const previewMonth: Ref<MonthDict> = ref(monthDes)
    const previewYear: Ref<string> = ref(currentYear)
    const reverse: Ref<boolean> = ref(false)
    const chooseMonths: Ref<Array<string>> = ref([])
    const chooseDays: Ref<Array<string>> = ref([])
    const chooseRangeMonth: Ref<Array<string>> = ref([])
    const chooseRangeDay: Ref<Array<string>> = ref([])
    const monthPanelEl: Ref<RendererNode | null> = ref(null)
    const dayPanelEl: Ref<RendererNode | null> = ref(null)

    const componentProps: UnwrapRef<ComponentProps> = reactive({
      allowedDates: props.allowedDates,
      type: props.type,
      color: props.color,
      firstDayOfWeek: props.firstDayOfWeek,
      min: props.min,
      max: props.max,
      showCurrent: props.showCurrent,
      multiple: props.multiple,
      range: props.range,
    })

    const getChoose: ComputedRef<Choose> = computed(() => ({
      chooseMonth: chooseMonth.value,
      chooseYear: chooseYear.value,
      chooseDay: chooseDay.value,
      chooseMonths: chooseMonths.value,
      chooseDays: chooseDays.value,
      chooseRangeMonth: chooseRangeMonth.value,
      chooseRangeDay: chooseRangeDay.value,
    }))

    const getPreview: ComputedRef<Preview> = computed(() => ({
      previewMonth: previewMonth.value,
      previewYear: previewYear.value,
    }))

    const getMonthTitle: ComputedRef<string> = computed(() => {
      const { multiple, range } = props

      if (range) {
        return chooseRangeMonth.value.length ? `${chooseRangeMonth.value[0]} ~ ${chooseRangeMonth.value[1]}` : ''
      }

      let monthName = ''
      if (chooseMonth.value) {
        monthName = pack.value.datePickerMonthDict?.[chooseMonth.value.index].name ?? ''
      }
      return multiple ? `${chooseMonths.value.length}${pack.value.datePickerSelected}` : monthName
    })

    const getDateTitle: ComputedRef<string> = computed(() => {
      const { multiple, range } = props

      if (range) {
        const formatRangeDays = chooseRangeDay.value.map((date) => dayjs(date).format('YYYY-MM-DD'))

        return formatRangeDays.length ? `${formatRangeDays[0]} ~ ${formatRangeDays[1]}` : ''
      }

      if (multiple) return `${chooseDays.value.length}${pack.value.datePickerSelected}`

      if (!chooseYear.value || !chooseMonth.value || !chooseDay.value) return ''
      const weekIndex = dayjs(`${chooseYear.value}-${chooseMonth.value.index}-${chooseDay.value}`).day()
      const week: WeekDict = WEEK_HEADER.find((value) => value.index === `${weekIndex}`) as WeekDict
      const weekName = pack.value.datePickerWeekDict?.[week.index].name ?? ''

      const monthName = pack.value.datePickerMonthDict?.[chooseMonth.value.index].name ?? ''
      const showDay = chooseDay.value.padStart(2, '0')

      if (pack.value.lang === 'zh-CN') return `${chooseMonth.value.index}-${showDay} ${weekName.slice(0, 3)}`
      return `${weekName.slice(0, 3)}, ${monthName.slice(0, 3)} ${chooseDay.value}`
    })

    const getPanelType: ComputedRef<string> = computed(() => {
      if (isYearPanel.value) return 'year'

      if (props.type === 'month' || isMonthPanel.value) return 'month'

      if (props.type === 'date') return 'date'

      return ''
    })

    const isUntouchable: ComputedRef<boolean> = computed(() => {
      return !props.touchable || ['', 'year'].includes(getPanelType.value)
    })

    const slotProps: ComputedRef<Record<string, string>> = computed(() => {
      const weekIndex = dayjs(`${chooseYear.value}-${chooseMonth.value?.index}-${chooseDay.value}`).day()
      const date = chooseDay.value ? chooseDay.value?.padStart(2, '0') : ''

      return {
        week: `${weekIndex}`,
        year: chooseYear.value ?? '',
        month: chooseMonth.value?.index ?? '',
        date,
      }
    })

    const formatRange: ComputedRef<Array<string>> = computed(() =>
      getChoose.value.chooseRangeDay.map((choose) => dayjs(choose).format('YYYY-MM-DD'))
    )

    const isSameYear: ComputedRef<boolean> = computed(() => chooseYear.value === previewYear.value)
    const isSameMonth: ComputedRef<boolean> = computed(() => chooseMonth.value?.index === previewMonth.value.index)

    const clickEl = (type: string) => {
      if (type === 'year') isYearPanel.value = true
      else if (type === 'month') isMonthPanel.value = true
      else {
        isYearPanel.value = false
        isMonthPanel.value = false
      }
    }

    const handleTouchstart = (event: TouchEvent) => {
      if (isUntouchable.value) return

      const { clientX, clientY } = event.touches[0]
      startX = clientX
      startY = clientY
    }

    const getDirection = (x: number, y: number): TouchDirection => {
      return x >= y && x > 20 ? 'x' : 'y'
    }

    const handleTouchmove = (event: TouchEvent) => {
      if (isUntouchable.value) return

      const { clientX, clientY } = event.touches[0]
      const x = clientX - startX
      const y = clientY - startY

      touchDirection = getDirection(Math.abs(x), Math.abs(y))
      checkType = x > 0 ? 'prev' : 'next'
    }

    const handleTouchend = () => {
      if (isUntouchable.value || touchDirection !== 'x') return

      const componentRef = getPanelType.value === 'month' ? monthPanelEl : dayPanelEl
      nextTickFrame(() => {
        componentRef.value!.forwardRef(checkType)
        resetState()
      })
    }

    const updateRange = (date: string, type: string) => {
      const rangeDate = type === 'month' ? chooseRangeMonth : chooseRangeDay
      rangeDate.value = rangeDone.value ? [date, date] : [rangeDate.value[0], date]
      rangeDone.value = !rangeDone.value

      if (rangeDone.value) {
        const isChangeOrder = dayjs(rangeDate.value[0]).isAfter(rangeDate.value[1])
        const date = isChangeOrder ? [rangeDate.value[1], rangeDate.value[0]] : [...rangeDate.value]

        call(props['onUpdate:modelValue'], date)
        call(props.onChange, date)
      }
    }

    const updateMultiple = (date: string, type: string) => {
      const multipleDates = type === 'month' ? chooseMonths : chooseDays
      const formatType = type === 'month' ? 'YYYY-MM' : 'YYYY-MM-DD'
      const formatDates = multipleDates.value.map((date) => dayjs(date).format(formatType))

      const index = formatDates.findIndex((choose) => choose === date)

      if (index === -1) formatDates.push(date)
      else formatDates.splice(index, 1)

      call(props['onUpdate:modelValue'], formatDates)
      call(props.onChange, formatDates)
    }

    const getReverse = (dateType: string, date: MonthDict | number) => {
      if (!chooseYear.value || !chooseMonth.value) return false
      if (!isSameYear.value) return chooseYear.value > previewYear.value

      if (dateType === 'month') return (date as MonthDict).index < chooseMonth.value.index

      return isSameMonth.value
        ? (date as number) < toNumber(chooseDay.value)
        : chooseMonth.value.index > previewMonth.value.index
    }

    const getChooseDay = (day: number) => {
      const { readonly, range, multiple, onChange, 'onUpdate:modelValue': updateModelValue } = props
      if (day < 0 || readonly) return

      reverse.value = getReverse('day', day)

      const date = `${previewYear.value}-${previewMonth.value.index}-${day}`
      const formatDate = dayjs(date).format('YYYY-MM-DD')

      if (range) updateRange(formatDate, 'day')
      else if (multiple) updateMultiple(formatDate, 'day')
      else {
        call(updateModelValue, formatDate)
        call(onChange, formatDate)
      }
    }

    const getChooseMonth = (month: MonthDict) => {
      const { type, readonly, range, multiple, onChange, 'onUpdate:modelValue': updateModelValue } = props
      reverse.value = getReverse('month', month)

      if (type === 'month' && !readonly) {
        const date = `${previewYear.value}-${month.index}`

        if (range) updateRange(date, 'month')
        else if (multiple) updateMultiple(date, 'month')
        else {
          call(updateModelValue, date)
          call(onChange, date)
        }
      } else {
        previewMonth.value = month
      }

      isMonthPanel.value = false
    }

    const getChooseYear = (year: number) => {
      previewYear.value = `${year}`
      isYearPanel.value = false
      isMonthPanel.value = true
    }

    const checkPreview = (type: string, checkType: string) => {
      const changeValue = checkType === 'prev' ? -1 : 1

      if (type === 'year') {
        previewYear.value = `${toNumber(previewYear.value) + changeValue}`
      } else {
        let checkIndex = toNumber(previewMonth.value.index) + changeValue

        if (checkIndex < 1) {
          previewYear.value = `${toNumber(previewYear.value) - 1}`
          checkIndex = 12
        }

        if (checkIndex > 12) {
          previewYear.value = `${toNumber(previewYear.value) + 1}`
          checkIndex = 1
        }

        previewMonth.value = MONTH_LIST.find((month) => toNumber(month.index) === checkIndex) as MonthDict
      }
    }

    const checkValue = () => {
      if ((props.multiple || props.range) && !isArray(props.modelValue)) {
        console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array')
        return false
      }
      if (!props.multiple && !props.range && isArray(props.modelValue)) {
        console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String')
        return false
      }
      return true
    }

    const invalidFormatDate = (date: string | Array<string> | undefined): boolean => {
      if (isArray(date)) return false

      if (date === 'Invalid Date') {
        console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date')
        return true
      }

      return false
    }

    const rangeInit = (value: Array<string>, type: string) => {
      const rangeDate = type === 'month' ? chooseRangeMonth : chooseRangeDay
      const formatType = type === 'month' ? 'YYYY-MM' : 'YYYY-MM-D'
      const formatDateList = value.map((choose) => dayjs(choose).format(formatType)).slice(0, 2)

      const isValid = rangeDate.value.some((date) => invalidFormatDate(date))
      if (isValid) return

      rangeDate.value = formatDateList

      const isChangeOrder = dayjs(rangeDate.value[0]).isAfter(rangeDate.value[1])

      if (rangeDate.value.length === 2 && isChangeOrder) {
        rangeDate.value = [rangeDate.value[1], rangeDate.value[0]]
      }
    }

    const multipleInit = (value: Array<string>, type: string) => {
      const rangeDate = type === 'month' ? chooseMonths : chooseDays
      const formatType = type === 'month' ? 'YYYY-MM' : 'YYYY-MM-D'

      // 需要去重
      const formatDateList = Array.from(new Set(value.map((choose) => dayjs(choose).format(formatType))))
      rangeDate.value = formatDateList.filter((date) => date !== 'Invalid Date')
    }

    const dateInit = (value: string) => {
      const formatDate = dayjs(value).format('YYYY-MM-D')

      if (invalidFormatDate(formatDate)) return

      const [yearValue, monthValue, dayValue] = formatDate.split('-')

      const monthDes: MonthDict = MONTH_LIST.find((month) => month.index === monthValue) as MonthDict

      chooseMonth.value = monthDes
      chooseYear.value = yearValue
      chooseDay.value = dayValue
      previewMonth.value = monthDes
      previewYear.value = yearValue
    }

    const resetState = () => {
      startY = 0
      startX = 0
      checkType = ''
      touchDirection = undefined
    }

    watch(
      () => props.modelValue,
      (value) => {
        if (!checkValue() || invalidFormatDate(value) || !value) return

        if (props.range) {
          if (!isArray(value)) return

          rangeDone.value = value.length !== 1
          rangeInit(value, props.type)
        } else if (props.multiple) {
          if (!isArray(value)) return

          multipleInit(value, props.type)
        } else {
          dateInit(value as string)
        }
      },
      { immediate: true }
    )

    watch(getPanelType, resetState)

    return {
      n,
      classes,
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
      getMonthTitle,
      getDateTitle,
      getPanelType,
      getChoose,
      getPreview,
      componentProps,
      slotProps,
      formatRange,
      clickEl,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      getChooseDay,
      getChooseMonth,
      getChooseYear,
      checkPreview,
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
