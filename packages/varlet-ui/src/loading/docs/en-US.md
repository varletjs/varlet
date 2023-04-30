# Loading

### Intro

Loading component for performing animations when data is loaded.

### Type

```html
<template>
  <var-space align="center" justify="space-between">
    <var-loading type="circle" />
    <var-loading type="cube" />
    <var-loading type="wave" />
    <var-loading type="rect" />
    <var-loading type="disappear" />
  </var-space>
</template>
```

### Color
```html
<template>
  <var-space align="center" justify="space-between">
    <var-loading type="circle" color="#00afef" />
    <var-loading type="cube" color="#00c48f" />
    <var-loading type="wave" color="#ff9f00" />
    <var-loading type="rect" color="#f44336" />
    <var-loading type="disappear" color="#aaa" />
  </var-space>
</template>
```

### Size

```html
<template>
  <var-space align="center" justify="space-between">
    <var-loading type="circle" size="small" />
    <var-loading type="cube" size="small" />
    <var-loading type="wave" size="small" />
    <var-loading type="rect" size="small" />
    <var-loading type="disappear" size="small" />
  </var-space>
</template>
```

### Wrap

```html
<script setup>
import { ref } from 'vue'

const loading = ref(false)
</script>

<template>
  <var-button @click="loading = !loading" style="margin-bottom: 8px">
    {{ loading ? 'Open' : 'Close' }}
  </var-button>
  <var-loading description="LOADING" :loading="loading">
    <var-card 
      title="Intro"
      description="Varlet is a Material design mobile component library developed based on Vue3, developed and maintained by partners in the community." 
    />
  </var-loading>
</template>
```

## API

### Props

| prop     | Description                                             | Type     | Default  |
| -------- |---------------------------------------------------------| -------- |----------|
| `color`  | Loading color                                           | _string_ | `-`      |
| `type`   | Can be set to `circle` `wave` `cube` `rect` `disappear` | _string_ | `circle` |
| `size`   | Can be set to `large` `normal` `small` `mini`           | _string_ | `normal` |
| `description`   | Description of the loading                       | _string_ | `-`      |
| `loading`| Specify whether loading is active                       | _boolean_ | `false`  |
| `radius` | Set radius size when the `type` is `circle`             | _string \| number_  | `-` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Content wrapped in loading | `-` |
| `description`    | Description of the loading | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--loading-color`       | `var(--loading-color)` |
| `--loading-opacity` | `0.38` |
| `--loading-desc-margin` | `8px 0 0` |
