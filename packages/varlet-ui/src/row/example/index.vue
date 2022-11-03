<script setup>
import VarRow from '..'
import VarCol from '../../col'
import { AppType, watchLang } from '@varlet/cli/client'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ pack.girdSystem }}</app-type>
  <var-row>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
  </var-row>

  <app-type>{{ pack.offset }}</app-type>
  <var-row>
    <var-col :span="16" :offset="8">offset: 8 span: 16</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
  </var-row>

  <app-type>{{ pack.alignment }}</app-type>
  <var-row>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
  </var-row>
  <var-row justify="center">
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
  </var-row>
  <var-row justify="flex-end">
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
  </var-row>
  <var-row justify="space-around">
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
  </var-row>
  <var-row justify="space-between">
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
  </var-row>

  <app-type>{{ pack.gutter }}</app-type>
  <var-row :gutter="10">
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
  </var-row>
</template>

<style scoped lang="less">
.var-col {
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 36px;
  background: var(--site-config-color-app-bar);
  background-clip: content-box;
  margin-bottom: 10px;
  color: #fff;
}
</style>
