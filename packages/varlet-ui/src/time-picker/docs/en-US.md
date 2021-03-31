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
| `v-model / model-value` | Selected time（ISO 8601 format, `HH:mm` or `HH:mm:ss`）| _string_ | `-` |
| `format` | Picker type, optional values `ampm｜24hr` | _string_ | `ampm` |
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
