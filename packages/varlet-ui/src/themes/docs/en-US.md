# Theme System

### Intro

The component library organizes styles through [css variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties). Variables are divided into general style variables and component style variables. It is recommended to use the [StyleProvider](#/en-US/style-provider) component to load theme files and customize the theme. The themes supported by the component library are as follows.

### Available Themes

| Available Themes | Theme Pack |
| --- | --- |
| `Material Design 2 Light` | _CSS Default_ |
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
    <var-button type="primary" block @click="StyleProvider(null)">Material Design 2 Light</var-button>
    <var-button type="primary" block @click="StyleProvider(Themes.dark)">Material Design 2 Dark</var-button>
    <var-button type="primary" block @click="StyleProvider(Themes.md3Light)">Material Design 3 Light</var-button>
    <var-button type="primary" block @click="StyleProvider(Themes.md3Dark)">Material Design 3 Dark</var-button>
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

### Theme Builder

We provide a [theme builder](https://varletjs.org/varlet-theme-builder), which can intelligently deduce color matching that conforms to the design system through product theme colors or product pictures.

- Note: Only supports generating theme colors for Material Design 3

### Common style variables

The following are the common style variables of the component library. For style variables unique to each component, please see the style variable table at the bottom of each component document.

| Variable | Default |
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
