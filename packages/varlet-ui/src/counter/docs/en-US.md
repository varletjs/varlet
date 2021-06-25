# Counter

### Install

```js
import { createApp } from 'vue'
import { Counter } from '@varlet/ui'

createApp().use(Counter)
```

### Basic Usage

```js
import { ref } from 'vue'

export default {
  setup() {
    const value = ref(0)

    return { value }
  }
}
```

```html
<var-counter v-model="value"/>
```

### Set the value range

```html
<var-counter :min="0" :max="5" v-model="value"/>
```

### Set step

```html
<var-counter :step="10" v-model="value"/>
```

### Decimal length

```html
<var-counter :decimal-length="1" v-model="value" />
```

### Set size

```html
<var-counter
  input-text-size="18px"
  input-width="50px"
  button-size="36px"
  v-model="value"
/>
```

### Disabled

```html
<var-counter disabled v-model="value"/>
```

### Readonly

```html
<var-counter readonly v-model="value"/>
```

### Asynchronous change

In some scenarios, you may need to wait for the server to return successfully before making changes.
`lazy-change` prevents binding value updates on the component itself.
Register `before-change` events for manual updates.

```html
<var-counter
  lazy-change
  v-model="value"
  @before-change="handleBeforeChange"
/>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const value = ref(0)

    const handleBeforeChange = (value, change) => {
      setTimeout(() => change(value), 500)
    }

    return {
      value,
      handleBeforeChange
    }
  }
}
```

### Validate

The values are validated by passing in an array of validators，If the validator returns `true`, the validation passes.
Other values are converted to text as a user prompt.

```html
<var-counter
  :rules="[v => v > 5 || 'Please select a value greater than 5']"
  v-model="value"
/>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `v-model` | The value of the binding | _string \| number_ | `0` |
| `min` | Minimum value | _string \| number_ | `-` |
| `max` | Maximum value | _string \| number_ | `-` |
| `step` | Step size | _string \| number_ | `-` |
| `decimal-length` | Preserve decimal places | _string \| number_ | `-` |
| `color` | Background color | _string_ | `-` |  
| `input-width` | The width of the input box | _string \| number_ | `-` |  
| `input-text-size` | The text size of the input box | _string \| number_ | `-` |
| `button-size` | Button size | _string_ | `true` |
| `readonly` | Whether the readonly | _boolean_ | `false` |
| `disabled` | Whether the disabled | _boolean_ | `false` |
| `disable-increment` | Whether to disable increments | _boolean_ | `false` |
| `disable-decrement` | Whether to disable decrements | _boolean_ | `false` |
| `disable-input` | Whether to disable input | _boolean_ | `false` |
| `increment-button` | Whether to display the increment button | _boolean_ | `true` |
| `decrement-button` | Whether to display the decrement button | _boolean_ | `true` |
| `press` | Long press the open button | _boolean_ | `true` |
| `ripple` | Whether to open ripple | _boolean_ | `true` |
| `validate-trigger` | Timing to trigger validation，Optional value is `onInputChange` `onLazyChange` `onIncrement` `onDecrement` | _ValidateTriggers[]_ | `['onIncrement', 'onDecrement', 'onInputChange', 'onLazyChange']` |
| `rules` | The validation rules，Returns `true` to indicate that the validation passed，The remaining values are converted to text as user prompts | _Array<(value: number) => any>_ | `-` |

### Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | Trigger validate | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clearing validate messages | `-` | `-` |
| `reset` | Clear the value of the binding(set to `min \|\| 0`)and validate messages | `-` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `before-change` | Triggered before the change (lazy-change mode only) | `value: number, change: (value: string \| number) => void` |
| `change` | Triggered on change | `value: number` |
| `increment` | Triggered on increment | `value: number` |
| `decrement` | Triggered on decrement | `value: number` |


### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--counter-padding` | `0 4px` |
| `--counter-font-color` | `#fff` |
| `--counter-background` | `var(--color-primary)` |
| `--counter-input-width` | `28px` |
| `--counter-input-margin` | `0 4px` |
| `--counter-input-font-size` | `14px` |
| `--counter-button-size` | `28px` |
| `--counter-button-icon-size` | `100%` |
| `--counter-disabled-color` | `#aaa` |
| `--input-error-color` | `var(--color-danger`) |