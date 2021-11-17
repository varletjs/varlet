<template>
  <var-pagination :current="6" :total="115" :simple="false" disabled />
</template>

<script>
import VarPagination from '../Pagination'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { pack, use } from './locale'

export default {
  name: 'Disabled',
  components: {
    VarPagination,
  },
  setup() {
    watchLang(use, 'pc')
    watchDarkMode()

    return {
      pack,
    }
  },
}
</script>

<style lang="less" scoped>
ul {
  padding: 10px 0;
  box-shadow: none;
}
</style>
