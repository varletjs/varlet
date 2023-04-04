# 输入框

### 基本使用

输入框的行为和基本原生一致，用户输入时始终获得一个符合 `type` 规则的字符串，可选择 `standard` 和 `outlined` 两种风格，默认为 `standard`。

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input placeholder="请输入文本" v-model="value" />
  <var-input placeholder="请输入文本" v-model="value" variant="outlined" />
</template>
```

### 小尺寸

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input size="small" placeholder="请输入文本" v-model="value" />
  <var-input size="small" placeholder="请输入文本" v-model="value" variant="outlined" />
</template>
```

### 朴素模式

如果只需要组件的基本功能，可以通过属性去除部分样式。

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input
    :hint="false"
    :line="false"
    placeholder="请输入文本"
    v-model="value"
  />
</template>
```

### 文本域

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input placeholder="请输入文本" textarea v-model="value" />
  <var-input placeholder="请输入文本" textarea v-model="value" variant="outlined" />
</template>
```

### 最大长度

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input placeholder="请输入文本" :maxlength="10" v-model="value" />
  <var-input placeholder="请输入文本" :maxlength="10" v-model="value" variant="outlined" />
</template>
```

### 禁用

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input placeholder="请输入文本" disabled v-model="value" />
  <var-input placeholder="请输入文本" disabled v-model="value" variant="outlined" />
</template>
```

### 只读

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input placeholder="请输入文本" readonly v-model="value" />
  <var-input placeholder="请输入文本" readonly v-model="value" variant="outlined" />
</template>
```

### 可清除

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input placeholder="请输入文本" clearable v-model="value" />
  <var-input placeholder="请输入文本" clearable v-model="value" variant="outlined" />
</template>
```

### 显示图标

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input placeholder="请输入文本" v-model="value">
    <template #prepend-icon>
      <var-icon name="plus"/>
    </template>
    <template #append-icon>
      <var-icon name="minus"/>
    </template>
  </var-input>
  <var-input placeholder="请输入文本" v-model="value" variant="outlined">
    <template #prepend-icon>
      <var-icon name="plus"/>
    </template>
    <template #append-icon>
      <var-icon name="minus"/>
    </template>
  </var-input>
</template>
```

### 字段校验

通过传入一个校验器数组可以对值进行校验，校验器返回 `true` 则为校验通过。
以外的值将转换为文本作为用户提示。

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-input
    placeholder="请输入文本"
    :rules="[v => v.length > 6 || '文本长度必须大于6']"
    v-model="value"
  />
  <var-input
    placeholder="请输入文本"
    :rules="[v => v.length > 6 || '文本长度必须大于6']"
    v-model="value"
    variant="outlined"
  />
</template>
```

## API

### 属性

| 参数 | 说明                                                                       | 类型 | 默认值 |
| --- |--------------------------------------------------------------------------| --- | --- |
| `v-model` | 绑定的值                                                                     | _string_ | `-` |
| `placeholder` | 占位符                                                                      | _string_ | `-` |
| `type` | 输入框类型, 可选值为 `text` `password` `number` `tel`                             | _string_ | `text` |
| `size` | 输入框尺寸，可选值 `small`                                                          | _string_ | `-` |
| `variant` | 输入框风格, 可选值为 `standard` `outlined`                                      | _string_ | `standard` |
| `maxlength` | 最大长度                                                                     | _string \| number_ | `-` |
| `textarea` | 是否是文本域                                                                   | _boolean_ | `false` |
| `rows` | 文本域的显示行数                                                                 | _string \| number_ | `8` |
| `line` | 是否显示分割线                                                                  | _boolean_ | `true` |
| `hint` | 是否使用占位符作为提示                                                              | _boolean_ | `true` |
| `text-color` | 文字颜色                                                                     | _string_ | `-` |
| `focus-color` | 聚焦时的主要颜色                                                                 | _string_ | `-` |
| `blur-color` | 失焦时的主要颜色                                                                 | _string_ | `-` |
| `readonly` | 是否只读                                                                     | _boolean_ | `false` |
| `disabled` | 是否禁用                                                                     | _boolean_ | `false` |
| `clearable` | 是否可清除                                                                    | _boolean_ | `false` |
| `resize` | 文本域是否可以拖动调整尺寸                                                            | _boolean_ | `false` |
| `autofocus` | 是否自动聚焦                                                                   | _boolean_ | `false` |
| `validate-trigger` | 触发验证的时机，可选值为 `onFocus` `onBlur` `onChange` `onClick` `onClear` `onInput` | _ValidateTriggers[]_ | `['onInput', 'onClear']` |
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
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--input-decorator-text-color` | `#555` |
| `--input-decorator-error-color` | `var(--color-danger)` |
| `--input-decorator-blur-color` | `#888` |
| `--input-decorator-focus-color` | `var(--color-primary)` |
| `--input-decorator-placeholder-size` | `16px` |
| `--input-decorator-icon-size` | `20px` |
| `--input-decorator-line-size` | `1px` |
| `--input-decorator-line-focus-size` | `2px` |
| `--input-decorator-disabled-color` | `var(--color-text-disabled)` |
| `--input-decorator-normal-standard-padding-top` | `20px` |
| `--input-decorator-normal-standard-padding-bottom` | `4px` |
| `--input-decorator-normal-standard-icon-padding` | `20px 0 4px` |
| `--input-decorator-normal-outlined-padding-top` | `16px` |
| `--input-decorator-normal-outlined-padding-bottom` | `16px` |
| `--input-decorator-normal-outlined-padding-left` | `16px` |
| `--input-decorator-normal-outlined-padding-right` | `16px` |
| `--input-decorator-normal-outlined-placeholder-space` | `4px` |
| `--input-decorator-normal-outlined-icon-padding` | `16px 0 16px` |
| `--input-decorator-small-standard-padding-top` | `16px` |
| `--input-decorator-small-standard-padding-bottom` | `4px` |
| `--input-decorator-small-standard-icon-padding` | `16px 0 4px` |
| `--input-decorator-small-outlined-padding-top` | `8px` |
| `--input-decorator-small-outlined-padding-bottom` | `8px` |
| `--input-decorator-small-outlined-padding-left` | `12px` |
| `--input-decorator-small-outlined-padding-right` | `12px` |
| `--input-decorator-small-outlined-placeholder-space` | `2px` |
| `--input-decorator-mini-outlined-icon-padding` | `8px 0 8px` |
| `--input-input-height` | `24px` |
| `--input-textarea-height` | `auto` |
