# Button

### Install

```js
import { createApp } from 'vue'
import { Button } from '@varlet/ui'

createApp().use(Button)
```

### Theme Color Button

```html
<var-button>Default Button</var-button>
<var-button type="primary">Primary Button</var-button>
<var-button type="info">Info Button</var-button>
<var-button type="success">Success Button</var-button>
<var-button type="warning">Warning Button</var-button>
<var-button type="danger">Danger Button</var-button>
```

### Text Button

```html
<var-button text outline type="primary">Outline Button</var-button>
<var-button text type="primary">Plain Text Button</var-button>
```

### Disabled Status

```html
<var-button disabled>Disabled Status</var-button>
<var-button disabled text outline>Disabled Status</var-button>
<var-button disabled text>Disabled Status</var-button>
```

### Loading Status

```html
<var-button loading type="primary">
  Loading Status
</var-button>
<var-button loading type="info" loading-type="rect">
  Loading Status
</var-button>
<var-button loading type="success" loading-type="disappear">
  Loading Status
</var-button>
<var-button loading type="danger" loading-type="cube">
  Loading Status
</var-button>
<var-button loading type="warning" loading-type="wave">
  Loading Status
</var-button>
```

### Button Size

```html
<var-button type="primary">Normal Button</var-button>
<var-button type="success" size="small">Small Button</var-button>
<var-button type="warning" size="mini">Mini Button</var-button>
<var-button type="danger" size="large">Large Button</var-button>
```

### Block Button

```html
<var-button block type="primary">Block Button</var-button>
```

### Custom Color

```html
<var-button color="#e91e63" text-color="#fff">Background/Text Color</var-button>
<var-button
  color="linear-gradient(to right, #69dbaa, #10ca93)"
  text-color="#fff"
>
  Linear Gradient Color
</var-button>
```

### Round Button

```html
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
```

### Events

```html
<var-button type="success" @click="handleClick">Click</var-button>
<var-button type="success" @touchstart="handleTouchstart">Touchstart</var-button>
```

```js
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const handleClick = () => {
      Snackbar.success('Click Success')
    }

    const handleTouchstart = () => {
      Snackbar.success('Touchstart Success')
    }

    return {
      handleClick,
      handleTouchstart
    }
  }
}
```

## API

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `type` | Button type, Can be set to `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `size` | Button size, Can be set to `normal` `mini` `small` `large` | _string_ | `normal` |
| `loading` | Loading status | _boolean_ | `false` |  
| `loading-radius` | Loading radius, Can only be used when `loading-type="circle"` | _string \| number_ | `12` |
| `loading-type` | Loading type, Can be set to `circle` `wave` `cube` `rect` `disappear` | _string_ | `circle` |
| `loading-size` | Loading size, Can be set to `large` `normal` `small` `mini` don't work on `loading-type="circle"` | _string_ | `normal` |
| `round` | Whether to be round button | _boolean_ | `false` | 
| `block` | Whether to be block button | _boolean_ | `false` | 
| `text` | Whether to be text button | _boolean_ | `false` |
| `outline` | Whether to be outline button | _boolean_ | `false` |
| `disabled` | Whether to disable button | _boolean_ | `false` |
| `ripple` | Whether to be ripple button | _boolean_ | `true` |
| `text-color` | Button Text color | _string_ | `-` |
| `color` | Button background color | _string_ | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered when the button is clicked. Not triggered when `loading` or `disabled` status is `true` | `event: Event` |
| `touchstart` | Triggered when the button is touchstart, Not triggered when `loading` or `disabled` status is `true` | `event: Event` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Button content | `-` |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@button-default-color` | `#f5f5f5` |
| `@button-primary-color` | `@color-primary` |
| `@button-danger-color` |  `@color-danger` |
| `@button-success-color` | `@color-success` |
| `@button-warning-color` |  `@color-warning` |
| `@button-info-color` | `@color-info`|
| `@button-disabled-color` | `@color-disabled` |
| `@button-disabled-text-color` | `#bdbdbd` |
| `@button-border-radius` | `4px` |
| `@button-mini-padding` | `0 9px` |
| `@button-small-padding` | `0 11px` |
| `@button-normal-padding` | `0 15px` |
| `@button-large-padding` | `0 22px` |
| `@button-round-padding` | `6px` |
| `@button-mini-height` | `20px` |
| `@button-small-height` | `28px` |
| `@button-normal-height` | `36px` |
| `@button-large-height` | `44px` |