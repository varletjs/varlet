# TreeMenu

### Intro

Display recursive navigation menu items with active and expanded states.

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const active = ref('overview')
const options = ref([
  {
    value: 'overview',
    label: 'Overview',
    icon: 'home',
  },
  {
    value: 'workspace',
    label: 'Workspace',
    icon: 'notebook',
    children: [
      {
        value: 'projects',
        label: 'Projects',
        icon: 'star',
      },
      {
        value: 'tasks',
        label: 'Tasks',
        icon: 'check',
      },
    ],
  },
  {
    value: 'settings',
    label: 'Settings',
    icon: 'cog',
    children: [
      {
        value: 'profile',
        label: 'Profile',
        icon: 'account-circle',
      },
      {
        value: 'security',
        label: 'Security',
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

### Accordion

```html
<script setup>
import { ref } from 'vue'

const active = ref('projects')
const options = ref([
  {
    value: 'overview',
    label: 'Overview',
    icon: 'home',
  },
  {
    value: 'workspace',
    label: 'Workspace',
    icon: 'notebook',
    children: [
      { value: 'projects', label: 'Projects', icon: 'star' },
      { value: 'tasks', label: 'Tasks', icon: 'check' },
    ],
  },
  {
    value: 'settings',
    label: 'Settings',
    icon: 'cog',
    children: [
      { value: 'profile', label: 'Profile', icon: 'account-circle' },
      { value: 'security', label: 'Security', icon: 'warning' },
    ],
  },
])
</script>

<template>
  <var-tree-menu v-model:active="active" :options="options" accordion />
</template>
```

### Menu Group

```html
<script setup>
import { ref } from 'vue'

const active = ref('overview')
const options = ref([
  {
    type: 'group',
    value: 'main',
    label: 'Main',
    children: [
      { value: 'overview', label: 'Overview', icon: 'home' },
      { value: 'workspace', label: 'Workspace', icon: 'notebook' },
    ],
  },
  {
    type: 'divider',
    value: 'main-divider',
  },
  {
    type: 'group',
    value: 'management',
    label: 'Management',
    children: [
      { value: 'settings', label: 'Settings', icon: 'cog' },
      { value: 'security', label: 'Security', icon: 'warning' },
    ],
  },
])
</script>

<template>
  <var-tree-menu v-model:active="active" :options="options" />
</template>
```

### Field Keys

```html
<script setup>
import { ref } from 'vue'

const active = ref('users')
const options = ref([
  {
    key: 'system',
    title: 'System',
    iconName: 'cog',
    items: [
      { key: 'users', title: 'Users', iconName: 'account-circle' },
      { key: 'roles', title: 'Roles', iconName: 'information' },
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

### Disabled

```html
<script setup>
import { ref } from 'vue'

const active = ref('profile')
const options = ref([
  {
    value: 'settings',
    label: 'Settings',
    icon: 'cog',
    children: [
      { value: 'profile', label: 'Profile', icon: 'account-circle' },
      { value: 'security', label: 'Security', icon: 'warning', disabled: true },
    ],
  },
  {
    value: 'archived',
    label: 'Archived',
    icon: 'delete',
    disabled: true,
  },
])
</script>

<template>
  <var-tree-menu v-model:active="active" :options="options" />
</template>
```

### Slots

```html
<script setup>
import { ref } from 'vue'

const active = ref('overview')
const options = ref([
  {
    value: 'overview',
    label: 'Overview',
    icon: 'home',
  },
  {
    value: 'workspace',
    label: 'Workspace',
    icon: 'notebook',
    children: [
      { value: 'projects', label: 'Projects', icon: 'star' },
      { value: 'tasks', label: 'Tasks', icon: 'check' },
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

### Custom Indent

```html
<script setup>
import { ref } from 'vue'

const active = ref('projects')
const options = ref([
  {
    value: 'overview',
    label: 'Overview',
    icon: 'home',
  },
  {
    value: 'workspace',
    label: 'Workspace',
    icon: 'notebook',
    children: [
      { value: 'projects', label: 'Projects', icon: 'star' },
      { value: 'tasks', label: 'Tasks', icon: 'check' },
    ],
  },
])
</script>

<template>
  <var-tree-menu v-model:active="active" :options="options" indent="32px" />
</template>
```

### Custom Render

```html
<script setup>
import { Badge as VarBadge, Tooltip as VarTooltip } from '@varlet/ui'
import { h, ref } from 'vue'
import { RouterLink } from 'vue-router'

const active = ref('tooltip')
const options = ref([
  {
    value: 'workspace',
    label: 'Workspace',
    icon: 'notebook',
    children: [
      {
        value: 'custom-label-icon',
        label: () =>
          h('span', { style: { display: 'inline-flex', alignItems: 'center' } }, [
            'Custom Label Icon',
            h(VarBadge, { style: { marginLeft: '12px' }, type: 'primary', value: 12 }),
          ]),
        icon: () => h(VarBadge, { type: 'primary', dot: true }),
      },
      {
        value: 'link',
        label: 'Link Menu',
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
        label: 'Tooltip',
        icon: 'check',
        render: ({ node }) =>
          h(
            VarTooltip,
            { content: 'Tooltip', placement: 'bottom', style: { display: 'block', width: '100%' } },
            { default: () => node },
          ),
      },
      {
        value: 'router-link',
        label: 'Router Link',
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

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model:active` | Active option value | _string \| number_ | `-` |
| `options` | Menu options | _TreeMenuOption[]_ | `[]` |
| `v-model:expanded-values` | Expanded option values | _Array<string \| number>_ | `-` |
| `value-key` | Option value field | _string_ | `'value'` |
| `label-key` | Option label field | _string_ | `'label'` |
| `icon-key` | Option icon field | _string_ | `'icon'` |
| `children-key` | Option children field | _string_ | `'children'` |
| `accordion` | Whether to only allow one sibling option expanded | _boolean_ | `false` |
| `indent` | Indent per level | _string \| number_ | `-` |
| `ripple` | Whether to enable ripple | _boolean_ | `false` |
| `disabled` | Whether to disable the whole menu | _boolean_ | `false` |

#### TreeMenuOption

| Field | Description | Type | Default |
| --- | --- | --- | --- |
| `type` | Option type. `group` renders a group label and its children. `divider` renders a divider. | _'group' \| 'divider'_ | `-` |
| `value` | Option value | _string \| number_ | `-` |
| `label` | Option label | _string \| VNode \| ((option, active) => VNodeChild)_ | `-` |
| `icon` | Option icon | _string \| VNode \| ((option, active) => VNodeChild)_ | `-` |
| `render` | Custom option render | _({ node }, option, active) => VNodeChild_ | `-` |
| `namespace` | Icon namespace | _string_ | `var-icon` |
| `disabled` | Whether the option is disabled | _boolean_ | `false` |
| `children` | Child options | _TreeMenuOption[]_ | `-` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `start` | Start content | `-` |
| `end` | End content | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `change` | Triggered when active option changes | `active: string \| number, option: TreeMenuOption` |

### Style Variables

The following CSS variables are used by the component and can be customized through the [StyleProvider](#/en-US/style-provider) component.

| Variable | Default |
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
