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

默认情况下，选中项会显示勾选图标。可以通过 `checkmark` 关闭。

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

### 自定义勾选图标

可以通过 `checkmark` 插槽自定义勾选图标内容。使用 `options` 渲染时，也可以通过 `options.checkmark` 为每一项单独设置勾选图标。

```html
<script setup lang="ts">
import { h, ref } from 'vue'

const value = ref('day')

function renderCheckmark() {
  return h(
    'span',
    {
      style: {
        marginRight: '6px',
        fontWeight: '700',
      },
    },
    '✓'
  )
}

const options = [
  { label: '天', value: 'day', checkmark: renderCheckmark },
  { label: '周', value: 'week', checkmark: renderCheckmark },
  { label: '月', value: 'month', checkmark: renderCheckmark },
]
</script>

<template>
  <var-segmented-buttons v-model="value" :options="options" />
</template>
```

### 禁用与只读

```html
<script setup>
import { ref } from 'vue'

const disabledValue = ref('day')
const readonlyValue = ref('week')
</script>

<template>
  <var-segmented-buttons v-model="disabledValue">
    <var-segmented-button checked-value="day">天</var-segmented-button>
    <var-segmented-button checked-value="week" disabled>周</var-segmented-button>
    <var-segmented-button checked-value="month">月</var-segmented-button>
  </var-segmented-buttons>

  <var-segmented-buttons v-model="readonlyValue" readonly>
    <var-segmented-button checked-value="day">天</var-segmented-button>
    <var-segmented-button checked-value="week">周</var-segmented-button>
    <var-segmented-button checked-value="month">月</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### 尺寸

```html
<template>
  <var-segmented-buttons size="mini">
    <var-segmented-button checked-value="day">天</var-segmented-button>
    <var-segmented-button checked-value="week">周</var-segmented-button>
    <var-segmented-button checked-value="month">月</var-segmented-button>
  </var-segmented-buttons>
</template>
```

### 选项数据

通过 `options` 可以根据数据渲染分段按钮组。

```html
<script setup lang="ts">
import { ref } from 'vue'

const value = ref('week')
const options = [
  { label: '天', value: 'day' },
  { label: '周', value: 'week' },
  { label: '月', value: 'month' },
]
</script>

<template>
  <var-segmented-buttons v-model="value" :options="options" />
</template>
```

### 自定义选项内容

`options.label` 可以是一个渲染函数。

```html
<script setup lang="ts">
import { h, ref } from 'vue'

const value = ref('day')

function renderLabel(option, checked) {
  const text = option.value === 'day' ? '天' : option.value === 'week' ? '周' : '月'

  return h(
    'span',
    {
      style: {
        color: checked ? 'var(--color-primary)' : 'inherit',
        fontWeight: checked ? '600' : '500',
      },
    },
    text
  )
}

const options = [
  { label: renderLabel, value: 'day' },
  { label: renderLabel, value: 'week' },
  { label: renderLabel, value: 'month' },
]
</script>

<template>
  <var-segmented-buttons v-model="value" :options="options" />
</template>
```

## API

### 属性

#### SegmentedButtons Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值，单选模式下为单个值，多选模式下为数组 | _any_ | `-` |
| `options` | 选项数组 | _SegmentedButtonsOption[]_ | `[]` |
| `multiple` | 是否开启多选 | _boolean_ | `false` |
| `disabled` | 是否禁用分段按钮组 | _boolean_ | `false` |
| `readonly` | 是否将分段按钮组设为只读 | _boolean_ | `false` |
| `ripple` | 是否为分段按钮组开启水波纹效果 | _boolean_ | `true` |
| `checkmark` | 分段按钮在选中时是否显示勾选图标 | _boolean_ | `true` |
| `size` | 分段按钮尺寸，可选值为 `mini` `small` `normal` `large` | _string_ | `normal` |
| `rules` | 校验规则 | _((v: any) => any) \| ZodType \| Array<((v: any) => any) \| ZodType>_ | `-` |

#### SegmentedButton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `checked-value` | 分段按钮对应的值 | _any_ | `true` |
| `disabled` | 是否禁用分段按钮 | _boolean_ | `false` |
| `readonly` | 是否将分段按钮设为只读 | _boolean_ | `false` |
| `ripple` | 是否为分段按钮开启水波纹效果 | _boolean_ | `-` |
| `checkmark` | 分段按钮在选中时是否显示勾选图标 | _boolean_ | `-` |

### 事件

#### SegmentedButtons Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `change` | 分段按钮组的值变化时触发 | `value: any \| any[]` |

### 插槽

#### SegmentedButtons Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 分段按钮内容 | `-` |

#### SegmentedButton Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `checkmark` | 分段按钮的自定义勾选图标内容 | `-` |
| `default` | 分段按钮内容 | `-` |

### SegmentedButtonsOption

| 名称 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label` | 分段按钮选项内容，也可以是渲染函数 | _string \| VNode \| SegmentedButtonsOptionLabelRender_ | `-` |
| `checkmark` | 分段按钮选项的勾选图标内容，或是否显示默认勾选图标 | _boolean \| VNode \| SegmentedButtonsOptionCheckmarkRender_ | `-` |
| `value` | 选项值 | _any_ | `-` |
| `disabled` | 是否禁用分段按钮选项 | _boolean_ | `false` |
| `ripple` | 是否为分段按钮选项开启水波纹效果 | _boolean_ | `-` |

### SegmentedButtonsOptionLabelRender

| 名称 | 说明 | 类型 |
| --- | --- | --- |
| `option` | 当前选项 | _SegmentedButtonsOption_ |
| `checked` | 当前选项是否处于选中状态 | _boolean_ |

### SegmentedButtonsOptionCheckmarkRender

| 名称 | 说明 | 类型 |
| --- | --- | --- |
| `option` | 当前选项 | _SegmentedButtonsOption_ |
| `checked` | 当前选项是否处于选中状态 | _boolean_ |
