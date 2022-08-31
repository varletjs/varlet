<script setup>
import { watchLang } from '@varlet/cli/site/utils'
import BButton from '../Button'
import { pack, use } from './locale'

watchLang(use)
</script>

<template>
  <b-button>{{ pack.start }}</b-button>
</template>
