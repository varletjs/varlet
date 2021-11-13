<template>
  <div class="var-month-picker__panel">
    <div class="var-month-picker__content">
      <panel-header
        type="month"
        :date="preview"
        :disabled="panelBtnDisabled"
        @check-panel="clickYear"
        @check-date="checkDate"
      />
      <transition :name="reverse ? 'var-date-picker-reverse-translatex' : 'var-date-picker-translatex'">
        <ul :key="panelKey">
          <li v-for="month in MONTH_LIST" :key="month.index">
            <var-button
              type="primary"
              class="var-month-picker__button"
              var-month-picker-cover
              :ripple="false"
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
import { defineComponent, ref, computed, reactive, watch } from 'vue'
import dayjs from 'dayjs/esm'
import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter'
import { MONTH_LIST } from '../props'
import PanelHeader from './panel-header.vue'
import VarButton from '../../button'
import { toNumber } from '../../utils/shared'
import { pack } from '../../locale'
import { watchDarkMode } from '../../utils/components'
import type { Ref, ComputedRef, UnwrapRef, PropType } from 'vue'
import type { Choose, Preview, ComponentProps, Month, PanelBtnDisabled } from '../props'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

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
    const panelBtnDisabled: UnwrapRef<PanelBtnDisabled> = reactive({
      left: false,
      right: false,
    })
    const isDarkTheme = ref(false)

    const isSameYear: ComputedRef<boolean> = computed(() => props.choose.chooseYear === props.preview.previewYear)

    const isCurrentYear: ComputedRef<boolean> = computed(() => props.preview.previewYear === currentYear)

    const getMonthAbbr = (key: string): string => pack.value.datePickerMonthDict[key].abbr

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
      const {
        choose: { chooseMonth },
        preview: { previewYear },
        componentProps: { allowedDates, color, multiple, range },
      }: { choose: Choose; preview: Preview; componentProps: ComponentProps } = props

      const val = `${previewYear}-${key}`

      const monthExist = (): boolean => {
        if (range || multiple) return shouldChoose(val)
        return chooseMonth.index === key && isSameYear.value
      }

      const computeDisabled = (): boolean => {
        if (!inRange(key)) return true
        if (!allowedDates) return false
        return !allowedDates(val)
      }
      const disabled = computeDisabled()

      const computeText = (): boolean => {
        if (disabled) return true
        if (range || multiple) return !shouldChoose(val)
        return !isSameYear.value || chooseMonth.index !== key
      }

      const computeOutline = (): boolean => {
        // 不满足基本条件， 基本条件为当前年、当前月并且 showCurrent 为true的情况
        if (!(isCurrentYear.value && currentMonth === key && props.componentProps.showCurrent)) return false

        // 存在着 disabled
        if ((range || multiple || isSameYear.value) && disabled) return true

        // 在选择范围之外
        if (range || multiple) return !shouldChoose(val)

        // 同一年但是未被选择的情况
        if (isSameYear.value) return chooseMonth.index !== currentMonth

        return true
      }

      const computeTextColor = (): string | undefined => {
        if (disabled) return ''
        if (computeOutline()) return color
        if (monthExist()) return ''
        return isDarkTheme.value ? '#ffffff' : 'rgba(0, 0, 0, .87)'
      }

      return {
        disabled,
        outline: computeOutline(),
        text: computeText(),
        color: !computeText() ? color : '',
        textColor: computeTextColor(),
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

    watchDarkMode((themes) => {
      isDarkTheme.value = themes === 'darkThemes'
    })

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
