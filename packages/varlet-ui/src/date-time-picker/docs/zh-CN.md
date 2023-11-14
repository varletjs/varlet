# 日期时间选择器

### 介绍

用于选择日期、时间或其他组合式组件。

### 基本使用

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const date = ref('2023-11-14')
const time = ref('12:34')
const confirm = () => {
  Snackbar(`${date.value} ${time.value}`)
}
</script>

<template>
  <var-date-time-picker @confirm="confirm">
    <var-date-picker v-model="date" />
    <var-time-picker v-model="time" />
  </var-date-time-picker>
</template>
```
