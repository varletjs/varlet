# Checkbox

### Intro

A group of options for multiple choices

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

### Set State value

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

### Modify the icon and color

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-checkbox
    unchecked-color="#e99eb4"
    checked-color="#f44336"
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

### CheckboxGroup/Actions

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

  <var-button
    class="button"
    type="primary"
    @click="$refs.group.checkAll()"
  >
    Check All
  </var-button>
  <var-button
    class="button"
    type="primary"
    @click="$refs.group.inverseAll()"
  >
    Inverse All
  </var-button>
</template>
```

### Checkbox validation

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

### CheckboxGroup validate

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
| `direction` | The layout direction，Optional value is `horizontal` `vertical` | _string \| number_ | `horizontal` |
| `rules` | The validation rules，Returns `true` to indicate that the validation passed，The remaining values are converted to text as user prompts | _Array<(value: any[]) => any>_ | `horizontal` |

#### Checkbox Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model` | The value of the binding | _any_ | `false` |
| `checked-value` | Checked value | _any_ | `true` |
| `unchecked-value` | Unchecked value | _any_ | `false` |
| `checked-color` | Checked color | _any_ | `-` |
| `unchecked-color` | Unchecked color | _any_ | `-` |
| `icon-size` | Icon size | _string |\ number_ | `-` |
| `readonly` | Whether the readonly | _boolean_ | `false` |
| `disabled` | Whether the disabled | _boolean_ | `false` |
| `ripple` | Whether to open ripple | _boolean_ | `true` |
| `rules` | The validation rules，Returns `true` to indicate that the validation passed，The remaining values are converted to text as user prompts | _Array<(value: any) => any>_ | `-` |

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
| `change` | Trigger on change | `value: any[]` |

#### Checkbox Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered on Click | `e: Event` |
| `change` | Trigger on change | `value: any` |

### Slots

#### CheckboxGroup Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Checkbox group content | `-` |

#### Checkbox Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `checked-icon` | Checked icon | `-` |
| `unchecked-icon` | Unchecked icon | `-` |
| `default` | Displayed text | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--checkbox-checked-color` | `var(--color-primary)` |
| `--checkbox-unchecked-color` | `#555` |
| `--checkbox-disabled-color` | `var(--color-text-disabled)` |
| `--checkbox-error-color` | `var(--color-danger)` |
| `--checkbox-action-padding` | `6px` |
| `--checkbox-icon-size` | `24px` |