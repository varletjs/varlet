# Countdown 倒计时

### 介绍

用于实时展示倒计时数值，支持毫秒精度。

### 引入

```js
import { Countdown } from '@varlet/ui'

createApp().use(Countdown)
```

### 基本使用

`time` 属性表示倒计时总时长，单位为毫秒。

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
### 自定义格式

通过 `format` 属性设置倒计时文本的内容。

```html
<var-countdown :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
```

### 显示毫秒

通过 `S` 文本显示毫秒。

```html
<var-countdown :time="time" format="HH:mm:ss:SS" />
```

### 自定义样式

通过插槽自定义倒计时的样式，`timeData` 对象格式见下方表格。

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

### 手动控制

通过 ref 获取到组件实例后，可以调用 `start`、`pause`、`reset` 方法。

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

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| time | 倒计时时长(ms)| _number_ ｜ _string_ | `0` |
| format | 时间格式 | _string_ | `HH:mm:ss` |
| auto-start | 是否自动开始倒计时 | _number_ ｜ _boolean_ | `true` |

### format 格式
| 格式 | 说明 | 
| -- | --- |
| DD | 天数 |
| HH | 小时 |
| mm | 分钟 |
| ss | 秒数 |
| S | 毫秒（1位） |
| SS | 毫秒（2位） |
| SSS | 毫秒（3位） |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| end | 倒计时结束时触发| - |
| change | 倒计时变化时触发| `timeData: TimeData` |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| default | 自定义内容 | `timeData: TimeData` |

### TimeData 格式

| 名称 | 说明 | 类型 |
| ---- | ------- | -------- |
| days | 剩余天数 | `number` |
| hours | 剩余小时 | `number` |
| minutes | 剩余分钟 | `number` |
| seconds | 剩余秒数 | `number` |
| milliseconds | 剩余毫秒 | `number` |


### 方法
通过 ref 可以获取到 CountDown 实例并调用实例方法

| 方法名 | 说明 | 参数 |
| ---- | ------- | -------- |
| start | 开始倒计时	 | - |
| pause | 暂停倒计时	 | - |
| reset | 重设倒计时，若 `auto-start` 为 `true`，重设后会自动开始倒计时 | - |
