<script setup>
import VarResult from '../index'
import VarButton from '../../button'
import { AppType, watchDarkMode, watchLang } from '@varlet/cli/client'
import dark from '../../themes/dark'
import { use } from './locale'
import { ref } from 'vue'

const showSuccessResult = ref(true)

const handleClickSuccess = () => {
  showSuccessResult.value = false
  setTimeout(() => {
    showSuccessResult.value = true
  })
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>success</app-type>
  <var-result
    v-if="showSuccessResult"
    status="success"
    title="SuccessSuccessSuccess"
    description="This is success description.This is success description.This is success description."
  >
    <template #footer>
      <var-button type="success" @click="handleClickSuccess">success</var-button>
    </template>
  </var-result>

  <app-type>error</app-type>
  <var-result status="error" title="Error" description="This is error description.">
    <template #footer>
      <var-button type="danger">error</var-button>
    </template>
  </var-result>

  <app-type>warning</app-type>
  <var-result status="warning" title="Warning" description="This is warning description.">
    <template #footer>
      <var-button type="warning">warning</var-button>
    </template>
  </var-result>

  <app-type>info</app-type>
  <var-result status="info" title="Info" description="This is info description.">
    <template #footer>
      <var-button type="info">info</var-button>
    </template>
  </var-result>

  <app-type>question</app-type>
  <var-result status="question" title="Question" description="This is question description.">
    <template #footer>
      <var-button color="#607d8b" text-color="#fff">question</var-button>
    </template>
  </var-result>

  <app-type>empty</app-type>
  <var-result status="empty" title="Empty" description="This is empty description.">
    <template #footer>
      <var-button color="#9E9E9E" text-color="#fff">empty</var-button>
    </template>
  </var-result>
</template>
