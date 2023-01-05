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
    <template #default="timeData">
      <span class="countdown-example-block">{{ timeData.hours }}</span>
      <span class="countdown-example-colon">:</span>
      <span class="countdown-example-block">{{ timeData.minutes }}</span>
      <span class="countdown-example-colon">:</span>
      <span class="countdown-example-block">{{ timeData.seconds }}</span>
     </template>
  </var-countdown>
</template>

<style>
.countdown-example-block {
  background: #ff9f00;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
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
    :auto-start="false"
    format="ss : SSS"
    @end="end"
    @change="change"
  />
  <var-row justify="space-between" align="center" style="margin-top: 10px">
    <var-button type="primary" @click="$refs.countdown.start()">start</var-button>
    <var-button @click="$refs.countdown.pause()">pause</var-button>
    <var-button @click="$refs.countdown.reset()">reset</var-button>
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

| Event    | Description                     | arguments            |
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

| Method | Description	 | arguments | Return |
| ---- | ------- | -------- |--------|
| `start` | Start countdown | `-`       | `-` |
| `pause` | Pause countdown | `-`       | `-` |
| `reset` | Reset countdown | `-`       | `-` |
