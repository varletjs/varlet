<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-paper :elevation="2" width="25vmin" height="25vmin" />

  <app-type>{{ t('ripple') }}</app-type>
  <var-paper :elevation="2" ripple width="25vmin" height="25vmin" />

  <app-type>{{ t('round') }}</app-type>
  <var-paper :elevation="2" width="25vmin" height="25vmin" round />

  <app-type>{{ t('radius') }}</app-type>
  <var-paper :elevation="2" :radius="8" width="25vmin" height="25vmin" />

  <app-type>{{ t('slot') }}</app-type>
  <var-paper :elevation="2">
    <var-cell>{{ t('paper') }}</var-cell>
    <var-cell>{{ t('paper') }}</var-cell>
    <var-cell>{{ t('paper') }}</var-cell>
  </var-paper>

  <app-type>{{ t('surfaceLow') }}</app-type>
  <div class="paper-example-tip">{{ t('surfaceLowTip') }}</div>
  <var-space direction="column" :size="12">
    <div class="paper-example-sublabel">{{ t('surfaceLowStandard') }}</div>
    <var-paper :elevation="2" width="25vmin" height="25vmin" />
    <div class="paper-example-sublabel">{{ t('surfaceLowCompared') }}</div>
    <var-paper surface="low" :elevation="2" width="25vmin" height="25vmin" />
  </var-space>
</template>

<style scoped lang="less">
.paper-example-tip {
  margin: 0 0 12px;
  color: var(--color-text-disabled);
  font-size: 14px;
  line-height: 1.6;
}

.paper-example-sublabel {
  margin: 0;
  color: var(--color-on-surface-variant);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;
}
</style>
