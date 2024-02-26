<script setup>
import vRipple from '..'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { t, use } from './locale'

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <div class="ripple-example__block var-elevation--2" v-ripple>{{ t('click') }}</div>

  <app-type>{{ t('customColor') }}</app-type>
  <div class="ripple-example__block var-elevation--2" v-ripple="{ color: 'var(--color-warning)' }">
    {{ t('click') }}
  </div>

  <app-type>{{ t('disabledStatus') }}</app-type>
  <div class="ripple-example__block var-elevation--2" v-ripple="{ disabled: true }">{{ t('click') }}</div>
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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: var(--color-surface-container-highest);
  transition: background-color 0.25s;
}
</style>
