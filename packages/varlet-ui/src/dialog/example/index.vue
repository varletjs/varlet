<script setup>
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { Dialog, Snackbar } from '@varlet/ui'
import { t, use } from './locale'

const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)

const actions = {
  confirm: () => Snackbar.success('confirm'),
  cancel: () => Snackbar.error('cancel'),
  close: () => Snackbar.info('close'),
}

watchLang(use)
onThemeChange()

function createBasic() {
  Dialog(t('message'))
}

async function createAction() {
  actions[await Dialog(t('message'))]()
}

function modifyTitle() {
  Dialog({
    title: t('title'),
    message: t('message'),
  })
}

function hideButton() {
  Dialog({
    message: t('message'),
    confirmButton: false,
    cancelButton: false,
  })
}

function onBeforeClose(action, done) {
  Snackbar.loading(t('asyncCloseProgress'))

  setTimeout(() => {
    actions[action]()
    done()
  }, 1000)
}

function asyncClose() {
  Dialog({
    message: t('message'),
    onBeforeClose,
  })
}
</script>

<template>
  <app-type>{{ t('functionCall') }}</app-type>
  <var-button type="primary" block @click="createBasic">{{ t('basicUsage') }}</var-button>
  <var-button type="primary" block @click="modifyTitle">{{ t('modifyTitle') }}</var-button>
  <var-button type="primary" block @click="hideButton">{{ t('hideButton') }}</var-button>
  <var-button type="primary" block @click="createAction">{{ t('handleUserBehavior') }}</var-button>
  <var-button type="primary" block @click="asyncClose">{{ t('asyncClose') }}</var-button>

  <app-type>{{ t('componentCall') }}</app-type>
  <var-button type="warning" block @click="show = true">{{ t('basicUsage') }}</var-button>
  <var-dialog
    v-model:show="show"
    :title="t('title')"
    :message="t('message')"
    @confirm="Snackbar.success('confirm')"
    @cancel="Snackbar.error('cancel')"
    @closed="Snackbar.info('closed')"
  />

  <var-button type="warning" block @click="show1 = true">{{ t('asyncClose') }}</var-button>
  <var-dialog v-model:show="show1" :title="t('title')" :message="t('message')" @before-close="onBeforeClose" />

  <var-button type="warning" block @click="show2 = true">{{ t('customSlots') }}</var-button>
  <var-dialog v-model:show="show2">
    <template #title>
      <var-icon name="information" color="var(--color-primary)" />
    </template>

    <var-cell>{{ t('message') }}</var-cell>
    <var-cell>{{ t('message') }}</var-cell>
    <var-cell>{{ t('message') }}</var-cell>
  </var-dialog>
</template>

<style scoped lang="less">
.var-button {
  margin-bottom: 11px;
}
</style>
