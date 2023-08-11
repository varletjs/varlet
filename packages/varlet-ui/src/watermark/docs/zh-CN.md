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

### 自定义旋转角度

```html
<template>
  <var-watermark content="Varlet" :rotate="22" :offset-y="20">
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
  <var-watermark
    image="./logo.svg"
    :width="40" 
    :height="40" 
    :gap-x="40" 
    :gap-y="40" 
    :offset-x="10" 
    :offset-y="10" 
  >
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

const fullscreen = ref(false)

const toggle = () => {
  fullscreen.value = !fullscreen.value
}
</script>

<template>
  <var-watermark 
    content="Varlet UI" 
    :opacity="0.2" 
    :fullscreen="fullscreen" 
    :offset-x="10"
    :offset-y="10"
  >
    <div class="watermark-wrapper">
      <var-button type="primary" @click="toggle">切换</var-button>
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

### 自定义水印内容

```html
<template>
  <var-watermark :offset-x="10" :offset-y="10">
    <div class="watermark-wrapper"></div>
    <template #content>
      <span style="font-size: 20px; color: #7986cb">Varlet UI</span>
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

### 属性

| 参数 | 说明 | 类型             | 默认值       |
| ------- | --- |----------------|-----------|
| `width`    | 水印的宽度       | _number_       | `100`   |
| `height`   | 水印的高度       | _number_       | `100`   |
| `content`  | 文字水印的内容    | _string_       | `-`   |
| `image`    | 图片水印的路径，优先级比 `content` 高    | _string_       | `-`   |
| `rotate`   | 水印的旋转角度           | _number_       | `-22`   |
| `offset-x` | 水印距离容器x轴的偏移量    | _number_       | `0`   |
| `offset-y` | 水印距离容器y轴的偏移量    | _number_       | `0`   |
| `gap-x`    | 水印水平方向的间距        | _number_       | `0`   |
| `gap-y`    | 水印垂直方向的间距        | _number_       | `0`   |
| `z-index`  | 水印的z-index       | _number \| string_       | `10`   |
| `opacity`  | 水印的透明度         | _number \| string_      | `0.5`   |
| `fullscreen`    | 水印是否全屏显示        | _boolean_       | `false`   |
| `font`    | 文字水印的字体样式    | _WatermarkFont_ | `WatermarkFont` |

### WatermarkFont 

| 参数 | 说明 | 类型             | 默认值       |
| ------- | --- |----------------|-----------|
| `font-size`    |    字体大小    | _number_      | `14`   |
| `font-variant`  |    设置小型大写字母的字体显示文本    | _string_      | `normal`   |
| `font-weight`    |    字体粗细   | _string_      | `normal`   |
| `font-style`   |    字体样式   | _string_      | `normal`   |
| `font-family`  |    字体类型    | _string_      | `-`   |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `resize` | 水印属性变化时可以调用此方法进行重绘 | `-` | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `content` | `Watermark` 内容，仅支持行内样式，不支持传入自闭合标签，优先级高于 `content` 或 `image` 属性 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                                           | 默认值   |
|-----------------------------------------------| -------- |
| `--watermark-content-color` | `#808080`  |