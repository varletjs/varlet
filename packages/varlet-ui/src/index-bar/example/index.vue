<script setup>
import { ref, onMounted } from 'vue'
import { t, use } from './locale'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'

const list = ref([])

onMounted(() => {
  for (let i = 0; i < 26; i++) {
    list.value.push(String.fromCharCode(65 + i))
  }
})

watchLang(use)
onThemeChange()

function handleChange(value) {
  console.log(value)
}
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-index-bar @change="handleChange" duration="300" :sticky-offset-top="54">
    <div v-for="item in list" :key="item">
      <var-index-anchor
        :index="item"
        class="index-bar-example-anchor"
        :style="{ background: 'var(--chip-primary-color)', color: 'var(--chip-primary-text-color)' }"
      >
        {{ t('title') }} {{ item }}
      </var-index-anchor>
      <var-cell>{{ item }} {{ t('text') }}</var-cell>
      <var-cell>{{ item }} {{ t('text') }}</var-cell>
    </div>
  </var-index-bar>
</template>

<style lang="less">
.index-bar-example-anchor {
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  transition: all 0.25s;
}
</style>
