# Link

### Intro

Link component for hyperlink to web pages

### Theme Color Link

```html
<template>
  <var-space :size="[10, 10]">
    <var-link>Default Link</var-link>
    <var-link type="primary">Primary Link</var-link>
    <var-link type="info">Info Link</var-link>
    <var-link type="success">Success Link</var-link>
    <var-link type="warning">Warning Link</var-link>
    <var-link type="danger">Danger Link</var-link>
  </var-space>
</template>
```

### Basic Usage

```html
<template>
  <var-space :size="[10, 10]">
    <var-link href="https://varlet.gitee.io/varlet-ui" target="_blank" type="primary">With Href</var-link>
    <var-link to="/button" type="primary">Use Router Link</var-link>
  </var-space>
</template>
```

### Underline

```html
<template>
  <var-space :size="[10, 10]">
    <var-link type="primary">Underline</var-link>
    <var-link underline="hover" type="primary">Hover</var-link>
    <var-link underline="none" type="primary">Never</var-link>
  </var-space>
</template>
```

### Disabled Status

```html
<template>
  <var-space :size="[10, 10]">
    <var-link disabled>Disabled Status</var-link>
  </var-space>
</template>
```

### Custom Color

```html
<template>
  <var-space :size="[10, 10]">
    <var-link text-color="#01847f">Link</var-link>
    <var-link text-color="#f9d2e4">Link</var-link>
  </var-space>
</template>
```

### Wrap Elements With Default Style

```html
<script setup>
import { VarButton } from '@varlet/ui'
</script>

<template>
  <var-space :size="[10, 10]">
    <var-link href="https://varlet.gitee.io/varlet-ui" target="_blank" default-style>
      <var-button type="primary">To Home</var-button>
    </var-link>
  </var-space>
</template>
```

## API

### Props

| Prop               | Description                                                                       | Type        | Default            |
|------------------|-----------------------------------------------------------------------------------|-----------|----------------|
| `type`           | Link type, Can be set to  `default` `primary` `info` `success` `warning` `danger` | _string_  | `default`      |
| `underline`      | Underline, Can be set to `always` `hover` `none`                                  | _string_  | `always`       |
| `disabled`       | Whether to disable link                                                           | _boolean_ | `false`        |
| `default-style`  | Will reset to an `inline-flex` normal element used to wrap the element            | _boolean_ | `false`         |
| `text-color`     | Link Text color                                                                   | _string_  | `-`            |
| `href`           | same as native hyperlink's `href`, Have higher priority than `to`                 | _string_  | `-`            |
| `target`         | same as the native `target` attribute                                             | _string_  | `-`            |
| `to`             | `router-link` `to`, Will render as `<router-link />`                              | _string_ \| _object_ | `-`        |
| `replace`        | `router-link` `replace`                                                           | _boolean_  | `false`            |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Link content | `-` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable                       | Default                      |
| --- | --- |
| `--link-primary-color` | `var(--color-primary)`|
| `--link-danger-color` |  `var(--color-danger)`|
| `--link-success-color` | `var(--color-success)`|
| `--link-warning-color` |  `var(--color-warning)`|
| `--link-info-color` | `var(--color-info)`|
| `--link-disabled-color` | `var(--color-disabled)`|
