# LoadingBar

### Intro

Display loading progress at the top of the page.

### Basic Usage

```html
<script setup>
import { ref } from 'vue'
import { LoadingBar } from '@varlet/ui'

const hasCustomStyle = ref(false)

function setStyle() {
  LoadingBar.mergeConfig({
    errorColor: hasCustomStyle.value ? undefined : '#ff8800',
    color: hasCustomStyle.value ? undefined : '#10afef',
    height: hasCustomStyle.value ? undefined : '5px'
  })

  hasCustomStyle.value = !hasCustomStyle.value
}

// mobile only
// LoadingBar.mergeConfig({
//   top: '48px'
// })
</script>

<template>
  <var-space direction="column" size="large">
    <var-button type="primary" block @click="LoadingBar.start()">Start</var-button>
    <var-button type="primary" block @click="LoadingBar.finish()">Finish</var-button>
    <var-button type="primary" block @click="LoadingBar.error()">Error</var-button>
    <var-button type="primary" block @click="setStyle">
      {{ hasCustomStyle ? 'Clear Style' : 'Custom Style' }}
    </var-button>
  </var-space>
</template>
```

## API

### Methods

| Method | Description | Arguments | Return |
|---------------------|----------|--|---------|
| `LoadingBar.mergeConfig` | Merge config of loading bar | _options: Options_ | `-`  |
| `LoadingBar.start`  | Start loading  | `-` | `-` |
| `LoadingBar.finish` | Finish loading  | `-` | `-` |
| `LoadingBar.error`  | Loading error  | `-` | `-` |

### LoadingBar Options

| Option       | Description            | Type | Default |
|--------------|------------------------|-----------|--------|
| `color`      | LoadingBar color       | _string_  | `-`    |
| `errorColor` | LoadingBar error color | _string_  | `-`    |
| `height`     | LoadingBar height      | _string\|number_ | `-` |
| `top`        | LoadingBar top         | _string\|number_ | `-` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- |------------------------|
| `--loading-bar-color` | `var(--color-primary)` |
| `--loading-bar-error-color` | `var(--color-danger)`  |
| `--loading-bar-height` | `3px`                  |
