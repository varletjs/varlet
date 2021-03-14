# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

### 引入

```js
import { Cell } from '@varlet/ui'

createApp().use(Cell)
```

### 基本使用

```html
<var-cell> This is Cell </var-cell>
```

### 显示Icon
```html
<var-cell icon="fire" title="This is Cell">
  <template #extra>
    <var-icon name="information" />
  </template>
</var-cell>
```

### 显示描述
```html
<var-cell title="This is Cell" desc="description" />
```

### 显示边框
```html
<var-cell border> This is Cell </var-cell>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `title	` | 单元格标题	| _string_ ｜ _number_ | - |
| `icon` | 左侧图标名称 | _string_ | - |
| `desc` | 单元格描述 | _string_ | - |
| `border` | 是否显示边框 | _boolean_ | `false` |
| `icon-class` | 图标额外类名 | _string_ | - |
| `title-class` | 标题额外类名 | _string_ | - |
| `desc-class` | 描述额外类名 | _string_ | - |
| `extra-class` | 右侧内容额外类名 | _string_ | - |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | cell的内容 | - |
| `icon` | 自定义左侧icon区域 | - |
| `desc` | 描述的内容 | - |
| `extra` | 自定义右侧区域内容 | - |
