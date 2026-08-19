<template>
  <div
    v-ripple="{ disabled: disabled || normalizedRipple.disabled, color: normalizedRipple.color }"
    v-hover:desktop="handleHovering"
    :class="
      classes(
        n(),
        n('$--box'),
        [variant === 'standard', formatElevation(elevation, 2)],
        [!disabled && (onClick || !normalizedHoverable.disabled), n('--cursor')],
        [disabled, n('--disabled')],
        [!disabled && normalizedActive.enabled, n('--active')],
        [round, n('--round')],
        [surfaceLow, n('--surface-low')],
        [variant === 'outlined', n('--outlined')],
        [variant === 'filled', n('--filled')],
        [inline, n('$--inline-flex')],
      )
    "
    :style="{
      width: toSizeUnit(width),
      height: toSizeUnit(height),
      'border-radius': toSizeUnit(radius),
      '--paper-active-color': normalizedActive.color,
    }"
    @click="handleClick"
  >
    <slot />
    <var-hover-overlay :class="n('active-overlay')" :hovering="!disabled && normalizedActive.enabled" />
    <var-hover-overlay
      :hovering="!disabled && !normalizedHoverable.disabled ? hovering : false"
      :color="normalizedHoverable.color"
    />
  </div>
</template>

<script lang="ts">
import { call, isPlainObject } from '@varlet/shared'
import { computed, defineComponent } from 'vue'
import Hover from '../hover'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import Ripple from '../ripple'
import { createNamespace, formatElevation } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { type PaperActive, type PaperHoverable, type PaperRipple, props } from './props'

const { name, n, classes } = createNamespace('paper')

export default defineComponent({
  name,
  directives: { Ripple, Hover },
  components: {
    VarHoverOverlay,
  },
  props,
  setup(props) {
    const surfaceLow = computed(() => props.surface === 'low' && props.variant !== 'filled')
    const { hovering, handleHovering } = useHoverOverlay()
    const normalizedRipple = computed(() => normalizeRipple(props.ripple))
    const normalizedHoverable = computed(() => normalizeHoverable(props.hoverable))
    const normalizedActive = computed(() => normalizeActive(props.active))

    function normalizeRipple(value: boolean | PaperRipple) {
      if (isPlainObject(value)) {
        return {
          disabled: !!value.disabled,
          color: value.color,
        }
      }

      return {
        disabled: !value,
        color: undefined,
      }
    }

    function normalizeHoverable(value: boolean | PaperHoverable) {
      if (isPlainObject(value)) {
        return {
          disabled: !!value.disabled,
          color: value.color,
        }
      }

      return {
        disabled: !value,
        color: undefined,
      }
    }

    function normalizeActive(value: boolean | PaperActive) {
      if (isPlainObject(value)) {
        return {
          enabled: true,
          color: value.color,
        }
      }

      return {
        enabled: value,
        color: undefined,
      }
    }

    function handleClick(e: Event) {
      if (props.disabled) {
        return
      }

      call(props.onClick, e)
    }

    return {
      n,
      classes,
      formatElevation,
      surfaceLow,
      normalizedRipple,
      normalizedHoverable,
      normalizedActive,
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
