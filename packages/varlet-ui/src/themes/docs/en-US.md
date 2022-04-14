# Dark Mode

### Intro

The first party of the component library provides the theme of dark mode.
The advantage of dark mode is that it has higher readability in low light environments.

### Toggle Theme

```html
<!-- playground-ignore -->
<script setup>
import dark from '@varlet/ui/es/themes/dark'
import { StyleProvider } from '@varlet/ui'

let currentTheme = null

const toggleTheme = () => {
  currentTheme = currentTheme ? null : dark
  StyleProvider(currentTheme)
}
</script>

<template>
  <var-button block @click="toggleTheme">Toggle Theme</var-button>
</template>
```

Inject the `text color` and `background color` variables recommended by the component library to control the overall color

```less
body {
  transition: background-color .25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
```
