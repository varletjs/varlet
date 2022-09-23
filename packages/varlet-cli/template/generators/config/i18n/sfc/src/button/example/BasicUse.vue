<script setup>
import { watchLang } from '@varlet/cli/site/utils'
import VarButton from '../Button'
import { pack, use } from './locale'

watchLang(use)
</script>

<template>
  <var-button>{{ pack.start }}</var-button>
</template>
