# Badge
## Install

```js
import { createApp } from 'vue'
import { Badge } from '@varlet/ui'

createApp().use(Badge)
```

### Theme Color Badge

Define the color of the badge by setting the `type` attribute

```html
<var-badge type="primary" />
<var-badge type="info" />
<var-badge type="success" />
<var-badge type="warning" />
<var-badge type="danger" />
<var-badge />
```

### Dot Badge

Set the logo as a dot by adding the `dot` attribute

```html
<var-badge type="danger" dot />
```
### Customize Badge Content

Define the content of the logo by setting the value of `value`

```html
<var-badge type="danger" value="badge" />
<var-badge type="danger" value="hot" />
<var-badge type="danger" :value="66" />
```
### Maximum

By setting `value`, `max-value` controls how the content of the logo should be displayed (in effect when `value` and `max-value` are both numbers).

```html
<var-badge type="danger" :value="value" :max-value="maxValue" />
<var-badge type="danger" :value="value1" :max-value="maxValue" />
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const value = ref(88);
    const value1 = ref(188);
    const maxValue = ref(99);

    return { 
      value, 
      value1,
      maxValue 
    }
  }
}
```
### Different Positioning Badges

Define the position of the logo by setting the value of `position`

```html
<var-badge type="danger" position="right-top">
<var-chip plain :round="false" color="#009688">右上</var-chip>
</var-badge>
<var-badge type="danger" position="right-bottom">
<var-chip plain :round="false" color="#009688">右下</var-chip>
</var-badge>
<var-badge type="danger" position="left-top">
<var-chip plain :round="false" color="#009688">左上</var-chip>
</var-badge>
<var-badge type="danger" position="left-bottom">
<var-chip plain :round="false" color="#009688">左下</var-chip>
</var-badge>
```

### Whether To Display The Badge

Define whether the logo should be displayed by setting the value of `hidden`

```html
<var-button @click="handleChange">Click To Change The State</var-button>
<var-badge type="danger" position="right-top" :hidden="hidden">
<var-chip plain :round="false" color="#009688">Badge</var-chip>
</var-badge>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const hidden = ref(false);

    const handleChange = () => {
      hidden.value = !hidden.value
    }

    return { 
      hidden, 
      handleChange 
    }
  }
}
```

### Custom Badge Colors

Customize the logo color by setting the value `color`

```html
<var-badge color="#6200ea" position="right-top">
<var-chip plain :round="false" color="#009688">Badge</var-chip>
</var-badge>
```

### Custom Badge Icon

Define the logo icon by setting the value of `icon`

```html
<var-badge color="#6200ea" position="right-top" icon="account-circle">
<var-chip plain :round="false" color="#009688">Badge</var-chip>
</var-badge>
```

## API

### props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `type` | Badge type. Can be set to `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `dot` | Whether the badge is a dot | _boolean_ | `false`|
| `value` |The value shown in the badge (takes effect when `dot` is `false`) | _string_,_number_| `0`|
| `max-value`|The maximum value shown in the logo, when `value` is greater than `max-value`, displays `max-value+` (takes effect when `value` and `max-value` are both numbers)| _number_| `_`|
| `position` |Define the position of the logo on other labels when there are other labels in the logo tag. Optional values are `right-top`, `top-bottom`, `left-top`, `left-bottom`| _string_ | _ |
| `color` | Custom badge colors | _string_ | `_` |
| `icon` |  Customize the content of the icon in the logo (priority is higher than `value`) | _string_ | `_` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` |  Badge content | `-` |

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