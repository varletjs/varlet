# 面包屑

### 介绍

显示当前页面的路径，快速返回之前的任意页面。

### 基本用法

在 `var-breadcrumbs` 中使用 `var-breadcrumb` 标签表示从首页开始的每一级。

```html
<template>
  <var-breadcrumbs>
    <var-breadcrumb :to="{ path: '/' }">首页</var-breadcrumb>
    <var-breadcrumb>二级</var-breadcrumb>
    <var-breadcrumb>三级</var-breadcrumb>
  </var-breadcrumbs>
</template>
```

### 分隔符

该组件接收一个 `String` 类型的参数 `separator` 来作为分隔符。默认值为 `/`

```html
<template>
  <var-breadcrumbs separator="\">
    <var-breadcrumb :to="{ path: '/' }">首页</var-breadcrumb>
    <var-breadcrumb>二级</var-breadcrumb>
    <var-breadcrumb>三级</var-breadcrumb>
  </var-breadcrumbs>
</template>
```

### 每一级分隔符

每一级的分隔符可以单独设置，`var-breadcrumb` 接收一个 `String` 类型的参数 `separator` 来作为分隔符。默认值为 `var-breadcrumbs` 组件的 `separator` 。

```html
<template>
  <var-breadcrumbs separator="\">
    <var-breadcrumb :to="{ path: '/' }">首页</var-breadcrumb>
    <var-breadcrumb separator="~">二级</var-breadcrumb>
    <var-breadcrumb>三级</var-breadcrumb>
  </var-breadcrumbs>
</template>
```

### 分隔符插槽

通过设置插槽可以使用自定义内容作为分隔符，注意这将使 `separator` 失效。

```html
<var-breadcrumbs>
  <var-breadcrumb :to="{ path: '/' }">
    <template #separator>
      <var-icon name="chevron-right" />
    </template>
    首页
  </var-breadcrumb>
  <var-breadcrumb>
    <template #separator>
      <var-icon name="chevron-right" />
    </template>
    二级
  </var-breadcrumb>
  <var-breadcrumb>
    <template #separator>
      <var-icon name="chevron-right" />
    </template>
    三级
  </var-breadcrumb>
</var-breadcrumbs>
```

## API

### 属性

#### Breadcrumbs Props

| 参数        | 说明   | 类型     | 默认值 |
| ----------- | ------ | -------- | ------ |
| `separator` | 分隔符 | _string_ | `/`    |

#### breadcrumb Props

| 参数        | 说明                                       | 类型                          | 默认值 |
| ----------- | ------------------------------------------ | ----------------------------- | ------ |
| `separator` | 分隔符                                     | _string_                      | `/`    |
| `to`        | 路由跳转目标，同 `vue-router` 的 `to` 属性 | _string_ / _RouteLocationRow_ | `''`   |

### 插槽

#### Breadcrumbs Slots

| 参数      | 说明           | 参数 |
| --------- | -------------- | ---- |
| `default` | 自定义默认内容 | `-`  |

#### breadcrumb Slots

| 参数        | 说明             | 参数 |
| ----------- | ---------------- | ---- |
| `default`   | 自定义默认内容   | `-`  |
| `separator` | 自定义分隔符内容 | `-`  |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

#### breadcrumb Variables

| 变量名                              | 默认值                 |
| ----------------------------------- | ---------------------- |
| `--breadcrumb-active-color`         | `var(--color-primary)` |
| `--breadcrumb-active-hover-color`   | `#233dd2`              |
| `--breadcrumb-text-color`           | `#888`                 |
| `--breadcrumb-separator-margin`     | `0 6px`                |
| `---breadcrumb-separator-font-size` | `14px`                 |
