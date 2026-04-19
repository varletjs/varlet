<template>
  <div :class="classes(n(), [hovering, n('--hovering')], [focusing && !inMobile(), n('--focusing')])"></div>
</template>

<script lang="ts">
import { inMobile } from '@varlet/shared'
import { defineComponent } from 'vue'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { name, n, classes } = createNamespace('hover-overlay')

export default defineComponent({
  name,
  props,
  setup: () => ({
    n,
    classes,
    inMobile,
  }),
})
</script>

<style lang="less">
@import '../styles/common';
@import './hoverOverlay';
</style>
