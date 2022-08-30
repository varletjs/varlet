<script setup>
import vLazy from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { use, pack } from './locale'
import { watchLang } from '@varlet/cli/site/utils'

watchLang(use)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <img class="lazy-example-cat" v-lazy="'https://varlet.gitee.io/varlet-ui/cat.jpg'" />
  <img class="lazy-example-cat" v-lazy="'https://varlet.gitee.io/varlet-ui/cat.jpg'" />
  <img class="lazy-example-cat" v-lazy="'https://varlet.gitee.io/varlet-ui/cat.jpg'" />
  <img class="lazy-example-cat" v-lazy="'https://varlet.gitee.io/varlet-ui/cat.jpg'" />
  <img class="lazy-example-cat" v-lazy="'https://varlet.gitee.io/varlet-ui/cat.jpg'" />

  <app-type>{{ pack.backgroundImageLazyLoad }}</app-type>
  <div class="lazy-example-cat" v-lazy:background-image="'https://varlet.gitee.io/varlet-ui/cat.jpg'"></div>
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
