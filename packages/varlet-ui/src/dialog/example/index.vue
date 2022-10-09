<script setup>
import Dialog from '../index'
import VarButton from '../../button'
import VarIcon from '../../icon'
import Snackbar from '../../snackbar'
import VarCell from '../../cell'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { reactive, toRefs } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

const VarDialog = Dialog.Component

const values = reactive({
  show: false,
  show1: false,
  show2: false,
})

const { show, show1, show2 } = toRefs(values)

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
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.functionCall }}</app-type>
  <var-button type="primary" block @click="createBasic">{{ pack.basicUsage }}</var-button>
  <var-button type="primary" block @click="modifyTitle">{{ pack.modifyTitle }}</var-button>
  <var-button type="primary" block @click="hideButton">{{ pack.hideButton }}</var-button>
  <var-button type="primary" block @click="createAction">{{ pack.handleUserBehavior }}</var-button>
  <var-button type="primary" block @click="asyncClose">{{ pack.asyncClose }}</var-button>

  <app-type>{{ pack.componentCall }}</app-type>
  <var-button type="warning" block @click="show = true">{{ pack.basicUsage }}</var-button>
  <var-dialog
    v-model:show="show"
    :title="pack.title"
    :message="pack.message"
    @confirm="() => Snackbar.success('confirm')"
    @cancel="() => Snackbar.error('cancel')"
    @closed="() => Snackbar.info('closed')"
  />

  <var-button type="warning" block @click="show1 = true">{{ pack.asyncClose }}</var-button>
  <var-dialog v-model:show="show1" :title="pack.title" :message="pack.message" @before-close="onBeforeClose" />

  <var-button type="warning" block @click="show2 = true">{{ pack.customSlots }}</var-button>
  <var-dialog v-model:show="show2">
    <template #title>
      <var-icon name="information" color="#2979ff" />
    </template>

    <var-cell>{{ pack.message }}</var-cell>
    <var-cell>{{ pack.message }}</var-cell>
    <var-cell>{{ pack.message }}</var-cell>
  </var-dialog>
</template>

<style scoped lang="less">
.var-button {
  margin-bottom: 11px;
}
</style>
