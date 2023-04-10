# 选择框

### 介绍

通过下拉菜单展示并选择内容。

### 基本使用

组件会使用 option 的 `label` 作为显示的文本。
组件会优先使用 option 的 `value` 作为选项的值，其次使用 `label`。

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select placeholder="请选择一个选项" v-model="value">
    <var-option label="吃饭" />
    <var-option label="睡觉" />
  </var-select>
  <var-select variant="outlined" placeholder="请选择一个选项" v-model="value">
    <var-option label="吃饭" />
    <var-option label="睡觉" />
  </var-select>
</template>
```

### 小尺寸

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select size="small" placeholder="请选择一个选项" v-model="value">
    <var-option label="吃饭" />
    <var-option label="睡觉" />
  </var-select>
  <var-select size="small" variant="outlined" placeholder="请选择一个选项" v-model="value">
    <var-option label="吃饭" />
    <var-option label="睡觉" />
  </var-select>
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
import { ref } from 'vue'

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
import { ref } from 'vue'

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
import { ref } from 'vue'

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
import { ref } from 'vue'

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
  <var-select
    placeholder="请选择一个选项"
    variant="outlined"
    clearable
    v-model="value"
  >
    <var-option label="吃饭" />
    <var-option label="睡觉" />
  </var-select>
</template>
```

### 自定义图标

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-select placeholder="请选择一个选项" v-model="value">
    <var-option label="吃饭">
      <var-icon class="selected-icon" name="cake-variant" />
      <span>吃饭</span>
    </var-option>
    <var-option label="睡觉">
      <var-icon class="selected-icon" name="weather-night" />
      <span>睡觉</span>
    </var-option>
    
    <template #selected>
      <var-icon class="selected-icon" :name="value === '吃饭' ? 'cake-variant' : 'weather-night'" />
      <span>{{ value }}</span>
    </template>
    <template #prepend-icon>
      <var-icon class="prepend-icon" name="plus"/>
    </template>
     <template #append-icon>
      <var-icon class="append-icon" name="minus"/>
    </template>
    <template #arrow-icon="{ focus }">
      <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
    </template>
  </var-select>
</template>

<style>
.selected-icon {
  margin-right: 6px;
}

.prepend-icon {
  margin-right: 2px;
}

.append-icon {
  margin-left: 2px;
}

.arrow-icon-rotate {
  transform: rotate(180deg);
}
</style>
```

### 多选

```html
<script setup>
import { ref } from 'vue'

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
import { ref } from 'vue'

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
import { ref } from 'vue'

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
import { ref } from 'vue'

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

## API

### 属性

#### Select Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _any \| any[]_ | `-` |
| `size` | 选择框尺寸，可选值 `small`   | _string_ | `-` |
| `variant` | 选择框风格, 可选值为 `standard` `outlined` | _string_ | `standard` |
| `placeholder` | 占位符 | _string_ | `-` |
| `multiple` | 是否开启多选 | _boolean_ | `false` |
| `offset-y` | 下拉菜单的垂直偏移量 | _string \| number_ | `0` |
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
| `selected` | 选择区域的内容 | `-` |
| `prepend-icon` | 前置图标 | `-` |
| `append-icon` | 后置图标 | `-` |
| `arrow-icon` | 箭头图标 | `focus: boolean` 是否处于聚焦状态 |

#### Option Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 选项显示的内容 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

#### Select Variables

| 变量名 | 默认值 |
| --- | --- |
| `--input-box-input-text-color` | `#555` |
| `--input-box-error-color` | `var(--color-danger)` |
| `--input-box-blur-color` | `#888` |
| `--input-box-focus-color` | `var(--color-primary)` |
| `--input-box-placeholder-size` | `16px` |
| `--input-box-textarea-padding-top` | `8px` |
| `--input-box-input-padding-top` | `16px` |
| `--input-box-input-padding-bottom` | `16px` |
| `--input-box-input-padding-left` | `14px` |
| `--input-box-input-padding-right` | `14px` |
| `--input-box-icon-padding` | `20px 0 0` |
| `--input-box-icon-size` | `20px` |
| `--input-box-line-size` | `1px` |
| `--input-box-line-focus-size` | `2px` |
| `--input-box-disabled-color` | `var(--color-text-disabled)` |
| `--select-scroller-background` | `#fff` |
| `--select-scroller-padding` | `6px 0` |
| `--select-scroller-margin` | `0px` |
| `--select-scroller-max-height` | `278px` |
| `--select-chip-margin` | `5px 5px 0` |
| `--select-arrow-size` | `20px` |

#### Option Variables

| 变量名 | 默认值 |
| --- | --- |
| `--option-height` | `38px` |
| `--option-padding` | `0 12px` |
| `--option-selected-background` | `var(--select-focus-color)` |
