<template>
  <div class="var-picker-header">
    <var-button
      round
      plain
      :text-color="disabled.left ? '' : 'rgba(0, 0, 0, .54)'"
      :disabled="disabled.left"
      @click="checkDate('prev')"
    >
      <var-icon name="chevron-left" />
    </var-button>
    <div class="var-picker-header__value" @click="$emit('check-panel')">
      <transition :name="reverse ? 'var-date-picker-reverse-translatex' : 'var-date-picker-translatex'">
        <div :key="showDate">{{ showDate }}</div>
      </transition>
    </div>
    <var-button
      round
      plain
      :text-color="disabled.right ? '' : 'rgba(0, 0, 0, .54)'"
      :disabled="disabled.right"
      @click="checkDate('next')"
    >
      <var-icon name="chevron-right" />
    </var-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, computed, ComputedRef, watch, PropType } from 'vue'
import Button from '../../button'
import Icon from '../../icon'
import { Preview, PanelBtnDisabled } from '../props'

export default defineComponent({
  name: 'PanelHeader',
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
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
  setup(props, { emit }) {
    const reverse: Ref<boolean> = ref(false)
    const forwardOrBackNum: Ref<number> = ref(0)

    const showDate: ComputedRef<number | string> = computed(() => {
      const { date, type } = props
      const { previewMonth, previewYear }: Preview = date
      if (type === 'month') return +previewYear + forwardOrBackNum.value
      return `${previewMonth.name} ${previewYear}`
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

    return {
      reverse,
      showDate,
      checkDate,
    }
  },
})
</script>
