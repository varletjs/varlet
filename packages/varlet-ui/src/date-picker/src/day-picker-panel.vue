<template>
  <div class="var-day-picker__panel">
    <div class="var-day-picker__content">
      <panel-header
        type="day"
        :date="preview"
        :disabled="panelBtnDisabled"
        @check-panel="clickMonth"
        @check-date="checkDate"
      />
      <transition :name="reverse ? 'var-date-picker-reverse-translatex' : 'var-date-picker-translatex'">
        <div :key="panelKey">
          <ul class="var-day-picker__head">
            <li v-for="week in sortWeekList" :key="week.index">{{ getDayAbbr(week.index) }}</li>
          </ul>
          <ul class="var-day-picker__body">
            <li v-for="(day, index) in days" :key="index">
              <var-button
                type="primary"
                class="var-day-picker__button"
                :class="{
                  'var-day-picker__button--usable': day > 0,
                }"
                var-day-picker-cover
                round
                :ripple="false"
                v-bind="{
                  ...buttonProps(day),
                }"
                @click="chooseDay(day)"
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
import { defineComponent, ref, computed, watch, onMounted, reactive } from 'vue'
import dayjs from 'dayjs/esm'
import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter'
import PanelHeader from './panel-header.vue'
import VarButton from '../../button'
import { WEEK_HEADER } from '../props'
import { toNumber } from '../../utils/shared'
import { pack } from '../../locale'
import { watchDarkMode } from '../../utils/components'
import type { Ref, ComputedRef, UnwrapRef, PropType } from 'vue'
import type { Choose, Preview, ComponentProps, Week, PanelBtnDisabled } from '../props'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

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
    const panelBtnDisabled: UnwrapRef<PanelBtnDisabled> = reactive({
      left: false,
      right: false,
    })
    const isDarkTheme = ref(false)

    const isCurrent: ComputedRef<boolean> = computed(
      () => props.preview.previewYear === currentYear && props.preview.previewMonth.index === currentMonth
    )

    const isSame: ComputedRef<boolean> = computed(
      () =>
        props.choose.chooseYear === props.preview.previewYear &&
        props.choose.chooseMonth.index === props.preview.previewMonth.index
    )

    const sortWeekList: ComputedRef<Array<Week>> = computed(() => {
      const index = WEEK_HEADER.findIndex((week: Week) => week.index === toNumber(props.componentProps.firstDayOfWeek))
      if (index === -1 || index === 0) return WEEK_HEADER
      return WEEK_HEADER.slice(index).concat(WEEK_HEADER.slice(0, index))
    })

    const getDayAbbr = (key: number): number => pack.value.datePickerWeekDict[key].abbr

    const filterDay = (day: number): number | string => (day > 0 ? day : '')

    const initDate = () => {
      const {
        preview: { previewMonth, previewYear },
      }: { preview: Preview } = props

      const monthNum = dayjs(`${previewYear}-${previewMonth.index}`).daysInMonth()
      const firstDayToWeek = dayjs(`${previewYear}-${previewMonth.index}-01`).day()
      const index = sortWeekList.value.findIndex((week: Week) => week.index === firstDayToWeek)
      days.value = [...Array(index).fill(-1), ...Array.from(Array(monthNum + 1).keys())].filter((value) => value)
    }

    const initHeader = () => {
      const {
        preview: { previewYear, previewMonth },
        componentProps: { max, min },
      }: { preview: Preview; componentProps: ComponentProps } = props

      if (max) {
        const date = `${previewYear}-${toNumber(previewMonth.index) + 1}`
        panelBtnDisabled.right = !dayjs(date).isSameOrBefore(dayjs(max), 'month')
      }

      if (min) {
        const date = `${previewYear}-${toNumber(previewMonth.index) - 1}`
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
      const previewDate = `${previewYear}-${previewMonth.index}-${day}`

      if (max) isBeforeMax = dayjs(previewDate).isSameOrBefore(dayjs(max), 'day')
      if (min) isAfterMin = dayjs(previewDate).isSameOrAfter(dayjs(min), 'day')

      return isBeforeMax && isAfterMin
    }

    const shouldChoose = (val: string): boolean => {
      const {
        choose: { chooseDays, chooseRangeDay },
        componentProps: { range },
      }: { choose: Choose; componentProps: ComponentProps } = props

      if (!chooseRangeDay.length) return false

      if (range) {
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
        }
      }

      const {
        choose: { chooseDay },
        preview: { previewYear, previewMonth },
        componentProps: { allowedDates, color, multiple, range },
      }: { choose: Choose; preview: Preview; componentProps: ComponentProps } = props

      const val = `${previewYear}-${previewMonth.index}-${day}`

      const dayExist = (): boolean => {
        if (range || multiple) return shouldChoose(val)
        return toNumber(chooseDay) === day && isSame.value
      }

      const computeDisabled = (): boolean => {
        if (!inRange(day)) return true
        if (!allowedDates) return false
        return !allowedDates(val)
      }
      const disabled = computeDisabled()

      const computeText = (): boolean => {
        if (disabled) return true
        if (range || multiple) return !shouldChoose(val)
        return !isSame.value || toNumber(chooseDay) !== day
      }

      const computeOutline = (): boolean => {
        // 不满足基本条件， 基本条件为当前年、当前月、当前日并且 showCurrent 为true的情况
        if (!(isCurrent.value && toNumber(currentDay) === day && props.componentProps.showCurrent)) return false

        // 存在着 disabled
        if ((range || multiple || isSame.value) && disabled) return true

        // 在选择范围之外
        if (range || multiple) return !shouldChoose(val)

        // 同一年但是未被选择的情况
        if (isSame.value) return chooseDay !== currentDay

        return true
      }
      const isDarkTheme = ref(false)
      watchDarkMode((themes) => {
        isDarkTheme.value = themes === 'darkThemes'
      })
      const computeTextColor = (): string | undefined => {
        if (disabled) return ''
        if (computeOutline()) return color
        if (dayExist()) return ''
        return isDarkTheme.value ? '#ffffff' : 'rgba(0, 0, 0, .87)'
      }

      return {
        disabled,
        text: computeText(),
        outline: computeOutline(),
        color: !computeText() ? color : '',
        textColor: computeTextColor(),
      }
    }

    const checkDate = (checkType: string) => {
      reverse.value = checkType === 'prev'
      panelKey.value += checkType === 'prev' ? -1 : 1
      emit('check-preview', 'month', checkType)
    }

    const chooseDay = (day: number) => {
      emit('choose-day', day)
    }

    onMounted(() => {
      initDate()
      initHeader()
    })

    watch(
      () => props.preview,
      () => {
        initDate()
        initHeader()
      }
    )

    watchDarkMode((themes) => {
      isDarkTheme.value = themes === 'darkThemes'
    })

    return {
      days,
      reverse,
      panelKey,
      sortWeekList,
      panelBtnDisabled,
      filterDay,
      getDayAbbr,
      checkDate,
      chooseDay,
      buttonProps,
    }
  },
})
</script>
