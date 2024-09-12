# Radio

### Intro

Single selection among multiple options.

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-radio v-model="value">Current value: {{ value }}</var-radio>
</template>
```

### Set State Value

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-radio
    :unchecked-value="0"
    :checked-value="1"
    v-model="value"
  >
    Current value: {{ value }}
  </var-radio>
</template>
```

### Modify Icon And Color

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-radio
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
  </var-radio>
</template>
```

### Disabled

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-radio disabled v-model="value">Current value: {{ value }}</var-radio>
</template>
```

### Readonly

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-radio readonly v-model="value">Current value: {{ value }}</var-radio>
</template>
```

### RadioGroup

In the radio group, you must set the `checked-value` to identify the `radio`,
The radio group bind group checked identifiers.

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-radio-group v-model="value">
    <var-radio :checked-value="0">Eat</var-radio>
    <var-radio :checked-value="1">Sleep</var-radio>
  </var-radio-group>
</template>
```

### Options API

Setting child elements via the `options` prop.

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
const options = ref([
  { label: 'Eat', value: 0 },
  { label: 'Sleep', value: 1 },
  { label: 'Game', value: 2, disabled: true },
])
</script>

<template>
  <var-radio-group v-model="value" :options="options" />
  <div>Current value: {{ value }}</div>
</template>
```

### Custom Fields

Customize the format of the data in `options` through the `label-key` and `value-key` attributes.

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
const options = ref([
  { name: 'Eat', id: 0 },
  { name: 'Sleep', id: 1 },
  { name: 'Game', id: 2 },
])
</script>

<template>
  <var-radio-group v-model="value" :options="options" label-key="name" value-key="id" />
  <div>Current value: {{ value }}</div>
</template>
```

### Vertical Direction

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-radio-group v-model="value" direction="vertical">
    <var-radio :checked-value="0">Eat</var-radio>
    <var-radio :checked-value="1">Sleep</var-radio>
  </var-radio-group>
</template>
```

### Radio Validation

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-radio
    v-model="value"
    :rules="[v => v || 'Please check your choice']"
  >
    Current value: {{ value }}
  </var-radio>
</template>
```

### Radio Validate With Zod

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const value = ref(false)
</script>

<template>
  <var-radio
    v-model="value"
    :rules="z.boolean().refine((v) => v, { message: 'Please check your choice' })"
  >
    Current value: {{ value }}
  </var-radio>
</template>
```

### RadioGroup Validate

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-radio-group
    v-model="value"
    :rules="[v => v === 0 || 'Please check eat']"
  >
    <var-radio :checked-value="0">Eat</var-radio>
    <var-radio :checked-value="1">Sleep</var-radio>
  </var-radio-group>
</template>
```

### RadioGroup Validate With Zod

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const value = ref(false)
</script>

<template>
  <var-radio-group
    v-model="value"
    :rules="z.number().refine((v => v === 0, { message: 'Please check eat' }))"
  >
    <var-radio :checked-value="0">Eat</var-radio>
    <var-radio :checked-value="1">Sleep</var-radio>
  </var-radio-group>
</template>
```

## API

### Props

#### RadioGroup Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model` | The value of the binding | _any_ | `-` |
| `direction` | The layout direction, optional value is `horizontal` `vertical` | _string_ | `horizontal` |
| `options` ***3.2.14*** | Specifies options | _RadioGroupOption[]_ | `[]` |
| `label-key` ***3.2.14*** | As the key that uniquely identifies label | _string_ | `label` |
| `value-key` ***3.2.14*** | As the key that uniquely identifies value | _string_ | `value` |
| `rules` | Validation rules, return `true` to indicate verification passes, other types of values ​​will be converted into text as user prompts. [Zod validation](#/en-US/zodValidation) is supported since `3.5.0` | _(v: string) => any \| ZodType \| Array<(v: string) => any \| ZodType>_ | `-` |

#### RadioGroupOption

| Prop | Description | Type | Default |
| ------- | --- |----------------|-----------|
| `label`    |   The text of radio    | _string \| VNode \| (option: RadioGroupOption, checked: boolean) => VNodeChild_      | `-`   |
| `value`  |    The value of radio    | _any_      | `-`   |
| `disabled`    |    Whether to disable radio   | _boolean_      | `-`   |

#### Radio Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model` | The value of the binding | _any_ | `false` |
| `checked-value` | Checked value | _any_ | `true` |
| `unchecked-value` | Unchecked value | _any_ | `false` |
| `checked-color` | Checked color | _string_ | `-` |
| `unchecked-color` | Unchecked color | _string_ | `-` |
| `icon-size` | Icon size | _string \| number_ | `-` |
| `readonly` | Whether the readonly | _boolean_ | `false` |
| `disabled` | Whether the disabled | _boolean_ | `false` |
| `ripple` | Whether to open ripple | _boolean_ | `true` |
| `rules` | Validation rules, return `true` to indicate verification passes, other types of values ​​will be converted into text as user prompts. [Zod validation](#/en-US/zodValidation) is supported since `3.5.0` | _(v: string) => any \| ZodType \| Array<(v: string) => any \| ZodType>_ | `-` |

### Methods

#### RadioGroup Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `validate` | Trigger validate | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clear validate messages | `-` | `-` |
| `reset` | Clear the value of the binding(set to `undefined`) and validate messages | `-` | `-` |

#### Radio Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `validate` | Trigger validate | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clear validate messages | `-` | `-` |
| `reset` | Clear the value of the binding(set to `unchecked-value`) and validate messages | `-` | `-` |
| `toggle` | Toggle the checked state, pass `checked-value` to check, `unchecked-value` to uncheck, do not pass or other cases to reverse | `value: any` | `-` |

### Events

#### RadioGroup Events

| Event | Description | Arguments |
| --- | --- | --- |
| `change` | Triggered on change | `value: any` |

#### Radio Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered on click | `e: Event` |
| `change` | Triggered on change | `value: any` |

### Slots

#### RadioGroup Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Radio Group content | `-` |

#### Radio Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `checked-icon` | Checked icon | `-` |
| `unchecked-icon` | Unchecked icon | `-` |
| `default` | Displayed text | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

#### Radio Variables

| Variable | Default |
| --- | --- |
| `--radio-checked-color` | `var(--color-primary)` |
| `--radio-unchecked-color` | `#555` |
| `--radio-disabled-color` | `var(--color-text-disabled)` |
| `--radio-error-color` | `var(--color-danger)` |
| `--radio-action-padding` | `6px` |
| `--radio-icon-size` | `24px` |
| `--radio-text-color` | `#555` |
