<template>
  <app-type>函数调用</app-type>
  <var-button block @click="createBasic">基本使用</var-button>
  <var-button block @click="modifyTitle">修改标题</var-button>
  <var-button block @click="hideButton">隐藏按钮</var-button>
  <var-button block @click="createAction">处理用户行为</var-button>
  <var-button block @click="asyncClose">异步关闭</var-button>

  <app-type>组件调用</app-type>
  <var-button block @click="show = true">基本使用</var-button>
  <var-dialog
    v-model:show="show"
    title="兰亭序"
    message="兰亭临帖 行书如行云流水"
    @confirm="() => Snackbar.success('confirm')"
    @cancel="() => Snackbar.error('cancel')"
    @closed="() => Snackbar.info('closed')"
  />

  <var-button block @click="show1 = true">异步关闭</var-button>
  <var-dialog
    v-model:show="show1"
    title="兰亭序"
    message="兰亭临帖 行书如行云流水"
    @before-close="onBeforeClose"
  />

  <var-button block @click="show2 = true">自定义插槽</var-button>
  <var-dialog v-model:show="show2">
    <template #title>
      <var-icon name="information" color="#2979ff" />
    </template>

    <var-cell>兰亭临帖 行书如行云流水</var-cell>
    <var-cell>兰亭临帖 行书如行云流水</var-cell>
    <var-cell>兰亭临帖 行书如行云流水</var-cell>
  </var-dialog>
</template>

<script>
import Dialog from '..'
import Button from '../../button'
import Icon from '../../icon'
import Snackbar from '../../snackbar'
import Cell from '../../cell'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { ref } from 'vue'

export default {
  name: 'DialogExample',
  components: {
    [Dialog.Component.name]: Dialog.Component,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    AppType,
  },
  setup() {
    const show = ref(false)
    const show1 = ref(false)
    const show2 = ref(false)
    const value = ref('')

    const actions = {
      confirm: () => Snackbar.success('confirm'),
      cancel: () => Snackbar.error('cancel'),
      close: () => Snackbar.info('close'),
    }

    const createBasic = () => {
      Dialog('兰亭临帖 行书如行云流水')
    }

    const createAction = async () => {
      actions[await Dialog('兰亭临帖 行书如行云流水')]()
    }

    const modifyTitle = () => {
      Dialog({
        title: '兰亭序',
        message: '兰亭临帖 行书如行云流水',
      })
    }

    const hideButton = () => {
      Dialog({
        message: '兰亭临帖 行书如行云流水',
        confirmButton: false,
        cancelButton: false,
      })
    }

    const onBeforeClose = (action, done) => {
      Snackbar.loading('正在异步关闭')

      setTimeout(() => {
        actions[action]()
        done()
      }, 1000)
    }

    const asyncClose = () => {
      Dialog({
        message: '兰亭临帖 行书如行云流水',
        onBeforeClose
      })
    }

    return {
      show,
      show1,
      show2,
      value,
      asyncClose,
      createBasic,
      createAction,
      modifyTitle,
      hideButton,
      onBeforeClose,
      Snackbar
    }
  },
}
</script>

<style scoped lang="less">
.var-button {
  margin-top: 10px;
}
</style>
