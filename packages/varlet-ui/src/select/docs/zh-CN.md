# 选择框

### 介绍

通过下拉菜单展示并选择内容

### 基本使用

组件会使用 option 的 `label` 作为显示的文本。
组件会优先使用 option 的 `value` 作为选项的值，其次使用 `label`。

```html
<script setup>
import { reactive, ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select placeholder="请选择一个选项" v-model="value">
    <var-option label="吃饭" />
    <var-option label="睡觉" />
  </var-select>
</template>
```

### 朴素模式

如果只需要组件的基本功能，可以通过属性去除部分样式。

```html
<script setup>
import { reactive, ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select
    :hint="false"
    :line="false"
    placeholder="请选择一个选项"
    v-model="value"
  >
    <var-option label="吃饭" />
    <var-option label="睡觉" />
  </var-select>
</template>
```

### 文本关联值

```html
<script setup>
import { reactive, ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select placeholder="请选择一个选项" v-model="value">
    <var-option label="吃饭" :value="1" />
    <var-option label="睡觉" :value="2" />
  </var-select>
</template>
```

### 禁用

```html
<script setup>
import { reactive, ref } from 'vue'

const value = ref('')
</script>

<template>
   <var-select
    placeholder="请选择一个选项"
    disabled
    v-model="value"
  >
    <var-option label="吃饭" />
    <var-option label="睡觉" />
  </var-select>
</template>
```

### 只读

```html
<script setup>
import { reactive, ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select
    placeholder="请选择一个选项"
    readonly
    v-model="value"
  >
    <var-option label="吃饭" />
    <var-option label="睡觉" />
  </var-select>
</template>
```

### 可清除

```html
<script setup>
import { reactive, ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select
    placeholder="请选择一个选项"
    clearable
    v-model="value"
  >
    <var-option label="吃饭" />
    <var-option label="睡觉" />
  </var-select>
</template>
```

### 显示图标

```html
<script setup>
import { reactive, ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select placeholder="请选择一个选项" v-model="value">
    <template #prepend-icon>
      <var-icon name="plus"/>
    </template>
     <template #append-icon>
      <var-icon name="minus"/>
    </template>
    <template #default>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </template>
  </var-select>
</template>
```

### 多选

```html
<script setup>
import { reactive, ref } from 'vue'

const value = ref([])
</script>

<template>
  <var-select
    placeholder="请选择多个选项"
    multiple
    v-model="value"
  >
    <var-option label="吃饭" />
    <var-option label="睡觉" />
    <var-option label="打游戏" />
    <var-option label="写代码" />
  </var-select>
</template>
```

### 纸片风格的多选

```html
<script setup>
import { reactive, ref } from 'vue'

const value = ref([])
</script>

<template>
  <var-select
    placeholder="请选择多个选项"
    chip
    multiple
    v-model="value"
  >
    <var-option label="吃饭" />
    <var-option label="睡觉" />
    <var-option label="打游戏" />
    <var-option label="写代码" />
  </var-select>
</template>
```

### 单选值校验
```html
<script setup>
import { reactive, ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select
    placeholder="请选择一个选项"
    :rules="[(v) => v === '摸鱼' || '您一定得选择摸鱼']"
    v-model="value"
  >
    <var-option label="吃饭" />
    <var-option label="睡觉" />
    <var-option label="摸鱼" />
  </var-select>
</template>
```

### 多选值校验
```html
<script setup>
import { reactive, ref } from 'vue'

const value = ref([])
</script>

<template>
  <var-select
    placeholder="请选择多个选项"
    multiple
    :rules="[(v) => v.length >= 2 || '您至少选择两个选项']"
    v-model="value"
  >
    <var-option label="吃饭" />
    <var-option label="睡觉" />
    <var-option label="打游戏" />
    <var-option label="写代码" />
  </var-select>
</template>
```

### 垂直偏移
```html
<script setup>
import { reactive, ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select placeholder="请选择" :offset-y="-136" v-model="value">
    <var-option label="火猫" />
    <var-option label="蓝猫" />
    <var-option label="紫猫" />
    <var-option label="土猫" />
  </var-select>
</template>
```

## API

### 属性

#### Select Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _any \| any[]_ | `-` |
| `placeholder` | 占位符 | _string_ | `-` |
| `multiple` | 是否开启多选 | _boolean_ | `false` |
| `offset-y` | 下拉菜单的垂直偏移量 | _string \| number_ | `true` |
| `chip` | 是否使用纸片风格(仅限多选) | _boolean_ | `false` |
| `line` | 是否显示分割线 | _boolean_ | `true` |
| `hint` | 是否使用占位符作为提示 | _boolean_ | `true` |
| `text-color` | 文字颜色 | _string_ | `-` |
| `focus-color` | 聚焦时的主要颜色 | _string_ | `-` |
| `blur-color` | 失焦时的主要颜色 | _string_ | `-` |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `disabled` | 是否禁用 | _boolean_ | `false` |
| `clearable` | 是否可清除 | _boolean_ | `false` |
| `validate-trigger` | 触发验证的时机，可选值为 `onFocus` `onBlur` `onChange` `onClick` `onClear` `onClose` | _ValidateTriggers[]_ | `['onChange', 'onClear', 'onClose']` |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(v: any \| any[]) => any>_ | `-` |

#### Option Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label` | 选项显示的文本 | _any_ | `-` |
| `value` | 选项绑定的值 | _any_ | `-` |

### 方法

#### Select Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `focus` | 聚焦 | `-` | `-` |
| `blur` | 失焦 | `-` | `-` |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |
| `reset` | 清空绑定的值(单选设置为 `undefined`，多选设置为 `[]`)和校验信息 | `-` | `-` |

### 事件

#### Select Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `focus` | 聚焦时触发 | `event: Event` |
| `blur` | 失焦时触发 | `event: Event` |
| `click` | 点击时触发 | `event: Event` |
| `clear` | 清除时触发 | `value: any \| any[]` |
| `close` | 输入时触发 | `value: any \| any[]` |
| `change` | 更新时触发 | `value: any \| any[]` |

### 插槽

#### Select Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `prepend-icon` | 前置图标 | `-` |
| `append-icon` | 后置图标 | `-` |

#### Option Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 选项显示的内容 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

#### Select Variables

| 变量名 | 默认值 |
| --- | --- |
| `--select-select-text-color` | `#555` |
| `--select-select-padding` | `5px 0` |
| `--select-error-color` | `var(--color-danger)` |
| `--select-blur-color` | `#888` |
| `--select-focus-color` | `var(--color-primary)` |
| `--select-scroller-background` | `#fff` |
| `--select-scroller-padding` | `6px 0` |
| `--select-scroller-max-height` | `278px` |
| `--select-placeholder-size` | `16px` |
| `--select-icon-padding` | `16px 0 0` |
| `--select-icon-size` | `20px` |
| `--select-select-text-color` | `#555` |
| `--select-chip-margin` | `5px 5px 0` |
| `--select-line-size` | `1px` |
| `--select-line-spread-size` | `2px` |
| `--select-arrow-size` | `20px` |
| `--select-disabled-color` | `var(--color-text-disabled)` |

#### Option Variables

| 变量名 | 默认值 |
| --- | --- |
| `--option-height` | `38px` |
| `--option-padding` | `0 12px` |
| `--option-selected-background` | `var(--select-focus-color)` |
