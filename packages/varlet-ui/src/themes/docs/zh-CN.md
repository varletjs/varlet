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
    <var-button block @click="() => StyleProvider(null)">Material Design 2 亮色</var-button>
    <var-button block @click="() => StyleProvider(Themes.dark)">Material Design 2 暗色</var-button>
    <var-button block @click="() => StyleProvider(Themes.md3Light)">Material Design 3 亮色</var-button>
    <var-button block @click="() => StyleProvider(Themes.md3Dark)">Material Design 3 暗色</var-button>
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

我们提供了一个[主题生成器](https://varletjs.github.io/varlet-theme-builder)，可以通过产品主题色或产品图片智能推导出符合设计系统的配色。

- 注意: 只支持生成 Material Design 3 的主题配色

### 通用样式变量

以下为组件库的通用样式变量，各组件独有的样式变量请查看各组件文档底部的样式变量表格。

| 变量名 | 默认值 |
| --- | --- |
| `--font-size-xs` | `10px` |
| `--font-size-sm` | `12px` |
| `--font-size-md` | `14px` |
| `--font-size-lg` | `16px` |
| `--icon-size-xs` | `16px` |
| `--icon-size-sm` | `18px` |
| `--icon-size-md` | `20px` |
| `--icon-size-lg` | `22px` |
| `--color-body` | `#fff` |
| `--color-text` | `#333` |
| `--color-primary` | `#3a7afe` |
| `--color-info` | `#00afef` |
| `--color-success` | `#00c48f` |
| `--color-warning` | `#ff9f00` |
| `--color-danger` | `#f44336` |
| `--color-disabled` | `#e0e0e0` |
| `--color-text-disabled` | `#aaa` |
| `--color-on-primary` | `#fff` |
| `--color-on-info` | `#fff` |
| `--color-on-success` | `#fff` |
| `--color-on-warning` | `#fff` |
| `--color-on-danger` | `#fff` |
| `--color-primary-container` | `#3a7afe` |
| `--color-info-container` | `#00afef` |
| `--color-success-container` | `#00c48f` |
| `--color-warning-container` | `#ff9f00` |
| `--color-danger-container` | `#f44336` |
| `--color-on-primary-container` | `#fff` |
| `--color-on-info-container` | `#fff` |
| `--color-on-success-container` | `#fff` |
| `--color-on-warning-container` | `#fff` |
| `--color-on-danger-container` | `#fff` |
| `--color-surface-container` | `#fff` |
| `--color-surface-container-low` | `#fff` |
| `--color-surface-container-high` | `#fff` |
| `--color-surface-container-highest` | `#fff` |
| `--color-inverse-surface` | `#333` |
| `--color-outline` | `rgba(0, 0, 0, 0.12)` |
| `--color-on-surface-variant` | `#888` |
| `--opacity-disabled` | `0.6` |
| `--opacity-hover` | `0.15` |
| `--opacity-focus` | `0.2` |
| `--cubic-bezier` | `cubic-bezier(0.25, 0.8, 0.5, 1)` |
| `--shadow-key-umbra-opacity` | `rgba(0, 0, 0, 0.2)` |
| `--shadow-key-penumbra-opacity` | `rgba(0, 0, 0, 0.14)` |
| `--shadow-key-ambient-opacity` | `rgba(0, 0, 0, 0.12)` |
