# Switch

### Intro

Switching Selector.

### Install

```js
import { createApp } from 'vue'
import { Switch } from '@varlet/ui'

createApp().use(Switch)
```

### Basic Usage

```html
<var-switch v-model="value" />
```

```javascript
import { ref } from 'vue'

export default {
  setup() {
    const value = ref(true)

    return {
      value
    }
  }
}
```

### Not Available

```html
<var-switch v-model="value" disabled />
<var-switch v-model="value" readonly />
```

### Custom color

```html
<var-switch v-model="value" :ripple="false" />
<var-switch v-model="value" color="#ff9f00" close-color="#f5cb90" />
```

### Size

Use `size` prop to change size of Switch.

```html
<var-switch v-model="value" size="15" />
<var-switch v-model="value" />
<var-switch v-model="value" size="25" />
```

### Loading

```html
<var-switch :model-value="true" loading />
<var-switch :model-value="true" size="25" loading loading-color="#ff9f00" />
```

### Validate value

The values are validated by passing in an array of validators，If the validator returns `true`, the validation passes.
Other values are converted to text as a user prompt.

```html
<var-switch v-model="value" :rules="[(v) => v === true || 'Error！']"/>
```

## API

### Props

| Prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `v-model` | Check status of Switch	| _any_ | `false` |
| `active-value` | The value when the switch is turned on	| _any_ | `true` |
| `inactive-value` | The value when the switch is turned off	| _any_ | `false` |
| `disabled` | Whether to disable switch| _boolean_ | `false` |
| `readonly` | Whether to readonly switch | _boolean_ | `false` |
| `loading` | Whether to show loading icon | _boolean_ | `false` |
| `ripple` | Whether to open ripple | _boolean_ | `true` |
| `color` | Background color when open | _string_ | `#2979ff` |
| `close-color` | Background color when close | _string_ | `#fff` |
| `loading-color` | Color of loading icon | _string_ | `#fff` |
| `size` | Size of switch | _string \| number_ | `20` |
| `rules`| Validation rules | _array_  | - |

### Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `click` | Emitted when component is clicked | `event: Event` |
| `change` | Emitted when check status changed | `value: any` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--switch-track-background` | `#fff` |
| `--switch-track-active-background` | `var(--color-primary)` |
| `--switch-track-error-background` | `var(--color-danger)` |
| `--switch-ripple-color` | `var(--color-primary)` |
| `--switch-handle-background` | `#fff` |
| `--switch-handle-color` | `#fff` |
| `--switch-handle-active-background` | `var(--color-primary)` |
| `--switch-handle-error-background` | `var(--color-danger)` |
