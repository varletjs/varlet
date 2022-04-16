<script setup>
import VarPagination from '../Pagination'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { pack, use } from './locale'

watchLang(use, 'pc')
watchDarkMode(dark)
</script>

<template>
  <var-pagination
    class="pagination-example-ul"
    :current="3"
    :size="10"
    :total="120"
    :simple="false"
    :show-total="(total) => `${pack.pcTotal} ${total} ${pack.item}`"
  />
  <var-pagination
    class="pagination-example-ul"
    :current="3"
    :size="10"
    :total="120"
    :simple="false"
    :show-total="(total, range) => `${pack.current} ${range[0]}-${range[1]} / ${pack.pcTotal} ${total} ${pack.item}`"
  />
</template>

<style>
.pagination-example-ul {
  margin: 0;
  padding: 10px 0;
  box-shadow: none;
}
</style>
