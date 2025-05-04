# 验证码输入框

### 介绍

验证码输入框，用于通过一次性密码对用户进行认证。

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input-otp v-model="value">
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
  </var-input-otp>
</template>
```

### 只读状态

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input-otp v-model="value" readonly>
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
  </var-input-otp>
</template>
```

### 禁用状态

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input-otp v-model="value" disabled>
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
  </var-input-otp>
</template>
```

### 字段校验

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input-otp v-model="value" rules="[(v) => v.length === 4 || '必须输入4位验证码']">
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
  </var-input-otp>
</template>
```

### 变体外观

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input-otp v-model="value" variant="outlined">
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
  </var-input-otp>
</template>
```

### 小尺寸变体外观

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input-otp v-model="value" variant="outlined" size="small">
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
  </var-input-otp>
</template>
```

## API

### 属性

| 参数 | 说明                                                                       | 类型 | 默认值 |
| --- |--------------------------------------------------------------------------| --- | --- |
| `v-model` | 绑定的值                                                                     | _string\|number_ | `-` |
| `size` | 输入框尺寸，可选值 `normal` `small`                                                          | _string_ | `normal` |
| `variant` | 输入框风格, 可选值为 `standard` `outlined`                                      | _string_ | `standard` |
| `text-color` | 文字颜色                                                                     | _string_ | `-` |
| `focus-color` | 聚焦时的主要颜色                                                                 | _string_ | `-` |
| `blur-color` | 失焦时的主要颜色                                                                 | _string_ | `-` |
| `readonly` | 是否只读                                                                     | _boolean_ | `false` |
| `disabled` | 是否禁用                                                                     | _boolean_ | `false` |
| `autofocus` | 是否自动聚焦第一个输入框                                                                   | _boolean_ | `false` |
| `validate-trigger` | 触发验证的时机，可选值为 `onFocus` `onBlur` `onChange` `onClick` `onInput` | _ValidateTriggers[]_ | `['onInput']` |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示                                   | _Array<(v: string) => any>_ | `-` |

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
| `focus` | 聚焦时触发 | `index: number` |
| `blur` | 失焦时触发  | `index: number` |
| `click` | 点击时触发 | `index: number` |
| `input` | 输入时触发 | `value: string` |
| `change` | 更新时触发 | `value: string` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--var-otp-input-text-align` | `center` |
| `--var-otp-input-margin-right` | `8px` |
