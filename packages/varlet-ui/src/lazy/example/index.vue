<script setup>
import vLazy from '..'
import { AppType, watchLang } from '@varlet/cli/client'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <img class="lazy-example-cat" v-lazy="'https://varletjs.github.io/varlet/cat.jpg'" />
  <img class="lazy-example-cat" v-lazy="'https://varletjs.github.io/varlet/cat.jpg'" />
  <img class="lazy-example-cat" v-lazy="'https://varletjs.github.io/varlet/cat.jpg'" />
  <img class="lazy-example-cat" v-lazy="'https://varletjs.github.io/varlet/cat.jpg'" />
  <img class="lazy-example-cat" v-lazy="'https://varletjs.github.io/varlet/cat.jpg'" />

  <app-type>{{ pack.backgroundImageLazyLoad }}</app-type>
  <div class="lazy-example-cat" v-lazy:background-image="'https://varletjs.github.io/varlet/cat.jpg'"></div>
</template>

<style scoped lang="less">
.lazy-example-cat {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-size: cover;
  pointer-events: none;
}
</style>
