<template>
  <div
    class="var-row var--box"
    :style="{
      justifyContent: justify,
      alignItems: align
    }"
    @click="onClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { props } from './props'
import { useCols } from './provide'
import { toPxNum } from '../utils/elements'
import type { ColProvider } from '../col/provide'
import type { RowProvider } from './provide'

export default defineComponent({
  name: 'VarRow',
  props,
  setup(props) {
    const { cols, bindCols, length } = useCols()

    const computeGroups = () => {
      const groups: ColProvider[][] = [[]]
      let span = 0

      cols.forEach((col) => {
        const colSpan = col.span.value + col.offset.value
        const nextSpan = span + colSpan

        if (nextSpan > 24) {
          groups.push([col])
          span = colSpan
        } else {
          groups[groups.length - 1].push(col)
          span += colSpan
        }
      })

      return groups
    }

    const computePadding = () => {
      const groups = computeGroups()
      const gutter: number = toPxNum(props.gutter)
      const average = gutter / 2

      groups.forEach((cols) => {
        cols.forEach((col, index) => {
          if (cols.length <= 1) {
            return
          }
          if (index === 0) {
            col.setPadding({ left: 0, right: average })
          }
          if (index === cols.length - 1) {
            col.setPadding({ left: average, right: 0 })
          }
          if (index > 0 && index < cols.length - 1) {
            col.setPadding({ left: average, right: average })
          }
        })
      })
    }

    const rowProvider: RowProvider = { computePadding }

    watch(() => length.value, computePadding)
    watch(() => props.gutter, computePadding)

    bindCols(rowProvider)
  }
})
</script>

<style lang="less">
@import "./row";
</style>
