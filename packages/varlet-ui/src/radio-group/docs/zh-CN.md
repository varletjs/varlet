# 单选框

### 引入

```js
import { createApp } from 'vue'
import { Radio, RadioGroup } from '@varlet/ui'

createApp().use(RadioGroup).use(Radio)
```

### 基本使用

```html
<var-radio v-model="value">当前的值: {{ value }}</var-radio>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const value = ref(false)

    return {
      value
    }
  }
}
```

### 设置状态值

```html
<var-radio
  :unchecked-value="0"
  :checked-value="1"
  v-model="value"
>
  当前的值: {{ value }}
</var-radio>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const value = ref(0)

    return {
      value
    }
  }
}
```

### 修改图标和颜色

```html
<var-radio
  unchecked-color="#e99eb4"
  checked-color="#f44336"
  v-model="value"
>
  <template #unchecked-icon>
    <var-icon name="heart-half-full" size="24px"/>
  </template>
  <template #checked-icon>
    <var-icon name="heart" size="24px"/>
  </template>
  <template #default>
    当前的值: {{ value }}
  </template>
</var-radio>
```

### 禁用

```html
<var-radio disabled v-model="value">当前的值: {{ value }}</var-radio>
```

### 只读

```html
<var-radio readonly v-model="value">当前的值: {{ value }}</var-radio>
```

### 单选框组

在单选框组中，需要给`radio`设置`checked-value`用来标识，
单选框组会绑定选择的标识。

```html
<var-radio-group v-model="value">
  <var-radio :checked-value="0">吃饭</var-radio>
  <var-radio :checked-value="1">睡觉</var-radio>
</var-radio-group>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const value = ref(0)

    return {
      value
    }
  }
}
```

### 单选框字段校验

```html
<var-radio
  v-model="value"
  :rules="[v => v || '请勾选']"
>
  当前的值: {{ value }}
</var-radio>
```

### 单选框组字段校验

```html
<var-radio-group
  v-model="value"
  :rules="[v => v === 0 || '必须选择吃饭']"
>
  <var-radio :checked-value="0">吃饭</var-radio>
  <var-radio :checked-value="1">睡觉</var-radio>
</var-radio-group>
```


## API

### 属性

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `v-model` | 绑定的值 | _any_ | `-` |
| `direction` | 布局方向，可选值为 `horizontal` `vertical` | _string_ | `horizontal` |
| `rules` | 验证规则，返回`true`表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(value: any) => any>_ | `-` |

### Radio Props

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `v-model` | 绑定的值 | _any_ | `false` |
| `checked-value` | 选中状态的值 | _any_ | `true` |
| `unchecked-value` | 未选中状态的值 | _any_ | `false` |
| `checked-color` | 选中状态的颜色 | _any_ | `-` |
| `unchecked-color` | 未选中状态的颜色 | _any_ | `-` |
| `icon-size` | 图标尺寸 | _string \| number_ | `-` |
| `disabled` | 是否禁用 | _boolean_ | `false` |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `ripple` | 是否开启水波纹 | _boolean_ | `true` |
| `rules` | 验证规则，返回`true`表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(value: any) => any>_ | `-` |

### 方法

### RadioGroup Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |
| `reset` | 清空绑定的值(设置为`undefined`)和校验信息 | `-` | `-` |

### Radio Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |
| `reset` | 清空绑定的值(设置为`unchecked-value`)和校验信息 | `-` | `-` |
| `toggle` | 切换选中状态，传`checked-value`为选中，`unchecked-value`为取消选中，不传或其他情况为取反 | `value: any` | `-` |

### 事件

### RadioGroup Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `change` | 变更时触发 | `value: any` |

### Radio Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击时触发 | `e: Event` |
| `change` | 状态变更时触发 | `value: any` |

### 插槽

### RadioGroup Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 单选框组的内容 | `-` |

### Radio Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `checked-icon` | 选中图标 | `-` |
| `unchecked-icon` | 未选中图标 | `-` |
| `default` | 显示的文本 | `-` |

### 样式变量
以下为组件使用的css变量,可以使用[StyleProvider组件](#/zh-CN/style-provider)进行样式定制

### Radio Variables

| 变量名 | 默认值 |
| --- | --- |
| `--radio-checked-color` | `var(--color-primary)` |
| `--radio-unchecked-color` | `#555` |
| `--radio-disabled-color` | `#aaa` |
| `--radio-error-color` | `var(color-danger)` |
| `--radio-action-padding` | `6px` |
| `--radio-icon-size` | `24px` |