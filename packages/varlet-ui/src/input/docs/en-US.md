# Input

### Install

```js
import { createApp } from 'vue'
import { Input } from '@varlet/ui'

createApp().use(Input)
```

### Basic Usage

The behavior of the input box is consistent with the basic content, and the user can always get a string that conforms to the `type rule when inputting

```js
import { ref } from 'vue'

export default {
  setup() {
    const value = ref('')

    return { value }
  }
}
```

```html
<var-input placeholder="Please enter text" v-model="value" />
```

### Plain Mode

If you only need the basic functionality of the component, you can remove some styles through attributes.

```html
<var-input 
  :hint="false" 
  :line="false" 
  placeholder="Please enter text"
  v-model="value"
/>
```

### Textarea

```html
<var-input placeholder="Please enter text" textarea v-model="value" />
```

### Maxlength

```html
<var-input placeholder="Please enter text" :maxlength="10" v-model="value" />
```

### Disabled

```html
<var-input placeholder="Please enter text" disabled v-model="value" />
```

### Readonly

```html
<var-input placeholder="Please enter text" readonly v-model="value" />
```

### Clearable

```html
<var-input placeholder="Please enter text" clearable v-model="value" />
```

### Display Icon
```js
import { createApp } from 'vue'
import { Icon } from '@varlet/ui'

createApp().use(Icon)
```

```html
<var-input placeholder="Please enter text" v-model="value">
  <template #prepend-icon>
    <var-icon name="plus"/>
  </template>
  <template #append-icon>
    <var-icon name="minus"/>
  </template>
</var-input>
```

### Validate

The values are validated by passing in an array of validators，If the validator returns `true`, the validation passes.
Other values are converted to text as a user prompt.

```html
<var-input
  placeholder="Please enter text"
  :rules="[v => v.length > 6 || 'Text length must be greater than 6']"
  v-model="value"
/>
```

## API

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `v-model` | The value of the binding | _string_ | `-` |
| `placeholder` | placeholder | _string_ | `-` |
| `type` | Input type, The optional value is `text` `password` `number` | _string_ | `text` |
| `maxlength` | Maxlength | _string \| number_ | `-` |
| `textarea` | Is it a textarea | _boolean_ | `false` |  
| `rows` | Number of lines to display in the textarea | _string \| number_ | `8` |  
| `line` | Whether to display a dividing line | _boolean_ | `true` |
| `hint` | Whether to use placeholder as hint | _boolean_ | `true` |
| `text-color` | Text color | _string_ | `-` |
| `focus-color` | The primary color in focus | _string_ | `-` |
| `blur-color` | The primary color in blur | _string_ | `-` |
| `readonly` | Whether the readonly | _boolean_ | `false` |
| `disabled` | Whether the disabled | _boolean_ | `false` |
| `clearable` | Whether the clearable | _boolean_ | `false` |
| `resize` | Whether textarea can be dragged to resize | _boolean_ | `false` |
| `validate-trigger` | Timing to trigger validation, The optional value is `onFocus` `onBlur` `onChange` `onClick` `onClear` `onInput` | _ValidateTriggers[]_ | `['onInput', 'onClear']` |
| `rules` | The validation rules, Returns `true` to indicate that the validation passed,The remaining values are converted to text as user prompts | _Array<(v: string) => any>_ | `-` |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `focus` | Focus | `-` | `-` |
| `blur` | Blur | `-` | `-` |
| `validate` | Trigger validate | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clearing validate messages | `-` | `-` |
| `reset` | Clear the value of the binding and validate messages | `-` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `focus` | Trigger while focusing | `event: Event` |
| `blur` | Triggered when out of focus | `event: Event` |
| `click` | Triggered on Click | `event: Event` |
| `clear` | Triggered on Clearance | `value: string` |
| `input` | Trigger on input | `value: string`, `event: Event` |
| `change` | Trigger on change | `value: string`, `event: Event` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `prepend-icon` | Prepend Icon | `-` |
| `append-icon` | Append Icon | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--input-input-text-color` | `#555` |
| `--input-error-color` | `var(--color-danger)` |
| `--input-blur-color` | `#888` |
| `--input-focus-color` | `var(--color-primary)` |
| `--input-placeholder-size` | `16px` |
| `--input-textarea-height` | `auto` |
| `--input-textarea-padding-top` | `8px` |
| `--input-icon-padding` | `16px 0 0` |
| `--input-icon-size` | `20px` |
| `--input-input-text-color` | `#555` |
| `--input-line-size` | `1px` |
| `--input-line-spread-size` | `2px` |
| `--input-disabled-color` | `var(--color-text-disabled)` |