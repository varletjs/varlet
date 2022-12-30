# Space

### Intro

The component library provides two auxiliary layout components,
`<var-space>`,
so that you can do flex layout more efficiently.

### Basic use

```html
<template>
  <var-space>
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
  </var-space>
</template>
```

### Vertical

```html
<template>
  <var-space direction="column" size="large">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
  </var-space>
</template>
```

### Space Size

```html
<template>
  <var-space :size="[20, 20]">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
    <var-button>Button4</var-button>
    <var-button>Button5</var-button>
    <var-button>Button6</var-button>
  </var-space>
</template>
```

### Right Align

```html
<template>
  <var-space justify="end">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>
</template>
```

### Space Around

```html
<template>
  <var-space justify="space-around">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>
</template>
```

### Align Center

```html
<template>
  <var-space justify="center">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>
</template>
```

### Space Between

```html
<template>
  <var-space justify="space-between">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>
</template>
```

## API

### Props

| Prop        | Description                                                                                             | Type     | Default |
|-------------|---------------------------------------------------------------------------------------------------------|----------|---------|
| `align`     | Vertical arrangement, Can be set to `stretch` `center` `start` `end` `baseline`                         | _string_ | `-`     |
| `justify`   | Horizontal arrangement, Can be set to `start` `end` `center` `space-around` `space-between`             | _string_ | `start` |
| `size`      | spacing, Can be set to `mini` `small` `normal` `large` or `[Vertical, Horizontal]`(Support length unit) | _string \| number \| [string \| number, string \| number]_ |`normal`|
| `wrap`      | Whether to exceed the line break                                                                        | _boolean_ | `true`  |
| `direction` | Layout direction, Can be set to `row` `column`                                                          | _string_ | `row`   |
| `inline`    | Is it an inline element                                                                                 | _boolean_ | `false` |

### Slots

| Name      | Description      | SlotProps |
|-----------|------------------|-----------|
| `default` | Content of space | `-`       |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--space-size-mini-y`  | `4px`        |
| `--space-size-mini-x`  | `4px`        |
| `--space-size-small-y` | `6px`        |
| `--space-size-small-x` | `6px`        |
| `--space-size-normal-y` | `8px`        |
| `--space-size-normal-x` | `12px`       |
| `--space-size-large-y` | `12px`       |
| `--space-size-large-x` | `20px`       |