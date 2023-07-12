# 拖拽

### 介绍

使元素可以自由拖拽。

### 基本使用

```html
<template>
  <var-drag>
    <var-button type="primary">基本使用</var-button>
  </var-drag>
</template>
```

### 拖拽方向

```html
<template>
  <var-drag direction="x">
    <var-button type="primary">拖拽方向</var-button>
  </var-drag>
</template>
```

### 拖拽方向

```html
<template>
  <var-drag style="left: 0; top: 0" attraction="x">
    <var-button type="primary">水平吸附</var-button>
  </var-drag>
  <var-drag style="left: 100px; top: 0" attraction="y">
    <var-button type="primary">垂直吸附</var-button>
  </var-drag>
</template>
```

### 禁用

```html
<template>
  <var-drag disabled>
    <var-button type="primary">禁用</var-button>
  </var-drag>
</template>
```

### 拖拽区域

```html
<template>
  <var-drag :boundary="{ top: 80, bottom: 80, left: 80, right: 80 }"">
    <var-button type="primary">拖拽区域</var-button>
  </var-drag>
</template>
```

## API

### 属性

| 参数   | 说明  | 类型  | 默认值  |
| --------------------- | ------------- | ------ | --------------|
| `direction`  | 拖拽方向，可选值 `x`, `y`, `xy`	 | _string_ | `xy` |
| `attraction`  | 吸附方向，可选值 `x`, `y`, `xy`, `none`	 | _string_ | `none` |
| `disabled`  | 是否禁用 | _string_ | `false` |
| `boundary`  | 拖拽范围 | _{ top?: number \| string, bottom?: number \| string, left?: number \| string, right?: number \| string }_ | `{ top: 0, bottom: 0, left: 0, right: 0 }` |
| `z-index`  | 拖拽元素的层级 | _string \| number_ | `90` |
| `teleport`  | 拖拽元素挂载的位置 | _TeleportProps['to']_ | `body` |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | 拖拽元素的内容 | `-` |