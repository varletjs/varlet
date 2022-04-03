# 无限滚动列表

### 介绍
无限滚动加载列表、触底加载，支持手动检查位置并加载。支持自定义加载状态、错误状态、数据加载完成状态。

### 引入

```js
import { createApp } from 'vue'
import { List } from '@varlet/ui'

createApp().use(List)
```

### 基本使用

当检测到滚动容器滚动到底部底部时会触发 `load` 事件，并会设置 `loading` 为 `true`，在加载结束时您需要手动设置 `loading` 为 `false`，表示加载结束。

```html
<var-list
  :finished="finished"
  v-model:loading="loading"
  @load="load"
>
  <var-cell :key="item" v-for="item in list">
    列表项: {{ item }}
  </var-cell>
</var-list>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const loading = ref(false)
    const finished = ref(false)
    const list = reactive([])

    const load = () => {
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          list.push(list.length + 1)
        }

        loading.value = false

        if (list.length >= 60) {
          finished.value = true
        }
      }, 1000)
    }

    return {
      list,
      loading,
      finished,
      load
    }
  }
}
```

### 加载失败

您可以使用 `v-model:error` 手动设置错误状态，会展示错误提示，点击错误提示会帮您把 `error` 设置成 `false` 并再次触发 `load` 事件。

```html
<var-list
  v-model:error="error"
  v-model:loading="loading"
  @load="load"
>
  <var-cell :key="item" v-for="item in list">
    列表项: {{ item }}
  </var-cell>
</var-list>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const loading = ref(false)
    const error = ref(false)
    const list = reactive([])

    const load = () => {
      setTimeout(() => {
        if (list.length === 40) {
          error.value = true
          loading.value = false
          return
        }

        for (let i = 0; i < 20; i++) {
          list.push(list.length + 1)
        }

        loading.value = false
      }, 1000)
    }

    return {
      list,
      loading,
      error,
      load
    }
  }
}
```

### 提示文字

```html
<var-list
  loading-text="正在努力输出"
  finished-text="一滴都没有了"
  error-text="出错了出错了"
  :finished="finished"
  v-model:loading="loading"
  @load="load"
>
  <var-cell :key="item" v-for="item in list">
    列表项: {{ item }}
  </var-cell>
</var-list>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const loading = ref(false)
    const finished = ref(false)
    const list = reactive([])

    const load = () => {
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          list.push(list.length + 1)
        }

        loading.value = false

        if (list.length >= 60) {
          finished.value = true
        }
      }, 1000)
    }

    return {
      list,
      loading,
      finished,
      load
    }
  }
}
```

### 注意
我们是通过监听滚动容器的 `scroll` 事件检测是否触底并执行加载。
滚动容器是指最近的一个 `overflow-y` 为 `auto` 或者 `scroll` 的元素。
当您设置一个元素的 `overflow-x` 为除了 `visible` 以外的值时，浏览器为了维护一个 `bfc` 的结构会使您的 `overflow-y` 修正为 `auto`。
这时我们就会误认为这个元素也是一个滚动容器，注意规避。

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model:loading` | 加载状态 | _boolean_ | `false` |
| `v-model:error` | 错误状态 | _boolean_ | `false` |
| `immediate-check` | 是否在组件初始化时立刻检测位置 | _boolean_ | `true` |
| `finished` | 是否加载完毕 | _boolean_ | `false` |
| `offset` | 距离底部的触发距离 | _string \| number_ | `0` |
| `loading-text` | 加载状态文字 | _string_ | `加载中` |
| `finished-text` | 加载完毕文字 | _string_ | `没有更多了` |
| `error-text` | 加载失败文字 | _string_ | `加载失败` |

### 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| `check` | 触发位置检查, 触底触发 load 事件。 | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `load` | 触底时触发 | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 列表内容 | `-` |
| `loading` | 加载中内容 | `-` |
| `error` | 加载失败内容 | `-` |
| `finished` | 加载完毕内容 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--list-loading-height` | `50px` |
| `--list-finished-height` | `50px` |
| `--list-error-height` | `50px` |
| `--list-loading-color` | `#888` |
| `--list-finished-color` | `#888` |
| `--list-error-color` | `#888` |
| `--list-loading-font-size` | `var(--font-size-md)` |
| `--list-finished-font-size` | `var(--font-size-md)` |
| `--list-error-font-size` | `var(--font-size-md)` |
