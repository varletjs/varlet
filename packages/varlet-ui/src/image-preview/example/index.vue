<template>
  <div class="image-preview-demo">
    <app-type>{{ pack.functionCall }} </app-type>
    <var-button type="primary" block @click="preview"> {{ pack.preview }} </var-button>
  </div>

  <div class="image-preview-demo">
    <app-type>{{ pack.componentCall }} </app-type>
    <var-button type="warning" block @click="show = true">{{ pack.basicUse }} </var-button>
    <var-image-preview :images="image" v-model:show="show" />

    <var-button type="info" block @click="currentShow = true">{{ pack.specifyInitialPosition }} </var-button>
    <var-image-preview
      :images="images"
      v-model:show="currentShow"
      current="https://varlet.gitee.io/varlet-ui/cat2.jpg"
    />

    <var-button type="success" block @click="closeShow = true">{{ pack.displayCloseButton }} </var-button>
    <var-image-preview :images="images" v-model:show="closeShow" :closeable="true" />

    <var-button block @click="closeEventShow = true">{{ pack.listenCloseEvents }} </var-button>
    <var-image-preview :images="images" v-model:show="closeEventShow" @close="handleCloseEvent" />
  </div>
</template>

<script>
import ImagePreview from '../index'
import Button from '../../button'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Snackbar from '../../snackbar'
import { defineComponent, ref } from 'vue'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'

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

    const image = ['https://varlet.gitee.io/varlet-ui/cat.jpg']

    const handleCloseEvent = () => {
      Snackbar({
        content: pack.value.shutdownEvent,
        duration: 1000,
      })
    }
    watchLang(use)

    return {
      preview() {
        ImagePreview(image)
      },
      pack,
      show: ref(false),
      currentShow: ref(false),
      closeShow: ref(false),
      closeEventShow: ref(false),
      images: ref(images),
      image: ref(image),
      handleCloseEvent,
    }
  },
})
</script>

<style lang="less" scoped>
.var-image-preview__image {
  pointer-events: none;
}

.image-preview-demo {
  .var-button {
    margin-top: 10px;
  }
}
</style>
