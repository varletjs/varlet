# Picker

### Intro

Two calling methods, function and component, are provided. It also supports cascade mode and can handle multi-level linkage.

## Function call

### Single Column Picker

The function will return the information selected by the user and the user's last action `state`. `state` may be `confirm`, `cancel`, `close`.

```html
<script setup>
import { Picker, Snackbar } from '@varlet/ui'

async function picker() {
  const { state, values, indexes, options } = await Picker({ 
    columns: [
      [
        { text: 'A' }, 
        { text: 'B' }, 
        { text: 'C' }, 
        { text: 'D' }, 
        { text: 'E' }
      ]
    ],
    onChange(values, indexes) {
      Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
    },
  })
}
</script>

<template>
  <var-button type="primary" block @click="picker">Single Column Picker</var-button>
</template>
```

### Multiple Column Picker

```html
<script setup>
import { Picker, Snackbar } from '@varlet/ui'

async function picker() {
  const { state, values, indexes, options } = await Picker({ 
    columns: [
      [
        { text: 'A' }, 
        { text: 'B' }, 
        { text: 'C' }, 
        { text: 'D' }, 
        { text: 'E' }
      ],
       [
        { text: 'A' }, 
        { text: 'B' }, 
        { text: 'C' }, 
        { text: 'D' }, 
        { text: 'E' }
      ],
       [
        { text: 'A' }, 
        { text: 'B' }, 
        { text: 'C' }, 
        { text: 'D' }, 
        { text: 'E' }
      ]
    ],
    onChange(values, indexes) {
      Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
    },
  })
}
</script>

<template>
  <var-button type="primary" block @click="picker">Multiple Column Picker</var-button>
</template>
```

### Cascade Column Picker

Set the `cascade` property to enable cascading scrolling.

```html
<script setup>
import { Picker, Snackbar } from '@varlet/ui'

async function picker() {
  const { state, texts, indexes } = await Picker({
    cascade: true,
    columns: [
      {
        text: '四川省',
        children: [
          {
            text: '成都市',
            children: [
              {
                text: '温江区',
              },
              {
                text: '青羊区',
              },
            ],
          },
        ],
      },
      {
        text: '江苏省',
        children: [
          {
            text: '无锡市',
            children: [
              {
                text: '新吴区',
              },
              {
                text: '滨湖区',
              },
            ],
          },
        ],
      },
    ],
    onChange(values, indexes) {
      Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
    },
  })
}
</script>

<template>
  <var-button type="primary" block @click="picker">Cascade Column Picker</var-button>
</template>
```

### Area Picker

The component library provides cascade data of Chinese provinces and cities, which can be used directly.

```html
<script setup>
import { Picker, Snackbar } from '@varlet/ui'
import columns from '@varlet/ui/json/area.json'

async function picker() {
  const { state, texts, indexes } = await Picker({
    cascade: true,
    columns,
    onChange(values, indexes) {
      Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
    },
  })
}
</script>

<template>
  <var-button type="primary" block @click="picker">Area Picker</var-button>
</template>
```

### Value Mapping

```html
<script setup>
import { Picker, Snackbar } from '@varlet/ui'

async function picker() {
  const { state, values, indexes, options } = await Picker({ 
    columns: [
      [
        { text: 'A', value: 1 },
        { text: 'B', value: 2 },
        { text: 'C', value: 3 },
        { text: 'D', value: 4 },
      ],
      [
        { text: 'A', value: 1 },
        { text: 'B', value: 2 },
        { text: 'C', value: 3 },
        { text: 'D', value: 4 },
      ],
      [
        { text: 'A', value: 1 },
        { text: 'B', value: 2 },
        { text: 'C', value: 3 },
        { text: 'D', value: 4 },
      ],
    ],
    onChange(values, indexes) {
      Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
    },
  })
}
</script>

<template>
  <var-button type="primary" block @click="picker">Value Mapping</var-button>
</template>
```

## Component Call

### Single Column Picker

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const columns = ref([
  [
    { text: 'A' }, 
    { text: 'B' }, 
    { text: 'C' }, 
    { text: 'D' }, 
    { text: 'E' }     
  ]
])

function handleChange(values, indexes) {
  Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
}
</script>

<template>
  <var-picker :columns="columns" @change="handleChange"/>
</template>
```

### Multiple Column Picker

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const columns = ref([
  [
    { text: 'A' }, 
    { text: 'B' }, 
    { text: 'C' }, 
    { text: 'D' }, 
    { text: 'E' }
  ],
  [
    { text: 'A' }, 
    { text: 'B' }, 
    { text: 'C' }, 
    { text: 'D' }, 
    { text: 'E' }
  ],
  [
    { text: 'A' }, 
    { text: 'B' }, 
    { text: 'C' }, 
    { text: 'D' }, 
    { text: 'E' }
  ]
])

function handleChange(values, indexes) {
  Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
}
</script>

<template>
  <var-picker :columns="columns" @change="handleChange" />
</template>
```

### Cascade Column Picker

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const columns = ref([
  {
    text: '四川省',
    children: [
      {
        text: '成都市',
        children: [
          {
            text: '温江区',
          },
          {
            text: '青羊区',
          },
        ],
      },
    ],
  },
  {
    text: '江苏省',
    children: [
      {
        text: '无锡市',
        children: [
          {
            text: '新吴区',
          },
          {
            text: '滨湖区',
          },
        ],
      },
    ],
  },
])

function handleChange(values, indexes) {
  Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
}
</script>

<template>
  <var-picker cascade :columns="columns" @change="handleChange" />
</template>
```

### Area Picker

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'
import area from '@varlet/ui/json/area.json'

const columns = ref(area)

function handleChange(values, indexes) {
  Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
}
</script>

<template>
  <var-picker cascade :columns="columns" @change="handleChange" />
</template>
```

### Value Mapping

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const columns = ref([
  [
    { text: 'A', value: 1 },
    { text: 'B', value: 2 },
    { text: 'C', value: 3 },
    { text: 'D', value: 4 },
  ],
  [
    { text: 'A', value: 1 },
    { text: 'B', value: 2 },
    { text: 'C', value: 3 },
    { text: 'D', value: 4 },
  ],
  [
    { text: 'A', value: 1 },
    { text: 'B', value: 2 },
    { text: 'C', value: 3 },
    { text: 'D', value: 4 },
  ],
])

function handleChange(values, indexes) {
  Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
}
</script>

<template>
  <var-picker :columns="columns" @change="handleChange" />
</template>
```

### Two-way binding

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const values = ref(['A', 'B', 'C'])
const columns = ref([
  [
    { text: 'A' }, 
    { text: 'B' }, 
    { text: 'C' }, 
    { text: 'D' }, 
    { text: 'E' }
  ],
  [
    { text: 'A' }, 
    { text: 'B' }, 
    { text: 'C' }, 
    { text: 'D' }, 
    { text: 'E' }
  ],
  [
    { text: 'A' }, 
    { text: 'B' }, 
    { text: 'C' }, 
    { text: 'D' }, 
    { text: 'E' }
  ]
])

function resetValues() {
  values.value = ['A', 'B', 'C']
}

function handleChange(values, indexes) {
  Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
}
</script>

<template>
  <var-space direction="column" size="large">
    <var-button type="primary" @click="resetValues">values: {{ values }} Click Reset</var-button>
    <var-picker :columns="columns" v-model="values" @change="handleChange" />
  </var-space>
</template>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model` | Selected values | _(string \| number)[]_ | `[]` |
| `columns` | Column content | _PickerColumnOption[] \| PickerColumnOption[][]_ | `[]` |
| `title` | Title | _string_ | `Pick it` |
| `text-key` | Text key | _string_ | `text` |
| `value-key` | Value key | _string_ | `value` |
| `children-key` | Children key | _string_ | `children` |
| `toolbar` | Whether to display the upper toolbar | _boolean_ | `true` |
| `cascade` | Whether to enable cascade mode | _boolean_ | `true` |
| `option-height` | The height of the option | _string \| number_ | `44` |
| `option-count` | Number of visible options | _string \| number_ | `6` |
| `confirm-button-text` | Confirm button text | _string_ | `Confirm` |
| `cancel-button-text` | Cancel button text | _string_ | `Cancel` |
| `confirm-button-text-color` | Confirm button text color | _string_ | `-` |
| `cancel-button-text-color` | Cancel button text color | _string_ | `-` |

### Picker Options

| Prop | Description | Type | Default |
|--------------------------| --- | --- | --- |
| `columns`                | Column content | _PickerColumnOption[] \| PickerColumnOption[][]_ | `[]` |
| `title`                  | Column content | _string_ | `Pick it` |
| `textKey`                | Text key | _string_ | `text` |
| `valueKey`               | Value key | _string_ | `value` |
| `childrenKey`            | Children key | _string_ | `children` |
| `toolbar`                | Whether to display the upper toolbar | _boolean_ | `true` |
| `cascade`                | Whether to enable cascade mode | _boolean_ | `true` |
| `optionHeight`           | The height of the option | _string \| number_ | `44` |
| `optionCount`            | Number of visible options | _string \| number_ | `6` |
| `confirmButtonText`      | Confirm button text | _string_ | `Confirm` |
| `cancelButtonText`       | Cancel button text | _string_ | `Cancel` |
| `confirmButtonTextColor` | Confirm button text color | _string_ | `-` |
| `cancelButtonTextColor`  | Cancel button text color | _string_ | `-` |
| `closeOnClickOverlay`    | Whether to click the overlay to close the picker       | _boolean_ | `true`       |
| `safeArea`               | Whether to enable bottom safety zone adaptation      | _boolean_             | `false`  |
| `onClickOverlay`         | Click overlay callback  | _() => void_   | `-`  |
| `onOpen`                 | Popup open callback | _() => void_ | `-` |
| `onOpened`               | Popup open-animation ends callback | _() => void_ | `-` |
| `onClose`                | Popup close callback | _() => void_ | `-` |
| `onClosed`               | Close pop-up layer callback when animation ends | _() => void_ | `() => void` |
| `onChange`               | Pick callbacks when content changes | _(values: (string \| number)[], indexes: number[], options: PickerColumnOption[]) => void_ | `() => void` |
| `onConfirm`              | Pick callbacks when confirm | _(values: (string \| number)[], indexes: number[], options: PickerColumnOption[]) => void_ | `() => void` |
| `onCancel`               | Pick callbacks when cancel | _(values: (string \| number)[], indexes: number[], options: PickerColumnOption[]) => void_ | `() => void` |

### PickerColumnOption

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `text` | Text | _string \| number_ | `-` |
| `value` | Value | _string \| number_ | `-` |
| `children` | Children list | _PickerColumnOption[]_ | `-` |
| `className` | Class name | _string_ | `-` |
| `textClassName` | Text Class Name | _string_ | `-` |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `confirm` | Immediately stop scrolling and trigger the `confirm` event | `-` | `-` |
| `cancel` | Immediately stop scrolling and trigger the `cancel` event | `-` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `change` | Triggered when the pick content changes | `values: (string \| number)[]` Selected Values <br> `indexes: number[]` Selected indexes <br> `options: PickerColumnOption[]` Selected options |
| `cancel` | Triggered when you click the cancel button | `values: (string \| number)[]` Selected Values <br> `indexes: number[]` Selected indexes <br> `options: PickerColumnOption[]` Selected options |
| `confirm` | Triggered when you click the confirm button | `values: (string \| number)[]` Selected Values <br> `indexes: number[]` Selected indexes <br> `options: PickerColumnOption[]` Selected options |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `title` | Title content | `-` |
| `cancel` | Cancel button content | `-` |
| `confirm` | Confirm button content  | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--picker-background` | `#fff` |
| `--picker-toolbar-height` | `44px` |
| `--picker-confirm-button-text-color` | `var(--color-primary)` |
| `--picker-cancel-button-text-color` | `#888` |
| `--picker-picked-border` | `1px solid var(--color-outline)` |
| `--picker-title-font-size` | `var(--font-size-lg)` |
| `--picker-title-text-color` | `#555` |
| `--picker-option-font-size` | `var(--font-size-lg)` |
| `--picker-option-text-color` | `#555` |
| `--picker-toolbar-padding` | `0 4px` |
| `--picker-mask-background-image` | `linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))` |
