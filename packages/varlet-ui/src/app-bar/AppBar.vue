<template>
  <div
    :class="classes(n(), elevation && n('', '', 3))"
    :style="{
      background: color,
      color: textColor,
    }"
  >
    <div :class="n('left')">
      <slot name="left" />
      <div :class="n('title')" :style="{ paddingLeft }" v-if="titlePosition === 'left'">
        <slot>{{ title }}</slot>
      </div>
    </div>

    <div :class="n('title')" v-if="titlePosition === 'center'">
      <slot>{{ title }}</slot>
    </div>

    <div :class="n('right')">
      <div :class="n('title')" :style="{ paddingRight }" v-if="titlePosition === 'right'">
        <slot>{{ title }}</slot>
      </div>
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUpdated } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import type { Ref } from 'vue'

export default defineComponent({
  name: 'VarAppBar',
  props,
  setup(props, { slots }) {
    const { n, classes } = createNamespace('app-bar')

    const paddingLeft: Ref<number | undefined> = ref()
    const paddingRight: Ref<number | undefined> = ref()

    const computePadding = () => {
      paddingLeft.value = slots.left ? 0 : undefined
      paddingRight.value = slots.right ? 0 : undefined
    }

    onMounted(computePadding)
    onUpdated(computePadding)

    return {
      n,
      classes,
      paddingLeft,
      paddingRight,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './appBar';
</style>
