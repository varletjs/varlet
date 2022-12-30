# Picker

### Intro
Provides two kinds of function and component call mode support cascading mode at the same time, can handle multilevel linkage.

## Function Call

### Single-column Picker

```html
<script setup>
import { Picker } from '@varlet/ui'

const columns = [Array.from({ length: 20 }).map((_, index) => index)]

const picker = async () => {
  await Picker(columns)
}
</script>

<template>
  <var-button type="primary" block @click="picker">Single Column Picker</var-button>
</template>
```

### Multi-column Picker

A two-dimensional array is passed in, and each entry of the array is the contents of each column.
Returns the user triggered status, selected text, and selected index.

```html
<script setup>
import { Picker } from '@varlet/ui'

const columns = [
  Array.from({ length: 20 }).map((_, index) => index),
  Array.from({ length: 20 }).map((_, index) => index),
  Array.from({ length: 20 }).map((_, index) => index)
]

const picker = async () => {
  const { state, texts, indexes } = await Picker(columns)
}
</script>

<template>
  <var-button type="primary" block @click="picker">Multiple Column Picker</var-button>
</template>
```

### Cascade Picker

Passing in a `cascade` attribute starts cascading.
Built-in component library provides a three-level linkage between provinces and municipalities, import `area.json`.

```html
<script setup>
import { Picker } from '@varlet/ui'
import columns from '@varlet/ui/json/area.json'

const picker = async () => {
  const { state, texts, indexes } = await Picker({
    cascade: true,
    columns
  })
}
</script>

<template>
  <var-button type="primary" block @click="picker">Cascade Column Picker</var-button>
</template>
```

### Text Formatter

Picker passes in a `textFormatter` attribute to customize the text.
`textFormatter` accepts two parameters. The first parameter `text` is the current text, and the second parameter
`columnIndex` is the subscript of the column where the current text is located.
The following is the case of year month day selection.

```html
<script setup>
import { Picker } from '@varlet/ui'

const genCounts = length => Array.from({ length }, (_, index) => index + 1)

const months = genCounts(12)
const leapYearFebruaryDates = genCounts(29)
const februaryDates = genCounts(28)
const oddMonthDates = genCounts(31)
const evenMonthDates = genCounts(30)

const isOddMonth = month => [1, 3, 5, 7, 8, 10, 12].includes(month)

const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

const genDates = (year, month) => {
  if (isLeapYear(year) && month === 2) {
    return leapYearFebruaryDates
  }

  if (!isLeapYear(year) && month === 2) {
    return februaryDates
  }

  if (isOddMonth(month)) {
    return oddMonthDates
  }

  return evenMonthDates
}

const genColumns = (startYear, endYear) => {
  const columns = []

  for (let year = startYear; year < endYear; year++) {
    columns.push({
      text: year,
      children: months.map((month) => {
        return {
          text: month,
          children: genDates(year, month).map(date => ({ text: date }))
        }
      })
    })
  }

  return columns
}

const columns = genColumns(1970, 2100)

const textFormatter = (text, columnIndex) => {
  if (columnIndex === 0) return `${text} YEAR`
  else if (columnIndex === 1) return `${text} MONTH`
  else if (columnIndex === 2) return `${text} DATE`
}

const picker = async () => {
  const { state, texts, indexes } = await Picker({
    cascade: true,
    columns,
    textFormatter,
  })
}
</script>

<template>
  <var-button type="primary" block @click="picker">Text Formatter</var-button>
</template>
```

### Mapping of values

```html
<script setup>
import { Picker, Snackbar } from '@varlet/ui'

const rawColumns = [
  [
    { label: 'Ember Spirit', id: 1 },
    { label: 'Storm Spirit', id: 2 },
    { label: 'Earth Spirit', id: 3 },
    { label: 'Void Spirit', id: 4 },
  ],
  [
    { label: 'Ember Spirit', id: 1 },
    { label: 'Storm Spirit', id: 2 },
    { label: 'Earth Spirit', id: 3 },
    { label: 'Void Spirit', id: 4 },
  ],
  [
    { label: 'Ember Spirit', id: 1 },
    { label: 'Storm Spirit', id: 2 },
    { label: 'Earth Spirit', id: 3 },
    { label: 'Void Spirit', id: 4 },
  ],
]

const normalizedColumns = rawColumns.map((column) => column.map(option => option.label))

const handleChange = (_, [i1, i2, i3]) => {
  const [c1, c2, c3] = rawColumns
  const ids = [c1[i1].id, c2[i2].id, c3[i3].id]
  Snackbar(ids.toString())
}

const picker = async () => {
  const { state, texts, indexes } = await Picker({
    columns: normalizedColumns,
    onChange: handleChange
  })
}
</script>

<template>
  <var-button type="primary" block @click="picker">Mapping of values</var-button>
</template>
```

## Component Call

### Single-column Picker

```html
<script setup>
import { ref } from 'vue'

const columns = ref([Array.from({ length: 20 }).map((_, index) => index)])
</script>

<template>
  <var-picker :columns="columns" />
</template>
```

### Multi-column Picker

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  Array.from({ length: 20 }).map((_, index) => index),
  Array.from({ length: 20 }).map((_, index) => index),
  Array.from({ length: 20 }).map((_, index) => index)
])
</script>

<template>
  <var-picker :columns="columns" />
</template>
```

### Cascade Picker

```html
<script setup>
import { ref } from 'vue'
import area from '@varlet/ui/json/area.json'

const columns = ref(area)
</script>

<template>
  <var-picker cascade :columns="columns" />
</template>
```

### Text Formatter

```html
<script setup>
import { ref } from 'vue'

const genCounts = length => Array.from({ length }, (_, index) => index + 1)

const months = genCounts(12)
const leapYearFebruaryDates = genCounts(29)
const februaryDates = genCounts(28)
const oddMonthDates = genCounts(31)
const evenMonthDates = genCounts(30)

const isOddMonth = month => [1, 3, 5, 7, 8, 10, 12].includes(month)

const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

const genDates = (year, month) => {
  if (isLeapYear(year) && month === 2) {
    return leapYearFebruaryDates
  }

  if (!isLeapYear(year) && month === 2) {
    return februaryDates
  }

  if (isOddMonth(month)) {
    return oddMonthDates
  }

  return evenMonthDates
}

const genColumns = (startYear, endYear) => {
  const columns = []

  for (let year = startYear; year < endYear; year++) {
    columns.push({
      text: year,
      children: months.map((month) => {
        return {
          text: month,
          children: genDates(year, month).map(date => ({ text: date }))
        }
      })
    })
  }

  return columns
}

const columns = ref(genColumns(1970, 2100))

const textFormatter = (text, columnIndex) => {
  if (columnIndex === 0) return `${text} YEAR`
  else if (columnIndex === 1) return `${text} MONTH`
  else if (columnIndex === 2) return `${text} DATE`
}
</script>

<template>
  <var-picker cascade :columns="columns" :text-formatter="textFormatter" />
</template>
```

### Mapping of values

```html
<script setup>
import { ref } from 'vue' 
import { Snackbar } from '@varlet/ui'

const rawColumns = [
  [
    { label: 'Ember Spirit', id: 1 },
    { label: 'Storm Spirit', id: 2 },
    { label: 'Earth Spirit', id: 3 },
    { label: 'Void Spirit', id: 4 },
  ],
  [
    { label: 'Ember Spirit', id: 1 },
    { label: 'Storm Spirit', id: 2 },
    { label: 'Earth Spirit', id: 3 },
    { label: 'Void Spirit', id: 4 },
  ],
  [
    { label: 'Ember Spirit', id: 1 },
    { label: 'Storm Spirit', id: 2 },
    { label: 'Earth Spirit', id: 3 },
    { label: 'Void Spirit', id: 4 },
  ]
]

const normalizedColumns = rawColumns.map(column => column.map(option => option.label))

const columns = ref(normalizedColumns)

const handleChange = (_, [i1, i2, i3]) => {
  const [c1, c2, c3] = rawColumns
  const ids = [c1[i1].id, c2[i2].id, c3[i3].id]
  Snackbar(ids.toString())
}
</script>

<template>
  <var-picker :columns="columns" @change="handleChange" />
</template>
```

## API

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `columns` | Column content | _NormalColumn[] \| CascadeColumn[] \| Texts_ | `[]` |
| `title` | title | _string_ | `Pick it` |
| `text-key` | The attribute key of the text | _string_ | `text` |
| `toolbar` | Whether to display the top toolbar | _string_ | `true` |
| `cascade` | Whether to enable cascading mode | _boolean_ | `true` |
| `cascade-initial-indexes` | List of initialization indices for cascade mode | _number[]_ | `-` |
| `text-formatter` | Text formatter | _(text: any, columnIndex: number) => any_ | `text => text` |
| `option-height` | Option height(px rem) | _string \| number_ | `44` |
| `option-count` | Number of options visible | _string \| number_ | `6` |
| `confirm-button-text` | Confirm button text | _string_ | `Confirm` |
| `cancel-button-text` | Cancel button text | _string_ | `Cancel` |
| `confirm-button-text-color` | Confirm the button text color | _string_ | `-` |
| `cancel-button-text-color` | Cancel button text color | _string_ | `-` |

### Picker Options

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `columns` | Column content | _NormalColumn[] \| CascadeColumn[] \| Texts_ | `[]` |
| `title` | title | _string_ | `Pick it` |
| `textKey` | The attribute key of the text | _string_ | `text` |
| `toolbar` | Whether to display the top toolbar | _string_ | `true` |
| `cascade` | Whether to enable cascading mode | _boolean_ | `true` |
| `cascadeInitialIndexes` | List of initialization indices for cascade mode | _number[]_ | `-` |
| `textFormatter` | Text formatter | _(text: any, columnIndex: number) => any_ | `text => text` |
| `optionHeight` | Option height | _string \| number_ | `44` |
| `optionCount` | Number of options visible | _string \| number_ | `6` |
| `confirmButtonText` | Confirm button text | _string_ | `Confirm` |
| `cancelButtonText` | Cancel button text | _string_ | `Cancel` |
| `confirmButtonTextColor` | Confirm the button text color | _string_ | `-` |
| `cancelButtonTextColor` | Cancel button text color | _string_ | `-` |
| `onOpen` | Popup open callback | _() => void_ | `-` |
| `onOpened` | Popup open-animation ends callback  | _() => void_ | `-` |
| `onClose` | Popup close callback | _() => void_ | `-` |
| `onClosed` | Close pop-up layer callback when animation ends | _(texts: Texts, indexes: number[]) => void_ | `() => void` |
| `onChange` | Pick callbacks when content changes | _(texts: Texts, indexes: number[]) => void_ | `() => void` |
| `onConfirm` | Pick callbacks when confirm | _(texts: Texts, indexes: number[]) => void_ | `() => void` |
| `onCancel` | Pick callbacks when cancel | _(texts: Texts, indexes: number[]) => void_ | `() => void` |

### Picker NormalColumn

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `texts` | Text array | _Texts_ | `-` |
| `initialIndex` | Initialize index | _number_ | `0` |

### Picker CascadeColumn

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `text` | Each line of text | _any_ | `-` |
| `children` | children tree | _CascadeColumn[]_ | `-` |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `confirm` | Immediately stop scrolling and trigger the `confirm` event | `-` | `-` |
| `cancel` | Immediately stop scrolling and trigger the `cancel` event | `-` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `change` | Triggered when the pick content changes | `texts: Texts` Text array <br> `indexes: number[]` picked index array |
| `cancel` | Triggered when you click the cancel button | `texts: Texts` Text array <br> `indexes: number[]` picked index array |
| `confirm` | Triggered when you click the confirm button | `texts: Texts` Text array <br> `indexes: number[]` picked index array |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `cancel` | cancel button content | `-` |
| `title` | title content | `-` |
| `confirm` | confirm button content | `-` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--picker-background` | `#fff` |
| `--picker-toolbar-height` | `44px` |
| `--picker-confirm-button-text-color` | `var(--color-primary)` |
| `--picker-cancel-button-text-color` | `#888` |
| `--picker-picked-border` | `1px solid rgba(0, 0, 0, 0.12)` |
| `--picker-title-font-size` | `16px` |
| `--picker-toolbar-padding` | `0 4px` |
| `--picker-mask-background-image` | `linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))` |