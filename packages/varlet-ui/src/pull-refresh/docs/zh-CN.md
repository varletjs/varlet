# PullRefresh 下拉刷新

### 介绍

用于提供下拉刷新的交互操作

### 引入

  ```js
import { createApp } from 'vue'
import { PullRefresh } from '@varlet/ui'

createApp().use(PullRefresh)
```

### 基本使用

下拉到刷新位置时松开会触发`refresh`事件， 在事件开始时将`v-model`设置为`true`表示正在加载，完成后将`v-model`设置为`false`表示加载结束。

```html
<var-pull-refresh v-model='isRefresh' @refresh='refresh'>
  <var-cell 
    v-for="(item, index) in data" 
    :key="index" 
    border
  >
    {{ item + ' ' + (index + 1) }}
  </var-cell>
</var-pull-refresh>
```

```javascript
import { ref } from 'vue'

const data1 = Array(10).fill('List Item')
const data2 = Array(10).fill('This is new List Item')

export default {
  setup() {
    const isRefresh = ref(false)
    const data = ref(data1)

    const refresh = () => {
      setTimeout(() => {
        data.value = data.value[0] === 'List Item' ? data2 : data1
        isRefresh.value = false
      }, 2000)
    }

    return {
      refresh,
      isRefresh,
      data
    }
  }
}
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `v-model` | 是否处于加载中状态| _boolean_ | `-` |
| `disabled` | 是否禁用下拉刷新 | _boolean_ | `false` |
| `animation-duration` | 加载结束后回到初始位置的动画时长(ms) | _string \| number_ | `300` |
| `success-duration` | 成功提示展示时长(ms) | _string \| number_ | `2000` |
| `bgColor` | control的背景颜色 | _string_ | `#005CAF` |
| `color` | control 的颜色 | _string_ | `#ffffff` |
| `successBgColor` | 成功状态下control的背景颜色 | _string_ | `#4CAF50` |
| `successColor` | 成功状态下control的颜色 | _string_ | `ffffff` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `refresh` | 下拉刷新时触发| `-` |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | 默认插槽 | `-` |

### 主题变量
#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

| 变量名 | 默认值 |
| --- | --- |
| `@pull-refresh-size` | `40px` |
| `@pull-refresh-background` | `#fff` |
| `@pull-refresh-color` | `@color-primary` |
| `@pull-refresh-success-color` | `@color-success` |
| `@pull-refresh-icon-size` | `25px` |
