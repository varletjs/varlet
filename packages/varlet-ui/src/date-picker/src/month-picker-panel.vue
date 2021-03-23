<template>
  <div class="var-month-picker__panel">
    <div class="var-month-picker__content">
      <panel-header
        type="month"
        :date="preview"
        @check-panel="clickYear"
        :disabled="panelBtnDisabled"
        @check-date="checkDate"
      />
      <transition :name="reverse ? 'var-date-picker-reverse-translatex' : 'var-date-picker-translatex'">
        <ul :key="panelKey">
          <li v-for="month in MONTH_LIST" :key="month.index">
            <var-button
              type="primary"
              forbid-ripple
              v-bind="{
                ...buttonProps(month.index),
              }"
              @click="chooseMonth(month)"
            >
              {{ getMonthAbbr(month.index) }}
            </var-button>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, PropType, computed, ComputedRef, reactive, watch, UnwrapRef } from 'vue'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import { MONTH_LIST, Choose, Month, Preview, ComponentProps, PanelBtnDisabled } from '../props'
import PanelHeader from './panel-header.vue'
import Button from '../../button'
import { toNumber } from '../../utils/shared'
import { pack } from '../../locale'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

export default defineComponent({
  name: 'MonthPickerPanel',
  components: {
    [Button.name]: Button,
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
    clickYear: {
      type: Function,
    },
    componentProps: {
      type: Object as PropType<ComponentProps>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const [currentYear, currentMonth] = props.current.split('-')
    const reverse: Ref<boolean> = ref(false)
    const panelKey: Ref<number> = ref(0)
    const panelBtnDisabled: UnwrapRef<PanelBtnDisabled> = reactive({
      left: false,
      right: false,
    })

    const isSameYear: ComputedRef<boolean> = computed(() => props.choose.chooseYear === props.preview.previewYear)

    const isCurrentYear: ComputedRef<boolean> = computed(() => props.preview.previewYear === currentYear)

    const getMonthAbbr = (key: string): string => pack.value.monthDictionary[key].abbr

    const inRange = (key: string): boolean => {
      const {
        preview: { previewYear },
        componentProps: { min, max },
      }: { preview: Preview; componentProps: ComponentProps } = props

      let isBeforeMax = true
      let isAfterMin = true
      const previewDate = `${previewYear}-${key}`

      if (max) isBeforeMax = dayjs(previewDate).isSameOrBefore(dayjs(max), 'month')
      if (min) isAfterMin = dayjs(previewDate).isSameOrAfter(dayjs(min), 'month')

      return isBeforeMax && isAfterMin
    }

    const shouldChoose = (val: string): boolean => {
      const {
        choose: { chooseMonths, chooseDays, chooseRangeMonth },
        componentProps: { type, range },
      }: { choose: Choose; componentProps: ComponentProps } = props

      if (!chooseRangeMonth.length) return false

      if (range) {
        const isBeforeMax = dayjs(val).isSameOrBefore(dayjs(chooseRangeMonth[1]), 'month')
        const isAfterMin = dayjs(val).isSameOrAfter(dayjs(chooseRangeMonth[0]), 'month')

        return isBeforeMax && isAfterMin
      }

      if (type === 'month') return chooseMonths.includes(val)
      return chooseDays.some((value) => value.includes(val))
    }

    const buttonProps = (key: string) => {
      let outline = isCurrentYear.value && currentMonth === key && props.componentProps.showCurrent

      const {
        choose: { chooseMonth },
        preview: { previewYear },
        componentProps: { allowedDates, color, multiple, range },
      }: { choose: Choose; preview: Preview; componentProps: ComponentProps } = props

      const val = `${previewYear}-${key}`
      const shouldChooseResult = shouldChoose(val)
      const rangeOrMultiple = range || multiple
      const monthExist = rangeOrMultiple ? shouldChooseResult : chooseMonth.index === key && isSameYear.value

      const disabled = inRange(key) ? (allowedDates ? !allowedDates(val) : false) : true
      const text = disabled
        ? true
        : rangeOrMultiple
        ? !shouldChooseResult
        : !isSameYear.value || chooseMonth.index !== key
      const bgColor = !text ? color : ''

      outline = rangeOrMultiple
        ? outline && (disabled ? true : !shouldChooseResult)
        : isSameYear.value
        ? outline && (chooseMonth.index !== currentMonth || disabled)
        : outline

      const textColor = disabled ? '' : outline ? color : monthExist ? '' : 'rgba(0, 0, 0, .87)'

      return {
        disabled,
        outline,
        text,
        color: bgColor,
        textColor,
      }
    }

    const chooseMonth = (month: Month) => {
      emit('choose-month', month)
    }

    const checkDate = (checkType: string) => {
      reverse.value = checkType === 'prev'
      panelKey.value += checkType === 'prev' ? -1 : 1
      emit('check-preview', 'year', checkType)
    }

    watch(
      () => props.preview.previewYear,
      (year) => {
        const {
          componentProps: { min, max },
        } = props

        if (max) panelBtnDisabled.right = !dayjs(`${toNumber(year) + 1}`).isSameOrBefore(dayjs(max), 'year')
        if (min) panelBtnDisabled.left = !dayjs(`${toNumber(year) - 1}`).isSameOrAfter(dayjs(min), 'year')
      },
      { immediate: true }
    )

    return {
      pack,
      MONTH_LIST,
      reverse,
      panelKey,
      panelBtnDisabled,
      buttonProps,
      getMonthAbbr,
      chooseMonth,
      checkDate,
    }
  },
})
</script>
