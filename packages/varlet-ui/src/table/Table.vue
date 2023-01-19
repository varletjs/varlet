<template>
  <div :class="classes(n(), n('$-elevation--1'), n('$--box'))">
    <div :class="n('main')">
      <table :class="n('table')" :style="{ width: toSizeUnit(fullWidth) }">
        <slot />
      </table>
    </div>
    <div :class="n('footer')" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { toSizeUnit } from '../utils/elements'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { n, classes } = createNamespace('table')

export default defineComponent({
  name: 'VarTable',
  props,
  setup() {
    return {
      toSizeUnit,
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './table';
</style>
