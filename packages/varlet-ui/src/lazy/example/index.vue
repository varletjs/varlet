<template>
  <div class="lazy-example" @touchmove.stop>
    <img style="width: 100px; height: 100px" v-lazy="'https://cn.vuejs.org/images/logo.png'">
    <img style="width: 100px; height: 100px" v-lazy="'https://cn.vuejs.org/images/logo.png'">
    <img style="width: 100px; height: 100px" v-lazy="'https://cn.vuejs.org/images/logo.png'">
    <img style="width: 100px; height: 100px" v-lazy="'https://cn.vuejs.org/images/logo.png'">
    <img style="width: 100px; height: 100px" v-lazy="'https://cn.vuejs.org/images/logo.png'">
    <img style="width: 100px; height: 100px" v-lazy="'https://cn.vuejs.org/images/logo.png'">
    <img style="width: 100px; height: 100px" v-lazy="'https://cn.vuejs.org/images/logo.png'">
    <img style="width: 100px; height: 100px" v-lazy="'https://cn.vuejs.org/images/logo.png'">
    <img style="width: 100px; height: 100px" v-lazy="'https://cn.vuejs.org/images/logo.png'">
    <img style="width: 100px; height: 100px" v-lazy="'https://cn.vuejs.org/images/logo.png'">
    <img style="width: 100px; height: 100px" v-lazy="'https://cn.vuejs.org/images/logo.png'">
    <img style="width: 100px; height: 100px" v-lazy="'https://cn.vuejs.org/images/logo.png'">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Lazy from '..'

export default defineComponent({
  name: 'LazyExample',
  directives: { Lazy },
  setup() {
    return {

    }
  }
})
</script>

<style scoped lang="less">
.lazy-example {
  width: 100%;
  height: 60vh;
  margin-top: 200vh;
  overflow: auto;

  img {
    display: block;
  }
}
</style>
