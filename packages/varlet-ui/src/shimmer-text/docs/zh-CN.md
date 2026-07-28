# 流光文字

### 介绍

带有流光动画的文字，可用于表示内容正在生成或处理。

### 基本使用

```html
<template>
  <var-shimmer-text>内容生成中</var-shimmer-text>
</template>
```

### 主题色

通过 `type` 设置主题色。

```html
<template>
  <var-space direction="column" align="flex-start" :size="[16, 0]">
    <var-shimmer-text>内容生成中</var-shimmer-text>
    <var-shimmer-text type="primary">内容生成中</var-shimmer-text>
    <var-shimmer-text type="info">内容生成中</var-shimmer-text>
    <var-shimmer-text type="success">内容生成中</var-shimmer-text>
    <var-shimmer-text type="warning">内容生成中</var-shimmer-text>
    <var-shimmer-text type="danger">内容生成中</var-shimmer-text>
  </var-space>
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 类型，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 文字内容 | `-` |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--shimmer-text-color` | `var(--color-on-surface-variant)` |
| `--shimmer-text-highlight-color` | `#fff` |
| `--shimmer-text-duration` | `1.4s` |
| `--shimmer-text-angle` | `100deg` |
