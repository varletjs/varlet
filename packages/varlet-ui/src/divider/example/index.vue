<script setup>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarDivider from '..'
import VarIcon from '../../icon'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

watchLang(use)
watchDarkMode(dark)
</script>
<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-divider />

  <app-type>{{ pack.dashed }}</app-type>
  <var-divider dashed />

  <app-type>{{ pack.inset }}</app-type>
  <var-divider inset />
  <var-divider :inset="36" margin="36px 0" />
  <var-divider inset="-36px" />

  <app-type>{{ pack.vertical }}</app-type>
  <div class="divider-example-vertical-container">
    <span>{{ pack.text }}</span>
    <var-divider vertical />
    <span>{{ pack.text }}</span>
    <var-divider vertical />
    <span>{{ pack.text }}</span>
  </div>

  <app-type>{{ pack.withDesc }}</app-type>
  <var-divider :description="pack.withDescText" />

  <app-type>{{ pack.custom }}</app-type>
  <var-divider>
    <var-icon name="heart-outline" style="margin: 0 16px; color: rgb(41, 121, 255)" />
  </var-divider>

  <app-type>{{ pack.hairline }}</app-type>
  <var-divider hairline />
</template>

<style lang="less" scoped>
.divider-example-vertical-container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;

  span {
    font-size: 14px;
    color: #888;
  }
}
</style>
