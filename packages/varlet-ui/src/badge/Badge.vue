<template>
  <div :class="classes(n(), n('$--box'))">
    <transition :name="n('$-badge-fade')">
      <span
        v-bind="$attrs"
        v-show="!hidden"
        :class="classes(n('content'), ...contentClass)"
        :style="{ background: color }"
      >
        <var-icon v-if="icon && !dot" :name="icon" size="10px" />
        <span v-else>{{ values }}</span>
      </span>
    </transition>
    <slot />
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { toNumber } from '@varlet/shared'
import { computed, defineComponent } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import type { ComputedRef } from 'vue'

const { n, classes } = createNamespace('badge')

export default defineComponent({
  name: 'VarBadge',
  components: { VarIcon },
  inheritAttrs: false,
  props,
  setup(props, { slots }) {
    const contentClass: ComputedRef<Array<string | null | undefined>> = computed(() => {
      const { type, position, dot, icon } = props

      const positionBasic = slots.default && `${n('position')} ${n(`--${position}`)}`
      const dotClass = dot ? n('dot') : null
      const positionClass = getPositionClass()
      const iconClass = icon ? n('icon') : null

      return [n(`--${type}`), positionBasic, dotClass, positionClass, iconClass]
    })

    const values: ComputedRef<string | number> = computed(() => {
      const { dot, value, maxValue } = props

      if (dot) return ''

      if (value !== undefined && maxValue !== undefined && toNumber(value) > maxValue) return `${maxValue}+`

      return value
    })

    const getPositionClass = (): string | undefined => {
      const { position, dot } = props

      if (dot && position.includes('right')) return n('dot--right')

      if (dot && position.includes('left')) return n('dot--left')
    }

    return {
      n,
      classes,
      values,
      contentClass,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './badge';
</style>
