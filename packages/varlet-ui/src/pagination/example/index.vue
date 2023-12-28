<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { use, pack } from './locale'

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" />
  </div>
  <app-type>{{ pack.hideSize }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" :show-size-changer="false" />
  </div>
  <app-type>{{ pack.showTotal }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" :show-total="(total) => `${pack.total} ${total} ${pack.item}`" />
  </div>
  <app-type>{{ pack.disabled }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" disabled />
  </div>
</template>

<style lang="less" scoped>
.transformer {
  transform: translateX(-10px);
}
</style>
