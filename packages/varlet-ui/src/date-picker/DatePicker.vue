<template>
  <div class="var-date-picker" :class="[shadow ? 'var-elevation--2' : null]">
    <div class="var-date-picker-title" :style="{ background: headerColor || color }">
      <div
        class="var-date-picker-title__year"
        :class="[isYearPanel ? 'var-date-picker-title__year--active' : null]"
        @click="clickEl('year')"
      >
        <slot name="year" :year="previewYear">
          {{ previewYear }}
        </slot>
      </div>

      <div
        class="var-date-picker-title__date"
        :class="[
          !isYearPanel ? 'var-date-picker-title__date--active' : null,
          range ? 'var-date-picker-title__date--range' : null,
        ]"
        @click="clickEl('date')"
      >
        <transition
          :name="multiple ? '' : reverse ? 'var-date-picker-reverse-translatey' : 'var-date-picker-translatey'"
        >
          <div :key="range || multiple || chooseYear + chooseMonth?.index" v-if="type === 'month'">
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
          <div :key="chooseYear + chooseMonth?.index + chooseDay" v-else>
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
    <div class="var-date-picker-body">
      <transition name="var-date-picker-panel-fade">
        <year-picker-panel
          :component-props="componentProps"
          :preview="previewYear"
          @choose-year="getChooseYear"
          v-if="isYearPanel"
        />
        <month-picker-panel
          :current="currentDate"
          :choose="getChoose"
          :preview="getPreview"
          :click-year="() => clickEl('year')"
          :component-props="componentProps"
          @choose-month="getChooseMonth"
          @check-preview="checkPreview"
          v-else-if="(!isYearPanel && type === 'month') || isMonthPanel"
        />
        <day-picker-panel
          :current="currentDate"
          :choose="getChoose"
          :preview="getPreview"
          :component-props="componentProps"
          :click-month="() => clickEl('month')"
          @choose-day="getChooseDay"
          @check-preview="checkPreview"
          v-else-if="!isYearPanel && !isMonthPanel && type === 'date'"
        />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, computed, ComputedRef, reactive, UnwrapRef, watch } from 'vue'
import dayjs from 'dayjs'
import MonthPickerPanel from './src/month-picker-panel.vue'
import YearPickerPanel from './src/year-picker-panel.vue'
import DayPickerPanel from './src/day-picker-panel.vue'
import { props, Month, MONTH_LIST, Choose, Preview, WEEK_HEADER, Week, ComponentProps } from './props'
import { isArray, toNumber } from '../utils/shared'
import { pack } from '../locale'

export default defineComponent({
  name: 'VarDatePicker',
  components: {
    MonthPickerPanel,
    YearPickerPanel,
    DayPickerPanel,
  },
  props,
  setup(props) {
    const currentDate: string = dayjs().format('YYYY-MM-D')
    const [currentYear, currentMonth, currentDay] = currentDate.split('-')
    const monthDes: Month = MONTH_LIST.find((month) => month.index === currentMonth) as Month
    const isYearPanel: Ref<boolean> = ref(false)
    const isMonthPanel: Ref<boolean> = ref(false)
    const rangeDone: Ref<boolean> = ref(true)
    const chooseMonth: Ref<Month> = ref(monthDes)
    const chooseYear: Ref<string> = ref(currentYear)
    const chooseDay: Ref<string> = ref(currentDay)
    const previewMonth: Ref<Month> = ref(monthDes)
    const previewYear: Ref<string> = ref(currentYear)
    const reverse: Ref<boolean> = ref(false)
    const chooseMonths: Ref<Array<string>> = ref([`${currentYear}-${currentMonth}`])
    const chooseDays: Ref<Array<string>> = ref([currentDate])
    const chooseRangeMonth: Ref<Array<string>> = ref([`${currentYear}-${currentMonth}`])
    const chooseRangeDay: Ref<Array<string>> = ref([currentDate])

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

      if (range) return `${chooseRangeMonth.value[0]} ~ ${chooseRangeMonth.value[1]}`

      const monthName = pack.value.monthDictionary[chooseMonth.value.index].name
      return multiple ? `${chooseMonths.value.length}${pack.value.selected}` : monthName
    })

    const getDateTitle: ComputedRef<string> = computed(() => {
      const { multiple, range } = props

      if (range) {
        chooseRangeDay.value = chooseRangeDay.value.map((date) => dayjs(date).format('YYYY-MM-DD'))
        return `${chooseRangeDay.value[0]} ~ ${chooseRangeDay.value[1]}`
      }

      if (multiple) return `${chooseDays.value.length}${pack.value.selected}`

      const weekIndex = dayjs(`${chooseYear.value}-${chooseMonth.value.index}-${chooseDay.value}`).day()
      const week: Week = WEEK_HEADER.find((value) => value.index === weekIndex) as Week
      const weekName = pack.value.weekDictionary[week.index].name

      const monthName = pack.value.monthDictionary[chooseMonth.value.index].name
      const showDay = chooseDay.value.padStart(2, '0')

      if (pack.value.lang === 'zh-CN') return `${chooseMonth.value.index}-${showDay} ${weekName.slice(0, 3)}`
      return `${weekName.slice(0, 3)}, ${monthName.slice(0, 3)} ${chooseDay.value}`
    })

    const slotProps: ComputedRef<Record<string, string | number>> = computed(() => {
      const weekIndex = dayjs(`${chooseYear.value}-${chooseMonth.value.index}-${chooseDay.value}`).day()

      return {
        week: weekIndex,
        year: chooseYear.value,
        month: chooseMonth.value.index,
        date: chooseDay.value,
      }
    })

    const formatRange: ComputedRef<Array<string>> = computed(() =>
      getChoose.value.chooseRangeDay.map((choose) => dayjs(choose).format('YYYY-MM-DD'))
    )

    const isSameYear: ComputedRef<boolean> = computed(() => chooseYear.value === previewYear.value)
    const isSameMonth: ComputedRef<boolean> = computed(() => chooseMonth.value.index === previewMonth.value.index)

    const clickEl = (type: string) => {
      if (type === 'year') isYearPanel.value = true
      else if (type === 'month') isMonthPanel.value = true
      else {
        isYearPanel.value = false
        isMonthPanel.value = false
      }
    }

    const updateRange = (date: string, type: string) => {
      const rangeDate = type === 'month' ? chooseRangeMonth : chooseRangeDay
      rangeDate.value = rangeDone.value ? [date, date] : [rangeDate.value[0], date]
      rangeDone.value = !rangeDone.value

      if (rangeDone.value) {
        const isChangeOrder = dayjs(rangeDate.value[0]).isAfter(rangeDate.value[1])
        const date = isChangeOrder ? [rangeDate.value[1], rangeDate.value[0]] : [...rangeDate.value]

        props['onUpdate:modelValue']?.(date)
        props.onChange?.(date)
      }
    }

    const updateMultiple = (date: string, type: string) => {
      const multipleDates = type === 'month' ? chooseMonths : chooseDays
      const formatType = type === 'month' ? 'YYYY-MM' : 'YYYY-MM-DD'
      const formatDates = multipleDates.value.map((date) => dayjs(date).format(formatType))

      const index = formatDates.findIndex((choose) => choose === date)

      if (index === -1) formatDates.push(date)
      else formatDates.splice(index, 1)

      props['onUpdate:modelValue']?.(formatDates)
      props.onChange?.(formatDates)
    }

    const getReverse = (dateType: string, date: Month | number) => {
      if (!isSameYear.value) return chooseYear.value > previewYear.value

      if (dateType === 'month') return (date as Month).index < chooseMonth.value.index

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
        updateModelValue?.(formatDate)
        onChange?.(formatDate)
      }
    }

    const getChooseMonth = (month: Month) => {
      const { type, readonly, range, multiple, onChange, 'onUpdate:modelValue': updateModelValue } = props
      reverse.value = getReverse('month', month)

      if (type === 'month' && !readonly) {
        const date = `${previewYear.value}-${month.index}`

        if (range) updateRange(date, 'month')
        else if (multiple) updateMultiple(date, 'month')
        else {
          updateModelValue?.(date)
          onChange?.(date)
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

        previewMonth.value = MONTH_LIST.find((month) => toNumber(month.index) === checkIndex) as Month
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

      if (date === undefined || date === 'Invalid Date') {
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

      const monthDes: Month = MONTH_LIST.find((month) => month.index === monthValue) as Month

      chooseMonth.value = monthDes
      chooseYear.value = yearValue
      chooseDay.value = dayValue
      previewMonth.value = monthDes
      previewYear.value = yearValue
    }

    watch(
      () => props.modelValue,
      (value) => {
        if (!checkValue() || invalidFormatDate(value)) return

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

    return {
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
      getChoose,
      getPreview,
      componentProps,
      slotProps,
      formatRange,
      clickEl,
      getChooseDay,
      getChooseMonth,
      getChooseYear,
      checkPreview,
    }
  },
})
</script>

<style lang="less">
@import '../button/button';
@import './date-picker';
</style>
