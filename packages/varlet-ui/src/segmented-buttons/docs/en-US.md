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

const value = ref(['bold'])
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

By default, checked items display a checkmark. You can disable it with `checkmark`.

```html
<script setup>
import { ref } from 'vue'

const value = ref('day')
</script>

<template>
  <var-segmented-buttons v-model="value" :checkmark="false">
    <var-segmented-button checked-value="day">Day</var-segmented-button>
    <var-segmented-button checked-value="week">Week</var-segmented-button>
    <var-segmented-button checked-value="month">Month</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### Custom Checkmark

Use the `checkmark` slot to customize the checkmark content. When rendering with `options`, you can also set `options.checkmark`.

```html
<script setup lang="ts">
import { h, ref } from 'vue'

const value = ref('day')

function renderCheckmark() {
  return h(
    'span',
    {
      style: {
        marginRight: '6px',
        fontWeight: '700',
      },
    },
    '✓'
  )
}

const options = [
  { label: 'Day', value: 'day', checkmark: renderCheckmark },
  { label: 'Week', value: 'week', checkmark: renderCheckmark },
  { label: 'Month', value: 'month', checkmark: renderCheckmark },
]
</script>

<template>
  <var-segmented-buttons v-model="value" :options="options" />
</template>
```

### Disabled And Readonly

```html
<script setup>
import { ref } from 'vue'

const disabledValue = ref('day')
const readonlyValue = ref('week')
</script>

<template>
  <var-segmented-buttons v-model="disabledValue">
    <var-segmented-button checked-value="day">Day</var-segmented-button>
    <var-segmented-button checked-value="week" disabled>Week</var-segmented-button>
    <var-segmented-button checked-value="month">Month</var-segmented-button>
  </var-segmented-buttons>

  <var-segmented-buttons v-model="readonlyValue" readonly>
    <var-segmented-button checked-value="day">Day</var-segmented-button>
    <var-segmented-button checked-value="week">Week</var-segmented-button>
    <var-segmented-button checked-value="month">Month</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### Size

```html
<template>
  <var-segmented-buttons size="mini">
    <var-segmented-button checked-value="day">Day</var-segmented-button>
    <var-segmented-button checked-value="week">Week</var-segmented-button>
    <var-segmented-button checked-value="month">Month</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### Options

Use `options` to render the group from data.

```html
<script setup lang="ts">
import { ref } from 'vue'

const value = ref('week')
const options = [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
]
</script>

<template>
  <var-segmented-buttons v-model="value" :options="options" />
</template>
```

### Render Label

`options.label` can be a render function.

```html
<script setup lang="ts">
import { h, ref } from 'vue'

const value = ref('day')

function renderLabel(option, checked) {
  const text = option.value === 'day' ? 'Day' : option.value === 'week' ? 'Week' : 'Month'

  return h(
    'span',
    {
      style: {
        color: checked ? 'var(--color-primary)' : 'inherit',
        fontWeight: checked ? '600' : '500',
      },
    },
    text
  )
}

const options = [
  { label: renderLabel, value: 'day' },
  { label: renderLabel, value: 'week' },
  { label: renderLabel, value: 'month' },
]
</script>

<template>
  <var-segmented-buttons v-model="value" :options="options" />
</template>
```

## API

### Props

#### SegmentedButtons Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model` | Bound value, uses a single value in single-select mode and an array in multiple mode | _any_ | `-` |
| `options` | Option list | _SegmentedButtonsOption[]_ | `[]` |
| `multiple` | Whether to enable multiple selection | _boolean_ | `false` |
| `disabled` | Whether to disable the segmented buttons group | _boolean_ | `false` |
| `readonly` | Whether to set the segmented buttons group to readonly | _boolean_ | `false` |
| `ripple` | Whether to enable ripple effect for the segmented buttons group | _boolean_ | `true` |
| `checkmark` | Whether segmented buttons display a checkmark when checked | _boolean_ | `true` |
| `size` | Size of segmented buttons, can be `mini` `small` `normal` `large` | _string_ | `normal` |
| `rules` | Validation rules | _((v: any) => any) \| ZodType \| Array<((v: any) => any) \| ZodType>_ | `-` |

#### SegmentedButton Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `checked-value` | Value represented by the segmented button | _any_ | `true` |
| `disabled` | Whether to disable the segmented button | _boolean_ | `false` |
| `readonly` | Whether to set the segmented button to readonly | _boolean_ | `false` |
| `ripple` | Whether to enable ripple effect for the segmented button | _boolean_ | `-` |
| `checkmark` | Whether the segmented button displays a checkmark when checked | _boolean_ | `-` |

### Events

#### SegmentedButtons Events

| Event | Description | Arguments |
| --- | --- | --- |
| `change` | Triggered when the segmented buttons group value changes | `value: any \| any[]` |

### Slots

#### SegmentedButtons Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Segmented button content | `-` |

#### SegmentedButton Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `checkmark` | Custom checkmark content of the segmented button | `-` |
| `default` | Content of the segmented button | `-` |

### SegmentedButtonsOption

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| `label` | Content of the segmented button option, can also be a render function | _string \| VNode \| SegmentedButtonsOptionLabelRender_ | `-` |
| `checkmark` | Checkmark content of the segmented button option, or whether to display the default checkmark | _boolean \| VNode \| SegmentedButtonsOptionCheckmarkRender_ | `-` |
| `value` | Option value | _any_ | `-` |
| `disabled` | Whether to disable the segmented button option | _boolean_ | `false` |
| `ripple` | Whether to enable ripple effect for the segmented button option | _boolean_ | `-` |

### SegmentedButtonsOptionLabelRender

| Name | Description | Type |
| --- | --- | --- |
| `option` | Current option | _SegmentedButtonsOption_ |
| `checked` | Whether the current option is checked | _boolean_ |

### SegmentedButtonsOptionCheckmarkRender

| Name | Description | Type |
| --- | --- | --- |
| `option` | Current option | _SegmentedButtonsOption_ |
| `checked` | Whether the current option is checked | _boolean_ |
