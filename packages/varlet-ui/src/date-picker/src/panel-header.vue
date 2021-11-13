<template>
  <div class="var-picker-header">
    <var-button round text :text-color="computedLeftTextColor" :disabled="disabled.left" @click="checkDate('prev')">
      <var-icon name="chevron-left" />
    </var-button>
    <div class="var-picker-header__value" @click="$emit('check-panel')">
      <transition :name="reverse ? 'var-date-picker-reverse-translatex' : 'var-date-picker-translatex'">
        <div :key="showDate">{{ showDate }}</div>
      </transition>
    </div>
    <var-button round text :text-color="computedRightTextColor" :disabled="disabled.right" @click="checkDate('next')">
      <var-icon name="chevron-right" />
    </var-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import VarButton from '../../button'
import VarIcon from '../../icon'
import { toNumber } from '../../utils/shared'
import { pack } from '../../locale'
import { watchDarkMode } from '../../utils/components'
import type { Ref, ComputedRef, PropType } from 'vue'
import type { Preview, PanelBtnDisabled } from '../props'

export default defineComponent({
  name: 'PanelHeader',
  components: {
    VarButton,
    VarIcon,
  },
  props: {
    date: {
      type: Object as PropType<Preview>,
      required: true,
    },
    type: {
      type: String,
      default: 'date',
    },
    disabled: {
      type: Object as PropType<PanelBtnDisabled>,
      required: true,
    },
  },
  emits: ['check-panel', 'check-date'],

  setup(props, { emit }) {
    const reverse: Ref<boolean> = ref(false)
    const forwardOrBackNum: Ref<number> = ref(0)

    const showDate: ComputedRef<number | string> = computed(() => {
      const { date, type } = props
      const { previewMonth, previewYear }: Preview = date

      if (type === 'month') return toNumber(previewYear) + forwardOrBackNum.value

      const monthName = pack.value.datePickerMonthDict[previewMonth.index].name
      return pack.value.lang === 'zh-CN' ? `${previewYear} ${monthName}` : `${monthName} ${previewYear}`
    })

    const checkDate = (checkType: string) => {
      emit('check-date', checkType)
      reverse.value = checkType === 'prev'
      forwardOrBackNum.value += checkType === 'prev' ? -1 : 1
    }

    watch(
      () => props.date,
      () => {
        forwardOrBackNum.value = 0
      }
    )
    const isDarkTheme = ref(false)
    watchDarkMode((themes) => {
      isDarkTheme.value = themes === 'darkThemes'
    })
    const computedLeftTextColor = () => {
      return props.disabled.left ? '' : isDarkTheme.value ? '' : 'rgba(0, 0, 0, .54)'
    }
    const computedRightTextColor = () => {
      return props.disabled.left ? '' : isDarkTheme.value ? '' : 'rgba(0, 0, 0, .54)'
    }
    return {
      reverse,
      showDate,
      checkDate,
      computedLeftTextColor,
      computedRightTextColor,
    }
  },
})
</script>
