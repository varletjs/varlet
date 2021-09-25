# 单元格

### 介绍

单元格为列表中的单个展示项。

### 引入

```js
import { createApp } from 'vue'
import { Cell } from '@varlet/ui'

createApp().use(Cell)
```

### 基本使用

```html
<var-cell> 这是单元格 </var-cell>
```

### 显示图标
```html
<var-cell icon="fire" title="这是单元格">
  <template #extra>
    <var-icon name="information" />
  </template>
</var-cell>
```

### 显示描述
```html
<var-cell title="这是单元格" desc="描述" />
```

### 显示边框
```html
<var-cell border> 这是单元格 </var-cell>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `title` | 单元格标题	| _string \| number_ | `-` |
| `icon` | 左侧图标名称 | _string_ | `-` |
| `desc` | 单元格描述 | _string_ | `-` |
| `border` | 是否显示边框 | _boolean_ | `false` |
| `icon-class` | 图标额外类名 | _string_ | `-` |
| `title-class` | 标题额外类名 | _string_ | `-` |
| `desc-class` | 描述额外类名 | _string_ | `-` |
| `extra-class` | 右侧内容额外类名 | _string_ | `-` |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | cell的内容 | `-` |
| `icon` | 自定义左侧icon区域 | `-` |
| `desc` | 描述的内容 | `-` |
| `extra` | 自定义右侧区域内容 | `-` |

### 样式变量
以下为组件使用的css变量,可以使用[StyleProvider组件](#/zh-CN/style-provider)进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--cell-font-size` | `var(--font-size-md)` |
| `--cell-desc-font-size` | `var(--font-size-sm)` |
| `--cell-desc-color` | `rgba(0, 0, 0, 0.6)` |
| `--cell-padding` | `10px 12px` |
| `--cell-min-height` | `40px` |
| `--cell-border-color` | `#bcc2cb` |
| `--cell-border-left` | `12px` |
| `--cell-border-right` | `12px` |
| `--cell-icon-right` | `8px` |
| `--cell-extra-left` | `8px` |
