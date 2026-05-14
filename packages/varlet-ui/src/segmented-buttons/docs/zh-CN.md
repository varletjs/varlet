# 分段按钮组

### 介绍

使用 `SegmentedButtons` 和 `SegmentedButton` 可以在一组相关选项中进行紧凑的单选或多选。

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

默认情况下，选中项会显示勾选图标。可以通过 `SegmentedButton` 的 `checkmark` 关闭。

```html
<script setup>
import { ref } from 'vue'

const value = ref('day')
</script>

<template>
  <var-segmented-buttons v-model="value">
    <var-segmented-button checked-value="day" :checkmark="false">天</var-segmented-button>
    <var-segmented-button checked-value="week" :checkmark="false">周</var-segmented-button>
    <var-segmented-button checked-value="month" :checkmark="false">月</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### 禁用状态

```html
<script setup>
import { ref } from 'vue'

const disabledValue = ref('day')
</script>

<template>
  <var-segmented-buttons v-model="disabledValue">
    <var-segmented-button checked-value="day" disabled>天</var-segmented-button>
    <var-segmented-button checked-value="week" disabled>周</var-segmented-button>
    <var-segmented-button checked-value="month" disabled>月</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### 只读状态

```html
<script setup>
import { ref } from 'vue'

const readonlyValue = ref('day')
</script>

<template>
  <var-segmented-buttons v-model="readonlyValue">
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
| `size` | 分段按钮尺寸，可选值为 `mini` `small` `normal` `large` | _string_ | `normal` |
| `validate-trigger` | 校验触发时机，可选值为 `onClick` `onChange` | _Array<'onClick' \| 'onChange'>_ | `['onChange']` |
| `rules` | 校验规则 | _((v: any) => any) \| ZodType \| Array<((v: any) => any) \| ZodType>_ | `-` |

#### SegmentedButtonsOption

| 名称 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label` | 分段按钮选项内容，也可以是渲染函数 | _string \| VNode \| ((option: SegmentedButtonsOption, checked: boolean) => VNodeChild)_ | `-` |
| `checkmark` | 分段按钮选项的勾选图标内容，或是否显示默认勾选图标 | _boolean \| VNode \| ((option: SegmentedButtonsOption, checked: boolean) => VNodeChild)_ | `-` |
| `value` | 选项值 | _any_ | `-` |
| `disabled` | 是否禁用分段按钮选项 | _boolean_ | `false` |
| `ripple` | 是否为分段按钮选项开启水波纹效果 | _boolean_ | `-` |

#### SegmentedButton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `checked-value` | 分段按钮对应的值 | _any_ | `-` |
| `disabled` | 是否禁用分段按钮 | _boolean_ | `false` |
| `readonly` | 是否将分段按钮设为只读 | _boolean_ | `false` |
| `ripple` | 是否为分段按钮开启水波纹效果 | _boolean_ | `true` |
| `checkmark` | 分段按钮在选中时是否显示勾选图标 | _boolean_ | `true` |

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
| `checkmark` | 分段按钮在选中时显示的自定义勾选图标内容 | `-` |
| `default` | 分段按钮的文字或标签内容 | `-` |
