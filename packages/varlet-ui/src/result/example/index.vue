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
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-result :title="pack.success" :description="pack.description">
    <template #footer>
      <var-button type="success" @click="success = false">{{ pack.button }}</var-button>
    </template>
  </var-result>

  <app-type>{{ pack.type }}</app-type>
  <var-space direction="column" size="large">
    <var-button type="success" block @click="success = true">{{ pack.success }}</var-button>
    <var-button type="warning" block @click="warning = true">{{ pack.warning }}</var-button>
    <var-button type="info" block @click="info = true">{{ pack.info }}</var-button>
    <var-button type="danger" block @click="error = true">{{ pack.error }}</var-button>
    <var-button color="var(--result-question-color)" text-color="#fff" block @click="question = true">
      {{ pack.question }}
    </var-button>
    <var-button color="var(--result-empty-color)" text-color="#fff" block @click="empty = true">
      {{ pack.empty }}
    </var-button>
  </var-space>

  <var-popup :default-style="false" v-model:show="success">
    <var-result class="result" :title="pack.success" :description="pack.description">
      <template #footer>
        <var-button type="success" @click="success = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="error">
    <var-result class="result" type="error" :title="pack.error" :description="pack.description">
      <template #footer>
        <var-button type="danger" @click="error = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="warning">
    <var-result class="result" type="warning" :title="pack.warning" :description="pack.description">
      <template #footer>
        <var-button type="warning" @click="warning = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="info">
    <var-result class="result" type="info" :title="pack.info" :description="pack.description">
      <template #footer>
        <var-button type="info" @click="info = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="question">
    <var-result class="result" type="question" :title="pack.question" :description="pack.description">
      <template #footer>
        <var-button color="var(--result-question-color)" text-color="#fff" @click="question = false"
          >{{ pack.button }}
        </var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="empty">
    <var-result class="result" type="empty" :title="pack.empty" :description="pack.description">
      <template #footer>
        <var-button color="var(--result-empty-color)" text-color="#fff" @click="empty = false"
          >{{ pack.button }}
        </var-button>
      </template>
    </var-result>
  </var-popup>
</template>

<style scoped>
.result {
  width: 75vw;
}
</style>
