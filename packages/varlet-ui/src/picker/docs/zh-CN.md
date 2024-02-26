# 多列选择器

### 介绍

提供了函数和组件两种调用方式。同时支持级联模式，可以处理多级联动。

## 函数调用

### 单列选择

函数会返回用户选择的信息和用户最后的动作 `state`。 `state` 可能是 `confirm`, `cancel`, `close`。  

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
  <var-button type="primary" block @click="picker">单列选择</var-button>
</template>
```

### 多列选择

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
  <var-button type="primary" block @click="picker">多列选择</var-button>
</template>
```

### 级联选择

设置 `cascade` 属性开启级联滚动。

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
  <var-button type="primary" block @click="picker">级联选择</var-button>
</template>
```

### 地区选择

组件库提供了中国省市区的级联数据，可以直接使用。

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
  <var-button type="primary" block @click="picker">地区选择</var-button>
</template>
```

### 值映射

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
  <var-button type="primary" block @click="picker">值映射</var-button>
</template>
```

## 组件调用

### 单列选择

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

### 多列选择

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

### 级联选择

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

### 地区选择

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

### 值的映射

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

### 双向绑定

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
    <var-button type="primary" @click="resetValues">values: {{ values }} 点击重置</var-button>
    <var-picker :columns="columns" v-model="values" @change="handleChange" />
  </var-space>
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _(string \| number)[]_ | `[]` |
| `columns` | 列内容 | _PickerColumnOption[] \| PickerColumnOption[][]_ | `[]` |
| `title` | 标题 | _string_ | `请选择` |
| `text-key` | 文本的属性 key | _string_ | `text` |
| `value-key` | 值的属性 key | _string_ | `value` |
| `children-key` | 级联子列表 key | _string_ | `children` |
| `toolbar` | 是否显示上方工具栏 | _boolean_ | `true` |
| `cascade` | 是否开启级联模式 | _boolean_ | `true` |
| `option-height` | 选项的高度(px rem) | _string \| number_ | `44` |
| `option-count` | 可见的选项个数 | _string \| number_ | `6` |
| `confirm-button-text` | 确认按钮文字 | _string_ | `确认` |
| `cancel-button-text` | 取消按钮文字 | _string_ | `取消` |
| `confirm-button-text-color` | 确认按钮文字颜色 | _string_ | `-` |
| `cancel-button-text-color` | 取消按钮文字颜色 | _string_ | `-` |

### Picker Options

| 参数                       | 说明 | 类型 | 默认值 |
|--------------------------| --- | --- | --- |
| `columns`                | 列内容 | _PickerColumnOption[] \| PickerColumnOption[][]_ | `[]` |
| `title`                  | 标题 | _string_ | `请选择` |
| `textKey`                | 文本的属性 key | _string_ | `text` |
| `valueKey`               | 值的属性 key | _string_ | `value` |
| `childrenKey`            | 级联子列表 key | _string_ | `children` |
| `toolbar`                | 是否显示上方工具栏 | _boolean_ | `true` |
| `cascade`                | 是否开启级联模式 | _boolean_ | `true` |
| `optionHeight`           | 选项的高度 | _string \| number_ | `44` |
| `optionCount`            | 可见的选项个数 | _string \| number_ | `6` |
| `confirmButtonText`      | 确认按钮文字 | _string_ | `确认` |
| `cancelButtonText`       | 取消按钮文字 | _string_ | `取消` |
| `confirmButtonTextColor` | 确认按钮文字颜色 | _string_ | `-` |
| `cancelButtonTextColor`  | 取消按钮文字颜色 | _string_ | `-` |
| `closeOnClickOverlay`    | 是否点击遮罩层关闭弹出层 | _boolean_ | `true` |
| `safeArea`               | 是否开启底部安全区适配      | _boolean_             | `false`  |
| `onClickOverlay`         | 遮罩层点击回调 | _() => void_ | `-` |
| `onOpen`                 | 弹出层开启回调 | _() => void_ | `-` |
| `onOpened`               | 弹出层开启动画结束回调 | _() => void_ | `-` |
| `onClose`                | 弹出层关闭回调 | _() => void_ | `-` |
| `onClosed`               | 关闭弹出层动画结束时回调 | _() => void_ | `() => void` |
| `onChange`               | 选择内容变化时回调 | _(values: (string \| number)[], indexes: number[], options: PickerColumnOption[]) => void_ | `() => void` |
| `onConfirm`              | 点击确认按钮时触发 | _(values: (string \| number)[], indexes: number[], options: PickerColumnOption[]) => void_ | `() => void` |
| `onCancel`               | 点击取消按钮时触发 | _(values: (string \| number)[], indexes: number[], options: PickerColumnOption[]) => void_ | `() => void` |

### PickerColumnOption

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 文本 | _string \| number_ | `-` |
| `value` | 值 | _string \| number_ | `-` |
| `children` | 子列表 | _PickerColumnOption[]_ | `-` |
| `className` | 附加的类名 | _string_ | `-` |
| `textClassName` | 文本附加的类名 | _string_ | `-` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `confirm` | 立刻停止滚动并触发 confirm 事件 | `-` | `-` |
| `cancel` | 立刻停止滚动并触发 cancel 事件 | `-` | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `change` | 选择内容变化时触发 | `values: (string \| number)[]` 选择的值列表 <br> `indexes: number[]` 选择的下标列表 <br> `options: PickerColumnOption[]` 选择的选项对象列表 |
| `cancel` | 点击取消按钮时触发 | `values: (string \| number)[]` 选择的值列表 <br> `indexes: number[]` 选择的下标列表 <br> `options: PickerColumnOption[]` 选择的选项对象列表 |
| `confirm` | 点击确认按钮时触发 | `values: (string \| number)[]` 选择的值列表 <br> `indexes: number[]` 选择的下标列表 <br> `options: PickerColumnOption[]` 选择的选项对象列表 |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `title` | 标题内容 | `-` |
| `cancel` | 取消按钮内容 | `-` |
| `confirm` | 确认按钮内容 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
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
