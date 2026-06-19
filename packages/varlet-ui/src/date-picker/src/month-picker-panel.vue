<template>
  <div :class="n()">
    <div :class="n('content')">
      <transition :name="`${nDate()}${reverse ? '-reverse' : ''}-translatex`">
        <ul :key="panelKey">
          <li v-for="month in MonthList" :key="month">
            <var-button
              type="primary"
              var-month-picker-cover
              :elevation="datePickerProps.buttonElevation"
              v-bind="{
                ...buttonProps(month),
              }"
              @click="chooseMonth(month)"
            >
              {{ getMonthAbbr(month) }}
            </var-button>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs/esm/index.js'
import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter/index.js'
import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore/index.js'
import { defineComponent, ref } from 'vue'
import type { PropType, Ref } from 'vue'
import VarButton from '../../button'
import { t } from '../../locale'
import { injectLocaleProvider } from '../../locale-provider/provide'
import { createNamespace } from '../../utils/components'
import { DatePickerTypes, DatePickerUnits, MonthList, ShiftDirections, type Month } from '../constants'
import type { DatePickerPreviewState, DatePickerSelectionState, PanelDatePickerProps } from '../types'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
const { n } = createNamespace('month-picker')
const { n: nDate } = createNamespace('date-picker')

export default defineComponent({
  name: 'MonthPickerPanel',
  components: {
    VarButton,
  },
  props: {
    preview: {
      type: Object as PropType<DatePickerPreviewState>,
      required: true,
    },
    choose: {
      type: Object as PropType<DatePickerSelectionState>,
      required: true,
    },
    datePickerProps: {
      type: Object as PropType<PanelDatePickerProps>,
      required: true,
    },
  },
  emits: ['choose-month'],

  setup(props, { emit }) {
    const reverse: Ref<boolean> = ref(false)
    const panelKey: Ref<number> = ref(0)

    const { t: pt } = injectLocaleProvider()

    function getMonthAbbr(key: Month): string {
      return (pt || t)('datePickerMonthDict')?.[key].abbr ?? ''
    }

    function isInRange(month: Month): boolean {
      const {
        preview: { previewYear },
        datePickerProps: { min, max },
      }: { preview: DatePickerPreviewState; datePickerProps: PanelDatePickerProps } = props

      const previewDate = `${previewYear}-${month}`
      const isBeforeMax = max ? dayjs(previewDate).isSameOrBefore(dayjs(max), DatePickerUnits.Month) : true
      const isAfterMin = min ? dayjs(previewDate).isSameOrAfter(dayjs(min), DatePickerUnits.Month) : true

      return isBeforeMax && isAfterMin
    }

    function isSelectedMonth(value: string, month: Month): boolean {
      const {
        preview: { previewYear },
        choose: { chooseMonth, chooseYear, chooseMonths, chooseRangeMonth },
        datePickerProps: { multiple, range },
      }: {
        preview: DatePickerPreviewState
        choose: DatePickerSelectionState
        datePickerProps: PanelDatePickerProps
      } = props

      if (range) {
        if (!chooseRangeMonth.length) {
          return false
        }

        const isBeforeMax = dayjs(value).isSameOrBefore(dayjs(chooseRangeMonth[1]), DatePickerUnits.Month)
        const isAfterMin = dayjs(value).isSameOrAfter(dayjs(chooseRangeMonth[0]), DatePickerUnits.Month)

        return isBeforeMax && isAfterMin
      }

      return multiple ? chooseMonths.includes(value) : chooseYear === previewYear && chooseMonth === month
    }

    function buttonProps(month: Month) {
      const {
        preview: { previewYear },
        datePickerProps: { allowedDates, color, type },
      }: { preview: DatePickerPreviewState; datePickerProps: PanelDatePickerProps } = props

      const value = `${previewYear}-${month}`
      const active = isSelectedMonth(value, month)
      const disabled =
        !isInRange(month) || (type === DatePickerTypes.Month && allowedDates ? !allowedDates(value) : false)

      return {
        outline: false,
        text: disabled || !active,
        color: active && !disabled ? color : '',
        textColor: '',
        [`${nDate()}-color-cover`]: !active && !disabled,
        class: n('button'),
        disabled,
      }
    }

    function chooseMonth(month: Month) {
      emit('choose-month', month)
    }

    // expose for internal
    function shiftPreview(direction: ShiftDirections) {
      reverse.value = direction === ShiftDirections.Prev
      panelKey.value += direction === ShiftDirections.Prev ? -1 : 1
    }

    return {
      n,
      nDate,
      MonthList,
      reverse,
      panelKey,
      shiftPreview,
      buttonProps,
      getMonthAbbr,
      chooseMonth,
    }
  },
})
</script>
