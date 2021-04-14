# 图标

### 介绍
基于字体的图标库, 也支持网络图片。
字体图标来自 [Material Design Icon](https://materialdesignicons.com/)

### 引入

```js
import { createApp } from 'vue'
import { Icon } from '@varlet/ui'

createApp().use(Icon)
```

### 图标尺寸

```html
<var-icon name="checkbox-marked-circle" />
<var-icon name="checkbox-marked-circle" :size="26"/>
```

### 图标颜色

```html
<var-icon name="checkbox-marked-circle" color="#2979ff" />
<var-icon name="checkbox-marked-circle" color="#2979ff" :size="26"/>
```

### 使用图片

当传入的`name`是一个网络地址时,将会使用`img`标签以`cover`模式显示。`size`为图片的宽高。

```html
<var-icon name="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="32" />
```

### 注册事件

```html
<var-icon 
  name="checkbox-marked-circle"
  color="#2979ff"
  @click="() => Snackbar.success('点击成功')" 
/>
```

```js
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    return { Snackbar }
  }
}
```

### 图标切换动画

当设置了`transition(ms)`并通过图标的`name`切换图标时, 可以触发切换动画。

```html
<var-icon 
  color="#2979ff"
  :name="name" 
  :transition="300" 
  :size="30" 
  @click="toggle"
/>
```

```js
export default {
  setup() {
    const name = ref('information')
    
    const toggle = () => {
      name.value = name.value === 'information' 
        ? 'checkbox-marked-circle' 
        : 'information'
    }
    
    return {
      name,
      toggle
    }
  }
}
```

### 自定义图标库
首先您需要设置您自己的字体，并引入到您的项目。
这里假设扩展一个名为`my-icons`的字体。

```css
/* 设置字体 */
@font-face {
  font-family: "my-icons";
  src: url("https://xxx.my-icons.eot");
  src: url("https://xxx.my-icons.eot") format("embedded-opentype"), 
    url("https://xxx.my-icons.woff2") format("woff2"), 
    url("https://xxx.my-icons.woff") format("woff"), 
    url("https://xxx.my-icons.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

/* 字体样式 */
.my-icon--set,
.my-icon--set::before {
  position: relative;
  display: inline-block;
  font: normal normal normal 14px/1 "my-icons";
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

/* 字体名称映射码点 */
.my-icon-hot::before {
  content: "\F000";
}
```

到这里你就成功的扩展了自己的图标库，`my-icon`就是你的字体`命名空间(namespace)`，您可以这样使用

```html
<var-icon namespace="my-icon" name="hot" />
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `name` | 图标名称 | _string_ | `-` |
| `size` | 尺寸(px, rem, %) | _string \| number_ | `-` |
| `color` | 图标颜色, 只适用于字体图标 | _string_ | `-` |  
| `namespace` | 图标的命名空间, 可扩展自定义图标库 |  _string_ | `var-icon` |
| `transition` | 过渡动画时间(毫秒) |  _string \| number_ | `0` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击图标时触发 | `event: Event` |

### 主题变量
#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

| 变量名 | 默认值 |
| --- | --- |
| `@icon-size` | `20px` |