# DatePicker

### Intro
Used to select a date or date range.

### Install

```js
import { createApp } from 'vue'
import { DatePicker } from '@varlet/ui'

createApp().use(DatePicker)
```

### Basic Usage

```html
<var-date-picker v-model="date" />
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const date = ref('2021-04-08')
    
    return {
      date
    }
  }
}
```

### Month Picker

Use `type` prop to change the type of the picker. The default value of `type` is `date`.

```html
<var-date-picker type="month" v-model="date" shadow />
```

### Multiple

Use `multiple` prop to select multiple dates, at this time, `date` is an array.

```html
<var-date-picker v-model="date" multiple />
```

### Range

Use `range` prop to select date range, at this time, `date` is `[startDate, endDate]`.

```html
<var-date-picker type="date" v-model="date" range>
```

### Date Limit

Use `min` and `max` prop to allow the maximum and minimum date, and use `allowed-dates` prop to limit the dates that can be selected.

```html
<var-date-picker 
  v-model="date" 
  min="2020-10-15"
  max="2021-01-15" 
  :allowed-dates="allowedDates"
/>
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const date = ref('2020-11-11')

    const allowedDates = (val) => {
      return parseInt(val.split('-')[2], 10) % 2 === 1
    }
    
    return {
      date,
      allowedDates,
    }
  }
}
```

### Custom

```html
<var-date-picker
  shadow
  type="month"
  v-model="date"
  min="2016-07"
  max="2022-01"
  header-color="purple"
  color="#7bb872"
  first-day-of-week="1"
  :allowed-dates="allowedDates"
  @change="change"
>
  <template #year="{ year }">
    <span>{{ year }}</span>
  </template>
  <template #month="{ year, month }">
    <span>{{ year }}-{{ month }}</span>
  </template>
</var-date-picker>
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const date = ref('2021-02')

    const allowedDates = (val) => {
      return parseInt(val.split('-')[1], 10) % 2 === 1
    }

    const change = (date) => {
      console.log(date)
    }
    
    return {
      date,
      change,
      allowedDates
    }
  }
}
```

## API

### Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `v-model` | Selected date（ISO 8601 format, `YYYY-MM-DD` or `YYYY-MM`）| _string[] \| string_ | `-` |
| `type` | Picker type, optional values`date, month` | _string_ | `date` |
| `allowed-dates` | Restricts which dates can be selected | _function_ | `-` |
| `color` | Picker color | _string_ | `#2979ff` |
| `header-color` | Color of picker header. If not specified it will use the color defined by color prop or the default picker color. | _string_ | `#2979ff` |
| `shadow` | Whether to add a shadow | _boolean_ | `false` |
| `first-day-of-week` | Sets the first day of the week, starting with 0 for Sunday. | _string \| number_ | `0` |
| `min` | Minimum allowed date/month (ISO 8601 format) | _string_ | `-` |
| `max` | Maximum allowed date/month (ISO 8601 format) | _string_ | `-` |
| `show-current` | Whether to display the current date | _boolean_ | `true` |
| `readonly` | readonly | _boolean_ | `false` |
| `multiple` | Allow the selection of multiple dates | _boolean_ | `false` |
| `range` | Allow the selection of date range | _boolean_ | `false` |

### Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `change` | Emitted after date changed | `value: string \| string[]` |

### Slots

`weekIndex` means the nth day of the week, starting with `0` for Sunday.

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `year` | Custom the year in the title | `year: YYYY` |
| `month` | Custom the month in the title | `year: YYYY` <br> `month: MM` |
| `date` | Custom the date in the title | `year: YYYY` <br> `month: MM` `date: DD` <br> `week: weekIndex` |
| `range` | Custom the range in the title | `choose: [startData, endDate]` |
| `multiple` | Custom the multiple in the title  | `choose: ['YYYY-MM-DD' \| 'YYYY-MM']` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--date-picker-border-radius` | `4px` |
| `--date-picker-font-size` | `var(--font-size-md)` |
| `--date-picker-min-width` | `290px` |
| `--date-picker-height` | `385px` |
| `--date-picker-title-padding` | `16px` |
| `--date-picker-title-background` | `var(--color-primary)` |
| `--date-picker-title-color` | `#fff` |
| `--date-picker-title-year-font-size` | `var(--font-size-md)` |
| `--date-picker-title-year-font-weight` | `500` |
| `--date-picker-title-year-margin-bottom` | `8px` |
| `--date-picker-title-date-height` | `48px` |
| `--date-picker-title-date-font-size` | `34px` |
| `--date-picker-title-date-font-weight` | `500` |
| `--date-picker-title-date-range-font-size` | `20px` |
| `--picker-header-padding` | `4px 16px` |
| `--picker-header-padding` | `4px 16px` |
| `--month-picker-padding` | `0 12px` |
| `--month-picker-item-width` | `33%` |
| `--month-picker-item-height` | `56px` |
| `--month-picker-item-button-max-width` | `140px` |
| `--year-picker-font-weight` | `400` |
| `--year-picker-item-padding` | `8px 0` |
| `--year-picker-item-active-font-size` | `26px` |
| `--year-picker-item-active-font-weight` | `500` |
| `--year-picker-item-active-font-padding` | `10px 0` |
| `--year-picker-item-active-color` | `var(--color-primary)` |
| `--day-picker-content-item-width` | `14.28%` |
| `--day-picker-content-item-font-size` | `var(--font-size-sm)` |
| `--day-picker-content-item-padding` | `2px 0` |
| `--day-picker-content-item-button-width` | `32px` |
| `--day-picker-content-item-button-height` | `32px` |
| `--day-picker-content-item-button-font-size` | `var(--font-size-sm)` |
| `--day-picker-head-item-color` | `rgba(0, 0, 0, 0.38)` |
| `--day-picker-head-item-padding` | `8px 0` |
| `--day-picker-head-item-font-weight` | `600` |
