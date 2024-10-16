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

We provide a [theme builder](https://varletjs.github.io/varlet-theme-builder/), which can intelligently deduce color matching that conforms to the design system through product theme colors or product pictures.

- Note: Only supports generating theme colors for Material Design 3

### Common style variables

The following are the common style variables of the component library. For style variables unique to each component, please see the style variable table at the bottom of each component document.

| Variable | Default |
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