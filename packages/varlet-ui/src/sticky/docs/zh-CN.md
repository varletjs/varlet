# 粘性布局

### 介绍

粘性布局默认使用监听容器滚动事件的 `scroll` 模式，如有需要可以切换成基于 `css sticky` 的模式来提升性能。

### 基本使用

```html
<template>
  <div class="sticky-example">
    <var-sticky :offset-top="54">
      <var-button type="primary">基本使用</var-button>
    </var-sticky>
  </div>
</template>

<style>
.sticky-example {
  min-height: 200vh;
}
</style>
```

### 局部吸顶

```html
<template>
  <div class="sticky-example">
    <div class="sticky-example-scroller">
      <var-sticky>
        <var-button type="success">局部吸顶</var-button>
      </var-sticky>
      <div class="sticky-example-block"></div>
    </div>
  </div>
</template>

<style>
.sticky-example {
  min-height: 200vh;
}

.sticky-example-scroller {
  height: 200px;
  padding-top: 100px;
  overflow: auto;
  background: #2979ff;
}

.sticky-example-block {
  width: 100%;
  height: 600px;
  background: #2979ff;
  opacity: .5;
}
</style>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `offset-top` | 吸顶距离 | _string \| number_ | `0` |
| `z-index` | 吸顶时的层级 | _string \| number_ | `0` |
| `css-mode` | 开启原生 `css sticky` 模式 | _boolean_ | `false` |
| `disabled` | 禁用吸顶, 设置为 `true` 时, 元素会回到文档流中 | _boolean_ | `false` |

### 方法

| 方法名      | 说明       | 参数 | 返回值             |
|----------|----------| ---- |-----------------|
| `resize` | 触发粘性布局重绘 | `-`  | `Promise<void>` |

### 事件

| 事件名 | 说明 | 参数                                                          |
| --- | --- |-------------------------------------------------------------|
| `scroll` | 当滚动容器滚动时触发 | `offsetTop: number` 距离顶部的 px 值 <br> `isFixed: boolean` 是否吸顶 <br> `scrollData: { scrollTop: number, scrollRatio: number }` 滚动条元素相关属性 |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 粘性布局的内容 | `-` |