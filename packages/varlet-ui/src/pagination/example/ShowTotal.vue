<script setup>
import { watchLang, onThemeChange } from '@varlet/cli/client'
import { t, use } from './locale'

watchLang(use, 'pc')
onThemeChange()
</script>

<template>
  <var-pagination
    :current="3"
    :size="10"
    :total="120"
    :simple="false"
    :show-total="(total) => `${t('pcTotal')} ${total} ${t('item')}`"
  />
  <var-pagination
    :current="3"
    :size="10"
    :total="120"
    :simple="false"
    :show-total="(total, range) => `${t('current')} ${range[0]}-${range[1]} / ${t('pcTotal')} ${total} ${t('item')}`"
  />
</template>
