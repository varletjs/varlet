# 结果页

### 介绍

用于向用户展示结果。

### 基本使用

```html

<template>
  <var-result type="success" title="成功"/>
</template>
```

### 显示描述

```html

<template>
  <var-result type="success" title="成功" description="嗨~ 我是结果页的一段描述~"/>
</template>
```

### 使用插槽

```html

<template>
  <var-result>
    <template #image>
      <var-image src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </template>
    <template #title>
      <h2>标题插槽</h2>
    </template>
    <template #description>
      <div>这是描述插槽</div>
    </template>
    <template #footer>
      <var-button type="success">按钮</var-button>
    </template>
  </var-result>
</template>
```

## API

### 属性

| 参数          | 说明                                                              | 类型     | 默认值     |
|-------------|-----------------------------------------------------------------|--------|---------|
| `imageSize` | 图标尺寸                                                            | _string \| number_ | `-`  |
| `type` | 图标状态，可选值为 `info` `success` `warning` `error` `question` `empty` | _string_  | `-`     |
|`title` | 标题                                                              | _string_  | `-`     |
|`description` | 描述                                                              | _string_  | `-`     |
|`duration`| 过度动画所需时间（ms）                                                    | _number_ | `300`   |

### 插槽

| 插槽名                | 说明      | 参数 |
|--------------------|---------| ---- |
| `image`            | 自定义图标   | `-`  |
| `title`            | 自定义标题   | `-`  |
| `description`      | 自定义描述   | `-`  |
| `footer`           | 自定义底部内容 | `-`  |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名                                | 默认值               |
|------------------------------------|-------------------|
|`--result-background`|`#fff`|
|`--result-padding`|`24px`|
|`--result-title-color`|`#333`|
|`--result-title-font-size`|`32px`|
|`--result-title-margin`|`15px 0 0 0`|
|`--result-image-size`|`80px`|
|`--result-title-font-weight`|`500`|
|`--result-description-margin`|`10px 0 0 0`|
|`--result-description-font-size`|`14px`|
|`--result-description-color`|`#00000099`|
|`--result-description-line-height`|`1.6`|
|`--result-info-color`|`var(--color-info)`|
|`--result-info-border-color`|`#00afef4c`|
|`--result-success-color`|`var(--color-success)`|
|`--result-success-border-color`|`#00c48f4c`|
|`--result-error-color`|`var(--color-danger)`|
|`--result-error-border-color`|`#f443364d`|
|`--result-warning-color`|`var(--color-warning)`|
|`--result-warning-border-color`|`#ff9f004d`|
|`--result-question-color`|`#607d8`|
|`--result-question-border-color`|`#607D8B4D`|
|`--result-empty-color`|`#9e9e9e`|
|`--result-empty-border-color`|`#9e9e9e4d`|

