<template>
  <transition :name="n('$-fade')">
    <span :class="classes(n(), n('$--box'), ...contentClass)" :style="chipStyles" v-bind="$attrs">
      <slot name="left" />

      <span :class="n(`text-${size}`)">
        <slot />
      </span>

      <slot name="right" />

      <span v-if="closeable || closable" :class="n('--close')" @click="handleClose">
        <var-icon :name="`${iconName ? iconName : 'close-circle'}`" :namespace="namespace" />
      </span>
    </span>
  </transition>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { defineComponent, computed } from 'vue'
import { props } from './props'
import { call, createNamespace } from '../utils/components'

const { name, n, classes } = createNamespace('chip')

export default defineComponent({
  name,
  components: {
    VarIcon,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const chipStyles = computed(() => {
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
    const contentClass = computed(() => {
      const { size, block, type, plain, round } = props

      const blockClass = block ? n('$--flex') : n('$--inline-flex')
      const plainTypeClass = plain ? `${n('plain')} ${n(`plain-${type}`)}` : n(`--${type}`)
      const roundClass = round ? n('--round') : null

      return [n(`--${size}`), blockClass, plainTypeClass, roundClass]
    })

    function handleClose(e: Event) {
      call(props.onClose, e)
    }

    return {
      chipStyles,
      contentClass,
      n,
      classes,
      handleClose,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './chip';
</style>
