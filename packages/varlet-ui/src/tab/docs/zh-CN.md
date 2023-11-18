## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `name` | 选项卡的名字 | _string \| number_ | `-` |
| `disabled` | 是否禁用选项卡 | _boolean_ | `false` |
| `ripple`   | 是否启用水波效果 | _boolean_ | `true` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击选项卡时触发, 在 `disabled` 状态为 `true` 时不触发 | `active: string | number, event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 选项卡内容 | `-` |