# 选项卡组

### 介绍

使用 `Tabs`、`Tab` 实现选项卡组的切换。使用 `TabsItems`、`TabItem` 实现和选项卡组的视图联动。

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-tabs v-model:active="active">
    <var-tab>选项1</var-tab>
    <var-tab>选项2</var-tab>
    <var-tab>选项3</var-tab>
  </var-tabs>
</template>
```

### 具名选项卡

Tabs 默认通过 `active` 去匹配 Tab 的 `index` 来决定哪个选项卡被激活。
您也可以通过给 Tab 设置 `name` 来命名选项卡，这时 Tabs 会优先匹配 `name`。

```html
<script setup>
import { ref } from 'vue'

const active = ref('选项1')
</script>

<template>
  <var-tabs v-model:active="active">
    <var-tab name="选项1">选项1</var-tab>
    <var-tab name="选项2">选项2</var-tab>
    <var-tab name="选项3">选项3</var-tab>
  </var-tabs>
</template>
```

### 修改样式

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-tabs
    elevation
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    v-model:active="active"
  >
    <var-tab>选项1</var-tab>
    <var-tab>选项2</var-tab>
    <var-tab>选项3</var-tab>
  </var-tabs>
</template>
```

### 禁用选项

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-tabs
    elevation
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    disabled-color="#aaa"
    v-model:active="active"
  >
    <var-tab>选项1</var-tab>
    <var-tab>选项2</var-tab>
    <var-tab disabled>禁用选项</var-tab>
  </var-tabs>
</template>
```

### 开启滚动

在选项卡数量在 `四个以上` 时自动开启滚动，点击选项卡自动滚动到视口中央。

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-tabs
    elevation
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    v-model:active="active"
  >
    <var-tab>选项1</var-tab>
    <var-tab>选项2</var-tab>
    <var-tab>选项3</var-tab>
    <var-tab>选项4</var-tab>
    <var-tab>选项5</var-tab>
    <var-tab>选项6</var-tab>
    <var-tab>选项7</var-tab>
    <var-tab>选项8</var-tab>
  </var-tabs>
</template>
```

### 选项垂直布局

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-tabs
    elevation
    item-direction="vertical"
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    v-model:active="active"
  >
    <var-tab>
      <var-icon class="tabs-example-icon" name="information" />
      <div>选项1</div>
    </var-tab>
    <var-tab>
      <var-icon class="tabs-example-icon" name="warning" />
      <div>选项2</div>
    </var-tab>
    <var-tab>
      <var-icon class="tabs-example-icon" name="error" />
      <div>选项3</div>
    </var-tab>
  </var-tabs>
</template>

<style>
.tabs-example-icon {
  margin-bottom: 5px;
}
</style>
```

### 容器垂直布局

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-tabs
    class="tabs-example-vertical"
    elevation
    layout-direction="vertical"
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    v-model:active="active"
  >
    <var-tab>选项1</var-tab>
    <var-tab>选项2</var-tab>
    <var-tab>选项3</var-tab>
  </var-tabs>
</template>

<style>
.tabs-example-vertical {
  width: 80px !important;
  height: 120px !important;
}
</style>
```

### 视图联动

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-tabs
    elevation
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    v-model:active="active"
  >
    <var-tab>选项1</var-tab>
    <var-tab>选项2</var-tab>
    <var-tab>选项3</var-tab>
  </var-tabs>

  <var-tabs-items v-model:active="active">
    <var-tab-item>
      呜啦啦啦火车笛，随着奔腾的马蹄。 小妹妹吹着口琴，夕阳下美了剪影。 我用子弹写日记，介绍完了风景。
      接下来换介绍我自己。 我虽然是个牛仔，在酒吧只点牛奶。 为什么不喝啤酒，因为啤酒伤身体。
    </var-tab-item>
    <var-tab-item>
      很多人不长眼睛，嚣张都靠武器。 赤手空拳就缩成蚂蚁。 不用麻烦了，不用麻烦了。 不用麻烦，不用麻烦了，不用麻烦了。
    </var-tab-item>
    <var-tab-item>
      你们一起上，我在赶时间。 每天决斗观众都累了，英雄也累了。 不用麻烦了，不用麻烦了。
      副歌不长你们有几个，一起上好了。 正义呼唤我，美女需要我。 牛仔很忙的。
    </var-tab-item>
  </var-tabs-items>
</template>
```

### 开启粘性布局

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <div class="sticky-example">
    <var-tabs
      sticky
      elevation
      color="var(--color-primary)"
      active-color="var(--color-on-primary)"
      inactive-color="var(--color-on-info)"
      v-model:active="active"
    >
      <var-tab>选项1</var-tab>
      <var-tab>选项2</var-tab>
      <var-tab>选项3</var-tab>
    </var-tabs>
  </div>
</template>

<style>
.sticky-example {
  height: 200vh;
}
</style>
```

### 指示器位置反转

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-tabs
    elevation
    indicator-position="reverse"
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    v-model:active="active"
  >
    <var-tab>选项1</var-tab>
    <var-tab>选项2</var-tab>
    <var-tab>选项3</var-tab>
  </var-tabs>

  <var-tabs
    class="tabs-example-vertical"
    elevation
    indicator-position="reverse"
    layout-direction="vertical"
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    v-model:active="active"
  >
    <var-tab>选项1</var-tab>
    <var-tab>选项2</var-tab>
    <var-tab>选项3</var-tab>
  </var-tabs>
</template>

<style>
.tabs-example-vertical {
  width: 80px !important;
  height: 120px !important;
  margin-top: 20px;
}
</style>
```

## API

### 属性

#### Tabs Props

| 参数                 | 说明                                     | 类型       | 默认值          |
|--------------------|----------------------------------------|----------|--------------|
| `v-model:active`   | 激活的选项卡标识, 优先匹配 name，其次是 index          | _string_ | `default`    |
| `layout-direction` | 选项卡组的布局方向，可选值为 `horizontal` `vertical` | _string_ | `horizontal` |
| `item-direction`   | 选项卡的布局方向，可选值为 `horizontal` `vertical`  | _string_ | `horizontal` |
| `fixed-bottom`     | 是否固定在窗口底部, 可用做底部导航                     | _boolean_ | `false`      |
| `color`            | 选项卡的背景颜色                               | _string_ | `-`       |
| `active-color`     | 选项卡激活的主要颜色                             | _string_ | `-`    |
| `inactive-color`   | 选项卡未激活的主要颜色                            | _string_ | `-`    |
| `disabled-color`   | 选项卡禁用时的主要颜色                            | _string_ | `-`    |
| `indicator-color`  | 选项卡激活指示器的颜色                            | _string_ | `-`    |
| `indicator-size`   | 选项卡激活指示器的尺寸                            | _string \| number_      | `2px`        |
| `elevation` | 海拔高度，可选值为 `true` `false` 和 `0-24` 的等级 | _string \| number \| boolean_|   `false`    |
| `sticky`           | 是否启用粘性布局                               | _boolean_ | `false`      |
| `sticky-css-mode`  | 是否启用粘性布局的原生 css sticky 模式              | _boolean_ | `false`      |
| `sticky-z-index`   | 粘性布局的层级                                | _number_ | `10`         |
| `safe-area`        | 是否开启底部安全区适配                            | _boolean_ | `false`      |
| `offset-top`       | 吸顶距离                                   | _string \| number_      | `0`          |
| `scrollable`       | 是否开启滚动，可选值为 `auto` `always`           | _string_       | `auto`          |
| `indicator-position` | 选项卡激活指示器的位置，可选值为 `normal` `reverse`  | _string_ | `normal`     |
#### Tab Props

| 参数       | 说明           | 类型               | 默认值  |
| ---------- | -------------- | ------------------ | ------- |
| `name`     | 选项卡的名字   | _string \| number_ | `-` |
| `disabled` | 是否禁用选项卡 | _boolean_          | `false` |
| `ripple`   | 是否启用水波效果 | _boolean_ | `true` |

#### TabsItems Props

| 参数             | 说明               | 类型               | 默认值  |
| ---------------- | ------------------ | ------------------ | ------- |
| `v-model:active` | 激活的选项卡的标识 | _string \| number_ | `-`     |
| `can-swipe`      | 是否允许滑动切换   | _boolean_          | `true`  |
| `animated`       | 是否启用内容切换动画 | _boolean_          | `true`  |
| `loop`           | 是否允许循环切换   | _boolean_          | `false` |

#### TabItem Props

| 参数   | 说明       | 类型               | 默认值  |
| ------ | ---------- | ------------------ | ------- |
| `name` | 视图的名字 | _string \| number_ | `-` |

### 方法

#### Tabs Methods

| 方法名            | 说明                     | 参数 | 返回值             |
|----------------|------------------------| ---- |-----------------|
| `resize`       | 产生位置大小变化时可以调用此方法重绘选项卡组 | `-`  | `-`             |
| `resizeSticky` | 产生位置大小变化时可以调用此方法重绘粘性布局 | `-`  | `Promise<void>` |

#### TabsItems Methods

| 方法名     | 说明              | 参数 | 返回值 |
| ---------- |-----------------| ---- | ------ |
| `getSwipe` | 获取 `swipe` 组件实例 | `-`  | `-`    |

### 事件

#### Tabs Events

| 事件名   | 说明                                                         | 参数                       |
| -------- | ------------------------------------------------------------ | -------------------------- |
| `click`  | 点击选项卡时触发, 在选项卡 `disabled` 状态为 `true` 时不触发 | `active: string \| number` |
| `change` | 切换选项卡时触发                                             | `active: string \| number` |

#### Tab Events

| 事件名  | 说明                                                   | 参数                                           |
| ------- | ------------------------------------------------------ | ---------------------------------------------- |
| `click` | 点击选项卡时触发, 在 `disabled` 状态为 `true` 时不触发 | `active: string \| number` <br> `event: Event` |

### 插槽

#### Tabs Slots

| 插槽名    | 说明           | 参数 |
| --------- | -------------- | ---- |
| `default` | 选项卡组的内容 | `-`  |

#### Tab Slots

| 插槽名    | 说明       | 参数 |
| --------- | ---------- | ---- |
| `default` | 选项卡内容 | `-`  |

#### TabsItems Slots

| 插槽名    | 说明         | 参数 |
| --------- | ------------ | ---- |
| `default` | 视图组的内容 | `-`  |

#### TabItem Slots

| 插槽名    | 说明       | 参数 |
| --------- | ---------- | ---- |
| `default` | 视图的内容 | `-`  |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

#### Tabs Variables

| 变量名                          | 默认值                 |
| ------------------------------- | ---------------------- |
| `--tabs-item-horizontal-height` | `44px`                 |
| `--tabs-item-vertical-height`   | `66px`                 |
| `--tabs-radius`                 | `2px`                  |
| `--tabs-padding`                | `12px`                 |
| `--tabs-indicator-size`         | `2px`                  |
| `--tabs-indicator-border-radius`         | `0`                  |
| `--tabs-indicator-background`   | `var(--color-primary)` |
| `--tabs-background`             | `#fff`                 |
| `--tabs-indicator-inner-size`             | `100%`                 |

#### Tab Variables

| 变量名                 | 默认值                       |
| ---------------------- | ---------------------------- |
| `--tab-padding`        | `12px`                       |
| `--tab-active-color`   | `var(--color-primary)`       |
| `--tab-inactive-color` | `#646566`                    |
| `--tab-disabled-color` | `var(--color-text-disabled)` |
| `--tab-font-size`      | `var(--font-size-md)`        |
| `--tab-font-weight`    | `400`                        |
| `--tab-active-font-size`      | `var(--font-size-md)`        |
| `--tab-active-font-weight`    | `400`                        |
