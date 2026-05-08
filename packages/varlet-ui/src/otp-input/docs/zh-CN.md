# 验证码输入框

### 介绍

用于输入短信验证码、邮箱验证码等多位短码，`v-model` 始终是完整字符串。

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-otp-input v-model="value" />
</template>
```

### 类型

通过 `type` 切换数字、字母和字母数字混合输入。

```html
<script setup>
import { ref } from 'vue'

const digitValue = ref('')
const textValue = ref('')
const mixedValue = ref('')
</script>

<template>
  <var-space direction="column" size="large">
    <var-otp-input v-model="digitValue" type="digit" />
    <var-otp-input v-model="textValue" type="text" />
    <var-otp-input v-model="mixedValue" type="alphanumeric" />
  </var-space>
</template>
```

### 不同风格

通过 `variant` 切换 `standard`、`outlined` 和 `filled` 三种风格。

```html
<template>
  <var-space direction="column" size="large">
    <var-otp-input variant="standard" />
    <var-otp-input variant="outlined" />
    <var-otp-input variant="filled" />
  </var-space>
</template>
```

### 只读与禁用

```html
<template>
  <var-space direction="column" size="large">
    <var-otp-input model-value="123456" readonly />
    <var-otp-input model-value="123456" disabled />
  </var-space>
</template>
```

### 分隔位插槽

使用 `separator` 插槽自定义分隔展示内容。

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-otp-input v-model="value" type="alphanumeric">
    <template #separator="{ index }">
      <span v-if="index === 2">-</span>
    </template>
  </var-otp-input>
</template>
```

### 掩码显示

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-otp-input v-model="value" mask />
</template>
```

### 粘贴场景

可以直接粘贴完整验证码，超出长度的内容会自动截断。

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-otp-input v-model="value" />
</template>
```

### 粘贴转换

通过 `paste-transform` 可以对粘贴内容做预处理。

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-otp-input
    v-model="value"
    type="alphanumeric"
    :paste-transform="(value) => value.replace(/[-\\s]/g, '').toUpperCase()"
  />
</template>
```

### 完成事件

```html
<script setup>
import { Snackbar } from '@varlet/ui'
import { ref } from 'vue'

const value = ref('')

function handleComplete(value) {
  Snackbar.success(`输入完成：${value}`)
}
</script>

<template>
  <var-otp-input v-model="value" @complete="handleComplete" />
</template>
```

### 字段校验

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const value = ref('')
</script>

<template>
  <var-otp-input
    v-model="value"
    variant="filled"
    :rules="z.string().length(6, '验证码长度必须为 6')"
  />
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 验证码值 | _string_ | `''` |
| `length` | 验证码位数 | _string \| number_ | `6` |
| `type` | 验证码类型，可选值为 `digit` `text` `alphanumeric` | _OtpInputType_ | `digit` |
| `variant` | 风格，可选值为 `standard` `outlined` `filled` | _Variant_ | `outlined` |
| `mask` | 是否掩码显示 | _boolean_ | `false` |
| `mask-symbol` | 掩码字符 | _string_ | `•` |
| `cell-height` | 单格高度 | _string \| number_ | `48` |
| `cell-max-width` | 单格最大宽度 | _string \| number_ | `48` |
| `text-color` | 文字颜色 | _string_ | `-` |
| `focus-color` | 聚焦时主要颜色 | _string_ | `-` |
| `blur-color` | 失焦时主要颜色 | _string_ | `-` |
| `disabled` | 是否禁用 | _boolean_ | `false` |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `autofocus` | 初始化后是否自动聚焦 | _boolean_ | `false` |
| `gutter` | 格子间距 | _string \| number_ | `8` |
| `validate-trigger` | 触发校验的时机，可选值为 `onInput` `onClick` `onPaste` `onComplete` | _OtpInputValidateTrigger[]_ | `['onInput', 'onComplete']` |
| `rules` | 验证规则，返回 `true` 表示验证通过，其它类型的值将转换为文本作为用户提示，支持 Zod 验证 | _((v: string) => any) \| ZodType \| Array<((v: string) => any) \| ZodType>_ | `-` |
| `allow-paste` | 是否允许粘贴整串验证码 | _boolean_ | `true` |
| `paste-transform` | 粘贴内容转换器 | _(value: string) => string_ | `-` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `focus` | 聚焦到首个空位，或指定位置 | `index?: number` | `-` |
| `blur` | 使所有输入格失焦 | `-` | `-` |
| `reset` | 清空绑定的值和校验信息 | `-` | `-` |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `input` | 验证码值变化时触发 | `value: string` |
| `click` | 点击组件根节点时触发 | `event: Event` |
| `paste` | 粘贴时触发 | `value: string`, `event: ClipboardEvent` |
| `complete` | 输入满 `length` 时触发 | `value: string` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `separator` | 自定义分隔位内容 | `index: number` |

### 样式变量

以下为组件使用的 CSS 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--otp-input-gutter` | `8px` |
| `--otp-input-cell-height` | `48px` |
| `--otp-input-cell-max-width` | `48px` |
| `--otp-input-input-font-size` | `20px` |
| `--otp-input-separator-color` | `var(--color-text-disabled)` |
