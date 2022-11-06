# 计数器

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-counter v-model="value"/>
</template>
```

### 设置取值范围

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-counter :min="0" :max="5" v-model="value"/>
</template>
```

### 设置步长

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-counter :step="10" v-model="value"/>
</template>
```

### 保留小数

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-counter :decimal-length="1" v-model="value" />
</template>
```

### 设置尺寸

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-counter
    input-text-size="18px"
    input-width="50px"
    button-size="36px"
    v-model="value"
  />
</template>
```

### 禁用

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-counter disabled v-model="value"/>
</template>
```

### 只读

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-counter readonly v-model="value"/>
</template>
```

### 异步变更

在某些场景下需要等待服务器返回成功之后再执行变更。
设置 `lazy-change` 后会阻止组件本身的绑定值更新操作，
并注册 `before-change` 事件进行手动更新。

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)

const handleBeforeChange = (value, change) => {
  setTimeout(() => change(value), 500)
}
</script>

<template>
  <var-counter
    lazy-change
    v-model="value"
    @before-change="handleBeforeChange"
  />
</template>
```

### 字段校验

通过传入一个校验器数组可以对值进行校验，校验器返回 `true` 则为校验通过。
以外的值将转换为文本作为用户提示。

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-counter
    :rules="[v => v > 5 || '请选择大于5的值']"
    v-model="value"
  />
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _string \| number_ | `0` |
| `min` | 最小值 | _string \| number_ | `-` |
| `max` | 最大值 | _string \| number_ | `-` |
| `step` | 步长 | _string \| number_ | `-` |
| `decimal-length` | 保留小数位数 | _string \| number_ | `-` |
| `color` | 背景颜色 | _string_ | `-` |
| `input-width` | 输入框的宽度 | _string \| number_ | `-` |
| `input-text-size` | 输入框的文字大小 | _string \| number_ | `-` |
| `button-size` | 按钮大小 | _string_ | `true` |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `disabled` | 是否禁用 | _boolean_ | `false` |
| `disable-increment` | 是否禁用增加 | _boolean_ | `false` |
| `disable-decrement` | 是否禁用减少 | _boolean_ | `false` |
| `disable-input` | 是否禁用输入 | _boolean_ | `false` |
| `increment-button` | 是否显示增加按钮 | _boolean_ | `true` |
| `decrement-button` | 是否显示减少按钮 | _boolean_ | `true` |
| `press` | 是否开启按钮长按 | _boolean_ | `true` |
| `ripple` | 是否开启水波纹 | _boolean_ | `true` |
| `validate-trigger` | 触发验证的时机，可选值为 `onInputChange` `onLazyChange` `onIncrement` `onDecrement` | _ValidateTriggers[]_ | `['onIncrement', 'onDecrement', 'onInputChange', 'onLazyChange']` |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(value: number) => any>_ | `-` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |
| `reset` | 清空绑定的值(设置为 `min \|\| 0`)和校验信息 | `-` | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `before-change` | 变更之前(仅限 lazy-change 模式)触发 | `value: number` <br> `change: (value: string \| number) => void` |
| `change` | 变更时触发 | `value: number` |
| `increment` | 增加时触发 | `value: number` |
| `decrement` | 减少时触发 | `value: number` |


### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名                             | 默认值                          |
|---------------------------------|------------------------------|
| `--counter-padding`             | `0 4px`                      |
| `--counter-font-color`          | `#fff`                       |
| `--counter-background`          | `var(--color-primary)`       |
| `--counter-input-width`         | `28px`                       |
| `--counter-input-margin`        | `0 4px`                      |
| `--counter-input-font-size`     | `14px`                       |
| `--counter-button-size`         | `28px`                       |
| `--counter-button-icon-size`    | `100%`                       |
| `--counter-disabled-color`      | `var(--color-disabled)`      |
| `--counter-error-color`         | `var(--color-danger)`        |
