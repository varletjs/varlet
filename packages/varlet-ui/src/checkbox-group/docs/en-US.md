# Checkbox

### Intro

A group of options for multiple choices.

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-checkbox v-model="value">Current value: {{ value }}</var-checkbox>
</template>
```

### Set State Value

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-checkbox
    :unchecked-value="0"
    :checked-value="1"
    v-model="value"
  >
    Current value: {{ value }}
  </var-checkbox>
</template>
```

### Modify The Icon And Color

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-checkbox
    unchecked-color="var(--color-warning)" 
    checked-color="var(--color-danger)"
    v-model="value"
  >
    <template #unchecked-icon>
      <var-icon name="heart-half-full" size="24px"/>
    </template>
    <template #checked-icon>
      <var-icon name="heart" size="24px"/>
    </template>
    <template #default>
      Current value: {{ value }}
    </template>
  </var-checkbox>
</template>
```

### Disabled

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-checkbox disabled v-model="value">Current value: {{ value }}</var-checkbox>
</template>
```

### Readonly

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-checkbox readonly v-model="value">Current value: {{ value }}</var-checkbox>
</template>
```

### Indeterminate

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
const indeterminate = ref(true)
</script>

<template>
  <var-space :size="[0, 10]">
    <var-checkbox v-model="value" v-model:indeterminate="indeterminate">
      Current value: {{ value }}
    </var-checkbox>
    <var-button type="primary" @click="indeterminate = !indeterminate">Toggle</var-button>
  </var-space>
</template>
```

### CheckboxGroup

In the checkbox group, you must set the `checked-value` to identify the `checkbox`,
The checkbox group collects all checked identifiers.

```html
<script setup>
import { ref } from 'vue'

const value = ref([])
</script>

<template>
  <var-checkbox-group ref="group" v-model="value">
    <var-checkbox :checked-value="0">Eat</var-checkbox>
    <var-checkbox :checked-value="1">Sleep</var-checkbox>
  </var-checkbox-group>
  <var-space :size="[0, 10]">
    <var-button
      type="primary"
      @click="$refs.group.checkAll()"
    >
      Check All
    </var-button>
    <var-button
      type="primary"
      @click="$refs.group.inverseAll()"
    >
      Inverse All
    </var-button>
  </var-space>
  <div>Current value: {{ value }}</div>
</template>
```

### Vertical Direction

```html
<script setup>
import { ref } from 'vue'

const value = ref([])
</script>

<template>
  <var-checkbox-group v-model="value" direction="vertical">
    <var-checkbox :checked-value="0">Eat</var-checkbox>
    <var-checkbox :checked-value="1">Sleep</var-checkbox>
  </var-checkbox-group>
</template>
```

### Checkbox Validation

```html
<script setup>
import { ref } from 'vue'

const value = ref([])
</script>

<template>
  <var-checkbox
    v-model="value"
    :rules="[v => v || 'Please check your choices']"
  >
    Current value: {{ value }}
  </var-checkbox>
</template>
```

### CheckboxGroup Validate

```html
<script setup>
import { ref } from 'vue'

const value = ref([])
</script>

<template>
  <var-checkbox-group
    v-model="value"
    :rules="[v => v.length === 2 || 'Please check all']"
  >
    <var-checkbox :checked-value="0">Eat</var-checkbox>
    <var-checkbox :checked-value="1">Sleep</var-checkbox>
  </var-checkbox-group>
</template>
```


## API

### Props

#### CheckboxGroup Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model` | The value of the binding | _any[]_ | `[]` |
| `max` | Maximum number of checked | _string \| number_ | `-` |
| `direction` | The layout direction, optional value is `horizontal` `vertical` | _string_ | `horizontal` |
| `rules` | The validation rules, return `true` to indicate that the validation passed. The remaining values are converted to text as user prompts | _Array<(value: any[]) => any>_ | `-` |

#### Checkbox Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model` | The value of the binding | _any_ | `false` |
| `checked-value` | Checked value | _any_ | `true` |
| `unchecked-value` | Unchecked value | _any_ | `false` |
| `checked-color` | Checked color | _string_ | `-` |
| `unchecked-color` | Unchecked color | _string_ | `-` |
| `icon-size` | Icon size | _string \| number_ | `-` |
| `disabled` | Whether the disabled | _boolean_ | `false` |
| `readonly` | Whether the readonly | _boolean_ | `false` |
| `indeterminate` | Whether indeterminate status(style has the highest priority) | _boolean_ | `false` |
| `ripple` | Whether to open ripple | _boolean_ | `true` |
| `rules` | The validation rules, return `true` to indicate that the validation passed. The remaining values are converted to text as user prompts | _Array<(value: any) => any>_ | `-` |

### Methods

#### CheckboxGroup Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `validate` | Trigger validate | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clearing validate messages | `-` | `-` |
| `reset` | Clear the value of the binding(set to `[]`) and validate messages | `-` | `-` |
| `checkAll` | Check all | `-` | `value: any` |
| `inverseAll` | Inverse all | `-` | `value: any` |

#### Checkbox Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `validate` | Trigger validate | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clearing validate messages | `-` | `-` |
| `reset` | Clear the value of the binding(set to `unchecked-value`) and validate messages | `-` | `-` |
| `toggle` | Toggle the checked state, pass `checked-value` to check, `unchecked-value` to uncheck, do not pass or other cases to reverse | `value: any` | `-` |

### Events

#### CheckboxGroup Events

| Event | Description | Arguments |
| --- | --- | --- |
| `change` | Triggered on change | `value: any[]` |

#### Checkbox Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered on Click | `e: Event` |
| `change` | Triggered on change | `value: any` |

### Slots

#### CheckboxGroup Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Checkbox Group content | `-` |

#### Checkbox Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `checked-icon` | Checked icon | `-` |
| `unchecked-icon` | Unchecked icon | `-` |
| `indeterminate-icon` | Indeterminate icon | `-` |
| `default` | Displayed text | `-` |

### Style Variables
Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--checkbox-checked-color` | `var(--color-primary)` |
| `--checkbox-unchecked-color` | `#555` |
| `--checkbox-disabled-color` | `var(--color-text-disabled)` |
| `--checkbox-error-color` | `var(--color-danger)` |
| `--checkbox-action-padding` | `6px` |
| `--checkbox-text-color` | `#555` |
| `--checkbox-icon-size` | `24px` |
