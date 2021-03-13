# Countdown

### Intro

For real-time display of countdown values, support millisecond precision.

### Install

```js
import { Countdown } from '@varlet/ui'

createApp().use(Countdown)
```

### Basic Usage

Use `time` to set countdown time(ms).

```html
  <var-countdown :time="time" />
```
```javascript
  export default {
    setup() {
      const time = ref(30 * 60 * 60 * 1000)

      return {
        time
      }
    }
  }
```
### Custom Format

Use `format` to set time text.

```html
<var-countdown :time="time" format="DD Day, HH:mm:ss" />
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
```
```javascript
  export default {
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
    }
  }
```
```css
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
```

## API

### Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `time` | Total time(ms)| _number_ ｜ _string_ | `0` |
| `format` | Time format | _string_ | `HH:mm:ss` |
| `auto-start` | Whether to auto start count down | _number_ ｜ _boolean_ | `true` |

### Available formats
| Format | Description |
| -- | --- |
| `DD` | Day |
| `HH` | Hour |
| `mm` | Minute |
| `ss` | Second |
| `S` | Millisecond, 1-digit |
| `SS` | Millisecond, 2-digit |
| `SSS` | Millisecond, 3-digit |

### Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `end` | Emitted after countdown ended | - |
| `change` | Emitted after countdown changed | `timeData: TimeData` |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Custom content | `timeData: TimeData` |

### TimeData Structure

| Name | Description | Type |
| ---- | ------- | -------- |
| `days` | Remain days | `number` |
| `hours` | Remain hours | `number` |
| `minutes` | Remain minutes | `number` |
| `seconds` | Remain seconds	 | `number` |
| `milliseconds` | Remain milliseconds | `number` |


### Methods
Use ref to get CountDown instance and call instance methods.

| Name | Description	 | arguments |
| ---- | ------- | -------- |
| `start` | Start countdown	 | - |
| `pause` | Pause countdown	 | - |
| `reset` | Reset countdown | - |
