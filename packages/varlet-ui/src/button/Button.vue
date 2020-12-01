<template>
  <button
    v-ripple="{ disabled }"
    class="varlet--box varlet-button varlet-elevation--3"
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
    @click="trigger"
  >
    <varlet-loading
      :type="loadingType"
      :size="loadingSize"
      v-if="loading"
    />
    <slot v-else/>
  </button>
</template>

<script lang="ts">
import Ripple from '../ripple'
import Loading from '../Loading'
import { defineComponent } from 'vue'
import { props, emits } from './propsEmits'

export default defineComponent({
  name: 'VarletButton',
  components: {
    [Loading.name]: Loading
  },
  directives: { Ripple },
  props,
  emits,
  setup(props, { emit }) {
    return {
      trigger() {
        if (props.loading) {
          return
        }

        emit('click')
      }
    }
  }
})
</script>

<style lang="less">
@import "./button";
</style>
