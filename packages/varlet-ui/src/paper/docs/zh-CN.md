# 纸张

### 介绍

创建一个更容易的使用海拔效果和水波效果的容器

### 基本使用

```html
<template>
  <var-paper :elevation="2" :width="100" :height="100" />
</template>
```

### 水波效果

```html
<template>
  <var-paper :elevation="2" :width="100" :height="100" ripple />
</template>
```

### 圆形纸张

```html
<template>
  <var-paper :elevation="2" :width="100" :height="100" round />
</template>
```

### 自定义圆角

```html
<template>
  <var-paper :elevation="2" :width="100" :height="100" :radius="8" />
</template>
```

### 使用插槽

```html
<template>
  <var-paper :elevation="2">
    <var-cell>纸张</var-cell>
    <var-cell>纸张</var-cell>
    <var-cell>纸张</var-cell>
  </var-paper>
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值  |
| --- | --- | --- | --- |
| `elevation` | 海拔, 取值 `0-24`  | _string \| number_  | `-` |
| `ripple` | 是否启用水波效果  | _boolean_  | `-` |
| `radius` | 纸张圆角  | _string \| number_  | `-` |
| `width` | 纸张宽度  | _string \| number_  | `-` |
| `height` | 纸张高度  | _string \| number_  | `-` |
| `round` | 是否启用圆形纸张  | _boolean_  | `false` |
| `inline` | 是否使用行内纸张  | _boolean_  | `false` |

### 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `click` | 点击纸张时触发 | `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | ----| ---- |
| `default` | 纸张内容  | `-`  |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                                 | 默认值                  |
|-------------------------------------|----------------------|
| `--paper-background`                 | `#fff`               |