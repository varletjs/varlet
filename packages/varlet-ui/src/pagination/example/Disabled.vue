<template>
  <var-pagination :current="6" :total="115" :simple="false" disabled />
</template>

<script setup>
import VarPagination from '../Pagination'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { use } from './locale'

watchLang(use, 'pc')
watchDarkMode(dark)
</script>
