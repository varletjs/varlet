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
  if (hasCustomStyle.value) {
    LoadingBar.resetDefaultOptions()
  } else {
    LoadingBar.setDefaultOptions({
      errorColor: '#ff8800',
      color: '#10afef',
      height: '5px',
    })
  }

  hasCustomStyle.value = !hasCustomStyle.value
}

// mobile only
// LoadingBar.setDefaultOptions({
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
| `LoadingBar.start`  | Start loading  | `-` | `-` |
| `LoadingBar.finish` | Finish loading  | `-` | `-` |
| `LoadingBar.error`  | Loading error  | `-` | `-` |
| `LoadingBar.setDefaultOptions` | Set default option configuration | _options_ | `-` |
| `LoadingBar.resetDefaultOptions` | Reset default option configuration | _-_ | `-` |

### LoadingBar Options

| Option       | Description            | Type | Default |
|--------------|------------------------|-----------|--------|
| `value`      | LoadingBar progress    | _number_  | `0`    |
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
