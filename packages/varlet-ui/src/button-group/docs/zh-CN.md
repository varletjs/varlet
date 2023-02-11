# 按钮组

### 介绍

按钮组组件，用于组合按钮。

### 基本按钮组

```html
<template>
  <var-button-group>
    <var-button>按钮1</var-button>
    <var-button>按钮2</var-button>
    <var-button>按钮3</var-button>
  </var-button-group>
</template>
```

## API

### 属性

| 参数         | 说明                                                              | 类型        | 默认值       |
|------------|-----------------------------------------------------------------|-----------|-----------|
| `type`     | 类型，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_  | `default` |
| `size`     | 尺寸，可选值为 `normal` `mini` `small` `large`                         | _string_  | `normal`  |
| `mode`     | 模式，可选值为 `text` `outline`                                        | _string_  | `-`       |
| `vertical` | 是否竖直排列                                                          | _boolean_ | `false`   |
| `color`    | 背景颜色                                                            | _string_  | `-`       |
