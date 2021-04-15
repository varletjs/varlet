<template>
  <div class="var-badge">
    <transition name="var-badge-fade">
      <span
        v-bind="$attrs"
        v-show="!hidden"
        class="var-badge__content"
        :class="[contentClass, { 'var-badge__icon': icon }]"
        :style="{ background: color }"
      >
        <var-icon v-if="icon" :name="icon" size="10px" />
        <span v-else>{{ values }}</span>
      </span>
    </transition>
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'
import { props } from './props'
import Icon from '../icon'
import { toNumber } from '../utils/shared'

export default defineComponent({
  name: 'VarBadge',
  components: {
    [Icon.name]: Icon,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const contentClass: ComputedRef<Array<string | false | undefined>> = computed(() => {
      const { type, position, dot } = props

      const positionBasic = position && `var-badge__position var-badge--${position}`
      const dotClass = dot && 'var-badge__dot'
      const positionClass = getPositionClass()

      return [`var-badge--${type}`, positionBasic, dotClass, positionClass]
    })

    const values: ComputedRef<string | number> = computed(() => {
      const { dot, value, maxValue } = props

      if (dot) return ''

      if (value !== undefined && maxValue !== undefined && toNumber(value) > maxValue) return `${maxValue}+`

      return value
    })

    const getPositionClass = (): string => {
      const { position, dot } = props

      if (!position || !dot) return ''

      if (position.includes('right')) return 'var-badge__dot--right'

      if (position.includes('left')) return 'var-badge__dot--left'

      return ''
    }

    return {
      values,
      contentClass,
    }
  },
})
</script>

<style lang="less">
@import '../icon/icon';
@import './badge';
</style>
