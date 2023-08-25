<script setup>
import VarGrid from '../index'
import VarGridItem from '../../grid-item'
import VarImage from '../../image'
import dark from '../../themes/dark'
import { watchLang, AppType, watchDarkMode } from '@varlet/cli/client'
import { use, pack } from './locale'

watchLang(use)
watchDarkMode(dark)

const cat = 'https://varlet.gitee.io/varlet-ui/cat.jpg'
const cat2 = 'https://varlet.gitee.io/varlet-ui/cat2.jpg'
const cat3 = 'https://varlet.gitee.io/varlet-ui/cat3.jpg'

const onClick = () => {
  console.log('click')
}
</script>

<template>
  <app-type>{{ pack.base }}</app-type>
  <var-grid>
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
  </var-grid>

  <app-type>{{ pack.column }}</app-type>
  <var-grid column="5">
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
  </var-grid>

  <app-type>{{ pack.square }}</app-type>
  <var-grid column="3" square>
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
  </var-grid>

  <app-type>{{ pack.gutter }}</app-type>
  <var-grid column="2" gutter="8px" :border="false">
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
  </var-grid>

  <app-type>{{ pack.direction }}</app-type>
  <var-grid column="4" direction="horizontal">
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" />
  </var-grid>

  <app-type>{{ pack.badge }}</app-type>
  <var-grid column="4">
    <var-grid-item icon="image-outline" dot :text="pack.text" />
    <var-grid-item icon="image-outline" badge="66" :text="pack.text" />
    <var-grid-item icon="image-outline" badge="1" :badge-props="{ type: 'primary' }" :text="pack.text" />
    <var-grid-item icon="image-outline" badge="1" :badge-props="{ position: 'right-bottom' }" text=" 文字" />
    <var-grid-item icon="image-outline" :text="pack.text" />
    <var-grid-item icon="image-outline" :text="pack.text" @click="onClick" />
  </var-grid>

  <app-type>{{ pack.custom }}</app-type>
  <var-grid column="2" gutter="12px" :border="false">
    <var-grid-item>
      <var-image size="40px" :src="cat" />
    </var-grid-item>
    <var-grid-item>
      <var-image size="40px" :src="cat2" />
    </var-grid-item>
    <var-grid-item>
      <var-image size="40px" :src="cat3" />
    </var-grid-item>
  </var-grid>
</template>
