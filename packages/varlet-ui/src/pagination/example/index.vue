<script setup>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarPagination from '..'
import VarSpace from '../../space'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-space :size="[10, 30]">
    <var-pagination :current="3" :total="120" />
  </var-space>
  <app-type>{{ pack.hideSize }}</app-type>
  <var-space :size="[10, 30]">
    <var-pagination :current="3" :total="120" :show-size-changer="false" />
  </var-space>
  <app-type>{{ pack.showTotal }}</app-type>
  <var-space :size="[10, 30]">
    <var-pagination :current="3" :total="120" :show-total="(total) => `${pack.total} ${total} ${pack.item}`" />
  </var-space>
  <app-type>{{ pack.disabled }}</app-type>
  <var-space :size="[10, 30]">
    <var-pagination :current="3" :total="120" disabled />
  </var-space>
</template>
