# Select

### Intro

Display and select the content through the drop-down menu

### Basic Usage

The component uses the option's `label` as the displayed text.
The component uses the `value` of the option first as the value of the option, followed by the `label`.

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select placeholder="Please select one the options" v-model="value">
    <var-option label="Eat" />
    <var-option label="Sleep" />
  </var-select>
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
  <var-select
    :hint="false"
    :line="false"
    placeholder="Please select one the options"
    v-model="value"
  >
    <var-option label="Eat" />
    <var-option label="Sleep" />
  </var-select>
</template>
```

### Label relation value

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select placeholder="Please select one the options" v-model="value">
    <var-option label="Eat" :value="1" />
    <var-option label="Sleep" :value="2" />
  </var-select>
</template>
```

### Disabled

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select
    placeholder="Please select one the options"
    disabled
    v-model="value"
  >
    <var-option label="Eat" />
    <var-option label="Sleep" />
  </var-select>
</template>
```

### Readonly

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select
    placeholder="Please select one the options"
    readonly
    v-model="value"
  >
    <var-option label="Eat" />
    <var-option label="Sleep" />
  </var-select>
</template>
```

### Clearable

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select
    placeholder="Please select one the options"
    clearable
    v-model="value"
  >
    <var-option label="Eat" />
    <var-option label="Sleep" />
  </var-select>
</template>
```

### Display Icon

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select placeholder="Please select one the options" v-model="value">
    <template #prepend-icon>
      <var-icon name="plus"/>
    </template>
    <template #append-icon>
      <var-icon name="minus"/>
    </template>
    <template #default>
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </template>
  </var-select>
</template>
```

### Multiple Selection

```html
<script setup>
import { ref } from 'vue'

const value = ref([])
</script>

<template>
  <var-select
    placeholder="Please select multiple options"
    multiple
    v-model="value"
  >
    <var-option label="Eat" />
    <var-option label="Sleep" />
    <var-option label="Play game" />
    <var-option label="Coding" />
  </var-select>
</template>
```

### Multiple choice of paper style

```html
<script setup>
import { ref } from 'vue'

const value = ref([])
</script>

<template>
  <var-select
    placeholder="Please select multiple options"
    chip
    multiple
    v-model="value"
  >
    <var-option label="Eat" />
    <var-option label="Sleep" />
    <var-option label="Play game" />
    <var-option label="Coding" />
  </var-select>
</template>
```

### Validate

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select
    placeholder="Please select one the options"
    :rules="[(v) => v === 'Rest' || 'You must choose to rest']"
    v-model="value"
  >
    <var-option label="Eat" />
    <var-option label="Sleep" />
    <var-option label="Rest" />
  </var-select>
</template>
```

### Multiple Validate

```html
<script setup>
import { ref } from 'vue'

const value = ref([])
</script>

<template>
  <var-select
    placeholder="Please select multiple options"
    multiple
    :rules="[(v) => v.length >= 2 || 'You select at least two options']"
    v-model="value"
  >
    <var-option label="Eat" />
    <var-option label="Sleep" />
    <var-option label="Play game" />
    <var-option label="Coding" />
  </var-select>
</template>
```

## API

### Props

#### Select Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model` | The value of the binding | _any \| any[]_ | `-` |
| `placeholder` | placeholder | _string_ | `-` |
| `multiple` | Whether to enable multiple selection | _boolean_ | `false` |
| `offset-y` | The vertical offset of the drop-down menu | _string \| number_ | `0` |
| `chip` | Whether to use chip style (multiple choices only) | _boolean_ | `false` |
| `line` | Whether to display a dividing line | _boolean_ | `true` |
| `hint` | Whether to use placeholders as prompts | _boolean_ | `true` |
| `text-color` | Text color | _string_ | `-` |
| `focus-color` | The primary color in focus | _string_ | `-` |
| `blur-color` | The primary color in blur | _string_ | `-` |
| `readonly` | Whether the readonly | _boolean_ | `false` |
| `disabled` | Whether the disabled | _boolean_ | `false` |
| `clearable` | Whether the clearable | _boolean_ | `false` |
| `validate-trigger` | Timing to trigger validation， Optional value is `onFocus` `onBlur` `onChange` `onClick` `onClear` `onClose` | _ValidateTriggers[]_ | `['onChange', 'onClear', 'onClose']` |
| `rules` | The validation rules，Returns `true` to indicate that the validation passed，The remaining values are converted to text as user prompts | _Array<(v: any \| any[]) => any>_ | `-` |

#### Option Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `label` | The text that the option displays | _any_ | `-` |
| `value` | The value of the option binding | _any_ | `-` |

### Methods

#### Select Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `focus` | Focus | `-` | `-` |
| `blur` | Blur | `-` | `-` |
| `validate` | Trigger validate | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clearing validate messages | `-` | `-` |
| `reset` | Clear the value of the binding (single set to 'undefined', multiple set to '[]') and the validation messages | `-` | `-` |

### Events

#### Select Events

| Event | Description | Arguments |
| --- | --- | --- |
| `focus` | Trigger while focusing | `event: Event` |
| `blur` | Triggered when out of focus | `event: Event` |
| `click` | Triggered on click | `event: Event` |
| `clear` | Triggered on clearance | `value: any \| any[]` |
| `close` | Triggered on close | `value: any \| any[]` |
| `change` | Triggered when change | `value: any \| any[]` |

### Slots

#### Select Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `prepend-icon` | Prepend icon | `-` |
| `append-icon` | Append icon | `-` |

#### Option Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Options to display the content | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

#### Select Variables

| Variable | Default |
| --- | --- |
| `--select-select-text-color` | `#555` |
| `--select-select-min-height` | `22px` |
| `--select-menu-margin-top` | `10px` |
| `--select-error-color` | `var(--color-danger)` |
| `--select-blur-color` | `#888` |
| `--select-focus-color` | `var(--color-primary)` |
| `--select-scroller-background` | `#fff` |
| `--select-scroller-padding` | `6px 0` |
| `--select-scroller-max-height` | `278px` |
| `--select-placeholder-size` | `16px` |
| `--select-icon-padding` | `16px 0 0` |
| `--select-icon-size` | `20px` |
| `--select-chip-margin` | `5px 5px 0` |
| `--select-line-size` | `1px` |
| `--select-line-spread-size` | `2px` |
| `--select-arrow-size` | `20px` |
| `--select-disabled-color` | `var(--color-text-disabled)` |

#### Option Variables

| Variable | Default |
| --- | --- |
| `--option-height` | `38px` |
| `--option-padding` | `0 12px` |
| `--option-selected-background` | `var(--select-focus-color)` |