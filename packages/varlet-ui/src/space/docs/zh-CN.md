# Space 间隔

### 介绍

组件库提供了`<var-space>`布局的组件，使您更有效率的进行flex布局。

### 引入

```js
import { createApp } from 'vue'
import { Space } from '@varlet/ui'

createApp().use(Space)
```

### 基本用法

```html
<var-space>
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
</var-space>
```

### 垂直

```html
<var-space direction="column">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
</var-space>
```

### 间隙

```html
<var-space :size="['30px','10px']">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
</var-space>
```

### 靠右

```html
<var-space justify="end" >
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
</var-space>
```

## API

### 属性

### Space Props

|     参数      |      说明     |     类型    |    默认值    |
| ------------- | ------------ | ---------- | ----------- |
|    `align`   |   垂直排列方式 可选值为`stretch` `center` `start` `end` `baseline` | _string_   |   `-`|
|`justify`|水平排列方式 可选值为`start` `end` `center` `space-around` `space-between`|_string_|`start`|
|     `size`   |   间距，可选值为`mini` `small` `normal` `large`或`[垂直间距, 水平间距]`(支持长度单位)| _string_\|_number_\|[_string_\|_number_,_string_\|_number_]|`normal`|
|`wrap`|是否超出换行|_boolean_|`true`|
|`direction`|布局方向 可选值为`row` `column`|_string_|`row`|
|`inline`|是否为行内元素|_boolean_|`false`|


### 样式变量

以下为组件使用的css变量,可以使用[StyleProvider组件](#/zh-CN/style-provider)进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--space-mini-margin`|`4px`|
| `--space-small-margin`|`4px 6px`|
| `--space-normal-margin`|`8px 12px`|
| `--space-large-margin`|`12px 20px`|

