# 电子签名

### 介绍

一个用于在屏幕上进行电子签名的组件。

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const signature = ref('')
</script>

<template>
  <var-signature v-model="signature" />
</template>