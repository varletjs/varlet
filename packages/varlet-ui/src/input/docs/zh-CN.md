# 输入框

### 引入

```js
import { createApp } from 'vue'
import { Input } from '@varlet/ui'

createApp().use(Input)
```

### 基本使用

输入框的行为和基本原生一致，用户输入时始终获得一个符合 `type` 规则的字符串

```js
import { ref } from 'vue'

export default {
  setup() {
    const value = ref('')

    return { value }
  }
}
```

```html
<var-input placeholder="请输入文本" v-model="value" />
```

### 朴素模式

如果只需要组件的基本功能，可以通过属性去除部分样式。

```html
<var-input
  :hint="false"
  :line="false"
  placeholder="请输入文本"
  v-model="value"
/>
```

### 文本域

```html
<var-input placeholder="请输入文本" textarea v-model="value" />
```

### 最大长度

```html
<var-input placeholder="请输入文本" :maxlength="10" v-model="value" />
```

### 禁用

```html
<var-input placeholder="请输入文本" disabled v-model="value" />
```

### 只读

```html
<var-input placeholder="请输入文本" readonly v-model="value" />
```

### 可清除

```html
<var-input placeholder="请输入文本" clearable v-model="value" />
```

### 显示图标
```js
import { createApp } from 'vue'
import { Icon } from '@varlet/ui'

createApp().use(Icon)
```

```html
<var-input placeholder="请输入文本" v-model="value">
  <template #prepend-icon>
    <var-icon name="plus"/>
  </template>
  <template #append-icon>
    <var-icon name="minus"/>
  </template>
</var-input>
```

### 字段校验

通过传入一个校验器数组可以对值进行校验，校验器返回 `true` 则为校验通过。
以外的值将转换为文本作为用户提示。

```html
<var-input
  placeholder="请输入文本"
  :rules="[v => v.length > 6 || '文本长度必须大于6']"
  v-model="value"
/>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _string_ | `-` |
| `placeholder` | 占位符 | _string_ | `-` |
| `type` | 输入框类型, 可选值为 `text` `password` `number` | _string_ | `text` |
| `maxlength` | 最大长度 | _string \| number_ | `-` |
| `textarea` | 是否是文本域 | _boolean_ | `false` |
| `rows` | 文本域的显示行数 | _string \| number_ | `8` |
| `line` | 是否显示分割线 | _boolean_ | `true` |
| `hint` | 是否使用占位符作为提示 | _boolean_ | `true` |
| `text-color` | 文字颜色 | _string_ | `-` |
| `focus-color` | 聚焦时的主要颜色 | _string_ | `-` |
| `blur-color` | 失焦时的主要颜色 | _string_ | `-` |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `disabled` | 是否禁用 | _boolean_ | `false` |
| `clearable` | 是否可清除 | _boolean_ | `false` |
| `resize` | 文本域是否可以拖动调整尺寸 | _boolean_ | `false` |
| `validate-trigger` | 触发验证的时机，可选值为 `onFocus` `onBlur` `onChange` `onClick` `onClear` `onInput` | _ValidateTriggers[]_ | `['onInput', 'onClear']` |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(v: string) => any>_ | `-` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `focus` | 聚焦 | `-` | `-` |
| `blur` | 失焦 | `-` | `-` |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |
| `reset` | 清空绑定的值和校验信息 | `-` | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `focus` | 聚焦时触发 | `event: Event` |
| `blur` | 失焦时触发 | `event: Event` |
| `click` | 点击时触发 | `event: Event` |
| `clear` | 清除时触发 | `value: string` |
| `input` | 输入时触发 | `value: string`, `event: Event` |
| `change` | 更新时触发 | `value: string`, `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `prepend-icon` | 前置图标 | `-` |
| `append-icon` | 后置图标 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider)进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--input-input-text-color` | `#555` |
| `--input-error-color` | `var(--color-danger)` |
| `--input-blur-color` | `#888` |
| `--input-focus-color` | `var(--color-primary)` |
| `--input-placeholder-size` | `16px` |
| `--input-textarea-height` | `auto` |
| `--input-textarea-padding-top` | `8px` |
| `--input-icon-padding` | `16px 0 0` |
| `--input-icon-size` | `20px` |
| `--input-input-text-color` | `#555` |
| `--input-line-size` | `1px` |
| `--input-line-spread-size` | `2px` |
| `--input-disabled-color` | `var(--color-text-disabled)` |