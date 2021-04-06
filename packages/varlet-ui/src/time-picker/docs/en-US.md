# TimePicker

### Intro
Used to select a time.

### Install

```js
import { TimePicker } from '@varlet/ui'

createApp().use(TimePicker)
```

### Basic Usage

```html
<var-time-picker v-model="date" />
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const date = ref('11:20')
    
    return {
      date
    }
  }
}
```

### 24hr Format

Use `format` prop to change the format of the picker. The default value of `format` is `ampm`.

```html
<var-time-picker v-model="date" format="24hr" shadow />
```

### Show Seconds

use `use-seconds` prop to show seconds

```html
<var-time-picker v-model="date" format="24hr" use-seconds />
```

### Readonly

```html
<var-time-picker v-model="date" readonly shadow />
```

### Time Limit

Use `min` and `max` prop to allow the maximum and minimum time.

```html
<var-time-picker v-model="date" format="24hr" min="2:28:38" max="19:40:22" />
```
### Custom

```html
<var-time-picker
  v-model="date"
  header-color="purple"
  color="#7bb872"
  min="2:28:38"
  max="19:40:22"
  shadow
  @change="change"
/>
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const date = ref('05:10')

    const change = (time) => {
      console.log(time)
    }

    return {
      date,
      change
    }
  }
}
```

## API

### Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `v-model` | Selected time（ISO 8601 format, `HH:mm` or `HH:mm:ss`）| _string_ | `-` |
| `format` | Picker type, optional values `ampm\|24hr` | _string_ | `ampm` |
| `color` | Picker color | _string_ | `#2979ff` |
| `header-color` | Color of picker header. If not specified it will use the color defined by color prop or the default picker color. | _string_ | `#2979ff` |
| `shadow` | Whether to add a shadow | _boolean_ | `false` |
| `min` | Minimum allowed time (ISO 8601 format) | _string_ | `-` |
| `max` | Maximum allowed time (ISO 8601 format) | _string_ | `-` |
| `readonly` | Readonly | _boolean_ | `false` |
| `use-seconds` | Whether to display seconds | _boolean_ | `false` |

### Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `change` | Emitted after time changed | `value: string` |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@time-picker-border-radius` | `4px` |
| `@time-picker-font-size` | `@font-size-md` |
| `@time-picker-min-width` | `290px` |
| `@time-picker-height` | `385px` |
| `@time-picker-title-padding` | `16px` |
| `@time-picker-title-color` | `#fff` |
| `@time-picker-title-background` | `@color-primary` |
| `@time-picker-title-time-font-size` | `50px` |
| `@time-picker-title-time-margin` | `0 5px` |
| `@time-picker-title-ampm-margin-left` | `5px` |
| `@time-picker-clock-left` | `27px` |
| `@time-picker-clock-right` | `27px` |
| `@time-picker-clock-top` | `27px` |
| `@time-picker-clock-bottom` | `27px` |
| `@time-picker-clock-container-width` | `270px` |
| `@time-picker-clock-container-height` | `270px` |
| `@time-picker-clock-container-background` | `#e0e0e0` |
| `@time-picker-clock-hand-height` | `calc(50% - 4px)` |
| `@time-picker-clock-hand-width` | `2px` |
| `@time-picker-clock-hand-bottom` | `50%` |
| `@time-picker-clock-hand-left` | `calc(50% - 1px)` |
| `@time-picker-clock-hand-background` | `@color-primary` |
| `@time-picker-clock-hand-border-color` | `@color-primary` |
| `@time-picker-clock-hand-before-width` | `10px` |
| `@time-picker-clock-hand-before-height` | `10px` |
| `@time-picker-clock-hand-before-border-width` | `2px` |
| `@time-picker-clock-hand-after-width` | `4px` |
| `@time-picker-clock-hand-after-height` | `4px` |
| `@time-picker-clock-item-height` | `32px` |
| `@time-picker-clock-item-width` | `32px` |
| `@time-picker-clock-item-active-background` | `@color-primary` |
| `@time-picker-clock-item-active-color` | `#fff` |
| `@time-picker-clock-item-disable-color` | `rgba(0, 0, 0, 0.26)` |
| `@time-picker-inner-left` | `36px` |
| `@time-picker-inner-right` | `36px` |
| `@time-picker-inner-top` | `36px` |
| `@time-picker-inner-bottom` | `36px` |
