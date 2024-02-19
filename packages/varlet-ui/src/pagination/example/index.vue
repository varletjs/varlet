<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { use, t } from './locale'

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" />
  </div>
  <app-type>{{ t('hideSize') }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" :show-size-changer="false" />
  </div>
  <app-type>{{ t('showTotal') }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" :show-total="(total) => `${t('total')} ${total} ${t('item')}`" />
  </div>
  <app-type>{{ t('disabled') }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" disabled />
  </div>
</template>

<style lang="less" scoped>
.transformer {
  transform: translateX(-10px);
}
</style>
