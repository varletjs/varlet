<script setup>
import VarGrid from '../index'
import VarGridItem from '../../grid-item'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ pack.base }}</app-type>
  <var-grid>
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
  </var-grid>

  <app-type>{{ pack.column }}</app-type>
  <var-grid column="5">
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
  </var-grid>

  <app-type>{{ pack.square }}</app-type>
  <var-grid column="3" square>
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
  </var-grid>

  <app-type>{{ pack.gutter }}</app-type>
  <var-grid column="4" gutter="8px">
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
  </var-grid>

  <app-type>{{ pack.direction }}</app-type>
  <var-grid column="4" direction="horizontal">
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
  </var-grid>

  <app-type>{{ pack.badge }}</app-type>
  <var-grid column="4">
    <var-grid-item icon="image-outline" dot text="文字" />
    <var-grid-item icon="image-outline" badge="66" text="文字" />
    <var-grid-item icon="image-outline" badge="1" :badge-props="{ type: 'primary' }" text="文字" />
    <var-grid-item icon="image-outline" badge="1" :badge-props="{ position: 'right-bottom' }" text=" 文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
  </var-grid>
</template>
