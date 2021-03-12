<template>
  <div class="var-app-bar" :style="appBarStyle()">
    <div class="var-app-bar__left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <div class="var-app-bar__title">
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
  setup(props) {
    const appBarStyle = () => {
      return {
        background: props.color,
        color: props.textColor,
      }
    }

    return {
      appBarStyle,
    }
  },
})
</script>

<style lang="less">
@import './appBar';
</style>
