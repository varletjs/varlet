<script setup>
import VarButtonGroup from '../index'
import VarButton from '../../button'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type>基础使用</app-type>
  <!--  <var-button-group>-->
  <!--    <var-button>默认按钮</var-button>-->
  <!--    <var-button type="primary">主要按钮</var-button>-->
  <!--    <var-button type="info">信息按钮</var-button>-->
  <!--    <var-button>默认按钮</var-button>-->
  <!--    <var-button type="primary">主要按钮</var-button>-->
  <!--    <var-button type="info">信息按钮</var-button>-->
  <!--  </var-button-group>-->

  <!--  <var-button-group size="small">-->
  <!--    <var-button type="primary">默认按钮</var-button>-->
  <!--    <var-button size="large">主要按钮</var-button>-->
  <!--    <var-button>信息按钮</var-button>-->
  <!--  </var-button-group>-->

  <var-button-group size="large" type="primary" mode="outline">
    <var-button>默认按钮</var-button>
    <var-button size="large">主要按钮</var-button>
    <var-button>信息按钮</var-button>

    <!--    <var-button>默认按钮</var-button>-->
    <!--    <var-button size="large">主要按钮</var-button>-->
    <!--    <var-button>信息按钮</var-button>-->
  </var-button-group>
</template>
