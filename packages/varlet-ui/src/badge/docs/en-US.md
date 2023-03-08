# Badge

### Badge Type

Set the badge type through the `type` attribute.

```html
<template>
  <var-space>
    <var-badge />
    <var-badge type="primary" />
    <var-badge type="info" />
    <var-badge type="success" />
    <var-badge type="warning" />
    <var-badge type="danger" />
  </var-space>
</template>
```

### Dot Badge

Set the badge as a dot through the `dot` attribute.

```html
<template>
  <var-badge type="danger" dot />
</template>
```
### Customize Badge Content

Set the content of the badge through the `value` attribute.

```html
<template>
  <var-space>
    <var-badge type="danger" value="badge" />
    <var-badge type="danger" value="hot" />
    <var-badge type="danger" value="66" />
  </var-space>
</template>
```
### Maximum

Control the range of badge display values through `value` and `max-value` (effective when both `value` and `max-value` exist).

```html
<script setup>
import { ref } from 'vue'

const value = ref(88)
const value1 = ref(188)
const maxValue = ref(99)
</script>

<template>
  <var-space>
    <var-badge type="danger" :value="value" :max-value="maxValue" />
    <var-badge type="danger" :value="value1" :max-value="maxValue" />
  </var-space>
</template>
```

### Max Length

Control the length of the badge display value through `value` and `max-length`. The excess part will be truncated and `...` will be displayed at the end (effective when both `value` and `maxLength` exist).

`maxLength` controls the length of the badge content area, not the total width of the badge, and the unit is `px`.

```html
<script setup>
import { ref } from 'vue'

const value = ref('abcdefghigklmnopqrstuvwxyz')
const maxLength1 = ref(50)
const maxLength2 = ref('100')

<template>
  <var-space>
    <var-badge type="danger" :value="value" :max-length="maxLength1" />
    <var-badge type="danger" :value="value" :max-length="maxLength2" />
  </var-space>
</template>
```

### Different Positioning Badges

Set the position of the badge through the `position` property.

```html
<template>
  <var-space :size="[8,20]">
    <var-badge type="danger" position="right-top">
      <var-chip plain :round="false" color="#009688">The Upper Right</var-chip>
    </var-badge>
    <var-badge type="danger" position="right-bottom">
      <var-chip plain :round="false" color="#009688">The Lower Right</var-chip>
    </var-badge>
    <var-badge type="danger" position="left-top">
      <var-chip plain :round="false" color="#009688">The Upper Left</var-chip>
    </var-badge>
    <var-badge type="danger" position="left-bottom">
      <var-chip plain :round="false" color="#009688">The Lower Left</var-chip>
    </var-badge>
  </var-space>
</template>
```

### Hidden Badge

Control whether the badge is hidden or not via the `hidden` prop.

```html
<script setup>
import { ref } from 'vue'

const hidden = ref(false)

function handleChange() {
  hidden.value = !hidden.value
}
</script>

<template>
  <var-space>
    <var-badge type="danger" position="right-top" :hidden="hidden">
      <var-chip plain :round="false" color="#009688">Badge</var-chip>
    </var-badge>
    <var-button type="success" @click="handleChange">Click To Change The State</var-button>
  </var-space>
</template>
```

### Custom Badge Colors

Set the color of the badge through the `color` property.

```html
<template>
  <var-badge color="#6200ea" position="right-top">
    <var-chip plain :round="false" color="#009688">Badge</var-chip>
  </var-badge>
</template>
```

### Custom Badge Icon

Set Badge Icon through `icon` property.

```html
<template>
  <var-badge color="#6200ea" position="right-top" icon="notebook">
    <var-chip plain :round="false" color="#009688">Badge</var-chip>
  </var-badge>
</template>
```

## API

### Props

| Prop | Description                                                                                                                                                          | Type | Default |
| --- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------| --- | --- |
| `type` | Badge type. Can be set to `default` `primary` `info` `success` `warning` `danger`                                                                                    | _string_ | `default` |
| `hidden` | Whether to hidden badge                                                                                                                                              | _boolean_ | `false` |
| `dot` | Whether the badge is a dot                                                                                                                                           | _boolean_ | `false`|
| `value` | The value shown in the badge (takes effect when `dot` is `false`)                                                                                                    | _string \| number_ | `0`|
| `max-value`| The maximum value shown in the logo, when `value` is greater than `max-value`, displays `max-value+` (effective when both `value` and `max-value` exist)             | _number_| `-` |
| `position` | Define the position of the logo on other labels when there are other labels in the logo tag. Optional values are `right-top` `right-bottom` `left-top` `left-bottom` | _string_ | `right-top` |
| `color` | Custom badge colors                                                                                                                                                  | _string_ | `-` |
| `icon` | Customize the content of the icon in the logo (priority is higher than `value`)                                                                                      | _string_ | `-` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` |  Badge content | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--badge-content-padding` | `2px 6px` |
| `--badge-default-color` | `#e0e0e0` |
| `--badge-primary-color` | `var(--color-primary)`|
| `--badge-danger-color` |  `var(--color-danger)`|
| `--badge-success-color` | `var(--color-success)`|
| `--badge-warning-color` |  `var(--color-warning)`|
| `--badge-info-color` | `var(--color-info)`|
