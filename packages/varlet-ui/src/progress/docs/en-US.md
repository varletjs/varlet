# Progress

### Intro

Display the current progress of an operation flow.

### Basic Usage

Set the current progress through the `value` attribute.

```html
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const value = ref(0)
  const interval = ref(0)

  onMounted(() => {
    interval.value = window.setInterval(() => {
      if (value.value >= 100) value.value = 0
      else value.value += 20
    }, 1000)
  })

  onUnmounted(() => {
    window.clearInterval(interval.value)
  })
</script>

<template>
  <var-space direction="column" :size="[12, 12]">
    <var-progress :value="20" :track="false" />
    <var-progress :value="value" :track="false" />
    <var-progress :value="100" :track="false" />
  </var-space>
</template>
```

### Show Label

The label is displayed through the `label` attribute. The label is the percentage of progress by default. You can use the slot to insert custom content.

```html
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const value = ref(0)
  const interval = ref(0)

  onMounted(() => {
    interval.value = window.setInterval(() => {
      if (value.value >= 100) value.value = 0
      else value.value += 20
    }, 1000)
  })

  onUnmounted(() => {
    window.clearInterval(interval.value)
  })
</script>

<template>
  <var-space direction="column" :size="[12, 12]">
    <var-progress label :value="30" />
    <var-progress label :value="value" />
    <var-progress label :value="100">success</var-progress>
  </var-space>
</template>
```

### Custom Style

Set the line width, progress bar color, track color and ripple loading effect through the attributes of `line-width`, `color`, `track-color` and `ripple`.

```html
<template>
  <var-space direction="column" :size="[12, 12]">
    <var-progress :value="30" line-width="8" color="#ff9f00" />
    <var-progress :value="60" line-width="8" color="#ff9f00" track-color="#f5cb90" />
    <var-progress 
      :value="80"
      ripple 
      line-width="8"
      color="#ff9f00" 
      track-color="#f5cb90" 
    />
  </var-space>
</template>
```

### Progress circle

```html
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const value = ref(0)
  const interval = ref(0)

  onMounted(() => {
    interval.value = window.setInterval(() => {
      if (value.value >= 100) value.value = 0
      else value.value += 20
    }, 1000)
  })

  onUnmounted(() => {
    window.clearInterval(interval.value)
  })
</script>

<template>
  <var-space :size="[20, 20]">
    <var-progress mode="circle" :value="30" line-width="5" :size="56" />
    <var-progress mode="circle" label :value="value" line-width="5" :size="56" />
    <var-progress mode="circle" label :value="100" line-width="5" :size="56" />
  </var-space>
</template>
```

### Hide Track

Use `track` prop to hide track.

```html
<template>
  <var-progress mode="circle" :value="50" :size="56" :track="false" />
</template>
```
## API

### Props

| prop | Description      | Type     | Default  |
| --------- | ---------------- | -------- | -------- |
| `mode` | Mode of Progress. Optional value is `linear, circle` | _string_ | `linear` |
| `value` | Completion value   | _string \| number_ |  `0`  |
| `line-width` | Width of the progress bar  | _string \| number_ | `4` |
| `color` | Color of the progress bar  | _string_  | `#005CAF` |
| `track-color`  | Color of the progress track | _string_   | `#d8d8d8` |
| `label` | Whether the label is visible or not | _boolean_ | `false` |
| `track` | Whether the progress track is visible or not | _boolean_ | `true` |
| `ripple` | Loading style for progress (only supports linear progress) | _boolean_ | `false` |
| `size` | Size of progress (only supports circle progress) | _string \| number_ | `40` |
| `rotate` | Origin of progress (only supports circle progress) | _number_ | `0` |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Custom label | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--progress-font-size` | `var(--font-size-sm)` |
| `--progress-ripple-color` | `#fff` |
| `--progress-track-color` | `#d8d8d8` |
| `--progress-background` | `var(--color-primary)` |