# LoadingBar

### Intro

Display loading progress at the top of the page.

### Basic Usage

```html
<script setup>
import ref from 'vue'
import { LoadingBar, Snackbar } from '@varlet/ui'

const isClear = ref(false)

LoadingBar.mergeConfig({
  top: '48px'
})

const setStyle = () => {
  LoadingBar.mergeConfig({
    errorColor: isClear.value ? undefined : '#ff8800',
    color: isClear.value ? undefined : '#10afef',
    height: isClear.value ? undefined : '5px',
  })

  isClear.value = !isClear.value

  Snackbar.success('success')
}
</script>

<template>
  <var-button type="primary" block @click="LoadingBar.start()">Start</var-button>
  <var-button type="primary" block @click="LoadingBar.finish()">Finish</var-button>
  <var-button type="primary" block @click="LoadingBar.error()">Error</var-button>
  <var-button type="primary" block @click="setStyle">
    {{ isClear ? 'Clear Style' : 'Custom Style' }}
  </var-button>
</template>

<style scoped lang="less">
  .var-button {
    margin-bottom: 11px;
  }
</style>
```

## API

### Methods

| Method | Description | Arguments | Return value |
|---------------------|----------|--|---------|
| `LoadingBar.mergeConfig` | Set config of loading bar | _options: Options_ | `-`  |
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

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- |------------------------|
| `--loading-bar-color` | `var(--color-primary)` |
| `--loading-bar-error-color` | `var(--color-danger)`  |
| `--loading-bar-height` | `3px`                  |
