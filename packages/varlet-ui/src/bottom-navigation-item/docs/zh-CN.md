## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| `name` | 标签名称，作为匹配的标识符 | _string_ | `-` |
| `icon` | 图标名称，等同于 Icon 组件的 [name 属性](/#/zh-CN/icon) | _string_ | `-` |
| `label` | 标签文字内容 | _string_ | - |
| `namespace` | 图标的命名空间, 可扩展自定义图标库，等同于 Icon 组件的 [namespace 属性](/#/zh-CN/icon) | _string_ | `var-icon` |
| `badge` | 图标右上角徽标 | _boolean \| BadgeProps_ | `false` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| `click` | 点击时触发 | `active: number \| string` |

### 插槽

| 名称 | 说明 | 参数 |
| ---- | ---- | ----|
| `default` | 自定义标签文字内容，会覆盖 `label` 的内容  | `-` |
| `icon` | 自定义图标 | `active: boolean` |