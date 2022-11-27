<template>
  <span
    :class="n('--cover-right')"
    :style="{
      animationDuration: `${15 * toNumber(duration)}ms`,
    }"
  />
  <span
    :class="classes(n('--line'), n('--line-long'))"
    :style="{
      animationDuration: `${2.5 * toNumber(duration)}ms`,
    }"
  />
  <span
    :class="classes(n('--line'), n('--line-tip'))"
    :style="{
      animationDuration: `${2.5 * toNumber(duration)}ms`,
    }"
  />
  <span :class="n('--circle')" />
  <span :class="n('--fix')" />
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
