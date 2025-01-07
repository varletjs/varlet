<script setup>
import { reactive } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { z } from 'zod'
import { t, use } from './locale'

const values = reactive({
  value: 0,
  value2: 0,
  value3: 0,
  value4: 0,
  value5: 0,
  value6: 0,
  value7: 0,
  value8: 0,
  value9: 0,
  value10: 0,
})

watchLang(use)
onThemeChange()

function handleBeforeChange(value, change) {
  setTimeout(() => {
    change(value)
  }, 500)
}
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-counter v-model="values.value" />

  <app-type>{{ t('range') }}</app-type>
  <var-counter v-model="values.value2" :min="0" :max="5" />

  <app-type>{{ t('step') }}</app-type>
  <var-counter v-model="values.value3" :step="10" />

  <app-type>{{ t('toFixed') }}</app-type>
  <var-counter v-model="values.value4" :decimal-length="1" />

  <app-type>{{ t('size') }}</app-type>
  <var-counter v-model="values.value5" input-text-size="18px" input-width="50px" button-size="36px" />

  <app-type>{{ t('disabled') }}</app-type>
  <var-counter v-model="values.value6" disabled />

  <app-type>{{ t('readonly') }}</app-type>
  <var-counter v-model="values.value7" readonly />

  <app-type>{{ t('lazyChange') }}</app-type>
  <var-counter v-model="values.value8" lazy-change @before-change="handleBeforeChange" />

  <app-type>{{ t('validate') }}</app-type>
  <var-counter v-model="values.value9" :rules="[(v) => v > 5 || t('validateMessage')]" />

  <app-type>{{ t('validateWithZod') }}</app-type>
  <var-counter v-model="values.value10" :rules="z.number().min(6, t('validateMessage'))" />

  <div class="space"></div>
</template>

<style scoped lang="less">
.space {
  height: 40px;
}
</style>
