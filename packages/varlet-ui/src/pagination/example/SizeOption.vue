<template>
  <var-pagination :current="3" :total="120" :simple="false" :show-size-changer="false" />
  <var-pagination :current="3" :total="120" :simple="false" :size-option="[10, 20, 30, 40]" />
</template>

<script>
import VarPagination from '../Pagination'
import { watchLang } from '@varlet/cli/site/utils'
import { watchDarkMode } from '../../utils/components'
import { pack, use } from './locale'

export default {
  name: 'BasicUse',
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
