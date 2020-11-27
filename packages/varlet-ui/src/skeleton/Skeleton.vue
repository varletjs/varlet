<template>
  <div class="varlet-skeleton">
    <div
      class="varlet-skeleton__data"
      v-if="!loading"
    >
      <slot/>
    </div>

    <div
      class="varlet-skeleton__content"
      v-if="loading"
    >
      <div
        class="varlet-skeleton__card"
        v-if="card"
        :style="{ height: cardHeight }"
      >
        <div class="varlet-skeleton--animation"></div>
      </div>
      <div class="varlet-skeleton__article">
        <div
          class="varlet-skeleton__avatar"
          v-if="avatar"
        >
          <div class="varlet-skeleton--animation"></div>
        </div>
        <div class="varlet-skeleton__section">
          <div
            class="varlet-skeleton__title"
            :style="{ width: titleWidth }"
            v-if="title"
          >
            <div class="varlet-skeleton--animation"></div>
          </div>
          <div
            class="varlet-skeleton__row"
            v-for="(r, index) in row"
            :key="r"
            :style="{ width: rowWidth[index] }"
          >
            <div class="varlet-skeleton--animation"></div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="varlet-skeleton__fullscreen"
      v-if="loading && fullscreen"
    >
      <div class="varlet-skeleton--animation"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VarletSkeleton',
  props: {
    // 加载状态
    loading: {
      type: Boolean,
      default: true
    },
    // 段落行数
    row: {
      type: Number,
      default: 0
    },
    rowWidth: {
      type: Array,
      default: () => []
    },
    // 是否全屏
    fullscreen: {
      type: Boolean,
      default: false
    },
    // 是否显示标题
    title: {
      type: Boolean,
      default: false
    },
    // 标题宽度
    titleWidth: {
      type: String,
    },
    // 是否显示卡片
    card: {
      type: Boolean,
      default: false
    },
    // 卡片高度
    cardHeight: {
      type: String,
    },
    // 是否显示头像
    avatar: {
      type: Boolean,
      default: false
    },
    // 头像大小
    avatarSize: {
      type: String,
    }
  }
})
</script>

<style lang="less">
@import "./skeleton";
</style>
