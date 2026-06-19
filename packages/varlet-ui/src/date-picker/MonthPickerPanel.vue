<template>
  <div :class="n()">
    <div :class="n('content')">
      <transition :name="`${nDate()}${reverse ? '-reverse' : ''}-translatex`">
        <ul :key="panelKey">
          <li v-for="month in MonthList" :key="month">
            <var-button
              type="primary"
              var-month-picker-cover
              :elevation="panelProps.buttonElevation"
              v-bind="{
                ...buttonProps(month),
              }"
              @click="selectMonth(month)"
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
import { defineComponent, ref } from 'vue'
import type { PropType, Ref } from 'vue'
import VarButton from '../button'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import { createNamespace } from '../utils/components'
import { createDayjs } from '../utils/shared'
import { DatePickerTypes, DatePickerUnits, MonthList, ShiftDirections, type Month } from './constants'
import type { DatePickerPreviewState, DatePickerSelectionState, PanelDatePickerProps } from './types'

const dayjs = createDayjs()
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
    selection: {
      type: Object as PropType<DatePickerSelectionState>,
      required: true,
    },
    panelProps: {
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
        panelProps: { min, max },
      }: { preview: DatePickerPreviewState; panelProps: PanelDatePickerProps } = props

      const monthValue = `${previewYear}-${month}`
      const isBeforeMax = max ? dayjs(monthValue).isSameOrBefore(dayjs(max), DatePickerUnits.Month) : true
      const isAfterMin = min ? dayjs(monthValue).isSameOrAfter(dayjs(min), DatePickerUnits.Month) : true

      return isBeforeMax && isAfterMin
    }

    function isSelectedMonth(value: string, month: Month): boolean {
      const {
        preview: { previewYear },
        selection: { selectedMonth, selectedYear, selectedMonths, selectedRangeMonths },
        panelProps: { multiple, range },
      }: {
        preview: DatePickerPreviewState
        selection: DatePickerSelectionState
        panelProps: PanelDatePickerProps
      } = props

      if (range) {
        if (!selectedRangeMonths.length) {
          return false
        }

        if (selectedRangeMonths.length === 1) {
          return dayjs(value).isSame(dayjs(selectedRangeMonths[0]), DatePickerUnits.Month)
        }

        const isBeforeMax = dayjs(value).isSameOrBefore(dayjs(selectedRangeMonths[1]), DatePickerUnits.Month)
        const isAfterMin = dayjs(value).isSameOrAfter(dayjs(selectedRangeMonths[0]), DatePickerUnits.Month)

        return isBeforeMax && isAfterMin
      }

      return multiple ? selectedMonths.includes(value) : selectedYear === previewYear && selectedMonth === month
    }

    function buttonProps(month: Month) {
      const {
        preview: { previewYear },
        panelProps: { allowedDates, color, type },
      }: { preview: DatePickerPreviewState; panelProps: PanelDatePickerProps } = props

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

    function selectMonth(month: Month) {
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
      selectMonth,
    }
  },
})
</script>
