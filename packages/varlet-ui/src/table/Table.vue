<template>
  <div :class="classes(n(), formatElevation(elevation, 1), n('$--box'))">
    <div :class="n('main')" :style="{ 'max-height': toSizeUnit(scrollerHeight) }">
      <table :class="n('table')" :style="{ width: toSizeUnit(fullWidth) }">
        <slot />
      </table>
    </div>
    <div v-if="$slots.footer" :class="n('footer')">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace, formatElevation } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props } from './props'

const { name, n, classes } = createNamespace('table')

export default defineComponent({
  name,
  props,
  setup: () => ({
    toSizeUnit,
    n,
    classes,
    formatElevation,
  }),
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './table';
</style>
