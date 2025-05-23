# Countdown

### Intro

For real-time display of countdown values, support millisecond precision.

### Basic Usage

Use `time` to set countdown time(ms).

```html
<script setup>
import { ref } from 'vue'

const time = ref(30 * 60 * 60 * 1000)
</script>

<template>
  <var-countdown :time="time" />
</template>
```

### Custom Format

Use `format` to set time text.

```html
<script setup>
import { ref } from 'vue'

const time = ref(30 * 60 * 60 * 1000)
</script>

<template>
  <var-countdown :time="time" format="DD Day, HH:mm:ss" />
</template>
```

### Show Millisecond

Use `S` text to show millisecond.

```html
<script setup>
import { ref } from 'vue'

const time = ref(30 * 60 * 60 * 1000)
</script>

<template>
  <var-countdown :time="time" format="HH:mm:ss:SS" />
</template>
```

### Custom Style

Use `slot` to set custom countdown style.

```html
<template>
  <var-countdown :time="108000000">
    <template #default="{ hours, minutes, seconds }">
      <span class="countdown-example-block">{{ hours }}</span>
      <span class="countdown-example-colon">:</span>
      <span class="countdown-example-block">{{ minutes }}</span>
      <span class="countdown-example-colon">:</span>
      <span class="countdown-example-block">{{ seconds }}</span>
     </template>
  </var-countdown>
</template>

<style>
.countdown-example-block {
  background: var(--color-primary);
  color: var(--color-on-primary);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.countdown-example-colon {
  margin: 0 5px;
  font-size: 18px;
  font-weight: 500;
}
</style>
```

### Manual Control

Use `ref` to get countdown instance, you can call the `start`, `pause`, and `reset` methods.

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const countdown = ref(null)

function end() {
  Snackbar.info('end!')
}

function change() {
  console.log('change')
}
</script>

<template>
  <var-countdown
    time="3000"
    ref="countdown"
    format="ss : SSS"
    :auto-start="false"
    @end="end"
    @change="change"
  />
  <var-row justify="space-between" align="center" style="margin-top: 10px">
    <var-button type="primary" @click="countdown.start()">Start</var-button>
    <var-button @click="countdown.pause()">Pause</var-button>
    <var-button @click="countdown.reset()">Reset</var-button>
  </var-row>
</template>
```

## API

### Props

| Prop         | Description                      | Type               | Default        |
| ------------ | -------------------------------- | ------------------ | -------------- |
| `time`       | Total time(ms)                   | _string \| number_ | `0`            |
| `format`     | Time format                      | _string_           | `HH : mm : ss` |
| `auto-start` | Whether to auto start count down | _boolean_          | `true`         |

### Available formats

| Format | Description          |
| ------ | -------------------- |
| `DD`   | Day                  |
| `HH`   | Hour                 |
| `mm`   | Minute               |
| `ss`   | Second               |
| `S`    | Millisecond, 1-digit |
| `SS`   | Millisecond, 2-digit |
| `SSS`  | Millisecond, 3-digit |

### Events

| Event    | Description                     | Arguments            |
| -------- | ------------------------------- | -------------------- |
| `end`    | Emitted after countdown ended   | `-`                  |
| `change` | Emitted after countdown changed | `timeData: TimeData` |

### Slots

| Name      | Description    | SlotProps            |
| --------- | -------------- | -------------------- |
| `default` | Custom content | `timeData: TimeData` |

### TimeData Structure

| Name           | Description         | Type     |
| -------------- | ------------------- | -------- |
| `days`         | Remain days         | `number` |
| `hours`        | Remain hours        | `number` |
| `minutes`      | Remain minutes      | `number` |
| `seconds`      | Remain seconds      | `number` |
| `milliseconds` | Remain milliseconds | `number` |

### Methods

Use ref to get CountDown instance and call instance methods.

| Method | Description	 | Arguments | Return |
| ---- | ------- | -------- |--------|
| `start` | Start countdown | `-`       | `-` |
| `pause` | Pause countdown | `-`       | `-` |
| `reset` | Reset countdown | `-`       | `-` |

### Style Variables
Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--countdown-text-color`     | `var(--color-text)`   |
| `--countdown-text-font-size` | `var(--font-size-lg)` |