<template>
  <div :class="n()">
    <div :class="classes(n('content'), [loading, n('content--active')])" v-if="$slots.default">
      <slot />
    </div>
    <div :class="classes('var--box', n('body'), [$slots.default, n('inside')])" v-if="isShow">
      <div :class="n('circle')" v-if="type === 'circle'">
        <span
          :class="n('circle-block')"
          :style="{
            width: getRadius * 2 + 'px',
            height: getRadius * 2 + 'px',
            color,
          }"
        >
          <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none"></circle>
          </svg>
        </span>
      </div>

      <template v-for="(nums, key) in loadingTypeDict" :key="key">
        <div :class="classes(n(key), n(`${key}--${size}`))" v-if="type === key">
          <div
            v-for="num in nums"
            :key="num + key"
            :style="{ backgroundColor: color }"
            :class="classes(n(`${key}-item`), n(`${key}-item--${size}`))"
          ></div>
        </div>
      </template>
      <div
        :class="classes(n('description'), n(`description--${size}`))"
        :style="{ color }"
        v-if="$slots.description || description"
      >
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { props } from './props'
import { toNumber } from '../utils/shared'
import type { ComputedRef } from 'vue'
import { createNamespace, call } from '../utils/components'

const { n, classes } = createNamespace('loading')

export default defineComponent({
  name: 'VarLoading',
  props,
  setup(props, { slots }) {
    const loadingTypeDict = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3,
    }

    const sizeDict = {
      mini: 9,
      small: 12,
      normal: 15,
      large: 18,
    }

    const getRadius: ComputedRef<number> = computed(() => {
      return props.radius ? toNumber(props.radius) : sizeDict[props.size]
    })

    const isShow: ComputedRef<boolean> = computed(() => {
      if (!call(slots.default)) return true

      return props.loading
    })

    return {
      n,
      classes,
      loadingTypeDict,
      getRadius,
      isShow,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './loading';
</style>
