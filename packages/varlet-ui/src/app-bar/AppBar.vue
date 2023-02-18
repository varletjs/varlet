<template>
  <div :class="classes(n(), [round, n('--round')], [elevation, n('$-elevation--3')])" :style="rootStyles">
    <div :class="n('toolbar')">
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

    <slot name="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted, onUpdated, computed, type ComputedRef, type StyleValue } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('app-bar')

export default defineComponent({
  name: 'VarAppBar',
  props,
  setup(props, { slots }) {
    const paddingLeft: Ref<number | undefined> = ref()
    const paddingRight: Ref<number | undefined> = ref()

    const computePadding = () => {
      paddingLeft.value = slots.left ? 0 : undefined
      paddingRight.value = slots.right ? 0 : undefined
    }

    const rootStyles: ComputedRef<StyleValue> = computed(() => {
      const { image, color, textColor, imageLinearGradient } = props

      if (image != null) {
        const gradient = imageLinearGradient ? `linear-gradient(${imageLinearGradient}), ` : ''

        return {
          'background-image': `${gradient}url(${image})`,
          'background-position': 'center center',
          'background-size': 'cover',
        }
      }

      return {
        background: color,
        color: textColor,
      }
    })

    onMounted(computePadding)
    onUpdated(computePadding)

    return {
      n,
      classes,
      rootStyles,
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
