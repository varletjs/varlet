# 折叠面板

### 介绍

可以折叠和展开的内容区域。

### 基本使用

通过 `v-model` 控制展开的面板列表，`value` 为数组格式。

```html
<script setup>
import { ref } from 'vue'

const value = ref(['1'])

function handleChange(val) {
  console.log(val)
}
</script>

<template>
  <var-collapse v-model="value" @change="handleChange">
    <var-collapse-item title="标题" name="1">文本</var-collapse-item>
    <var-collapse-item title="标题" name="2">文本</var-collapse-item>
  </var-collapse>
</template>
```
### 隐藏边距

使用 `offset` 属性隐藏边距。

```html
<script setup>
import { ref } from 'vue'

const value = ref(['2'])
</script>

<template>
  <var-collapse v-model="value" :offset="false">
    <var-collapse-item title="标题" name="1">文本</var-collapse-item>
    <var-collapse-item title="标题" name="2">文本</var-collapse-item>
  </var-collapse>
</template>
```

### 可控的分割线

使用 `divider` 属性隐藏边距。

```html
<script setup>
import { ref } from 'vue'

const value = ref([])
const divider = ref(false)
</script>

<template>
  <var-button @click="divider = !divider">
    {{ divider ? '隐藏分割线' : '显示分割线' }}
  </var-button>
  <var-collapse v-model="value" :divider="divider">
    <var-collapse-item title="标题" name="1">文本</var-collapse-item>
    <var-collapse-item title="标题" name="2">文本</var-collapse-item>
    <var-collapse-item title="标题" name="3">文本</var-collapse-item>
  </var-collapse>
</template>
```

### 手风琴模式

使用 `accordion` 属性开启手风琴模式，此时 `value` 为字符串。

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-collapse v-model="value" accordion :offset="false">
    <var-collapse-item title="标题" name="1">文本</var-collapse-item>
    <var-collapse-item title="标题" name="2">文本</var-collapse-item>
  </var-collapse>
</template>
```

### 禁用

在 `collapse-item` 上使用 `disabled` 属性禁用当前面板。

```html
<script setup>
import { ref } from 'vue'

const value = ref([1])
const disabled = ref(false)  
</script>

<template>
  <var-space direction="column" :size="[8, 8]">
    <var-button @click="disabled = !disabled">
      {{ disabled ? '启用' : '禁用' }}
    </var-button>
    
    <var-collapse v-model="value">
      <var-collapse-item title="标题" :name="1" :disabled="disabled">
        文本
      </var-collapse-item>
      <var-collapse-item title="标题" :name="2" :disabled="disabled">
        文本
      </var-collapse-item>
    </var-collapse>
  </var-space>
</template>
```

### 自定义内容

```html
<script setup>
import { ref } from 'vue'

const value = ref(['1'])  
</script>

<template>
  <var-collapse v-model="value">
    <var-collapse-item title="这是标题" name="1" icon="account-circle">
      文本
    </var-collapse-item>
    <var-collapse-item name="2">
      <template #title>这是标题</template>
      <template #icon>^_^</template>
      这是内容
    </var-collapse-item>
  </var-collapse>
</template>
```

### 切换全部

```html
<script setup>
import { ref } from 'vue'

const collapseRef = ref(null)
const value = ref(['2', '4'])  

function toggleAll() {
  collapseRef.value.toggleAll({ expand: 'inverse' })
}

function toggleAllSkipDisabled() {
  collapseRef.value.toggleAll({ expand: 'inverse', skipDisabled: true })
}

function openAll() {
  collapseRef.value.toggleAll({ expand: true })
}
function openAllSkipDisabled() {
  collapseRef.value.toggleAll({ expand: true, skipDisabled: true })
}

function closeAll() {
  collapseRef.value.toggleAll({ expand: false })
}

function closeAllSkipDisabled() {
  collapseRef.value.toggleAll({ expand: false, skipDisabled: true })
}
</script>

<template>
  <var-button @click="toggleAll" style="margin: 8px">切换全部</var-button>
  <var-button @click="toggleAllSkipDisabled" style="margin: 8px">
    切换全部（跳过禁用）
  </var-button>
  <var-button @click="openAll" style="margin: 8px">展开全部</var-button>
  <var-button @click="openAllSkipDisabled" style="margin: 8px">
    展开全部（跳过禁用）
  </var-button>
  <var-button @click="closeAll" style="margin: 8px">收起全部</var-button>
  <var-button @click="closeAllSkipDisabled" style="margin: 8px">
    收起全部（跳过禁用）
  </var-button>

  <var-collapse v-model="value" ref="collapseRef">
    <var-collapse-item title="标题" name="1">文本</var-collapse-item>
    <var-collapse-item title="标题" name="2">文本</var-collapse-item>
    <var-collapse-item title="标题" disabled name="3">文本</var-collapse-item>
    <var-collapse-item title="标题" disabled name="4">文本</var-collapse-item>
  </var-collapse>
</template>
```

## API

### 属性

#### Collapse Props

| 参数        | 说明                                               | 类型                                                                     | 默认值  |
| ----------- | -------------------------------------------------- | ------------------------------------------------------------------------ | ------- |
| `v-model`   | 当前展开面板的 name                                | 手风琴模式： _string \| number_<br> 非手风琴模式：_string[] \| number[]_ | `-`     |
| `accordion` | 是否开启手风琴模式                                 | _boolean_                                                                | `false` |
| `elevation` | 海拔高度，可选值为 `true` `false` 和 `0-24` 的等级 | _string \| number \| boolean_                                            | `true`  |
| `offset`    | 是否显示边距                                       | _boolean_                                                                | `true`  |
| `divider`   | 是否显示分割线                                     | _boolean_                                                                | `true`  |

#### CollapseItem Props

| 参数       | 说明                     | 类型               | 默认值         |
| ---------- | ------------------------ | ------------------ | -------------- |
| `name`     | 唯一标识符，默认为索引值 | _string \| number_ | `index`        |
| `title`    | 面板标题                 | _string \| number_ | `-`            |
| `icon`     | icon 的名称              | _string_           | `chevron-down` |
| `disabled` | 是否禁用面板             | _boolean_          | `false`        |

### 方法

| 方法名      | 说明                                                                                | 参数                               | 返回值 |
| ----------- | ----------------------------------------------------------------------------------- | ---------------------------------- | ------ |
| `toggleAll` | 开启或关闭所有面板 | `options: CollapseToggleAllOptions` | `-`    |

### CollapseToggleAllOptions

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| `expand` | 设置`'inverse'`可切换所有面板的状态，包括禁用的面板；设置`boolean`控制所有面板展开或收起 | _'inverse' \| boolean_ | `-` |
| `skipDisabled` | 是否跳过禁用状态的面板 | _boolean_ | `false` |

### 事件

#### Collapse Events

| 事件名   | 说明           | 回调参数                             |
| -------- | -------------- | ------------------------------------ |
| `change` | 切换面板时触发 | `value: 类型与 v-model 绑定的值一致` |

### 插槽

#### Collapse Slots

| 名称      | 说明           | 参数 |
| --------- | -------------- | ---- |
| `default` | 折叠面板的内容 | `-`  |

#### CollapseItem Slots

| 名称      | 说明            | 参数 |
| --------- | --------------- | ---- |
| `default` | 面板的内容      | `-`  |
| `title`   | 面板的标题      | `-`  |
| `icon`    | 自定义右侧 icon | `-`  |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                         | 默认值                           |
| ------------------------------ | -------------------------------- |
| `--collapse-background`        | `var(--color-surface-container-highest)`                           |
| `--collapse-text-color`        | `#232222`                        |
| `--collapse-header-font-size`  | `var(--font-size-lg)`            |
| `--collapse-header-padding`    | `10px 12px`                      |
| `--collapse-content-font-size` | `var(--font-size-md)`            |
| `--collapse-content-padding`   | `0 12px 10px`                    |
| `--collapse-item-margin-top`   | `16px`                           |
| `--collapse-disable-color`     | `#bdbdbd`                        |
| `--collapse-border-top`        | `thin solid var(--color-outline)` |
