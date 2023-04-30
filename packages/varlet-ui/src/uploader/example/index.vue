<script setup>
import VarUploader from '..'
import VarButton from '../../button'
import VarSpace from '../../space'
import VarIcon from '../../icon'
import Dialog from '../../dialog'
import Snackbar from '../../snackbar'
import dark from '../../themes/dark'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { reactive } from 'vue'
import { use, pack } from './locale'

const values = reactive({
  files: [],
  files2: [
    {
      url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
    },
    {
      url: 'https://www.runoob.com/try/demo_source/mov_bbb.mp4',
      cover: 'https://varlet.gitee.io/varlet-ui/cover.jpg',
    },
  ],
  files3: [
    {
      url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      state: 'loading',
    },
    {
      url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      state: 'success',
    },
    {
      url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      state: 'error',
    },
  ],
  files4: [],
  files5: [],
  files6: [],
  files7: [],
  files8: [],
  files9: [],
  files10: [
    {
      url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      state: 'error',
    },
  ],
  files11: [
    {
      url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
    },
  ],
  files12: [
    {
      url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      state: 'loading',
    },
    {
      url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      state: 'success',
    },
    {
      url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      state: 'error',
    },
  ],
})

function handleAfterRead(file) {
  console.log(file)
}

function handleAfterRead2(file) {
  file.state = 'loading'

  setTimeout(() => {
    file.state = 'success'
  }, 1000)
}

function handleOversize() {
  Snackbar.warning(pack.value.fileSizeExceedsLimit)
}

function handleBeforeRead(file) {
  if (file.file.size <= 1 * 1024 * 1024) {
    Snackbar.success(pack.value.fileLessThen)
    return true
  }
  Snackbar.warning(pack.value.fileLargeThen)
  return false
}

async function handleBeforeRemove() {
  const action = await Dialog({
    title: pack.value.removeTitle,
    message: pack.value.removeMessage,
  })

  return action === 'confirm'
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-uploader v-model="values.files" @after-read="handleAfterRead" />

  <app-type>{{ pack.preview }}</app-type>
  <var-uploader v-model="values.files2" />

  <app-type>{{ pack.state }}</app-type>
  <var-uploader v-model="values.files3" @after-read="handleAfterRead2" />

  <app-type>{{ pack.maxlength }}</app-type>
  <var-uploader v-model="values.files4" :maxlength="1" />

  <app-type>{{ pack.maxsize }}</app-type>
  <var-uploader v-model="values.files5" :maxsize="1024" @oversize="handleOversize" />

  <app-type>{{ pack.beforeRead }}</app-type>
  <var-uploader v-model="values.files7" @before-read="handleBeforeRead" />

  <app-type>{{ pack.disabled }}</app-type>
  <var-uploader disabled v-model="values.files8" />

  <app-type>{{ pack.readonly }}</app-type>
  <var-uploader readonly v-model="values.files9" />

  <app-type>{{ pack.beforeRemove }}</app-type>
  <var-uploader v-model="values.files11" @before-remove="handleBeforeRemove" />

  <app-type>{{ pack.style }}</app-type>
  <var-uploader v-model="values.files6">
    <var-button type="primary">{{ pack.upload }}</var-button>
  </var-uploader>

  <app-type>{{ pack.validate }}</app-type>
  <var-uploader :rules="[(v, u) => u.getError().length === 0 || pack.validateMessage]" v-model="values.files10" />

  <app-type>{{ pack.customRender }}</app-type>
  <var-space>
    <img class="custom-uploader-file" v-for="f in values.files12" :key="f.id" :src="f.cover" />
    <var-uploader hide-list v-model="values.files12">
      <var-button round type="primary">
        <var-icon :size="28" name="upload" />
      </var-button>
    </var-uploader>
  </var-space>

  <div class="space"></div>
</template>

<style scoped lang="less">
.space {
  height: 40px;
}

.custom-uploader-file {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 12px;
  object-fit: cover;
}
</style>
