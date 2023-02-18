# 文本省略

### 介绍

主要用于省略单行文字和多行文字。

### 单行省略

```html
<template>
  <var-ellipsis style="max-width: 170px">
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  </var-ellipsis>
</template>
```

### 多行省略

```html
<template>
  <var-ellipsis style="max-width: 170px" :line-clamp="3">
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  </var-ellipsis>
</template>
```

### 点击文字展开

```html
<template>
  <var-ellipsis 
    style="max-width: 170px" 
    expand-trigger="click" 
    :line-clamp="3" 
    :tooltip="false"
  >
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  </var-ellipsis>
</template>
```

### 自定义 Tooltip

```html
<template>
  <var-ellipsis style="max-width: 170px" :tooltip="{ type: 'primary', sameWidth: false }">
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。

    <template #tooltip-content>
      <var-icon name="github" />
    </template>
  </var-ellipsis>
</template>
```

## API

### 属性

| 参数  | 说明   | 类型  | 默认值 |
|-------|------|----|----|
| `expand-trigger` | 展开触发方式，可选值 `click` | _string_  | `-` |
| `line-clamp` | 最大显示行数，兼容性见 [line-clamp](https://caniuse.com/?search=line-clamp) | _string_  | `-` |
| `tooltip` | Tooltip 组件配置，用于深度定制。为了更方便使用，`sameWidth` 在这里默认为 `true` | _boolean \| TooltipProps_  | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 文字内容 | `-` |
| `tooltip-content` | Tooltip 的内容 | `-` |