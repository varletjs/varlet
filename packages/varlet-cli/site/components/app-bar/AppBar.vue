<template>
  <div
    class="var-site-app-bar"
    :class="{ 'var-site-elevation--3': elevation }"
    :style="{
      background: color,
      color: textColor,
    }"
  >
    <div class="var-site-app-bar__left" v-if="$slots.left">
      <slot name="left" />
    </div>

    <div
      class="var-site-app-bar__title"
      :class="`var-site-app-bar__title-${titlePosition}`"
      :style="{
        paddingLeft: $slots.left && titlePosition !== 'center' ? '30px' : '10px',
        paddingRight: $slots.right && titlePosition !== 'center' ? '30px' : '10px',
      }"
    >
      <slot>{{ title }}</slot>
    </div>

    <div class="var-site-app-bar__right" v-if="$slots.right">
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'

export default defineComponent({
  name: 'VarSiteAppBar',
  props,
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './appBar';
</style>
