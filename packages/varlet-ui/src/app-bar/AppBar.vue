<template>
  <div class="var-app-bar" :style="appBarStyle()">
    <slot name="left"> </slot>
    <div class="var-app-bar__title">
      <slot>{{ title }}</slot>
    </div>

    <slot name="right"></slot>
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
