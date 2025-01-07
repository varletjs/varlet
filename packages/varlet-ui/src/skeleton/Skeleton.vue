<template>
  <div :class="classes(n('$--box'), n())">
    <div v-if="!loading" :class="n('data')">
      <slot />
    </div>

    <div v-if="loading && !fullscreen" :class="n('content')">
      <div v-if="card" :class="n('card')" :style="{ height: toSizeUnit(cardHeight) }">
        <div :class="n('--animation')"></div>
      </div>
      <div v-if="avatar || title || toNumber(rows) > 0" :class="n('article')">
        <div
          v-if="avatar"
          :class="n('avatar')"
          :style="{
            width: toSizeUnit(avatarSize),
            height: toSizeUnit(avatarSize),
          }"
        >
          <div :class="n('--animation')"></div>
        </div>
        <div v-if="title || toNumber(rows) > 0" :class="n('section')">
          <div v-if="title" :class="n('title')" :style="{ width: toSizeUnit(titleWidth) }">
            <div :class="n('--animation')"></div>
          </div>
          <div
            v-for="(r, index) in toNumber(rows)"
            :key="r"
            :class="n('row')"
            :style="{ width: toSizeUnit(rowsWidth[index]) }"
          >
            <div :class="n('--animation')"></div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="loading && fullscreen" :class="n('fullscreen')" :style="{ zIndex: toNumber(fullscreenZIndex) }">
      <div :class="n('--animation')"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { toNumber } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props } from './props'

const { name, n, classes } = createNamespace('skeleton')

export default defineComponent({
  name,
  props,
  setup: () => ({
    n,
    classes,
    toSizeUnit,
    toNumber,
  }),
})
</script>

<style lang="less">
@import '../styles/common';
@import './skeleton';
</style>
