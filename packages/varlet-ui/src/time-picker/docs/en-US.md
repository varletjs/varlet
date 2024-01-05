# TimePicker

### Intro
Used to select time.

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const date = ref('11:20')
</script>

<template>
  <var-time-picker v-model="date" />
</template>
```

### 24hr Format

Use `format` prop to change the format of the picker. The default value of `format` is `ampm`.

```html
<script setup>
import { ref } from 'vue'

const date = ref('15:20')
</script>

<template>
  <var-time-picker v-model="date" format="24hr" />
</template>
```

### Show Seconds

use `use-seconds` prop to show seconds.

```html
<script setup>
import { ref } from 'vue'

const date = ref('17:36:22')
</script>

<template>
  <var-time-picker v-model="date" format="24hr" use-seconds />
</template>
```

### Readonly

```html
<script setup>
import { ref } from 'vue'

const date = ref('07:10')
</script>

<template>
  <var-time-picker v-model="date" readonly />
</template>
```

### Time Limit
Use `min`, `max` and `allowed-time` prop to allow the maximum and minimum time.

```html
<script setup>
import { ref } from 'vue'

const date = ref('07:10:12')

const allowedTime = {
  hours: (hour) => hour % 2 === 0,
  minutes: (minute) => minute % 15 !== 0,
  seconds: (second) => second % 2 !== 0,
}
</script>

<template>
  <var-time-picker
    v-model="date"
    format="24hr"
    use-seconds
    min="2:28:38"
    max="19:40:22"
    :allowed-time="allowedTime"
  />
</template>
```

### Actions Slots

```html
<script setup>
import { ref } from 'vue'

const date = ref('17:36:22')
</script>

<template>
  <var-time-picker v-model="date">
    <template #actions>
      <var-space size="small">
        <var-button type="primary" text>ACTION</var-button>
        <var-button type="primary" text>ACTION</var-button>
      </var-space>
    </template>
  </var-time-picker>
</template>
```

## API

### Props

| Prop | Description                                                                                                       | Type | Default |
| ----- |-------------------------------------------------------------------------------------------------------------------| -------- | ---------- |
| `v-model` | Selected time（ISO 8601 format, `HH:mm` or `HH:mm:ss`）                                                             | _string_ | `-` |
| `format`  | Picker type, optional values `ampm` `24hr`                                                                         | _string_ | `ampm` |
| `color` | Picker color                           | _string_ | `-` |
| `title-color` | Color of picker title. If not specified it will use the color defined by `color` prop or the default picker color. | _string_ | `-` |
| `hint`        | Picker hint |  _string_  | `SELECT TIME` |
| `elevation` | Elevation level, options `true` `false` and level of `0-24`                                                       | _string \| number \| boolean_|   `false`    |
| `min` | Minimum allowed time (ISO 8601 format)                                                                            | _string_ | `-` |
| `max` | Maximum allowed time (ISO 8601 format)                                                                            | _string_ | `-` |
| `allowed-time` | Restricts which time can be selected                                                                              | _AllowedTime_ | `-` |
| `readonly` | Readonly                                                                                                          | _boolean_ | `false` |
| `use-seconds` | Whether to display seconds                                                                                        | _boolean_ | `false` |

### TimePicker AllowedTime

| Prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `hours` | Limit the optional `hour` | _Function: hour => boolean_ | `-` |
| `minutes` | Limit the optional `minute` | _Function: minute => boolean_ | `-` |
| `seconds` | Limit the optional `second` | _Function: second => boolean_ | `-` |

### Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `change` | Emitted after time changed | `value: string` |

### slots

| Name | Description | SlotProps                                                            |
| ----- | -------------- |----------------------------------------------------------------------|
| `actions` | Custom the views in the action panel | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default                |
| --- |------------------------|
| `--time-picker-border-radius` | `4px` |
| `--time-picker-font-size` | `var(--font-size-md)` |
| `--time-picker-min-width` | `290px` |
| `--time-picker-title-height` | `105px` |
| `--time-picker-title-padding` | `16px` |
| `--time-picker-title-margin-bottom` | `8px` |
| `--time-picker-title-color` | `#fff` |
| `--time-picker-title-background` | `var(--color-primary)` |
| `--time-picker-title-hint-color` | `'#fff'` |
| `--time-picker-title-hint-font-size` | `14px` |
| `--time-picker-title-inactive-opacity` | `0.6` |
| `--time-picker-title-time-font-size` | `50px` |
| `--time-picker-title-time-margin` | `0 5px` |
| `--time-picker-title-time-border-radius` | `0` |
| `--time-picker-title-time-padding` | `0` |
| `--time-picker-title-time-background` | `transparent` |
| `--time-picker-title-time-active-background` | `transparent` |
| `--time-picker-title-ampm-button-active-background` | `transparent` |
| `--time-picker-title-ampm-margin-left` | `10px` |
| `--time-picker-title-ampm-border-radius` | `0` |
| `--time-picker-title-ampm-border` | `none` |
| `--time-picker-title-ampm-button-padding` | `2px` |
| `--time-picker-clock-left` | `27px` |
| `--time-picker-clock-right` | `27px` |
| `--time-picker-clock-top` | `27px` |
| `--time-picker-clock-bottom` | `27px` |
| `--time-picker-clock-container-width` | `256px` |
| `--time-picker-clock-container-height` | `256px` |
| `--time-picker-clock-container-background` | `#e0e0e0` |
| `--time-picker-clock-hand-height` | `calc(50% - 4px)` |
| `--time-picker-clock-hand-width` | `2px` |
| `--time-picker-clock-hand-bottom` | `50%` |
| `--time-picker-clock-hand-left` | `calc(50% - 1px)` |
| `--time-picker-clock-hand-background` | `var(--color-primary)` |
| `--time-picker-clock-hand-border-color` | `var(--color-primary)` |
| `--time-picker-clock-hand-before-width` | `10px` |
| `--time-picker-clock-hand-before-height` | `10px` |
| `--time-picker-clock-hand-before-border-width` | `2px` |
| `--time-picker-clock-hand-after-width` | `4px` |
| `--time-picker-clock-hand-after-height` | `4px` |
| `--time-picker-clock-item-height` | `32px` |
| `--time-picker-clock-item-width` | `32px` |
| `--time-picker-clock-item-active-background` | `var(--color-primary)` |
| `--time-picker-clock-item-active-color` | `var(--color-on-primary)` |
| `--time-picker-clock-item-disable-color` | `rgba(0, 0, 0, 0.26)` |
| `--time-picker-clock-item-disable-background` | `#bdbdbd` |
| `--time-picker-clock-item-text-color` | `#555` |
| `--time-picker-inner-left` | `36px` |
| `--time-picker-inner-right` | `36px` |
| `--time-picker-inner-top` | `36px` |
| `--time-picker-inner-bottom` | `36px` |
| `--time-picker-body-background` | `#fff` |
| `--time-picker-body-height` | `288px` |
| `--time-picker-actions-padding` | `0 8px 12px 8px` |