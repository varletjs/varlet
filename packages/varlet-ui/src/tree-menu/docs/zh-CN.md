# TreeMenu 树形菜单

### 介绍

展示带有激活状态和展开状态的递归导航菜单。

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const active = ref('overview')
const options = ref([
  {
    value: 'overview',
    label: '概览',
    icon: 'home',
  },
  {
    value: 'workspace',
    label: '工作台',
    icon: 'notebook',
    children: [
      {
        value: 'projects',
        label: '项目',
        icon: 'star',
      },
      {
        value: 'tasks',
        label: '任务',
        icon: 'check',
      },
    ],
  },
  {
    value: 'settings',
    label: '设置',
    icon: 'cog',
    children: [
      {
        value: 'profile',
        label: '个人资料',
        icon: 'account-circle',
      },
      {
        value: 'security',
        label: '安全',
        icon: 'warning',
      },
    ],
  },
])
</script>

<template>
  <var-tree-menu v-model:active="active" :options="options" />
</template>
```

### 手风琴

```html
<script setup>
import { ref } from 'vue'

const active = ref('projects')
const options = ref([
  {
    value: 'overview',
    label: '概览',
    icon: 'home',
  },
  {
    value: 'workspace',
    label: '工作台',
    icon: 'notebook',
    children: [
      { value: 'projects', label: '项目', icon: 'star' },
      { value: 'tasks', label: '任务', icon: 'check' },
    ],
  },
  {
    value: 'settings',
    label: '设置',
    icon: 'cog',
    children: [
      { value: 'profile', label: '个人资料', icon: 'account-circle' },
      { value: 'security', label: '安全', icon: 'warning' },
    ],
  },
])
</script>

<template>
  <var-tree-menu v-model:active="active" :options="options" accordion />
</template>
```

### 菜单分组

```html
<script setup>
import { ref } from 'vue'

const active = ref('overview')
const options = ref([
  {
    type: 'group',
    value: 'main',
    label: '主要',
    children: [
      { value: 'overview', label: '概览', icon: 'home' },
      { value: 'workspace', label: '工作台', icon: 'notebook' },
    ],
  },
  {
    type: 'divider',
    value: 'main-divider',
  },
  {
    type: 'group',
    value: 'management',
    label: '管理',
    children: [
      { value: 'settings', label: '设置', icon: 'cog' },
      { value: 'security', label: '安全', icon: 'warning' },
    ],
  },
])
</script>

<template>
  <var-tree-menu v-model:active="active" :options="options" />
</template>
```

### 字段映射

```html
<script setup>
import { ref } from 'vue'

const active = ref('users')
const options = ref([
  {
    key: 'system',
    title: '系统',
    iconName: 'cog',
    items: [
      { key: 'users', title: '用户', iconName: 'account-circle' },
      { key: 'roles', title: '角色', iconName: 'information' },
    ],
  },
])
</script>

<template>
  <var-tree-menu
    v-model:active="active"
    :options="options"
    value-key="key"
    label-key="title"
    icon-key="iconName"
    children-key="items"
  />
</template>
```

### 禁用

```html
<script setup>
import { ref } from 'vue'

const active = ref('profile')
const options = ref([
  {
    value: 'settings',
    label: '设置',
    icon: 'cog',
    children: [
      { value: 'profile', label: '个人资料', icon: 'account-circle' },
      { value: 'security', label: '安全', icon: 'warning', disabled: true },
    ],
  },
  {
    value: 'archived',
    label: '归档',
    icon: 'delete',
    disabled: true,
  },
])
</script>

<template>
  <var-tree-menu v-model:active="active" :options="options" />
</template>
```

### 插槽

```html
<script setup>
import { ref } from 'vue'

const active = ref('overview')
const options = ref([
  {
    value: 'overview',
    label: '概览',
    icon: 'home',
  },
  {
    value: 'workspace',
    label: '工作台',
    icon: 'notebook',
    children: [
      { value: 'projects', label: '项目', icon: 'star' },
      { value: 'tasks', label: '任务', icon: 'check' },
    ],
  },
])
</script>

<template>
  <var-tree-menu v-model:active="active" :options="options">
    <template #start>
      <var-button fab type="primary">
        <var-icon name="plus" />
      </var-button>
    </template>

    <template #end>
      <var-button fab type="primary">
        <var-icon name="plus" />
      </var-button>
    </template>
  </var-tree-menu>
</template>
```

### 自定义缩进

```html
<script setup>
import { ref } from 'vue'

const active = ref('projects')
const options = ref([
  {
    value: 'overview',
    label: '概览',
    icon: 'home',
  },
  {
    value: 'workspace',
    label: '工作台',
    icon: 'notebook',
    children: [
      { value: 'projects', label: '项目', icon: 'star' },
      { value: 'tasks', label: '任务', icon: 'check' },
    ],
  },
])
</script>

<template>
  <var-tree-menu v-model:active="active" :options="options" indent="32px" />
</template>
```

### 自定义渲染

```html
<script setup>
import { Badge as VarBadge, Tooltip as VarTooltip } from '@varlet/ui'
import { h, ref } from 'vue'
import { RouterLink } from 'vue-router'

const active = ref('tooltip')
const options = ref([
  {
    value: 'workspace',
    label: '工作台',
    icon: 'notebook',
    children: [
      {
        value: 'custom-label-icon',
        label: () =>
          h('span', { style: { display: 'inline-flex', alignItems: 'center' } }, [
            '自定义文字图标',
            h(VarBadge, { style: { marginLeft: '12px' }, type: 'primary', value: 12 }),
          ]),
        icon: () => h(VarBadge, { type: 'primary', dot: true }),
      },
      {
        value: 'link',
        label: '链接菜单',
        icon: 'github',
        render: ({ node }) =>
          h(
            'a',
            {
              href: 'https://github.com/varletjs/varlet',
              target: '_blank',
              rel: 'noreferrer',
              style: { display: 'block', color: 'inherit', textDecoration: 'none' },
              onClick: (event) => event.preventDefault(),
            },
            node,
          ),
      },
      {
        value: 'tooltip',
        label: '悬浮提示',
        icon: 'check',
        render: ({ node }) =>
          h(
            VarTooltip,
            { content: '悬浮提示', placement: 'bottom', style: { display: 'block', width: '100%' } },
            { default: () => node },
          ),
      },
      {
        value: 'router-link',
        label: '路由链接',
        icon: 'bookmark',
        render: ({ node }) =>
          h(
            RouterLink,
            {
              to: '/button',
              style: { display: 'block', color: 'inherit', textDecoration: 'none' },
              onClick: (event) => event.preventDefault(),
            },
            { default: () => node },
          ),
      },
    ],
  },
])
</script>

<template>
  <var-tree-menu v-model:active="active" :options="options" />
</template>
```

### API

#### TreeMenu Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model:active` | 激活菜单项的值 | _string \| number_ | `-` |
| `options` | 菜单选项 | _TreeMenuOption[]_ | `[]` |
| `v-model:expanded-values` | 展开菜单项的值集合 | _Array<string \| number>_ | `-` |
| `value-key` | 选项值字段 | _string_ | `'value'` |
| `label-key` | 选项标签字段 | _string_ | `'label'` |
| `icon-key` | 选项图标字段 | _string_ | `'icon'` |
| `children-key` | 子选项字段 | _string_ | `'children'` |
| `accordion` | 是否只允许同级一个选项展开 | _boolean_ | `false` |
| `indent` | 每一级缩进 | _string \| number_ | `-` |
| `ripple` | 是否开启水波纹 | _boolean_ | `false` |
| `disabled` | 是否禁用整个菜单 | _boolean_ | `false` |

#### TreeMenuOption

| 字段 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 选项类型。`group` 渲染分组标题和子选项，`divider` 渲染分割线。 | _'group' \| 'divider'_ | `-` |
| `value` | 选项值 | _string \| number_ | `-` |
| `label` | 选项标签 | _string \| VNode \| ((option, active) => VNodeChild)_ | `-` |
| `icon` | 选项图标 | _string \| VNode \| ((option, active) => VNodeChild)_ | `-` |
| `render` | 自定义选项渲染 | _({ node }, option, active) => VNodeChild_ | `-` |
| `namespace` | 图标命名空间 | _string_ | `var-icon` |
| `disabled` | 是否禁用当前选项 | _boolean_ | `false` |
| `children` | 子选项 | _TreeMenuOption[]_ | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `start` | 头部内容 | `-` |
| `end` | 尾部内容 | `-` |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `change` | 激活菜单项变化时触发 | `active: string \| number, option: TreeMenuOption` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--tree-menu-background` | `var(--color-surface-container-high)` |
| `--tree-menu-item-text-color` | `var(--color-text)` |
| `--tree-menu-padding` | `8px 0` |
| `--tree-menu-item-gap` | `0px` |
| `--tree-menu-item-height` | `40px` |
| `--tree-menu-item-padding` | `0 16px` |
| `--tree-menu-item-border-radius` | `0` |
| `--tree-menu-item-indent` | `16px` |
| `--tree-menu-item-icon-size` | `22px` |
| `--tree-menu-item-icon-margin-right` | `24px` |
| `--tree-menu-item-label-font-size` | `var(--font-size-md)` |
| `--tree-menu-item-label-line-height` | `1.5` |
| `--tree-menu-group-label-height` | `32px` |
| `--tree-menu-group-label-padding` | `0 16px` |
| `--tree-menu-group-label-color` | `var(--color-on-surface-variant)` |
| `--tree-menu-group-label-font-size` | `var(--font-size-sm)` |
| `--tree-menu-divider-margin` | `8px 0` |
| `--tree-menu-divider-color` | `rgba(0, 0, 0, 0.12)` |
| `--tree-menu-item-hover-background` | `rgba(85, 85, 85, 0.08)` |
| `--tree-menu-item-pressed-background` | `rgba(85, 85, 85, 0.12)` |
| `--tree-menu-item-active-background` | `hsla(var(--hsl-primary), 0.1)` |
| `--tree-menu-item-active-text-color` | `var(--color-primary)` |
| `--tree-menu-item-disabled-opacity` | `var(--opacity-disabled)` |
| `--tree-menu-item-indicator-border-radius` | `0` |
| `--tree-menu-expand-icon-color` | `var(--color-on-surface-variant)` |
| `--tree-menu-expand-icon-size` | `20px` |
