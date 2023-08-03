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

### Full Screen

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