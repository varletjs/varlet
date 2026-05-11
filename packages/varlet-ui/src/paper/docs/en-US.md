# Paper

### Intro

An easier container using elevation and water effects.

### Basic Usage

```html
<template>
  <var-paper :elevation="2" :width="100" :height="100" />
</template>
```

### Ripple Effect

```html
<template>
  <var-paper :elevation="2" :width="100" :height="100" ripple />
</template>
```

### Rounded Paper

```html
<template>
  <var-paper :elevation="2" :width="100" :height="100" round />
</template>
```

### Custom Border Radius

```html
<template>
  <var-paper :elevation="2" :width="100" :height="100" :radius="8" />
</template>
```

### Use Slot

```html
<template>
  <var-paper :elevation="2">
    <var-cell>Paper</var-cell>
    <var-cell>Paper</var-cell>
    <var-cell>Paper</var-cell>
  </var-paper>
</template>
```

### Hoverable

```html
<template>
  <var-paper hoverable :elevation="2" :width="100" :height="100" />
</template>
```

### Subtle Background

`surface="low"` softens the background color. It currently only takes effect in the MD3 dark theme.

```html
<template>
  <var-paper surface="low" :elevation="2" :width="100" :height="100" />
</template>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `elevation` | Elevation level, options `true` `false` and level of `0-24` | _string \| number \| boolean_|   `false`    |
| `ripple` | Whether to enable ripple effect | _boolean_ | `false` |
| `radius` | Paper border radius | _string \| number_ | `-` |
| `width` | Paper width | _string \| number_ | `-` |
| `height` | Paper height | _string \| number_ | `-` |
| `round` | Whether to enable round paper | _boolean_ | `false` |
| `inline` | Whether to use inline paper | _boolean_ | `false` |
| `surface`  ***3.16.0*** | Background preset, optional value is `low`. It currently only takes effect in the MD3 dark theme | _string_ | `-` |
| `hoverable`  ***3.16.0*** | Whether to enable hover effect | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| ------- | -------------- | -------------- |
| `click` | Triggered when the paper is clicked | `event: Event` |

### Slots

| Name | Description | SlotProps |
| --- | ----| ---- |
| `default` | Paper content | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| ------ | -------------|
| `--paper-background`    | `var(--color-surface-container-highest)` |
| `--paper-surface-low-background` | `var(--color-surface-container-highest)` |
| `--paper-border-radius` | `4px` |
