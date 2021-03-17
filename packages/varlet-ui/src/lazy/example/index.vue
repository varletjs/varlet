<template>
  <app-type>{{ pack.basicUse }}</app-type>
  <img class="cat" v-lazy="'https://varlet-ui.github.io/cat.jpg'">
  <img class="cat" v-lazy="'https://varlet-ui.github.io/cat.jpg'">
  <img class="cat" v-lazy="'https://varlet-ui.github.io/cat.jpg'">
  <img class="cat" v-lazy="'https://varlet-ui.github.io/cat.jpg'">
  <img class="cat" v-lazy="'https://varlet-ui.github.io/cat.jpg'">

  <app-type>{{ pack.backgroundImageLazyLoad }}</app-type>
  <div class="cat" v-lazy:background-image="'https://varlet-ui.github.io/cat.jpg'"></div>
</template>

<script>
import Lazy from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { use, pack } from './locale'
import { watchLang } from '../../utils/components'

export default {
  name: 'LazyExample',
  directives: { Lazy },
  components: { AppType },
  setup() {
    watchLang(use)

    return { pack }
  }
}
</script>

<style scoped lang="less">
.cat {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-size: cover;
}
</style>
