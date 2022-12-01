<script setup>
import VarResult from '../index'
import VarButton from '../../button'
import VarPopup from '../../popup'
import VarSpace from '../../space'
import dark from '../../themes/dark'
import { AppType, watchDarkMode, watchLang } from '@varlet/cli/client'
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
    <var-button color="var(--result-question-color)" text-color="#fff" block @click="question = true">{{
      pack.question
    }}</var-button>
    <var-button color="var(--result-empty-color)" text-color="#fff" block @click="empty = true">{{
      pack.empty
    }}</var-button>
  </var-space>

  <app-type>{{ pack.useSlot }}</app-type>
  <var-result :title="pack.titleSlot" :description="pack.descriptionSlot">
    <template #image>
      <svg viewBox="0 0 48 48" class="music">
        <circle cx="24" cy="24" fill="#37474f" r="19" />
        <circle cx="24" cy="24" fill="#263238" r="18" />
        <g fill="#37474f">
          <path d="m41.022 29.815-17.022-5.815 5.815 17.022c5.257-1.796 9.41-5.95 11.207-11.207z" />
          <path d="m6.978 18.185 17.022 5.815-5.815-17.022c-5.257 1.797-9.41 5.95-11.207 11.207z" />
        </g>
        <path d="m24 17c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z" fill="var(--color-warning)" />
        <circle cx="24" cy="24" r="1" />
      </svg>
    </template>
    <template #footer>
      <var-button type="warning">{{ pack.vme }}</var-button>
    </template>
  </var-result>

  <var-popup v-model:show="success" :close-on-click-overlay="false">
    <var-result class="result" type="success" :title="pack.success" :description="pack.description">
      <template #footer>
        <var-button type="success" @click="success = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup v-model:show="error">
    <var-result class="result" type="error" :title="pack.error" :description="pack.description">
      <template #footer>
        <var-button type="danger" @click="error = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup v-model:show="warning">
    <var-result class="result" type="warning" :title="pack.warning" :description="pack.description">
      <template #footer>
        <var-button type="warning" @click="warning = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup v-model:show="info">
    <var-result class="result" type="info" :title="pack.info" :description="pack.description">
      <template #footer>
        <var-button type="info" @click="info = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup v-model:show="question">
    <var-result class="result" type="question" :title="pack.question" :description="pack.description">
      <template #footer>
        <var-button color="#607d8b" text-color="#fff" @click="question = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup v-model:show="empty">
    <var-result class="result" type="empty" :title="pack.empty" :description="pack.description">
      <template #footer>
        <var-button color="#9e9e9e" text-color="#fff" @click="empty = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>
</template>

<style scoped>
.result {
  width: 75vw;
}

.music {
  width: 50vw;
  animation: rotate 6s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
