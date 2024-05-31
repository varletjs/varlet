<template>
  <div
    :class="
      classes(
        n(),
        n('$--box'),
        [safeAreaTop, n('--safe-area-top')],
        [round, n('--round')],
        [fixed, n('--fixed')],
        formatElevation(elevation, 3)
      )
    "
    ref="appBarDom"
    :style="rootStyles"
    v-bind="$attrs"
  >
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

  <div v-if="fixed && placeholder" :class="n('placeholder')" :style="{ height: placeholderHeight }" />
</template>

<script lang="ts">
import { defineComponent, ref, onUpdated, computed, CSSProperties } from 'vue'
import { props } from './props'
import { createNamespace, formatElevation } from '../utils/components'
import { onSmartMounted, onWindowResize } from '@varlet/use'
import { getRect } from '@varlet/shared'

const { name, n, classes } = createNamespace('app-bar')

export default defineComponent({
  name,
  props,
  setup(props, { slots }) {
    const appBarDom = ref<HTMLElement | null>(null)
    const paddingLeft = ref<number | undefined>()
    const paddingRight = ref<number | undefined>()
    const placeholderHeight = ref()
    const rootStyles = computed<CSSProperties>(() => {
      const { image, color, textColor, imageLinearGradient, zIndex } = props

      if (image != null) {
        const gradient = imageLinearGradient ? `linear-gradient(${imageLinearGradient}), ` : ''

        return {
          'background-image': `${gradient}url(${image})`,
          'background-position': 'center center',
          'background-size': 'cover',
          'z-index': zIndex,
        }
      }

      return {
        background: color,
        color: textColor,
        'z-index': zIndex,
      }
    })

    onWindowResize(resizePlaceholder)

    onSmartMounted(() => {
      computePadding()
      resizePlaceholder()
    })

    onUpdated(computePadding)

    function computePadding() {
      paddingLeft.value = slots.left ? 0 : undefined
      paddingRight.value = slots.right ? 0 : undefined
    }

    function resizePlaceholder() {
      if (!props.fixed || !props.placeholder) {
        return
      }

      const { height } = getRect(appBarDom.value!)
      placeholderHeight.value = `${height}px`
    }

    return {
      rootStyles,
      paddingLeft,
      paddingRight,
      n,
      classes,
      formatElevation,
      appBarDom,
      placeholderHeight,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './appBar';
</style>
