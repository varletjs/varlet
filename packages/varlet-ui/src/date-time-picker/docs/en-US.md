# DateTimePicker

### Intro

It is used to select date, time or other combined components.

### Basic Usage

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
| `active`                 | Selected tab                                     | _number_ | `0` |
| `confirm-button-text`    | Custom confirmation button text                      | _string_ | `Submit` |
| `cancel-button-text`     | Custom cancel button text                       | _string_ | `Cancel` |
| `next-step-text`          | Custom the next button text                    | _string_ | `Next` |
| `prev-step-text`          | Custom the previous button text                     | _string_ | `Prev` |


### Events

| Event | Description                 | arguments |
|-----------|---------|-----------------------------------|
| `confirm` | Triggered when clicking OK | `-` |
| `cancel`  | Triggered when clicking Cancel | `-` |

### Slots

Custom selector group content, unlimited number

| Name | Description | Parameters |
| ----- | -------------- | -------- |
| `default` | Custom panel content | `-` |
