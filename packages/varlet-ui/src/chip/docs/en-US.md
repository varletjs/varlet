# Chip

## Install

```js
import { createApp } from 'vue'
import { Chip } from '@varlet/ui'

createApp().use(Chip)
```

### Theme Color Chip

Define the color of the label by setting the `type` attribute

```html
<var-chip type="primary">Primary Chip</var-chip>
<var-chip type="success">Success Chip</var-chip>
<var-chip type="danger">Danger Chip</var-chip>
<var-chip type="warning">Waring Chip</var-chip>
<var-chip type="info">Info Chip</var-chip>
<var-chip>Default Chip</var-chip>
```

### Plain style Chip

Set the label to a hollow style by setting the `plain` attribute

```html
<var-chip plain type="primary">Plain Chip</var-chip>
```

### Non Round Chip

Cancel the fillet style of the label by setting the `round` property to `false`

```html
<var-chip :round="false" type="primary">Non Round Chip</var-chip>
```

### Chip Size

Define the size of the label by setting the `size` attribute

```html
<var-chip size="large">Large Chip</var-chip>
<var-chip>Normal Chip</var-chip>
<var-chip size="small">Small Chip</var-chip>
<var-chip size="mini">Mini Chip</var-chip>
```

### Block Flex

```html
<var-chip type="primary" block>Block Chip</var-chip>
```

### Can Close Chip

Use the `closeable` attribute to display the closing icon of the label, and use the `close-name` attribute to customize
the style of the closing icon (`close-name` must be used when `closeable` is used)

```html
<var-chip closable v-if="show" @close="show = false">Can Close Chip</var-chip>
<var-chip 
  closable 
  icon-name="delete" 
  v-if="show1" 
  @close="show1 = false">
  Custom Close Icon</var-chip>
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

### Custom Color Chip

Customize the label color by setting the `color` and `text-color` properties

```html
<var-chip color="#009688">Chip</var-chip>
<var-chip color="#009688" plain>Chip</var-chip>
<var-chip color="#faecd8" text-color="#e6a23c" plain>Chip</var-chip>
<var-chip color="#faecd8" text-color="#e6a23c">Chip</var-chip>
```

### Add Left And Right Slot Chips

Custom label side slots

```html
<var-chip type="primary" plain>
  Left Slot
  
  <template #left>
    <var-icon name="star" />
  </template>
</var-chip>
<var-chip type="primary" plain>
  Right Slot
  
  <template #right>
    <var-icon name="fire" />
  </template>
</var-chip>
<var-chip type="primary" plain>
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
| `type` | Chip type. Can be set to   `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `size` | Chip size. Can be set to   `normal` `mini` `small` `large` | _string_ | `normal` |
| `plain` | Whether to be hollow label | _boolean_ | `false` |
| `round` | Whether to be round label | _boolean_ | `true` |
| `block` | Whether to be block label | _boolean_ | `false` |
| `closeable` | Whether to be closed label | _boolean_ | `false`|
| `close-name` | Custom Closeable TAB icon must be used when `Closeable` is `True`| _string_ | _ |
| `color` | The label color | _string_ | `_` |
| `text-color` | The text color takes precedence over the `color` attribute | _string_ | `_` |

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

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@chip-default-color` | `#f5f5f5` |
| `@chip-primary-color` | `@color-primary`|
| `@chip-danger-color` |  `@color-danger`|
| `@chip-success-color` | `@color-success`|
| `@chip-warning-color` |  `@color-warning`|
| `@chip-info-color` | `@color-info`|
| `@chip-border-radius` | `2px` |
| `@chip-mini-height` | `16px` |
| `@chip-small-height` | `24px` |
| `@chip-normal-height` | `32px` |
| `@chip-large-height` | `40px` |
| `@chip-round-radius` | `100px` |
| `@chip-mini-padding` | `0 4px` |
| `@chip-small-padding` | `0 6px` |
| `@chip-normal-padding` | `0 10px` |
| `@chip-large-padding` | `0 17px` |
| `@chip-text-large-margin` | `0 5px` |
| `@chip-text-normal-margin` | `0 5px` |
| `@chip-text-small-margin` | `0 3px` |
| `@chip-text-mini-margin` | `0 2px` |