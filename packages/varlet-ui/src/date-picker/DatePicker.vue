<template>
  <div class="var-date-picker" :class="[shadow ? 'var-elevation--2' : null]">
    <div class="var-date-picker-title" :style="{ background: headerColor || color }">
      <div
        class="var-date-picker-title__year"
        :class="[isYearPanel ? 'var-date-picker-title__year--active' : null]"
        @click="clickYear"
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
        @click="clickDate"
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
          :click-year="clickYear"
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
          :click-month="clickMonth"
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
import * as dayjsAll from 'dayjs'
import MonthPickerPanel from './src/month-picker-panel.vue'
import YearPickerPanel from './src/year-picker-panel.vue'
import DayPickerPanel from './src/day-picker-panel.vue'
import { props, Month, MONTH_LIST, Choose, Preview, WEEK_HEADER, Week, ComponentProps } from './props'
import { isArray } from '../utils/shared'

const dayjs = dayjsAll.default

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

    const clickYear = () => {
      isYearPanel.value = true
    }

    const clickMonth = () => {
      isMonthPanel.value = true
    }

    const clickDate = () => {
      isYearPanel.value = false
      isMonthPanel.value = false
    }

    const updateRangeDay = (date: string) => {
      chooseRangeDay.value = rangeDone.value ? [date, date] : [chooseRangeDay.value[0], date]
      rangeDone.value = !rangeDone.value
      if (rangeDone.value) {
        let date = [...chooseRangeDay.value]
        if (dayjs(chooseRangeDay.value[0]).isAfter(chooseRangeDay.value[1])) {
          date = [chooseRangeDay.value[1], chooseRangeDay.value[0]]
        }
        props['onUpdate:modelValue']?.(date)
        props.onChange?.(date)
      }
    }

    const updateDays = (date: string) => {
      const formatDate = chooseDays.value.map((chooseDay) => dayjs(chooseDay).format('YYYY-MM-DD'))
      const index = formatDate.findIndex((choose) => choose === date)
      if (index === -1) formatDate.push(date)
      else formatDate.splice(index, 1)
      props['onUpdate:modelValue']?.(formatDate)
      props.onChange?.(formatDate)
    }

    const getChooseDay = (day: number) => {
      if (day < 0 || props.readonly) return
      reverse.value = isSameYear.value
        ? isSameMonth.value
          ? day < +chooseDay.value
          : chooseMonth.value.index > previewMonth.value.index
        : chooseYear.value > previewYear.value

      const date = dayjs(`${previewYear.value}-${previewMonth.value.index}-${day}`).format('YYYY-MM-DD')

      if (props.range) updateRangeDay(date)
      else if (props.multiple) updateDays(date)
      else {
        props['onUpdate:modelValue']?.(date)
        props.onChange?.(date)
      }
    }

    const updateRangeMonth = (date: string) => {
      chooseRangeMonth.value = rangeDone.value ? [date, date] : [chooseRangeMonth.value[0], date]
      rangeDone.value = !rangeDone.value
      if (rangeDone.value) {
        let date = [...chooseRangeMonth.value]
        if (dayjs(chooseRangeMonth.value[0]).isAfter(chooseRangeMonth.value[1])) {
          date = [chooseRangeMonth.value[1], chooseRangeMonth.value[0]]
        }
        props['onUpdate:modelValue']?.(date)
        props.onChange?.(date)
      }
    }

    const updateMonths = (date: string) => {
      const index = chooseMonths.value.findIndex((choose) => choose === date)
      if (index === -1) chooseMonths.value.push(date)
      else chooseMonths.value.splice(index, 1)
      props['onUpdate:modelValue']?.([...chooseMonths.value])
      props.onChange?.([...chooseMonths.value])
    }

    const getChooseMonth = (month: Month) => {
      reverse.value = isSameYear.value ? month.index < chooseMonth.value.index : chooseYear.value > previewYear.value
      if (props.type === 'month' && !props.readonly) {
        const date = `${previewYear.value}-${month.index}`
        if (props.range) updateRangeMonth(date)
        else if (props.multiple) updateMonths(date)
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

    watch(
      () => props.modelValue,
      (value) => {
        if (!checkValue() || value === undefined) return
        if (props.range) {
          if (!isArray(value)) return
          rangeDone.value = value.length !== 1
          if (props.type === 'month') {
            chooseRangeMonth.value = value.map((choose) => dayjs(choose).format('YYYY-MM')).slice(0, 2)
            if (
              chooseRangeMonth.value.length === 2 &&
              dayjs(chooseRangeMonth.value[0]).isAfter(chooseRangeMonth.value[1])
            ) {
              chooseRangeMonth.value = [chooseRangeMonth.value[1], chooseRangeMonth.value[0]]
            }
          } else {
            chooseRangeDay.value = value.map((choose) => dayjs(choose).format('YYYY-MM-D')).slice(0, 2)
            if (chooseRangeDay.value.length === 2 && dayjs(chooseRangeDay.value[0]).isAfter(chooseRangeDay.value[1])) {
              chooseRangeDay.value = [chooseRangeDay.value[1], chooseRangeDay.value[0]]
            }
          }
        } else if (props.multiple) {
          if (!isArray(value)) return
          if (props.type === 'month')
            chooseMonths.value = [...new Set(value.map((choose) => dayjs(choose).format('YYYY-MM')))]
          else chooseDays.value = [...new Set(value.map((choose) => dayjs(choose).format('YYYY-MM-D')))]
        } else {
          const formatDate: string = dayjs(value as string).format('YYYY-MM-D')
          const [yearValue, monthValue, dayValue] = formatDate.split('-')
          const mapMonth: Array<Month> = MONTH_LIST.filter((month) => month.index === monthValue)
          chooseMonth.value = mapMonth[0]
          chooseYear.value = yearValue
          chooseDay.value = dayValue
          previewMonth.value = mapMonth[0]
          previewYear.value = yearValue
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
      clickDate,
      clickYear,
      clickMonth,
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
