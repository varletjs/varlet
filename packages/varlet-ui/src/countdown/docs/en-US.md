# Countdown

### Introduce

For real-time display of countdown values, support millisecond precision.

### install

```js
import { Countdown } from '@varlet/ui'

export default defineComponent({
  components: {
    [Countdown.name]: Countdown
  }
})
```

### Basic Usage

Use `time` to set countdown time(ms).

```html
<tempalte>
  <var-countdown :time="time" />
</tempalte>

<script>
  import { defineComponent, ref } from 'vue'
  import { Countdown } from '@varlet/ui'

  export default defineComponent({
    components: {
      [Countdown.name]: Countdown
    },
    setup() {
      const time = ref(30 * 60 * 60 * 1000)

      return {
        time
      }
    }
  })
</script>
```
### Custom Format

Use `format` to set time text.

```html
<var-countdown :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
```

### Show Millisecond

Use `S` text to show millisecond.

```html
<var-countdown :time="time" format="HH:mm:ss:SS" />
```

### Custom Style

Use `slot` to set custom countdown style.

```html
<var-down :time="time">
  <template #default="timeData">
    <span class="block">{{ timeData.hours }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.minutes }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.seconds }}</span>
  </template>
</var-down>
```

### Manual Control

Use `ref` to get countdown instance, you can call the `start`, `pause`, and `reset` methods.

```html
<template>
  <var-countdown
    time="3000"
    ref="countdown"
    :auto-start="false"
    format="ss : SSS"
    @end="end"
    @change="change"
  />
  <div class="btn-container">
    <var-button type="primary" @click="$refs.countdown.start()">start</var-button>
    <var-button @click="$refs.countdown.pause()">pause</var-button>
    <var-button @click="$refs.countdown.reset()">reset</var-button>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  import { Countdown, Snackbar, Button } from '@varlet/ui'

  export default defineComponent({
    components: {
      [Countdown.name]: Countdown,
      [Button.name]: Button,
    },
    setup() {
      const countdown = ref(null)

      const end = () => {
        Snackbar.info('end!')
      }

      const change = () => {
        console.log('change')
      }

      return {
        countdown,
        end,
        change,
      }
    },
  })
</script>
<style scoped>
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
</style>
```

## API

### Props

| Attribute | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| time | Total time(ms)| _number_ ｜ _string_ | `0` |
| format | Time format | _string_ | `HH:mm:ss` |
| auto-start | Whether to auto start count down | _number_ ｜ _boolean_ | `true` |

### Available formats
| Format | Description |
| -- | --- |
| DD | Day |
| HH | Hour |
| mm | Minute |
| ss | Second |
| S | Millisecond, 1-digit |
| SS | Millisecond, 2-digit |
| SSS | Millisecond, 3-digit |

### Events

| Event | Description | Parameters |
| ----- | -------------- | -------- |
| end | Emitted after countdown end | - |
| change | Emitted after countdown change | `timeData: TimeData` |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| default | Custom content | `timeData: TimeData` |

### TimeData Structure

| Name | Description | Type |
| ---- | ------- | -------- |
| days | Remain days | `number` |
| hours | Remain hours | `number` |
| minutes | Remain minutes | `number` |
| seconds | Remain seconds	 | `number` |
| milliseconds | Remain milliseconds | `number` |


### Methods
Use ref to get CountDown instance and call instance methods.

| Name | Description	 | Attribute |
| ---- | ------- | -------- |
| start | Start countdown	 | - |
| pause | Pause countdown	 | - |
| reset | Reset countdown | - |
