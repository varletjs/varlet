# 水波指令

### 介绍
使元素点击时生成一个水波扩散的效果。


### 基本使用

```html
<template>
  <div class="ripple-example-block var-elevation--2" v-ripple>点击</div>
</template>

<style>
.ripple-example-block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  user-select: none;
  cursor: pointer;
  color: #888;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: background-color 0.25s;
}
</style>
```

### 修改颜色

```html
<template>
  <div class="ripple-example-block var-elevation--2" v-ripple="{ color: '#2979ff' }">
    点击
  </div>
</template>

<style>
.ripple-example-block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  user-select: none;
  cursor: pointer;
  color: #888;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: background-color 0.25s;
}
</style>
```

### 禁用水波

```html
<template>
  <div class="ripple-example-block var-elevation--2" v-ripple="{ disabled: true }">
    点击
  </div>
</template>

<style>
.ripple-example-block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  user-select: none;
  cursor: pointer;
  color: #888;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: background-color 0.25s;
}
</style>
```

## API

### 选项

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `color` | 水波纹的颜色 | _string_ | `currentColor` |
| `disabled` | 禁用状态 | _boolean_ | `false` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--ripple-cubic-bezier` | `cubic-bezier(0.68, 0.01, 0.62, 0.6)` |
| `--ripple-color` | `currentColor` |
