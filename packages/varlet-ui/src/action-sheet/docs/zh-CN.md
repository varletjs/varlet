# 动作面板

### 介绍

弹出一个动作面板提供用户选择选项的能力。
`ActionSheet` 提供了函数式和组件式两种使用方式，两种使用效果和参数并没有本质区别。
函数返回一个 `Promise`，选择时返回 `当前选择的 action`，点击遮罩层关闭返回 `close`。

## 函数调用

### 基本使用

```html
<script setup>
import { Snackbar, ActionSheet } from '@varlet/ui'

async function createBasic() {
  const action = await ActionSheet({ 
    actions: [
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
      },
    ] 
  })
  
  action !== 'close' && Snackbar(`${action.name}`)
}
</script>

<template>
  <var-button type="primary" block @click="createBasic">基本使用</var-button>
</template>
```

### 修改标题

```html
<script setup>
import { Snackbar, ActionSheet } from '@varlet/ui'

async function handleSelect(){
  const action = await ActionSheet({ 
    actions: [
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
      },
    ],
    title: '选择一个你喜欢的吧' 
  })
  
  action !== 'close' && Snackbar(`${action.name}`)
}
</script>

<template>
  <var-button type="primary" block @click="handleSelect">修改标题</var-button>
</template>
```

### 禁用选项

选项传入 `disabled` 可以使选项处于禁用状态。

```html
<script setup>
import { Snackbar, ActionSheet } from '@varlet/ui'

async function handleSelect() {
  const action = await ActionSheet({ 
    actions: [
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
        disabled: true,
      },
    ] 
  })
  
  action !== 'close' && Snackbar(`${action.name}`)
}
</script>

<template>
  <var-button type="primary" block @click="handleSelect">禁用选项</var-button>
</template>
```

### 禁用点击选项时关闭动作面板

方法传入 `closeOnClickAction` 可以禁用在选择选项时 `ActionSheet` 自动关闭的行为，用户可以多次选择，
由于 `Promise` 只会被 `resolve` 一次，所以推荐使用 `onSelect` 监听用户选择行为。

```html
<script setup>
import { Snackbar, ActionSheet } from '@varlet/ui'

async function handleSelect(){
  await ActionSheet({ 
    actions: [
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
      },
    ], 
    closeOnClickAction: false,
    onSelect: action => Snackbar(`您选择的是:${action.name}`), 
  })
}
</script>

<template>
  <var-button type="primary" block @click="handleSelect">禁用关闭动作面板</var-button>
</template>
```

### 自定义选项样式

选项提供了可以配置样式的参数，具体选项的参数可选项见 `Action 的数据结构`。

```html
<script setup>
import { Snackbar, ActionSheet } from '@varlet/ui'

async function handleSelect() {
  const action = await ActionSheet({ 
    actions: [
      {
        name: 'Item 01',
        icon: 'account-circle',
        color: '#00c48f',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
        color: '#ff9800',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
        color: '#00afef',
      },
    ] 
  })
  
  action !== 'close' && Snackbar(`${action.name}`)
}
</script>

<template>
  <var-button type="primary" block @click="handleSelect">自定义选项样式</var-button>
</template>
```

## 组件调用

### 基本使用

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const show = ref(false)
const actions = ref([
  {
    name: 'Item 01',
    icon: 'account-circle',
  },
  {
    name: 'Item 02',
    icon: 'notebook',
  },
  {
    name: 'Item 03',
    icon: 'wifi',
  },
])

function handleSelect(action){
  Snackbar(`${action.name}`)
}
</script>

<template>
  <var-button type="warning" block @click="show = true">基本使用</var-button>
  <var-action-sheet 
    :actions="actions"
    v-model:show="show"
    @select="handleSelect"
  />
</template>
```

### 修改标题

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const show = ref(false)
const actions = ref([
  {
    name: 'Item 01',
    icon: 'account-circle',
  },
  {
    name: 'Item 02',
    icon: 'notebook',
  },
  {
    name: 'Item 03',
    icon: 'wifi',
  },
])

function handleSelect(action){
  Snackbar(`${action.name}`)
}
</script>

<template>
  <var-button type="warning" block @click="show = true">修改标题</var-button>
  <var-action-sheet 
    title="选择一个你喜欢的吧"
    :actions="actions"
    v-model:show="show"
    @select="handleSelect"
  />
</template>
```

### 禁用选项

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const show = ref(false)
const actions = ref([
  {
    name: 'Item 01',
    icon: 'account-circle',
  },
  {
    name: 'Item 02',
    icon: 'notebook',
  },
  {
    name: 'Item 03',
    icon: 'wifi',
    disabled: true,
  },
])

function handleSelect(action) {
  Snackbar(`${action.name}`)
}
</script>

<template>
  <var-button type="warning" block @click="show = true">禁用选项</var-button>
  <var-action-sheet 
    :actions="actions"
    v-model:show="show"
    @select="handleSelect"
  />
</template>
```

### 禁用点击选项时关闭动作面板

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const show = ref(false)
const actions = ref([
  {
    name: 'Item 01',
    icon: 'account-circle',
  },
  {
    name: 'Item 02',
    icon: 'notebook',
  },
  {
    name: 'Item 03',
    icon: 'wifi',
  },
])

function handleSelect(action) {
  Snackbar(`${action.name}`)
}
</script>

<template>
  <var-button type="warning" block @click="show = true">禁用点击选项时关闭动作面板</var-button>
  <var-action-sheet 
    :close-on-click-action="false"
    :actions="actions" 
    v-model:show="show" 
    @select="handleSelect"
  />
</template>
```

### 自定义选项样式

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const show = ref(false)
const actions = ref([
  {
    name: 'Item 01',
    icon: 'account-circle',
    color: '#00c48f',
  },
  {
    name: 'Item 02',
    icon: 'notebook',
    color: '#ff9800',
  },
  {
    name: 'Item 03',
    icon: 'wifi',
    color: '#00afef',
  },
])

function handleSelect(action) {
  Snackbar(`${action.name}`)
}
</script>

<template>
  <var-button type="warning" block @click="show = true">自定义选项样式</var-button>
  <var-action-sheet 
    :actions="actions" 
    v-model:show="show" 
    @select="handleSelect"
  />
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model:show` | 是否显示动作面板 | _boolean_ | `false` |
| `actions` | 选项列表 | _Actions_ | `[]` |
| `title` | 动作面板标题 | _string_ | `请选择` |
| `overlay` | 是否显示遮罩层 | _boolean_ | `true` |
| `overlay-class` | 自定义遮罩层的 class | _string_ | `-` |
| `overlay-style` | 自定义遮罩层的 style | _object_ | `-` |
| `lock-scroll` | 是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动 | _boolean_ | `true` |
| `close-on-click-action` | 是否点击选项时关闭动作面板 | _boolean_ | `true` |
| `close-on-click-overlay` | 是否点击遮罩层关闭动作面板 | _boolean_ | `true` |
| `teleport` | 动作面板挂载的位置 | _TeleportProps['to']_ | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `select` | 选择选项时出发 | `action: Action` |
| `open` | 打开动作面板时触发 | `-` |
| `opened` | 打开动作面板动画结束时触发 | `-` |
| `close` | 关闭动作面板时触发 | `-` |
| `closed` | 关闭动作面板动画结束时触发 | `-` |
| `click-overlay` | 点击遮罩层时触发 | `-` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `ActionSheet` | 显示动作面板 | _options_ | `-` |
| `ActionSheet.setDefaultOptions` | 设置默认的选项配置 | _options_ | `-` |
| `ActionSheet.resetDefaultOptions` | 重置默认的选项配置 | _-_ | `-` |
| `ActionSheet.close` | 关闭动作面板 | _-_ | `-` |

### ActionSheet Options

#### 函数式调用时传入的选项

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actions` | 选项列表 | _Actions_ | `[]` |
| `title` | 动作面板标题 | _string_ | `请选择` |
| `overlay` | 是否显示遮罩层 | _boolean_ | `true` |
| `overlayClass` | 自定义遮罩层的 class | _string_ | `-` |
| `overlayStyle` | 自定义遮罩层的 style | _object_ | `-` |
| `lockScroll` | 是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动 | _boolean_ | `true` |
| `closeOnClickOverlay` | 是否点击遮罩层关闭弹出层 | _boolean_ | `true` |
| `onOpen` | 动作面板开启回调 | _() => void_ | `-` |
| `onOpened` | 动作面板开启动画结束回调 | _() => void_ | `-` |
| `onClose` | 动作面板关闭回调 | _() => void_ | `-` |
| `onClosed` |动作面板关闭动画结束回调 | _() => void_ | `-` |
| `onSelect` | 选项选择时回调 | _(action: Action) => void_ | `-` |
| `onClickOverlay` | 遮罩层点击回调 | _() => void_ | `-` |

### ActionSheet Action

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 选项名称 | _string_ | `-` |
| `color` | 选项文字颜色 | _string_ | `-` |
| `icon` | icon 图标，支持网络图片地址 | _string_ | `-` |
| `iconSize` | 图标尺寸 | _string_ | `-` |
| `className` | 选项附加类名 | _string_ | `-` |
| `disabled` | 是否禁用选项 | _boolean_ | `false` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `actions` | 选项列表 | `-` |
| `title` | 动作面板标题 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--action-sheet-border-radius` | `2px` |
| `--action-sheet-background` | `#fff` |
| `--action-sheet-title-color` | `#888` |
| `--action-sheet-title-padding` | `10px 16px` |
| `--action-sheet-title-font-size` | `14px` |
| `--action-sheet-action-item-height` | `48px` |
| `--action-sheet-action-item-padding` | `0px 18px` |
| `--action-sheet-action-item-color` | `#333` |
| `--action-sheet-action-item-disabled-color` | `var(--color-text-disabled)` |
| `--action-sheet-icon-margin` | `0 0 20px 0` |
| `--action-sheet-icon-size` | `24px` |
