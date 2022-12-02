<template>
  <span
    :class="n('success-cover-left')"
    :style="{
      animationDuration: animation ? `${14 * duration}ms` : '0ms',
    }"
  />
  <span
    :class="classes(n('success-line'), n('success-line-tip'))"
    :style="{
      animationDuration: animation ? `${2.5 * duration}ms` : '0ms',
      borderRadius: `calc(${borderSize} * 0.625)`,
    }"
  />
  <span
    :class="classes(n('success-line'), n('success-line-long'))"
    :style="{
      animationDuration: animation ? `${2.5 * duration}ms` : '0ms',
      borderRadius: `calc(${borderSize} * 0.625)`,
    }"
  />
  <span
    ref="circle"
    :class="n('success-circle')"
    :style="{ left: `-${borderSize}`, top: `-${borderSize}`, borderWidth: borderSize }"
  />
  <span :class="n('success-line-fix')" />
  <span
    :class="n('success-cover-right')"
    :style="{
      animationDuration: animation ? `${14 * duration}ms` : '0ms',
    }"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace } from '../utils/components'
import { toNumber } from '@varlet/shared'

const { n, classes } = createNamespace('result')

export default defineComponent({
  props: {
    duration: {
      type: Number,
    },
    animation: {
      type: Boolean,
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
