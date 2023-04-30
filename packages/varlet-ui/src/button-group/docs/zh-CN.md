## API

### 属性

| 参数          | 说明                                                                 | 类型       | 默认值       |
|-------------|--------------------------------------------------------------------|----------|-----------|
| `type`      | 按钮组类型，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `size`      | 按钮组尺寸，可选值为 `normal` `mini` `small` `large`                         | _string_ | `normal`  |
| `mode`      | 按钮组模式，可选值为 `normal` `text` `outline`                               | _string_ | `normal`       |
| `vertical`  | 按钮组是否竖直排列                                                          | _boolean_ | `false`   |
| `elevation`      | 按钮组海拔高度，可选值为 `true`、`false` 和`0-24` 的等级 | _string \| number_ \| _boolean_ | `true`            |
| `color`     | 按钮组背景颜色                                                            | _string_ | `-`       |
| `text-color` | 按钮组文字颜色                                                            | _string_ | `-`       |

### 插槽

| 名称 | 说明    | 参数 |
| ----- |-------| -------- |
| `default` | 按钮组内容 | `-` |