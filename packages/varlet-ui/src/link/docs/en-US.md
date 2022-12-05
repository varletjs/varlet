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

### Link Mode

```html
<template>
  <var-space :size="[10, 10]">
    <var-link type="primary" href="https://varlet.gitee.io/varlet-ui/#/en-US/index" target="_blank">Href</var-link>
    <var-link type="primary" to="/button">Router Link</var-link>
  </var-space>
</template>
```

### Underline

```html
<template>
  <var-space :size="[10, 10]">
    <var-link type="primary">Underline</var-link>
    <var-link type="primary" underline="hover">Hover</var-link>
    <var-link type="primary" underline="none">Never</var-link>
  </var-space>
</template>
```

### Disabled Status

```html
<template>
  <var-link disabled>Disabled Status</var-link>
</template>
```

### Custom Color

```html
<template>
  <var-space :size="[10, 10]">
    <var-link text-color="#009688">Link</var-link>
    <var-link text-color="#ab47bc">Link</var-link>
  </var-space>
</template>
```

### Default Slots

```html
<template>
  <var-link href="https://varlet.gitee.io/varlet-ui" target="_blank" underline="none">
    <var-button type="primary">To Home</var-button>
  </var-link>
</template>
```

## API

### Props

| Prop         | Description                                                                       | Type     | Default  |
|--------------|-----------------------------------------------------------------------------------|----------|----------|
| `type`       | Link type, Can be set to  `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `underline`  | Underline, Can be set to `always` `hover` `none`                                  | _string_ | `always` |
| `disabled`   | Whether to disable link                                                           | _boolean_ | `false`  |
| `text-color` | Link text color                                                                   | _string_ | `-`      |
| `text-size`  | Link font size                                                                    | _string \| number_  | `-`            |
| `href`       | Same as native hyperlink's `href`, Have higher priority than `to`                 | _string_ | `-`      |
| `target`     | Same as the native `target` attribute                                             | _string_ | `-`      |
| `to`         | `router-link` `to`, will render as `<router-link />`                              | _string \| object_  | `-`        |
| `replace`    | `router-link` `replace`                                                           | _boolean_ | `false`  |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Link content | `-` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable                       | Default                      |
| --- |------------------------------|
| `--link-primary-color` | `var(--color-primary)`       |
| `--link-danger-color` | `var(--color-danger)`        |
| `--link-success-color` | `var(--color-success)`       |
| `--link-warning-color` | `var(--color-warning)`       |
| `--link-info-color` | `var(--color-info)`          |
| `--link-disabled-color` | `var(--color-text-disabled)` |
| `--link-font-size` | `var(--font-size-md)` |
