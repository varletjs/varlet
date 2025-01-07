<script setup>
import { AppType, watchLang } from '@varlet/cli/client'
import vLazy from '..'
import { t, use } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <img v-lazy="'cat.jpg'" class="lazy-example-cat" />
  <img v-lazy="'cat.jpg'" class="lazy-example-cat" />
  <img v-lazy="'cat.jpg'" class="lazy-example-cat" />
  <img v-lazy="'cat.jpg'" class="lazy-example-cat" />
  <img v-lazy="'cat.jpg'" class="lazy-example-cat" />

  <app-type>{{ t('backgroundImageLazyLoad') }}</app-type>
  <div v-lazy:background-image="'cat.jpg'" class="lazy-example-cat"></div>
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
