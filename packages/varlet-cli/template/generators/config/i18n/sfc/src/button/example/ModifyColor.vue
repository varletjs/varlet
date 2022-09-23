<script setup>
import { watchLang } from '@varlet/cli/site/utils'
import VarButton from '../Button'
import { pack, use } from './locale'

watchLang(use, 'pc')
</script>

<template>
  <var-button color="#03A9F4">{{ pack.start }}</var-button>
</template>
