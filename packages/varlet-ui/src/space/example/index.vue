<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('vertical') }}</app-type>
  <var-space direction="column">
    <div>asdadasd</div>
    <!-- asddadada -->
    <div v-if="false"></div>
    <!-- 怎么会这样呢 -->
    <div v-else>asdasdsad</div>
    <!-- asddadada -->
    <div>123123</div>

    <!-- asddadada -->
    <!-- asddadada -->
    <!-- asddadada -->
    <!-- asddadada -->
  </var-space>
</template>
