<template>
  <div class="var-table var-elevation--1 var--box">
    <div class="var-table__main">
      <table class="var-table__table" :style="{ width: toSizeUnit(fullWidth) }">
        <slot />
      </table>
    </div>
    <div class="var-table__footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { toSizeUnit } from '../utils/elements'

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
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './table';
</style>
