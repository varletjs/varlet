<template>
  <button class="var-button" :style="{ background: color }">
    {{ pack.button }}
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

// i18n for component's internal
import { pack } from '../locale'

export default defineComponent({
  name: 'VarButton',
  props: {
    color: {
      type: String,
    },
    onClick: {
      type: Function as PropType<(e: Event) => void>,
    },
  },
  setup(props) {
    const handleClick = (e: Event) => props.onClick?.(e)

    return {
      pack,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import './button';
</style>
