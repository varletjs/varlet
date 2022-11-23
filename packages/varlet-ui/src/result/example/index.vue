<script setup>
import VarResult from '../index'
import VarButton from '../../button'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'
import { ref } from 'vue'

const showSuccessResult = ref(true)

const handleClickSuccess = () => {
  showSuccessResult.value = false
  setTimeout(() => {
    showSuccessResult.value = true
  })
}

watchLang(use)
</script>

<template>
  <app-type>Mobile phone example code</app-type>
  <var-result
    v-if="showSuccessResult"
    status="success"
    description="descriptiondescriptiondescriptiondescriptiondescriptiondescription"
    title="title"
  >
    <template #footer>
      <var-button type="success" @click="handleClickSuccess">success</var-button>
    </template>
  </var-result>
</template>
