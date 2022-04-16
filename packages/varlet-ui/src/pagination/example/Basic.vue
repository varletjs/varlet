<script setup>
import VarPagination from '../Pagination'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { pack, use } from './locale'

watchLang(use, 'pc')
watchDarkMode(dark)
</script>

<template>
  <var-pagination :current="3" :total="120" :simple="false" />
</template>

<style scoped>
ul {
  margin: 0;
  padding: 10px 0;
  box-shadow: none;
}
</style>
