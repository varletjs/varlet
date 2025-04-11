<template>
  <div :class="n()">
    <div v-if="title || $slots['title']" :class="n('title')">
      <slot name="title">{{ title }}</slot>
    </div>
    <div v-if="description || $slots['default']" :class="n('description')">
      <slot>{{ description }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { injectTour } from '../tour/provide'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { name, n, classes } = createNamespace('tour-step')

export default defineComponent({
  name,
  props,
  setup(props) {
    const { updateStepProps } = injectTour()

    watch(
      props,
      (value) => {
        updateStepProps?.(value)
      },
      { immediate: true },
    )

    return {
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './tourStep';
</style>
