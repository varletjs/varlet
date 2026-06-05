# 单轨导航

### 介绍

垂直排列页面级导航入口，形态参考 Material Design 3 Navigation Rail。组件通过 `v-model:active` 维护基于索引的激活状态。MD3 主题下 hover 会显示浅色状态层，激活时显示带展开动画的图标指示器；默认 MD2 主题下不显示指示器背景。

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-rail-navigation v-model:active="active">
    <var-rail-navigation-item label="首页" icon="home" />
    <var-rail-navigation-item label="搜索" icon="magnify" />
    <var-rail-navigation-item label="收藏" icon="heart" />
    <var-rail-navigation-item label="我的" icon="account-circle" />
  </var-rail-navigation>
</template>
```

### 水波效果

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-rail-navigation v-model:active="active" ripple>
    <var-rail-navigation-item label="首页" icon="home" />
    <var-rail-navigation-item label="搜索" icon="magnify" />
    <var-rail-navigation-item label="收藏" icon="heart" />
    <var-rail-navigation-item label="我的" icon="account-circle" />
  </var-rail-navigation>
</template>
```

### 通过名称匹配

```html
<script setup>
import { ref } from 'vue'

const active = ref('home')
</script>

<template>
  <var-rail-navigation v-model:active="active">
    <var-rail-navigation-item name="home" label="首页" icon="home" />
    <var-rail-navigation-item name="search" label="搜索" icon="magnify" />
    <var-rail-navigation-item name="favorite" label="收藏" icon="heart" />
    <var-rail-navigation-item name="account" label="我的" icon="account-circle" />
  </var-rail-navigation>
</template>
```

### 禁用选项

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-rail-navigation v-model:active="active">
    <var-rail-navigation-item label="首页" icon="home" />
    <var-rail-navigation-item label="搜索" icon="magnify" disabled />
    <var-rail-navigation-item label="收藏" icon="heart" />
    <var-rail-navigation-item label="我的" icon="account-circle" />
  </var-rail-navigation>
</template>
```

### 徽标提示

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-rail-navigation v-model:active="active">
    <var-rail-navigation-item label="首页" icon="home" />
    <var-rail-navigation-item label="搜索" icon="magnify" badge />
    <var-rail-navigation-item label="收藏" icon="heart" :badge="{ type: 'primary', value: 6 }" />
    <var-rail-navigation-item label="我的" icon="account-circle" />
  </var-rail-navigation>
</template>
```

### 监听切换事件

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const active = ref(0)

function handleChange(active) {
  Snackbar.info(`changed to ${active}`)
}
</script>

<template>
  <var-rail-navigation v-model:active="active" @change="handleChange">
    <var-rail-navigation-item label="首页" icon="home" />
    <var-rail-navigation-item label="搜索" icon="magnify" />
    <var-rail-navigation-item label="收藏" icon="heart" />
    <var-rail-navigation-item label="我的" icon="account-circle" />
  </var-rail-navigation>
</template>
```

### 监听点击事件

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const active = ref(0)

function handleClick(active) {
  Snackbar.success(`clicked ${active}`)
}
</script>

<template>
  <var-rail-navigation v-model:active="active">
    <var-rail-navigation-item label="首页" icon="home" @click="handleClick" />
    <var-rail-navigation-item label="搜索" icon="magnify" @click="handleClick" />
    <var-rail-navigation-item label="收藏" icon="heart" @click="handleClick" />
    <var-rail-navigation-item label="我的" icon="account-circle" @click="handleClick" />
  </var-rail-navigation>
</template>
```

### 插槽

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-rail-navigation v-model:active="active" class="rail-navigation-slots">
    <template #start>
      <var-button type="primary" fab tonal>
        <var-icon name="magnify" :size="24" />
      </var-button>
    </template>

    <var-rail-navigation-item label="首页" icon="home" />
    <var-rail-navigation-item label="收藏" icon="heart" />
    <var-rail-navigation-item label="我的" icon="account-circle" />

    <template #end>
      <var-button outline text fab round>
        <var-icon name="cog" :size="24" />
      </var-button>
    </template>
  </var-rail-navigation>
</template>

<style>
.rail-navigation-slots {
  min-height: 400px;
}

</style>
```

### 自定义导航

可通过包裹 `RailNavigationItem` 来接入 `Tooltip`、`router-link` 或 `a` 标签。

```html
<script setup>
import { ref } from 'vue'

const active = ref('tooltip')
</script>

<template>
  <var-rail-navigation v-model:active="active">
    <var-tooltip content="提示" placement="right">
      <var-rail-navigation-item name="tooltip" label="提示" icon="information" />
    </var-tooltip>

    <router-link class="rail-navigation-link" to="/button">
      <var-rail-navigation-item name="router-link" label="路由" icon="account-circle" />
    </router-link>

    <a class="rail-navigation-link" href="https://github.com/varletjs/varlet" target="_blank" rel="noreferrer">
      <var-rail-navigation-item name="anchor" label="链接" icon="github" />
    </a>
  </var-rail-navigation>
</template>

<style>
.rail-navigation-link {
  display: block;
  width: 100%;
  color: inherit;
  text-decoration: none;
}
</style>
```

## API

### 属性

#### RailNavigation Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model:active` | 激活导航项的索引或名称 | _number \| string_ | `0` |
| `ripple` | 是否开启水波纹 | _boolean_ | `false` |

#### RailNavigationItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 导航项名称，作为匹配的标识符 | _number \| string_ | `-` |
| `label` | 标签文字内容 | _string_ | `-` |
| `icon` | 图标名称，等同于 Icon 组件的 [name](#/zh-CN/icon) | _string_ | `-` |
| `namespace` | 图标的命名空间，等同于 Icon 组件的 [namespace](#/zh-CN/icon) | _string_ | `var-icon` |
| `badge` | 图标右上角徽标，等同于 Badge 组件的属性 | _boolean \| BadgeProps_ | `false` |
| `disabled` | 是否禁用当前导航项 | _boolean_ | `false` |

### 事件

#### RailNavigation Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `change` | 激活导航项变化时触发 | `active: number \| string` |

#### RailNavigationItem Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击时触发 | `active: number \| string` |

### 插槽

#### RailNavigation Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 导航项内容 | `-` |
| `start` | 顶部内容 | `-` |
| `end` | 底部内容 | `-` |

#### RailNavigationItem Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 自定义标签内容，会覆盖 `label` 的内容 | `active: boolean` |
| `icon` | 自定义图标 | `active: boolean` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

#### RailNavigation Variables

| 变量名 | 默认值 |
| --- | --- |
| `--rail-navigation-width` | `80px` |
| `--rail-navigation-background` | `var(--color-surface-container-high)` |
| `--rail-navigation-text-color` | `var(--color-on-surface-variant)` |
| `--rail-navigation-section-padding` | `12px 0` |
| `--rail-navigation-slot-padding` | `4px 0` |

#### RailNavigationItem Variables

| 变量名 | 默认值 |
| --- | --- |
| `--rail-navigation-item-height` | `64px` |
| `--rail-navigation-item-padding` | `6px 4px` |
| `--rail-navigation-item-indicator-width` | `56px` |
| `--rail-navigation-item-indicator-height` | `32px` |
| `--rail-navigation-item-indicator-hover-background` | `transparent` |
| `--rail-navigation-item-indicator-active-background` | `transparent` |
| `--rail-navigation-item-active-text-color` | `var(--color-primary)` |
| `--rail-navigation-item-disabled-opacity` | `var(--opacity-disabled)` |
| `--rail-navigation-item-icon-size` | `24px` |
| `--rail-navigation-item-label-font-size` | `var(--font-size-sm)` |
| `--rail-navigation-item-label-line-height` | `16px` |
