# Color pickers

### Introduction

You can select a color in the panel

### Basic use

```html
<template>
  <v-color-picker></v-color-picker>
</template>
```
### Color sample selection

Show color swatches

```html
<template>
  <var-color-picker swatches-layout />
</template>
```

### Toggle color mode

Choose different color modes

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
const modes = ['rgba', 'hsla', 'hex']
</script>

<template>
  <var-color-picker />
  <var-select placeholder="Please select a Mode" v-model="value">
    <var-option v-for="item in modes" :key="item" :label="item" />
  </var-select>
</template>
```

### disabled

Use the `disabled` attribute to disable the current panel.

```html
<template>
  <var-color-picker :disabled="false" />
</template>
```

### v-model

Use `v-model` to output colors

```html
<script setup>
  import { ref } from 'vue'
  const color = ref('#AAFFBB')
</script>
<template>
  <var-input v-model="color" style="margin-bottom: 12px" />
  <var-color-picker v-model="color" />
</template>
```



## API

### Attribute

| Parameters        | Description                                                 | Types                  | Default value |
| ----------------- | ----------------------------------------------------------- | ---------------------- | ------------- |
| `v-model`         | Color Selector value                                        | _string_               | `undefined`   |
| `mode`            | You can use mode to specify which input modes users can use | _rgba ｜ hsla ｜ hexa_ | `rgba`        |
| `swatches`        | Set available color swatches for selection                  | _string[]_             | `undefined`   |
| `disabled`        | Disable the Color Selector                                  | _boolean_              | `false`       |
| `swatches-layout` | Whether to display color samples                            | _boolean_              | `true`        |
| `canvas-layout`   | Whether to display color samples                            | _boolean_              | `false`       |
| `input-layout`    | Whether to display input                                    | _boolean_              | `false`       |
| `slider-layout`   | Whether to display slider                                   | _boolean_              | `false`       |
| `width`           | Color Selector width                                        | _number ｜ string_     | `300`         |
| `canvas-height`   | Height of canvas                                            | _number ｜ string_     | `150`         |
