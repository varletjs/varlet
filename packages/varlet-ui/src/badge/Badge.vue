<template>
  <div class="var-badge">
    <transition name="var-badge-fade">
      <span
        v-bind="$attrs"
        v-show="!hidden"
        class="var-badge__content"
        :class="contentClass"
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
import { computed, defineComponent } from 'vue'
import { props } from './props'
import Icon from '../icon'
import { toNumber } from '../utils/shared'
import type { ComputedRef } from 'vue'

export default defineComponent({
  name: 'VarBadge',
  components: {
    [Icon.name]: Icon,
  },
  inheritAttrs: false,
  props,
  setup(props, { slots }) {
    const contentClass: ComputedRef<Array<string | false | undefined>> = computed(() => {
      const { type, position, dot, icon } = props

      const positionBasic = slots.default?.() && `var-badge__position var-badge--${position}`
      const dotClass = dot && 'var-badge__dot'
      const positionClass = getPositionClass()
      const iconClass = icon && 'var-badge__icon'

      return [`var-badge--${type}`, positionBasic, dotClass, positionClass, iconClass]
    })

    const values: ComputedRef<string | number> = computed(() => {
      const { dot, value, maxValue } = props

      if (dot) return ''

      if (value !== undefined && maxValue !== undefined && toNumber(value) > maxValue) return `${maxValue}+`

      return value
    })

    const getPositionClass = (): string | undefined => {
      const { position, dot } = props

      if (dot && position.includes('right')) return 'var-badge__dot--right'

      if (dot && position.includes('left')) return 'var-badge__dot--left'
    }

    return {
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
