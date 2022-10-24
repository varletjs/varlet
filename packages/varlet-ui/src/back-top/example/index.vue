<script setup>
import VarBackTop from '..'
import VarCell from '../../cell'
import dark from '../../themes/dark'
import { watchDarkMode } from '@varlet/cli/client'

const lists = [...Array(100).keys()]

watchDarkMode(dark)
</script>

<template>
  <div>
    <var-cell v-for="list in lists" :key="list">Scroll to bottom {{ list }}</var-cell>
    <var-back-top :duration="300" />
  </div>
</template>
