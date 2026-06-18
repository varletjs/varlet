# DatePicker

### Intro
Used to select a date, month, year, or corresponding range.

### Basic Usage

The year and month in the date panel header can be clicked separately to switch to the year or month panel.

```html
<script setup>
import { ref } from 'vue'

const date = ref('2021-04-08')
</script>

<template>
  <var-date-picker v-model="date" />
</template>
```

### Multiple

Use `multiple` prop to select multiple dates, at this time, `date` is an array.

```html
<script setup>
import { ref } from 'vue'

const date = ref([])
</script>

<template>
  <var-date-picker v-model="date" multiple />
</template>
```

### Range

Use the `range` prop to select a range. The bound value is `[start, end]`, and each item format follows `type`.

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

### Date Limit

Use `min` and `max` prop to allow the maximum and minimum date, and use `allowed-dates` prop to limit the dates that can be selected.

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

### Hide Title

Use `show-title` prop to control whether to display the top title area.

```html
<script setup>
import { ref } from 'vue'

const date = ref('2021-04-08')
</script>

<template>
  <var-date-picker v-model="date" :show-title="false" />
</template>
```

### Actions Slot

Use the `actions` slot to customize the bottom action area. The `resetPreview` method can reset the panel view to the current bound value.

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
        Reset Preview
      </var-button>
    </template>
  </var-date-picker>
</template>
```

### Month Picker

Set `type` to `month` to select a year and month. Use the year switcher on the left side of the panel to switch or select the year.

```html
<script setup>
import { ref } from 'vue'

const date = ref('2021-04')
</script>

<template>
  <var-date-picker type="month" v-model="date" elevation />
</template>
```

### Year Picker

Set `type` to `year` to select a year.

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

### Props

| Prop | Description                                                                                                       | Type | Default |
| ----- |-------------------------------------------------------------------------------------------------------------------| -------- | ---------- |
| `v-model` | Selected value. The format follows `type` (`YYYY` / `YYYY-MM` / `YYYY-MM-DD`), and is an array when `multiple` or `range` | _string[] \| string_ | `undefined` |
| `type` | Picker type, optional values `date` `month` `year`                                                                         | _string_ | `date` |
| `allowed-dates` | Restricts which dates can be selected                                                                             | _function_ | `-` |
| `color` | Picker color                                                                                                      | _string_ | `-` |
| `title-color` | Color of picker title. If not specified it will use `color` prop or the default picker color. | _string_ | `-` |
| `hint`              | Picker hint. Inferred by `type` when not set                                  | _string_ | `-` |
| `elevation` | Elevation level, options `true` `false` and level of `0-24`                                                       | _string \| number \| boolean_|   `false`    |
| `button-elevation`  | Elevation level of Button                                                                                         | _string \| number \| boolean_|   `true`    |
| `first-day-of-week` | Sets the first day of the week, starting with 0 for Sunday.                                                       | _string \| number_ | `0` |
| `min` | Minimum allowed value. The format follows `type` (`YYYY` / `YYYY-MM` / `YYYY-MM-DD`)                              | _string_ | `-` |
| `max` | Maximum allowed value. The format follows `type` (`YYYY` / `YYYY-MM` / `YYYY-MM-DD`)                              | _string_ | `-` |
| `show-current` | Whether to display the current date                                                                               | _boolean_ | `true` |
| `show-title` | Whether to display the top title area                                                                             | _boolean_ | `true` |
| `readonly` | readonly                                                                                                          | _boolean_ | `false` |
| `multiple` | Allow the selection of multiple dates                                                                             | _boolean_ | `false` |
| `range` | Allow the selection of date range                                                                                 | _boolean_ | `false` |
| `fallback-view-date` ***3.15.2*** | Controls the panel view fallback date when there is no usable selected value. It does not update `v-model`. | _string_ | `-` |

### Events

| Event | Description                 | arguments |
| ----- |-----------------------------| -------- |
| `preview` | Emitted after the preview panel changes. `dayOfMonth` is available when the date picker has a selected day. | `year: number` <br>`month: number` <br>`dayOfMonth?: number` |
| `change` | Emitted after date changed  | `value: string \| string[]` |

### Methods

| Method | Description | Arguments | Return |
| ----- | -------------- | -------- | ------ |
| `resetPreview` ***3.19.0*** | Reset the panel view to the current bound value. If there is no valid value, `fallback-view-date` or today will be used. | `-` | `-` |

### Slots

`weekIndex` means the nth day of the week, starting with `0` for Sunday.

| Name | Description | SlotProps                                                            |
| ----- | -------------- |----------------------------------------------------------------------|
| `year` | Custom title text when `type="year"` | `year: YYYY`                                                         |
| `month` | Custom title text when `type="month"` | `year: YYYY` <br> `month: MM`                                        |
| `date` | Custom title text when `type="date"` | `year: YYYY` <br> `month: MM` <br> `date: DD` <br> `week: weekIndex` |
| `range` | Custom title text when selecting a range | `choose: [startDate, endDate]`, item format follows `type` (`YYYY` / `YYYY-MM` / `YYYY-MM-DD`) |
| `multiple` | Custom title text when selecting multiple values | `choose: string[]`, item format follows `type` (`YYYY` / `YYYY-MM` / `YYYY-MM-DD`) |
| `actions` | Custom the views in the action panel | `-`                                                                  |

### Style Variables
Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default                |
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
| `--date-picker-body-padding-horizontal` | `12px` |
| `--date-picker-body-padding` | `0 var(--date-picker-body-padding-horizontal) 16px` |
| `--date-picker-body-background-color` | `#fff`                 |
| `--date-picker-body-height` | `304px`                |
| `--date-picker-header-arrow-filter` | `opacity(1)` |
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

### Note

Since `3.19.0`, the following prop and CSS variables have been removed:

| Removed Prop |
| --- |
| `touchable` |

| Removed Variable |
| --- |
| `--date-picker-title-year-font-size` |
| `--date-picker-title-year-font-weight` |
| `--date-picker-title-year-margin-bottom` |
| `--date-picker-title-year-min-height` |
