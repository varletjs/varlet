# Switch

### Intro

Switching Selector.

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <var-switch v-model="value" />
</template>
```

### Disabled

```html
<template>
  <var-switch v-model="value" disabled />
</template>
```

### Readonly

```html
<template>
  <var-switch v-model="value" readonly />
</template>
```

### Custom Color

```html
<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <var-switch v-model="value" color="var(--color-warning)" close-color="var(--color-info)" />
</template>
```

### Size

Use `size` prop to change size of Switch.

```html
<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <var-switch v-model="value" :size="15" />
  <var-switch v-model="value" />
  <var-switch v-model="value" :size="25" />
</template>
```

### Loading

```html
<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <var-switch v-model="true" loading />
</template>
```

### Validate Value

The values are validated by passing in an array of validators. If the validator returns `true`, the validation passes.
Other values are converted to text as a user prompt.

```html
<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <var-switch v-model="value" :rules="[(v) => v === true || 'Error！']"/>
</template>
```

### Asynchronous Change

In some scenarios, you may need to wait for the server to return successfully before making changes.
`lazy-change` prevents binding value updates on the component itself.
Register `before-change` events for manual updates.

```html
<script setup>
import { ref } from 'vue'

const value = ref(true)

function handleBeforeChange(value, change) {
  setTimeout(() => change(value), 500)
}
</script>

<template>
  <var-switch 
    lazy-change
    v-model="value"
    @before-change="handleBeforeChange"
  />
</template>
```

## API

### Props

| Prop             | Description | Type | Default |
|------------------| -------------- | -------- | ---------- |
| `v-model`        | Check status of Switch	| _any_ | `false` |
| `active-value`   | The value when the switch is turned on	| _any_ | `true` |
| `inactive-value` | The value when the switch is turned off	| _any_ | `false` |
| `disabled`       | Whether to disable switch| _boolean_ | `false` |
| `readonly`       | Whether to readonly switch | _boolean_ | `false` |
| `loading`        | Whether to show loading icon | _boolean_ | `false` |
| `ripple`         | Whether to open ripple | _boolean_ | `true` |
| `color`          | Background color when open | _string_ | `-` |
| `close-color`    | Background color when close | _string_ | `-` |
| `loading-color`  | Color of loading icon | _string_ | `-` |
| `size`           | Size of switch | _string \| number_ | `-` |
| `rules`          | Validation rules | _Array<(value: any) => any>_  | `-` |
| `lazy-change`    | Whether to allow the `before-change` event to be triggered | _boolean_  | `false` |
| `validate-trigger` | Timing to trigger verification, optional values are `onChange` `onLazyChange` | _ValidateTriggers[]_ | `['onChange', 'onLazyChange']` |

### Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `click` | Emitted when component is clicked | `event: Event` |
| `change` | Emitted when check status changed | `value: any` |
| `before-change` | Triggered before a change event (`lazy-change` mode only) | `value: any` <br> `change: (value: any) => void` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--switch-track-background` | `#fff` |
| `--switch-track-active-background` | `var(--color-primary)` |
| `--switch-track-error-background` | `var(--color-danger)` |
| `--switch-ripple-color` | `var(--color-primary)` |
| `--switch-handle-background` | `#fff` |
| `--switch-handle-color` | `#fff` |
| `--switch-handle-active-background` | `var(--color-primary)` |
| `--switch-handle-error-background` | `var(--color-danger)` |
| `--switch-disabled-opacity` | `var(--opacity-disabled)` |
