# Shimmer Text

### Intro

Text with a shimmer animation, useful for indicating that content is being generated or processed.

### Basic Usage

```html
<template>
  <var-shimmer-text>Generating content</var-shimmer-text>
</template>
```

### Theme Color

Set the theme color through `type`.

```html
<template>
  <var-space direction="column" align="flex-start" :size="[16, 0]">
    <var-shimmer-text>Generating content</var-shimmer-text>
    <var-shimmer-text type="primary">Generating content</var-shimmer-text>
    <var-shimmer-text type="info">Generating content</var-shimmer-text>
    <var-shimmer-text type="success">Generating content</var-shimmer-text>
    <var-shimmer-text type="warning">Generating content</var-shimmer-text>
    <var-shimmer-text type="danger">Generating content</var-shimmer-text>
  </var-space>
</template>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `type` | Type, can be set to `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Text content | `-` |

### Style Variables

| Variable | Default |
| --- | --- |
| `--shimmer-text-color` | `var(--color-on-surface-variant)` |
| `--shimmer-text-highlight-color` | `#fff` |
| `--shimmer-text-duration` | `1.4s` |
| `--shimmer-text-angle` | `100deg` |
