<template>
  <span
    :class="n('--cover-left')"
    :style="{
      animationDuration: `${14 * toNumber(duration)}ms`,
    }"
  />
  <span
    :class="classes(n('--line'), n('--line-long'))"
    :style="{
      animationDuration: `${2.5 * toNumber(duration)}ms`,
      borderRadius: `${borderSize * 0.625}px`,
    }"
  />
  <span
    :class="classes(n('--line'), n('--line-tip'))"
    :style="{
      animationDuration: `${2.5 * toNumber(duration)}ms`,
      borderRadius: `${borderSize * 0.625}px`,
    }"
  />
  <span
    ref="circle"
    :class="n('--circle')"
    :style="{ left: `-${borderSize}px`, top: `-${borderSize}px`, borderWidth: `${borderSize}px` }"
  />
  <span :class="n('--fix')" />
  <span
    :class="n('--cover-right')"
    :style="{
      animationDuration: `${14 * toNumber(duration)}ms`,
    }"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace } from '../utils/components'
import { toNumber } from '@varlet/shared'

const { n, classes } = createNamespace('result__image--success')

export default defineComponent({
  props: {
    duration: {
      type: [Number, String],
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
@import 'result.less';
</style>
