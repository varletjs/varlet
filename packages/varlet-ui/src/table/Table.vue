<template>
  <div :class="classes(n(), 'var-elevation--1 var--box')">
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

const { n, classes } = createNamespace('table')

export default defineComponent({
  name: 'VarTable',
  props: {
    fullWidth: {
      type: [Number, String],
      default: '100%',
    },
  },
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
