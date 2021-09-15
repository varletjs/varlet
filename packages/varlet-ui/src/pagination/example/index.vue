<template>
  <app-type> 啊这 </app-type>
  <div style="margin-top: 200px">
    <var-pagination @pageChange="pageChange" :current="current" :size-data="[5, 10, 15, 30]" :total="80" />
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
    const current = ref(1)
    // const pageChange = (newValue, oldValue) => {
    //   // console.log(newValue, oldValue)
    // }
    const time = () => {
      setTimeout(() => {
        current.value = 5
      }, 2000)
    }
    time()
    return {
      pack,
      current,
      time,
    }
  },
}
</script>

<style>
.cell-list {
  background: #fff;
}
</style>
