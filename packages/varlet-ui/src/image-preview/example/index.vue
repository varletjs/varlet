<template>
  <div class="image-preview-demo">
    <app-type>{{ pack.functionCall }} </app-type>
    <var-button type="primary" block @click="preview"> {{ pack.preview }} </var-button>
    <var-button type="primary" block @click="previewCallback"> {{ pack.callBack }} </var-button>
  </div>

  <div class="image-preview-demo">
    <app-type>{{ pack.componentCall }} </app-type>
    <var-button type="warning" block @click="show = true">{{ pack.basicUse }} </var-button>
    <var-image-preview :images="image" v-model:show="show" />

    <var-button type="warning" block @click="currentShow = true">{{ pack.specifyInitialPosition }} </var-button>
    <var-image-preview
      :images="images"
      v-model:show="currentShow"
      current="https://varlet.gitee.io/varlet-ui/cat2.jpg"
    />

    <var-button type="warning" block @click="closeShow = true">{{ pack.displayCloseButton }} </var-button>
    <var-image-preview :images="images" v-model:show="closeShow" :closeable="true" />

    <var-button type="warning" block @click="closeEventShow = true">{{ pack.listenCloseEvents }} </var-button>
    <var-image-preview :images="images" v-model:show="closeEventShow" @close="handleCloseEvent" />
  </div>
</template>

<script>
import VarImagePreview from '../index'
import VarButton from '../../button'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Snackbar from '../../snackbar'
import { defineComponent, onUnmounted, ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchPlatform } from '@varlet/cli/site/utils'
import context from '../../context'

export default defineComponent({
  name: 'ImagePreviewExample',
  components: {
    VarImagePreview: VarImagePreview.Component,
    VarButton,
    AppType,
  },
  setup() {
    const images = ['https://varlet.gitee.io/varlet-ui/cat.jpg', 'https://varlet.gitee.io/varlet-ui/cat2.jpg']

    const image = ['https://varlet.gitee.io/varlet-ui/cat.jpg']

    const handleCloseEvent = () => {
      Snackbar({
        content: pack.value.shutdownEvent,
        duration: 1000,
      })
    }

    const previewCallback = () => {
      VarImagePreview({
        images,
        onChange: (index) => {
          console.log('index', index)
        },
      })
    }

    watchLang(use)

    const prevTouchmoveForbid = context.touchmoveForbid
    watchPlatform((platform) => {
      if (platform === 'pc') {
        context.touchmoveForbid = false
      }
    })
    onUnmounted(() => {
      context.touchmoveForbid = prevTouchmoveForbid
    })

    return {
      preview() {
        VarImagePreview(image)
      },
      previewCallback,
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
.image-preview-demo {
  .var-button {
    margin-top: 10px;
  }
}
</style>
