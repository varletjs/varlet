<script setup lang="ts">
import VarSpace from '../../space'
import VarButton from '../../button'
import vHover from '../../hover'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode, AppType } from '@varlet/cli/client'

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <div class="">
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-space>
      <var-button type="primary" v-hover="{ background: '#fff', color: '#000' }">VUE3</var-button>
      <var-button type="primary" v-hover="'background-color:var(--button-success-color)'">VARLET</var-button>
    </var-space>
  </div>
</template>
