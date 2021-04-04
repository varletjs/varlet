# Collapse 折叠面板

### 介绍

可以折叠/展开的内容区域。

### 引入

```js
import { Collapse, CollapseItem } from '@varlet/ui'

createApp().use(Collapse).use(CollapseItem)
```

### 基本使用

通过 `v-model` 控制展开的面板列表，`value` 为数组格式。

```html
<var-collapse v-model="value" @change="changeHandle">
  <var-collapse-item title="标题" name="1">内容</var-collapse-item>
  <var-collapse-item title="标题" name="2">内容</var-collapse-item>
</var-collapse>
```
```javascript
export default {
  setup() {
    const value = ref(['1'])

    const changeHandle = (val) => {
      console.log(val)
    }
    
    return {
      value,
      changeHandle
    }
  }
}
```

### 隐藏边距

使用 `offset` 属性隐藏边距。

```html
<var-collapse v-model="value" :offset="false">
  <var-collapse-item title="标题" name="1">内容</var-collapse-item>
  <var-collapse-item title="标题" name="2">内容</var-collapse-item>
</var-collapse>
```

### 手风琴模式

使用 `accordion` 属性开启手风琴模式，此时`value`为字符串。

```html
<var-collapse v-model="value" accordion :offset="false">
  <var-collapse-item title="标题" name="1">内容</var-collapse-item>
  <var-collapse-item title="标题" name="2">内容</var-collapse-item>
</var-collapse>
```
```javascript
export default {
  setup() {
    const value = ref('')
    
    return {
      value,
    }
  }
}
```

### 禁用

在 `collapse-item` 上使用 `disabled` 属性禁用当前面板。

```html
<var-button @click="disabled = !disabled" style="margin-bottom: 8px">
  {{ disabled ? '启用' : '禁用' }}
</var-button>
<var-collapse v-model="value">
  <var-collapse-item title="标题" :name="1" :disabled="disabled">
    内容
  </var-collapse-item>
  <var-collapse-item title="标题" :name="2">内容</var-collapse-item>
</var-collapse>
```
```javascript
export default {
  setup() {
    const value = ref([1])
    const disabled = ref(false)

    return {
      value,
      disabled
    }
  }
}
```

### 自定义内容

```html
<var-collapse v-model="value">
  <var-collapse-item title="这是标题" name="1" icon="account-circle">
    这是内容
  </var-collapse-item>
  <var-collapse-item name="2">
    <template #title>这是标题</template>
    <template #icon>^_^</template>
    这是内容
  </var-collapse-item>
</var-collapse>
```

## API

### 属性

### Collapse 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `model-value / v-model` | 当前展开面板的 name | 手风琴模式： _number_ \| _string_ <br> 非手风琴模式：_number[]_ \| _string[]_ | - |
| `accordion` | 是否开启手风琴模式 | _boolean_ | `false` |
| `offset` | 是否显示边距 | _boolean_ | `true` |

### CollapseItem 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `name` | 唯一标识符，默认为索引值 | _number_ \| _string_ | `index` |
| `title` | 面板标题 | _number_ \| _string_ | - |
| `icon` | icon的名称 | _string_ | `chevron-down` |
| `disabled` | 是否禁用面板 | _boolean_ | `false` |

### 事件

### Collapse 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `change` | 切换面板时触发| `value: 类型与 v-model 绑定的值一致` |

### 插槽

### CollapseItem 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | 面板的内容 | - |
| `title` | 面板的标题 | - |
| `icon` | 自定义右侧icon | - |

### 主题变量
#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

| 变量名 | 默认值 |
| --- | --- |
| `@collapse-background` | `#fff` |
| `@collapse-color` | `#232222` |
| `@collapse-header-font-size` | `@font-size-lg` |
| `@collapse-header-padding` | `10px 16px` |
| `@collapse-content-font-size` | `@font-size-md` |
| `@collapse-content-font-size` | `14px` |
| `@collapse-item-margin-top` | `16px` |
| `@collapse-disable-color` | `#bdbdbd` |
