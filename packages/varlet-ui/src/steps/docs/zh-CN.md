# Steps 步骤条

### 介绍

引导用户按照流程完成任务的导航条。

### 引入

```js
import { Steps, Step } from '@varlet/ui'

createApp().use(Steps).use(Step)
```

### 基本使用

通过 `active` 属性控制当前步骤条的进度，值为当前 `step` 的索引，从 `0` 起计。

```html
<var-steps :active="active">
  <var-step>步骤1</var-step>
  <var-step>步骤2</var-step>
  <var-step>步骤3</var-step>
  <var-step>步骤4</var-step>
</var-steps>
<var-button type="primary" @click="next">下一步</var-button>
```

```javascript
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(0)

    const next = () => {
      active.value = active.value === 4 ? 0 : active.value + 1
    }
    
    return {
      value,
      next
    }
  }
}
```

### 自定义样式

点击 `step` 会触发`click-step` 事件。

```html
 <var-steps 
  :active="active"  
  active-color="purple" 
  inactive-color="#afcf7f"
  @click-step="click"
>
  <var-step 
    active-icon="fire" 
    current-icon="heart" 
    inactive-icon="delete"
  >
    步骤1
  </var-step>
  <var-step 
    active-icon="fire" 
    current-icon="heart" 
    inactive-icon="delete"
  >
    步骤2
  </var-step>
  <var-step 
    active-icon="fire" 
    current-icon="heart" 
    inactive-icon="delete"
  >
    步骤3
  </var-step>
  <var-step 
    active-icon="fire" 
    current-icon="heart" 
    inactive-icon="delete"
  >
    步骤4
  </var-step>
</var-steps>
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(0)

    const click = (index) => {
      active.value = index
    }
    
    return {
      value,
      click
    }
  }
}
```

### 动态步骤

步骤条可以动态地添加或移除他们的步骤。

```html
<var-select placeholder="改变step的数量" v-model="count">
  <var-option v-for="item in list" :key="item" :label="item" :value="item" />
</var-select>
<var-steps>
  <var-step v-for="i in count" :key="i">步骤{{ i }}</var-step>
</var-steps>
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const list = ref([2, 3, 4, 5])
    const count = ref(2)
    
    return {
      list,
      count
    }
  }
}
```

### 垂直模式

使用 `direction` 属性改变步骤条的显示方向。

```html
<var-steps direction="vertical" :active="5">
  <var-step active-icon="notebook">
    <h3 style="margin: 0">2021-02-13</h3>
    <span>接下来...</span>
  </var-step>
  <var-step active-icon="notebook">
    <h3 style="margin: 0">2021-02-14</h3>
    <span>接下来...</span>
  </var-step>
  <var-step active-icon="notebook">
    <h3 style="margin: 0">2021-02-15</h3>
    <span>接下来...</span>
  </var-step>
  <var-step active-icon="notebook">
    <h3 style="margin: 0">2021-02-16</h3>
    <span>接下来...</span>
  </var-step>
</var-steps>
```

## API

### 属性

### Steps 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `active` | 当前步骤 | _number_ \| _string_ | `0` |
| `direction` | 显示方向，可选值为 `vertical` | _string_ | `horizontal` |
| `active-color` | 激活状态颜色 | _string_ | `#2979ff` |
| `inactive-color` | 未激活状态颜色 | _string_ | `#9e9e9e` |

### Step 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `active-icon` | 激活状态图标  | _string_ | `check` |
| `current-icon` | 当前步骤时的图标 | _string_ | - |
| `inactive-icon` | 未激活状态图标 | _string_ | - |

### 事件

### Steps 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `click-step` | 点击步骤的标题或图标时触发| `index: number` |

### 插槽

### Step 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | step的内容 | - |

### 主题变量
#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

| 变量名 | 默认值 |
| --- | --- |
| `@step-tag-size` | `20px` |
| `@step-tag-background` | `#9e9e9e` |
| `@step-tag-font-size` | `@font-size-md` |
| `@step-tag-color` | `#fff` |
| `@step-tag-active-color` | `@color-primary` |
| `@step-tag-margin` | `4px 0` |
| `@step-tag-icon-size` | `@font-size-lg` |
| `@step-content-font-size` | `@font-size-md` |
| `@step-content-color` | `rgba(0, 0, 0, 0.38)` |
| `@step-content-active-color` | `#000` |
| `@step-line-background` | `#000` |
| `@step-vertical-min-height` | `30px` |
| `@step-vertical-tag-margin` | `0 4px` |
| `@step-vertical-line-height` | `calc(100% - 30px)` |
| `@step-vertical-line-min-height` | `20px` |
