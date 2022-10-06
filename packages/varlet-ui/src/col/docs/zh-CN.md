## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `span` | 列占据的栅格数 | _number \| string_ | `24` |
| `offset` | 列偏移的栅格数 | _number \| string_ | `0` |
| `direction` | 布局方向 可选值为 row column |  _string_ | `row` |
| `xs`     | `<768px` 响应式栅格数或者栅格属性对象  | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-` |
| `sm`     | `≥768px` 响应式栅格数或者栅格属性对象  | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-` |
| `md`     | `≥992px` 响应式栅格数或者栅格属性对象  | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-` |
| `lg`     | `≥1200px` 响应式栅格数或者栅格属性对象 | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-` |
| `xl`     | `≥1920px` 响应式栅格数或者栅格属性对象 | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击 Col 时触发 | `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | Col 内容 | `-` |