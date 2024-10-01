<template>
  <button :class="n()" :style="{ background: color }" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { createNamespace } from '../utils/components'

const { name, n, classes } = createNamespace('button')

export default defineComponent({
  name,
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
      n,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import './button';
</style>
