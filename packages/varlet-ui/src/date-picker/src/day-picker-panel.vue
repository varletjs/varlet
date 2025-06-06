<template>
  <div :class="n()">
    <div :class="n('content')">
      <panel-header
        ref="headerEl"
        type="day"
        :date="preview"
        :disabled="panelBtnDisabled"
        @check-panel="clickMonth"
        @check-date="checkDate"
      />
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
                :ripple="false"
                :elevation="componentProps.buttonElevation"
                v-bind="{
                  ...buttonProps(day),
                }"
                @click="(event: Event) => chooseDay(day, event)"
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
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  type ComputedRef,
  type PropType,
  type Ref,
  type RendererNode,
  type UnwrapRef,
} from 'vue'
import { toNumber } from '@varlet/shared'
import { onSmartMounted } from '@varlet/use'
import dayjs from 'dayjs/esm/index.js'
import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter/index.js'
import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore/index.js'
import VarButton from '../../button'
import { t } from '../../locale'
import { injectLocaleProvider } from '../../locale-provider/provide'
import { createNamespace } from '../../utils/components'
import { WEEK_HEADER, type Choose, type ComponentProps, type PanelBtnDisabled, type Preview, type Week } from '../props'
import PanelHeader from './panel-header.vue'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

const { n, classes } = createNamespace('day-picker')
const { n: nDate } = createNamespace('date-picker')

export default defineComponent({
  name: 'DayPickerPanel',
  components: {
    VarButton,
    PanelHeader,
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
    clickMonth: {
      type: Function as PropType<() => void>,
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
    const headerEl: Ref<RendererNode | null> = ref(null)
    const panelBtnDisabled: UnwrapRef<PanelBtnDisabled> = reactive({
      left: false,
      right: false,
    })

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

    const getDayAbbr = (key: Week): string => (pt || t)('datePickerWeekDict')?.[key].abbr ?? ''

    const filterDay = (day: number): number | string => (day > 0 ? day : '')

    const initDate = () => {
      const {
        preview: { previewMonth, previewYear },
      }: { preview: Preview } = props

      const monthNum = dayjs(`${previewYear}-${previewMonth}`).daysInMonth()
      const firstDayToWeek = dayjs(`${previewYear}-${previewMonth}-01`).day()
      const index = sortWeekList.value.findIndex((week: Week) => week === `${firstDayToWeek}`)
      days.value = [...Array(index).fill(-1), ...Array.from(Array(monthNum + 1).keys())].filter((value) => value)
    }

    const initHeader = () => {
      const {
        preview: { previewYear, previewMonth },
        componentProps: { max, min },
      }: { preview: Preview; componentProps: ComponentProps } = props

      if (max) {
        const date = `${previewYear}-${toNumber(previewMonth) + 1}`
        panelBtnDisabled.right = !dayjs(date).isSameOrBefore(dayjs(max), 'month')
      }

      if (min) {
        const date = `${previewYear}-${toNumber(previewMonth) - 1}`
        panelBtnDisabled.left = !dayjs(date).isSameOrAfter(dayjs(min), 'month')
      }
    }

    const inRange = (day: number) => {
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

    const shouldChoose = (val: string): boolean => {
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

    const buttonProps = (day: number) => {
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

      const dayExist = (): boolean => {
        if (range || multiple) {
          return shouldChoose(val)
        }

        return toNumber(chooseDay) === day && isSame.value
      }

      const computeDisabled = (): boolean => {
        if (!inRange(day)) {
          return true
        }
        if (!allowedDates) {
          return false
        }

        return !allowedDates(val)
      }
      const disabled = computeDisabled()

      const computeText = (): boolean => {
        if (disabled) {
          return true
        }
        if (range || multiple) {
          return !shouldChoose(val)
        }

        return !isSame.value || toNumber(chooseDay) !== day
      }

      const computeOutline = (): boolean => {
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

      const textColorOrCover = (): string => {
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

    const checkDate = (checkType: string) => {
      reverse.value = checkType === 'prev'
      panelKey.value += checkType === 'prev' ? -1 : 1
      emit('check-preview', 'month', checkType)
    }

    const chooseDay = (day: number, event: Event) => {
      const buttonEl = event.currentTarget as HTMLButtonElement
      if (buttonEl.classList.contains(n('button--disabled'))) {
        return
      }

      emit('choose-day', day)
    }

    // expose for internal
    const forwardRef = (checkType: string) => {
      headerEl.value!.checkDate(checkType)
    }

    onSmartMounted(() => {
      initDate()
      initHeader()
    })

    watch(
      () => props.preview,
      () => {
        initDate()
        initHeader()
      },
    )

    watch(() => [props.componentProps.max, props.componentProps.min], initHeader)

    return {
      n,
      nDate,
      days,
      reverse,
      headerEl,
      panelKey,
      sortWeekList,
      panelBtnDisabled,
      forwardRef,
      filterDay,
      getDayAbbr,
      checkDate,
      chooseDay,
      buttonProps,
    }
  },
})
</script>
