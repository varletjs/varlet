<template>
  <div
    :class="classes(n(), 'var--box')"
    :style="{
      justifyContent: justify,
      alignItems: align,
      margin: average ? `0 -${average}px` : undefined,
    }"
    @click="onClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import { props } from './props'
import { useCols } from './provide'
import { toPxNum } from '../utils/elements'
import type { ComputedRef } from 'vue'
import type { RowProvider } from './provide'
import { createNamespace } from '../utils/components'

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

    const rowProvider: RowProvider = { computePadding }

    watch(() => length.value, computePadding)
    watch(() => props.gutter, computePadding)

    bindCols(rowProvider)

    return { n, classes, average }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './row';
</style>
