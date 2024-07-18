# 主题系统

### 介绍

组件库通过 [css 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，变量分为通用样式变量和组件样式变量。推荐使用 [StyleProvider](#/zh-CN/style-provider) 组件加载主题文件、对主题进行定制。组件库支持的主题如下。

### 可用主题

| 主题名称 | 主题包 |
| --- | --- |
| `Material Design 2 亮色` | _css 样式_ |
| `Material Design 2 暗色` | _Themes.dark_ |
| `Material Design 3 亮色` | _Themes.md3Light_ |
| `Material Design 3 暗色` | _Themes.md3Dark_ |

### 切换主题

```html
<!-- playground-ignore -->
<script setup>
import { StyleProvider, Themes } from '@varlet/ui'
</script>

<template>
  <var-space direction="column" size="large">
    <var-button type="primary" block @click="StyleProvider(null)">Material Design 2 亮色</var-button>
    <var-button type="primary" block @click="StyleProvider(Themes.dark)">Material Design 2 暗色</var-button>
    <var-button type="primary" block @click="StyleProvider(Themes.md3Light)">Material Design 3 亮色</var-button>
    <var-button type="primary" block @click="StyleProvider(Themes.md3Dark)">Material Design 3 暗色</var-button>
  </var-space>
</template>
```

注入组件库推荐的 `文字颜色` 和 `背景颜色` 变量来控制整体颜色。

```css
/* playground-ignore */
body {
  transition: background-color .25s, color .25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
```

### 主题生成器

我们提供了一个[主题生成器](https://varletjs.org/varlet-theme-builder)，可以通过产品主题色或产品图片智能推导出符合设计系统的配色。

- 注意: 只支持生成 Material Design 3 的主题配色

### 通用样式变量

以下为组件库的通用样式变量，各组件独有的样式变量请查看各组件文档底部的样式变量表格。

| 变量名 | 默认值 |
| --- | --- |
| `--font-size-xs`                | `10px`                                           |
| `--font-size-sm`                | `12px`                                           |
| `--font-size-md`                | `14px`                                           |
| `--font-size-lg`                | `16px`                                           |
| `--icon-size-xs`                | `16px`                                           |
| `--icon-size-sm`                | `18px`                                           |
| `--icon-size-md`                | `20px`                                           |
| `--icon-size-lg`                | `22px`                                           |
| `--hsl-body`                    | `0, 0%, 100%`                                    |
| `--color-body`                  | `hsla(var(--hsl-body), 1)`                       |
| `--hsl-text`                    | `0, 0%, 20%`                                     |
| `--color-text`                  | `hsla(var(--hsl-text), 1)`                       |
| `--hsl-primary`                 | `220, 99%, 61%`                                  |
| `--color-primary`               | `hsla(var(--hsl-primary), 1)`                    |
| `--hsl-info`                    | `196, 100%, 47%`                                 |
| `--color-info`                  | `hsla(var(--hsl-info), 1)`                       |
| `--hsl-success`                 | `164, 100%, 38%`                                 |
| `--color-success`               | `hsla(var(--hsl-success), 1)`                    |
| `--hsl-warning`                 | `37, 100%, 50%`                                  |
| `--color-warning`               | `hsla(var(--hsl-warning), 1)`                    |
| `--hsl-danger`                  | `4, 90%, 58%`                                    |
| `--color-danger`                | `hsla(var(--hsl-danger), 1)`                     |
| `--hsl-disabled`                | `0, 0%, 88%`                                     |
| `--color-disabled`              | `hsla(var(--hsl-disabled), 1)`                   |
| `--hsl-text-disabled`           | `0, 0%, 67%`                                     |
| `--color-text-disabled`         | `hsla(var(--hsl-text-disabled), 1)`              |
| `--hsl-on-primary`              | `0, 0%, 100%`                                    |
| `--color-on-primary`            | `hsla(var(--hsl-on-primary), 1)`                 |
| `--hsl-on-info`                 | `0, 0%, 100%`                                    |
| `--color-on-info`               | `hsla(var(--hsl-on-info), 1)`                    |
| `--hsl-on-success`              | `0, 0%, 100%`                                    |
| `--color-on-success`            | `hsla(var(--hsl-on-success), 1)`                 |
| `--hsl-on-warning`              | `0, 0%, 100%`                                    |
| `--color-on-warning`            | `hsla(var(--hsl-on-warning), 1)`                 |
| `--hsl-on-danger`               | `0, 0%, 100%`                                    |
| `--color-on-danger`             | `hsla(var(--hsl-on-danger), 1)`                  |
| `--hsl-primary-container`       | `220, 99%, 61%`                                  |
| `--color-primary-container`     | `hsla(var(--hsl-primary-container), 1)`          |
| `--hsl-info-container`          | `196, 100%, 47%`                                 |
| `--color-info-container`        | `hsla(var(--hsl-info-container), 1)`             |
| `--hsl-success-container`       | `164, 100%, 38%`                                 |
| `--color-success-container`     | `hsla(var(--hsl-success-container), 1)`          |
| `--hsl-warning-container`       | `37, 100%, 50%`                                  |
| `--color-warning-container`     | `hsla(var(--hsl-warning-container), 1)`          |
| `--hsl-danger-container`        | `4, 90%, 58%`                                    |
| `--color-danger-container`      | `hsla(var(--hsl-danger-container), 1)`           |
| `--hsl-on-primary-container`    | `0, 0%, 100%`                                    |
| `--color-on-primary-container`  | `hsla(var(--hsl-on-primary-container), 1)`       |
| `--hsl-on-info-container`       | `0, 0%, 100%`                                    |
| `--color-on-info-container`     | `hsla(var(--hsl-on-info-container), 1)`          |
| `--hsl-on-success-container`    | `0, 0%, 100%`                                    |
| `--color-on-success-container`  | `hsla(var(--hsl-on-success-container), 1)`       |
| `--hsl-on-warning-container`    | `0, 0%, 100%`                                    |
| `--color-on-warning-container`  | `hsla(var(--hsl-on-warning-container), 1)`       |
| `--hsl-on-danger-container`     | `0, 0%, 100%`                                    |
| `--color-on-danger-container`   | `hsla(var(--hsl-on-danger-container), 1)`        |
| `--hsl-surface-container`       | `0, 0%, 100%`                                    |
| `--color-surface-container`     | `hsla(var(--hsl-surface-container), 1)`          |
| `--hsl-surface-container-low`   | `0, 0%, 100%`                                    |
| `--color-surface-container-low` | `hsla(var(--hsl-surface-container-low), 1)`      |
| `--hsl-surface-container-high`  | `0, 0%, 100%`                                    |
| `--color-surface-container-high`| `hsla(var(--hsl-surface-container-high), 1)`     |
| `--hsl-surface-container-highest` | `0, 0%, 100%`                                   |
| `--color-surface-container-highest` | `hsla(var(--hsl-surface-container-highest), 1)`|
| `--hsl-inverse-surface`         | `0, 0%, 20%`                                     |
| `--color-inverse-surface`       | `hsla(var(--hsl-inverse-surface), 1)`            |
| `--hsl-outline`                 | `0, 0%, 0%`                                      |
| `--color-outline`               | `hsla(var(--hsl-outline), 0.12)`                 |
| `--hsl-on-surface-variant`      | `0, 0%, 53%`                                     |
| `--color-on-surface-variant`    | `hsla(var(--hsl-on-surface-variant), 1)`         |
| `--opacity-disabled`            | `0.6`                                            |
| `--opacity-hover`               | `0.15`                                           |
| `--opacity-focus`               | `0.2`                                            |
| `--cubic-bezier`                | `cubic-bezier(0.25, 0.8, 0.5, 1)`                |
| `--shadow-key-umbra-opacity`    | `rgba(0, 0, 0, 0.2)`                             |
| `--shadow-key-penumbra-opacity` | `rgba(0, 0, 0, 0.14)`                            |
| `--shadow-key-ambient-opacity`  | `rgba(0, 0, 0, 0.12)`                            |
