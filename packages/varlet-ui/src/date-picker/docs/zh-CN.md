# 日期选择器

### 介绍

用于选择日期或日期范围。

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

通过 `range` 属性选择一个日期范围，此时 `date` 为 `[startDate, endDate]`。

```html
<script setup>
import { ref } from 'vue'

const date = ref(['2021-04-08', '2021-04-20'])
</script>

<template>
  <var-date-picker type="date" v-model="date" range />
</template>
```

### 日期限制

通过 `min` 和 `max` 属性来控制可选择的日期范围，使用 `allowed-dates` 属性限制可以选择的日期。

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

## API

### 属性

| 参数                  | 说明                                           | 类型 | 默认值 |
|---------------------|----------------------------------------------| -------- | ---------- |
| `v-model`           | 被选择的日期（ISO 8601 格式，`YYYY-MM-DD` 或 `YYYY-MM`） | _string[] \| string_ | `undefined` |
| `type`              | 选择器类型，可选值为 `date month year`                      | _string_ | `date` |
| `allowed-dates`     | 限制可以选择的日期                                    | _function_ | `-` |
| `color`             | 选择器的颜色                                       | _string_ | `-` |
| `title-color`       | 标题背景色。如果未指定，将使用 `color` 属性或默认颜色。              | _string_ | `-` |
| `hint`              | 选择器提示语，未设置时会根据 `type` 推导                     | _string_ | `-` |
| `elevation`         | 海拔高度，可选值为 `true` `false` 和 `0-24` 的等级         | _string \| number \| boolean_|   `false`    |
| `button-elevation`  | Button 的海拔高度                                 | _string \| number \| boolean_|   `true`    |
| `first-day-of-week` | 设置一周的第一天，从周日的 0 开始。                          | _string \| number_ | `0` |
| `min`               | 允许的最小日期/月份（ISO 8601格式）                       | _string_ | `-` |
| `max`               | 允许的最大日期/月份（ISO 8601格式）                       | _string_ | `-` |
| `show-current`      | 是否显示当前日期                                     | _boolean_ | `true` |
| `show-title`        | 是否显示顶部标题区域                                   | _boolean_ | `true` |
| `readonly`          | 是否只读                                         | _boolean_ | `false` |
| `multiple`          | 是否支持选择多个日期                                   | _boolean_ | `false` |
| `range`             | 是否支持选择一个范围                                   | _boolean_ | `false` |
| `touchable`         | 是否支持拖动切换面板                                   | _boolean_ | `true` |
| `fallback-view-date` ***3.15.2***      | 在没有可用选中值时，控制面板视图回退到的日期（不会写回 `v-model`） | _string_ | `-` |

### 事件

| 事件名       | 说明      | 回调参数                              |
|-----------|---------|-----------------------------------|
| `preview` | 日期切换时触发 | `year: number` <br>`month: number` <br>`day?: number` |
| `change`  | 日期改变时触发 | `value: string \| string[]` |

### 插槽
`weekIndex` 表示一周的第 `n` 天，从周末的 `0` 开始

| 名称 | 说明 | 参数                                                                   |
| ----- | -------------- |----------------------------------------------------------------------|
| `year` | 自定义 `type="year"` 时的标题文字 | `year: YYYY`                                                         |
| `month` | 自定义 `type="month"` 时的标题文字 | `year: YYYY` <br> `month: MM`                                        |
| `date` | 自定义 `type="date"` 时的标题文字 | `year: YYYY` <br> `month: MM` <br> `date: DD` <br> `week: weekIndex` |
| `range` | 自定义范围选择时的标题文字 | `choose: [startData, endDate]`                                       |
| `multiple` | 自定义多选时的标题文字 | `choose: ['YYYY-MM-DD' \| 'YYYY-MM']`                                |
| `actions` | 自定义操作面板 | `-`                                                                  |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值                    |
| --- |------------------------|
| `--date-picker-border-radius` | `4px`                  |
| `--date-picker-font-size` | `var(--font-size-md)`  |
| `--date-picker-min-width` | `290px`                |
| `--date-picker-main-color` | `rgba(0, 0, 0, .87)`   |
| `--date-picker-title-hint-color` | `#fff` |
| `--date-picker-title-hint-font-size` | `var(--font-size-md)` |
| `--date-picker-title-height` | `105px` |
| `--date-picker-title-padding` | `16px`                 |
| `--date-picker-title-background` | `var(--color-primary)` |
| `--date-picker-title-color` | `#fff`                 |
| `--date-picker-title-date-height` | `48px`                 |
| `--date-picker-title-date-font-size` | `34px`                 |
| `--date-picker-title-date-font-weight` | `500`                  |
| `--date-picker-title-date-range-font-size` | `20px`                 |
| `--date-picker-title-date-justify-content` | `normal` |
| `--date-picker-header-arrow-filter` | `opacity(0.54)` |
| `--date-picker-body-background-color` | `#fff`                 |
| `--date-picker-body-height` | `300px`                |
| `--date-picker-body-padding` | `0` |
| `--date-picker-body-padding-no-title` | `0 14px` |
| `--date-picker-header-padding` | `4px 16px`             |
| `--date-picker-header-padding-top-no-title` | `20px` |
| `--date-picker-actions-padding` | `0 8px 12px 8px`             |
| `--date-picker-header-color` | `#555`             |
| `--month-picker-padding` | `0 12px`               |
| `--month-picker-item-width` | `33%`                  |
| `--month-picker-item-height` | `48px`                 |
| `--month-picker-item-button-max-width` | `140px`                |
| `--year-picker-padding` | `0 12px`               |
| `--year-picker-item-width` | `33%`                  |
| `--year-picker-item-height` | `48px`                 |
| `--year-picker-item-button-max-width` | `140px`                |
| `--day-picker-content-item-width` | `14.28%`               |
| `--day-picker-content-item-min-height` | `21px`               |
| `--day-picker-content-item-font-size` | `var(--font-size-sm)`  |
| `--day-picker-content-item-padding` | `2px 0`                |
| `--day-picker-content-item-button-width` | `32px`                 |
| `--day-picker-content-item-button-height` | `32px`                 |
| `--day-picker-content-item-button-font-size` | `var(--font-size-sm)`  |
| `--day-picker-head-item-color` | `rgba(0, 0, 0, 0.38)`  |
| `--day-picker-head-item-padding` | `8px 0`                |
| `--day-picker-head-item-font-weight` | `600`                  |

### 注意

自 `2.19.0` 起，`DatePicker` 进行了一次体验优化。以下旧版顶部年份入口相关 CSS 变量已移除，不再生效：

| 已移除变量 |
| --- |
| `--date-picker-title-year-font-size` |
| `--date-picker-title-year-font-weight` |
| `--date-picker-title-year-margin-bottom` |
| `--date-picker-title-year-min-height` |
