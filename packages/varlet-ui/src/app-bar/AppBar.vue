<template>
  <div
    class="var-app-bar"
    :class="{ 'var-elevation--3': elevation }"
    :style="{
      background: color,
      color: textColor,
    }"
  >
    <div class="var-app-bar__left">
      <slot name="left" />
      <div
        class="var-app-bar__title"
        :style="{ paddingLeft: $slots.left ? 0 : undefined }"
        v-if="titlePosition === 'left'"
      >
        <slot>{{ title }}</slot>
      </div>
    </div>

    <div class="var-app-bar__title" v-if="titlePosition === 'center'">
      <slot>{{ title }}</slot>
    </div>

    <div class="var-app-bar__right">
      <div
        class="var-app-bar__title"
        :style="{ paddingRight: $slots.right ? 0 : undefined }"
        v-if="titlePosition === 'right'"
      >
        <slot>{{ title }}</slot>
      </div>
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'

export default defineComponent({
  name: 'VarAppBar',
  props,
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './appBar';
</style>
