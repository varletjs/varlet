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
