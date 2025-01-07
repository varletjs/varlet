<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import vRipple from '..'
import { t, use } from './locale'

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <div v-ripple class="ripple-example__block var-elevation--2">{{ t('click') }}</div>

  <app-type>{{ t('customColor') }}</app-type>
  <div v-ripple="{ color: 'var(--color-warning)' }" class="ripple-example__block var-elevation--2">
    {{ t('click') }}
  </div>

  <app-type>{{ t('disabledStatus') }}</app-type>
  <div v-ripple="{ disabled: true }" class="ripple-example__block var-elevation--2">{{ t('click') }}</div>
</template>

<style scoped lang="less">
@import '../../styles/elevation.less';

.ripple-example__block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  background-color: var(--color-surface-container-highest);
  transition: background-color 0.25s;
}
</style>
