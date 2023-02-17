# 布局

### 介绍

组件库提供了 `<var-row/>` 和 `<var-col/>` 两个辅助布局的组件，使您更有效率的进行布局。

### 栅格系统

`<var-row/>` 组件把一行平均划分为 24列 栅格( 24份 )，`<var-col/>` 提供 `span` 属性设置这一列所占的份数，`offset` 属性设置这一列偏移的份数。

```html
<template>
  <var-row>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
  </var-row>
</template>

<style>
.var-col {
  justify-content: center;
  align-items: center;
  height: 36px;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;
  background-clip: content-box !important;
  background: #3a7afe;
}
</style>
```

### 偏移

```html
<template>
  <var-row>
    <var-col :span="16" :offset="8">offset: 8 span: 16</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
  </var-row>
</template>

<style>
.var-col {
  justify-content: center;
  align-items: center;
  height: 36px;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;
  background-clip: content-box !important;
  background: #3a7afe;
}
</style>
```

### 对齐

布局组件默认使用 `flex` 布局，通过  `<var-row/>`的 `justify` 和 `align` 属性设置主轴和交叉轴的对齐方式。

```html
<template>
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
</template>

<style>
.var-col {   
  justify-content: center;
  align-items: center;
  height: 36px;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;
  background-clip: content-box !important;
  background: #3a7afe;
}
</style>
```

### 列间距

```html
<template>
  <var-row :gutter="10">
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
    <var-col :span="8">span: 8</var-col>
  </var-row>
</template>

<style>
.var-col {
  justify-content: center;
  align-items: center;
  height: 36px;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;
  background-clip: content-box !important;
  background: #3a7afe;
}
</style>
```

### 响应式布局

#### 基本用法

```vue
import BasicExample from '../example/Responsive.vue'
```

```html
<template>
  <var-row :gutter="10">
    <var-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">1</var-col>
    <var-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">2</var-col>
    <var-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">3</var-col>
    <var-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">4</var-col>
  </var-row>
</template>

<style>
.var-col {
  justify-content: center;
  align-items: center;
  height: 36px;
  color: #fff;
  text-align: center;
  background-clip: content-box !important;
  background: #3a7afe;
}
</style>
```

#### 属性对象

```vue
import ObjectExample from '../example/ResponsiveObject.vue'
```

```html
<template>
  <var-row :gutter="10">
    <var-col
      :xs="{ span: 12, offset: 6 }"
      :sm="{ span: 6 }"
      :md="{ span: 4, offset: 4 }"
      :lg="{ span: 3, offset: 3 }"
      :xl="{ span: 2, offset: 2 }"
    >
      1
    </var-col>
    <var-col
      :xs="{ span: 12, offset: 6 }"
      :sm="{ span: 6 }"
      :md="{ span: 4, offset: 4 }"
      :lg="{ span: 3, offset: 3 }"
      :xl="{ span: 2, offset: 2 }"
    >
      2
    </var-col>
    <var-col
      :xs="{ span: 12, offset: 6 }"
      :sm="{ span: 6 }"
      :md="{ span: 4, offset: 4 }"
      :lg="{ span: 3, offset: 3 }"
      :xl="{ span: 2, offset: 2 }"
    >
      3
    </var-col>
    <var-col
      :xs="{ span: 12, offset: 6 }"
      :sm="{ span: 6 }"
      :md="{ span: 4, offset: 4 }"
      :lg="{ span: 3, offset: 3 }"
      :xl="{ span: 2, offset: 2 }"
    >
      4
    </var-col>
  </var-row>
</template>

<style>
.var-col {
  justify-content: center;
  align-items: center;
  height: 36px;
  color: #fff;
  text-align: center;
  background-clip: content-box !important;
  background: #3a7afe;
}
</style>
```

## API

### 属性

#### Row Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `gutter` | 列间距 | _string \| number_ | `0` |
| `justify` | 主轴对齐方式, 可选值为 `flex-start` `flex-end` `center` `space-between` `space-around` | _string_ | `flex-start` |
| `align` | 交叉轴对齐方式, 可选值为 `flex-start` `flex-end` `center` | _string_ | `flex-start` |

#### Col Props

| 参数       | 说明                       | 类型       | 默认值     |
|----------|--------------------------|----------|---------|
| `span`   | 列占据的栅格数                  | _string \| number_ | `24` |
| `offset` | 列偏移的栅格数                  | _string \| number_ | `0` |
| `direction` | 布局方向，可选值为 `row` `column`     |  _string_ | `row` |
| `xs`     | `<768px` 响应式栅格数或者栅格属性对象  | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-` |
| `sm`     | `≥768px` 响应式栅格数或者栅格属性对象  | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-` |
| `md`     | `≥992px` 响应式栅格数或者栅格属性对象  | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-` |
| `lg`     | `≥1200px` 响应式栅格数或者栅格属性对象 | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-` |
| `xl`     | `≥1920px` 响应式栅格数或者栅格属性对象 | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-` |

### 事件

#### Row Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击 Row 时触发 | `event: Event` |

#### Col Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击 Col 时触发 | `event: Event` |

### 插槽

#### Row Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | Row 内容 | `-` |

#### Col Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | Col 内容 | `-` |