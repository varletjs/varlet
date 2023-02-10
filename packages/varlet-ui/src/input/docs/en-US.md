# Input

### Basic Usage

The behavior of the input box is consistent with the basic content, and the user can always get a string that conforms to the `type rule when inputting.

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input placeholder="Please enter text" v-model="value" />
  <var-input placeholder="Please enter text" v-model="value" variant="outlined" />
</template>
```

### Small Size

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input size="small" placeholder="Please enter text" v-model="value" />
  <var-input size="small" placeholder="Please enter text" v-model="value" variant="outlined" />
</template>
```

### Plain Mode

If you only need the basic functionality of the component, you can remove some styles through attributes.

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input 
    :hint="false" 
    :line="false" 
    placeholder="Please enter text"
    v-model="value"
  />
</template>
```

### Textarea

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input placeholder="Please enter text" textarea v-model="value" />
  <var-input placeholder="Please enter text" textarea v-model="value" variant="outlined" />
</template>
```

### Maxlength

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input placeholder="Please enter text" :maxlength="10" v-model="value" />
  <var-input placeholder="Please enter text" :maxlength="10" v-model="value" variant="outlined" />
</template>
```

### Disabled

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input placeholder="Please enter text" disabled v-model="value" />
  <var-input placeholder="Please enter text" disabled v-model="value" variant="outlined" />
</template>
```

### Readonly

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input placeholder="Please enter text" readonly v-model="value" />
  <var-input placeholder="Please enter text" readonly v-model="value" variant="outlined" />
</template>
```

### Clearable

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input placeholder="Please enter text" clearable v-model="value" />
  <var-input placeholder="Please enter text" clearable v-model="value" variant="outlined" />
</template>
```

### Display Icon

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input placeholder="Please enter text" v-model="value">
    <template #prepend-icon>
      <var-icon name="plus"/>
    </template>
    <template #append-icon>
      <var-icon name="minus"/>
    </template>
  </var-input>
  <var-input placeholder="Please enter text" v-model="value" variant="outlined">
    <template #prepend-icon>
      <var-icon name="plus"/>
    </template>
    <template #append-icon>
      <var-icon name="minus"/>
    </template>
  </var-input>
</template>
```

### Validate

The values are validated by passing in an array of validators，If the validator returns `true`, the validation passes.
Other values are converted to text as a user prompt.

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input
    placeholder="Please enter text"
    :rules="[v => v.length > 6 || 'Text length must be greater than 6']"
    v-model="value"
  />
  <var-input
    placeholder="Please enter text"
    :rules="[v => v.length > 6 || 'Text length must be greater than 6']"
    v-model="value"
    variant="outlined"
  />
</template>
```

## API

### Props

| Prop | Description                                                                                                                            | Type | Default | 
| --- |----------------------------------------------------------------------------------------------------------------------------------------| --- | --- | 
| `v-model` | The value of the binding                                                                                                               | _string_ | `-` |
| `placeholder` | placeholder                                                                                                                            | _string_ | `-` |
| `type` | Input type, The optional value is `text` `password` `number` `tel`                                                                     | _string_ | `text` |
| `size` | Input size, The optional value is `small`                                                          | _string_ | `-` |
| `variant` | Input variants, The optional value is `standard` `outlined`                                      | _string_ | `standard` |
| `maxlength` | Maxlength                                                                                                                              | _string \| number_ | `-` |
| `textarea` | Is it a textarea                                                                                                                       | _boolean_ | `false` |  
| `rows` | Number of lines to display in the textarea                                                                                             | _string \| number_ | `8` |  
| `line` | Whether to display a dividing line                                                                                                     | _boolean_ | `true` |
| `hint` | Whether to use placeholder as hint                                                                                                     | _boolean_ | `true` |
| `text-color` | Text color                                                                                                                             | _string_ | `-` |
| `focus-color` | The primary color in focus                                                                                                             | _string_ | `-` |
| `blur-color` | The primary color in blur                                                                                                              | _string_ | `-` |
| `readonly` | Whether the readonly                                                                                                                   | _boolean_ | `false` |
| `disabled` | Whether the disabled                                                                                                                   | _boolean_ | `false` |
| `clearable` | Whether the clearable                                                                                                                  | _boolean_ | `false` |
| `resize` | Whether textarea can be dragged to resize                                                                                              | _boolean_ | `false` |
| `autofocus` | Whether the autofocus                                                                                                                  | _boolean_ | `false` |
| `validate-trigger` | Timing to trigger validation, The optional value is `onFocus` `onBlur` `onChange` `onClick` `onClear` `onInput`                        | _ValidateTriggers[]_ | `['onInput', 'onClear']` |
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

| Name | Description | SlotProps |
| --- | --- | --- |
| `prepend-icon` | Prepend Icon | `-` |
| `append-icon` | Append Icon | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| `--input-box-input-text-color` | `#555` |
| `--input-box-error-color` | `var(--color-danger)` |
| `--input-box-blur-color` | `#888` |
| `--input-box-focus-color` | `var(--color-primary)` |
| `--input-box-placeholder-size` | `16px` |
| `--input-box-textarea-padding-top` | `8px` |
| `--input-box-input-padding-top` | `16px` |
| `--input-box-input-padding-bottom` | `16px` |
| `--input-box-input-padding-left` | `14px` |
| `--input-box-input-padding-right` | `14px` |
| `--input-box-icon-padding` | `20px 0 0` |
| `--input-box-icon-size` | `20px` |
| `--input-box-line-size` | `1px` |
| `--input-box-line-focus-size` | `2px` |
| `--input-box-disabled-color` | `var(--color-text-disabled)` |
| `--input-input-height` | `24px` |
| `--input-textarea-height` | `auto` |
