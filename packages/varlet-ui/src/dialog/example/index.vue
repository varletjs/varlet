<template>
  <app-type>{{ pack.functionCall }}</app-type>
  <var-button type="primary" block @click="createBasic">{{ pack.basicUsage }}</var-button>
  <var-button type="primary" block @click="modifyTitle">{{ pack.modifyTitle }}</var-button>
  <var-button type="primary" block @click="hideButton">{{ pack.hideButton }}</var-button>
  <var-button type="primary" block @click="createAction">{{ pack.handleUserBehavior }}</var-button>
  <var-button type="primary" block @click="asyncClose">{{ pack.asyncClose }}</var-button>

  <app-type>{{ pack.componentCall }}</app-type>
  <var-button type="primary" block @click="show = true">{{ pack.basicUsage }}</var-button>
  <var-dialog
    v-model:show="show"
    :title="pack.title"
    :message="pack.message"
    @confirm="() => Snackbar.success('confirm')"
    @cancel="() => Snackbar.error('cancel')"
    @closed="() => Snackbar.info('closed')"
  />

  <var-button type="primary" block @click="show1 = true">{{ pack.asyncClose }}</var-button>
  <var-dialog v-model:show="show1" :title="pack.title" :message="pack.message" @before-close="onBeforeClose" />

  <var-button type="primary" block @click="show2 = true">{{ pack.customSlots }}</var-button>
  <var-dialog v-model:show="show2">
    <template #title>
      <var-icon name="information" color="#2979ff" />
    </template>

    <var-cell>{{ pack.message }}</var-cell>
    <var-cell>{{ pack.message }}</var-cell>
    <var-cell>{{ pack.message }}</var-cell>
  </var-dialog>
</template>

<script>
import Dialog from '../index'
import Button from '../../button'
import Icon from '../../icon'
import Snackbar from '../../snackbar'
import Cell from '../../cell'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { ref } from 'vue'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'

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

    const createBasic = () =>
      Dialog({
        message: pack.value.message,
      })

    const createAction = async () => actions[await Dialog(pack.value.message)]()

    const modifyTitle = () => {
      Dialog({
        title: pack.value.title,
        message: pack.value.message,
      })
    }

    const hideButton = () => {
      Dialog({
        message: pack.value.message,
        confirmButton: false,
        cancelButton: false,
      })
    }

    const onBeforeClose = (action, done) => {
      Snackbar.loading(pack.value.asyncCloseProgress)

      setTimeout(() => {
        actions[action]()
        done()
      }, 1000)
    }

    const asyncClose = () => {
      Dialog({
        message: pack.value.message,
        onBeforeClose,
      })
    }

    watchLang(use)

    return {
      pack,
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
      Snackbar,
    }
  },
}
</script>

<style scoped lang="less">
.var-button {
  margin-top: 10px;
}
</style>
