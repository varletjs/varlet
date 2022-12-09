<script setup>
import { ref } from 'vue'
import LoadingBar from '..'
import VarButton from '../../button'
import Snackbar from '../../snackbar'
import { watchLang, AppType, watchDarkMode } from '@varlet/cli/client'
import { use, pack } from './locale'
import dark from '../../themes/dark'

const isClear = ref(false)

LoadingBar({
  top: '48px',
})

const setStyle = () => {
  LoadingBar({
    errorColor: isClear.value ? undefined : '#ff8800',
    color: isClear.value ? undefined : '#10afef',
    height: isClear.value ? undefined : '5px',
  })

  isClear.value = !isClear.value

  Snackbar.success('success')
}

watchDarkMode(dark)
watchLang(use)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-button type="primary" block @click="LoadingBar.start()">{{ pack.start }}</var-button>
  <var-button type="primary" block @click="LoadingBar.finish()">{{ pack.finish }}</var-button>
  <var-button type="primary" block @click="LoadingBar.error()">{{ pack.error }}</var-button>
  <var-button type="primary" block @click="setStyle">{{ isClear ? pack.clear : pack.custom }}</var-button>
</template>

<style scoped lang="less">
.var-button {
  margin-bottom: 11px;
}
</style>
