# 链接

### 介绍

链接组件，用于页面跳转

### 主题色链接

```html
<template>
  <var-space :size="[10, 10]">
    <var-link>默认链接</var-link>
    <var-link type="primary">主要链接</var-link>
    <var-link type="info">信息链接</var-link>
    <var-link type="success">成功链接</var-link>
    <var-link type="warning">警告链接</var-link>
    <var-link type="danger">危险链接</var-link>
  </var-space>
</template>
```

### 链接模式

```html
<template>
  <var-space :size="[10, 10]">
    <var-link type="primary" href="https://varlet.gitee.io/varlet-ui/#/zh-CN/index" target="_blank">href 链接</var-link>
    <var-link type="primary" to="/button">router-link 链接</var-link>
  </var-space>
</template>
```

### 下划线

```html
<template>
  <var-space :size="[10, 10]">
    <var-link type="primary">始终显示</var-link>
    <var-link type="primary" underline="hover">悬停显示</var-link>
    <var-link type="primary" underline="none">不显示</var-link>
  </var-space>
</template>
```

### 禁用状态

```html
<template>
  <var-link disabled>禁用状态</var-link>
</template>
```

### 自定义颜色

```html
<template>
  <var-space :size="[10, 10]">
    <var-link text-color="#009688">链接</var-link>
    <var-link text-color="#ab47bc">链接</var-link>
  </var-space>
</template>
```

### 默认插槽

```html
<template>
  <var-link href="https://varlet.gitee.io/varlet-ui/#/zh-CN/index" target="_blank" underline="none">
    <var-button type="primary">跳转首页</var-button>
  </var-link>
</template>
```

## API

### 属性

| 参数           | 说明                                                              | 类型         | 默认值       |
|--------------|-----------------------------------------------------------------|------------|-----------|
| `type`       | 类型，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_   | `default` |
| `underline`  | 下划线状态，可选值为 `always` `hover` `none`                              | _string_   | `always`  |
| `disabled`   | 禁用状态                                                            | _boolean_  | `false`   |
| `text-color` | 文字颜色                                                            | _string_   | `-`       |
| `text-size`  | 文字尺寸                                                            | _string \| number_   | `-`            |
| `href`       | 原生 `href` 属性，优先级高于 `to`                                         | _string_   | `-`       |
| `target`     | 原生 `target` 属性                                                  | _string_   | `-`       |
| `to`         | `router-link` `to` 属性，将会渲染为 `<router-link />`                   | _string_ \ | _object_  | `-`        |
| `replace`    | `router-link` `replace` 属性                                      | _boolean_  | `false`   |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 链接内容 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值                          |
| --- |------------------------------|
| `--link-primary-color` | `var(--color-primary)`       |
| `--link-danger-color` | `var(--color-danger)`        |
| `--link-success-color` | `var(--color-success)`       |
| `--link-warning-color` | `var(--color-warning)`       |
| `--link-info-color` | `var(--color-info)`          |
| `--link-disabled-color` | `var(--color-text-disabled)` |
| `--link-font-size` | `var(--font-size-md)` |
