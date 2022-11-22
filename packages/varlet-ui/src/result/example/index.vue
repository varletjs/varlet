<script setup>
import VarResult from '../index'
import VarButton from '../../button'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type>Mobile phone example code</app-type>
  <var-result
    status="success"
    description="descriptiondescriptiondescriptiondescriptiondescriptiondescription"
    title="title"
  >
    <template #footer>
      <var-button type="success">success</var-button>
    </template>
  </var-result>
</template>
