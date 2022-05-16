# 评分

### 基础评分

默认显示样式。

```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate v-model="score"/>
</template>
```

### 自定义评分总数

通过 `count` 属性设置评分总数。

```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate v-model="score" :count="8"/>
</template>
```

### 自定义评分图标颜色

通过 `color` 和 `empty-color` 属性设置选中和未选中时的颜色。

```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate v-model="score" color="#9c27b0" empty-color="#d199da"/>
  <var-rate v-model="score" color="#e91e63" empty-color="#f48fb1"/>
  <var-rate v-model="score" color="#4caf50" empty-color="#a5d6a7"/>
  <var-rate v-model="score" color="#3f51b5" empty-color="#9fa8da"/>
</template>
```

### 自定义评分图标样式

通过 `icon` 和 `empty-icon` 属性设置选中和未选时的图标样式。

```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate v-model="score" icon="heart" empty-icon="heart-outline" color="red"/>
</template>
```

### 自定义评分图标尺寸

通过 `size` 属性设置评分图标的尺寸。

```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate v-model="score" :size="14"/>
  <var-rate v-model="score" :size="16"/>
  <var-rate v-model="score" :size="18"/>
  <var-rate v-model="score" :size="20"/>
</template>
```

### 自定义图标间隔

通过 `gap` 属性设置评分之间的间隔。

```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate v-model="score" :gap="1"/>
  <var-rate v-model="score"/>
  <var-rate v-model="score" :gap="4"/>
  <var-rate v-model="score" :gap="8"/>
</template>
```

### 允许半图标

通过 `half` 属性将评分设置为可半选，`half-icon` 属性设置半选时的样式。

```html
<script setup>
import { ref } from 'vue'

const score = ref(3.5)
</script>

<template>
  <var-rate v-model="score" :count="8" half/>
  <var-rate 
    v-model="score" 
    :count="8" 
    icon="heart" 
    half-icon="heart-half-full" 
    empty-icon="heart-outline"
    color="red" 
    half
  />
</template>
```

### 禁用评分

通过 `disabled` 属性将评分设置为禁止点击状态，`disabled-color` 设置禁用时图标的颜色。

```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate v-model="score" disabled/>
</template>
```

### 只读评分

通过 `readonly` 属性将评分设置为只读状态。

```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate v-model="score" readonly/>
</template>
```

### 禁止使用水波纹

通过把 `ripple` 属性设置为 `false` 来禁止使用水波纹。

```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate v-model="score" :ripple="false"/>
</template>
```

### 监听 change 事件

通过调用 `change` 事件完成其他交互逻辑。

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const score = ref(3)

const handleChange = (score) => {
  Snackbar({
    content: `click ${score}`,
    position: 'top'
  })
}
</script>

<template>
  <var-rate v-model="score" @change="handleChange"/>
</template>
```

### 字段校验

通过传入一个校验器数组可以对值进行校验，校验器返回 `true` 则为校验通过。
以外的值将转换为文本作为用户提示。


```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate :rules="[(v) => v >= 3 || '必须大于2']" v-model='score'/>
</template>
```

## API

### 属性

| 参数               | 说明 | 类型 | 默认值 |
|------------------| ---- | ---- | ---- |
| `v-model`        | 当前分数 | _number \| string_ | `0` |
| `count`          | 评分总数 | _number \| string_ | `5` |
| `color`          | 选中时图标的颜色 | _string_ | `-` |
| `icon`           | 选中整个图标时的图标样式 | _string_ | `star`|
| `empty-color`    | 未选中时图标的颜色 | _string_ | `-` |
| `empty-icon`     | 未选中时图标的样式 | _string_ | `star-outline` |
| `size`           | 图标大小，默认单位为 `px` | _number \| string_ | `-`|
| `gap`            | 图标间隔，默认单位为 `px` | _number \| string_ | `-` |
| `half`           | 是否允许半选 | _boolean_ | `false` |
| `half-icon`      | 半选时图标的样式，只有在 `half` 为 `true` 时才有效| _string_ | `star-half-full` |
| `namespace`      | 图标的命名空间, 可扩展自定义图标库 |  _string_ | `var-icon` |
| `disabled`       | 是否禁止评分 | _boolean_ | `false`|
| `disabled-color` | 禁止评分时图标的颜色，只有在 `disabled` 为 `true` 时才有效，优先级高于 `color`、`empty-color`| _string_ | `#aaa` |
| `readonly`       | 是否使用评分只读 | _boolean_ | `false` |
| `ripple`         | 是否使用水波纹 | _boolean_ | `true` |
| `rules`          | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(v: string \| number) => any>_ | `-` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| change | 评分改变时触发 | `value: string \| number` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--rate-primary-color` | `var(--color-primary)` |
| `--rate-disabled-color` | `var(--color-text-disabled)` |
| `--rate-error-color` | `var(--color-danger)` |
| `--rate-action-padding` | `4px` |
