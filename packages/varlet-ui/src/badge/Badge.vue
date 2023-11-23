<template>
  <div :class="classes(n(), n('$--box'))">
    <slot />

    <transition :name="n('$-badge-fade')">
      <span
        :class="
          classes(
            n('content'),
            n(`--${type}`),
            [$slots.default, n(`--${position}`)],
            [dot, n('--dot')],
            [icon, n('--icon')]
          )
        "
        :style="{ background: color, ...contentStyle }"
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
import { bigCamelize, toNumber } from '@varlet/shared'
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
  setup(props, { slots }) {
    const value = computed<string | number>(() => {
      const { value, maxValue } = props

      return value != null && maxValue != null && toNumber(value) > toNumber(maxValue) ? `${maxValue}+` : value
    })

    const contentStyle = computed<CSSProperties>(() => {
      const { position, offsetX, offsetY } = props

      const [positionX, positionY] = position.split('-') as ['left' | 'right', 'top' | 'bottom']

      if (!slots.default) {
        return {
          marginTop: toSizeUnit(offsetY),
          marginLeft: toSizeUnit(offsetX),
        }
      }

      return {
        [`margin${bigCamelize(positionY)}`]: toSizeUnit(positionY === 'top' ? offsetY : -offsetY),
        [`margin${bigCamelize(positionX)}`]: toSizeUnit(positionX === 'left' ? offsetX : -offsetX),
      }
    })

    return {
      value,
      contentStyle,
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
