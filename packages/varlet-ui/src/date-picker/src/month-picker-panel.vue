<template>
  <div :class="n()">
    <div :class="n('content')">
      <transition :name="`${nDate()}${reverse ? '-reverse' : ''}-translatex`">
        <ul :key="panelKey">
          <li v-for="month in MONTH_LIST" :key="month">
            <var-button
              type="primary"
              var-month-picker-cover
              :elevation="componentProps.buttonElevation"
              v-bind="{
                ...buttonProps(month),
              }"
              @click="chooseMonth(month, $event)"
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
import type { ComponentProps, Month, Preview } from '../props'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
const { n, classes } = createNamespace('month-picker')
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
    componentProps: {
      type: Object as PropType<ComponentProps>,
      required: true,
    },
  },
  emits: ['shift-preview', 'choose-month'],

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
        componentProps: { min, max },
      }: { preview: Preview; componentProps: ComponentProps } = props
      let isBeforeMax = true
      let isAfterMin = true
      const previewDate = `${previewYear}-${key}`
      if (max) {
        isBeforeMax = dayjs(previewDate).isSameOrBefore(dayjs(max), 'month')
      }
      if (min) {
        isAfterMin = dayjs(previewDate).isSameOrAfter(dayjs(min), 'month')
      }
      return isBeforeMax && isAfterMin
    }

    function buttonProps(key: string) {
      const {
        preview: { previewYear, previewMonth },
        componentProps: { allowedDates, color },
      }: { preview: Preview; componentProps: ComponentProps } = props

      const val = `${previewYear}-${key}`
      const active = previewMonth === key

      function computeDisabled(): boolean {
        if (!inRange(key)) {
          return true
        }
        if (!allowedDates) {
          return false
        }

        return !allowedDates(val)
      }
      const disabled = computeDisabled()

      return {
        outline: false,
        text: disabled || !active,
        color: active && !disabled ? color : '',
        textColor: '',
        [`${nDate()}-color-cover`]: !active && !disabled,
        class: classes(n('button'), [disabled, n('button--disabled')]),
        disabled,
      }
    }

    function chooseMonth(month: Month, event: Event) {
      const buttonEl = event.currentTarget as HTMLButtonElement
      if (buttonEl.classList.contains(n('button--disabled'))) {
        return
      }

      emit('choose-month', month)
    }

    function shiftYearPreview(direction: string) {
      reverse.value = direction === 'prev'
      panelKey.value += direction === 'prev' ? -1 : 1
      emit('shift-preview', 'year', direction)
    }

    // expose for internal
    function shiftPreview(direction: string) {
      shiftYearPreview(direction)
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
      shiftYearPreview,
    }
  },
})
</script>
