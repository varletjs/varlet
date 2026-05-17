# 分段按钮组

### 介绍

在一组按钮风格的备选项中进行单选或多选。

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const value = ref('day')
</script>

<template>
  <var-segmented-buttons v-model="value">
    <var-segmented-button checked-value="day">天</var-segmented-button>
    <var-segmented-button checked-value="week">周</var-segmented-button>
    <var-segmented-button checked-value="month">月</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### 多选

```html
<script setup>
import { ref } from 'vue'

const value = ref(['day'])
</script>

<template>
  <var-segmented-buttons v-model="value" multiple>
    <var-segmented-button checked-value="day">天</var-segmented-button>
    <var-segmented-button checked-value="week">周</var-segmented-button>
    <var-segmented-button checked-value="month">月</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### 取消勾选图标

默认情况下，选中项会显示勾选图标。可以通过 `SegmentedButtons` 的 `checkmark` 关闭。

```html
<script setup>
import { ref } from 'vue'

const value = ref('day')
</script>

<template>
  <var-segmented-buttons v-model="value" :checkmark="false">
    <var-segmented-button checked-value="day">天</var-segmented-button>
    <var-segmented-button checked-value="week">周</var-segmented-button>
    <var-segmented-button checked-value="month">月</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### 禁用状态

通过 `SegmentedButton` 的 `disabled` 禁用分段按钮。

```html
<script setup>
import { ref } from 'vue'

const value = ref('day')
</script>

<template>
  <var-segmented-buttons v-model="value">
    <var-segmented-button checked-value="day" disabled>天</var-segmented-button>
    <var-segmented-button checked-value="week" disabled>周</var-segmented-button>
    <var-segmented-button checked-value="month" disabled>月</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### 只读状态

通过 `SegmentedButton` 的 `readonly` 将分段按钮设置为只读。

```html
<script setup>
import { ref } from 'vue'

const value = ref('day')
</script>

<template>
  <var-segmented-buttons v-model="value">
    <var-segmented-button checked-value="day" readonly>天</var-segmented-button>
    <var-segmented-button checked-value="week" readonly>周</var-segmented-button>
    <var-segmented-button checked-value="month" readonly>月</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### 尺寸

```html
<template>
  <var-segmented-buttons size="large">
    <var-segmented-button checked-value="day">天</var-segmented-button>
    <var-segmented-button checked-value="week">周</var-segmented-button>
    <var-segmented-button checked-value="month">月</var-segmented-button>
  </var-segmented-buttons>

  <var-segmented-buttons>
    <var-segmented-button checked-value="day">天</var-segmented-button>
    <var-segmented-button checked-value="week">周</var-segmented-button>
    <var-segmented-button checked-value="month">月</var-segmented-button>
  </var-segmented-buttons>

  <var-segmented-buttons size="small">
    <var-segmented-button checked-value="day">天</var-segmented-button>
    <var-segmented-button checked-value="week">周</var-segmented-button>
    <var-segmented-button checked-value="month">月</var-segmented-button>
  </var-segmented-buttons>

  <var-segmented-buttons size="mini">
    <var-segmented-button checked-value="day">天</var-segmented-button>
    <var-segmented-button checked-value="week">周</var-segmented-button>
    <var-segmented-button checked-value="month">月</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### 选项式 API

通过 `options` 可以根据数据渲染分段按钮。

```html
<script setup>
import { computed, ref } from 'vue'

const value = ref('day')
const options = computed(() => [
  { label: '天', value: 'day' },
  { label: '周', value: 'week' },
  { label: '月', value: 'month' },
])
</script>

<template>
  <var-segmented-buttons v-model="value" :options="options" />
</template>
```

### 自定义字段

通过 `label-key` 和 `value-key` 属性自定义 `options` 中数据的格式。

```html
<script setup>
import { computed, ref } from 'vue'

const value = ref('day')
const options = computed(() => [
  { name: '天', id: 'day' },
  { name: '周', id: 'week' },
  { name: '月', id: 'month' },
])
</script>

<template>
  <var-segmented-buttons v-model="value" :options="options" label-key="name" value-key="id" />
</template>
```

### 表单验证

通过 `rules` 对表单中的分段按钮组进行校验。

```html
<script setup>
import { ref } from 'vue'

const form = ref()
const value = ref()

function validate() {
  form.value.validate()
}
</script>

<template>
  <var-form ref="form">
    <var-segmented-buttons v-model="value" :rules="[(v) => v === 'day' || '请选择天']">
      <var-segmented-button checked-value="day">天</var-segmented-button>
      <var-segmented-button checked-value="week">周</var-segmented-button>
      <var-segmented-button checked-value="month">月</var-segmented-button>
    </var-segmented-buttons>
  </var-form>

  <var-button type="primary" block @click="validate">验证</var-button>
</template>
```

## API

### 属性

#### SegmentedButtons Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值，单选模式下为单个值，多选模式下为数组 | _any_ | `-` |
| `options` | 选项数组 | _SegmentedButtonsOption[]_ | `[]` |
| `label-key` | 作为 label 唯一标识的键名 | _string_ | `label` |
| `value-key` | 作为 value 唯一标识的键名 | _string_ | `value` |
| `multiple` | 是否开启多选 | _boolean_ | `false` |
| `checkmark` | 选中项是否显示勾选图标 | _boolean_ | `true` |
| `size` | 分段按钮尺寸，可选值为 `mini` `small` `normal` `large` | _string_ | `normal` |
| `validate-trigger` | 校验触发时机，可选值为 `onClick` `onChange` | _Array<'onClick' \| 'onChange'>_ | `['onChange']` |
| `rules` | 校验规则 | _((v: any) => any) \| ZodType \| Array<((v: any) => any) \| ZodType>_ | `-` |

#### SegmentedButtonsOption

| 名称 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label` | 分段按钮选项内容，也可以是渲染函数 | _string \| VNode \| ((option: SegmentedButtonsOption, checked: boolean) => VNodeChild)_ | `-` |
| `value` | 选项值 | _any_ | `-` |
| `disabled` | 是否禁用分段按钮选项 | _boolean_ | `-` |
| `ripple` | 是否为分段按钮选项开启水波纹效果 | _boolean_ | `-` |

#### SegmentedButton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `checked-value` | 分段按钮对应的值 | _any_ | `-` |
| `disabled` | 是否禁用分段按钮 | _boolean_ | `false` |
| `readonly` | 是否将分段按钮设为只读 | _boolean_ | `false` |
| `ripple` | 是否为分段按钮开启水波纹效果 | _boolean_ | `true` |

### 方法

#### SegmentedButtons Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |
| `reset` | 清空绑定的值和校验信息 | `-` | `-` |

### 事件

#### SegmentedButtons Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `change` | 分段按钮组的值变化时触发 | `value: any \| any[]` |

#### SegmentedButton Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击分段按钮时触发 | `e: Event` |

### 插槽

#### SegmentedButtons Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 分段按钮内容 | `-` |

#### SegmentedButton Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `checkmark` | 分段按钮在选中时显示的自定义勾选图标内容 | `checked: boolean` |
| `default` | 分段按钮的文字或标签内容 | `checked: boolean` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

#### SegmentedButtons Variables

| 变量名 | 默认值 |
| --- | --- |
| `--segmented-buttons-border-color` | `var(--color-outline)` |
| `--segmented-buttons-border-radius` | `4px` |
| `--segmented-buttons-border-width` | `1px` |
| `--segmented-buttons-error-border-color` | `var(--color-danger)` |
| `--segmented-buttons-error-color` | `var(--color-danger)` |
| `--segmented-buttons-error-checked-background` | `hsla(var(--hsl-danger), 0.12)` |

#### SegmentedButton Variables

| 变量名 | 默认值 |
| --- | --- |
| `--segmented-button-text-color` | `var(--color-text)` |
| `--segmented-button-checked-background` | `hsla(var(--hsl-primary), 0.2)` |
| `--segmented-button-checked-text-color` | `var(--color-primary)` |
| `--segmented-button-disabled-background` | `var(--color-disabled)` |
| `--segmented-button-disabled-color` | `var(--color-text-disabled)` |
| `--segmented-button-mini-padding` | `0 8px` |
| `--segmented-button-small-padding` | `0 12px` |
| `--segmented-button-normal-padding` | `0 16px` |
| `--segmented-button-large-padding` | `0 22px` |
| `--segmented-button-mini-height` | `20px` |
| `--segmented-button-small-height` | `28px` |
| `--segmented-button-normal-height` | `36px` |
| `--segmented-button-large-height` | `44px` |
| `--segmented-button-mini-font-size` | `var(--font-size-xs)` |
| `--segmented-button-small-font-size` | `var(--font-size-sm)` |
| `--segmented-button-normal-font-size` | `var(--font-size-md)` |
| `--segmented-button-large-font-size` | `var(--font-size-lg)` |
