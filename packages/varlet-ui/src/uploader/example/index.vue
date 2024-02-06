<script setup>
import { Snackbar, Dialog } from '@varlet/ui'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { reactive, onUnmounted } from 'vue'
import { use, t } from './locale'

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
  files13: [],
  files14: [],
  files15: [],
})

let timer

watchLang(use)
onThemeChange()

onUnmounted(() => {
  window.clearInterval(timer)
})

function handleAfterRead(file) {
  console.log(file)
}

function handleAfterRead2(file) {
  file.state = 'loading'

  setInterval(() => {
    file.state = 'success'
  }, 1000)
}

function handleAfterRead3(file) {
  file.state = 'loading'
  file.progress = 0

  timer = window.setInterval(() => {
    if (file.progress === 100) {
      window.clearInterval(timer)
      file.state = 'success'
      return
    }
    file.progress += 10
  }, 250)
}

function handleOversize() {
  Snackbar.warning(t('fileSizeExceedsLimit'))
}

function handleBeforeRead(file) {
  if (file.file.size <= 1 * 1024 * 1024) {
    Snackbar.success(t('fileLessThen'))
    return true
  }
  Snackbar.warning(t('fileLargeThen'))
  return false
}

async function handleBeforeRemove() {
  const action = await Dialog({
    title: t('removeTitle'),
    message: t('removeMessage'),
  })

  return action === 'confirm'
}

function handleBeforeFilter(files) {
  return files.filter((file) => file.name.endsWith('png'))
}

function handlePreview(file) {
  Dialog({
    title: t('customPreview'),
    message: file.url.slice(0, 100),
  })
}

function handleActionClick(chooseFile) {
  Snackbar.loading('delay 1s')

  setTimeout(() => {
    Snackbar.clear()
    chooseFile()
  }, 1000)
}
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-uploader v-model="values.files" @after-read="handleAfterRead" />

  <app-type>{{ t('preview') }}</app-type>
  <var-uploader v-model="values.files2" />

  <app-type>{{ t('customPreview') }}</app-type>
  <var-uploader v-model="values.files11" prevent-default-preview @preview="handlePreview" />

  <app-type>{{ t('state') }}</app-type>
  <var-uploader v-model="values.files3" @after-read="handleAfterRead2" />

  <app-type>{{ t('useProgress') }}</app-type>
  <var-uploader v-model="values.files13" @after-read="handleAfterRead3" />

  <app-type>{{ t('maxlength') }}</app-type>
  <var-uploader v-model="values.files4" :maxlength="1" />

  <app-type>{{ t('maxsize') }}</app-type>
  <var-uploader v-model="values.files5" :maxsize="1024" @oversize="handleOversize" />

  <app-type>{{ t('beforeFilter') }}</app-type>
  <var-uploader v-model="values.files14" multiple @before-filter="handleBeforeFilter" />

  <app-type>{{ t('beforeRead') }}</app-type>
  <var-uploader v-model="values.files7" @before-read="handleBeforeRead" />

  <app-type>{{ t('clickAction') }}</app-type>
  <var-uploader v-model="values.files15" @click-action="handleActionClick" />

  <app-type>{{ t('disabled') }}</app-type>
  <var-uploader disabled v-model="values.files8" />

  <app-type>{{ t('readonly') }}</app-type>
  <var-uploader readonly v-model="values.files9" />

  <app-type>{{ t('beforeRemove') }}</app-type>
  <var-uploader v-model="values.files11" @before-remove="handleBeforeRemove" />

  <app-type>{{ t('style') }}</app-type>
  <var-uploader v-model="values.files6">
    <var-button type="primary">{{ t('upload') }}</var-button>
  </var-uploader>

  <app-type>{{ t('validate') }}</app-type>
  <var-uploader :rules="[(v, u) => u.getError().length === 0 || t('validateMessage')]" v-model="values.files10" />

  <app-type>{{ t('customRender') }}</app-type>
  <var-space>
    <img class="custom-uploader-file" v-for="f in values.files12" :key="f.id" :src="f.cover" />
    <var-uploader hide-list v-model="values.files12">
      <var-button round type="primary">
        <var-icon :size="28" name="upload" />
      </var-button>
    </var-uploader>
  </var-space>

  <var-space></var-space>
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
