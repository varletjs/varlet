# 面包屑

### 介绍

一级一级的展示一些信息

### 分隔符

通过`separator`设置分隔符

```html
<template>
  <var-space direction="column" size="large">
    <var-breadcrumbs>
      <var-breadcrumb>一级</var-breadcrumb>
      <var-breadcrumb>二级</var-breadcrumb>
      <var-breadcrumb>三级</var-breadcrumb>
    </var-breadcrumbs>

    <var-breadcrumbs separator="\">
      <var-breadcrumb>一级</var-breadcrumb>
      <var-breadcrumb>二级</var-breadcrumb>
      <var-breadcrumb>三级</var-breadcrumb>
    </var-breadcrumbs>
  </var-space>
</template>
```

### 每一级分隔符

每一级的分隔符可以单独设置

```html
<template>
  <var-breadcrumbs separator="\">
    <var-breadcrumb>一级</var-breadcrumb>
    <var-breadcrumb separator="~">二级</var-breadcrumb>
    <var-breadcrumb>三级</var-breadcrumb>
  </var-breadcrumbs>
</template>
```

### 分隔符插槽

分隔符也支持插槽，可以深度定制

```html
<var-breadcrumbs>
  <var-breadcrumb>
    <template #separator>
      <var-icon name="chevron-right" />
    </template>
    一级
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

| 参数        | 说明   | 类型     | 默认值 |
| ----------- | ------ | -------- | ------ |
| `separator` | 分隔符 | _string_ | `/`    |

### 插槽

#### Breadcrumbs Slots

| 参数      | 说明       | 参数 |
| --------- | ---------- | ---- |
| `default` | 面包屑内容 | `-`  |

#### breadcrumb Slots

| 参数      | 说明                     | 参数 |
| --------- | ------------------------ | ---- |
| `default` | 面包屑每一级的内容       | `-`  |
| `default` | 面包屑每一级的分隔符内容 | `-`  |

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
