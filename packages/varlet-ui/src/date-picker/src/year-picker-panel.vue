<template>
  <div>
    <transition :name="`${nDate()}${reverse ? '-reverse' : ''}-translatex`">
      <ul ref="panel" :key="panelKey" :class="n()">
        <li v-for="year in yearList" :key="year">
          <var-button
            type="primary"
            var-year-picker-cover
            :elevation="datePickerProps.buttonElevation"
            v-bind="{
              ...buttonProps(`${year}`),
            }"
            @click="chooseYear(year)"
          >
            {{ year }}
          </var-button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { times, toNumber } from '@varlet/shared'
import { onSmartMounted } from '@varlet/use'
import dayjs from 'dayjs/esm/index.js'
import { computed, defineComponent, ref, watch, type ComputedRef, type PropType, type Ref } from 'vue'
import VarButton from '../../button'
import { createNamespace } from '../../utils/components'
import { DatePickerTypes, DatePickerUnits, ShiftDirections } from '../constants'
import { type DatePickerSelectionState, type PanelDatePickerProps } from '../types'

const { n } = createNamespace('year-picker')
const { n: nDate } = createNamespace('date-picker')

export default defineComponent({
  name: 'YearPickerPanel',
  components: {
    VarButton,
  },
  props: {
    preview: {
      type: String,
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
  emits: ['choose-year'],

  setup(props, { emit }) {
    const panel = ref<null | HTMLElement>()
    const reverse: Ref<boolean> = ref(false)
    const panelKey: Ref<number> = ref(0)
    const page: Ref<number> = ref(0)

    const yearList: ComputedRef<Array<number>> = computed(() => {
      if (!props.preview) {
        return []
      }

      const startYear = Math.floor(toNumber(props.preview) / 100 + page.value) * 100
      return times(100, (index) => Math.max(0, startYear) + index)
    })

    function isInRange(year: string): boolean {
      const {
        datePickerProps: { min, max },
      }: { datePickerProps: PanelDatePickerProps } = props

      const isBeforeMax = max ? dayjs(year).isSameOrBefore(dayjs(max), DatePickerUnits.Year) : true
      const isAfterMin = min ? dayjs(year).isSameOrAfter(dayjs(min), DatePickerUnits.Year) : true

      return isBeforeMax && isAfterMin
    }

    function isSelectedYear(year: string): boolean {
      const {
        choose: { chooseYear, chooseYears, chooseRangeYear },
        datePickerProps: { multiple, range },
      }: { choose: DatePickerSelectionState; datePickerProps: PanelDatePickerProps } = props

      if (range) {
        if (!chooseRangeYear.length) {
          return false
        }

        const isBeforeMax = dayjs(year).isSameOrBefore(dayjs(chooseRangeYear[1]), DatePickerUnits.Year)
        const isAfterMin = dayjs(year).isSameOrAfter(dayjs(chooseRangeYear[0]), DatePickerUnits.Year)

        return isBeforeMax && isAfterMin
      }

      return multiple ? chooseYears.includes(year) : chooseYear === year
    }

    function buttonProps(year: string) {
      const {
        datePickerProps: { allowedDates, color, type },
      }: { datePickerProps: PanelDatePickerProps } = props

      const active = isSelectedYear(year)
      const disabled = !isInRange(year) || (type === DatePickerTypes.Year && allowedDates ? !allowedDates(year) : false)

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

    function chooseYear(year: number) {
      emit('choose-year', year)
    }

    function scrollToView() {
      const activeEl = panel.value!.querySelector<HTMLElement>('.var-button--primary')
      const scrollContainer = panel.value!.closest<HTMLElement>(`.${nDate('body')}`)

      if (!activeEl || !scrollContainer) {
        return
      }

      const containerRect = scrollContainer.getBoundingClientRect()
      const activeRect = activeEl.getBoundingClientRect()

      // Only scroll the picker body itself, avoid scrollIntoView bubbling up to the page
      scrollContainer.scrollTop +=
        activeRect.top - containerRect.top - (scrollContainer.clientHeight - activeRect.height) / 2
    }

    // expose for internal
    function shiftPreview(direction: ShiftDirections) {
      const isPrevType = direction === ShiftDirections.Prev

      if (isPrevType && yearList.value[0] <= 0) {
        return
      }

      reverse.value = isPrevType
      panelKey.value += isPrevType ? -1 : 1
      page.value += isPrevType ? -1 : 1
    }

    onSmartMounted(scrollToView)

    watch(
      () => props.preview,
      () => {
        page.value = 0
      },
    )

    return {
      n,
      buttonProps,
      panel,
      yearList,
      reverse,
      panelKey,
      nDate,
      chooseYear,
      shiftPreview,
    }
  },
})
</script>
