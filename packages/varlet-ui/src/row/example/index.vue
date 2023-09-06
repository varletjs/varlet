<script setup>
import VarRow from '..'
import VarCol from '../../col'
import { AppType, watchLang } from '@varlet/cli/client'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ pack.girdSystem }}</app-type>
  <var-row :gutter="[10, 10]">
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
  </var-row>

  <app-type>{{ pack.offset }}</app-type>
  <var-row :gutter="[10, 10]">
    <var-col :span="16" :offset="8">
      <div class="item">offset: 8 span: 16</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
  </var-row>

  <app-type>{{ pack.alignment }}</app-type>
  <var-row :gutter="[20, 10]">
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
  </var-row>
  <var-row justify="center" :gutter="[20, 10]">
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
  </var-row>
  <var-row justify="flex-end" :gutter="[20, 10]">
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
  </var-row>
  <var-row justify="space-around" :gutter="[20, 10]">
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
  </var-row>
  <var-row justify="space-between" :gutter="[20, 10]">
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
  </var-row>
</template>

<style scoped lang="less">
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  background: var(--site-config-color-app-bar);
}
</style>
