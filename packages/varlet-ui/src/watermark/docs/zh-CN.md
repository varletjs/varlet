# 水印

### 介绍

给页面的某个区域加上文字或者图片水印，可用于标识版权，防止信息盗用。

### 文字水印

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

### 图片水印

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

### 自定义间距

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

### 自定义偏移量

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

### 自定义倾斜角度

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

### 全屏

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