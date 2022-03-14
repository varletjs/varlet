<template>
  <var-pagination :current="3" :total="120" :simple="false" />
</template>

<script>
import VarPagination from '../Pagination'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { pack, use } from './locale'

export default {
  name: 'BasicUse',
  components: {
    VarPagination,
  },
  setup() {
    watchLang(use, 'pc')
    watchDarkMode(dark)

    return {
      pack,
    }
  },
}
</script>

<style lang="less" scoped>
ul {
  margin: 0;
  padding: 10px 0;
  box-shadow: none;
}
</style>
