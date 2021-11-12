<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" />
  </div>
  <app-type>{{ pack.hideSize }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" :show-size-changer="false" />
  </div>
  <app-type>{{ pack.showTotal }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" :show-total="(total) => `${pack.total} ${total} ${pack.item}`" />
  </div>
  <app-type>{{ pack.disabled }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" disabled />
  </div>
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarPagination from '..'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'
import { watchDarkMode } from '../../utils/components'

export default {
  name: 'PaginationExample',
  components: {
    VarPagination,
    AppType,
  },
  setup() {
    watchLang(use)
    watchDarkMode()

    return {
      pack,
    }
  },
}
</script>

<style lang="less" scoped>
.transformer {
  transform: translateX(-10px);
}
</style>
