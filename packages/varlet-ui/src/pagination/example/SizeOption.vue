<script setup>
import VarPagination from '../Pagination'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { use } from './locale'

watchLang(use, 'pc')
watchDarkMode(dark)
</script>

<template>
  <var-pagination :current="3" :total="120" :simple="false" :show-size-changer="false" />
  <var-pagination :current="3" :total="120" :simple="false" :size-option="[10, 20, 30, 40]" />
</template>
