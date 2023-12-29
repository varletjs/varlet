<script setup>
import vRipple from '..'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { pack, use } from './locale'

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <div class="ripple-example__block var-elevation--2" v-ripple>{{ pack.click }}</div>

  <app-type>{{ pack.customColor }}</app-type>
  <div class="ripple-example__block var-elevation--2" v-ripple="{ color: 'var(--color-warning)' }">
    {{ pack.click }}
  </div>

  <app-type>{{ pack.disabledStatus }}</app-type>
  <div class="ripple-example__block var-elevation--2" v-ripple="{ disabled: true }">{{ pack.click }}</div>
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
  background-color: var(--card-background);
  transition: background-color 0.25s;
}
</style>
