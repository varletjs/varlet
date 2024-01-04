# Chip

### Intro

Chip component, used to display some items, and supports closing items.


### Chip Type

Set the type of the chip with the `type` attribute.

```html
<template>
  <var-space>
    <var-chip>Default Chip</var-chip>
    <var-chip type="primary">Primary Chip</var-chip>
    <var-chip type="success">Success Chip</var-chip>
    <var-chip type="danger">Danger Chip</var-chip>
    <var-chip type="warning">Warning Chip</var-chip>
    <var-chip type="info">Info Chip</var-chip>
  </var-space>
</template>
```

### Plain Chip

Use the `plain` property to make the chip plain.

```html
<template>
  <var-space>
    <var-chip plain>Default Chip</var-chip>
    <var-chip plain type="primary">Primary Chip</var-chip>
    <var-chip plain type="success">Success Chip</var-chip>
    <var-chip plain type="danger">Danger Chip</var-chip>
    <var-chip plain type="warning">Warning Chip</var-chip>
    <var-chip plain type="info">Info Chip</var-chip>
  </var-space>
</template>
```

### Non Round Chip

To cancel fillet style of chip by setting the `round` attribute to `false`.

```html
<template>
  <var-chip :round="false" type="primary">Non Round Chip</var-chip>
</template>
```

### Chip Size

Set the chip size through the `size` attribute.

```html
<template>
  <var-space align="center">
    <var-chip type="primary">Normal Chip</var-chip>
    <var-chip type="success" size="small">Small Chip</var-chip>
    <var-chip type="warning" size="mini">Mini Chip</var-chip>
    <var-chip type="danger" size="large">Large Chip</var-chip>
  </var-space>
</template>
```

### Block Chip

Set the chip to block level through the `block` attribute.

```html
<template>
  <var-chip type="primary" block>Block Chip</var-chip>
</template>
```

### Can Close Chip

Set the paper to be closable through the `closeable` attribute, and use the `icon-name` attribute to set the closing icon style of the paper (It can only be used when `closeable` is `true`).

```html
<script>
  import { ref } from 'vue'

  const show = ref(true)
  const show1= ref(true)
</script>

<template>
  <var-chip closeable v-if="show" @close="show = false">Can Close Chip</var-chip>
  <var-chip 
    closeable 
    icon-name="delete" 
    v-if="show1" 
    @close="show1 = false"
  >
    Custom Close Icon
  </var-chip>
</template>
```

### Custom Color

Set the chip color through the `color` and `text-color` attributes.

```html
<template>
  <var-space>
    <var-chip color="#009688">Chip</var-chip>
    <var-chip color="#009688" plain>Chip</var-chip>
    <var-chip color="#faecd8" text-color="#e6a23c" plain>Chip</var-chip>
    <var-chip color="#faecd8" text-color="#e6a23c">Chip</var-chip>
  </var-space>
</template>
```

### Add Slot

```html
<template>
  <var-space>
    <var-chip>
      Left Slot
      <template #left>
        <var-icon name="star" />
      </template>
    </var-chip>
    <var-chip>
      Right Slot
      <template #right>
        <var-icon name="fire" />
      </template>
    </var-chip>
    <var-chip>
      Left And Right Slots
      <template #left>
        <var-icon name="account-circle" />
      </template>

      <template #right>
        <var-icon name="cake-variant" />
      </template>
    </var-chip>
  </var-space>
</template>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `type` | Chip type, can be set to `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `size` | Chip size, can be set to `normal` `mini` `small` `large` | _string_ | `normal` |
| `plain` | Whether to be hollow label | _boolean_ | `false` |
| `round` | Whether to be round label | _boolean_ | `true` |
| `block` | Whether to be block label | _boolean_ | `false` |
| `closeable` | Whether to be closed label | _boolean_ | `false`|
| `icon-name` | Custom closeable icon must be used when `Closeable` is `true`| _string_ | `-` |
| `namespace` | Closeable icon namespace | _string_ | `var-icon` |
| `color` | The label color | _string_ | `_` |
| `text-color` | The text color takes precedence over the `color` attribute | _string_ | `-` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Chip content | `-` |
| `left` | The content inserted to the left of the chip | `-` |
| `right` | The content inserted to the right of the label | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `close` | Triggered when the Close button is clicked and can only be used when the Close button is displayed | `event: Event` |

### Style Variables
Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--chip-default-text-color` | `#555` |
| `--chip-primary-text-color` | `var(--color-on-primary-container)` |
| `--chip-danger-text-color` | `var(--color-on-danger-container)` |
| `--chip-success-text-color` | `var(--color-on-success-container)` |
| `--chip-warning-text-color` | `var(--color-on-warning-container)` |
| `--chip-info-text-color` | `var(--color-on-info-container)` |
| `--chip-default-color` | `#e0e0e0` |
| `--chip-primary-color` | `var(--color-primary-container)` |
| `--chip-danger-color` | `var(--color-danger-container)` |
| `--chip-success-color` | `var(--color-success-container)` |
| `--chip-warning-color` | `var(--color-warning-container)` |
| `--chip-info-color` | `var(--color-info-container)` |
| `--chip-primary-plain-color` | `var(--color-primary)` |
| `--chip-danger-plain-color` | `var(--color-danger)` |
| `--chip-success-plain-color` | `var(--color-success)` |
| `--chip-warning-plain-color` | `var(--color-warning)` |
| `--chip-info-plain-color` | `var(--color-info)` |
| `--chip-border-radius` | `2px` |
| `--chip-normal-height` | `32px` |
| `--chip-large-height` | `40px` |
| `--chip-small-height` | `24px` |
| `--chip-mini-height` | `16px` |
| `--chip-round-radius` | `100px` |
| `--chip-normal-padding` | `0 10px` |
| `--chip-large-padding` | `0 17px` |
| `--chip-small-padding` | `0 6px` |
| `--chip-mini-padding` | `0 4px` |
| `--chip-text-normal-margin` | `0 5px` |
| `--chip-text-large-margin` | `0 5px` |
| `--chip-text-small-margin` | `0 3px` |
| `--chip-text-mini-margin` | `0 2px` |
| `--chip-mini-font-size` | `var(--font-size-xs)` |
| `--chip-small-font-size` | `var(--font-size-sm)` |
| `--chip-normal-font-size` | `var(--font-size-md)` |
| `--chip-large-font-size` | `var(--font-size-lg)` |