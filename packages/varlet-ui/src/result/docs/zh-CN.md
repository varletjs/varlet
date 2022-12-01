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

### 修改背景色

```html

<template>
  <var-result type="success" style="--result-background: #ffe3e3"></var-result>
</template>
```

### 使用插槽

```html

<template>
  <var-result class="var-elevation--1" title="正在循环播放" description="《疯狂星期四谁请我吃》">
    <template #image>
      <svg class="music" viewBox="0 0 48 48">
        <circle cx="24" cy="24" fill="#37474f" r="19"/>
        <circle cx="24" cy="24" fill="#263238" r="18"/>
        <g fill="#37474f">
          <path d="m41.022 29.815-17.022-5.815 5.815 17.022c5.257-1.796 9.41-5.95 11.207-11.207z"/>
          <path d="m6.978 18.185 17.022 5.815-5.815-17.022c-5.257 1.797-9.41 5.95-11.207 11.207z"/>
        </g>
        <path d="m24 17c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z" fill="var(--color-danger)"/>
        <circle cx="24" cy="24" r="1"/>
      </svg>
    </template>
    <template #footer>
      <var-button type="danger">v我50</var-button>
    </template>
  </var-result>
</template>

<style>
  .music {
    width: 50vw;
    animation: rotate 6s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
```

## API

### 属性

| 参数          | 说明                                                              | 类型     | 默认值     |
|-------------|-----------------------------------------------------------------|--------|---------|
| `image-size` | 图标尺寸                                                            | _string \| number_ | `-`  |
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

| 变量名                                | 默认值                           |
|------------------------------------|-------------------------------|
| `--result-background`              | `#fff`                        |
| `--result-padding`                 | `24px`                        |
| `--result-border-radius`           | `3px`                         |
| `--result-title-color`             | `#333`                        |
| `--result-title-font-size`         | `32px`                        |
| `--result-title-margin`            | `15px 0 0 0`                  |
| `--result-image-size`              | `80px`                        |
| `--result-title-font-weight`       | `500`                         |
| `--result-description-margin`      | `10px 0 0 0`                  |
| `--result-description-font-size`   | `14px`                        |
| `--result-description-color`       | `rgba(0, 0, 0, 0.6)`          |
| `--result-description-line-height` | `1.6`                         |
| `--result-info-color`              | `var(--color-info)`           |
| `--result-info-border-color`       | `rgba(0, 175, 239, 0.3)`      |
| `--result-success-color`           | `var(--color-success)`        |
| `--result-success-border-color`    | `rgba(0, 196, 143, 0.3)`      |
| `--result-error-color`             | `var(--color-danger)`         |
| `--result-error-border-color`      | `rgba(244, 67, 54, 0.3)`      |
| `--result-warning-color`           | `var(--color-warning)`        |
| `--result-warning-border-color`    | `rgba(255, 159, 0, 0.3)`      |
| `--result-question-color`          | `#607d8`                      |
| `--result-question-border-color`   | `rgba(96, 125, 139, 0.3)`     |
| `--result-empty-color`             | `#9e9e9e`                     |
| `--result-empty-border-color`      | `rgba(158, 158, 158, 0.3)`    |

