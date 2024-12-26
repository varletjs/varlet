## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `v-model` | 绑定的值 | _any_ | `false` |
| `checked-value` | 选中状态的值 | _any_ | `true` |
| `unchecked-value` | 未选中状态的值 | _any_ | `false` |
| `checked-color` | 选中状态的颜色 | _string_ | `-` |
| `unchecked-color` | 未选中状态的颜色 | _string_ | `-` |
| `icon-size` | 图标尺寸 | _string \| number_ | `-` |
| `disabled` | 是否禁用 | _boolean_ | `false` |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `indeterminate` | 是否为不确定状态（样式优先级最高） | _boolean_ | `false` |
| `ripple` | 是否开启水波纹 | _boolean_ | `true` |
| `rules` | 验证规则，返回 `true` 表示验证通过，其它类型的值将转换为文本作为用户提示。自 `3.5.0` 开始支持 [Zod 验证](#/zh-CN/zodValidation)  | _((v: any) => any) \| ZodType \| Array<((v: any) => any) \| ZodType>_ | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击时触发 | `e: Event` |
| `change` | 状态变更时触发 | `value: any, indeterminate: boolean` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `checked-icon` | 选中图标 | `-` |
| `unchecked-icon` | 未选中图标 | `-` |
| `indeterminate-icon` | 不确定状态图标 | `-` |
| `default` | 显示的文本 | `checked: boolean` 是否选中 |