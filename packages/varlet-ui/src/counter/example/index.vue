<script setup>
import { reactive } from 'vue'
import { use, t } from './locale'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'

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
  <var-counter :min="0" :max="5" v-model="values.value2" />

  <app-type>{{ t('step') }}</app-type>
  <var-counter :step="10" v-model="values.value3" />

  <app-type>{{ t('toFixed') }}</app-type>
  <var-counter :decimal-length="1" v-model="values.value4" />

  <app-type>{{ t('size') }}</app-type>
  <var-counter input-text-size="18px" input-width="50px" button-size="36px" v-model="values.value5" />

  <app-type>{{ t('disabled') }}</app-type>
  <var-counter disabled v-model="values.value6" />

  <app-type>{{ t('readonly') }}</app-type>
  <var-counter readonly v-model="values.value7" />

  <app-type>{{ t('lazyChange') }}</app-type>
  <var-counter lazy-change v-model="values.value8" @before-change="handleBeforeChange" />

  <app-type>{{ t('validate') }}</app-type>
  <var-counter :rules="[(v) => v > 5 || t('validateMessage')]" v-model="values.value9" />

  <div class="space"></div>
</template>

<style scoped lang="less">
.space {
  height: 40px;
}
</style>
