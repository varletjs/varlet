<template>
  <div :class="classes(n(), [hovering, n('--hovering')])"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('hover-overlay')

export default defineComponent({
  name: 'VarHoverOverlay',
  props,
  setup() {
    return {
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import './hoverOverlay';
</style>
