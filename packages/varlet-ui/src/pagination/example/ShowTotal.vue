<template>
  <var-pagination
    :current="3"
    :size="10"
    :total="120"
    :simple="false"
    :show-total="(total) => `${pack.pcTotal} ${total} ${pack.item}`"
  />
  <var-pagination
    :current="3"
    :size="10"
    :total="120"
    :simple="false"
    :show-total="(total, range) => `${pack.current} ${range[0]}-${range[1]} / ${pack.pcTotal} ${total} ${pack.item}`"
  />
</template>

<script>
import VarPagination from '../Pagination'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
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
