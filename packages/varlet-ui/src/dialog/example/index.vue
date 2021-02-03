<template>
  <app-type>声明式调用</app-type>
  <!--  <var-dialog-->
  <!--    v-model:show="show"-->
  <!--    title="哈哈哈"-->
  <!--    message="测试声明式调用测试声明式调用测试声明式调用测试声明式调用测试声明式调用测试声明式调用测试声明式调用"-->
  <!--    @confirm="() => log('confirm')"-->
  <!--    @cancel="() => log('cancel')"-->
  <!--    @open="() => log('open')"-->
  <!--    @close="() => log('close')"-->
  <!--    @opened="() => log('opened')"-->
  <!--    @closed="() => log('closed')"-->
  <!--    @click-overlay="() => log('click-overlay')"-->
  <!--  />-->

  <!--  <var-button type="success" size="large" @click="show = true">开启</var-button>-->
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
    [Button.name]: Button,
  },
  setup() {
    const show: Ref<boolean> = ref(false)

    const handleBeforeClose = (done: () => void) => {
      console.log('2秒关闭...')
      setTimeout(() => {
        done()
      }, 2000)
    }

    const log = (message: string) => console.log(message)

    const create = async () => {
      await Dialog({
        title: '测试',
        cancelButton: false,
        message: '测试文字测试文字测试文字测试文字测试文字测试文字测试文字',
      })
      await Dialog({
        title: '测试2',
        cancelButton: false,
        message: '测试文字测试文字测试文字测试文字测试文字测试文字测试文字',
      })

      // setTimeout(() => {
      //   Dialog.close()
      //
      //   Dialog({
      //     title: '测试123',
      //     cancelButton: false,
      //     message: '12312312',
      //   })
      // }, 2000)

      // console.log(state)
    }

    return {
      show,
      log,
      handleBeforeClose,
      create,
    }
  },
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
