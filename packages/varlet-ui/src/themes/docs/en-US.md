# Theme System

### Intro

The first-party component library provides four sets of themes: `Material Design 2 Light`, `Material Design 2 Dark`, `Material Design 3 Light`, and `Material Design 3 Dark`.

### 可用主题

| Available Themes | Theme Pack |
| --- | --- |
| `Material Design 2 Light` | _-_ |
| `Material Design 2 Dark` | _Themes.dark_ |
| `Material Design 3 Light` | _Themes.md3Light_ |
| `Material Design 3 Dark` | _Themes.md3Dark_ |

### Toggle Theme

```html
<!-- playground-ignore -->
<script setup>
import { StyleProvider, Themes } from '@varlet/ui'
</script>

<template>
  <var-space direction="column" size="large">
    <var-button block @click="() => StyleProvider(null)">Material Design 2 Light</var-button>
    <var-button block @click="() => StyleProvider(Themes.dark)">Material Design 2 Dark</var-button>
    <var-button block @click="() => StyleProvider(Themes.md3Light)">Material Design 3 Light</var-button>
    <var-button block @click="() => StyleProvider(Themes.md3Dark)">Material Design 3 Dark</var-button>
  </var-space>
</template>
```

Inject the `text color` and `background color` variables recommended by the component library to control the overall color.

```css
/* playground-ignore */
body {
  transition: background-color .25s, color .25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
```
