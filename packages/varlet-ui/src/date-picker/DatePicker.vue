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
          <div :key="range || multiple || chooseYear + chooseMonth.index" v-if="type === 'month'">
            <slot name="range" :choose="getChoose.chooseRangeMonth" v-if="range">
              {{ getMonthTitle }}
            </slot>
            <slot name="multiple" :choose="getChoose.chooseMonths" v-else-if="multiple">
              {{ getMonthTitle }}
            </slot>
            <slot name="month" :month="+chooseMonth.index" :year="chooseYear" v-else>
              {{ getMonthTitle }}
            </slot>
          </div>
          <div :key="chooseYear + chooseMonth.index + chooseDay" v-else>
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
import { isArray } from '../utils/shared'

export default defineComponent({
  name: 'VarDatePicker',
  components: {
    [MonthPickerPanel.name]: MonthPickerPanel,
    [YearPickerPanel.name]: YearPickerPanel,
    [DayPickerPanel.name]: DayPickerPanel,
  },
  props,
  setup(props) {
    const currentDate: string = dayjs().format('YYYY-MM-D')
    const [currentYear, currentMonth, currentDay] = currentDate.split('-')
    const mapMonth: Array<Month> = MONTH_LIST.filter((month) => month.index === currentMonth)
    const isYearPanel: Ref<boolean> = ref(false)
    const isMonthPanel: Ref<boolean> = ref(false)
    const rangeDone: Ref<boolean> = ref(true)
    const chooseMonth: Ref<Month> = ref(mapMonth[0])
    const chooseYear: Ref<string> = ref(currentYear)
    const chooseDay: Ref<string> = ref(currentDay)
    const previewMonth: Ref<Month> = ref(mapMonth[0])
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
      return multiple ? `已选择${chooseMonths.value.length}个` : chooseMonth.value.name
    })

    const getDateTitle: ComputedRef<string> = computed(() => {
      const { multiple, range } = props
      if (range) {
        chooseRangeDay.value = chooseRangeDay.value.map((date) => dayjs(date).format('YYYY-MM-DD'))
        return `${chooseRangeDay.value[0]} ~ ${chooseRangeDay.value[1]}`
      }
      if (multiple) return `已选择${chooseDays.value.length}个`
      const weekIndex = dayjs(`${chooseYear.value}-${chooseMonth.value.index}-${chooseDay.value}`).day()
      const week: Week = WEEK_HEADER.filter((value) => value.index === weekIndex)[0]
      return `${week.name.slice(0, 3)}, ${chooseMonth.value.name.slice(0, 3)} ${chooseDay.value}`
    })

    const slotProps: ComputedRef<Record<string, string | number>> = computed(() => {
      const weekIndex = dayjs(`${chooseYear.value}-${chooseMonth.value.index}-${chooseDay.value}`).day()
      return {
        week: weekIndex,
        year: chooseYear.value,
        month: +chooseMonth.value.index,
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
        let date = [...rangeDate.value]
        if (dayjs(rangeDate.value[0]).isAfter(rangeDate.value[1])) {
          date = [rangeDate.value[1], rangeDate.value[0]]
        }
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

    const getChooseDay = (day: number) => {
      if (day < 0 || props.readonly) return
      reverse.value = isSameYear.value
        ? isSameMonth.value
          ? day < +chooseDay.value
          : chooseMonth.value.index > previewMonth.value.index
        : chooseYear.value > previewYear.value

      const date = dayjs(`${previewYear.value}-${previewMonth.value.index}-${day}`).format('YYYY-MM-DD')

      if (props.range) updateRange(date, 'day')
      else if (props.multiple) updateMultiple(date, 'day')
      else {
        props['onUpdate:modelValue']?.(date)
        props.onChange?.(date)
      }
    }

    const getChooseMonth = (month: Month) => {
      reverse.value = isSameYear.value ? month.index < chooseMonth.value.index : chooseYear.value > previewYear.value
      if (props.type === 'month' && !props.readonly) {
        const date = `${previewYear.value}-${month.index}`
        if (props.range) updateRange(date, 'month')
        else if (props.multiple) updateMultiple(date, 'month')
        else {
          props['onUpdate:modelValue']?.(date)
          props.onChange?.(date)
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
        previewYear.value = `${+previewYear.value + changeValue}`
      } else {
        let checkIndex = +previewMonth.value.index + changeValue
        previewYear.value =
          checkIndex < 1
            ? `${+previewYear.value - 1}`
            : checkIndex > 12
            ? `${+previewYear.value + 1}`
            : previewYear.value
        checkIndex = checkIndex < 1 ? 12 : checkIndex > 12 ? 1 : checkIndex
        previewMonth.value = MONTH_LIST.filter((month) => +month.index === checkIndex)[0]
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

    const rangeInit = (value: Array<string>, type: string) => {
      const rangeDate = type === 'month' ? chooseRangeMonth : chooseRangeDay
      const formatType = type === 'month' ? 'YYYY-MM' : 'YYYY-MM-D'
      rangeDate.value = value.map((choose) => dayjs(choose).format(formatType)).slice(0, 2)
      if (rangeDate.value.length === 2 && dayjs(rangeDate.value[0]).isAfter(rangeDate.value[1])) {
        rangeDate.value = [rangeDate.value[1], rangeDate.value[0]]
      }
    }

    const multipleInit = (value: Array<string>, type: string) => {
      const rangeDate = type === 'month' ? chooseMonths : chooseDays
      const formatType = type === 'month' ? 'YYYY-MM' : 'YYYY-MM-D'
      rangeDate.value = Array.from(new Set(value.map((choose) => dayjs(choose).format(formatType))))
    }

    const dateInit = (value: string) => {
      const formatDate = dayjs(value).format('YYYY-MM-D')
      const [yearValue, monthValue, dayValue] = formatDate.split('-')
      const mapMonth: Array<Month> = MONTH_LIST.filter((month) => month.index === monthValue)
      chooseMonth.value = mapMonth[0]
      chooseYear.value = yearValue
      chooseDay.value = dayValue
      previewMonth.value = mapMonth[0]
      previewYear.value = yearValue
    }

    watch(
      () => props.modelValue,
      (value) => {
        if (!checkValue() || value === undefined) return
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
@import 'date-picker';
</style>
