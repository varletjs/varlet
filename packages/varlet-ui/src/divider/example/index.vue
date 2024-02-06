<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { t, use } from './locale'

watchLang(use)
onThemeChange()
</script>
<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-divider />

  <app-type>{{ t('dashed') }}</app-type>
  <var-divider dashed />

  <app-type>{{ t('inset') }}</app-type>
  <var-divider inset />
  <var-divider :inset="36" margin="36px 0" />
  <var-divider inset="-36px" />

  <app-type>{{ t('vertical') }}</app-type>
  <div class="divider-example-vertical-container">
    <span>{{ t('text') }}</span>
    <var-divider vertical />
    <span>{{ t('text') }}</span>
    <var-divider vertical />
    <span>{{ t('text') }}</span>
  </div>

  <app-type>{{ t('withDesc') }}</app-type>
  <var-divider :description="t('withDescText')" />

  <app-type>{{ t('custom') }}</app-type>
  <var-divider>
    <var-icon name="heart-outline" style="margin: 0 16px; color: var(--color-danger)" />
  </var-divider>

  <app-type>{{ t('hairline') }}</app-type>
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
