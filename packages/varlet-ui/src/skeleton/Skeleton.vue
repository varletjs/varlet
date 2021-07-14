<template>
  <div class="var--box var-skeleton">
    <div class="var-skeleton__data" v-if="!loading">
      <slot />
    </div>

    <div class="var-skeleton__content" v-if="loading && !fullscreen">
      <div class="var-skeleton__card" :style="{ height: toSizeUnit(cardHeight) }" v-if="card">
        <div class="var-skeleton--animation"></div>
      </div>
      <div class="var-skeleton__article">
        <div
          class="var-skeleton__avatar"
          :style="{
            width: toSizeUnit(avatarSize),
            height: toSizeUnit(avatarSize),
          }"
          v-if="avatar"
        >
          <div class="var-skeleton--animation"></div>
        </div>
        <div class="var-skeleton__section">
          <div class="var-skeleton__title" :style="{ width: toSizeUnit(titleWidth) }" v-if="title">
            <div class="var-skeleton--animation"></div>
          </div>
          <div
            class="var-skeleton__row"
            v-for="(r, index) in toNumber(rows)"
            :key="r"
            :style="{ width: toSizeUnit(rowsWidth[index]) }"
          >
            <div class="var-skeleton--animation"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="var-skeleton__fullscreen" v-if="loading && fullscreen">
      <div class="var-skeleton--animation"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'
import { toNumber } from '../utils/shared'

export default defineComponent({
  name: 'VarSkeleton',
  props,
  setup() {
    return {
      toSizeUnit,
      toNumber,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './skeleton';
</style>
