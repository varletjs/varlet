<template>
  <div
    class="var-app-bar"
    :class="{ 'var-elevation--3': elevation }"
    :style="{
      background: color,
      color: textColor,
    }"
  >
    <div class="var-app-bar__left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>

    <div
      class="var-app-bar__title"
      :class="`var-app-bar__title-${titlePosition}`"
      :style="{
        paddingLeft: $slots.left && titlePosition !== 'center' ? '30px' : '10px',
        paddingRight: $slots.right && titlePosition !== 'center' ? '30px' : '10px',
      }"
    >
      <slot>{{ title }}</slot>
    </div>

    <div class="var-app-bar__right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'
import Icon from '../icon'

export default defineComponent({
  name: 'VarAppBar',
  components: {
    [Icon.name]: Icon,
  },
  props,
})
</script>

<style lang="less">
@import '../icon/icon';
@import './appBar';
</style>
