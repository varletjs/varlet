# 头像

### 介绍

头像组件

### 头像尺寸

```html
<template>
  <var-space align="end">
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="small" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="large" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="56" />
  </var-space>
</template>
```

## API

### 属性

| 参数                  | 说明                                        | 类型   | 默认值          |
|---------------------|-------------------------------------------|------|--------------|
| `target`            | 触发滚动的对象，如果为 undefined 会监听距离最近的一个可滚动的祖先节点	 | _string \| HTMLElement_ | `-` |
| `visibility-height` | 滚动高度达到此参数值才出现                             | _string \| number_      | `200` |
| `bottom`            | `BackTop` 距离页面底部的距离                       | _string \| number_      | `40` |
| `right`            | `BackTop` 距离页面右侧的距离                       | _string \| number_      | `40` |
| `duration`          | 回到顶部所需时间（ms）                              | _number_ | `300`        |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `click` | 点击按钮触发的事件 | `event: Event` |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | 自定义按钮内容 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--back-top-right` | `40px` |
| `--back-top-bottom` | `40px` |
| `--back-top-button-size` | `40px` |
