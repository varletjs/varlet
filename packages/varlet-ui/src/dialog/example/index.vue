<template>
  <var-dialog
    v-model:show="show"
    title="哈哈哈"
    message="啊实打实打算"
    @confirm="() => log('confirm')"
    @cancel="() => log('cancel')"
    @open="() => log('open')"
    @close="() => log('close')"
    @opened="() => log('opened')"
    @closed="() => log('closed')"
    @click-overlay="() => log('click-overlay')"
    :before-close="handleBeforeClose"
  >
  </var-dialog>

  <var-button type="success" size="large" @click="show = true">开启</var-button>
  <var-button type="success" size="large" @click="create">命令开启</var-button>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import Dialog from '..'
import Button from '../../button'

export default defineComponent({
  name: 'DialogExample',
  components: {
    [Dialog.Component.name]: Dialog.Component,
    [Button.name]: Button
  },
  setup() {
    const show: Ref<boolean> = ref(false)

    return {
      show,
      log(message: string) {
        console.log(message)
      },
      handleBeforeClose(done: () => void) {
        console.log('2秒关闭...')
        setTimeout(() => {
          done()
        }, 2000)
      },
      async create() {
        const state = await Dialog({
          title: '测试',
          cancelButton: false,
          message: '哈哈哈哈哈'
        })
      }
    }
  }
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
