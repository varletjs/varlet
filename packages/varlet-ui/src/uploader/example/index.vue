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
  <var-uploader :rules="[(v, u) => u.getError(v).length === 0 || pack.validateMessage]" v-model="files10" />

  <div class="space"></div>
</template>

<script>
import VarUploader from '..'
import VarButton from '../../button'
import Dialog from '../../dialog'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { reactive, toRefs } from 'vue'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'UploaderExample',
  components: {
    VarUploader,
    VarButton,
    AppType,
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
    })

    const handleAfterRead = (file) => console.log(file)

    const handleAfterRead2 = (file) => {
      file.state = 'loading'

      setTimeout(() => {
        file.state = 'success'
      }, 1000)
    }

    const handleOversize = (file) => console.log(file)

    const handleBeforeRead = (file) => file.file.size <= 1024 * 10

    const handleBeforeRemove = async () => {
      const action = await Dialog({
        title: pack.value.removeTitle,
        message: pack.value.removeMessage,
      })

      return action === 'confirm'
    }

    watchLang(use)

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
</style>
