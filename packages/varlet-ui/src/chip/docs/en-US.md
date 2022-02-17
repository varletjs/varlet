# Chip

### Intro

The component library provides `<var-chip>` used to display small pieces of information,
set the paper to be closable through the `closable` attribute.

### Install

```js
import { createApp } from 'vue'
import { Chip } from '@varlet/ui'

createApp().use(Chip)
```

### Chip Type

Set the type of the chip with the 'type' attribute.

```html
<var-chip>Default Chip</var-chip>
<var-chip type="primary">Primary Chip</var-chip>
<var-chip type="success">Success Chip</var-chip>
<var-chip type="danger">Danger Chip</var-chip>
<var-chip type="warning">Waring Chip</var-chip>
<var-chip type="info">Info Chip</var-chip>
```

### Simple Chip

Use the `plain` property to make the chip simple.

```html
<var-chip plain type="primary">Simple Chip</var-chip>
```

### Non Round Chip

To cancel fillet style of chip by setting the `round` attribute to `false`.

```html
<var-chip :round="false" type="primary">Non Round Chip</var-chip>
```

### Chip Size

Set the chip size through the `size` attribute.

```html
<var-chip type="primary">Normal Chip</var-chip>
<var-chip type="success" size="small">Small Chip</var-chip>
<var-chip type="warning" size="mini">Mini Chip</var-chip>
<var-chip type="danger" size="large">Large Chip</var-chip>
```

### Block Flex

Set the chip to block level through the `block` attribute.

```html
<var-chip type="primary" block>Block Chip</var-chip>
```

### Can Close Chip

Set the paper to be closable through the `closable` attribute, and use the `close-name` attribute to set the closing icon style of the paper (It can only be used when `closeable` is `true`).

```html
<var-chip closable v-if="show" @close="show = false">Can Close Chip</var-chip>
<var-chip 
  closable 
  icon-name="delete" 
  v-if="show1" 
  @close="show1 = false">
  Custom Close Icon
</var-chip>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const show = ref(true)
    const show1= ref(true)

    return {
      show,
      show1
    }
  }
}
```

### Custom Color

Set the chip color through the `color` and `text-color` attributes.

```html
<var-chip color="#009688">Chip</var-chip>
<var-chip color="#009688" plain>Chip</var-chip>
<var-chip color="#faecd8" text-color="#e6a23c" plain>Chip</var-chip>
<var-chip color="#faecd8" text-color="#e6a23c">Chip</var-chip>
```

### Add Slot

```html
<var-chip plain>
  Left Slot
  <template #left>
    <var-icon name="star" />
  </template>
</var-chip>
<var-chip plain>
  Right Slot
  <template #right>
    <var-icon name="fire" />
  </template>
</var-chip>
<var-chip plain>
  Left And Right Slots
  <template #left>
    <var-icon name="account-circle" />
  </template>
  
  <template #right>
    <var-icon name="cake-variant" />
  </template>
</var-chip>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `type` | Chip type, Can be set to   `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `size` | Chip size, Can be set to   `normal` `mini` `small` `large` | _string_ | `normal` |
| `plain` | Whether to be hollow label | _boolean_ | `false` |
| `round` | Whether to be round label | _boolean_ | `true` |
| `block` | Whether to be block label | _boolean_ | `false` |
| `closeable` | Whether to be closed label | _boolean_ | `false`|
| `close-name` | Custom Closeable TAB icon must be used when `Closeable` is `true`| _string_ | `-` |
| `color` | The label color | _string_ | `_` |
| `text-color` | The text color takes precedence over the `color` attribute | _string_ | `-` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Chip content | `-` |
| `left` | The content inserted to the left of the chip | `-` |
| `right` | The content inserted to the right of the label | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `close` | Triggered when the Close button is clicked and can only be used when the Close button is displayed | `event: Event` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--chip-default-color` | `#f5f5f5` |
| `--chip-primary-color` | `var(--color-primary)`|
| `--chip-danger-color` |  `var(--color-danger)`|
| `--chip-success-color` | `var(--color-success)`|
| `--chip-warning-color` |  `var(--color-warning)`|
| `--chip-info-color` | `var(--color-info)`|
| `--chip-border-radius` | `2px` |
| `--chip-mini-height` | `16px` |
| `--chip-small-height` | `24px` |
| `--chip-normal-height` | `32px` |
| `--chip-large-height` | `40px` |
| `--chip-round-radius` | `100px` |
| `--chip-mini-padding` | `0 4px` |
| `--chip-small-padding` | `0 6px` |
| `--chip-normal-padding` | `0 10px` |
| `--chip-large-padding` | `0 17px` |
| `--chip-text-large-margin` | `0 5px` |
| `--chip-text-normal-margin` | `0 5px` |
| `--chip-text-small-margin` | `0 3px` |
| `--chip-text-mini-margin` | `0 2px` |