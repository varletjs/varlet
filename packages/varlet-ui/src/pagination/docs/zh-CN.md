# 分页

### 介绍

当你需要处理大量数据的时候，可能需要用到它。

## 简约模式

### 介绍

默认的一种显示模式，推荐在小屏设备上使用。

### 基本使用

```html
<template>
  <var-pagination :current="1" :total="20" />
</template>
```

### 隐藏 size 控制器

使用 `show-size-changer` 可以控制 `size` 控制器的显示和隐藏。

```html
<template>
  <var-pagination :current="1" :total="20" :show-size-changer="false" />
</template>
```

### 显示总数

使用 `showTotal` 属性自定义总数显示。

```html
<template>
  <var-pagination
    :current="1"
    :total="20"
    :show-size-changer="false"
    :show-total="total => `共 ${total} 条`"
  />
</template>
```

### 禁用

```html
<template>
  <var-pagination :current="1" :total="20" disabled />
</template>
```

## 普通模式

### 介绍

`simple` 属性为 `false` 时，可以开启我们专门为宽屏设计的分页风格

### 基本使用

```html
<template>
  <var-pagination :simple="false" :current="1" :total="20" />
</template>
```

### 隐藏 size 控制器

使用 `show-size-changer` 可以控制 `size` 控制器的显示和隐藏。

```html
<template>
  <var-pagination :current="1" :total="20" :simple="false" :show-size-changer="false" />
</template>
```


### 显示总数

使用 `showTotal` 属性自定义总数显示。

```html
<template>
  <var-pagination
    :current="1"
    :total="20"
    :simple="false"
    :show-size-changer="false"
    :show-total="total => `共 ${total} 条`"
  />
</template>
```

### 禁用

```html
<template>
  <var-pagination :simple="false" :current="1" :total="20" disabled />
</template>
```

### 开启页码快速跳转

使用 `show-quick-jumper` 属性开启页面快速跳转。

```html
<template>
  <var-pagination 
    :simple="false" 
    :current="1" 
    :total="20" 
    :show-size-changer="false" 
    show-quick-jumper
  />
</template>
```

## API

### 属性

| 参数                  | 说明                                              | 类型 | 默认值 |
|---------------------|-------------------------------------------------| -------- | ---------- |
| `v-model:current`  | 当前页数                                            | _string \| number_ | `1` |
| `v-model:size`     | 每页条数                                            | _string \| number_ | `10` |
| `total`             | 总条数                                             | _string \| number_ | `0` |
| `simple`            | 是否为简单模式                                         | _boolean_ | `true` |
| `elevation`         | 海拔高度，可选值为 `true` `false` 和 `0-24` 的等级, 不为简单模式时生效 | _string \| number \| boolean_|   `true`    |
| `disabled`          | 禁用分页                                            | _boolean_ | `false` |
| `show-size-changer` | 是否显示 `size` 切换器                                 | _boolean_ | `true` |
| `show-quick-jumper` | 是否可以快速跳转至某页	                                    | _boolean_ | `false` |
| `max-pager-count`   | 省略号间显示的按钮数量	                                    | _number_ | `3` |
| `size-option`       | 指定每页可以显示多少条	                                    | _number[]_ | `[10, 20, 50, 100]` |
| `show-total`        | 用于显示数据总量和当前数据顺序	                                | _function(total, range)_ | `-` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `change` | `current` 或 `size` 改变后的回调 | `current: number` <br>`size: number`  |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `prev` | 上一页按钮内容 | `-` |
| `next` | 下一页按钮内容 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--pagination-text-color` | `#555` |
| `--pagination-font-size` | `var(--font-size-md)` |
| `--pagination-active-color` | `var(--color-on-primary)` |
| `--pagination-active-bg-color` | `var(--color-primary)` |
| `--pagination-hover-bg-color` | `rgba(85, 85, 85, 0.15)` |
| `--pagination-total-margin` | `0 10px` |
| `--pagination-total-line-height` | `24px` |
| `--pagination-item-width` | `32px` |
| `--pagination-item-height` | `32px` |
| `--pagination-item-margin` | `0 6px` |
| `--pagination-item-border-radius` | `4px` |
| `--pagination-item-background` | `#fff` |
| `--pagination-item-border-radius` | `4px` |
| `--pagination-item-simple-border-radius` | `50%` |
| `--pagination-input-width` | `32px` |
| `--pagination-disabled-color` | `var(--color-text-disabled)` |
| `--pagination-bg-disabled-color` | `var(--color-disabled)` |
| `--pagination-size-line-height` | `24px` |
| `--pagination-size-padding` | `0 4px` |
| `--pagination-quick-jumper-margin` | `0 10px` |
