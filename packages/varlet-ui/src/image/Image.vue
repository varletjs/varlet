<template>
  <div
    class="var-image var--box"
    v-ripple="{ disabled: !ripple }"
    :style="{
      'border-radius': radius
    }"
  >
    <img
      class="var-image__image"
      v-bind="$attrs"
      :alt="alt"
      :lazy-error="error"
      :lazy-loading="loading"
      :style="{
        'width': width,
        'height': height,
        'object-fit': fit
      }"
      v-lazy="src"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'
import Ripple from '../ripple'
import Lazy from '../lazy'

export default defineComponent({
  name: 'VarImage',
  directives: {
    Lazy,
    Ripple
  },
  inheritAttrs: false,
  props
})
</script>

<style lang="less">
@import "./image";
</style>

