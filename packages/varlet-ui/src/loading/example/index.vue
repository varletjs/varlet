<template>
  <div class="loading-demo">
    <div class="loading-demo__type">
      <app-type>{{ pack.type }}</app-type>
      <div class="loading-demo__type-block">
        <var-loading type="circle" />
        <var-loading type="cube" />
        <var-loading type="wave" />
        <var-loading type="rect" />
        <var-loading type="disappear" />
      </div>
    </div>
    <div class="loading-demo__type">
      <app-type>{{ pack.color }}</app-type>
      <div class="loading-demo__type-block">
        <var-loading type="circle" color="#2979ff" />
        <var-loading type="cube" color="#2979ff" />
        <var-loading type="wave" color="#2979ff" />
        <var-loading type="rect" color="#2979ff" />
        <var-loading type="disappear" color="#2979ff" />
      </div>
    </div>
    <div class="loading-demo__size">
      <app-type>{{ pack.size }}</app-type>
      <div class="loading-demo__size-block">
        <var-loading type="circle" size="small" />
        <var-loading type="cube" size="small" />
        <var-loading type="wave" size="small" />
        <var-loading type="rect" size="small" />
        <var-loading type="disappear" size="small" />
      </div>
    </div>

    <div>
      <app-type>{{ pack.wrap }}</app-type>
      <var-button @click="loading = !loading" style="margin-bottom: 8px">
        {{ loading ? pack.close : pack.open }}
      </var-button>
      <var-loading description="loading...." type="circle" :loading="loading">
        <var-card :title="pack.cardTitle" :description="pack.cardDesc" />
      </var-loading>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarLoading from '..'
import VarButton from '../../button'
import VarCard from '../../card'
import { pack, use } from './locale'
import { watchDarkMode, watchLang } from '@varlet/cli/site/utils'
import dark from '../../themes/dark/index'

export default {
  name: 'LoadingExample',
  components: {
    VarLoading,
    VarButton,
    VarCard,
    AppType,
  },
  setup() {
    const loading = ref(false)

    watchLang(use)
    watchDarkMode(dark)

    return {
      pack,
      loading,
    }
  },
}
</script>

<style lang="less" scoped>
.loading-demo {
  &__type,
  &__size,
  &__text {
    display: flex;
    flex-direction: column;
  }

  &__type-block,
  &__size-block,
  &__text-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .var-loading {
      padding: 8px 0;
    }
  }
}
</style>
