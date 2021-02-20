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
            <li v-for="week in sortWeekList" :key="week.index">{{ week.abbr }}</li>
          </ul>
          <ul class="var-day-picker__body">
            <li v-for="(day, index) in days" :key="index">
              <var-button
                type="primary"
                round
                forbid-ripple
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
import { defineComponent, Ref, ref, PropType, computed, ComputedRef, watch, onMounted, UnwrapRef, reactive } from 'vue'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import PanelHeader from './panel-header.vue'
import Button from '../../button'
import { WEEK_HEADER, Choose, Preview, ComponentProps, Week, PanelBtnDisabled } from '../props'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

export default defineComponent({
  name: 'DayPickerPanel',
  components: {
    [Button.name]: Button,
    [PanelHeader.name]: PanelHeader,
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
      type: Function,
    },
    componentProps: {
      type: Object as PropType<ComponentProps>,
      required: true,
    },
  },

  setup(props, { emit }) {
    const [currentYear, currentMonth, currentDay] = props.current.split('-')
    const days: Ref<Array<number>> = ref([])
    const reverse: Ref<boolean> = ref(false)
    const panelKey: Ref<number> = ref(0)
    const panelBtnDisabled: UnwrapRef<PanelBtnDisabled> = reactive({
      left: false,
      right: false,
    })

    const isCurrent: ComputedRef<boolean> = computed(
      () => props.preview.previewYear === currentYear && props.preview.previewMonth.index === currentMonth
    )

    const isSame: ComputedRef<boolean> = computed(
      () =>
        props.choose.chooseYear === props.preview.previewYear &&
        props.choose.chooseMonth.index === props.preview.previewMonth.index
    )

    const sortWeekList: ComputedRef<Array<Week>> = computed(() => {
      const index = WEEK_HEADER.findIndex((week: Week) => week.index === +props.componentProps.firstDayOfWeek)
      if (index === -1 || index === 0) return WEEK_HEADER
      return WEEK_HEADER.slice(index).concat(WEEK_HEADER.slice(0, index))
    })

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
        const date = `${previewYear}-${+previewMonth.index + 1}`
        panelBtnDisabled.right = !dayjs(date).isSameOrBefore(dayjs(max), 'month')
      }
      if (min) {
        const date = `${previewYear}-${+previewMonth.index - 1}`
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
          plain: true,
          outline: false,
          textColor: '',
        }
      }
      let outline = isCurrent.value && +currentDay === day && props.componentProps.showCurrent
      const {
        choose: { chooseDay },
        preview: { previewYear, previewMonth },
        componentProps: { allowedDates, color, multiple, range },
      }: { choose: Choose; preview: Preview; componentProps: ComponentProps } = props
      const val = `${previewYear}-${previewMonth.index}-${day}`
      const shouldChooseResult = shouldChoose(val)
      const rangeOrMultiple = range || multiple

      const disabled = inRange(day) ? (allowedDates ? !allowedDates(val) : false) : true
      const plain = disabled ? true : rangeOrMultiple ? !shouldChooseResult : !isSame.value || +chooseDay !== day
      const bgColor = !plain ? color : ''
      const dayExist = rangeOrMultiple ? shouldChooseResult : +chooseDay === day && isSame.value

      outline = rangeOrMultiple
        ? outline && (disabled ? true : !shouldChooseResult)
        : isSame.value
        ? outline && (chooseDay !== currentDay || disabled)
        : outline

      const textColor = disabled ? '' : outline ? color : dayExist ? '' : 'rgba(0,0,0,.87)'

      return {
        disabled,
        plain,
        outline,
        color: bgColor,
        textColor,
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

    return {
      days,
      reverse,
      panelKey,
      sortWeekList,
      panelBtnDisabled,
      filterDay,
      checkDate,
      chooseDay,
      buttonProps,
    }
  },
})
</script>
