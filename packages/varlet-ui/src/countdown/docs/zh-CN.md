# Countdown 倒计时

### 介绍

用于实时展示倒计时数值，支持毫秒精度。

### 引入

```js
import { Countdown } from '@varlet/ui'

export default defineComponent({
	components: {
		[Countdown.name]: Countdown
	}
})
```

### 基本使用

`time` 属性表示倒计时总时长，单位为毫秒。

```html
<var-countdown :time="time" />
```

```js
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

通过插槽自定义倒计时的样式，`timeData` 对象格式见下方表格。。

```html
<van-count-down :time="time">
  <template #default="timeData">

  </template>
</van-count-down>
```