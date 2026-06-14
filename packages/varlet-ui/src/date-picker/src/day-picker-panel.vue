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
                :elevation="componentProps.buttonElevation"
                v-bind="{
                  ...buttonProps(day),
                }"
                @click="chooseDay(day, $event)"
              >
                {{ filterDay(day) }}
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
import { WEEK_HEADER, type Choose, type ComponentProps, type Preview, type Week } from '../props'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

const { n, classes } = createNamespace('day-picker')
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
    componentProps: {
      type: Object as PropType<ComponentProps>,
      required: true,
    },
  },
  emits: ['check-preview', 'choose-day'],

  setup(props, { emit }) {
    const [currentYear, currentMonth, currentDay] = props.current.split('-')
    const days: Ref<Array<number>> = ref([])
    const reverse: Ref<boolean> = ref(false)
    const panelKey: Ref<number> = ref(0)

    const { t: pt } = injectLocaleProvider()

    const isCurrent: ComputedRef<boolean> = computed(
      () => props.preview.previewYear === currentYear && props.preview.previewMonth === currentMonth,
    )

    const isSame: ComputedRef<boolean> = computed(
      () =>
        props.choose.chooseYear === props.preview.previewYear &&
        props.choose.chooseMonth === props.preview.previewMonth,
    )

    const sortWeekList: ComputedRef<Array<Week>> = computed(() => {
      const index = WEEK_HEADER.findIndex((week: Week) => week === props.componentProps.firstDayOfWeek)

      if (index === -1 || index === 0) {
        return WEEK_HEADER
      }

      return [...WEEK_HEADER.slice(index), ...WEEK_HEADER.slice(0, index)]
    })

    function getDayAbbr(key: Week): string {
      return (pt || t)('datePickerWeekDict')?.[key].abbr ?? ''
    }

    function filterDay(day: number): number | string {
      return day > 0 ? day : ''
    }

    function initDate() {
      const {
        preview: { previewMonth, previewYear },
      }: { preview: Preview } = props

      const monthNum = dayjs(`${previewYear}-${previewMonth}`).daysInMonth()
      const firstDayToWeek = dayjs(`${previewYear}-${previewMonth}-01`).day()
      const index = sortWeekList.value.findIndex((week: Week) => week === `${firstDayToWeek}`)
      days.value = [...Array(index).fill(-1), ...Array.from(Array(monthNum + 1).keys())].filter((value) => value)
    }

    function inRange(day: number) {
      const {
        preview: { previewYear, previewMonth },
        componentProps: { min, max },
      }: { preview: Preview; componentProps: ComponentProps } = props

      let isBeforeMax = true
      let isAfterMin = true
      const previewDate = `${previewYear}-${previewMonth}-${day}`

      if (max) {
        isBeforeMax = dayjs(previewDate).isSameOrBefore(dayjs(max), 'day')
      }
      if (min) {
        isAfterMin = dayjs(previewDate).isSameOrAfter(dayjs(min), 'day')
      }

      return isBeforeMax && isAfterMin
    }

    function shouldChoose(val: string): boolean {
      const {
        choose: { chooseDays, chooseRangeDay },
        componentProps: { range },
      }: { choose: Choose; componentProps: ComponentProps } = props

      if (range) {
        if (!chooseRangeDay.length) {
          return false
        }

        const isBeforeMax = dayjs(val).isSameOrBefore(dayjs(chooseRangeDay[1]), 'day')
        const isAfterMin = dayjs(val).isSameOrAfter(dayjs(chooseRangeDay[0]), 'day')
        return isBeforeMax && isAfterMin
      }

      return chooseDays.includes(val)
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
        choose: { chooseDay },
        preview: { previewYear, previewMonth },
        componentProps: { allowedDates, color, multiple, range },
      }: { choose: Choose; preview: Preview; componentProps: ComponentProps } = props

      const val = `${previewYear}-${previewMonth}-${day}`

      function dayExist(): boolean {
        if (range || multiple) {
          return shouldChoose(val)
        }

        return toNumber(chooseDay) === day && isSame.value
      }

      function computeDisabled(): boolean {
        if (!inRange(day)) {
          return true
        }
        if (!allowedDates) {
          return false
        }

        return !allowedDates(val)
      }
      const disabled = computeDisabled()

      function computeText(): boolean {
        if (disabled) {
          return true
        }
        if (range || multiple) {
          return !shouldChoose(val)
        }

        return !isSame.value || toNumber(chooseDay) !== day
      }

      function computeOutline(): boolean {
        // Not satisfied with the basic conditions, the basic conditions are the current year, the current month, the current day, and the showCurrent as true
        if (!(isCurrent.value && toNumber(currentDay) === day && props.componentProps.showCurrent)) {
          return false
        }

        if ((range || multiple || isSame.value) && disabled) {
          return true
        }

        // Outside the selection range
        if (range || multiple) {
          return !shouldChoose(val)
        }

        // In the same year but not selected
        if (isSame.value) {
          return chooseDay !== currentDay
        }

        return true
      }

      function textColorOrCover(): string {
        if (disabled) {
          return ''
        }
        if (computeOutline()) {
          return color ?? ''
        }
        if (dayExist()) {
          return ''
        }

        return `${nDate()}-color-cover`
      }

      const isCover = textColorOrCover().startsWith(nDate())

      return {
        text: computeText(),
        outline: computeOutline(),
        textColor: isCover ? '' : textColorOrCover(),
        [`${nDate()}-color-cover`]: isCover,
        class: classes(n('button'), n('button--usable'), [disabled, n('button--disabled')]),
        disabled,
      }
    }

    function checkDate(checkType: string) {
      reverse.value = checkType === 'prev'
      panelKey.value += checkType === 'prev' ? -1 : 1
      emit('check-preview', 'month', checkType)
    }

    function checkYearDate(checkType: string) {
      reverse.value = checkType === 'prev'
      panelKey.value += checkType === 'prev' ? -1 : 1
      emit('check-preview', 'year', checkType)
    }

    function chooseDay(day: number, event: Event) {
      const buttonEl = event.currentTarget as HTMLButtonElement
      if (buttonEl.classList.contains(n('button--disabled'))) {
        return
      }

      emit('choose-day', day)
    }

    // expose for internal
    function forwardRef(checkType: string) {
      checkDate(checkType)
    }

    function forwardYearRef(checkType: string) {
      checkYearDate(checkType)
    }

    onSmartMounted(() => {
      initDate()
    })

    watch(
      () => props.preview,
      () => {
        initDate()
      },
    )

    return {
      n,
      nDate,
      days,
      reverse,
      panelKey,
      sortWeekList,
      forwardRef,
      forwardYearRef,
      filterDay,
      getDayAbbr,
      checkDate,
      checkYearDate,
      chooseDay,
      buttonProps,
    }
  },
})
</script>
