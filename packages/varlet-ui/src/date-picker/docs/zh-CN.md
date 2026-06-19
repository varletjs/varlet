# 日期选择器

### 介绍

用于选择日期、月份、年份或对应范围。

### 基本使用

日期面板头部的年份和月份可分别点击，以切换到年份或月份面板。

```html
<script setup>
import { ref } from 'vue'

const date = ref('2021-04-08')
</script>

<template>
  <var-date-picker v-model="date" />
</template>
```

### 多选

通过 `multiple` 属性选择多个日期，此时 `date` 为一个数组。

```html
<script setup>
import { ref } from 'vue'

const date = ref([])
</script>

<template>
  <var-date-picker v-model="date" multiple />
</template>
```

### 选择范围

通过 `range` 属性选择一个范围，此时绑定值为 `[start, end]`，元素格式随 `type` 变化。

```html
<script setup>
import { ref } from 'vue'

const date = ref(['2021-04-08', '2021-04-20'])
const month = ref(['2021-02', '2021-05'])
const year = ref(['2021', '2025'])
</script>

<template>
  <var-date-picker type="date" v-model="date" range />
  <var-date-picker type="month" v-model="month" range />
  <var-date-picker type="year" v-model="year" range />
</template>
```

### 日期限制

通过 `min` 和 `max` 属性来控制可选择的日期范围，使用 `allowed-dates` 属性限制可以选择的值，回调参数格式随 `type` 变化。

```html
<script setup>
import { ref } from 'vue'

const date = ref('2020-11-11')

const allowedDates = val => parseInt(val.split('-')[2], 10) % 2 === 1
</script>

<template>
  <var-date-picker
    v-model="date"
    min="2020-10-15"
    max="2021-01-15"
    :allowed-dates="allowedDates"
  />
</template>
```

### 隐藏标题

通过 `show-title` 属性控制是否显示顶部标题区域。

```html
<script setup>
import { ref } from 'vue'

const date = ref('2021-04-08')
</script>

<template>
  <var-date-picker v-model="date" :show-title="false" />
</template>
```

### 操作插槽

通过 `actions` 插槽可以自定义底部操作区域。`resetPreview` 方法可以将面板视图重置到当前绑定值对应的位置。

```html
<script setup>
import { ref } from 'vue'

const date = ref('2021-04-08')
const datePicker = ref()
</script>

<template>
  <var-date-picker ref="datePicker" v-model="date">
    <template #actions>
      <var-button tonal type="primary" @click="datePicker.resetPreview()">
        重置视图
      </var-button>
    </template>
  </var-date-picker>
</template>
```

### 月份选择器

将 `type` 设置为 `month` 可以选择年份和月份，面板左侧的年份切换器可用于切换或选择年份。

```html
<script setup>
import { ref } from 'vue'

const date = ref('2021-04')
</script>

<template>
  <var-date-picker type="month" v-model="date" elevation />
</template>
```

### 年份选择器

将 `type` 设置为 `year` 可以选择年份。

```html
<script setup>
import { ref } from 'vue'

const date = ref('2021')
</script>

<template>
  <var-date-picker type="year" v-model="date" />
</template>
```

## API

### 属性

| 参数                  | 说明                                           | 类型 | 默认值 |
|---------------------|----------------------------------------------| -------- | ---------- |
| `v-model`           | 选中值，格式随 `type` 变化（`YYYY` / `YYYY-MM` / `YYYY-MM-DD`），`multiple` 或 `range` 时为数组 | _string[] \| string_ | `undefined` |
| `type`              | 选择器类型，可选值为 `date month year`                      | _string_ | `date` |
| `allowed-dates`     | 限制可以选择的值，参数格式随 `type` 变化（`YYYY` / `YYYY-MM` / `YYYY-MM-DD`） | _function_ | `-` |
| `color`             | 选择器的颜色                                       | _string_ | `-` |
| `title-color`       | 标题背景色。如果未指定，将使用 `color` 属性或默认颜色。              | _string_ | `-` |
| `hint`              | 选择器提示语，未设置时会根据 `type` 推导                     | _string_ | `-` |
| `elevation`         | 海拔高度，可选值为 `true` `false` 和 `0-24` 的等级         | _string \| number \| boolean_|   `false`    |
| `button-elevation`  | Button 的海拔高度                                 | _string \| number \| boolean_|   `true`    |
| `first-day-of-week` | 设置一周的第一天，从周日的 0 开始。                          | _string \| number_ | `0` |
| `min`               | 允许的最小值，格式随 `type` 变化（`YYYY` / `YYYY-MM` / `YYYY-MM-DD`） | _string_ | `-` |
| `max`               | 允许的最大值，格式随 `type` 变化（`YYYY` / `YYYY-MM` / `YYYY-MM-DD`） | _string_ | `-` |
| `show-current`      | 是否显示当前日期                                     | _boolean_ | `true` |
| `show-title`        | 是否显示顶部标题区域                                   | _boolean_ | `true` |
| `readonly`          | 是否只读                                         | _boolean_ | `false` |
| `multiple`          | 是否支持选择多个日期                                   | _boolean_ | `false` |
| `range`             | 是否支持选择一个范围                                   | _boolean_ | `false` |
| `fallback-view-date` ***3.15.2***      | 在没有可用选中值时，控制面板视图回退到的日期（不会写回 `v-model`） | _string_ | `-` |

### 事件

| 事件名       | 说明      | 回调参数                              |
|-----------|---------|-----------------------------------|
| `preview` | 面板视图切换时触发。`dayOfMonth` 为当前选中的月内日期；没有可用选中日期时为 `undefined` | `year: number` <br>`month: number` <br>`dayOfMonth?: number` |
| `change`  | 日期改变时触发 | `value: string \| string[]` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| ----- | -------------- | -------- | ------ |
| `resetPreview` ***3.19.0*** | 将面板视图重置到当前绑定值对应的位置。没有有效绑定值时，会使用 `fallback-view-date` 或今天。 | `-` | `-` |

### 插槽
`weekIndex` 表示一周的第 `n` 天，从周日的 `0` 开始

| 名称 | 说明 | 参数                                                                   |
| ----- | -------------- |----------------------------------------------------------------------|
| `year` | 自定义 `type="year"` 时的标题文字 | `year: YYYY`                                                         |
| `month` | 自定义 `type="month"` 时的标题文字 | `year: YYYY` <br> `month: MM`                                        |
| `date` | 自定义 `type="date"` 时的标题文字 | `year: YYYY` <br> `month: MM` <br> `date: DD` <br> `week: weekIndex` |
| `range` | 自定义范围选择时的标题文字 | `choose: [startDate, endDate]`，元素格式随 `type` 变化（`YYYY` / `YYYY-MM` / `YYYY-MM-DD`） |
| `multiple` | 自定义多选时的标题文字 | `choose: string[]`，元素格式随 `type` 变化（`YYYY` / `YYYY-MM` / `YYYY-MM-DD`） |
| `actions` | 自定义操作面板 | `-`                                                                  |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值                    |
| --- |------------------------|
| `--date-picker-border-radius` | `4px`                  |
| `--date-picker-font-size` | `var(--font-size-md)`  |
| `--date-picker-min-width` | `290px`                |
| `--date-picker-main-color` | `rgba(0, 0, 0, .87)`   |
| `--date-picker-title-hint-color` | `var(--color-on-surface-variant)` |
| `--date-picker-title-hint-font-size` | `var(--font-size-md)` |
| `--date-picker-title-height` | `105px` |
| `--date-picker-title-padding` | `20px 20px 16px`       |
| `--date-picker-title-background` | `#fff` |
| `--date-picker-title-color` | `rgba(0, 0, 0, .87)`   |
| `--date-picker-title-date-height` | `48px`                 |
| `--date-picker-title-date-font-size` | `34px`                 |
| `--date-picker-title-date-font-weight` | `500`                  |
| `--date-picker-title-date-range-font-size` | `20px`                 |
| `--date-picker-title-date-justify-content` | `normal` |
| `--date-picker-header-arrow-filter` | `opacity(1)` |
| `--date-picker-body-background-color` | `#fff`                 |
| `--date-picker-body-height` | `304px`                |
| `--date-picker-body-padding-horizontal` | `12px` |
| `--date-picker-body-padding` | `0 var(--date-picker-body-padding-horizontal) 16px` |
| `--date-picker-header-padding` | `0 0 16px`          |
| `--date-picker-header-padding-top-no-title` | `20px` |
| `--date-picker-actions-padding` | `10px 20px 20px`    |
| `--date-picker-header-color` | `#555`             |
| `--month-picker-padding` | `0 12px`          |
| `--month-picker-item-width` | `32%`                  |
| `--month-picker-item-height` | `46px`                 |
| `--month-picker-item-button-max-width` | `140px`                |
| `--month-picker-item-button-font-weight` | `normal`               |
| `--year-picker-padding` | `0 12px`          |
| `--year-picker-item-width` | `32%`                  |
| `--year-picker-item-height` | `46px`                 |
| `--year-picker-item-button-max-width` | `140px`                |
| `--year-picker-item-button-font-weight` | `normal`               |
| `--day-picker-content-item-width` | `14.28%`               |
| `--day-picker-content-item-min-height` | `21px`               |
| `--day-picker-content-item-font-size` | `var(--font-size-md)`  |
| `--day-picker-content-item-padding` | `2px 0`                |
| `--day-picker-content-item-button-width` | `32px`                 |
| `--day-picker-content-item-button-height` | `32px`                 |
| `--day-picker-content-item-button-font-size` | `var(--font-size-md)`  |
| `--day-picker-head-item-color` | `rgba(0, 0, 0, 0.38)`  |
| `--day-picker-head-item-font-size` | `var(--font-size-md)`  |
| `--day-picker-head-item-padding` | `8px 0`                |
| `--day-picker-head-item-font-weight` | `normal`               |

### 注意

自 `3.19.0` 起，以下属性和 CSS 变量已移除：

| 已移除属性 |
| --- |
| `touchable` |

| 已移除变量 |
| --- |
| `--date-picker-title-year-font-size` |
| `--date-picker-title-year-font-weight` |
| `--date-picker-title-year-margin-bottom` |
| `--date-picker-title-year-min-height` |
