# OTP Input

### Intro

Used for SMS codes, email codes, and other short multi-character verification codes. `v-model` is always a full string.

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-otp-input v-model="value" />
</template>
```

### Type Variants

Use `type` to switch between numeric, alphabetic, and alphanumeric input.

```html
<script setup>
import { ref } from 'vue'

const digitValue = ref('')
const textValue = ref('')
const mixedValue = ref('')
</script>

<template>
  <var-space direction="column" size="large">
    <var-otp-input v-model="digitValue" type="digit" />
    <var-otp-input v-model="textValue" type="text" />
    <var-otp-input v-model="mixedValue" type="alphanumeric" />
  </var-space>
</template>
```

### Separator Slot

Use the `separator` slot to render custom separators between cells.

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-otp-input v-model="value" type="alphanumeric">
    <template #separator="{ index }">
      <span v-if="index === 2">-</span>
    </template>
  </var-otp-input>
</template>
```

### Masked Display

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-otp-input v-model="value" mask />
</template>
```

### Paste Transform

Use `paste-transform` to preprocess pasted content.

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-otp-input
    v-model="value"
    type="alphanumeric"
    :paste-transform="(value) => value.replace(/[-\\s]/g, '').toUpperCase()"
  />
</template>
```

### Validation

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const value = ref('')
</script>

<template>
  <var-otp-input
    v-model="value"
    variant="filled"
    :rules="z.string().length(6, 'OTP length must be 6')"
  />
</template>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model` | OTP value | _string_ | `''` |
| `length` | OTP length | _string \| number_ | `6` |
| `type` | OTP type, options are `digit` `text` `alphanumeric` | _OtpInputType_ | `digit` |
| `variant` | Visual variant, options are `standard` `outlined` `filled` | _Variant_ | `outlined` |
| `mask` | Whether to mask characters | _boolean_ | `false` |
| `mask-symbol` | Mask character | _string_ | `•` |
| `cell-height` | Cell height | _string \| number_ | `48` |
| `cell-max-width` | Cell max width | _string \| number_ | `48` |
| `text-color` | Text color | _string_ | `-` |
| `focus-color` | Main color when focused | _string_ | `-` |
| `blur-color` | Main color when blurred | _string_ | `-` |
| `disabled` | Whether to disable the component | _boolean_ | `false` |
| `readonly` | Whether the component is readonly | _boolean_ | `false` |
| `autofocus` | Whether to autofocus on mount | _boolean_ | `false` |
| `gutter` | Cell gap | _string \| number_ | `8` |
| `validate-trigger` | Validation triggers, options are `onInput` `onClick` `onPaste` `onComplete` | _OtpInputValidateTrigger[]_ | `['onInput', 'onComplete']` |
| `rules` | Validation rules. Returning `true` means valid. Other values are converted to error messages. Supports Zod validation | _((v: string) => any) \| ZodType \| Array<((v: string) => any) \| ZodType>_ | `-` |
| `allow-paste` | Whether to allow full-string pasting | _boolean_ | `true` |
| `paste-transform` | Paste value transformer | _(value: string) => string_ | `-` |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `focus` | Focus the first empty cell, or a specific cell | `index?: number` | `-` |
| `blur` | Blur all cells | `-` | `-` |
| `clear` | Clear the current OTP value | `-` | `-` |
| `validate` | Trigger validation | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clear validation message | `-` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `input` | Emitted when the OTP value changes | `value: string` |
| `click` | Emitted when the component root is clicked | `event: Event` |
| `paste` | Emitted on paste | `value: string`, `event: ClipboardEvent` |
| `complete` | Emitted when input reaches `length` | `value: string` |

### Slots

| Slot | Description | Slot Props |
| --- | --- | --- |
| `separator` | Custom separator content | `index: number` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using the [StyleProvider](#/en-US/style-provider) component.

| Variable | Default |
| --- | --- |
| `--otp-input-gutter` | `8px` |
| `--otp-input-cell-height` | `48px` |
| `--otp-input-cell-max-width` | `48px` |
| `--otp-input-input-font-size` | `20px` |
| `--otp-input-separator-color` | `var(--color-text-disabled)` |
