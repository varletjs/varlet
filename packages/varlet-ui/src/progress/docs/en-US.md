# Progress

### Intro

Display the current progress of an operation flow.

### Basic Usage

```html
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const value = ref(0)
let timer

onMounted(() => {
  timer = window.setInterval(() => {
    if (value.value >= 100) {
      value.value = 0
      return
    }

    value.value += 20
  }, 1000)
})

onUnmounted(() => {
  window.clearInterval(timer)
})  
</script>

<template>
  <var-space direction="column" :size="[12, 12]">
    <var-progress :value="20" />
    <var-progress :value="value" :track="false" label />
    <var-progress :value="100" label>success</var-progress>
  </var-space>
</template>
```

### Other Styles

Set the line width, progress bar color and track color through the attributes of `type`, `line-width`, `color`, `track-color`.

```html
<template>
  <var-space direction="column" :size="[12, 12]">
    <var-progress :value="40" color="linear-gradient(131.53deg, #3fecff 0%, #6149f6 100%)"/>
    <var-progress type="info" :value="40" />
    <var-progress type="success" :value="60" />
    <var-progress :value="80" :line-width="8" color="#ff9f00" track-color="#f5cb90" />
  </var-space>
</template>
```

### Progress Circle

```html
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const value = ref(0)
let timer

onMounted(() => {
  timer = window.setInterval(() => {
    if (value.value >= 100) {
      value.value = 0
      return
    }

    value.value += 20
  }, 1000)
})

onUnmounted(() => {
  window.clearInterval(timer)
})  
</script>

<template>
  <var-space :size="[20, 20]">
    <var-progress 
      mode="circle" 
      :value="100" 
      :size="60"  
      :color="{
        '0%': '#3fecff',
        '100%': '#6149f6',
      }" 
    />
    <var-progress mode="circle" :value="75" :size="60" :track="false" />
    <var-progress mode="circle" label :value="value" :line-width="5" :size="60" />
    <var-progress mode="circle" type="success" label :value="100" :line-width="5" :size="60">
      success
    </var-progress>
  </var-space>
</template>
```

### Indeterminate Animation

Enable indeterminate animation through the `indeterminate` attribute when loading progress is unknown.

```html
<template>
  <var-space direction="column" :size="[20, 20]">
    <var-progress indeterminate />
    <var-progress indeterminate type="info" />

    <var-space justify="space-between">
      <var-progress mode="circle" indeterminate :size="60" />
      <var-progress mode="circle" type="info" indeterminate :size="60" />
    </var-space>
  </var-space>
</template>
```

## API

### Props

| prop          | Description                                                                         | Type     | Default   |
|---------------|-------------------------------------------------------------------------------------|----------|-----------|
| `mode`        | Mode of Progress. Optional value is `linear, circle`                                | _string_ | `linear`  |
| `type`        | Progress type, Can be set to `default` `primary` `info` `success` `warning` `danger` | _string_  | `primary` |
| `value`       | Completion value                                                                    | _string \| number_   |  `0`  |
| `line-width`  | Width of the progress bar                                                           | _string \| number_   | `4` |
| `color`       | Color of the progress bar (The circular progress bar sets the gradient color, please use object. Gradient is the same as svg's linearGradient element)                                    | _string \| object_ | `-` |
| `track-color` | Color of the progress track                                                         | _string_ | `-` |
| `label`       | Whether the label is visible or not                                                 | _boolean_ | `false`   |
| `label-class` | Custom label class name                                                             | _string_ | `-`       |
| `track`       | Whether the progress track is visible or not                                        | _boolean_ | `true`    |
| `indeterminate` | Whether the indeterminate animation is visible or not                                     | _boolean_ | `false` |
| `size`        | Size of progress (only supports circle progress)                                    | _string \| number_   | `40` |
| `rotate`      | Origin of progress (only supports circle progress)                                  | _number_ | `0`       |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Custom label | `-` |

### Style Variables
Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--progress-font-size` | `var(--font-size-sm)` |
| `--progress-track-color` | `#d8d8d8` |
| `--progress-label-color` | `#555` |
| `--progress-background` | `var(--color-primary)` |
| `--progress-default-color` | `#f5f5f5` |
| `--progress-primary-color` | `var(--color-primary)`|
| `--progress-danger-color` |  `var(--color-danger)`|
| `--progress-success-color` | `var(--color-success)`|
| `--progress-warning-color` |  `var(--color-warning)`|
| `--progress-info-color` | `var(--color-info)`|
| `--progress-linear-border-radius` | `0px`|