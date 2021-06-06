# 分割线

### 介绍
用于分隔列表或布局的各个部分。

### 引入

```js
import { createApp } from 'vue'
import { Divider } from '@varlet/ui'

createApp().use(Divider)
```

### 局部引入

```js
import { Divider } from '@varlet/ui'

export default {
  components: {
    [Divider.Component.name]: Divider,
  }
}
```

### 基本使用
```js
<p>落霞与孤鹜齐飞，秋水共长天一色。</p>
<var-divider />
<p>固知一死生为虚诞，齐彭殇为妄作。</p>
```

### 缩进
```js
<var-divider inset />
<var-divider :inset="36" margin="36px 0" />
<var-divider :inset="-36" />
```

### 垂直分割线
```js
<var-button text disabled>文字</var-button>
<var-divider vertical />
<var-button text type="primary">链接</var-button>
<var-divider vertical />
<var-button text>
  <var-icon name="github" />
</var-button>
```

### 带有文字描述的分割线
```js
<var-divider description="文字描述" />
```

### 自定义
```js
<var-divider>
  <p :style="{ fontSize: '16px', padding: '0 18px', color: 'red' }">
    自定义内容与样式
  </p>
</var-divider>
```

## API

### 属性
| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| inset | 设置缩进距离，数字正负号可控制缩进方向。当传递`true`时默认缩进为`72px` | _boolean/number_ | `false` |
| vertical | 是否垂直 | _boolean_ | `false` |
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
| `@divider-vertical-inset` | `16px`|