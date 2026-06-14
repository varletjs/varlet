<template>
  <div :class="n()">
    <div :class="n('content')">
      <transition :name="`${nDate()}${reverse ? '-reverse' : ''}-translatex`">
        <ul :key="panelKey">
          <li v-for="month in MONTH_LIST" :key="month">
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
import { MONTH_LIST } from '../props'
import type { DatePickerProps, Month, Preview } from '../props'

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
      type: Object as PropType<Preview>,
      required: true,
    },
    datePickerProps: {
      type: Object as PropType<DatePickerProps>,
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

    function inRange(key: string): boolean {
      const {
        preview: { previewYear },
        datePickerProps: { min, max },
      }: { preview: Preview; datePickerProps: DatePickerProps } = props

      const previewDate = `${previewYear}-${key}`
      const isBeforeMax = max ? dayjs(previewDate).isSameOrBefore(dayjs(max), 'month') : true
      const isAfterMin = min ? dayjs(previewDate).isSameOrAfter(dayjs(min), 'month') : true

      return isBeforeMax && isAfterMin
    }

    function buttonProps(key: string) {
      const {
        preview: { previewYear, previewMonth },
        datePickerProps: { allowedDates, color },
      }: { preview: Preview; datePickerProps: DatePickerProps } = props

      const val = `${previewYear}-${key}`
      const active = previewMonth === key
      const disabled = !inRange(key) || (allowedDates ? !allowedDates(val) : false)

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
    function shiftPreview(direction: string) {
      reverse.value = direction === 'prev'
      panelKey.value += direction === 'prev' ? -1 : 1
    }

    return {
      n,
      nDate,
      MONTH_LIST,
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
