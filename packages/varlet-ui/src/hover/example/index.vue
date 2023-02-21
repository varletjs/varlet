<script setup>
import VarSpace from '../../space'
import VarButton from '../../button'
import vHover from '../../hover'
import { pack, use } from './locale'
import { watchLang, AppType } from '@varlet/cli/client'
import { ref } from 'vue'

const count = ref(0)

const handleHover = (hovering) => {
  console.log('hovering', hovering)
}

function handleClick() {
  count.value++
}

watchLang(use)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-space>
    <var-button
      type="primary"
      v-hover="{ background: 'green' }"
      :style="{ background: count > 0 ? 'red' : undefined }"
      @click="handleClick"
    >
      {{ count }}
    </var-button>
    <var-button type="primary" v-hover="handleHover"> VARLET </var-button>
  </var-space>
</template>
