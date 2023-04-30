# 暗黑模式

### 介绍

组件库第一方提供了暗黑模式的主题，暗黑模式的优势在于在弱光环境下具有更高的可读性。

### 切换主题

```html
<!-- playground-ignore -->
<script setup>
import { StyleProvider, Themes } from '@varlet/ui'

let currentTheme = null

function toggleTheme() {
  currentTheme = currentTheme ? null : Themes.dark
  StyleProvider(currentTheme)
}
</script>

<template>
  <var-button block @click="toggleTheme">切换主题</var-button>
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
