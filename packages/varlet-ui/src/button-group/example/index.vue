<script setup>
import VarButtonGroup from '../index'
import VarButton from '../../button'
import VarSpace from '../../space'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type>主题色按钮</app-type>
  <var-button-group type="primary">
    <var-button>按钮1</var-button>
    <var-button>按钮2</var-button>
    <var-button>按钮3</var-button>
  </var-button-group>

  <app-type>按钮尺寸</app-type>
  <var-space :size="[10, 10]">
    <var-button-group size="small">
      <var-button>按钮1</var-button>
      <var-button>按钮2</var-button>
      <var-button>按钮3</var-button>
    </var-button-group>

    <var-button-group size="large">
      <var-button>按钮1</var-button>
      <var-button>按钮2</var-button>
      <var-button>按钮3</var-button>
    </var-button-group>
  </var-space>

  <app-type>文字按钮</app-type>
  <var-space :size="[10, 10]">
    <var-button-group mode="text">
      <var-button>文字按钮</var-button>
      <var-button>文字按钮</var-button>
      <var-button>文字按钮</var-button>
    </var-button-group>

    <var-button-group type="primary" mode="outline">
      <var-button>文字按钮</var-button>
      <var-button>文字按钮</var-button>
      <var-button>文字按钮</var-button>
    </var-button-group>
  </var-space>

  <app-type>自定义颜色</app-type>
  <var-button-group type="primary" color="linear-gradient(to right, #69dbaa, #3a7afe)">
    <var-button>使用渐变</var-button>
    <var-button>使用渐变</var-button>
    <var-button>使用渐变</var-button>
  </var-button-group>

  <app-type>竖直排列</app-type>
  <var-button-group type="primary" mode="outline" vertical>
    <var-button>按钮1</var-button>
    <var-button>按钮2</var-button>
    <var-button>按钮3</var-button>
  </var-button-group>
</template>
