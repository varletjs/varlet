<template>
  <div :class="n()" :style="{ margin: `-${gutter / 2}px` }">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { GridProvider, useGridItem } from './provide'
import { toPxNum } from '../utils/elements'
import { toNumber } from '@varlet/shared'

const { n } = createNamespace('grid')

export default defineComponent({
  name: 'VarGrid',
  props,
  setup(props) {
    const { bindItem } = useGridItem()

    const gutter = computed(() => toPxNum(props.gutter))

    const gridProvider: GridProvider = {
      iconSize: computed(() => props.iconSize || 24),
      center: computed(() => props.center),
      gutter,
      border: computed(() => props.border),
      column: computed(() => toNumber(props.column) || 4),
      square: computed(() => props.square),
      ripple: computed(() => props.ripple),
      direction: computed(() => props.direction),
      elevation: computed(() => toNumber(props.elevation) || 0),
    }
    bindItem(gridProvider)
    return {
      n,
      gutter,
    }
  },
})
</script>

<style lang="less">
@import './grid';
</style>
