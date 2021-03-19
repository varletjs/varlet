<template>
  <div class="var-badge">
    <transition name="var-fade">
      <span
        v-bind="$attrs"
        v-show="!hidden"
        :class="[
          'var-badge__content',
          `var-badge--${type}`,
          position ? `var-badge--${position} var-badge--position` : null,
          dotPosition(),
          { 'var-badge--dot': dot },
        ]"
        :style="{ background: color }"
      >
        <var-icon v-if="icon" :name="icon"></var-icon>

        <span v-else>{{ values() }}</span>
      </span>
    </transition>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'
import Icon from '../icon'

export default defineComponent({
  name: 'VarBadge',
  components: {
    [Icon.name]: Icon,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const values = () => {
      if (props.dot) {
        return null
      }
      if (typeof props.value === 'number' && props.maxValue) {
        return props.value > props.maxValue ? `${props.maxValue}+` : props.value
      }
      return props.value
    }

    const dotPosition = () => {
      if (props.position && props.dot) {
        return props.position.indexOf('right') !== -1
          ? 'var-badge--dot-right'
          : props.position.indexOf('left') !== -1
          ? 'var-badge--dot-left'
          : null
      }
    }

    return {
      values,
      dotPosition,
    }
  },
})
</script>

<style lang="less">
@import './badge';
</style>
