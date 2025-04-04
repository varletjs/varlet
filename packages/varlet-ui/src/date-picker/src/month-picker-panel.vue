<template>
  <div :class="n()">
    <div :class="n('content')">
      <panel-header
        ref="headerEl"
        type="month"
        :date="preview"
        :disabled="panelBtnDisabled"
        @check-panel="clickYear"
        @check-date="checkDate"
      />
      <transition :name="`${nDate()}${reverse ? '-reverse' : ''}-translatex`">
        <ul :key="panelKey">
          <li v-for="month in MONTH_LIST" :key="month">
            <var-button
              type="primary"
              var-month-picker-cover
              :ripple="false"
              :elevation="componentProps.buttonElevation"
              v-bind="{
                ...buttonProps(month),
              }"
              @click="(event: Event) => chooseMonth(month, event)"
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
import { computed, defineComponent, reactive, ref, watch } from 'vue'
import type { ComputedRef, PropType, Ref, RendererNode, UnwrapRef } from 'vue'
import { toNumber } from '@varlet/shared'
import dayjs from 'dayjs/esm/index.js'
import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter/index.js'
import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore/index.js'
import VarButton from '../../button'
import { t } from '../../locale'
import { injectLocaleProvider } from '../../locale-provider/provide'
import { createNamespace } from '../../utils/components'
import { MONTH_LIST } from '../props'
import type { Choose, ComponentProps, Month, PanelBtnDisabled, Preview } from '../props'
import PanelHeader from './panel-header.vue'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
const { n, classes } = createNamespace('month-picker')
const { n: nDate } = createNamespace('date-picker')

export default defineComponent({
  name: 'MonthPickerPanel',
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
    clickYear: {
      type: Function as PropType<() => void>,
      required: true,
    },
    componentProps: {
      type: Object as PropType<ComponentProps>,
      required: true,
    },
  },
  emits: ['check-preview', 'choose-month'],

  setup(props, { emit }) {
    const [currentYear, currentMonth] = props.current.split('-')
    const reverse: Ref<boolean> = ref(false)
    const panelKey: Ref<number> = ref(0)
    const headerEl: Ref<RendererNode | null> = ref(null)
    const panelBtnDisabled: UnwrapRef<PanelBtnDisabled> = reactive({
      left: false,
      right: false,
    })

    const { t: pt } = injectLocaleProvider()

    const isSameYear: ComputedRef<boolean> = computed(() => props.choose.chooseYear === props.preview.previewYear)

    const isCurrentYear: ComputedRef<boolean> = computed(() => props.preview.previewYear === currentYear)

    const getMonthAbbr = (key: Month): string => (pt || t)('datePickerMonthDict')?.[key].abbr ?? ''

    const inRange = (key: string): boolean => {
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

    const shouldChoose = (val: string): boolean => {
      const {
        choose: { chooseMonths, chooseDays, chooseRangeMonth },
        componentProps: { type, range },
      }: { choose: Choose; componentProps: ComponentProps } = props

      if (range) {
        if (!chooseRangeMonth.length) {
          return false
        }

        const isBeforeMax = dayjs(val).isSameOrBefore(dayjs(chooseRangeMonth[1]), 'month')
        const isAfterMin = dayjs(val).isSameOrAfter(dayjs(chooseRangeMonth[0]), 'month')

        return isBeforeMax && isAfterMin
      }

      if (type === 'month') {
        return chooseMonths.includes(val)
      }
      return chooseDays.some((value) => value.includes(val))
    }

    const buttonProps = (key: string) => {
      const {
        choose: { chooseMonth },
        preview: { previewYear },
        componentProps: { allowedDates, color, multiple, range },
      }: { choose: Choose; preview: Preview; componentProps: ComponentProps } = props

      const val = `${previewYear}-${key}`

      const monthExist = (): boolean => {
        if (range || multiple) {
          return shouldChoose(val)
        }
        return chooseMonth === key && isSameYear.value
      }

      const computeDisabled = (): boolean => {
        if (!inRange(key)) {
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

        return !isSameYear.value || chooseMonth !== key
      }

      const computeOutline = (): boolean => {
        // Not met the basic conditions, the basic conditions are the current year, the current month, and the showCurrent as true
        if (!(isCurrentYear.value && currentMonth === key && props.componentProps.showCurrent)) {
          return false
        }

        if ((range || multiple || isSameYear.value) && disabled) {
          return true
        }

        // Outside the selection range
        if (range || multiple) {
          return !shouldChoose(val)
        }

        // In the same year but not selected
        if (isSameYear.value) {
          return chooseMonth !== currentMonth
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
        if (monthExist()) {
          return ''
        }

        return `${nDate()}-color-cover`
      }

      const isCover = textColorOrCover().startsWith(nDate())

      return {
        outline: computeOutline(),
        text: computeText(),
        color: !computeText() ? color : '',
        textColor: isCover ? '' : textColorOrCover(),
        [`${nDate()}-color-cover`]: isCover,
        class: classes(n('button'), [disabled, n('button--disabled')]),
        disabled,
      }
    }

    const chooseMonth = (month: Month, event: Event) => {
      const buttonEl = event.currentTarget as HTMLButtonElement
      if (buttonEl.classList.contains(n('button--disabled'))) {
        return
      }

      emit('choose-month', month)
    }

    const checkDate = (checkType: string) => {
      reverse.value = checkType === 'prev'
      panelKey.value += checkType === 'prev' ? -1 : 1
      emit('check-preview', 'year', checkType)
    }

    // expose for internal
    const forwardRef = (checkType: string) => {
      headerEl.value!.checkDate(checkType)
    }

    watch(
      () => [props.preview.previewYear, props.componentProps.max, props.componentProps.min],
      ([year, max, min]) => {
        if (max) {
          panelBtnDisabled.right = !dayjs(`${toNumber(year) + 1}`).isSameOrBefore(dayjs(max), 'year')
        }
        if (min) {
          panelBtnDisabled.left = !dayjs(`${toNumber(year) - 1}`).isSameOrAfter(dayjs(min), 'year')
        }
      },
      { immediate: true },
    )

    return {
      n,
      nDate,
      t,
      MONTH_LIST,
      headerEl,
      reverse,
      panelKey,
      panelBtnDisabled,
      forwardRef,
      buttonProps,
      getMonthAbbr,
      chooseMonth,
      checkDate,
    }
  },
})
</script>
