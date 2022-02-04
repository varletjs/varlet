<template>
  <div
    class="var-row var--box"
    :style="{
      justifyContent: justify,
      alignItems: align,
      margin,
    }"
    @click="onClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { props } from './props'
import { useCols } from './provide'
import { toPxNum } from '../utils/elements'
import type { RowProvider } from './provide'

export default defineComponent({
  name: 'VarRow',
  props,
  setup(props) {
    const { cols, bindCols, length } = useCols()
    const margin = ref('0 0')

    const computePadding = () => {
      const gutter: number = toPxNum(props.gutter)
      const average = gutter / 2
      margin.value = `0 -${average}px`

      cols.forEach((col) => {
        col.setPadding({ left: average, right: average })
      })
    }

    const rowProvider: RowProvider = { computePadding }

    watch(() => length.value, computePadding)
    watch(() => props.gutter, computePadding)

    bindCols(rowProvider)

    return { margin }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './row';
</style>
