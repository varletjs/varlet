# 菜单选择器

### 介绍

具有选择器功能的菜单，部分功能的使用方式与 [菜单](#/zh-CN/menu) 一致。

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const value = ref()
</script>

<template>
  <var-menu-select v-model="value">
    <var-button type="primary">{{ value ? value : '请选择' }}</var-button>

    <template #options>
      <var-menu-option label="吃饭" />
      <var-menu-option label="睡觉" />
      <var-menu-option label="打游戏" />
    </template>
  </var-menu-select>
</template>
```

### 尺寸

```html
<script setup>
import { ref } from 'vue'
  
const valueNormal = ref()
const valueSmall = ref()
const valueMini = ref()
const valueLarge = ref()
</script>

<template>
  <var-space>
    <var-menu-select v-model="valueNormal">
      <var-button type="primary">
        {{ valueNormal ? valueNormal : '常规尺寸' }}
      </var-button>

      <template #options>
        <var-menu-option label="吃饭" />
        <var-menu-option label="睡觉" />
        <var-menu-option label="打游戏" />
      </template>
    </var-menu-select>

    <var-menu-select size="small" v-model="valueSmall">
      <var-button type="primary">
        {{ valueSmall ? valueSmall : '小型尺寸' }}
      </var-button>

      <template #options>
        <var-menu-option label="吃饭" />
        <var-menu-option label="睡觉" />
        <var-menu-option label="打游戏" />
      </template>
    </var-menu-select>

    <var-menu-select size="mini" v-model="valueMini">
      <var-button type="primary">
        {{ valueMini ? valueMini : '迷你尺寸' }}
      </var-button>

      <template #options>
        <var-menu-option label="吃饭" />
        <var-menu-option label="睡觉" />
        <var-menu-option label="打游戏" />
      </template>
    </var-menu-select>

    <var-menu-select size="large" v-model="valueLarge">
      <var-button type="primary">
        {{ valueLarge ? valueLarge : '大型尺寸' }}
      </var-button>

      <template #options>
        <var-menu-option label="吃饭" />
        <var-menu-option label="睡觉" />
        <var-menu-option label="打游戏" />
      </template>
    </var-menu-select>
  </var-space>
</template>
```

### 值映射

```html
<script setup>
import { ref } from 'vue'

const value = ref()
</script>

<template>
  <var-menu-select v-model="value">
    <var-button type="primary">{{ value ? `value: ${value}` : '请选择' }}</var-button>

    <template #options>
      <var-menu-option label="吃饭" :value="1" />
      <var-menu-option label="睡觉" :value="2" />
      <var-menu-option label="打游戏" :value="3" />
    </template>
  </var-menu-select>
</template>
```

### 可滚动

通过开启 `scrollable` 使菜单可以局部滚动。

```html
<script setup>
import { ref } from 'vue'

const value = ref()
const options = ref(Array.from(
  { length: 30 }, 
  (_, index) => ({ label: `Option ${index + 1}`, value: index }))
)
</script>

<template>
  <var-menu-select scrollable v-model="value">
    <var-button type="primary">{{ value ? value : '请选择' }}</var-button>

    <template #options>
      <var-menu-option 
        v-for="option in options" 
        :key="option.value" 
        :label="option.label" 
      />
    </template>
  </var-menu-select>
</template>
```

### 选项禁用

```html
<script setup>
import { ref } from 'vue'

const value = ref()
</script>

<template>
  <var-menu-select scrollable v-model="value">
    <var-button type="primary">{{ value ? value : '请选择' }}</var-button>

    <template #options>
      <var-menu-option label="吃饭" />
      <var-menu-option label="睡觉" />
      <var-menu-option label="打游戏" disabled />
    </template>
  </var-menu-select>
</template>
```

### 多选

```html
<script setup>
import { ref } from 'vue'

const value = ref([])
</script>

<template>
  <var-menu-select multiple v-model="value">
    <var-button type="primary">{{ value.length ? value : '请选择' }}</var-button>

    <template #options>
      <var-menu-option label="吃饭" />
      <var-menu-option label="睡觉" />
      <var-menu-option label="打游戏" />
      <var-menu-option label="写代码" />
      <var-menu-option label="摸鱼" />
    </template>
  </var-menu-select>
</template>
```

### 选择选项时禁止关闭菜单

关闭 `close-on-select` 可以在选择选项时禁止关闭菜单。默认行为是在选择选项时关闭菜单，多选模式下不允许关闭此选项。

```html
<script setup>
import { ref } from 'vue'

const value = ref()
</script>

<template>
  <var-menu-select :close-on-select="false" v-model="value">
    <var-button type="primary">{{ value ? value : '请选择' }}</var-button>

    <template #options>
      <var-menu-option label="吃饭" />
      <var-menu-option label="睡觉" />
      <var-menu-option label="打游戏" />
    </template>
  </var-menu-select>
</template>
```

## API

### 属性

#### MenuSelect Props

| 参数              | 说明                                                          | 类型                    | 默认值               |
|-----------------|-------------------------------------------------------------|-----------------------|-------------------|
| `v-model`  | 绑定的值                                                      | _any \| any[]_              | `-`         |
| `v-model:show`  | 是否显示菜单                                                      | _boolean_              | `false`         |
| `size`  | 菜单尺寸，可选值 `normal` `mini` `small` `large`        | _string_              | `normal`         |
| `multiple`     | 是否多选                                                      | _boolean_           | `false` |
| `scrollable`     | 是否可滚动                                                      | _boolean_           | `false` |
| `close-on-select`     | 选中时是否关闭菜单(多选模式下选中选项始终不关闭菜单) | _boolean_           | `true` |
| `placement`     | 菜单弹出位置                                                      | _Placement_           | `cover-top-start` |
| `strategy`       | 菜单定位方式，可选值为 `absolute` `fixed` | _string_              | `absolute`           |
| `offset-x`      | x 轴偏移量， 相对于菜单对齐后的位置                                         | _number \| string_           | `0` |
| `offset-y`      | y 轴偏移量， 相对于菜单对齐后的位置                                         | _number \| string_           | `0` |
| `teleport`      | 菜单挂载的位置                                                     | _TeleportProps['to'] \| false_ | `body`            |
| `disabled`      | 是否禁用菜单                                                      | _boolean_             | `false`           |
| `trigger`       | 菜单触发方式，可选值为 `click` `hover`, `click` 为点击时触发, `hover` 为悬停时触发 | _string_              | `click`           |
| `reference`       | 菜单关联的触发元素选择器，用于指定菜单的特定子元素为触发元素 | _string_              | `-`           |
| `elevation` | 海拔高度，可选值为 `true` `false` 和 `0-24` 的等级 | _string \| number \| boolean_|   `true`    |
| `same-width`    | 是否与触发元素同宽                                                   | _boolean_             | `false`           |
| `popover-class` | 弹出层的 class                                                    | _string_             | `-`            |
| `close-on-click-reference` | 是否在点击菜单触发元素后关闭菜单 | _boolean_ | `false` |

#### MenuOption Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label` | 选项显示的文本 | _any_ | `-` |
| `value` | 选项绑定的值 | _any_ | `-` |
| `disabled` | 是否禁用 | _boolean_ | `false` |

### Placement

| 参数 | 说明 |
| ------- | ------ |
| `top` |顶部中心位置 |
| `top-start` | 顶部左侧位置 |
| `top-end` | 顶部右侧位置 |
| `bottom` | 底部中心位置 |
| `bottom-start` | 底部左侧位置 |
| `bottom-end` | 底部右侧位置 |
| `right` | 右侧中心位置 |
| `right-start` | 右侧上方位置 |
| `right-end` | 右侧下方位置 |
| `left` | 左侧中心位置 |
| `left-start` | 左侧上方位置 |
| `left-end` | 左侧下方位置 |
| `cover-top` | 顶部中心位置, 覆盖触发器 |
| `cover-top-start` | 顶部左侧位置, 覆盖触发器 |
| `cover-top-end` | 顶部右侧位置, 覆盖触发器 |
| `cover-bottom` | 底部中心位置, 覆盖触发器 |
| `cover-bottom-start` | 底部左侧位置, 覆盖触发器 |
| `cover-bottom-end` | 底部右侧位置, 覆盖触发器 |
| `cover-left` | 左侧位置, 覆盖触发器 |
| `cover-right` | 右侧位置, 覆盖触发器 |

### 方法

#### MenuSelect Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `open` | 打开 MenuSelect | `-` | `-` |
| `close` | 关闭 MenuSelect | `-` | `-` |
| `resize` | MenuSelect 默认插槽元素产生位置大小变化时可以调用此方法进行重绘 | `-` | `-` |

### 事件

#### MenuSelect Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `open` | 打开菜单时触发 | `-` |
| `opened` | 打开菜单动画结束时触发 | `-` |
| `close` | 关闭菜单时触发 | `-` |
| `closed` | 关闭菜单动画结束时触发 | `-` |
| `click-outside` | 点击菜单外部时触发 | `event: Event` |

### 插槽

#### MenuSelect Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 菜单关联的触发元素 | `-` |
| `options` | 菜单选项内容 | `-` |

#### MenuOption Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 选项显示的内容 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

#### Select Variables

| 变量名 | 默认值 |
| --- | --- |
| `--menu-select-menu-max-height` | `278px` |
| `--menu-select-menu-padding` | `0` |
| `--menu-select-menu-border-radius` | `2px` |
| `--menu-select-menu-background-color` | `var(--color-surface-container-high)` |

#### Option Variables

| 变量名 | 默认值 |
| --- | --- |
| `--menu-option-normal-height` | `38px` |
| `--menu-option-small-height` | `30px` |
| `--menu-option-mini-height` | `24px` |
| `--menu-option-large-height` | `46px` |
| `--menu-option-padding` | `0 12px` |
| `--menu-option-normal-font-size` | `var(--font-size-md)` |
| `--menu-option-small-font-size` | `var(--font-size-sm)` |
| `--menu-option-mini-font-size` | `var(--font-size-xs)` |
| `--menu-option-large-font-size` | `var(--font-size-lg)` |
| `--menu-option-selected-background` | `var(--color-primary)` |
| `--menu-option-text-color` | `#555` |
| `--menu-option-disabled-color` | `var(--color-text-disabled)` |
