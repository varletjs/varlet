<script setup>
import { Snackbar, ImagePreview, ActionSheet } from '@varlet/ui'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { ref, computed } from 'vue'
import { t, use } from './locale'

const VarImagePreview = ImagePreview.Component
const VarActionSheet = ActionSheet.Component

const show = ref(false)
const currentShow = ref(false)
const closeShow = ref(false)
const closeEventShow = ref(false)
const preventEventShow = ref(false)
const imagePreventDefault = ref(true)
const extraSlotsShow = ref(false)
const menuShow = ref(false)
const images = ref(['https://varlet.gitee.io/varlet-ui/cat.jpg', 'https://varlet.gitee.io/varlet-ui/cat2.jpg'])
const image = ref(['https://varlet.gitee.io/varlet-ui/cat.jpg'])
const actions = computed(() => [
  {
    name: t('operate'),
    icon: 'wrench',
  },
  {
    name: t('operate'),
    icon: 'wrench',
  },
])

watchLang(use)
onThemeChange()

function handleCloseEvent() {
  Snackbar({
    content: t('shutdownEvent'),
    duration: 1000,
  })
}

function handleLongPressEvent() {
  Snackbar({
    content: t('preventDefaultEvent'),
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
</script>

<template>
  <div class="image-preview-demo">
    <app-type>{{ t('functionCall') }}</app-type>
    <var-button type="primary" block @click="preview">{{ t('preview') }}</var-button>
    <var-button type="primary" block @click="previewCallback">{{ t('callBack') }}</var-button>
  </div>

  <div class="image-preview-demo">
    <app-type>{{ t('componentCall') }}</app-type>
    <var-button type="warning" block @click="show = true">{{ t('basicUse') }}</var-button>
    <var-image-preview :images="image" v-model:show="show" />

    <var-button type="warning" block @click="currentShow = true">{{ t('specifyInitialPosition') }}</var-button>
    <var-image-preview :images="images" v-model:show="currentShow" :initial-index="1" />

    <var-button type="warning" block @click="closeShow = true">{{ t('displayCloseButton') }}</var-button>
    <var-image-preview :images="images" v-model:show="closeShow" :closeable="true" />

    <var-button type="warning" block @click="closeEventShow = true">{{ t('listenCloseEvents') }}</var-button>
    <var-image-preview :images="images" v-model:show="closeEventShow" @close="handleCloseEvent" />

    <var-button type="warning" block @click="preventEventShow = true">{{ t('preventLongTapDefault') }}</var-button>
    <var-image-preview
      :images="images"
      v-model:show="preventEventShow"
      :image-prevent-default="imagePreventDefault"
      @long-press="handleLongPressEvent"
    ></var-image-preview>

    <var-button type="warning" block @click="extraSlotsShow = true">{{ t('showExtraSlots') }}</var-button>
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
