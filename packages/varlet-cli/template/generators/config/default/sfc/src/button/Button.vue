<template>
  <button class="va-button" :style="{ background: color }" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'VaButton',
  props: {
    color: {
      type: String,
    },
    onClick: {
      type: Function as PropType<(e: Event) => void>,
    },
  },
  setup(props) {
    const handleClick = (e: Event) => {
      props.onClick?.(e)
    }
    
    return {
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import './button';
</style>
