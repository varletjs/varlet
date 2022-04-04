<template>
  <transition name="var-fade">
    <span :class="classes(n(), 'var--box', ...contentClass)" :style="chipStyles" v-bind="$attrs">
      <slot name="left" />

      <span :class="n(`text-${size}`)">
        <slot />
      </span>

      <slot name="right" />

      <span v-if="closable" :class="n('--close')" @click="onClose">
        <var-icon :name="`${iconName ? iconName : 'close-circle'}`" />
      </span>
    </span>
  </transition>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { defineComponent, computed } from 'vue'
import { props } from './props'
import type { ComputedRef } from 'vue'
import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('chip')

export default defineComponent({
  name: 'VarChip',
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

    const contentClass: ComputedRef<Array<string | false | undefined>> = computed(() => {
      const { size, block, type, plain, round } = props

      const blockClass = block ? 'var--flex' : 'var--inline-flex'
      const plainTypeClass = plain ? `${n('plain')} ${n(`plain-${type}`)}` : n(`--${type}`)
      const roundClass = round && n('--round')

      return [n(`--${size}`), blockClass, plainTypeClass, roundClass]
    })

    return {
      n,
      classes,
      chipStyles,
      contentClass,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './chip';
</style>
