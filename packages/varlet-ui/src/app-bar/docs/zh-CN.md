# 导航栏

### 基础导航栏

通过 `title` 属性设置导航栏标题。

```html
<template>
  <var-app-bar title="标题" />
</template>
```

### 添加标题处插槽

```html
<template>
  <var-app-bar>添加标题处插槽</var-app-bar>
</template>
```

### 添加左右插槽

```html
<template>
  <var-app-bar title="标题">
    <template #left>
      <var-button
        color="transparent"
        text-color="#ffffff"
        round
        text
      >
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-menu placement="bottom-start" :offset-y="12">
        <var-button
          color="transparent"
          text-color="#ffffff"
          round
          text
        >
          <var-icon name="menu" :size="24" />
        </var-button>

        <template #menu>
          <var-cell v-ripple>选项卡</var-cell>
          <var-cell v-ripple>选项卡</var-cell>
          <var-cell v-ripple>选项卡</var-cell>
        </template>
      </var-menu>
    </template>
  </var-app-bar>
</template>
```

### 开启圆角

通过 `round` 属性开启圆角。

```html
<template>
  <var-app-bar title="开启圆角" title-position="center" round />
</template>
```

### 自定义背景色

```html
<template>
  <var-app-bar
    title="标题" 
    title-position="center" 
    color="linear-gradient(var(--color-primary), var(--color-info))"
  />
</template>
```

## API

### 属性

| 参数               | 说明                                | 类型 | 默认值     |
|------------------|-----------------------------------| ---- |---------|
| `color`          | 背景颜色                              | _string_ | `-`     |
| `text-color`     | 文字颜色                              | _string_ | `-`     |
| `title`          | 标题                                | _string_ | -       |
| `title-position` | 标题位置，可选值为 `left` `center` `right` | _string_ | `left`  |
| `elevation`      | 是否使用海拔                            | _boolean_ | `true`  |
| `round`          | 是否使用圆角                            | _boolean_ | `false` |

### 插槽

| 名称 | 说明 | 参数 |
| ---- | ---- | ----|
| `default` | 自定义标题内容，会覆盖 `title` 的内容 | `-` |
| `left` | 插入至导航栏左侧的内容 | `-` |
| `right` | 插入至导航栏右侧的内容 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。 

| 变量名                       | 默认值 |
|---------------------------| --- |
| `--app-bar-color`         | `var(--color-primary)` |
| `--app-bar-text-color`    | `#fff` |
| `--app-bar-height`        | `54px` |
| `--app-bar-title-padding` | `0 12px` |
| `--app-bar-left-gap`      | `6px` |
| `--app-bar-right-gap`     | `6px` |
| `--app-bar-border-radius` | `4px` |
