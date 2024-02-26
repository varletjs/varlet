<template>
  <div :class="classes(n(), formatElevation(elevation, 2))">
    <div :class="n('title')" :style="{ background: titleColor || color }">
      <div :class="n('title-select')">
        <div :class="n('title-hint')">{{ hint ?? t('datePickerHint') }}</div>
        <div
          v-if="type !== 'year'"
          :class="classes(n('title-year'), [isYearPanel, n('title-year--active')])"
          @click="clickEl('year')"
        >
          <slot name="year" :year="chooseYear">
            {{ chooseYear }}
          </slot>
        </div>
      </div>

      <div
        :class="
          classes(
            n('title-date'),
            [!isYearPanel || type === 'year', n('title-date--active')],
            [range, n('title-date--range')]
          )
        "
        @click="clickEl('date')"
      >
        <transition :name="multiple ? '' : `${n()}${reverse ? '-reverse' : ''}-translatey`">
          <div :key="`${chooseYear}`" v-if="type === 'year'">
            <slot name="range" :choose="getChoose.chooseRangeYear" v-if="range">
              {{ getYearTitle }}
            </slot>
            <slot name="multiple" :choose="getChoose.chooseYears" v-else-if="multiple">
              {{ getYearTitle }}
            </slot>
            <slot name="year" :year="chooseYear" v-else>
              {{ getYearTitle }}
            </slot>
          </div>
          <div :key="`${chooseYear}${chooseMonth}`" v-else-if="type === 'month'">
            <slot name="range" :choose="getChoose.chooseRangeMonth" v-if="range">
              {{ getMonthTitle }}
            </slot>
            <slot name="multiple" :choose="getChoose.chooseMonths" v-else-if="multiple">
              {{ getMonthTitle }}
            </slot>
            <slot name="month" :month="chooseMonth" :year="chooseYear" v-else>
              {{ getMonthTitle }}
            </slot>
          </div>
          <div :key="`${chooseYear}${chooseMonth}${chooseDay}`" v-else>
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
          ref="yearPanelEl"
          :choose="getChoose"
          :current="currentDate"
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
    <div :class="n('actions')" v-if="$slots.actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs/esm/index.js'
import MonthPickerPanel from './src/month-picker-panel.vue'
import YearPickerPanel from './src/year-picker-panel.vue'
import DayPickerPanel from './src/day-picker-panel.vue'
import { defineComponent, ref, computed, reactive, watch, type RendererNode } from 'vue'
import {
  props,
  MONTH_LIST,
  WEEK_HEADER,
  type Month,
  type Choose,
  type Preview,
  type ComponentProps,
  type TouchDirection,
  type Week,
} from './props'
import { isArray, toNumber, doubleRaf, call } from '@varlet/shared'
import { createNamespace, formatElevation } from '../utils/components'
import { padStart } from '../utils/shared'
import { t } from '../locale'

const { name, n, classes } = createNamespace('date-picker')

export default defineComponent({
  name,
  components: {
    MonthPickerPanel,
    YearPickerPanel,
    DayPickerPanel,
  },
  props,
  setup(props) {
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
    const componentProps = reactive<ComponentProps>({
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
    })
    const getChoose = computed<Choose>(() => ({
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
    const getPreview = computed<Preview>(() => ({
      previewMonth: previewMonth.value,
      previewYear: previewYear.value,
    }))

    const getYearTitle = computed<string>(() => {
      const { multiple, range } = props

      if (range) {
        return chooseRangeYear.value.length ? `${chooseRangeYear.value[0]} ~ ${chooseRangeYear.value[1]}` : ''
      }

      return multiple ? `${chooseYears.value.length}${t('datePickerSelected')}` : chooseYear.value ?? ''
    })

    const getMonthTitle = computed<string>(() => {
      const { multiple, range } = props

      if (range) {
        return chooseRangeMonth.value.length ? `${chooseRangeMonth.value[0]} ~ ${chooseRangeMonth.value[1]}` : ''
      }

      let monthName = ''
      if (chooseMonth.value) {
        monthName = t('datePickerMonthDict')?.[chooseMonth.value].name ?? ''
      }
      return multiple ? `${chooseMonths.value.length}${t('datePickerSelected')}` : monthName
    })

    const getDateTitle = computed<string>(() => {
      const { multiple, range } = props

      if (range) {
        const formatRangeDays = chooseRangeDay.value.map((date) => dayjs(date).format('YYYY-MM-DD'))

        return formatRangeDays.length ? `${formatRangeDays[0]} ~ ${formatRangeDays[1]}` : ''
      }

      if (multiple) return `${chooseDays.value.length}${t('datePickerSelected')}`

      if (!chooseYear.value || !chooseMonth.value || !chooseDay.value) return ''
      const weekIndex = dayjs(`${chooseYear.value}-${chooseMonth.value}-${chooseDay.value}`).day()
      const week: Week = WEEK_HEADER.find((value) => value === `${weekIndex}`) as Week
      const weekName = t('datePickerWeekDict')?.[week].name ?? ''

      const monthName = t('datePickerMonthDict')?.[chooseMonth.value].name ?? ''
      const showDay = padStart(chooseDay.value, 2, '0')

      if (t('lang') === 'zh-CN') return `${chooseMonth.value}-${showDay} ${weekName.slice(0, 3)}`
      return `${weekName.slice(0, 3)}, ${monthName.slice(0, 3)} ${chooseDay.value}`
    })
    const getPanelType = computed<string>(() => {
      if (props.type === 'year' || isYearPanel.value) return 'year'

      if (props.type === 'month' || isMonthPanel.value) return 'month'

      if (props.type === 'date') return 'date'

      return ''
    })
    const isUntouchable = computed(() => !props.touchable || !getPanelType.value)
    const slotProps = computed<Record<string, string>>(() => {
      const weekIndex = dayjs(`${chooseYear.value}-${chooseMonth.value}-${chooseDay.value}`).day()
      const date = chooseDay.value ? padStart(chooseDay.value, 2, '0') : ''

      return {
        week: `${weekIndex}`,
        year: chooseYear.value ?? '',
        month: chooseMonth.value ?? '',
        date,
      }
    })
    const formatRange = computed<string[]>(() =>
      getChoose.value.chooseRangeDay.map((choose) => dayjs(choose).format('YYYY-MM-DD'))
    )
    const isSameYear = computed(() => chooseYear.value === previewYear.value)
    const isSameMonth = computed(() => chooseMonth.value === previewMonth.value)

    let startX = 0
    let startY = 0
    let checkType = ''
    let touchDirection: TouchDirection | undefined

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

    function clickEl(type: string) {
      if (type === 'year') isYearPanel.value = true
      else if (type === 'month') isMonthPanel.value = true
      else {
        isYearPanel.value = false
        isMonthPanel.value = false
      }
    }

    function handleTouchstart(event: TouchEvent) {
      if (isUntouchable.value) return

      const { clientX, clientY } = event.touches[0]
      startX = clientX
      startY = clientY
    }

    function getDirection(x: number, y: number): TouchDirection {
      return x >= y && x > 20 ? 'x' : 'y'
    }

    function handleTouchmove(event: TouchEvent) {
      if (isUntouchable.value) return

      const { clientX, clientY } = event.touches[0]
      const x = clientX - startX
      const y = clientY - startY

      touchDirection = getDirection(Math.abs(x), Math.abs(y))
      checkType = x > 0 ? 'prev' : 'next'
    }

    async function handleTouchend() {
      if (isUntouchable.value || touchDirection !== 'x') return

      const componentRef =
        getPanelType.value === 'year' ? yearPanelEl : getPanelType.value === 'month' ? monthPanelEl : dayPanelEl
      await doubleRaf()
      componentRef.value!.forwardRef(checkType)
      resetState()
    }

    function updateRange(date: string, type: string) {
      const rangeDate = type === 'year' ? chooseRangeYear : type === 'month' ? chooseRangeMonth : chooseRangeDay
      rangeDate.value = rangeDone.value ? [date, date] : [rangeDate.value[0], date]
      rangeDone.value = !rangeDone.value

      if (rangeDone.value) {
        const isChangeOrder = dayjs(rangeDate.value[0]).isAfter(rangeDate.value[1])
        const date = isChangeOrder ? [rangeDate.value[1], rangeDate.value[0]] : [...rangeDate.value]

        call(props['onUpdate:modelValue'], date)
        call(props.onChange, date)
      }
    }

    function updateMultiple(date: string, type: string) {
      const multipleDates = type === 'year' ? chooseYears : type === 'month' ? chooseMonths : chooseDays
      const formatType = type === 'year' ? 'YYYY' : type === 'month' ? 'YYYY-MM' : 'YYYY-MM-DD'
      const formatDates = multipleDates.value.map((date) => dayjs(date).format(formatType))

      const index = formatDates.findIndex((choose) => choose === date)

      if (index === -1) formatDates.push(date)
      else formatDates.splice(index, 1)

      call(props['onUpdate:modelValue'], formatDates)
      call(props.onChange, formatDates)
    }

    function getReverse(dateType: string, date: Month | number) {
      if (!chooseYear.value || !chooseMonth.value) return false
      if (!isSameYear.value) return chooseYear.value > previewYear.value

      if (dateType === 'year') return (date as number) < toNumber(chooseYear.value)

      if (dateType === 'month') return (date as Month) < chooseMonth.value

      return isSameMonth.value ? (date as number) < toNumber(chooseDay.value) : chooseMonth.value > previewMonth.value
    }

    function getChooseDay(day: number) {
      const { readonly, range, multiple, onChange, 'onUpdate:modelValue': updateModelValue } = props
      if (day < 0 || readonly) return

      reverse.value = getReverse('day', day)

      const date = `${previewYear.value}-${previewMonth.value}-${day}`
      const formatDate = dayjs(date).format('YYYY-MM-DD')

      if (range) updateRange(formatDate, 'day')
      else if (multiple) updateMultiple(formatDate, 'day')
      else {
        call(updateModelValue, formatDate)
        call(onChange, formatDate)
      }
    }

    function getChooseMonth(month: Month) {
      const { type, readonly, range, multiple, onChange, onPreview, 'onUpdate:modelValue': updateModelValue } = props
      reverse.value = getReverse('month', month)

      if (type === 'month' && !readonly) {
        const date = `${previewYear.value}-${month}`

        if (range) updateRange(date, 'month')
        else if (multiple) updateMultiple(date, 'month')
        else {
          call(updateModelValue, date)
          call(onChange, date)
        }
      } else {
        previewMonth.value = month
        call(
          onPreview,
          toNumber(previewYear.value),
          toNumber(previewMonth.value),
          type === 'date' ? toNumber(chooseDay.value) : undefined
        )
      }

      isMonthPanel.value = false
    }

    function getChooseYear(year: number) {
      const { type, readonly, range, multiple, onChange, onPreview, 'onUpdate:modelValue': updateModelValue } = props
      reverse.value = getReverse('year', year)

      if (type === 'year' && !readonly) {
        if (range) updateRange(`${year}`, 'year')
        else if (multiple) updateMultiple(`${year}`, 'year')
        else {
          call(updateModelValue, `${year}`)
          call(onChange, `${year}`)
        }
      } else {
        previewYear.value = `${year}`
        call(
          onPreview,
          toNumber(previewYear.value),
          toNumber(previewMonth.value),
          type === 'date' ? toNumber(chooseDay.value) : undefined
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
        props.type === 'date' ? toNumber(chooseDay.value) : undefined
      )
    }

    function checkValue() {
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

    function invalidFormatDate(date: string | Array<string> | undefined): boolean {
      if (isArray(date)) return false

      if (date === 'Invalid Date') {
        console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date')
        return true
      }

      return false
    }

    function rangeInit(value: Array<string>, type: string) {
      const rangeDate = type === 'year' ? chooseRangeYear : type === 'month' ? chooseRangeMonth : chooseRangeDay
      const formatType = type === 'year' ? 'YYYY' : type === 'month' ? 'YYYY-MM' : 'YYYY-MM-D'
      const formatDateList = value.map((choose) => dayjs(choose).format(formatType)).slice(0, 2)

      const isValid = rangeDate.value.some((date) => invalidFormatDate(date))
      if (isValid) return

      rangeDate.value = formatDateList

      const isChangeOrder = dayjs(rangeDate.value[0]).isAfter(rangeDate.value[1])

      if (rangeDate.value.length === 2 && isChangeOrder) {
        rangeDate.value = [rangeDate.value[1], rangeDate.value[0]]
      }
    }

    function multipleInit(value: Array<string>, type: string) {
      const rangeDate = type === 'year' ? chooseYears : type === 'month' ? chooseMonths : chooseDays
      const formatType = type === 'year' ? 'YYYY' : type === 'month' ? 'YYYY-MM' : 'YYYY-MM-D'

      // need uniq
      const formatDateList = Array.from(new Set(value.map((choose) => dayjs(choose).format(formatType))))
      rangeDate.value = formatDateList.filter((date) => date !== 'Invalid Date')
    }

    function dateInit(value: string) {
      const formatDate = dayjs(value).format('YYYY-MM-D')

      if (invalidFormatDate(formatDate)) return

      const [yearValue, monthValue, dayValue] = formatDate.split('-')

      const monthDes: Month = MONTH_LIST.find((month) => month === monthValue) as Month

      chooseMonth.value = monthDes
      chooseYear.value = yearValue
      chooseDay.value = dayValue
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
      getMonthTitle,
      getDateTitle,
      getYearTitle,
      getPanelType,
      getChoose,
      getPreview,
      componentProps,
      slotProps,
      formatRange,
      t,
      n,
      classes,
      clickEl,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      getChooseDay,
      getChooseMonth,
      getChooseYear,
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
@import '../sticky/sticky';
@import '../icon/icon';
@import './date-picker';
</style>
