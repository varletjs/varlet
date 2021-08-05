# IndexBar 索引栏

### 介绍

用于跳转到页面指定位置。

### 引入

```js
import { createApp } from 'vue'
import { IndexBar, IndexAnchor } from '@varlet/ui'

createApp().use(IndexBar).use(IndexAnchor)
```

### 基本使用

点击索引栏时，会自动跳转到对应的 `IndexAnchor` 锚点位置。

```html
<var-index-bar @change="change" duration="300">
  <div v-for="item in list" :key="item">
    <var-index-anchor 
      :index="item" 
      class="var-index-anchor__example"
    > 
      标题 {{ item }} 
    </var-index-anchor>
    <var-cell>{{ item }} 文本</var-cell>
    <var-cell>{{ item }} 文本</var-cell>
    <var-cell>{{ item }} 文本</var-cell>
  </div>
</var-index-bar>
```
```javascript
import { ref, onMounted } from 'vue'

  export default {
    setup() {
      const list = ref([])

      onMounted(() => {
        for (let i = 0; i < 26; i++) {
          list.value.push(String.fromCharCode(65 + i))
        }
      })

      const change = (value) => {
        console.log(value)
      }

      return {
        list,
        change
      }
    }
  }
```

## API

### 属性

### IndexBar 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `sticky` | 是否开启锚点吸顶 | _boolean_ | `true` |
| `sticky-offset-top` | 锚点吸顶时与顶部的距离 | _number_ | `0` |
| `hide-list` | 是否隐藏锚点列表 | _boolean_ | `false` |
| `z-index` | z-index 层级 | _number \| string_ | `1` |
| `highlight-color` | 索引字符高亮颜色 | _string_ | `#ee0a24` |
| `duration` | 动画持续时间 | _string \| number_ | `0` |

### IndexAnchor 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `index` | 索引字符 | _number \| string_ |`-` |

### 事件

### IndexBar 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `click` | 点击索引栏的字符时触发 | `index: number \| string` |
| `change` | 当前高亮的索引字符变化时触发| `index: number \| string` |

### 插槽

### IndexAnchor 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 自定义索引字符 |`-` |

### 方法
通过 ref 可以获取到 IndexBar 实例并调用实例方法

| 方法名 | 说明 | 参数 |
| ---- | ------- | -------- |
| `scrollTo` | 滚动到指定锚点	 | `index: number \| string` |

### 样式变量
以下为组件使用的css变量,可以使用[StyleProvider组件](#/zh-CN/style-provider)进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--index-bar-list-item-font-size` | `var(--font-size-xs)` |
| `--index-bar-list-item-color` | `var(--color-primary)` |
| `--index-bar-list-item-active-color` | `var(--color-danger)` |
| `--index-bar-list-item-height` | `14px` |
| `--index-bar-list-item-padding` | `0 10px` |
