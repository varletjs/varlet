<template>
  <div class="var-site--box var-site-loading">
    <div class="var-site-loading__circle" v-if="type === 'circle'">
      <span
        class="var-site-loading__circle-block"
        :style="{
          width: radius * 2 + 'px',
          height: radius * 2 + 'px',
        }"
      >
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" fill="none"></circle>
        </svg>
      </span>
    </div>

    <template v-for="(nums, key) in loadingTypeDict" :key="key">
      <div :class="`var-site-loading__${key} var-site-loading__${key}-${size}`" v-if="type === key">
        <div
          v-for="num in nums"
          :key="num + key"
          :style="{ backgroundColor: color }"
          :class="`var-site-loading__${key}-item var-site-loading__${key}-item-${size}`"
        ></div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'

export default defineComponent({
  name: 'VarSiteLoading',
  props,
  setup() {
    const loadingTypeDict = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3,
    }

    return {
      loadingTypeDict,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './loading';
</style>
