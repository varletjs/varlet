<template>
  <div
    v-ripple="{ disabled: !ripple }"
    v-hover:desktop="handleHovering"
    :class="
      classes(
        n(),
        n('$--box'),
        formatElevation(elevation, 2),
        [onClick || hoverable, n('--cursor')],
        [round, n('--round')],
        [surfaceLow, n('--surface-low')],
        [inline, n('$--inline-flex')],
      )
    "
    :style="{
      width: toSizeUnit(width),
      height: toSizeUnit(height),
      'border-radius': toSizeUnit(radius),
    }"
    @click="handleClick"
  >
    <slot />
    <var-hover-overlay :hovering="hoverable ? hovering : false" />
  </div>
</template>

<script lang="ts">
import { call } from '@varlet/shared'
import { computed, defineComponent } from 'vue'
import Hover from '../hover'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import Ripple from '../ripple'
import { createNamespace, formatElevation } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props } from './props'

const { name, n, classes } = createNamespace('paper')

export default defineComponent({
  name,
  directives: { Ripple, Hover },
  components: {
    VarHoverOverlay,
  },
  props,
  setup(props) {
    const surfaceLow = computed(() => props.surface === 'low')
    const { hovering, handleHovering } = useHoverOverlay()

    function handleClick(e: Event) {
      call(props.onClick, e)
    }

    return {
      n,
      classes,
      formatElevation,
      surfaceLow,
      hovering,
      handleHovering,
      toSizeUnit,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../hover-overlay/hoverOverlay';
@import '../ripple/ripple';
@import './paper';
</style>
