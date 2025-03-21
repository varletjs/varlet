# 单选框

### 介绍

在一组备选项中进行单选。

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-radio v-model="value">当前的值: {{ value }}</var-radio>
</template>
```

### 设置状态值

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-radio
    :unchecked-value="0"
    :checked-value="1"
    v-model="value"
  >
    当前的值: {{ value }}
  </var-radio>
</template>
```

### 修改图标和颜色

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-radio
    unchecked-color="var(--color-warning)" 
    checked-color="var(--color-danger)"
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
</template>
```

### 禁用

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-radio disabled v-model="value">当前的值: {{ value }}</var-radio>
</template>
```

### 只读

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-radio readonly v-model="value">当前的值: {{ value }}</var-radio>
</template>
```

### 单选框组

在单选框组中，需要给 `radio` 设置 `checked-value` 用来标识，
单选框组会绑定选择的标识。

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-radio-group v-model="value">
    <var-radio :checked-value="0">吃饭</var-radio>
    <var-radio :checked-value="1">睡觉</var-radio>
  </var-radio-group>
</template>
```

### 选项式 API

通过 `options` 属性设置子元素。

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
const options = ref([
  { label: '吃饭', value: 0 },
  { label: '睡觉', value: 1 },
  { label: '游戏', value: 2, disabled: true },
])
</script>

<template>
  <var-radio-group v-model="value" :options="options" />
  <div>当前的值: {{ value }}</div>
</template>
```

### 自定义字段

通过 `label-key` 和 `value-key` 属性自定义 `options` 中数据的格式。

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
const options = ref([
  { name: '吃饭', id: 0 },
  { name: '睡觉', id: 1 },
  { name: '游戏', id: 2 },
])
</script>

<template>
  <var-radio-group v-model="value" :options="options" label-key="name" value-key="id" />
  <div>当前的值: {{ value }}</div>
</template>
```

### 垂直布局

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-radio-group v-model="value" direction="vertical">
    <var-radio :checked-value="0">吃饭</var-radio>
    <var-radio :checked-value="1">睡觉</var-radio>
  </var-radio-group>
</template>
```

### 单选框字段校验

```html
<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-radio
    v-model="value"
    :rules="[v => v || '请勾选']"
  >
    当前的值: {{ value }}
  </var-radio>
</template>
```

### 使用 Zod 对单选框字段校验

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const value = ref(false)
</script>

<template>
  <var-radio
    v-model="value"
    :rules="z.boolean().refine((v) => v, '请勾选')"
  >
    当前的值: {{ value }}
  </var-radio>
</template>
```

### 单选框组字段校验

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-radio-group
    v-model="value"
    :rules="v => v === 0 || '必须选择吃饭'"
  >
    <var-radio :checked-value="0">吃饭</var-radio>
    <var-radio :checked-value="1">睡觉</var-radio>
  </var-radio-group>
</template>
```

### 使用 Zod 对单选框组字段校验

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const value = ref(false)
</script>

<template>
  <var-radio-group
    v-model="value"
    :rules="z.number().refine((v => v === 0, '必须选择吃饭'))"
  >
    <var-radio :checked-value="0">吃饭</var-radio>
    <var-radio :checked-value="1">睡觉</var-radio>
  </var-radio-group>
</template>
```

## API

### 属性

#### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _any_ | `-` |
| `direction` | 布局方向，可选值为 `horizontal` `vertical` | _string_ | `horizontal` |
| `options` ***3.2.14*** | 指定可选项 | _RadioGroupOption[]_ | `[]` |
| `label-key` ***3.2.14*** | 作为 label 唯一标识的键名 | _string_ | `label` |
| `value-key` ***3.2.14*** | 作为 value 唯一标识的键名 | _string_ | `value` |
| `rules` | 验证规则，返回 `true` 表示验证通过，其它类型的值将转换为文本作为用户提示。自 `3.5.0` 开始支持 [Zod 验证](#/zh-CN/zodValidation)  | _((v: any) => any) \| ZodType \| Array<((v: any) => any) \| ZodType>_ | `-` |
| `aria-label` ***3.8.5*** | 单选框组的标签 | _string_ | `-` |

#### RadioGroupOption

| 参数 | 说明 | 类型             | 默认值       |
| ------- | --- |----------------|-----------|
| `label`    |    选项的标签    | _string \| VNode \| (option: RadioGroupOption, checked: boolean) => VNodeChild_      | `-`   |
| `value`  |    选项的值    | _any_      | `-`   |
| `disabled`    |    是否禁用   | _boolean_      | `-`   |

#### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _any_ | `false` |
| `checked-value` | 选中状态的值 | _any_ | `true` |
| `unchecked-value` | 未选中状态的值 | _any_ | `false` |
| `checked-color` | 选中状态的颜色 | _string_ | `-` |
| `unchecked-color` | 未选中状态的颜色 | _string_ | `-` |
| `icon-size` | 图标尺寸 | _string \| number_ | `-` |
| `disabled` | 是否禁用 | _boolean_ | `false` |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `ripple` | 是否开启水波纹 | _boolean_ | `true` |
| `rules` | 验证规则，返回 `true` 表示验证通过，其它类型的值将转换为文本作为用户提示。自 `3.5.0` 开始支持 [Zod 验证](#/zh-CN/zodValidation)  | _(v: string) => any \| ZodType \| Array<(v: string) => any \| ZodType>_ | `-` |

### 方法

#### RadioGroup Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |
| `reset` | 清空绑定的值(设置为 `undefined`)和校验信息 | `-` | `-` |

#### Radio Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |
| `reset` | 清空绑定的值(设置为 `unchecked-value`)和校验信息 | `-` | `-` |
| `toggle` | 切换选中状态，传 `checked-value` 为选中，`unchecked-value` 为取消选中，不传或其他情况为取反 | `value: any` | `-` |

### 事件

#### RadioGroup Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `change` | 变更时触发 | `value: any` |

#### Radio Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击时触发 | `e: Event` |
| `change` | 状态变更时触发 | `value: any` |

### 插槽

#### RadioGroup Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 单选框组的内容 | `-` |

#### Radio Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `checked-icon` | 选中图标 | `-` |
| `unchecked-icon` | 未选中图标 | `-` |
| `default` | 显示的文本 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

#### Radio Variables

| 变量名 | 默认值 |
| --- | --- |
| `--radio-checked-color` | `var(--color-primary)` |
| `--radio-unchecked-color` | `#555` |
| `--radio-disabled-color` | `var(--color-text-disabled)` |
| `--radio-error-color` | `var(color-danger)` |
| `--radio-action-padding` | `6px` |
| `--radio-icon-size` | `24px` |
| `--radio-text-color` | `#555` |
