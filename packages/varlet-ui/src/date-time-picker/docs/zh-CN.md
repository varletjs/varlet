# 日期时间选择器组

### 介绍

用于选择日期和时间。

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const date = ref('2021-04-08 12:24')
</script>

<template>
  <var-date-time-picker v-model="date" />
</template>
```


## API

### 属性

| 参数                  | 说明                                           | 类型 | 默认值 |
|---------------------|----------------------------------------------| -------- | ---------- |
| `v-model`           | 被选择的日期时间（ISO 8601 格式，`YYYY-MM-DD HH:MM`） | _string[] \| string_ | `undefined` |
| `active`            | 设置当前选中的标签                                   | _string \| number_ | `0` |
| `prev-step-text`    | 上一步按钮的文字                                     | _string_ | `prev` |
| `next-step-text`    | 下一步按钮的文字                                     | _string_ | `next` |
| `confirm-button-text` | 提交按钮的文字                                     | _string_ | `submit` |
| `cancel-button-text` | 取消按钮的文字                                       | _string_ | `cancel` |


### 事件

| 事件名       | 说明      | 回调参数                              |
|-----------|---------|-----------------------------------|
| `confirm` | 提交时触发 | `value: string \| string[]` |
| `cancel`  | 取消时触发 | `-` |
