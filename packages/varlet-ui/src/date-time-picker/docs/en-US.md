# Date and Time Selector Group

### Introduction

It is used to select the date and time.

### Basic use

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

### Attribute

| Prop                  | Description                                           | Type | Default |
|---------------------|----------------------------------------------| -------- | ---------- |
| `v-model`           | Selected date and time (ISO 8601 format, `YYYY-MM-DD HH:MM`) | _string[] \| string_ | `undefined` |
| `active`            | Set the currently selected label                                   | _string \| number_ | `0` |
| `prev-step-text`    | The text of the previous button                                     | _string_ | `prev` |
| `next-step-text`    | The text of the next button                                     | _string_ | `next` |
| `confirm-button-text` | The text of the submission button                                     | _string_ | `submit` |
| `cancel-button-text` | The text of the cancel button                                       | _string_ | `cancel` |


### Events

| Name | Description | SlotProps |
|-----------|---------|-----------------------------------|
| `confirm` | Triggered when submitting | `value: string \| string[]` |
| `cancel`  | Triggered when canceling | `-` |
