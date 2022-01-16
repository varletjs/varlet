# Space 间隔

### 介绍

组件库提供了 `<var-space>` 布局的组件，使您更有效率的进行flex布局。

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
<var-space direction="column" size="large">
  <var-button>Button1</var-button>
  <var-button>Button2</var-button>
  <var-button>Button3</var-button>
</var-space>
```

### 间隙

```html
<var-space :size="[20, 20]">
  <var-button>Button1</var-button>
  <var-button>Button2</var-button>
  <var-button>Button3</var-button>
  <var-button>Button4</var-button>
  <var-button>Button5</var-button>
  <var-button>Button6</var-button>
</var-space>
```

### 靠右

```html
<var-space justify="end" >
  <var-button>Button1</var-button>
  <var-button>Button2</var-button>
</var-space>
```

### 环绕

```html
<var-space justify="space-around">
  <var-button>Button1</var-button>
  <var-button>Button2</var-button>
</var-space>
```

### 居中

```html
<var-space justify="center">
  <var-button>Button1</var-button>
  <var-button>Button2</var-button>
</var-space>
```

### 两端对齐

```html
<var-space justify="space-between">
  <var-button>Button1</var-button>
  <var-button>Button2</var-button>
</var-space>
```


## API

### 属性

|     参数      |      说明     |     类型   |    默认值  |
| ------------- | ------------ | --------- | --------- |
|    `align`   |   垂直排列方式 可选值为 `stretch` `center` `start` `end` `baseline` | _string_  |   `-`|
|`justify`|水平排列方式 可选值为 `start` `end` `center` `space-around` `space-between`|_string_|`start`|
|     `size`   |   间距，可选值为 `mini` `small` `normal` `large` 或 `[垂直间距, 水平间距]` (支持长度单位)| _string \| number \| [string \| number, string \| number]_ |`normal`|
|`wrap`|是否超出换行|_boolean_|`true`|
|`direction`|布局方向 可选值为 `row` `column`|_string_|`row`|
|`inline`|是否为行内元素|_boolean_|`false`|


### 插槽

| 插槽名 | 说明       | 参数 |
| --- |----------| --- |
| `default` | Space 内容 | `-` |
