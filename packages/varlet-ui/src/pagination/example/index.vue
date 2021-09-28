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
    <var-pagination :total="115" disabled />
  </div>
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Pagination from '..'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'PaginationExample',
  components: {
    [Pagination.name]: Pagination,
    AppType,
  },
  setup() {
    watchLang(use)

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
