<template>
  <div :class="n()">
    <div v-if="$slots.default" :class="classes(n('content'), [loading, n('content--active')])">
      <slot />
      <div v-if="loading" :class="n('content-mask')"></div>
    </div>
    <div v-if="isShow" :class="classes(n('$--box'), n('body'), [$slots.default, n('inside')])">
      <div v-if="type === 'circle'" :class="n('circle')">
        <span
          :class="classes(n('circle-block'), n(`circle-block--${size}`))"
          :style="{
            width: multiplySizeUnit(radius, 2),
            height: multiplySizeUnit(radius, 2),
            color,
          }"
        >
          <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none"></circle>
          </svg>
        </span>
      </div>

      <template v-for="(nums, key) in loadingTypeDict" :key="key">
        <div v-if="type === key" :class="classes(n(key), n(`${key}--${size}`))">
          <div
            v-for="num in nums"
            :key="num + key"
            :style="{ backgroundColor: color }"
            :class="classes(n(`${key}-item`), n(`${key}-item--${size}`))"
          ></div>
        </div>
      </template>
      <div
        v-if="$slots.description || description"
        :class="classes(n('description'), n(`description--${size}`))"
        :style="{ color }"
      >
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { call } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { multiplySizeUnit } from '../utils/elements'
import { props } from './props'

const { name, n, classes } = createNamespace('loading')

export default defineComponent({
  name,
  props,
  setup(props, { slots }) {
    const isShow = computed(() => {
      if (!call(slots.default)) {
        return true
      }

      return props.loading
    })

    const loadingTypeDict = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3,
    }

    return {
      loadingTypeDict,
      isShow,
      n,
      classes,
      multiplySizeUnit,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './loading';
</style>
