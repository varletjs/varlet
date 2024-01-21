<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { reactive, toRefs } from 'vue'
import { pack, use } from './locale'

const values = reactive({
  value: true,
  value1: true,
  value2: true,
  value3: true,
  value4: true,
  value5: true,
})

const { value, value1, value2, value3, value4, value5 } = toRefs(values)

function handleBeforeChange(value, change) {
  setTimeout(() => {
    change(value)
  }, 500)
}

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-space :size="['3vmin', '9vmin']">
    <var-switch v-model="value" />
  </var-space>
  <app-type>{{ pack.disabled }}</app-type>
  <var-switch v-model="value1" disabled />
  <app-type>{{ pack.readonly }}</app-type>
  <var-switch v-model="value1" readonly />
  <app-type>{{ pack.customColor }}</app-type>
  <var-switch v-model="value2" color="var(--color-warning)" close-color="var(--color-info)" />
  <app-type>{{ pack.size }}</app-type>
  <var-space :size="['3vmin', '11vmin']" align="center">
    <var-switch v-model="value3" size="4.266vmin" />
    <var-switch v-model="value3" />
    <var-switch v-model="value3" size="6.4vmin" />
  </var-space>
  <app-type>{{ pack.loading }}</app-type>
  <var-switch :model-value="true" loading />
  <app-type>{{ pack.validateValue }}</app-type>
  <var-space :size="['3vmin', '9vmin']">
    <var-switch v-model="value4" :rules="[(v) => v === true || pack.state]" />
  </var-space>
  <app-type>{{ pack.lazyChange }}</app-type>
  <var-space :size="['3vmin', '9vmin']">
    <var-switch v-model="value5" lazy-change @before-change="handleBeforeChange" />
  </var-space>
</template>
