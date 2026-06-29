# DateInput

### Intro

Used to input or select dates.

### Standard Variant

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const standardValue = ref('2021-04-08')
const standardValue2 = ref('2021-04')
const standardValue3 = ref('2021')
const standardValue4 = ref('2021-04-08')
const standardValue5 = ref('2021-04-08')
const standardValue6 = ref('2021-04-08')
const standardValue7 = ref('')
const standardValue8 = ref('')
const standardValue9 = ref('2021-04-08')
const standardValue10 = ref(['2021-04-08', '2021-04-12'])
const standardValue11 = ref(['2021-04-08', '2021-04-20'])
const standardValue12 = ref(1617811200000)
const standardValue13 = ref('2021/04/08')
const standardValue14 = ref('2021-04-08')
const standardValue15 = ref(['2021-04', '2021-09'])
const standardValue16 = ref(['2021', '2025'])
const standardValue17 = ref('2021-04-08')
const standardValue18 = ref(['2021-04-08', '2021-04-12'])
const standardValue19 = ref('2021-04-09')
const datetimeValue = ref('2021-04-08 12:30:45')

const allowedDates = (date) => Number(date.split('-')[2]) % 2 === 1
</script>

<template>
  <var-space direction="column" size="large">
    <var-date-input v-model="standardValue" placeholder="Select date" />
    <var-date-input v-model="standardValue2" type="month" placeholder="Select month" />
    <var-date-input v-model="standardValue3" type="year" placeholder="Select year" />
    <var-date-input v-model="standardValue4" placeholder="Readonly" readonly />
    <var-date-input v-model="standardValue5" placeholder="Disabled" disabled />
    <var-date-input v-model="standardValue6" placeholder="Clearable" clearable />
    <var-date-input
      v-model="standardValue7"
      placeholder="Validate"
      :rules="[(v) => !!v || 'Please select date']"
    />
    <var-date-input
      v-model="standardValue8"
      placeholder="Validate with Zod"
      :rules="z.string().min(1, { message: 'Please select date' })"
    />
    <var-date-input v-model="standardValue9" placeholder="Display Icon">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="calendar-month-outline" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="heart-outline" />
      </template>
    </var-date-input>
    <var-date-input v-model="standardValue10" multiple placeholder="Select multiple dates" />
    <var-date-input v-model="standardValue11" range placeholder="Select date range" />
    <var-date-input v-model="standardValue15" type="month" range placeholder="Select month range" />
    <var-date-input v-model="standardValue16" type="year" range placeholder="Select year range" />
    <var-date-input v-model="standardValue17" min="2021-04-05" max="2021-04-20" placeholder="Min And Max" />
    <var-date-input
      v-model="standardValue18"
      range
      range-separator=" to "
      placeholder="Custom Separator"
    />
    <var-date-input v-model="standardValue19" :allowed-dates="allowedDates" placeholder="Allowed Dates" />
    <var-date-input v-model="standardValue12" value-format="timestamp" placeholder="Timestamp Value">
      <template #extra-message>Current value: {{ standardValue12 }}</template>
    </var-date-input>
    <var-date-input v-model="standardValue13" value-format="YYYY/MM/DD" placeholder="Custom Value Format">
      <template #extra-message>Current value: {{ standardValue13 }}</template>
    </var-date-input>
    <var-date-input v-model="standardValue14" size="small" placeholder="Small Size" />
    <var-date-input v-model="datetimeValue" type="datetime" placeholder="Select datetime">
      <template #extra-message>Current value: {{ datetimeValue }}</template>
    </var-date-input>
  </var-space>
</template>

<style>
.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}

</style>
```

### Outlined Variant

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const outlinedValue = ref('2021-04-08')
const outlinedValue2 = ref('2021-04')
const outlinedValue3 = ref('2021')
const outlinedValue4 = ref('2021-04-08')
const outlinedValue5 = ref('2021-04-08')
const outlinedValue6 = ref('2021-04-08')
const outlinedValue7 = ref('')
const outlinedValue8 = ref('')
const outlinedValue9 = ref('2021-04-08')
const outlinedValue10 = ref(['2021-04-08', '2021-04-12'])
const outlinedValue11 = ref(['2021-04-08', '2021-04-20'])
const outlinedValue12 = ref(1617811200000)
const outlinedValue13 = ref('2021/04/08')
const outlinedValue14 = ref('2021-04-08')
const outlinedValue15 = ref(['2021-04', '2021-09'])
const outlinedValue16 = ref(['2021', '2025'])
const outlinedValue17 = ref('2021-04-08')
const outlinedValue18 = ref(['2021-04-08', '2021-04-12'])
const outlinedValue19 = ref('2021-04-09')
const datetimeNoSecondsValue = ref('2021-04-08 12:30')
const datetimeAllowedTimesValue = ref('2021-04-08 10:00:00')

const allowedDates = (date) => Number(date.split('-')[2]) % 2 === 1
const allowedTimes = () => ({
  hours: (hour) => hour >= 9 && hour < 18,
  minutes: (minute) => minute % 15 === 0,
  seconds: (second) => second === 0,
})
</script>

<template>
  <var-space direction="column" size="large">
    <var-date-input v-model="outlinedValue" variant="outlined" placeholder="Select date" />
    <var-date-input v-model="outlinedValue2" variant="outlined" type="month" placeholder="Select month" />
    <var-date-input v-model="outlinedValue3" variant="outlined" type="year" placeholder="Select year" />
    <var-date-input v-model="outlinedValue4" variant="outlined" placeholder="Readonly" readonly />
    <var-date-input v-model="outlinedValue5" variant="outlined" placeholder="Disabled" disabled />
    <var-date-input v-model="outlinedValue6" variant="outlined" placeholder="Clearable" clearable />
    <var-date-input
      v-model="outlinedValue7"
      variant="outlined"
      placeholder="Validate"
      :rules="[(v) => !!v || 'Please select date']"
    />
    <var-date-input
      v-model="outlinedValue8"
      variant="outlined"
      placeholder="Validate with Zod"
      :rules="z.string().min(1, { message: 'Please select date' })"
    />
    <var-date-input v-model="outlinedValue9" variant="outlined" placeholder="Display Icon">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="calendar-month-outline" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="heart-outline" />
      </template>
    </var-date-input>
    <var-date-input v-model="outlinedValue10" variant="outlined" multiple placeholder="Select multiple dates" />
    <var-date-input v-model="outlinedValue11" variant="outlined" range placeholder="Select date range" />
    <var-date-input v-model="outlinedValue15" variant="outlined" type="month" range placeholder="Select month range" />
    <var-date-input v-model="outlinedValue16" variant="outlined" type="year" range placeholder="Select year range" />
    <var-date-input
      v-model="outlinedValue17"
      variant="outlined"
      min="2021-04-05"
      max="2021-04-20"
      placeholder="Min And Max"
    />
    <var-date-input
      v-model="outlinedValue18"
      variant="outlined"
      range
      range-separator=" to "
      placeholder="Custom Separator"
    />
    <var-date-input
      v-model="outlinedValue19"
      variant="outlined"
      :allowed-dates="allowedDates"
      placeholder="Allowed Dates"
    />
    <var-date-input v-model="outlinedValue12" variant="outlined" value-format="timestamp" placeholder="Timestamp Value">
      <template #extra-message>Current value: {{ outlinedValue12 }}</template>
    </var-date-input>
    <var-date-input
      v-model="outlinedValue13"
      variant="outlined"
      value-format="YYYY/MM/DD"
      placeholder="Custom Value Format"
    >
      <template #extra-message>Current value: {{ outlinedValue13 }}</template>
    </var-date-input>
    <var-date-input v-model="outlinedValue14" variant="outlined" size="small" placeholder="Small Size" />
    <var-date-input
      v-model="datetimeNoSecondsValue"
      type="datetime"
      :use-seconds="false"
      variant="outlined"
      placeholder="Select datetime to minute"
    >
      <template #extra-message>Current value: {{ datetimeNoSecondsValue }}</template>
    </var-date-input>
    <var-date-input
      v-model="datetimeAllowedTimesValue"
      type="datetime"
      variant="outlined"
      :allowed-times="allowedTimes"
      placeholder="Allowed times"
    >
      <template #extra-message>Current value: {{ datetimeAllowedTimesValue }}</template>
    </var-date-input>
  </var-space>
</template>

<style>
.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}

</style>
```

### Filled Variant

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const filledValue = ref('2021-04-08')
const filledValue2 = ref('2021-04')
const filledValue3 = ref('2021')
const filledValue4 = ref('2021-04-08')
const filledValue5 = ref('2021-04-08')
const filledValue6 = ref('2021-04-08')
const filledValue7 = ref('')
const filledValue8 = ref('')
const filledValue9 = ref('2021-04-08')
const filledValue10 = ref(['2021-04-08', '2021-04-12'])
const filledValue11 = ref(['2021-04-08', '2021-04-20'])
const filledValue12 = ref(1617811200000)
const filledValue13 = ref('2021/04/08')
const filledValue14 = ref('2021-04-08')
const filledValue15 = ref(['2021-04', '2021-09'])
const filledValue16 = ref(['2021', '2025'])
const filledValue17 = ref('2021-04-08')
const filledValue18 = ref(['2021-04-08', '2021-04-12'])
const filledValue19 = ref('2021-04-09')
const datetimeMinMaxValue = ref('2021-04-08 12:00:00')
const datetimeRangeValue = ref(['2021-04-08 09:00:00', '2021-04-12 18:30:00'])

const allowedDates = (date) => Number(date.split('-')[2]) % 2 === 1
</script>

<template>
  <var-space direction="column" size="large">
    <var-date-input v-model="filledValue" variant="filled" placeholder="Select date" />
    <var-date-input v-model="filledValue2" variant="filled" type="month" placeholder="Select month" />
    <var-date-input v-model="filledValue3" variant="filled" type="year" placeholder="Select year" />
    <var-date-input v-model="filledValue4" variant="filled" placeholder="Readonly" readonly />
    <var-date-input v-model="filledValue5" variant="filled" placeholder="Disabled" disabled />
    <var-date-input v-model="filledValue6" variant="filled" placeholder="Clearable" clearable />
    <var-date-input
      v-model="filledValue7"
      variant="filled"
      placeholder="Validate"
      :rules="[(v) => !!v || 'Please select date']"
    />
    <var-date-input
      v-model="filledValue8"
      variant="filled"
      placeholder="Validate with Zod"
      :rules="z.string().min(1, { message: 'Please select date' })"
    />
    <var-date-input v-model="filledValue9" variant="filled" placeholder="Display Icon">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="calendar-month-outline" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="heart-outline" />
      </template>
    </var-date-input>
    <var-date-input v-model="filledValue10" variant="filled" multiple placeholder="Select multiple dates" />
    <var-date-input v-model="filledValue11" variant="filled" range placeholder="Select date range" />
    <var-date-input v-model="filledValue15" variant="filled" type="month" range placeholder="Select month range" />
    <var-date-input v-model="filledValue16" variant="filled" type="year" range placeholder="Select year range" />
    <var-date-input
      v-model="filledValue17"
      variant="filled"
      min="2021-04-05"
      max="2021-04-20"
      placeholder="Min And Max"
    />
    <var-date-input
      v-model="filledValue18"
      variant="filled"
      range
      range-separator=" to "
      placeholder="Custom Separator"
    />
    <var-date-input
      v-model="filledValue19"
      variant="filled"
      :allowed-dates="allowedDates"
      placeholder="Allowed Dates"
    />
    <var-date-input v-model="filledValue12" variant="filled" value-format="timestamp" placeholder="Timestamp Value">
      <template #extra-message>Current value: {{ filledValue12 }}</template>
    </var-date-input>
    <var-date-input
      v-model="filledValue13"
      variant="filled"
      value-format="YYYY/MM/DD"
      placeholder="Custom Value Format"
    >
      <template #extra-message>Current value: {{ filledValue13 }}</template>
    </var-date-input>
    <var-date-input v-model="filledValue14" variant="filled" size="small" placeholder="Small Size" />
    <var-date-input
      v-model="datetimeMinMaxValue"
      type="datetime"
      variant="filled"
      min="2021-04-08 09:30:00"
      max="2021-04-20 18:00:00"
      placeholder="Datetime min and max"
    >
      <template #extra-message>Current value: {{ datetimeMinMaxValue }}</template>
    </var-date-input>
    <var-date-input v-model="datetimeRangeValue" type="datetime" range variant="filled" placeholder="Select datetime range">
      <template #extra-message>Current value: {{ datetimeRangeValue.join(' ~ ') }}</template>
    </var-date-input>
  </var-space>
</template>

<style>
.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}

</style>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model` | Binding value. Default formats are `YYYY-MM-DD` / `YYYY-MM` / `YYYY` / `YYYY-MM-DD HH:mm:ss`; datetime uses `YYYY-MM-DD HH:mm` when `use-seconds` is `false`. `value-format` can change the binding value type | _string \| number \| Date \| Array<string \| number \| Date> \| undefined_ | `-` |
| `type` | Input type, can be `date` `month` `year` `datetime` | _string_ | `date` |
| `format` | Input display format | _string_ | `-` |
| `value-format` | Binding value format, can be `timestamp` `date` or a date format string | _string_ | `-` |
| `use-seconds` | Whether to keep precision to seconds when `type` is `datetime` | _boolean_ | `true` |
| `multiple` | Whether to enable multiple selection. This prop is not supported when `type` is `datetime` | _boolean_ | `false` |
| `range` | Whether to enable range selection | _boolean_ | `false` |
| `separator` | Separator between multiple dates in the input | _string_ | `, ` |
| `range-separator` | Separator for range display | _string_ | ` ~ ` |
| `placeholder` | Placeholder | _string_ | `-` |
| `variant` | Input variant, can be `standard` `outlined` `filled` | _string_ | `standard` |
| `size` | Input size, can be `normal` `small` | _string_ | `normal` |
| `line` | Whether to show divider | _boolean_ | `true` |
| `hint` | Whether to use placeholder as hint | _boolean_ | `true` |
| `text-color` | Text color | _string_ | `-` |
| `focus-color` | Main color when focused | _string_ | `-` |
| `blur-color` | Main color when blurred | _string_ | `-` |
| `readonly` | Whether to be readonly. Input and panel selection are disabled when readonly | _boolean_ | `false` |
| `disabled` | Whether to disable the input | _boolean_ | `false` |
| `clearable` | Whether to show clear icon | _boolean_ | `false` |
| `validate-trigger` | Validation trigger timing, can be `onFocus` `onBlur` `onChange` `onClick` `onClear` `onInput` | _InputValidateTrigger[]_ | `['onInput', 'onClear', 'onChange']` |
| `rules` | Validation rules. Return `true` to pass validation, other values are converted into user messages. [Zod validation](#/en-US/zodValidation) is supported since `3.5.0` | _((v: any) => any) \| ZodType \| Array<((v: any) => any) \| ZodType>_ | `-` |
| `allowed-dates` | Selectable date filter | _(value: string) => boolean_ | `-` |
| `allowed-times` | Selectable time filter, only works when `type` is `datetime` | _(date: string, position?: 'start' \| 'end') => { hours?, minutes?, seconds? }_ | `-` |
| `min` | Minimum selectable boundary | _string_ | `-` |
| `max` | Maximum selectable boundary | _string_ | `-` |
| `first-day-of-week` | First day of week, starts from Sunday `0` | _string \| number_ | `0` |
| `tabindex` | Same as native input tabindex | _string_ | `-` |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `focus` | Focus | `-` | `-` |
| `blur` | Blur | `-` | `-` |
| `select` | Select all input text | `-` | `-` |
| `validate` | Trigger validation | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clear validation message | `-` | `-` |
| `reset` | Clear binding value and validation message | `-` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `focus` | Emitted on focus | `event: Event` |
| `blur` | Emitted on blur | `event: Event` |
| `clear` | Emitted on clear | `value: string` |
| `change` | Emitted when binding value changes | `value: string \| number \| Date \| Array<string \| number \| Date> \| undefined` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `prepend-icon` | Prepend icon | `-` |
| `append-icon` | Append icon | `-` |
| `clear-icon` | Clear icon | `clear: (e: Event) => void` |
| `extra-message` | Extra message | `-` |

### Style Variables

The following are the css variables used by the component. You can use [StyleProvider](#/en-US/style-provider) to customize them.

| Variable | Default |
| --- | --- |
| `--date-input-picker-width` | `320px` |
| `--date-input-time-select-separator-color` | `var(--color-on-surface-variant)` |
| `--date-input-time-select-border-color` | `var(--color-outline)` |
| `--date-input-time-select-active-color` | `var(--color-primary)` |
