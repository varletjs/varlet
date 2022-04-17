<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-skeleton :loading="loading">{{ pack.loadingData }}</var-skeleton>

  <app-type>{{ pack.displayTitle }}</app-type>
  <var-skeleton title :loading="loading">{{ pack.loadingData }}</var-skeleton>

  <app-type>{{ pack.customRowsHeight }}</app-type>
  <var-skeleton title :rows="3" :loading="loading" :rows-width="['200px', '100px', '50px']">
    {{ pack.loadingData }}
  </var-skeleton>

  <app-type>{{ pack.displayAvatar }}</app-type>
  <var-skeleton title avatar :rows="3" :loading="loading">
    {{ pack.loadingData }}
  </var-skeleton>

  <app-type>{{ pack.displayCard }}</app-type>
  <var-skeleton title avatar card :rows="3" :loading="loading">
    {{ pack.loadingData }}
  </var-skeleton>

  <app-type>{{ pack.fullscreenMode }}</app-type>
  <var-button type="danger" class="button" @click="fullscreen">
    {{ pack.toggleFullscreenMode }}
  </var-button>
  <var-skeleton fullscreen :loading="fullscreenLoading" />
</template>

<script>
import VarSkeleton from '..'
import VarButton from '../../button'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { ref } from 'vue'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'SkeletonExample',
  components: {
    VarSkeleton,
    VarButton,
    AppType,
  },
  setup() {
    const loading = ref(true)
    const fullscreenLoading = ref(false)

    const fullscreen = () => {
      fullscreenLoading.value = true

      setTimeout(() => {
        fullscreenLoading.value = false
      }, 2000)
    }

    watchLang(use)
    watchDarkMode(dark)

    return {
      pack,
      loading,
      fullscreenLoading,
      fullscreen,
    }
  },
}
</script>

<style scoped lang="less">
.var-button {
  position: relative;
  z-index: 10;
  margin-bottom: 10px;
}
</style>
