<template>
  <span
    :class="n('--cover-left')"
    :style="{
      animationDuration: `${14 * duration}ms`,
    }"
  />
  <span
    :class="classes(n('--line'), n('--line-tip'))"
    :style="{
      animationDuration: `${2.5 * duration}ms`,
      borderRadius: `calc(${borderSize} * 0.625)`,
    }"
  />
  <span
    :class="classes(n('--line'), n('--line-long'))"
    :style="{
      animationDuration: `${2.5 * duration}ms`,
      borderRadius: `calc(${borderSize} * 0.625)`,
    }"
  />
  <span
    ref="circle"
    :class="n('--circle')"
    :style="{ left: `-${borderSize}`, top: `-${borderSize}`, borderWidth: borderSize }"
  />
  <span :class="n('--line-fix')" />
  <span
    :class="n('--cover-right')"
    :style="{
      animationDuration: `${14 * duration}ms`,
    }"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace } from '../utils/components'
import { toNumber } from '@varlet/shared'

const { n, classes } = createNamespace('result__success')

export default defineComponent({
  props: {
    duration: {
      type: Number,
    },
    borderSize: {
      type: String,
    },
  },
  setup() {
    return {
      n,
      classes,
      toNumber,
    }
  },
})
</script>

<style lang="less">
@import './result.less';
</style>
