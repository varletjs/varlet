<template>
  <div :class="classes(n(), n('$--box'))">
    <slot />

    <transition :name="n('$-badge-fade')">
      <span
        :class="
          classes(
            n('content'),
            n(`--${type}`),
            [$slots.default, n(`--${position}`), n('--offset')],
            [dot, n('--dot')],
            [icon, n('--icon')]
          )
        "
        :style="{ background: color, ...offsetStyle }"
        v-show="!hidden"
        v-bind="$attrs"
      >
        <var-icon :class="n('icon')" var-badge-cover :name="icon" :namespace="namespace" v-if="icon" />

        <slot name="value">
          <span v-if="!icon && !dot">{{ value }}</span>
        </slot>
      </span>
    </transition>
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { toNumber } from '@varlet/shared'
import { computed, defineComponent, type CSSProperties } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'

const { name, n, classes } = createNamespace('badge')

export default defineComponent({
  name,
  components: { VarIcon },
  inheritAttrs: false,
  props,
  setup(props) {
    const value = computed<string | number>(() => {
      const { value, maxValue } = props

      return value != null && maxValue != null && toNumber(value) > toNumber(maxValue) ? `${maxValue}+` : value
    })

    const offsetStyle = computed<CSSProperties>(() => ({
      [`--badge-offset-y`]: toSizeUnit(props.offsetY),
      [`--badge-offset-x`]: toSizeUnit(props.offsetX),
    }))

    return {
      value,
      offsetStyle,
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './badge';
</style>
