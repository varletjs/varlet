<template>
  <app-type>命令调用</app-type>
  <var-button type="primary" @click="preview">预览</var-button>

  <app-type>组件调用</app-type>
  <var-button type="warning" @click="show = true">预览</var-button>
  <var-image-preview :images="images" v-model:show="show" :indicator="false" />
</template>

<script>
import ImagePreview from '../index'
import Button from '../../button'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ImagePreviewExample',
  components: {
    [ImagePreview.Component.name]: ImagePreview.Component,
    [Button.name]: Button,
    [AppType.name]: AppType,
  },
  setup() {
    const images = [
      'https://varlet.gitee.io/varlet-ui/cat.jpg',
      'https://varlet.gitee.io/varlet-ui/cat2.jpg',
      'https://img01.yzcdn.cn/vant/apple-4.jpg',
    ]
    return {
      preview() {
        ImagePreview(images)
      },
      show: ref(false),
      images: ref(images),
    }
  },
})
</script>

<style>
.var-image-preview__image {
  pointer-events: none;
}
</style>
