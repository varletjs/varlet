<script setup>
import VarResult from '../index'
import VarButton from '../../button'
import VarPopup from '../../popup'
import VarSpace from '../../space'
import VarImage from '../../image'
import { AppType, watchDarkMode, watchLang } from '@varlet/cli/client'
import dark from '../../themes/dark'
import { use, pack } from './locale'
import { ref } from 'vue'

const success = ref(false)
const error = ref(false)
const info = ref(false)
const warning = ref(false)
const question = ref(false)
const empty = ref(false)

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.type }}</app-type>
  <var-space direction="column" size="large">
    <var-button type="success" block @click="success = true">{{ pack.success }}</var-button>
    <var-button type="danger" block @click="error = true">{{ pack.error }}</var-button>
    <var-button type="info" block @click="info = true">{{ pack.info }}</var-button>
    <var-button type="warning" block @click="warning = true">{{ pack.warning }}</var-button>
    <var-button color="#607d8b" block text-color="#fff" @click="question = true">{{ pack.question }}</var-button>
    <var-button color="#9E9E9E" block text-color="#fff" @click="empty = true">{{ pack.empty }}</var-button>
  </var-space>

  <app-type>{{ pack.useSlot }}</app-type>
  <var-result class="var-elevation--1">
    <template #image>
      <var-image src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </template>
    <template #title>
      <h2>{{ pack.titleSlot }}</h2>
    </template>
    <template #description>
      <div>{{ pack.descriptionSlot }}</div>
    </template>
    <template #footer>
      <var-button type="success" @click="handleClickSuccess">success</var-button>
    </template>
  </var-result>

  <var-popup v-model:show="success" :close-on-click-overlay="false">
    <var-result type="success" :title="pack.success" :description="pack.description">
      <template #footer>
        <var-button type="success" @click="success = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup v-model:show="error" :close-on-click-overlay="false">
    <var-result type="error" :title="pack.error" :description="pack.description">
      <template #footer>
        <var-button type="danger" @click="error = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup v-model:show="warning" :close-on-click-overlay="false">
    <var-result type="warning" :title="pack.warning" :description="pack.description">
      <template #footer>
        <var-button type="warning" @click="warning = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup v-model:show="info" :close-on-click-overlay="false">
    <var-result type="info" :title="pack.info" :description="pack.description">
      <template #footer>
        <var-button type="info" @click="info = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup v-model:show="question" :close-on-click-overlay="false">
    <var-result type="question" :title="pack.question" :description="pack.description">
      <template #footer>
        <var-button color="#607d8b" text-color="#fff" @click="question = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup v-model:show="empty" :close-on-click-overlay="false">
    <var-result type="empty" :title="pack.empty" :description="pack.description">
      <template #footer>
        <var-button color="#9E9E9E" text-color="#fff" @click="empty = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>
</template>

<style scoped>
.var-result {
  min-width: 80vw;
}
</style>
