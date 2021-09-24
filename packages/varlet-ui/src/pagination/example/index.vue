<template>
  <app-type> 啊这 </app-type>
  <div style="margin-top: 200px">
    <var-pagination total="325" :max-show-btn-count="4" size="10" show-quick-jumper :show-total="() => '共5条'" />
  </div>
</template>

<script>
import Pagination from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'
import { ref } from 'vue'

export default {
  name: 'PaginationExample',
  components: {
    [Pagination.name]: Pagination,
    AppType,
  },
  setup() {
    watchLang(use)

    return {}
  },
}
</script>
