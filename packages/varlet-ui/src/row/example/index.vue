<template>
  <app-type>{{ pack.girdSystem }}</app-type>
  <var-row>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>

  <app-type>{{ pack.offset }}</app-type>
  <var-row>
    <var-col class="col" :span="16" :offset="8">offset: 8 span: 16</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>

  <app-type>{{ pack.alignment }}</app-type>
  <var-row>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>
  <var-row justify="center">
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>
  <var-row justify="flex-end">
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>
  <var-row justify="space-around">
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>
  <var-row justify="space-between">
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>

  <app-type>{{ pack.gutter }}</app-type>
  <var-row :gutter="10">
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>
</template>

<script>
import VarRow from '..'
import VarCol from '../../col'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { use, pack } from './locale'
import { watchLang } from '@varlet/cli/site/utils'

export default {
  name: 'RowExample',
  components: {
    VarRow,
    VarCol,
    AppType,
  },
  setup() {
    watchLang(use)

    return { pack }
  },
}
</script>

<style scoped lang="less">
.var-col {
  display: flex;
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
