# Button

### Intro

Button component for triggering actions.

### Theme Color Button

```html
<template>
  <var-space :size="[10, 10]">
    <var-button>Default Button</var-button>
    <var-button type="primary">Primary Button</var-button>
    <var-button type="info">Info Button</var-button>
    <var-button type="success">Success Button</var-button>
    <var-button type="warning">Warning Button</var-button>
    <var-button type="danger">Danger Button</var-button>
  </var-space>
</template>
```

### Text Button

```html
<template>
  <var-space :size="[10, 10]">
    <var-button text outline type="primary">Outline Button</var-button>
    <var-button text type="primary">Plain Text Button</var-button>
  </var-space>
</template>
```

### Disabled Status

```html
<template>
  <var-space :size="[10, 10]">
    <var-button disabled>Disabled Status</var-button>
    <var-button disabled text outline>Disabled Status</var-button>
    <var-button disabled text>Disabled Status</var-button>
  </var-space>
</template>
```

### Loading Status

```html
<template>
  <var-space :size="[10, 10]">
    <var-button loading type="primary"> Loading Status </var-button>
    <var-button loading type="info" loading-type="rect"> Loading Status </var-button>
    <var-button loading type="success" loading-type="disappear"> Loading Status </var-button>
    <var-button loading type="danger" loading-type="cube"> Loading Status </var-button>
    <var-button loading type="warning" loading-type="wave"> Loading Status </var-button>
  </var-space>
</template>
```

### Button Size

```html
<template>
  <var-space align="center" :size="[10, 10]">
    <var-button type="primary">Normal Button</var-button>
    <var-button type="success" size="small">Small Button</var-button>
    <var-button type="warning" size="mini">Mini Button</var-button>
    <var-button type="danger" size="large">Large Button</var-button>
  </var-space>
</template>
```

### Block Button

```html
<template>
  <var-button block type="primary">Block Button</var-button>
</template>
```

### Custom Color

```html
<template>
  <var-space :size="[10, 10]">
    <var-button color="#66bb6a" text-color="#fff">Background/Text Color</var-button>
    <var-button color="linear-gradient(to right bottom, #6750A4, #D0BCFF)" text-color="#fff"> Linear Gradient Color </var-button>
  </var-space>
</template>
```

### Round Button

```html
<template>
  <var-space :size="[10, 10]">
    <var-button type="primary" round>
      <var-icon name="plus" />
    </var-button>
    <var-button type="info" round>
      <var-icon name="information" />
    </var-button>
    <var-button type="success" round>
      <var-icon name="check" />
    </var-button>
    <var-button type="warning" round>
      <var-icon name="warning" />
    </var-button>
    <var-button type="danger" round>
      <var-icon name="window-close" />
    </var-button>
  </var-space>
</template>
```

### Events

```html
<script setup>
import { Snackbar } from '@varlet/ui'

function handleClick() {
  Snackbar.success('Click Success')
}

function handleTouchstart() {
  Snackbar.success('Touchstart Success')
}

function handleAutoLoadingClick() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}
</script>

<template>
  <var-space :size="[10, 10]">
    <var-button type="success" @click="handleClick">Click</var-button>
    <var-button type="success" @touchstart="handleTouchstart">TouchStart</var-button>
    <var-button type="success" @click="handleAutoLoadingClick" auto-loading>AutoLoading</var-button>
  </var-space>
</template>
```


### Theme Color Button Group

```html
<template>
  <var-space :size="[10, 10]">
    <var-button-group type="default">
      <var-button>Button</var-button>
      <var-button>Button</var-button>
      <var-button>Button</var-button>
    </var-button-group>
  
    <var-button-group type="primary">
      <var-button type="primary">Button</var-button>
      <var-button type="primary">Button</var-button>
      <var-button type="primary">Button</var-button>
    </var-button-group>
  </var-space>
</template>
```

### Button Group Size

```html
<template>
  <var-space :size="[10, 10]">
    <var-button-group type="primary" size="normal">
      <var-button>Button</var-button>
      <var-button>Button</var-button>
      <var-button>Button</var-button>
    </var-button-group>
  
    <var-button-group type="primary" size="large">
      <var-button>Button</var-button>
      <var-button>Button</var-button>
      <var-button>Button</var-button>
    </var-button-group>
  </var-space>
</template>
```

### Split Button

```html
<template>
  <var-menu placement="bottom" same-width :offset-y="6">
    <var-button-group type="primary">
      <var-button @click.stop>Split Button</var-button>
      <var-button style="padding: 0 6px;">
        <var-icon name="menu-down" :size="24" />
      </var-button>
    </var-button-group>

    <template #menu>
      <var-cell ripple>Split Button</var-cell>
      <var-cell ripple>Split Button</var-cell>
      <var-cell ripple>Split Button</var-cell>
    </template>
  </var-menu>
</template>
```

### Button Group Mode

```html
<template>
  <var-space :size="[10, 10]">
    <var-button-group type="primary" mode="text">
      <var-button>Button</var-button>
      <var-button>Button</var-button>
      <var-button>Button</var-button>
    </var-button-group>
  
    <var-button-group type="primary" mode="outline">
      <var-button>Button</var-button>
      <var-button>Button</var-button>
      <var-button>Button</var-button>
    </var-button-group>

    <var-button-group mode="icon-container">
      <var-button type="warning">
        <var-icon name="warning" />
      </var-button>
      <var-button type="info">
        <var-icon name="information" />
      </var-button>
      <var-button type="success">
        <var-icon name="check" />
      </var-button>
    </var-button-group>
  
    <var-button-group type="primary">
      <var-button>Button</var-button>
      <var-button>Button</var-button>
      <var-button>Button</var-button>
    </var-button-group>
  </var-space>
</template>
```

### Custom Button Group Color

```html
<template>
  <var-button-group type="primary" color="linear-gradient(to bottom right, #6750A4, #D0BCFF)">
    <var-button>Button</var-button>
    <var-button>Button</var-button>
    <var-button>Button</var-button>
  </var-button-group>
</template>
```

### Vertical Button Group

```html
<template>
  <var-space :size="[10, 10]">
    <var-button-group type="primary" mode="text" vertical>
      <var-button>Button</var-button>
      <var-button>Button</var-button>
      <var-button>Button</var-button>
    </var-button-group>
  
    <var-button-group type="primary" mode="outline" vertical>
      <var-button>Button</var-button>
      <var-button>Button</var-button>
      <var-button>Button</var-button>
    </var-button-group>

    <var-button-group mode="icon-container" vertical>
      <var-button type="warning">
        <var-icon name="warning" />
      </var-button>
      <var-button type="info">
        <var-icon name="information" />
      </var-button>
      <var-button type="success">
        <var-icon name="check" />
      </var-button>
    </var-button-group>
    
    <var-button-group type="primary" vertical>
      <var-button>Button</var-button>
      <var-button>Button</var-button>
      <var-button>Button</var-button>
    </var-button-group>
  </var-space>
</template>
```

## API

### Props

#### Button Props

| Prop             | Description                                                                             | Type      | Default        |
|------------------|-----------------------------------------------------------------------------------------|-----------|----------------|
| `type`           | Button type, Can be set to `default` `primary` `info` `success` `warning` `danger`      | _string_  | `default`      |
| `native-type`    | Native button type, Can be set to `button` `submit` `reset` | _string_  | `button`       |
| `size`           | Button size, Can be set to `normal` `mini` `small` `large`                              | _string_  | `normal`       |
| `loading`        | Loading status                                                                          | _boolean_ | `false`        |
| `loading-radius` | Loading radius, Can only be used when `loading-type="circle"`                           | _string  \| number_        | `-`      |
| `loading-type`   | Loading type, Can be set to `circle` `wave` `cube` `rect` `disappear`                   | _string_  | `circle`       |
| `loading-size`   | Loading size, Can be set to `large` `normal` `small` `mini`                             | _string_  | `normal`       |
| `loading-color`  | Loading color                                                                           | _string_  | `currentColor` |
| `auto-loading`   | Autoload mode for easy handling of asynchronous tasks                                   | _boolean_ | `false`        |
| `round`          | Whether to be round button                                                              | _boolean_ | `false`        |
| `block`          | Whether to be block button                                                              | _boolean_ | `false`        |
| `text`           | Whether to be text button                                                               | _boolean_ | `false`        |
| `icon-container` | Whether to serve as an icon container                                                        | _boolean_ | `false`        |
| `outline`        | Whether to be outline button                                                            | _boolean_ | `false`        |
| `disabled`       | Whether to disable button                                                               | _boolean_ | `false`        |
| `ripple`         | Whether to be ripple button                                                             | _boolean_ | `true`         |
| `text-color`     | Button Text color                                                                       | _string_  | `-`            |
| `color`          | Button background color                                                                 | _string_  | `-`            |
| `elevation` | Elevation level, options `true` `false` and level of `0-24` | _string \| number \| boolean_|   `true`    |


#### ButtonGroup Props

| Prop             | Description                                                                             | Type      | Default        |
|--------------|------------------------------------------------------------------------------------------|----------|-----------|
| `type`       | Button Group type, can be set to `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `size`       | Button Group size, can be set to `normal` `mini` `small` `large`                         | _string_ | `normal`  |
| `mode`       | Button Group mode, can be set to `normal` `text` `outline` `icon-container`              | _string_ | `normal`  |
| `vertical`   | Whether to be vertical button  group                                                     | _boolean_ | `false`   |
| `elevation` | Elevation of Button Group, options `true` `false` and level of `0-24` | _string \| number \| boolean_|   `true`    |
| `color`      | Button Group background color                                                            | _string_ | `-`       |
| `text-color`     | Button Group Text color                                                                  | _string_  | `-`            |

### Events

#### Button Events

| Event        | Description                                                                                          | Arguments      |
| ------------ | ---------------------------------------------------------------------------------------------------- | -------------- |
| `click`      | Triggered when the button is clicked. Not triggered when `loading` or `disabled` status is `true`    | `event: Event` |
| `touchstart` | Triggered when the button is touchstart, Not triggered when `loading` or `disabled` status is `true` | `event: Event` |

### Slots

#### Button Slots

| Name | Description | SlotProps |
| --------- | -------------- | --------- |
| `default` | Button content | `-`       |

#### ButtonGroup Slots

| Name | Description | SlotProps |
| --------- | -------------- | --------- |
| `default` | Button Group content | `-`       |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

#### Button Variables

| Variable                       | Default                      |
| ------------------------------ | ---------------------------- |
| `--button-default-text-color` | `#555` |
| `--button-primary-text-color` | `var(--color-on-primary)` |
| `--button-danger-text-color` | `var(--color-on-danger)` |
| `--button-success-text-color` | `var(--color-on-success)` |
| `--button-warning-text-color` | `var(--color-on-warning)` |
| `--button-info-text-color` | `var(--color-on-info)` |
| `--button-default-color` | `#f5f5f5` |
| `--button-primary-color` | `var(--color-primary)`|
| `--button-danger-color` |  `var(--color-danger)`|
| `--button-success-color` | `var(--color-success)`|
| `--button-warning-color` |  `var(--color-warning)`|
| `--button-info-color` | `var(--color-info)`|
| `--button-default-icon-color` | `#555` |
| `--button-primary-icon-color` | `var(--color-on-primary-container)` |
| `--button-danger-icon-color` | `var(--color-on-danger-container)` |
| `--button-success-icon-color` | `var(--color-on-success-container)` |
| `--button-warning-icon-color` | `var(--color-on-warning-container)` |
| `--button-info-icon-color` | `var(--color-on-info-container)` |
| `--button-default-icon-container-color` | `#f5f5f5` |
| `--button-primary-icon-container-color` | `var(--color-primary-container)` |
| `--button-danger-icon-container-color` | `var(--color-danger-container)` |
| `--button-success-icon-container-color` | `var(--color-success-container)` |
| `--button-warning-icon-container-color` | `var(--color-warning-container)` |
| `--button-info-icon-container-color` | `var(--color-info-container)` |
| `--button-disabled-color` | `var(--color-disabled)`|
| `--button-disabled-text-color` | `var(--color-text-disabled)` |
| `--button-border-radius` | `4px` |
| `--button-mini-padding` | `0 9px` |
| `--button-small-padding` | `0 11px` |
| `--button-normal-padding` | `0 15px` |
| `--button-large-padding` | `0 22px` |
| `--button-round-padding` | `6px` |
| `--button-mini-height` | `20px` |
| `--button-small-height` | `28px` |
| `--button-normal-height` | `36px` |
| `--button-large-height` | `44px` |
| `--button-mini-font-size` | `var(--font-size-xs)` |
| `--button-small-font-size` | `var(--font-size-sm)` |
| `--button-normal-font-size` | `var(--font-size-md)` |
| `--button-large-font-size` | `var(--font-size-lg)` |
