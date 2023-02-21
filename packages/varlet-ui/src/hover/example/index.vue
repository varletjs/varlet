<script setup>
import VarSpace from '../../space'
import VarButton from '../../button'
import vHover from '../../hover'
import { pack, use } from './locale'
import { watchLang, AppType } from '@varlet/cli/client'

const Hovering = (isHovering) => {
  console.log('isHovering', isHovering)
}

watchLang(use)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-space>
    <var-button type="primary" v-hover="{ backgroundColor: 'var(--button-success-color)' }"> VUE3 </var-button>
    <var-button type="primary" v-hover="Hovering"> VARLET </var-button>
  </var-space>
</template>
