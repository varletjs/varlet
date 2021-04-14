# Switch 开关

### 介绍

开关选择器。

### 引入

```js
import { createApp } from 'vue'
import { Switch } from '@varlet/ui'

createApp().use(Switch)
```

### 基本使用

```html
<var-switch v-model="value" />
<var-switch v-model="value1" disabled />
<var-switch v-model="value1" readonly />
```

```javascript
import { ref } from 'vue'
export default {
  setup() {
    const value = ref(true)
    const value1 = ref(true)

    return {
      value,
      value1
    }
  }
}
```

### 自定义颜色

```html
<var-switch v-model="value" :ripple="false" />
<var-switch v-model="value" color="indigo" close-color="#89ddff" />
<var-switch v-model="value" color="orange" close-color="#2772f5" />
```

### 不同大小

```html
<var-switch v-model="value" size="15" />
<var-switch v-model="value" />
<var-switch v-model="value" size="25" />
```

### 加载状态

```html
<var-switch :model-value="true" loading />
<var-switch :model-value="true" size="25" loading />
<var-switch :model-value="true" size="25" loading loading-color="#000" />
```

### 值的校验

通过`rules`属性对值进行校验。

<span style="font-size: 12px">`rules`是一个可以接受 `function`、`boolean` 和 `string` 的数组。 函数传递输入值作为参数，必须返回 `true` / `false` 或包含错误消息的 `string` ， 如果函数返回 (或数组包含的任何值) `false`或`string`，输入字段将输入错误状态。</span>

```html
<var-cell>
  <div>是否打开开关</div>
  <template #extra>
    <var-switch v-model="value" :rules="[(v) => v === true || '错误！']"/>
  </template>
</var-cell>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `v-model` | 开关选中状态	| _boolean_ | - |
| `disabled` | 是否禁用| _boolean_ | `false` |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `loading` | 是否为加载状态 | _boolean_ | `false` |
| `ripple` | 是否启用水波纹 | _boolean_ | `true` |
| `color` | 打开状态下的颜色 | _string_ | `#2979ff` |
| `loading-color` | 加载图标的颜色 | _string_ | `#fff` |
| `close-color` | 关闭状态下的颜色 | _string_ | `#fff` |
| `size` | switch的大小 | _string \| number_ | `20` |
| `rules`| 校验规则 | _array_  | - |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `click` | 点击时触发 | `event: Event` |
| `change` | 开关状态切换时触发 | `value: boolean` |

### 主题变量
#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

| 变量名 | 默认值 |
| --- | --- |
| `@switch-track-background` | `#fff` |
| `@switch-track-active-background` | `@color-primary` |
| `@switch-track-error-background` | `@color-danger` |
| `@switch-ripple-color` | `@color-primary` |
| `@switch-handle-background` | `#fff` |
| `@switch-handle-color` | `#fff` |
| `@switch-handle-active-background` | `@color-primary` |
| `@switch-handle-error-background` | `@color-danger` |

