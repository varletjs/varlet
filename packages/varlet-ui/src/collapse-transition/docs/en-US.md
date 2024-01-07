# CollapseTransition

### Intro

Transition animation of collapse and expansion.

### Basic Usage

Use `expand` prop to collapse or expand the content.

```html
<script setup>
import { ref } from 'vue'

const expand = ref(true)
</script>

<template>
  <var-switch v-model="expand"></var-switch>
  <var-collapse-transition :expand="expand">
    Content
  </var-collapse-transition>
</template>
```

## API

### Props

| Prop       | Description              | Type        | Default   |
| ---------- | ------------------------ | ----------- | --------- |
| `expand` | Whether to show content. | _boolean_ | `false` |

### Slots

| Name        | Description                                 | SlotProps |
| ----------- | ------------------------------------------- | --------- |
| `default` | The content inside the collapse transition. | `-`     |
