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
<var-divider />
<var-divider inset />
<var-divider :inset="24" />
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
<var-divider>文字描述</var-divider>
```

## API

### 属性
| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| inset | 缩进，允许设置数字来制定缩进距离，当传递`true`时默认缩进距离72px | boolean/number | false |
| vertical | 是否垂直 | boolean | false |
