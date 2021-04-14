# 多列选择器

### 介绍
提供了函数和组件两种调用方式。同时支持级联模式，可以处理多级联动。

### 引入

```js
import { createApp } from 'vue'
import { Picker } from '@varlet/ui'

createApp().use(Picker.Component)
```

### 函数调用

### 多列滚动

Picker传入一个二维数组`columns`, `columns`的每一项就是每一列的内容。
Picker返回用户触发状态，选择的文本，选择的下标。

```js
const columns = [
  Array.from({ length: 20 }).map((_, index) => index),
  Array.from({ length: 20 }).map((_, index) => index),
  Array.from({ length: 20 }).map((_, index) => index)
]
const { state, texts, indexes } = await Picker(columns)
```

### 级联滚动

Picker传入一个`cascade`属性开启级联滚动。
组件库内置提供了省市区三级联动，引入`area.json`。

```js
import columns from '@varlet/ui/json/area.json'

const { state, texts, indexes } = await Picker({
  cascade: true,
  columns
})
```

### 组件调用

### 多列滚动

```html
<var-picker :columns="columns" />
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const columns = ref([
      Array.from({ length: 20 }).map((_, index) => index),
      Array.from({ length: 20 }).map((_, index) => index),
      Array.from({ length: 20 }).map((_, index) => index)
    ])

    return { columns }
  }
}
```

### 级联滚动

```html
<var-picker cascade :columns="columns" />
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const columns = ref([
      {
        text: '北京市',
        children: [
          {
            text: '市辖区'
          }
        ]
      },
      {
        text: '河北省',
        children: [
          {
            text: '石家庄市'
          }
        ]
      }
    ])

    return { columns }
  }
}
```

### 省市区三级联动

组件库提供了完整的省市区信息，可以直接使用。

```js
import { ref } from 'vue'
import area from '@varlet/ui/json/area.json'

export default {
  setup() {
    const columns = ref(area)

    return { columns }
  }
}
```

## API

### 属性

### Picker Props

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `columns` | 列内容 | _NormalColumn[] \| CascadeColumn[] \| Texts_ | `[]` |
| `title` | 标题 | _string_ | `提示` |
| `text-key` | 文本的属性key | _string_ | `text` |
| `toolbar` | 是否显示上方工具栏 | _string_ | `true` |
| `cascade` | 是否开启级联模式 | _boolean_ | `true` |
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
| `textKey` | 文本的属性key | _string_ | `text` |
| `toolbar` | 是否显示上方工具栏 | _string_ | `true` |
| `cascade` | 是否开启级联模式 | _boolean_ | `true` |
| `optionHeight` | 选项的高度(px, rem) | _string \| number_ | `44` |
| `optionCount` | 可见的选项个数 | _string \| number_ | `6` |
| `confirmButtonText` | 确认按钮文字 | _string_ | `确认` |
| `cancelButtonText` | 取消按钮文字 | _string_ | `取消` |
| `confirmButtonTextColor` | 确认按钮文字颜色 | _string_ | `-` |
| `cancelButtonTextColor` | 取消按钮文字颜色 | _string_ | `-` |
| `onChange` | 选择内容变化时回调 | _(texts: Texts, indexes: number[]) => void_ | `() => void` |
| `onClosed` | 关闭弹出层动画结束时回调 | _(texts: Texts, indexes: number[]) => void_ | `() => void` |

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
| `confirm` | 立刻停止滚动并触发confirm事件 | `-` | `-` |
| `cancel` | 立刻停止滚动并触发cancel事件 | `-` | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `change` | 选择内容变化时触发 | `texts: Texts(选择的内容数组)，indexes: number[](选择的下标数组)` |
| `cancel` | 点击取消按钮时触发 | `texts: Texts(选择的内容数组)，indexes: number[](选择的下标数组)` |
| `confirm` | 点击确认按钮时触发 | `texts: Texts(选择的内容数组)，indexes: number[](选择的下标数组)` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `cancel` | 取消按钮内容 | `-` |
| `title` | 标题内容 | `-` |
| `confirm` | 确认按钮内容 | `-` |

### 主题变量
#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

| 变量名 | 默认值 |
| --- | --- |
| `@picker-background` | `#fff` |
| `@picker-toolbar-height` | `44px` |
| `@picker-confirm-button-text-color` | `@color-primary` |
| `@picker-cancel-button-text-color` | `#888` |
| `@picker-picked-border` | `1px solid #eee` |
| `@picker-title-font-size` | `16px` |
| `@picker-toolbar-padding` | `0 4px` |
| `@picker-mask-background-image` | `linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))` |