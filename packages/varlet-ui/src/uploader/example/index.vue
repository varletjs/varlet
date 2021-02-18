<template>
  <var-uploader
    style="margin-top: 20px"
    multiple
    :maxlength="3"
    :maxsize="200000000000"
    @before-read="beforeRead"
    @after-read="afterRead"
    @oversize="oversize"
    accept="*"
    :rules="[(_, { getSuccessFiles }) => getSuccessFiles().length >= 3 || '成功上传少于3张']"
    v-model="files"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import Uploader from '..'

export default defineComponent({
  name: 'UploaderExample',
  components: {
    [Uploader.name]: Uploader,
  },
  setup() {
    const files = ref([])

    return {
      files,
      oversize(f) {},
      beforeRead(f) {
        return true
      },
      afterRead(f) {
        f.state = 'loading'

        setTimeout(() => {
          f.state = 'success'
        }, 1000)
      },
    }
  },
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
