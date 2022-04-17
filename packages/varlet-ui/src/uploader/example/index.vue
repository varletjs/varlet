<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-uploader v-model="files" @after-read="handleAfterRead" />

  <app-type>{{ pack.preview }}</app-type>
  <var-uploader v-model="files2" />

  <app-type>{{ pack.state }}</app-type>
  <var-uploader v-model="files3" @after-read="handleAfterRead2" />

  <app-type>{{ pack.maxlength }}</app-type>
  <var-uploader v-model="files4" :maxlength="1" />

  <app-type>{{ pack.maxsize }}</app-type>
  <var-uploader v-model="files5" :maxsize="1024" @oversize="handleOversize" />

  <app-type>{{ pack.beforeRead }}</app-type>
  <var-uploader v-model="files7" @before-read="handleBeforeRead" />

  <app-type>{{ pack.disabled }}</app-type>
  <var-uploader disabled v-model="files8" />

  <app-type>{{ pack.readonly }}</app-type>
  <var-uploader readonly v-model="files9" />

  <app-type>{{ pack.beforeRemove }}</app-type>
  <var-uploader v-model="files11" @before-remove="handleBeforeRemove" />

  <app-type>{{ pack.style }}</app-type>
  <var-uploader v-model="files6">
    <var-button type="primary">{{ pack.upload }}</var-button>
  </var-uploader>

  <app-type>{{ pack.validate }}</app-type>
  <var-uploader :rules="[(v, u) => u.getError().length === 0 || pack.validateMessage]" v-model="files10" />

  <app-type>{{ pack.customRender }}</app-type>
  <var-space>
    <img class="custom-uploader-file" v-for="f in files12" :key="f.id" :src="f.cover" />
    <var-uploader hide-list v-model="files12">
      <var-button round type="primary">
        <var-icon :size="28" name="upload" />
      </var-button>
    </var-uploader>
  </var-space>

  <div class="space"></div>
</template>

<script>
import VarUploader from '..'
import VarButton from '../../button'
import VarSpace from '../../space'
import VarIcon from '../../icon'
import Dialog from '../../dialog'
import Snackbar from '../../snackbar'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { reactive, toRefs } from 'vue'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'UploaderExample',
  components: {
    VarUploader,
    VarButton,
    VarSpace,
    AppType,
    VarIcon,
  },
  setup() {
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

    const handleAfterRead = (file) => console.log(file)

    const handleAfterRead2 = (file) => {
      file.state = 'loading'

      setTimeout(() => {
        file.state = 'success'
      }, 1000)
    }

    const handleOversize = () => {
      Snackbar.warning(pack.value.fileSizeExceedsLimit)
    }

    const handleBeforeRead = (file) => {
      if (file.file.size <= 1 * 1024 * 1024) {
        Snackbar.success(pack.value.fileLessThen)
        return true
      }
      Snackbar.warning(pack.value.fileLargeThen)
      return false
    }

    const handleBeforeRemove = async () => {
      const action = await Dialog({
        title: pack.value.removeTitle,
        message: pack.value.removeMessage,
      })

      return action === 'confirm'
    }

    watchLang(use)
    watchDarkMode(dark)

    return {
      pack,
      ...toRefs(values),
      handleAfterRead,
      handleAfterRead2,
      handleOversize,
      handleBeforeRead,
      handleBeforeRemove,
    }
  },
}
</script>

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
