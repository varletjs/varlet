<template>
  <div class="lazy-example">
    <img style="width: 100px; height: 100px" v-lazy="'https://asdasdadasd'" lazy-error="https://cn.vuejs.org/images/logo.png">
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
  margin-top: 40vh;
  overflow: auto;

  img {
    display: block;
  }
}
</style>
