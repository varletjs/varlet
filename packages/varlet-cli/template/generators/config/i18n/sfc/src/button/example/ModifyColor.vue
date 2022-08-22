<script setup>
import { watchLang } from '@varlet/cli/site/utils'
import BButton from '../Button'
import { pack, use } from './locale'

watchLang(use, 'pc')
</script>

<template>
  <b-button color="#03A9F4">{{ pack.start }}</b-button>
</template>
