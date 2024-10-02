# 警告

### 介绍

警告组件会向用户显示简短的消息，但不会中断他们的使用。

### 标题

```html
<template>
  <var-alert title="Varlet UI" />
</template>
```

### 内容

```html
<template>
  <var-alert title="Varlet UI" text="Varlet UI 是一个基于 Vue3 开发的 Material Design 组件库，全面拥抱 Vue3 生态，支持移动端和桌面端，由 varletjs 组织维护。" />
</template>
```

## API

### 属性

| 参数          | 说明 | 类型 | 默认值 |
|-------------| ---- | ---- | ---- |
| `type`      | 类型，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `color` | 背景色 | _string_ | `-` |
| `title` | 标题 | _string_ | `-` |
| `text`  | 内容 | _string_ | `-` |
| `elevation`  | 海拔高度，可选值为 `true`、`false` 和 `0-24` 的等级  | _string \| number \| boolean_ | `false`  |
| `closeable` | 是否为可关闭警告 | _boolean_ | `false` |
| `icon-name` | 自定义可关闭警告的图标，必须在 `closeable` 为 `true` 的条件下才能用 | _string_ | `-` |
| `namespace` | 自定义可关闭警告的图标的命名空间 | _string_ | `var-icon` |

### 插槽

| 名称 | 说明 | 参数 |
| ---- | ---- | ----|
| `default` | 警告内容 | `-` |
| `title`   | 警告标题 | `-` |
| `icon` | 警告的前置图标 | `-` |
| `close-icon`   | 警告的关闭图标 | `-` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| `close` | 点击关闭按钮时触发，只有在显示关闭按钮的时候才能使用 | `event: Event`  |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                         | 默认值 |
|-----------------------------  | ---   |
| `--alert-padding` | `16px` |
| `--alert-border-radius` | `4px` |
| `--alert-prepend-icon-margin-right` | `12px` |
| `--alert-close-icon-margin-left` | `12px` |
| `--alert-default-text-color` | `#555` |
| `--alert-primary-text-color` | `var(--color-on-primary-container)` |
| `--alert-danger-text-color` | `var(--color-on-danger-container)` |
| `--alert-success-text-color` | `var(--color-on-success-container)` |
| `--alert-warning-text-color` | `var(--color-on-warning-container)` |
| `--alert-info-text-color` | `var(--color-on-info-container)` |
| `--alert-default-color` | `#e0e0e0` |
| `--alert-primary-color` | `var(--color-primary-container)` |
| `--alert-danger-color` | `var(--color-danger-container)` |
| `--alert-success-color` | `var(--color-success-container)` |
| `--alert-warning-color` | `var(--color-warning-container)` |
| `--alert-info-color` | `var(--color-info-container)` |
| `--alert-content-font-size` | `14px` |
| `--alert-title-font-size` | `16px` |
| `--alert-title-font-weight` | `500` |
