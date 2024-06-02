# Input

### Intro

The OTP input is used to authenticate users with a one-time password.

### Standard Usage

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-otp-input v-model="value" />
</template>
```

### Readonly

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-otp-input v-model="value" readonly />
</template>
```

### Disabled

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-otp-input v-model="value" disabled />
</template>
```

### Validate

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-otp-input v-model="value" rules="[(v) => v.length === 6 || 'Must enter a 6-digit verification code.']" />
</template>
```

### Variant Appearance

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-otp-input v-model="value" variant="outlined" />
</template>
```

### Smaller Size Variant Appearance

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-otp-input v-model="value" variant="outlined" size="small" />
</template>
```

## API

### Props

| Prop | Description                                                                                                                            | Type | Default |
| --- |----------------------------------------------------------------------------------------------------------------------------------------| --- | --- |
| `v-model` | The value of the binding                                                                                                               | _string\|number_ | `-` |
| `size` | Input size, The optional value is `normal` `small`                                                          | _string_ | `normal` |
| `variant` | Input variants, The optional value is `standard` `outlined`                                      | _string_ | `standard` |
| `text-color` | Text color                                                                                                                             | _string_ | `-` |
| `focus-color` | The primary color in focus                                                                                                             | _string_ | `-` |
| `blur-color` | The primary color in blur                                                                                                              | _string_ | `-` |
| `readonly` | Whether the readonly                                                                                                                   | _boolean_ | `false` |
| `disabled` | Whether the disabled                                                                                                                   | _boolean_ | `false` |
| `autofocus` | Whether the autofocus the first input component                                                                                                                  | _boolean_ | `false` |
| `validate-trigger` | Timing to trigger validation, The optional value is `onFocus` `onBlur` `onChange` `onClick` `onInput`                        | _ValidateTriggers[]_ | `['onInput']` |
| `rules` | The validation rules, return `true` to indicate that the validation passed,The remaining values are converted to text as user prompts | _Array<(v: string) => any>_ | `-` |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `focus` | Focus | `-` | `-` |
| `blur` | Blur | `-` | `-` |
| `validate` | Trigger validate | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clear validate messages | `-` | `-` |
| `reset` | Clear the value of the binding and validate messages | `-` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `focus` | Triggered while focusing | `event: Event` |
| `blur` | Triggered when out of focus | `event: Event` |
| `click` | Triggered on Click | `index: number` |
| `input` | Triggered on input | `value: string` |
| `change` | Triggered on change | `value: string` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--var-otp-input-text-align` | `center` |
| `--var-otp-input-margin-right` | `8px` |
