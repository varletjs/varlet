<template>
  <div v-if="show" :class="n()">
    <div v-if="title || $slots['title']" :class="n('title')">
      <slot name="title">{{ title }}</slot>
    </div>
    <div v-if="message || $slots['default']" :class="n('message')">
      <slot>{{ message }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { call } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { useTour } from './provide'

const { name, n } = createNamespace('tour-step')

export default defineComponent({
  name,
  props,
  setup(props) {
    const { index, tour, bindTour } = useTour()
    const show = computed(() => tour?.current.value === index?.value)

    call(bindTour, props)

    return {
      n,
      show,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './tourStep';
</style>
