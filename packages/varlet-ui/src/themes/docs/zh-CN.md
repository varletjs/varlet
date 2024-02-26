# 主题系统

### 介绍

组件库第一方提供了 `Material Design 2 Light`, `Material Design 2 Dark`, `Material Design 3 Light`, `Material Design 3 Dark` 四套主题。

### 可用主题

| 主题名称 | 主题包 |
| --- | --- |
| `Material Design 2 亮色` | _-_ |
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
