# Segmented Buttons

### Intro

Use `SegmentedButtons` and `SegmentedButton` to present a compact group of related options for single or multiple selection.

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const value = ref('day')
</script>

<template>
  <var-segmented-buttons v-model="value">
    <var-segmented-button checked-value="day">Day</var-segmented-button>
    <var-segmented-button checked-value="week">Week</var-segmented-button>
    <var-segmented-button checked-value="month">Month</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### Multiple Selection

```html
<script setup>
import { ref } from 'vue'

const value = ref(['day'])
</script>

<template>
  <var-segmented-buttons v-model="value" multiple>
    <var-segmented-button checked-value="day">Day</var-segmented-button>
    <var-segmented-button checked-value="week">Week</var-segmented-button>
    <var-segmented-button checked-value="month">Month</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### Disable Checkmark

By default, checked items display a checkmark. You can disable it with `checkmark` on `SegmentedButton`.

```html
<script setup>
import { ref } from 'vue'

const value = ref('day')
</script>

<template>
  <var-segmented-buttons v-model="value">
    <var-segmented-button checked-value="day" :checkmark="false">Day</var-segmented-button>
    <var-segmented-button checked-value="week" :checkmark="false">Week</var-segmented-button>
    <var-segmented-button checked-value="month" :checkmark="false">Month</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### Disabled

```html
<script setup>
import { ref } from 'vue'

const disabledValue = ref('day')
</script>

<template>
  <var-segmented-buttons v-model="disabledValue">
    <var-segmented-button checked-value="day" disabled>Day</var-segmented-button>
    <var-segmented-button checked-value="week" disabled>Week</var-segmented-button>
    <var-segmented-button checked-value="month" disabled>Month</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### Readonly

```html
<script setup>
import { ref } from 'vue'

const readonlyValue = ref('day')
</script>

<template>
  <var-segmented-buttons v-model="readonlyValue">
    <var-segmented-button checked-value="day" readonly>Day</var-segmented-button>
    <var-segmented-button checked-value="week" readonly>Week</var-segmented-button>
    <var-segmented-button checked-value="month" readonly>Month</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### Size

```html
<template>
  <var-segmented-buttons size="large">
    <var-segmented-button checked-value="day">Day</var-segmented-button>
    <var-segmented-button checked-value="week">Week</var-segmented-button>
    <var-segmented-button checked-value="month">Month</var-segmented-button>
  </var-segmented-buttons>

  <var-segmented-buttons>
    <var-segmented-button checked-value="day">Day</var-segmented-button>
    <var-segmented-button checked-value="week">Week</var-segmented-button>
    <var-segmented-button checked-value="month">Month</var-segmented-button>
  </var-segmented-buttons>

  <var-segmented-buttons size="small">
    <var-segmented-button checked-value="day">Day</var-segmented-button>
    <var-segmented-button checked-value="week">Week</var-segmented-button>
    <var-segmented-button checked-value="month">Month</var-segmented-button>
  </var-segmented-buttons>

  <var-segmented-buttons size="mini">
    <var-segmented-button checked-value="day">Day</var-segmented-button>
    <var-segmented-button checked-value="week">Week</var-segmented-button>
    <var-segmented-button checked-value="month">Month</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### Options API

Use `options` to render segmented buttons from data.

```html
<script setup>
import { computed, ref } from 'vue'

const value = ref('day')
const options = computed(() => [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
])
</script>

<template>
  <var-segmented-buttons v-model="value" :options="options" />
</template>
```

### Custom Fields

Customize the format of the data in `options` through the `label-key` and `value-key` attributes.

```html
<script setup>
import { computed, ref } from 'vue'

const value = ref('day')
const options = computed(() => [
  { name: 'Day', id: 'day' },
  { name: 'Week', id: 'week' },
  { name: 'Month', id: 'month' },
])
</script>

<template>
  <var-segmented-buttons v-model="value" :options="options" label-key="name" value-key="id" />
</template>
```

## API

### Props

#### SegmentedButtons Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model` | Bound value, uses a single value in single-select mode and an array in multiple mode | _any_ | `-` |
| `options` | Option list | _SegmentedButtonsOption[]_ | `[]` |
| `label-key` | As the key that uniquely identifies label | _string_ | `label` |
| `value-key` | As the key that uniquely identifies value | _string_ | `value` |
| `multiple` | Whether to enable multiple selection | _boolean_ | `false` |
| `size` | Size of segmented buttons, can be `mini` `small` `normal` `large` | _string_ | `normal` |
| `validate-trigger` | Validation trigger timing, can be `onClick` `onChange` | _Array<'onClick' \| 'onChange'>_ | `['onChange']` |
| `rules` | Validation rules | _((v: any) => any) \| ZodType \| Array<((v: any) => any) \| ZodType>_ | `-` |

#### SegmentedButtonsOption

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| `label` | Content of the segmented button option, can also be a render function | _string \| VNode \| ((option: SegmentedButtonsOption, checked: boolean) => VNodeChild)_ | `-` |
| `checkmark` | Checkmark content of the segmented button option, or whether to display the default checkmark | _boolean \| VNode \| ((option: SegmentedButtonsOption, checked: boolean) => VNodeChild)_ | `-` |
| `value` | Option value | _any_ | `-` |
| `disabled` | Whether to disable the segmented button option | _boolean_ | `false` |
| `ripple` | Whether to enable ripple effect for the segmented button option | _boolean_ | `-` |

#### SegmentedButton Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `checked-value` | Value represented by the segmented button | _any_ | `-` |
| `disabled` | Whether to disable the segmented button | _boolean_ | `false` |
| `readonly` | Whether to set the segmented button to readonly | _boolean_ | `false` |
| `ripple` | Whether to enable ripple effect for the segmented button | _boolean_ | `true` |
| `checkmark` | Whether the segmented button displays a checkmark when checked | _boolean_ | `true` |

### Events

#### SegmentedButtons Events

| Event | Description | Arguments |
| --- | --- | --- |
| `change` | Triggered when the segmented buttons group value changes | `value: any \| any[]` |

#### SegmentedButton Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered when the segmented button is clicked | `e: Event` |

### Slots

#### SegmentedButtons Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Segmented button content | `-` |

#### SegmentedButton Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `checkmark` | Custom checkmark icon content displayed when the segmented button is checked | `-` |
| `default` | Label content of the segmented button | `-` |
