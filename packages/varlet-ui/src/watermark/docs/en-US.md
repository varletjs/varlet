# Watermark

### Introduction

Adding text or image watermarks to a certain area of the page can be used to identify copyright and prevent information theft.

### Text Watermark

```html
<template>
  <var-watermark content="Varlet">
    <div class="watermark-wrapper"></div>
  </var-watermark>
</template>

<style>
.watermark-wrapper {
  width: 100%;
  height: 200px;
}
</style>
```

### Image Watermark

```html
<template>
  <var-watermark image="https://varlet.gitee.io/varlet-ui/varlet_icon.png">
    <div class="watermark-wrapper"></div>
  </var-watermark>
</template>

<style>
.watermark-wrapper {
  width: 100%;
  height: 200px;
}
</style>
```

### Custom Gap

```html
<template>
  <var-watermark content="Varlet" :gap-x="40" :gap-y="40">
    <div class="watermark-wrapper"></div>
  </var-watermark>
</template>

<style>
.watermark-wrapper {
  width: 100%;
  height: 200px;
}
</style>
```

### Custom Offset

```html
<template>
  <var-watermark content="Varlet" :offset-x="20" :offset-y="20">
    <div class="watermark-wrapper"></div>
  </var-watermark>
</template>

<style>
.watermark-wrapper {
  width: 100%;
  height: 200px;
}
</style>
```

### Custom Rotate

```html
<template>
  <var-watermark content="Varlet" :rotate="22" :offset-x="20" :offset-y="20">
    <div class="watermark-wrapper"></div>
  </var-watermark>
</template>

<style>
.watermark-wrapper {
  width: 100%;
  height: 200px;
}
</style>
```

### Fullscreen

```html
<script setup>
import { ref } from 'vue'
const fullScreen = ref(false)

const toggle = () => {
  fullScreen.value = !fullScreen.value
}
</script>

<template>
  <var-watermark content="Varlet UI" :full-screen="fullScreen" opacity="0.1" :offset-x="10" :offset-y="10">
    <div class="watermark-wrapper">
      <var-button type="primary" @click="toggle">{{ pack.switch }}</var-button>
    </div>
  </var-watermark>
</template>

<style>
.watermark-wrapper {
  width: 100%;
  height: 200px;
}
</style>
```

### Watermark Content Slot

```html
<template>
  <var-watermark :offset-x="10" :offset-y="10">
    <div class="watermark-wrapper"></div>
    <template #content>
      <span style="font-size: 20px; color: #fefefe; text-shadow: 0 0 0.5em #4a7afe, 0 0 0.2em #5c5c5c">Varlet UI</span>
    </template>
  </var-watermark>
</template>

<style>
.watermark-wrapper {
  width: 100%;
  height: 200px;
}
</style>
```

## API

### Props

| Prop              | Description                                                 | Type              | Default   |
| ------- | --- |----------------|-----------|
| `width`    | Watermark width       | _number_       | `100`   |
| `height`   | Watermark height       | _number_       | `100`   |
| `content`  | Watermark text content    | _string_       | `-`   |
| `image`    | The path of the image watermark has a higher priority than `content`    | _string_       | `-`   |
| `rotate`   | Watermark rotation angle           | _number_       | `-22`   |
| `offset-x` | Offset of the watermark from the container's x-axis    | _number_       | `0`   |
| `offset-y` | Offset of the watermark from the container's y-axis    | _number_       | `0`   |
| `gap-x`    | Spacing in the horizontal direction of the watermark       | _number_       | `0`   |
| `gap-y`    | Spacing in the vertical direction of the watermark        | _number_       | `0`   |
| `z-index`  | Watermark z-index      | _number \| string_       | `10`   |
| `opacity`  | Watermark opacity         | _number \| string_      | `0.5`   |
| `fullscreen`    | Whether to display watermark in fullscreen mode        | _boolean_       | `false`   |
| `font`    | Watermark text style    | _Font_ | `Font` |

### Font 

| Prop              | Description                                                 | Type              | Default   |
| --- |----------------------| --- | --- |
| `font-size`    |    font size    | _number_      | `14`   |
| `font-variant`  |    font variant    | _string_      | `normal`   |
| `font-weight`    |    font weight   | _normal \| light \| weight \| number_      | `normal`   |
| `font-style`   |    font style   | _none \| normal \| italic \| \| oblique \| string_      | `normal`   |
| `font-family`  |    font family    | _string_      | `sans-serif`   |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `resize` | This method can be called for redrawing when the watermark attribute changes | `-` | `-` |

### Slots

| Name | Description | SlotProps |
| --- |----------------------| --- |
| `content` | The content of HTML `Watermark`. only supports inline styles, does not support passing in self closing tags, priority higher than `content` or `image` attributes | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| ------ | -------- |
| `--watermark-content-color` | `#808080`  |