# Layout

### Intro

The component library provides two auxiliary layout components,
`<var-row/>` and `<var-col/>`,
so that you can layout more efficiently.

### Gird System

```html
The `<var-row/>` component divides a row into 24 columns of grids (24 copies), `<var-col/>` provides the `span` attribute to set the number of copies of a column, and the `offset` attribute to set a column the number of copies offset,
The `gutter` property sets column spacing.
```

```html
<template>
  <var-row :gutter="[10, 10]">
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
  </var-row>
</template>

<style>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  background: #3a7afe;
  color: #fff;
}
</style>
```

### Offset

```html
<template>
  <var-row :gutter="[10, 10]">
    <var-col :span="16" :offset="8">
      <div class="item">offset: 8 span: 16</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
  </var-row>
</template>

<style>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  background: #3a7afe;
  color: #fff;
}
</style>
```

### Alignment

The layout component is laid out in `flex` by default,
using the `<var-row/>` `justify` and `align` properties to set the alignment of the main and cross axes.

```html
<template>
  <var-row :gutter="[20, 10]">
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
  </var-row>
  <var-row justify="center" :gutter="[20, 10]">
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
  </var-row>
  <var-row justify="flex-end" :gutter="[20, 10]">
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
  </var-row>
  <var-row justify="space-around" :gutter="[20, 10]">
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
  </var-row>
  <var-row justify="space-between" :gutter="[20, 10]">
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
    <var-col :span="8">
      <div class="item">span: 8</div>
    </var-col>
  </var-row>
</template>

<style>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  background: #3a7afe;
  color: #fff;
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
    <var-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="item">1</div>
    </var-col>
    <var-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="item">2</div>
    </var-col>
    <var-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="item">3</div>
    </var-col>
    <var-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="item">4</div>
    </var-col>
  </var-row>
</template>

<style>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  background: #3a7afe;
  color: #fff;
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
      :xs="{ span: 12, offset: 6 }"
      :sm="{ span: 6 }"
      :md="{ span: 4, offset: 4 }"
      :lg="{ span: 3, offset: 3 }"
      :xl="{ span: 2, offset: 2 }"
    >
      <div class="item">1</div>
    </var-col>
    <var-col
      :xs="{ span: 12, offset: 6 }"
      :sm="{ span: 6 }"
      :md="{ span: 4, offset: 4 }"
      :lg="{ span: 3, offset: 3 }"
      :xl="{ span: 2, offset: 2 }"
    >
      <div class="item">2</div>
    </var-col>
    <var-col
      :xs="{ span: 12, offset: 6 }"
      :sm="{ span: 6 }"
      :md="{ span: 4, offset: 4 }"
      :lg="{ span: 3, offset: 3 }"
      :xl="{ span: 2, offset: 2 }"
    >
      <div class="item">3</div>
    </var-col>
    <var-col
      :xs="{ span: 12, offset: 6 }"
      :sm="{ span: 6 }"
      :md="{ span: 4, offset: 4 }"
      :lg="{ span: 3, offset: 3 }"
      :xl="{ span: 2, offset: 2 }"
    >
      <div class="item">4</div>
    </var-col>
  </var-row>
</template>

<style>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  background: #3a7afe;
  color: #fff;
}
</style>
```

## API

### Props

#### Row Props

| Prop      | Description                                                                                          | Type               | Default      |
| --------- | ---------------------------------------------------------------------------------------------------- | ------------------ | ------------ |
| `gutter`  | Col gutter, default is horizontal spacing. Can be set to [Vertical, Horizontal](Support length unit)  | _string \| number \| [string \| number, string \| number]_ | `0`  |
| `justify` | Spindle alignment, optional value is `flex-start` `flex-end` `center` `space-between` `space-around` | _string_           | `flex-start` |
| `align`   | Cross axis alignment, optional value is `flex-start` `flex-end` `center`                             | _string_           | `flex-start` |

#### Col Props

| Prop     | Description                                         | Type     | Default |
|----------| --------------------------------------------------- |----------| ------- |
| `span`   | Number of grids occupied by columns                 | _string \| number_                                                          | `24`    |
| `offset` | Number of grids for column offsets                  | _string \| number_                                                          | `0`     |
| `direction` | The optional value of layout direction is `row` `column` |  _string_ | `row` |
| `justify`   | Main axis arrangement, can be set to `flex-start` `flex-end` `center` `space-around` `space-between`             | _string_ | `-` |
| `align`     | Cross axis arrangement, can be set to `stretch` `center` `flex-start` `flex-end` `baseline`                         | _string_ | `-`     |
| `xs`     | `<768px` Responsive columns or column props object  | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-`     |
| `sm`     | `≥768px` Responsive columns or column props object  | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-`     |
| `md`     | `≥992px` Responsive columns or column props object  | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-`     |
| `lg`     | `≥1200px` Responsive columns or column props object | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-`     |
| `xl`     | `≥1920px` Responsive columns or column props object | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-`     |

### Events

#### Row Events

| Event   | Description                  | Arguments      |
| ------- | ---------------------------- | -------------- |
| `click` | Triggered when clicking Row | `event: Event` |

#### Col Events

| Event   | Description                  | Arguments      |
| ------- | ---------------------------- | -------------- |
| `click` | Triggered when clicking Col | `event: Event` |

### Slots

#### Row Slots

| Name | Description | SlotProps |
| --------- | ----------- | --------- |
| `default` | Row content | `-`       |

#### Col Slots

| Name | Description | SlotProps |
| --------- | ----------- | --------- |
| `default` | Col content | `-`       |
