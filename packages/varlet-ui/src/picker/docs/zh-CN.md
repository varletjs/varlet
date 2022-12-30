# 多列选择器

### 介绍
提供了函数和组件两种调用方式。同时支持级联模式，可以处理多级联动。

## 函数调用

### 单列选择

```html
<script setup>
import { Picker } from '@varlet/ui'

const columns = [Array.from({ length: 20 }).map((_, index) => index)]

const picker = async () => {
  await Picker(columns)
}
</script>

<template>
  <var-button type="primary" block @click="picker">单列选择</var-button>
</template>
```

### 多列选择

Picker 传入一个二维数组 `columns`, `columns` 的每一项就是每一列的内容。
Picker 返回用户触发状态，选择的文本，选择的下标。

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
  <var-button type="primary" block @click="picker">多列选择</var-button>
</template>
```

### 级联选择

Picker 传入一个 `cascade` 属性开启级联滚动。
组件库内置提供了省市区三级联动，引入 `area.json`。

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
  <var-button type="primary" block @click="picker">级联选择</var-button>
</template>
```

### 文本格式化

Picker 传入一个 `textFormatter` 属性可对文本进行自定义。
`textFormatter` 接受两个参数, 第一个参数 `text` 是当前文本, 第二个参数 `columnIndex` 是当前文本所在列的下标。
下面是年月日选择的案例。

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
  if (columnIndex === 0) return `${text}年`
  else if (columnIndex === 1) return `${text}月`
  else if (columnIndex === 2) return `${text}日`
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
  <var-button type="primary" block @click="picker">文本格式化</var-button>
</template>
```

### 值映射

```html
<script setup>
import { Picker, Snackbar } from '@varlet/ui'

const rawColumns = [
  [
    { label: '灰烬之灵', id: 1 },
    { label: '风暴之灵', id: 2 },
    { label: '大地之灵', id: 3 },
    { label: '虚空之灵', id: 4 },
  ],
  [
    { label: '灰烬之灵', id: 1 },
    { label: '风暴之灵', id: 2 },
    { label: '大地之灵', id: 3 },
    { label: '虚空之灵', id: 4 },
  ],
  [
    { label: '灰烬之灵', id: 1 },
    { label: '风暴之灵', id: 2 },
    { label: '大地之灵', id: 3 },
    { label: '虚空之灵', id: 4 },
  ]
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
  <var-button type="primary" block @click="picker">值的映射</var-button>
</template>
```

## 组件调用

### 单列选择

```html
<script setup>
import { ref } from 'vue'

const columns = ref([Array.from({ length: 20 }).map((_, index) => index)])
</script>

<template>
  <var-picker :columns="columns" />
</template>
```

### 多列选择

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

### 级联选择

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

### 文本格式化

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
  if (columnIndex === 0) return `${text}年`
  else if (columnIndex === 1) return `${text}月`
  else if (columnIndex === 2) return `${text}日`
}
</script>

<template>
  <var-picker cascade :columns="columns" :text-formatter="textFormatter" />
</template>
```

### 值的映射

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const rawColumns = [
  [
    { label: '灰烬之灵', id: 1 },
    { label: '风暴之灵', id: 2 },
    { label: '大地之灵', id: 3 },
    { label: '虚空之灵', id: 4 },
  ],
  [
    { label: '灰烬之灵', id: 1 },
    { label: '风暴之灵', id: 2 },
    { label: '大地之灵', id: 3 },
    { label: '虚空之灵', id: 4 },
  ],
  [
    { label: '灰烬之灵', id: 1 },
    { label: '风暴之灵', id: 2 },
    { label: '大地之灵', id: 3 },
    { label: '虚空之灵', id: 4 },
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

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `columns` | 列内容 | _NormalColumn[] \| CascadeColumn[] \| Texts_ | `[]` |
| `title` | 标题 | _string_ | `提示` |
| `text-key` | 文本的属性 key | _string_ | `text` |
| `toolbar` | 是否显示上方工具栏 | _string_ | `true` |
| `cascade` | 是否开启级联模式 | _boolean_ | `true` |
| `cascade-initial-indexes` | 级联模式的初始化索引列表 | _number[]_ | `-` |
| `text-formatter` | 文本格式化 | _(text: any, columnIndex: number) => any_ | `text => text` |
| `option-height` | 选项的高度(px rem) | _string \| number_ | `44` |
| `option-count` | 可见的选项个数 | _string \| number_ | `6` |
| `confirm-button-text` | 确认按钮文字 | _string_ | `确认` |
| `cancel-button-text` | 取消按钮文字 | _string_ | `取消` |
| `confirm-button-text-color` | 确认按钮文字颜色 | _string_ | `-` |
| `cancel-button-text-color` | 取消按钮文字颜色 | _string_ | `-` |

### Picker Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `columns` | 列内容 | _NormalColumn[] \| CascadeColumn[] \| Texts_ | `[]` |
| `title` | 标题 | _string_ | `提示` |
| `textKey` | 文本的属性 key | _string_ | `text` |
| `toolbar` | 是否显示上方工具栏 | _string_ | `true` |
| `cascade` | 是否开启级联模式 | _boolean_ | `true` |
| `cascadeInitialIndexes` | 级联模式的初始化索引列表 | _number[]_ | `-` |
| `textFormatter` | 文本格式化 | _(text: any, columnIndex: number) => any_ | `text => text` |
| `optionHeight` | 选项的高度 | _string \| number_ | `44` |
| `optionCount` | 可见的选项个数 | _string \| number_ | `6` |
| `confirmButtonText` | 确认按钮文字 | _string_ | `确认` |
| `cancelButtonText` | 取消按钮文字 | _string_ | `取消` |
| `confirmButtonTextColor` | 确认按钮文字颜色 | _string_ | `-` |
| `cancelButtonTextColor` | 取消按钮文字颜色 | _string_ | `-` |
| `onOpen` | 弹出层开启回调 | _() => void_ | `-` |
| `onOpened` | 弹出层开启动画结束回调 | _() => void_ | `-` |
| `onClose` | 弹出层关闭回调 | _() => void_ | `-` |
| `onClosed` | 关闭弹出层动画结束时回调 | _(texts: Texts, indexes: number[]) => void_ | `() => void` |
| `onChange` | 选择内容变化时回调 | _(texts: Texts, indexes: number[]) => void_ | `() => void` |
| `onConfirm` | 点击确认按钮时触发 | _(texts: Texts, indexes: number[]) => void_ | `() => void` |
| `onCancel` | 点击取消按钮时触发 | _(texts: Texts, indexes: number[]) => void_ | `() => void` |

### Picker NormalColumn

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `texts` | 文本数组 | _Texts_ | `-` |
| `initialIndex` | 初始化索引 | _number_ | `0` |

### Picker CascadeColumn

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 每一行的文本 | _any_ | `-` |
| `children` | 子级 | _CascadeColumn[]_ | `-` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `confirm` | 立刻停止滚动并触发 confirm 事件 | `-` | `-` |
| `cancel` | 立刻停止滚动并触发 cancel 事件 | `-` | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `change` | 选择内容变化时触发 | `texts: Texts` 选择的内容数组 <br> `indexes: number[]` 选择的下标数组 |
| `cancel` | 点击取消按钮时触发 | `texts: Texts` 选择的内容数组 <br> `indexes: number[]` 选择的下标数组 |
| `confirm` | 点击确认按钮时触发 | `texts: Texts` 选择的内容数组 <br> `indexes: number[]` 选择的下标数组 |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `cancel` | 取消按钮内容 | `-` |
| `title` | 标题内容 | `-` |
| `confirm` | 确认按钮内容 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--picker-background` | `#fff` |
| `--picker-toolbar-height` | `44px` |
| `--picker-confirm-button-text-color` | `var(--color-primary)` |
| `--picker-cancel-button-text-color` | `#888` |
| `--picker-picked-border` | `1px solid rgba(0, 0, 0, 0.12)` |
| `--picker-title-font-size` | `16px` |
| `--picker-toolbar-padding` | `0 4px` |
| `--picker-mask-background-image` | `linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))` |
