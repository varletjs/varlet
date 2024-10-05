<script setup>
import { ref } from 'vue'
import { t, use } from './locale'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { codeToHtml } from 'shiki'

const jsCode = `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      const theOther = target - nums[i];
      if (map.has(theOther)) {
          return [map.get(theOther), i];
      }
      map.set(nums[i], i);
  }
};`

const javaCode = `class Solution {
  public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      int theOther = target - nums[i];
      if (map.containsKey(theOther)) {
        return new int[] { map.get(theOther), i };
      }
      map.put(nums[i], i);
    }
    throw new IllegalArgumentException("No two sum solution");
  }
}`

const language = ref('javascript')
const theme = ref('monokai')

function createHighlighter() {
  return {
    codeToHtml,
  }
}

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('language') }}</app-type>
  <var-select :hint="false" v-model="language">
    <var-option label="javascript" value="javascript" />
    <var-option label="java" value="java" />
  </var-select>

  <app-type>{{ t('theme') }}</app-type>
  <var-select :hint="false" v-model="theme">
    <var-option label="monokai" value="monokai" />
    <var-option label="nord" value="nord" />
  </var-select>

  <var-highlighter-provider :highlighter="createHighlighter()">
    <var-code :code="language === 'javascript' ? jsCode : javaCode" :language="language" :theme="theme" />
  </var-highlighter-provider>
</template>
