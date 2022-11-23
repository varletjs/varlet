<template>
  <div :class="classes(n('$--box'), n())">
    <div :class="n('data')" v-if="!loading">
      <slot />
    </div>

    <div :class="n('content')" v-if="loading && !fullscreen">
      <div :class="n('card')" :style="{ height: toSizeUnit(cardHeight) }" v-if="card">
        <div :class="n('--animation')"></div>
      </div>
      <div :class="n('article')" v-if="avatar || title || toNumber(rows) > 0">
        <div
          :class="n('avatar')"
          :style="{
            width: toSizeUnit(avatarSize),
            height: toSizeUnit(avatarSize),
          }"
          v-if="avatar"
        >
          <div :class="n('--animation')"></div>
        </div>
        <div :class="n('section')" v-if="title || toNumber(rows) > 0">
          <div :class="n('title')" :style="{ width: toSizeUnit(titleWidth) }" v-if="title">
            <div :class="n('--animation')"></div>
          </div>
          <div
            :class="n('row')"
            v-for="(r, index) in toNumber(rows)"
            :key="r"
            :style="{ width: toSizeUnit(rowsWidth[index]) }"
          >
            <div :class="n('--animation')"></div>
          </div>
        </div>
      </div>
    </div>

    <div :class="n('fullscreen')" :style="{ zIndex: toNumber(fullscreenZIndex) }" v-if="loading && fullscreen">
      <div :class="n('--animation')"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'
import { toNumber } from '@varlet/shared'
import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('skeleton')

export default defineComponent({
  name: 'VarSkeleton',
  props,
  setup() {
    return {
      n,
      classes,
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
