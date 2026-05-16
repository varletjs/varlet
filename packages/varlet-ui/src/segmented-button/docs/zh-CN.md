## API

### 属性

`SegmentedButton` 必须作为 `SegmentedButtons` 的子组件使用。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `checked-value` | 当前按钮对应的值 | _any_ | `-` |
| `disabled` | 是否禁用当前按钮 | _boolean_ | `false` |
| `readonly` | 是否将当前按钮设为只读 | _boolean_ | `false` |
| `ripple` | 是否为当前按钮开启水波纹效果 | _boolean_ | `true` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击分段按钮时触发 | `e: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `checkmark` | 分段按钮在选中时显示的自定义勾选图标内容 | `checked: boolean` |
| `default` | 分段按钮的文字或标签内容 | `checked: boolean` |
