<template>
  <div :class="n()">
    <div :class="n('content')">
      <transition :name="`${nDate()}${reverse ? '-reverse' : ''}-translatex`">
        <div :key="panelKey">
          <ul :class="n('head')">
            <li v-for="week in sortWeekList" :key="week">{{ getDayAbbr(week) }}</li>
          </ul>
          <ul :class="n('body')">
            <li v-for="(day, index) in days" :key="index">
              <var-button
                type="primary"
                var-day-picker-cover
                round
                :elevation="datePickerProps.buttonElevation"
                v-bind="{
                  ...buttonProps(day),
                }"
                @click="chooseDay(day)"
              >
                {{ getDayText(day) }}
              </var-button>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { toNumber } from '@varlet/shared'
import { onSmartMounted } from '@varlet/use'
import dayjs from 'dayjs/esm/index.js'
import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter/index.js'
import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore/index.js'
import { computed, defineComponent, ref, watch, type ComputedRef, type PropType, type Ref } from 'vue'
import VarButton from '../../button'
import { t } from '../../locale'
import { injectLocaleProvider } from '../../locale-provider/provide'
import { createNamespace } from '../../utils/components'
import { WEEK_HEADER, type Choose, type DatePickerProps, type Preview, type Week } from '../props'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

const { n } = createNamespace('day-picker')
const { n: nDate } = createNamespace('date-picker')

export default defineComponent({
  name: 'DayPickerPanel',
  components: {
    VarButton,
  },
  props: {
    choose: {
      type: Object as PropType<Choose>,
      required: true,
    },
    preview: {
      type: Object as PropType<Preview>,
      required: true,
    },
    current: {
      type: String,
      required: true,
    },
    datePickerProps: {
      type: Object as PropType<DatePickerProps>,
      required: true,
    },
  },
  emits: ['choose-day'],

  setup(props, { emit }) {
    const [currentYear, currentMonth, currentDay] = props.current.split('-')
    const days: Ref<Array<number>> = ref([])
    const reverse: Ref<boolean> = ref(false)
    const panelKey: Ref<number> = ref(0)

    const { t: pt } = injectLocaleProvider()

    const previewIsCurrentMonth: ComputedRef<boolean> = computed(
      () => props.preview.previewYear === currentYear && props.preview.previewMonth === currentMonth,
    )

    const previewIsSelectedMonth: ComputedRef<boolean> = computed(
      () =>
        props.choose.chooseYear === props.preview.previewYear &&
        props.choose.chooseMonth === props.preview.previewMonth,
    )

    const sortWeekList: ComputedRef<Array<Week>> = computed(() => {
      const index = WEEK_HEADER.findIndex((week: Week) => week === props.datePickerProps.firstDayOfWeek)

      if (index === -1 || index === 0) {
        return WEEK_HEADER
      }

      return [...WEEK_HEADER.slice(index), ...WEEK_HEADER.slice(0, index)]
    })

    function getDayAbbr(key: Week): string {
      return (pt || t)('datePickerWeekDict')?.[key].abbr ?? ''
    }

    function getDayText(day: number): number | string {
      return day > 0 ? day : ''
    }

    function initDays() {
      const {
        preview: { previewMonth, previewYear },
      }: { preview: Preview } = props

      const daysInMonth = dayjs(`${previewYear}-${previewMonth}`).daysInMonth()
      const firstWeekday = dayjs(`${previewYear}-${previewMonth}-01`).day()
      const leadingEmptyDays = sortWeekList.value.findIndex((week: Week) => week === `${firstWeekday}`)
      const emptyDays = Array(leadingEmptyDays).fill(-1)
      const monthDays = Array.from({ length: daysInMonth }, (_v, index) => index + 1)

      days.value = [...emptyDays, ...monthDays]
    }

    function isInRange(day: number) {
      const {
        preview: { previewYear, previewMonth },
        datePickerProps: { min, max },
      }: { preview: Preview; datePickerProps: DatePickerProps } = props

      const previewDate = `${previewYear}-${previewMonth}-${day}`
      const isBeforeMax = max ? dayjs(previewDate).isSameOrBefore(dayjs(max), 'day') : true
      const isAfterMin = min ? dayjs(previewDate).isSameOrAfter(dayjs(min), 'day') : true

      return isBeforeMax && isAfterMin
    }

    function getDayValue(day: number) {
      return `${props.preview.previewYear}-${props.preview.previewMonth}-${day}`
    }

    function isSingleSelectedDate(day: number) {
      return toNumber(props.choose.chooseDay) === day && previewIsSelectedMonth.value
    }

    function isSelectedDate(value: string): boolean {
      const {
        choose: { chooseDays, chooseRangeDay },
        datePickerProps: { range },
      }: { choose: Choose; datePickerProps: DatePickerProps } = props

      if (!range) {
        return chooseDays.includes(value)
      }

      if (!chooseRangeDay.length) {
        return false
      }

      const isBeforeMax = dayjs(value).isSameOrBefore(dayjs(chooseRangeDay[1]), 'day')
      const isAfterMin = dayjs(value).isSameOrAfter(dayjs(chooseRangeDay[0]), 'day')

      return isBeforeMax && isAfterMin
    }

    function isDateDisabled(day: number, value: string) {
      const { allowedDates } = props.datePickerProps

      return !isInRange(day) || (allowedDates ? !allowedDates(value) : false)
    }

    function shouldShowOutline(day: number, selected: boolean, disabled: boolean) {
      const {
        choose: { chooseDay },
        datePickerProps: { multiple, range, showCurrent },
      }: { choose: Choose; datePickerProps: DatePickerProps } = props

      const current = previewIsCurrentMonth.value && toNumber(currentDay) === day && showCurrent

      if (!current) {
        return false
      }

      if ((range || multiple || previewIsSelectedMonth.value) && disabled) {
        return true
      }

      if (range || multiple) {
        return !selected
      }

      return previewIsSelectedMonth.value ? chooseDay !== currentDay : true
    }

    function buttonProps(day: number) {
      if (day < 0) {
        return {
          text: true,
          outline: false,
          textColor: '',
          class: n('button'),
          disabled: true,
        }
      }

      const {
        datePickerProps: { color, multiple, range },
      }: { datePickerProps: DatePickerProps } = props

      const value = getDayValue(day)
      const singleSelected = isSingleSelectedDate(day)
      const selected = range || multiple ? isSelectedDate(value) : singleSelected
      const disabled = isDateDisabled(day, value)
      const text = disabled || (range || multiple ? !selected : !singleSelected)
      const outline = shouldShowOutline(day, selected, disabled)
      const cover = !disabled && !outline && !selected
      const textColor = !disabled && outline ? (color ?? '') : ''

      return {
        text,
        outline,
        textColor,
        [`${nDate()}-color-cover`]: cover,
        class: [n('button'), n('button--usable')],
        disabled,
      }
    }

    // expose for internal
    function shiftPreview(direction: string) {
      reverse.value = direction === 'prev'
      panelKey.value += direction === 'prev' ? -1 : 1
    }

    // expose for internal
    function shiftYearPreview(direction: string) {
      reverse.value = direction === 'prev'
      panelKey.value += direction === 'prev' ? -1 : 1
    }

    function chooseDay(day: number) {
      emit('choose-day', day)
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
      getDayText,
      getDayAbbr,
      chooseDay,
      buttonProps,
    }
  },
})
</script>
