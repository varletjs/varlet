# 面包屑

### 介绍

用于分级展示信息。

### 基本用法

```html
<template>
  <var-breadcrumbs>
    <var-breadcrumb>首页</var-breadcrumb>
    <var-breadcrumb>一级</var-breadcrumb>
    <var-breadcrumb>二级</var-breadcrumb>
  </var-breadcrumbs>
</template>
```

### 分隔符

```html
<template>
  <var-breadcrumbs separator="\">
    <var-breadcrumb>首页</var-breadcrumb>
    <var-breadcrumb>二级</var-breadcrumb>
    <var-breadcrumb>三级</var-breadcrumb>
  </var-breadcrumbs>
</template>
```

### 子级分隔符

```html
<template>
  <var-breadcrumbs>
    <var-breadcrumb>首页</var-breadcrumb>
    <var-breadcrumb separator="~">一级</var-breadcrumb>
    <var-breadcrumb>二级</var-breadcrumb>
  </var-breadcrumbs>
</template>
```

### 分隔符插槽

通过设置插槽可以使用自定义内容作为分隔符。

```html
<template>
  <var-breadcrumbs>
    <var-breadcrumb>
      首页
      <template #separator>
        <var-icon name="menu-right" style="margin: 1px 4px 0" />
      </template>
    </var-breadcrumb>
    <var-breadcrumb>
      一级
      <template #separator>
        <var-icon name="menu-right" style="margin: 1px 4px 0" />
      </template>
    </var-breadcrumb>
    <var-breadcrumb>二级</var-breadcrumb>
  </var-breadcrumbs>
</template>
```

### 注册事件

通过 `@click` 注册面包屑的点击事件，最后一个面包屑不会触发点击事件。

```html
<script setup>
import { Snackbar } from '@varlet/ui'
</script>

<template>
  <var-breadcrumbs>
    <var-breadcrumb @click="Snackbar('首页')">首页</var-breadcrumb>
    <var-breadcrumb @click="Snackbar('一级')">一级</var-breadcrumb>
    <var-breadcrumb @click="Snackbar('二级')">二级</var-breadcrumb>
  </var-breadcrumbs>
</template>
```

## API

### 属性

#### Breadcrumbs Props

| 参数        | 说明   | 类型     | 默认值 |
| ----------- | ------ | -------- | ------ |
| `separator` | 分隔符 | _string_ | `/`    |

#### Breadcrumb Props

| 参数        | 说明                                       | 类型                          | 默认值 |
| ----------- | ------------------------------------------ | ----------------------------- |-----|
| `separator` | 分隔符                                     | _string_                      | `-` |

### 事件

#### Breadcrumb Events

| 事件名  | 说明                                   | 参数                                          |
| ------- |--------------------------------------| --------------------------------------------- |
| `click` | 点击面包屑时触发 | `event: Event` |

### 插槽

#### Breadcrumbs Slots

| 参数      | 说明           | 参数 |
| --------- | -------------- | ---- |
| `default` | 自定义默认内容 | `-`  |

#### Breadcrumb Slots

| 参数        | 说明             | 参数 |
| ----------- | ---------------- | ---- |
| `default`   | 自定义默认内容   | `-`  |
| `separator` | 自定义分隔符内容 | `-`  |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

#### Breadcrumb Variables

| 变量名                              | 默认值                 |
| ----------------------------------- | ---------------------- |
| `--breadcrumb-active-color` | `var(--color-primary)` |
| `--breadcrumb-inactive-color` | `#888` |
| `--breadcrumb-separator-margin` | `0 10px` |
| `--breadcrumb-separator-font-size` | `14px` |