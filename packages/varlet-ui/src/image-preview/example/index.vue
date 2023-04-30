<script setup>
import ImagePreview from '../index'
import VarButton from '../../button'
import VarIcon from '../../icon'
import ActionSheet from '../../action-sheet'
import Snackbar from '../../snackbar'
import dark from '../../themes/dark'
import { AppType, watchDarkMode, watchLang } from '@varlet/cli/client'
import { ref, computed } from 'vue'
import { pack, use } from './locale'

const VarImagePreview = ImagePreview.Component
const VarActionSheet = ActionSheet.Component

const show = ref(false)
const currentShow = ref(false)
const closeShow = ref(false)
const closeEventShow = ref(false)
const extraSlotsShow = ref(false)
const menuShow = ref(false)
const images = ref(['https://varlet.gitee.io/varlet-ui/cat.jpg', 'https://varlet.gitee.io/varlet-ui/cat2.jpg'])
const image = ref(['https://varlet.gitee.io/varlet-ui/cat.jpg'])
const actions = computed(() => [
  {
    name: pack.value.operate,
    icon: 'wrench',
  },
  {
    name: pack.value.operate,
    icon: 'wrench',
  },
])

function handleCloseEvent() {
  Snackbar({
    content: pack.value.shutdownEvent,
    duration: 1000,
  })
}

function preview() {
  ImagePreview(image.value)
}

function previewCallback() {
  ImagePreview({
    images,
    onChange: (index) => {
      console.log('index', index)
    },
  })
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <div class="image-preview-demo">
    <app-type>{{ pack.functionCall }}</app-type>
    <var-button type="primary" block @click="preview">{{ pack.preview }}</var-button>
    <var-button type="primary" block @click="previewCallback">{{ pack.callBack }}</var-button>
  </div>

  <div class="image-preview-demo">
    <app-type>{{ pack.componentCall }}</app-type>
    <var-button type="warning" block @click="show = true">{{ pack.basicUse }}</var-button>
    <var-image-preview :images="image" v-model:show="show" />

    <var-button type="warning" block @click="currentShow = true">{{ pack.specifyInitialPosition }}</var-button>
    <var-image-preview
      :images="images"
      v-model:show="currentShow"
      current="https://varlet.gitee.io/varlet-ui/cat2.jpg"
    />

    <var-button type="warning" block @click="closeShow = true">{{ pack.displayCloseButton }}</var-button>
    <var-image-preview :images="images" v-model:show="closeShow" :closeable="true" />

    <var-button type="warning" block @click="closeEventShow = true">{{ pack.listenCloseEvents }}</var-button>
    <var-image-preview :images="images" v-model:show="closeEventShow" @close="handleCloseEvent" />

    <var-button type="warning" block @click="extraSlotsShow = true">{{ pack.showExtraSlots }}</var-button>
    <var-image-preview :images="images" v-model:show="extraSlotsShow">
      <template #extra>
        <var-icon name="menu" :size="22" color="#fff" @click="menuShow = true" />
        <var-action-sheet :actions="actions" v-model:show="menuShow" />
      </template>
    </var-image-preview>
  </div>
</template>

<style lang="less" scoped>
.image-preview-demo {
  .var-button {
    margin-bottom: 14px;
  }

  .extra-btn {
    margin-top: 0;
  }
}
</style>
