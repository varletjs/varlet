<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { use, t } from './locale'

watchLang(use)
onThemeChange()
</script>

<template>
  <div class="example">
    <app-type>{{ t('basicUsage') }}</app-type>
    <var-sticky offset-top="14.4vmin">
      <var-button type="primary">{{ t('basicUsage') }}</var-button>
    </var-sticky>

    <app-type>{{ t('localSticky') }}</app-type>
    <div class="scroller">
      <var-sticky>
        <var-button type="success">{{ t('localSticky') }}</var-button>
      </var-sticky>
      <div class="block"></div>
    </div>
  </div>
</template>

<style scoped lang="less">
.example {
  min-height: 200vh;

  .scroller {
    height: 200px;
    overflow: auto;
    background: var(--site-config-color-app-bar);
    border-radius: 4px;

    .block {
      width: 100%;
      height: 600px;
      background: var(--site-config-color-type);
      opacity: 0.5;
    }
  }
}
</style>
