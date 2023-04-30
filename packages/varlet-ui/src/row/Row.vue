<template>
  <div
    :class="classes(n(), n('$--box'))"
    :style="{
      justifyContent: padStartFlex(justify),
      alignItems: padStartFlex(align),
      margin: average ? `0 -${average}px` : undefined,
    }"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, type ComputedRef } from 'vue'
import { props } from './props'
import { useCols, type RowProvider } from './provide'
import { toPxNum, padStartFlex } from '../utils/elements'
import { call, createNamespace } from '../utils/components'

const { n, classes } = createNamespace('row')

export default defineComponent({
  name: 'VarRow',
  props,
  setup(props) {
    const { cols, bindCols, length } = useCols()
    const average: ComputedRef<number> = computed(() => {
      const gutter: number = toPxNum(props.gutter)
      return gutter / 2
    })

    const computePadding = () => {
      cols.forEach((col) => {
        col.setPadding({ left: average.value, right: average.value })
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
