# Date and time selector

### Introduction

It is used to select date, time or other combined components.

### Basic use

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

### Attribute

| Parameter | Description | Type | Default |
|---------------------|----------------------------------------------| -------- | ---------- |
| `active`                 | Selected tab                                     | _number_ | 0 |
| `confirm-button-text`    | Custom confirmation button text                      | _string_ | `submit` |
| `cancel-button-text`     | Custom cancel button text                       | _string_ | `cancel` |
| `next-step-text`          | Customize the next button text                    | _string_ | `next` |
| `prev-step-text`          | Customize the previous button text                     | _string_ | `prev` |


### 事件

| 事件名       | 说明      | 回调参数                              |
|-----------|---------|-----------------------------------|
| `confirm` | Trigger when clicking OK | `-` |
| `cancel`  | Triggered when clicking Cancel | `-` |

### Slots

Custom selector group content, unlimited number

| Name | Description | Parameters |
| ----- | -------------- | -------- |