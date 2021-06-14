# 分割线

### 介绍
用于分隔列表或布局的各个部分。

### 引入

```js
import { createApp } from 'vue'
import { Divider } from '@varlet/ui'

createApp().use(Divider)
```

### 基本使用
```js
<var-divider />
```

### 虚线
```js
<var-divider dashed />
```

### 缩进
```js
<var-divider inset />
<var-divider :inset="36" margin="36px 0" />
<var-divider inset="-36px" />
```

### 垂直分割线
```js
<span>文字</span>
<var-divider vertical />
<span>文字</span>
<var-divider vertical />
<span>文字</span>
```

### 带有文字描述的分割线
```js
<var-divider description="文字描述" />
```

### 自定义
```js
<var-divider>
  <var-icon name="heart-outline" style="margin: 0 16px; color: rgb(41, 121, 255);" />
</var-divider>
```

## API

### 属性
| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| inset | 设置缩进距离，正负号可控制缩进方向。当传递`true`时默认缩进为`72px` | _boolean \| number \| string_ | `false` |
| vertical | 是否垂直 | _boolean_ | `false` |
| dashed | 虚线 | _boolean_ | `false` |
| description | 分割线的文字描述 | _string_ | `-` |
| margin | 设置分割线样式的`margin`属性 | _string_ | `-` |

### 插槽
| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 自定义分割线文字描述内容 | `-` |

### 主题变量

#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

| 变量名 | 默认值 |
| --- | --- |
| `@divider-color` | `#bcc2cb` |
| `@divider-text-color` | `#888`|
| `@divider-text-margin` | `8px`|
| `@divider-inset` |  `72px`|
| `@divider-vertical-inset` | `8px`|