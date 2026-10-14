# 漫游引导

### 介绍

通过分步说明和目标高亮，引导用户认识页面中的主要功能。卡片复用 Dialog 的主题变量和 Button 的样式，支持 Material Design 2、Material Design 3 和深色主题。

### 基本使用

通过 `v-model:show` 控制显示，`steps` 配置各步骤。`target` 支持 CSS 选择器、HTML 元素和返回 HTML 元素的函数。通过 `v-model:current` 获取当前步骤，索引从 `0` 开始。

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
const current = ref(0)
const steps = [
  { target: '#create-project', title: '创建项目', description: '在这里新建项目，邀请同事一起协作。' },
  { target: '#project-list', title: '查看项目', description: '这里会显示项目的最新动态。', placement: 'top' },
]

function start() {
  current.value = 0
  show.value = true
}
</script>

<template>
  <var-button type="primary" @click="start">开始引导</var-button>
  <var-button id="create-project">新建项目</var-button>
  <div id="project-list">项目列表</div>
  <var-tour v-model:show="show" v-model:current="current" :steps="steps" />
</template>
```

### 目标和定位

默认在目标下方显示卡片，空间不足时自动翻转，并保持卡片位于视口内。可以设置全局 `placement` 或每一步的 `placement`。
组件会在切换步骤时将视口外的目标滚动到可见区域，设置 `:scroll-into-view="false"` 可以关闭自动滚动。页面和嵌套滚动容器的滚动、窗口或目标尺寸变化会更新定位。

不设置 `target`，或目标不存在、已隐藏、已移除、完全位于视口外时，卡片居中显示，不绘制高亮。这样可以配置欢迎页或结束页。选择器无效时也会使用居中卡片。

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
const target = ref(null)
const steps = [
  { title: '欢迎', description: '用两步熟悉工作台。' },
  { target: () => target.value, title: '搜索', description: '通过名称查找项目。' },
]
</script>

<template>
  <div ref="target">搜索区域</div>
  <var-tour v-model:show="show" :steps="steps" />
</template>
```

目标函数可以读取响应式元素 ref。对异步出现的选择器目标，或仅位置发生变化而没有滚动、尺寸变化的布局，请在 `nextTick()` 后调用 `resize()`。组件不会负责加载页面、切换路由或保存用户是否完成引导；这些行为由业务代码处理。

### 高亮和交互

`gap` 设置目标周围的留白，`gap-radius` 设置高亮圆角。默认遮罩阻止页面操作，高亮区域也不可点击。设置 `allow-target-interaction` 后，高亮目标可以操作；设置 `:overlay="false"` 可以保留卡片和高亮而隐藏遮罩。

```html
<var-tour
  v-model:show="show"
  :steps="steps"
  :gap="12"
  :gap-radius="8"
  allow-target-interaction
/>
```

默认点击遮罩不会关闭，设置 `close-on-click-overlay` 后允许关闭。按 `Escape` 或点击“跳过”关闭引导，最后一步点击“完成”会触发 `finish`，然后关闭。默认不锁定页面滚动，可通过 `lock-scroll` 开启。

### 自定义内容

使用 `title`、默认插槽和 `actions` 插槽替换标题、说明和页脚。插槽提供当前步骤、进度以及导航方法。

```html
<var-tour v-model:show="show" :steps="steps">
  <template #default="{ step }">
    <p>{{ step.description }}</p>
  </template>
  <template #actions="{ current, total, next, close }">
    <var-button text @click="close">暂时跳过</var-button>
    <var-button type="primary" @click="next">
      {{ current === total - 1 ? '开始使用' : '继续' }}
    </var-button>
  </template>
</var-tour>
```

按钮文案支持通过属性覆盖，也支持 `Locale` 和 `LocaleProvider`。自定义语言包没有 Tour 文案时，会使用全局语言包，再回退到英文。

### 键盘操作

默认遮罩模式会把焦点移到引导卡片，并将 `Tab` 和 `Shift+Tab` 限制在卡片内。关闭或卸载后，会尝试恢复触发元素的焦点。只响应最上层弹层的 `Escape`。
启用目标交互或关闭遮罩后，不限制焦点在卡片内。自定义操作插槽应使用具有明确文字或无障碍名称的按钮。

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否显示，支持 `v-model:show` | _boolean_ | `false` |
| `current` | 当前步骤索引，支持 `v-model:current`，越界值会修正到有效范围 | _number_ | `0` |
| `steps` | 引导步骤，空数组不显示引导 | _TourStep[]_ | `[]` |
| `placement` | 全局卡片位置 | _TourPlacement_ | `bottom` |
| `width` | 卡片宽度，仍受视口宽度限制 | _string \| number_ | `-` |
| `gap` | 高亮区域留白，单位 px | _number_ | `8` |
| `gap-radius` | 高亮区域圆角，单位 px | _number_ | `4` |
| `overlay` | 是否显示遮罩 | _boolean_ | `true` |
| `lock-scroll` | 是否锁定页面滚动 | _boolean_ | `false` |
| `scroll-into-view` | 切换步骤时自动滚动到目标 | _boolean_ | `true` |
| `allow-target-interaction` | 允许操作高亮区域 | _boolean_ | `false` |
| `close-on-click-overlay` | 点击遮罩时关闭 | _boolean_ | `false` |
| `close-on-key-escape` | 按 Escape 时关闭 | _boolean_ | `true` |
| `show-close` | 是否显示跳过按钮 | _boolean_ | `true` |
| `show-progress` | 是否显示步骤进度 | _boolean_ | `true` |
| `prev-button-text` | 上一步文案 | _string_ | `上一步` |
| `next-button-text` | 下一步文案 | _string_ | `下一步` |
| `finish-button-text` | 完成文案 | _string_ | `完成` |
| `close-button-text` | 跳过文案 | _string_ | `跳过` |
| `teleport` | 挂载位置，`false` 禁用传送；建议保留默认值以避免祖先变换和裁剪影响定位 | _string \| Element \| false_ | `body` |

### TourStep

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| `target` | 可选高亮目标 | _string \| HTMLElement \| (() => HTMLElement \| null \| undefined)_ |
| `title` | 标题 | _string_ |
| `description` | 说明 | _string_ |
| `placement` | 覆盖全局卡片位置 | _TourPlacement_ |

`TourPlacement` 支持 `top`、`bottom`、`left`、`right`，以及对应的 `-start` 和 `-end`，例如 `bottom-start`。

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `open` | 引导显示时触发 | `-` |
| `close` | 引导隐藏时触发 | `-` |
| `change` | 当前步骤变化时触发 | `current: number, previous: number` |
| `finish` | 点击最后一步的下一步按钮，或调用 `finish()` 时触发 | `-` |
| `click-overlay` | 点击遮罩时触发 | `event: MouseEvent` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `open` | 从指定步骤打开，默认从第一步开始 | `current?: number` | `-` |
| `close` | 关闭，不触发完成事件 | `-` | `-` |
| `next` | 下一步，最后一步则完成并关闭 | `-` | `-` |
| `prev` | 上一步，第一步不执行操作 | `-` | `-` |
| `finish` | 完成并关闭，隐藏时不执行操作 | `-` | `-` |
| `resize` | 重新解析目标并更新高亮、卡片定位 | `-` | `-` |

### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 步骤说明 | `TourSlotData` |
| `title` | 步骤标题 | `TourSlotData` |
| `actions` | 页脚，替换进度和操作按钮 | `TourSlotData` |

`TourSlotData` 包含 `step: TourStep`、`current: number`、`total: number`，以及 `next()`、`prev()`、`close()` 和 `finish()` 方法。

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--tour-width` | `320px` |
| `--tour-padding` | `20px` |
| `--tour-border-radius` | `var(--dialog-border-radius)` |
| `--tour-background` | `var(--dialog-background)` |
| `--tour-title-color` | `var(--dialog-title-color)` |
| `--tour-title-font-size` | `var(--dialog-title-font-size)` |
| `--tour-description-color` | `var(--dialog-message-color)` |
| `--tour-description-font-size` | `var(--dialog-message-font-size)` |
| `--tour-description-line-height` | `var(--dialog-message-line-height)` |
| `--tour-overlay-color` | `var(--overlay-background-color)` |
| `--tour-highlight-color` | `var(--color-primary)` |
