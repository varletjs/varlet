# 网格

### 介绍

用于布局的基础组件，方便开发者进行页面布局。

### 基础用法

```html
<template>
  <var-grid>
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
  </var-grid>
</template>
```

### 设置列数

```html
<template>
  <var-grid column="5">
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
  </var-grid>
</template>
```

### 方形格子

```html
<template>
  <var-grid column="3" square>
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
  </var-grid>
</template>

```

### 设置间隔

```html
<template>
  <var-grid column="2" gutter="8px" :border="false">
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
  </var-grid>
</template>

```


### 内容横排

```html
<template>
  <var-grid column="4" direction="horizontal">
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
  </var-grid>
</template>

```

### 徽章

```html
<template>
  <var-grid column="4">
    <var-grid-item icon="image-outline" badge text="文字" />
    <var-grid-item icon="image-outline" :badge="{ value: 1, type: 'danger' }" text="文字" />
    <var-grid-item icon="image-outline" :badge="{ value: 2, type: 'info' }" text="文字" />
    <var-grid-item icon="image-outline" :badge="{ value: 3, position: 'right-bottom', type: 'danger' }" text=" 文字" />
  </var-grid>
</template>
```

### 自定义内容

```html
<template>
  <var-grid column="2" gutter="12px" :border=" false ">
    <var-grid-item>
      <var-image size="40px" :src=" cat " />
    </var-grid-item>
    <var-grid-item>
      <var-image size="40px" :src=" cat2 " />
    </var-grid-item>
    <var-grid-item>
      <var-image size="40px" :src=" cat3 " />
    </var-grid-item>
  </var-grid>
</template>
```



## API

### 属性

#### Grid Props

| 参数 | 说明 | 类型             | 默认值       |
| ------- | --- |----------------|-----------|
| `column`    | 列数 | _string \| number_ | `4` |
| `iconSize`  | 图标大小 | _string \| number_ | `24` |
| `square`    | 设置成正方形，建议列数小于`4` | _boolean_ | `false` |
| `gutter`    | 间距 | _string \| number_ | `0` |
| `center`    | 设置内容居中 | _boolean_ | `false` |
| `border`    | 是否显示边框 | _boolean_ | `false` |
| `ripple`    | 是否显示点击水波纹 | _boolean_ | `false` |
| `direction` | 格子内容排列方向，可选值为`horizontal`、`vertical` | _string_ | `vertical` |

#### GridItem Props

| 参数 | 说明 | 类型             | 默认值       |
| ------- | --- |----------------|-----------|
| `text`  | 内容 | _string_ |  |
| `icon`  | 图标名 | _string_ |  |
| `iconColor`  | 图标颜色 | _string_ |  |
| `badge`  | 徽标内容 | _boolean_ \| _BadgeProps_ | `false` |



### 事件
#### GridItem Events

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击时触发 | `event: Event` |

### 插槽

#### GridItem Slots
| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 自定义默认内容 | `-` |
| `icon` | 自定义图标插槽 | `-` |
| `text` | 自定义文本插槽 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                                           | 默认值   |
|-----------------------------------------------| -------- |
| `--grid-item-border` | `thin solid rgba(0, 0, 0, 0.12)`  |
| `--grid-item-border-radius` | `4px`  |
| `--grid-item-padding` | `16px 8px`  |
