# 复选框

### 引入

```js
import { createApp } from 'vue'
import { Checkbox, CheckboxGroup } from '@varlet/ui'

createApp().use(CheckboxGroup).use(Checkbox)
```

### 基本使用

```html
<var-checkbox v-model="value">当前的值: {{ value }}</var-checkbox>
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
<var-checkbox
  :unchecked-value="0"
  :checked-value="1"
  v-model="value"
>
  当前的值: {{ value }}
</var-checkbox>
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
<var-checkbox
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
</var-checkbox>
```

### 禁用

```html
<var-checkbox disabled v-model="value">当前的值: {{ value }}</var-checkbox>
```

### 只读

```html
<var-checkbox readonly v-model="value">当前的值: {{ value }}</var-checkbox>
```

### 复选框组/复选框操作

在复选框组中，必须给`checkbox`设置`checked-value`用来标识，
复选框组会收集所有选择的标识。

```html
<var-checkbox-group ref="group" v-model="value">
  <var-checkbox :checked-value="0">吃饭</var-checkbox>
  <var-checkbox :checked-value="1">睡觉</var-checkbox>
</var-checkbox-group>

<var-button class="button" type="primary" @click="$refs['group'].checkAll()">全选</var-button>
<var-button class="button" type="primary" @click="$refs['group'].inverseAll()">反选</var-button>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const value = ref([])

    return {
      value
    }
  }
}
```

### 复选框字段校验

```html
<var-checkbox
  v-model="value"
  :rules="[v => v || '请勾选']"
>
  当前的值: {{ value }}
</var-checkbox>
```

### 复选框组字段校验

```html
<var-checkbox-group
  v-model="value"
  :rules="[v => v.length === 2 || '请全选']"
>
  <var-checkbox :checked-value="0">吃饭</var-checkbox>
  <var-checkbox :checked-value="1">睡觉</var-checkbox>
</var-checkbox-group>
```


## API

### 属性

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `v-model` | 绑定的值 | _any[]_ | `[]` |
| `max` | 最大选择的数量 | _string \| number_ | `-` |
| `direction` | 布局方向，可选值为 `horizontal` `vertical` | _string \| number_ | `horizontal` |
| `rules` | 验证规则，返回`true`表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(value: any[]) => any>_ | `horizontal` |

### Checkbox Props

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

### CheckboxGroup Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |
| `reset` | 清空绑定的值(设置为`[]`)和校验信息 | `-` | `-` |
| `checkAll` | 全选 | `-` | `value: any` |
| `inverseAll` | 反选 | `-` | `value: any` |

### Checkbox Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |
| `reset` | 清空绑定的值(设置为`unchecked-value`)和校验信息 | `-` | `-` |
| `toggle` | 切换选中状态，传`checked-value`为选中，`unchecked-value`为取消选中，不传或其他情况为取反 | `value: any` | `-` |

### 事件

### CheckboxGroup Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `change` | 变更时触发 | `value: any[]` |

### Checkbox Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击时触发 | `e: Event` |
| `change` | 状态变更时触发 | `value: any` |

### 插槽

### CheckboxGroup Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 复选框组的内容 | `-` |

### Checkbox Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `checked-icon` | 选中图标 | `-` |
| `unchecked-icon` | 未选中图标 | `-` |
| `default` | 显示的文本 | `-` |

### 主题变量
#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

### Checkbox Variables

| 变量名 | 默认值 |
| --- | --- |
| `@checkbox-checked-color` | `@color-primary` |
| `@checkbox-unchecked-color` | `#555` |
| `@checkbox-disabled-color` | `#aaa` |
| `@checkbox-error-color` | `@color-danger` |
| `@checkbox-action-padding` | `6px` |
| `@checkbox-icon-size` | `24px` |