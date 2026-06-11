### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| `name` | 导航项名称，作为匹配的标识符，未设置时使用索引值 | _number \| string_ | `-` |
| `label` | 标签文字内容 | _string_ | `-` |
| `icon` | 图标名称，等同于 Icon 组件的 [name 属性](/#/zh-CN/icon) | _string_ | `-` |
| `namespace` | 图标的命名空间，等同于 Icon 组件的 [namespace 属性](/#/zh-CN/icon) | _string_ | `var-icon` |
| `badge` | 图标右上角徽标，等同于 Badge 组件的属性 | _boolean \| BadgeProps_ | `false` |
| `disabled` | 是否禁用当前导航项 | _boolean_ | `false` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| `click` | 点击时触发 | `name: number \| string` |
| `mouseenter` | 鼠标移入时触发 | `name: number \| string` |
| `mouseleave` | 鼠标移出时触发 | `name: number \| string` |

### 插槽

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| `default` | 自定义标签内容，会覆盖 `label` 的内容 | `active: boolean` |
| `icon` | 自定义图标 | `active: boolean` |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--rail-navigation-item-height` | `64px` |
| `--rail-navigation-item-padding` | `6px 4px` |
| `--rail-navigation-item-indicator-width` | `56px` |
| `--rail-navigation-item-indicator-height` | `32px` |
| `--rail-navigation-item-indicator-hover-background` | `transparent` |
| `--rail-navigation-item-indicator-pressed-background` | `transparent` |
| `--rail-navigation-item-indicator-active-background` | `transparent` |
| `--rail-navigation-item-inactive-text-color` | `var(--color-on-surface-variant)` |
| `--rail-navigation-item-active-text-color` | `var(--color-primary)` |
| `--rail-navigation-item-disabled-opacity` | `var(--opacity-disabled)` |
| `--rail-navigation-item-icon-size` | `24px` |
| `--rail-navigation-item-label-font-size` | `var(--font-size-sm)` |
| `--rail-navigation-item-label-line-height` | `1.5` |
