<template>
  <button
    v-ripple="{ disabled }"
    class="varlet-button varlet-elevation--3"
    :class="[
      `varlet-button--${type}`,
      `varlet-button--${size}`,
      block ? 'varlet--block' : 'varlet--inline',
      round ? 'varlet-button--round': null,
      disabled ? 'varlet-button--disabled': null
    ]"
    :style="{
      'color': color,
      'background': background
    }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot/>
  </button>
</template>

<script lang="ts">
import Ripple from '../ripple'
import { defineComponent } from 'vue'
import { props, emits } from './propsEmits'

export default defineComponent({
  name: 'VarletButton',
  directives: { Ripple },
  props,
  emits
})
</script>

<style lang="less">
@import "./button";
</style>
