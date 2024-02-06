<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { use, t } from './locale'
import { ref } from 'vue'

const success = ref(false)
const error = ref(false)
const info = ref(false)
const warning = ref(false)
const question = ref(false)
const empty = ref(false)

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-result :title="t('success')" :description="t('description')">
    <template #footer>
      <var-button type="success" @click="success = false">{{ t('button') }}</var-button>
    </template>
  </var-result>

  <app-type>{{ t('type') }}</app-type>
  <var-space direction="column" size="large">
    <var-button type="success" block @click="success = true">{{ t('success') }}</var-button>
    <var-button type="warning" block @click="warning = true">{{ t('warning') }}</var-button>
    <var-button type="info" block @click="info = true">{{ t('info') }}</var-button>
    <var-button type="danger" block @click="error = true">{{ t('error') }}</var-button>
    <var-button color="var(--result-question-color)" text-color="#fff" block @click="question = true">
      {{ t('question') }}
    </var-button>
    <var-button color="var(--result-empty-color)" text-color="#fff" block @click="empty = true">
      {{ t('empty') }}
    </var-button>
  </var-space>

  <var-popup :default-style="false" v-model:show="success">
    <var-result class="result" :title="t('success')" :description="t('description')">
      <template #footer>
        <var-button type="success" @click="success = false">{{ t('button') }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="error">
    <var-result class="result" type="error" :title="t('error')" :description="t('description')">
      <template #footer>
        <var-button type="danger" @click="error = false">{{ t('button') }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="warning">
    <var-result class="result" type="warning" :title="t('warning')" :description="t('description')">
      <template #footer>
        <var-button type="warning" @click="warning = false">{{ t('button') }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="info">
    <var-result class="result" type="info" :title="t('info')" :description="t('description')">
      <template #footer>
        <var-button type="info" @click="info = false">{{ t('button') }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="question">
    <var-result class="result" type="question" :title="t('question')" :description="t('description')">
      <template #footer>
        <var-button color="var(--result-question-color)" text-color="#fff" @click="question = false"
          >{{ t('button') }}
        </var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="empty">
    <var-result class="result" type="empty" :title="t('empty')" :description="t('description')">
      <template #footer>
        <var-button color="var(--result-empty-color)" text-color="#fff" @click="empty = false"
          >{{ t('button') }}
        </var-button>
      </template>
    </var-result>
  </var-popup>
</template>

<style scoped>
.result {
  width: 75vmin;
}
</style>
