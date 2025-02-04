<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('simple') }}</app-type>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-pagination :current="1" :total="20" />

  <app-type>{{ t('hideSize') }}</app-type>
  <var-pagination :current="1" :total="20" :show-size-changer="false" />

  <app-type>{{ t('showTotal') }}</app-type>
  <var-pagination
    :current="1"
    :total="20"
    :show-size-changer="false"
    :show-total="(total) => `${t('total')} ${total} ${t('item')}`"
  />

  <app-type>{{ t('disabled') }}</app-type>
  <var-pagination :current="1" :total="20" disabled />

  <app-type style="margin-top: 20px">{{ t('basic') }}</app-type>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-pagination :simple="false" :current="1" :total="20" />

  <app-type>{{ t('hideSize') }}</app-type>
  <var-pagination :current="1" :total="20" :simple="false" :show-size-changer="false" />

  <app-type>{{ t('showTotal') }}</app-type>
  <var-pagination
    :current="1"
    :total="20"
    :simple="false"
    :show-size-changer="false"
    :show-total="(total) => `${t('total')} ${total} ${t('item')}`"
  />

  <app-type>{{ t('disabled') }}</app-type>
  <var-pagination :simple="false" :current="1" :total="20" disabled />

  <app-type>{{ t('quickJumper') }}</app-type>
  <var-pagination :simple="false" :current="1" :total="20" :show-size-changer="false" show-quick-jumper />
</template>
