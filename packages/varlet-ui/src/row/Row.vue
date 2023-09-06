<template>
  <div
    :class="classes(n(), n('$--box'))"
    :style="{
      justifyContent: padStartFlex(justify),
      alignItems: padStartFlex(align),
      margin: `${-average[0]}px ${-average[1]}px`,
    }"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, type ComputedRef } from 'vue'
import { props } from './props'
import { isArray } from '@varlet/shared'
import { useCols, type RowProvider } from './provide'
import { toPxNum, padStartFlex } from '../utils/elements'
import { call, createNamespace } from '../utils/components'

const { n, classes } = createNamespace('row')

export default defineComponent({
  name: 'VarRow',
  props,
  setup(props) {
    const { cols, bindCols, length } = useCols()
    const average: ComputedRef<number[]> = computed(() =>
      isArray(props.gutter) ? props.gutter.map((numeric) => toPxNum(numeric) / 2) : [0, toPxNum(props.gutter) / 2]
    )

    const computePadding = () => {
      cols.forEach((col) => {
        const [y, x] = average.value
        col.setPadding({ left: x, right: x, top: y, bottom: y })
      })
    }

    const handleClick = (e: Event) => {
      call(props.onClick, e)
    }

    const rowProvider: RowProvider = { computePadding }

    watch(() => length.value, computePadding)
    watch(() => props.gutter, computePadding)

    bindCols(rowProvider)

    return { n, classes, average, handleClick, padStartFlex }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './row';
</style>
