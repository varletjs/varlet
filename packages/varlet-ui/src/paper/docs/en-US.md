# Paper

### Intro

Create an easier container using elevation and water effects

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

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `elevation` | Elevation level, options `true` `false` and level of `0-24` | _string \| number \| boolean_|   `true`    |
| `ripple` | Whether to enable ripple effect | _boolean_ | `-` |
| `radius` | Paper border radius | _string \| number_ | `-` |
| `width` | Paper width | _string \| number_ | `-` |
| `height` | Paper height | _string \| number_ | `-` |
| `round` | Whether to enable round paper | _boolean_ | `false` |
| `inline` | Whether to use inline paper | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| ------- | -------------- | -------------- |
| `click` | Triggered when the paper is clicked | `event: Event` |

### Slots

| Name | Description | SlotProps |
| --- | ----| ---- |
| `default` | Paper content | `-` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| ------ | -------------|
| `--paper-background` | `#fff` |
