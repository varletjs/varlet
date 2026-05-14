## API

### 属性

`SegmentedButton` 必须作为 `SegmentedButtons` 的子组件使用。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `checked-value` | 当前按钮对应的值 | _any_ | `true` |
| `disabled` | 是否禁用当前按钮 | _boolean_ | `false` |
| `readonly` | 是否将当前按钮设为只读 | _boolean_ | `false` |
| `ripple` | 是否为当前按钮开启水波纹效果 | _boolean_ | `-` |
| `checkmark` | 当前按钮在选中时是否显示勾选图标 | _boolean_ | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `checkmark` | 自定义勾选图标内容 | `-` |
| `default` | 按钮内容 | `-` |
