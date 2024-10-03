<script setup>
import { ref } from 'vue'
import { t, use } from './locale'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { bundledThemes, bundledLanguages } from 'shiki'

const themes = Object.keys(bundledThemes).map((v) => ({ label: v, value: v }))
const languages = Object.keys(bundledLanguages).map((v) => ({ label: v, value: v }))
const theme = ref('material-theme')
const lang = ref('javascript')
const code = `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const theOther = target - num;
      if (map.has(theOther)) {
          return [map.get(theOther), i];
      }
      map.set(num, i);
  }
};`

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('theme') }}</app-type>
  <var-select v-model="theme" :options="themes" :hint="false" />

  <app-type>{{ t('language') }}</app-type>
  <var-select v-model="lang" :options="languages" :hint="false" />

  <var-code :content="code" :lang="lang" :theme="theme" />
</template>
