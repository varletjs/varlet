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

### Options API

Setting child elements via the `options` prop.

```html
<script setup>
import { ref } from 'vue'

const value = ref([])
const options = ref([
  { label: 'Eat', value: 0 },
  { label: 'Sleep', value: 1 },
  { label: 'Game', value: 2, disabled: true },
])
</script>

<template>
  <var-checkbox-group v-model="value" :options="options" />
  <div>Current value: {{ value }}</div>
</template>
```

### Custom Fields

Customize the format of the data in `options` through the `label-key` and `value-key` attributes.

```html
<script setup>
import { ref } from 'vue'

const value = ref([])
const options = ref([
  { name: 'Eat', id: 0 },
  { name: 'Sleep', id: 1 },
  { name: 'Game', id: 2 },
])
</script>

<template>
  <var-checkbox-group v-model="value" :options="options" label-key="name" value-key="id" />
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

### Maximum Number Of Checked

In a checkbox group, you can limit the maximum number of selections by setting `max`.

```html
<script setup>
import { ref } from 'vue'

const value = ref([])
</script>

<template>
  <var-checkbox-group v-model="value" :max="1">
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

### Checkbox Validation With Zod

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const value = ref([])
</script>

<template>
  <var-checkbox
    v-model="value"
    :rules="z.boolean().refine((val) => val, { message: 'Please check your choices' })"
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

### CheckboxGroup Validate with Zod

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const value = ref([])
</script>

<template>
  <var-checkbox-group
    v-model="value"
    :rules="z.array(z.number()).length(2, { message: 'Please check all' })"
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
| `options` ***3.2.11*** | Specifies options | _CheckboxGroupOption[]_ | `[]` |
| `label-key` ***3.2.12*** | As the key that uniquely identifies label | _string_ | `label` |
| `value-key` ***3.2.12*** | As the key that uniquely identifies value | _string_ | `value` |
| `rules` | Validation rules, return `true` to indicate verification passes, other types of values ​​will be converted into text as user prompts. [Zod validation](#/en-US/zodValidation) is supported since `3.5.0` | _(v: string) => any \| ZodType \| Array<(v: string) => any \| ZodType>_ | `-` |

#### CheckboxGroupOption 

| Prop | Description | Type | Default |
| ------- | --- |----------------|-----------|
| `label`    |   The text of checkbox    | _string \| VNode \| (option: CheckboxGroupOption, checked: boolean) => VNodeChild_      | `-`   |
| `value`  |    The value of checkbox    | _any_      | `-`   |
| `disabled`    |    Whether to disable checkbox   | _boolean_      | `-`   |

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
| `rules` | Validation rules, return `true` to indicate verification passes, other types of values ​​will be converted into text as user prompts. [Zod validation](#/en-US/zodValidation) is supported since `3.5.0` | _(v: string) => any \| ZodType \| Array<(v: string) => any \| ZodType>_ | `-` |

### Methods

#### CheckboxGroup Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `validate` | Trigger validate | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clearing validate messages | `-` | `-` |
| `reset` | Clear the value of the binding(set to `[]`) and validate messages | `-` | `-` |
| `checkAll` | Check all | `-` | `value: any[]` |
| `inverseAll` | Inverse all | `-` | `value: any[]` |

#### Checkbox Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `validate` | Trigger validate | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clearing validate messages | `-` | `-` |
| `reset` | Clear the value of the binding(set to `unchecked-value`) and validate messages | `-` | `-` |
| `toggle` | Toggle the checked state, pass `checked-value` to check, `unchecked-value` to uncheck, do not pass or other cases to reverse | `value?: any` | `-` |

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
| `default` | Displayed text | `checked: boolean` is checked |

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
