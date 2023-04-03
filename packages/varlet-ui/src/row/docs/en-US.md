# Layout

### Intro

The component library provides two auxiliary layout components,
`<var-row/>` and `<var-col/>`,
so that you can layout more efficiently.

### Gird System

```html
The `<var-row />` component divides a row into an average grid of 24 columns (24 pieces). The `<var-col />` provides the
span property to set the number of pieces in the column and the `offset` property to set the number of pieces `offset`
in the column.
```

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

### Offset

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

### Alignment

The layout component is laid out in `flex` by default,
using the `<var-row/>` `justify` and `align` properties to set the alignment of the main and cross axes.

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

### Gutter

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

### Responsive Layout

#### Basic Usage

```vue
import BasicExample from '../example/Responsive.vue'
```

```html
<template>
  <var-row :gutter="10">
    <var-col class="col" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">1</var-col>
    <var-col class="col" :xs="4" :sm="6" :md="8" :lg="9" :xl="11">2</var-col>
    <var-col class="col" :xs="4" :sm="6" :md="8" :lg="9" :xl="11">3</var-col>
    <var-col class="col" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">4</var-col>
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
#### Column Props Object

```vue
import ObjectExample from '../example/ResponsiveObject.vue'
```

```html
<template>
  <var-row :gutter="10">
    <var-col
      class="col"
      :xs="{ span: 12, offset: 6 }"
      :sm="{ span: 6 }"
      :md="{ span: 4, offset: 4 }"
      :lg="{ span: 3, offset: 3 }"
      :xl="{ span: 2, offset: 2 }"
    >
      1
    </var-col>
    <var-col
      class="col"
      :xs="{ span: 12, offset: 6 }"
      :sm="{ span: 6 }"
      :md="{ span: 4, offset: 4 }"
      :lg="{ span: 3, offset: 3 }"
      :xl="{ span: 2, offset: 2 }"
    >
      2
    </var-col>
    <var-col
      class="col"
      :xs="{ span: 12, offset: 6 }"
      :sm="{ span: 6 }"
      :md="{ span: 4, offset: 4 }"
      :lg="{ span: 3, offset: 3 }"
      :xl="{ span: 2, offset: 2 }"
    >
      3
    </var-col>
    <var-col
      class="col"
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

### Props

#### Row Props

| Prop      | Description                                                                                          | Type               | Default      |
| --------- | ---------------------------------------------------------------------------------------------------- | ------------------ | ------------ |
| `gutter`  | Col gutter                                                                                           | _string \| number_ | `0`          |
| `justify` | Spindle alignment, optional value is `flex-start` `flex-end` `center` `space-between` `space-around` | _string_           | `flex-start` |
| `align`   | Cross axis alignment, optional value is `flex-start` `flex-end` `center`                             | _string_           | `flex-start` |

#### Col Props

| Prop     | Description                                         | Type     | Default |
|----------| --------------------------------------------------- |----------| ------- |
| `span`   | Number of grids occupied by columns                 | _string \| number_                                                          | `24`    |
| `offset` | Number of grids for column offsets                  | _string \| number_                                                          | `0`     |
| `direction` | The optional value of layout direction is `row` `column` |  _string_ | `row` |
| `justify`   | Main axis arrangement, Can be set to `flex-start` `flex-end` `center` `space-around` `space-between`             | _string_ | `-` |
| `align`     | Cross axis arrangement, Can be set to `stretch` `center` `flex-start` `flex-end` `baseline`                         | _string_ | `-`     |
| `xs`     | `<768px` Responsive columns or column props object  | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-`     |
| `sm`     | `≥768px` Responsive columns or column props object  | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-`     |
| `md`     | `≥992px` Responsive columns or column props object  | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-`     |
| `lg`     | `≥1200px` Responsive columns or column props object | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-`     |
| `xl`     | `≥1920px` Responsive columns or column props object | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-`     |

### Events

#### Row Events

| Event   | Description                  | Arguments      |
| ------- | ---------------------------- | -------------- |
| `click` | Triggered when you click Row | `event: Event` |

#### Col Events

| Event   | Description                  | Arguments      |
| ------- | ---------------------------- | -------------- |
| `click` | Triggered when you click Col | `event: Event` |

### Slots

#### Row Slots

| Name | Description | SlotProps |
| --------- | ----------- | --------- |
| `default` | Row content | `-`       |

#### Col Slots

| Name | Description | SlotProps |
| --------- | ----------- | --------- |
| `default` | Col content | `-`       |
