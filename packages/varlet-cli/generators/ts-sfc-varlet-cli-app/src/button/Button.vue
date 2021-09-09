<template>
  <button class="basic-button" :style="{ background: color }">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'BButton',
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
      handleClick,
    }
  },
})
</script>

<style lang="less">
.basic-button {
  display: flex;
  padding: 10px;
  background: #009688;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  //&:active {
  //  opacity: 0.9;
  //}
}
</style>
