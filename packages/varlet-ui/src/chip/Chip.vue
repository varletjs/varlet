<template>
  <transition :name="n('$-fade')">
    <!-- eslint-disable-next-line vue/require-toggle-inside-transition -->
    <span
      :class="classes(n(), n('$--box'), formatElevation(elevation, 1), ...contentClass)"
      :style="chipStyle"
      v-bind="$attrs"
    >
      <slot name="left" />

      <span :class="n(`text-${size}`)">
        <slot />
      </span>

      <slot name="right" />

      <span v-if="closeable" :class="n('--close')" @click="handleClose">
        <slot name="icon">
          <var-icon :name="closeIconName" :namespace="namespace" />
        </slot>
      </span>
    </span>
  </transition>
</template>

<script lang="ts">
import { call } from '@varlet/shared'
import { computed, CSSProperties, defineComponent } from 'vue'
import VarIcon from '../icon'
import { createNamespace, formatElevation } from '../utils/components'
import { props } from './props'

const { name, n, classes } = createNamespace('chip')

export default defineComponent({
  name,
  components: {
    VarIcon,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const chipStyle = computed<CSSProperties>(() => {
      const { plain, textColor, color } = props

      if (plain) {
        return {
          color: textColor || color,
          borderColor: color,
        }
      }

      return {
        color: textColor,
        background: color,
      }
    })
    const contentClass = computed<(string | null)[]>(() => {
      const { size, block, type, plain, round } = props

      const blockClass = block ? n('$--flex') : n('$--inline-flex')
      const plainTypeClass = plain ? `${n('plain')} ${n(`plain-${type}`)}` : n(`--${type}`)
      const roundClass = round ? n('--round') : null

      return [n(`--${size}`), blockClass, plainTypeClass, roundClass]
    })
    const closeIconName = computed(() => props.icon ?? props.iconName ?? 'close-circle')

    function handleClose(e: Event) {
      call(props.onClose, e)
    }

    return {
      chipStyle,
      contentClass,
      closeIconName,
      n,
      classes,
      formatElevation,
      handleClose,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../icon/icon';
@import './chip';
</style>
