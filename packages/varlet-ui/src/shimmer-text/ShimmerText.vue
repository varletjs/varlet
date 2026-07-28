<template>
  <span :class="classes(n(), n(`--${type}`))">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { name, n, classes } = createNamespace('shimmer-text')

export default defineComponent({
  name,
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
@import '../styles/common';
@import './shimmerText';
</style>
