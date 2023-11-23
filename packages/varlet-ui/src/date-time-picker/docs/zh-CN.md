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

## API

### 属性

| 参数                  | 说明                                           | 类型 | 默认值 |
|---------------------|----------------------------------------------| -------- | ---------- |
| `active`                 | 选中的tab                          | _number_ | `0` |
| `confirm-button-text`    | 自定义确认按钮文字                      | _string_ | `提交` |
| `cancel-button-text`     | 自定义取消按钮文字                       | _string_ | `取消` |
| `next-step-text`          | 自定义下一步按钮文字                    | _string_ | `下一步` |
| `prev-step-text`          | 自定义上一步按钮文字                     | _string_ | `上一步` |


### 事件

| 事件名       | 说明      | 回调参数                              |
|-----------|---------|-----------------------------------|
| `confirm` | 点击确定时触发 | `-` |
| `cancel`  | 点击取消时触发 | `-` |

### 插槽
自定义选择器组内容，数量不限

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | 自定义面板内容 |  `-` |
