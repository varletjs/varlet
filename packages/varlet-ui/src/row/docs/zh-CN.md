# 布局

### 介绍

组件库提供了 `<var-row/>` 和 `<var-col/>` 两个辅助布局的组件，使您更有效率的进行布局。

### 引入

```js
import { createApp } from 'vue'
import { Row, Col } from '@varlet/ui'

createApp().use(Row).use(Col)
```

### 栅格系统

`<var-row/>` 组件把一行平均划分为24列栅格(24份)，`<var-col/>` 提供 `span` 属性设置这一列所占的份数，`offset` 属性设置这一列偏移的份数。

```html
<var-row>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
```

### 偏移

```html
<var-row>
  <var-col :span="16" :offset="8">offset: 8 span: 16</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
```

### 对齐

布局组件默认使用 `flex` 布局，通过  `<var-row/>`的 `justify` 和 `align` 属性设置主轴和交叉轴的对齐方式。

```html
<var-row>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
<var-row justify="center">
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
<var-row justify="flex-end">
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
<var-row justify="space-around">
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
<var-row justify="space-between">
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
```

### 列间距

```html
<var-row :gutter="10">
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
```

## API

### 属性

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `gutter` | 列间距 | _string \| number_ | `0` |
| `justify` | 主轴对齐方式, 可选值为 `flex-start` `flex-end` `center` `space-between` `space-around` | _string_ | `flex-start` |
| `align` | 交叉轴对齐方式, 可选值为 `flex-start` `flex-end` `center` | _string_ | `flex-start` |

### Col Props
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `span` | 列占据的栅格数 | _string \| number_ | `24` |
| `offset` | 列偏移的栅格数 | _string \| number_ | `0` |

### 事件

### Row Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击 Row 时触发 | `event: Event` |

### Col Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击 Col 时触发 | `event: Event` |

### 插槽

### Row Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | Row 内容 | `-` |

### Col Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | Col 内容 | `-` |