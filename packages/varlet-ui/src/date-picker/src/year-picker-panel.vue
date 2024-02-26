<template>
  <div>
    <var-sticky css-mode>
      <panel-header
        ref="headerEl"
        type="year"
        :date="{
          previewYear: `${yearList[0]} ~ ${yearList[yearList.length - 1]}`,
        }"
        :disabled="panelBtnDisabled"
        @check-date="checkDate"
      />
    </var-sticky>

    <transition :name="`${nDate()}${reverse ? '-reverse' : ''}-translatex`">
      <ul ref="panel" :class="n()" :key="panelKey">
        <li v-for="year in yearList" :key="year">
          <var-button
            type="primary"
            var-year-picker-cover
            :ripple="false"
            :elevation="componentProps.buttonElevation"
            v-bind="{
              ...buttonProps(`${year}`),
            }"
            @click="(event: Event) => chooseYear(year, event)"
          >
            {{ year }}
          </var-button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs/esm/index.js'
import {
  defineComponent,
  computed,
  ref,
  watch,
  reactive,
  type ComputedRef,
  type PropType,
  type Ref,
  type RendererNode,
  type UnwrapRef,
} from 'vue'
import { toNumber } from '@varlet/shared'
import VarButton from '../../button'
import VarSticky from '../../sticky'
import PanelHeader from './panel-header.vue'
import { createNamespace } from '../../utils/components'
import { onSmartMounted } from '@varlet/use'
import { type ComponentProps, type Choose, type PanelBtnDisabled } from '../props'

const { n, classes } = createNamespace('year-picker')
const { n: nDate } = createNamespace('date-picker')

export default defineComponent({
  name: 'YearPickerPanel',
  components: {
    VarButton,
    VarSticky,
    PanelHeader,
  },
  props: {
    choose: {
      type: Object as PropType<Choose>,
      required: true,
    },
    current: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
    },
    componentProps: {
      type: Object as PropType<ComponentProps>,
      required: true,
    },
  },
  emits: ['choose-year'],

  setup(props, { emit }) {
    const [currentYear] = props.current.split('-')
    const panel = ref<null | HTMLElement>()
    const headerEl: Ref<RendererNode | null> = ref(null)
    const reverse: Ref<boolean> = ref(false)
    const panelKey: Ref<number> = ref(0)
    const page: Ref<number> = ref(0)
    const panelBtnDisabled: UnwrapRef<PanelBtnDisabled> = reactive({
      left: false,
      right: false,
    })

    const yearList: ComputedRef<Array<number>> = computed(() => {
      const list: Array<number> = []
      if (!props.preview) return list

      let startYear = Math.floor(toNumber(props.preview) / 100 + page.value) * 100
      startYear = startYear < 0 ? 0 : startYear

      const yearRange = [startYear, startYear + 100]

      for (let i = yearRange[0]; i < yearRange[1]; i++) {
        list.push(i)
      }
      return list
    })

    const shouldChoose = (val: string): boolean => {
      const {
        choose: { chooseMonths, chooseDays, chooseYears, chooseRangeYear },
        componentProps: { type, range },
      }: { choose: Choose; componentProps: ComponentProps } = props

      if (range) {
        if (!chooseRangeYear.length) return false

        const isBeforeMax = dayjs(val).isSameOrBefore(dayjs(chooseRangeYear[1]), 'year')
        const isAfterMin = dayjs(val).isSameOrAfter(dayjs(chooseRangeYear[0]), 'year')

        return isBeforeMax && isAfterMin
      }

      if (type === 'year') return chooseYears.includes(val)
      if (type === 'month') return chooseMonths.some((value) => value.includes(val))

      return chooseDays.some((value) => value.includes(val))
    }

    const inRange = (year: string): boolean => {
      const {
        componentProps: { min, max },
      }: { componentProps: ComponentProps } = props

      let isBeforeMax = true
      let isAfterMin = true

      if (max) isBeforeMax = dayjs(year).isSameOrBefore(dayjs(max), 'year')
      if (min) isAfterMin = dayjs(year).isSameOrAfter(dayjs(min), 'year')

      return isBeforeMax && isAfterMin
    }

    const buttonProps = (year: string) => {
      const {
        choose: { chooseYear },
        componentProps: { allowedDates, color, multiple, range },
      }: { choose: Choose; componentProps: ComponentProps } = props

      const yearExist = (): boolean => {
        if (range || multiple) return shouldChoose(year)

        return chooseYear === year
      }

      const computeDisabled = (): boolean => {
        if (!inRange(year)) return true
        if (!allowedDates) return false

        return !allowedDates(year)
      }
      const disabled = computeDisabled()

      const computeText = (): boolean => {
        if (disabled) return true
        if (range || multiple) return !shouldChoose(year)

        return chooseYear !== year
      }

      const computeOutline = (): boolean => {
        if (!(currentYear === year && props.componentProps.showCurrent)) return false

        // 存在着 disabled
        if ((range || multiple) && disabled) return true

        // 在选择范围之外
        if (range || multiple) return !shouldChoose(year)

        return chooseYear !== currentYear
      }

      const textColorOrCover = (): string => {
        if (disabled) return ''
        if (computeOutline()) return color ?? ''
        if (yearExist()) return ''

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

    const chooseYear = (year: number, event: Event) => {
      const buttonEl = event.currentTarget as HTMLButtonElement
      if (buttonEl.classList.contains(n('button--disabled'))) return

      emit('choose-year', year)
    }

    const scrollToView = () => {
      const activeEl =
        panel.value!.querySelector('.var-button--primary') ?? panel.value!.querySelector('.var-button--outline')

      activeEl?.scrollIntoView({
        block: 'center',
      })
    }

    const checkDate = (checkType: string) => {
      reverse.value = checkType === 'prev'
      panelKey.value += checkType === 'prev' ? -1 : 1
      page.value += checkType === 'prev' ? -1 : 1
    }

    // expose for internal
    const forwardRef = (checkType: string) => {
      headerEl.value!.checkDate(checkType)
    }

    onSmartMounted(scrollToView)

    watch(
      () => props.preview,
      () => {
        page.value = 0
      }
    )

    watch(
      yearList,
      (list) => {
        const {
          componentProps: { min, max },
        } = props
        if (max)
          panelBtnDisabled.right = !dayjs(`${toNumber(list[list.length - 1])}`).isSameOrBefore(dayjs(max), 'year')
        if (min) panelBtnDisabled.left = !dayjs(`${toNumber(list[0])}`).isSameOrAfter(dayjs(min), 'year')

        if (toNumber(list[0] <= 0)) panelBtnDisabled.left = false
      },
      {
        immediate: true,
      }
    )

    return {
      n,
      classes,
      buttonProps,
      panel,
      headerEl,
      yearList,
      reverse,
      panelKey,
      panelBtnDisabled,
      nDate,
      checkDate,
      chooseYear,
      forwardRef,
      toNumber,
    }
  },
})
</script>
