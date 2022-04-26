# 卡片

### 基本使用

```html
<template>
  <var-card
    title="风景"
    description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
  />
</template>
```

### 显示副标题

```html
<template>
  <var-card
    title="风景"
    subtitle="公园里的风景"
    description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
  />
</template>
```

### 显示图片

```html
<template>
  <var-card
    title="风景"
    subtitle="公园里的风景"
    description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  />
</template>
```

### 横向显示

```html
<template>
  <var-card title="风景" subtitle="公园里的风景" src="https://varlet-varletjs.vercel.app/cat.jpg" layout="row"/>
</template>
```

### 使用插槽

```html
<template>
  <var-card
    title="风景"
    subtitle="公园里的风景"
    description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  >
    <template #extra>
      <var-space>
        <var-button type="primary">添加按钮</var-button>
        <var-button type="warning">添加按钮</var-button>
      </var-space>
    </template>
  </var-card>
</template>
```

### 水波效果

```html
<template>
  <var-card
    title="风景"
    subtitle="公园里的风景"
    description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
    ripple
  />
</template>
```

### 全屏

```html
<script setup>
import { ref } from 'vue'

const floating = ref(false)
</script>

<template>
  <var-card
    v-model:floating="floating"
    @click="floating = true"
    title="风景"
    subtitle="公园里的风景"
    ripple
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  >
    <template #extra>
      <var-button text type="info" style="margin-right: 10px">添加按钮</var-button>
      <var-button text type="info">添加按钮</var-button>
    </template>

    <template #content>
      <p style="padding: 0 14px">
        公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。
      </p>
    </template>

    <template #toolbar-extra>
      <var-space align="center">
        <var-icon name="heart" v-ripple />
        <var-icon name="dots-vertical" v-ripple />
      </var-space>
    </template>
    
  </var-card>
</template>
```

## API

### 属性

| 参数            | 说明                                                     | 类型               | 默认值      |
|---------------|--------------------------------------------------------| ------------------ |----------|
| `title`       | 卡片标题                                                   | _string_           | `-`      |
| `subtitle`    | 卡片副标题                                                  | _string_           | `-`      |
| `description` | 卡片描述                                                   | _string_           | `-`      |
| `elevation`   | 卡片阴影程度等级                                               | _string \| number_  | `2`     |
| `src`         | 图片地址                                                   | _string_           | `-`      |
| `layout`      | 排列方式，可选值为 `row` `column`                               | _string_           | `column` |
| `fit`         | 填充模式，可选值为 `fill` `contain` `cover` `none` `scale-down` | _string_           | `cover`  |
| `alt`         | 替代文本                                                   | _string_           | `-`      |
| `height`      | 图片高度                                                   | _string \| number_  | `-`     |
| `width`       | 图片宽度                                                   | _string \| number_  | `-`     |
| `ripple`      | 是否开启水波                                                 | _boolean_          | `false`  |
| `floating`    | 是否开启全屏                                                 |_boolean_          | `false`  |
| `floatingDuration`    | 开关全屏所需时间（ms）                           |_number_          | `250`    |


### 插槽

| 插槽名           | 说明         | 参数 |
|---------------|------------| ---- |
| `image`       | 自定义图片      | `-`  |
| `title`       | 自定义标题      | `-`  |
| `subtitle`    | 自定义副标题     | `-`  |
| `description` | 自定义描述      | `-`  |
| `content`     | 自定义正文      | `-`  |
| `extra`       | 自定义底部内容    | `-`  |
| `toolbar-close` | 工具栏自定义关闭   | `-`  |
| `toolbar-extra` | 工具栏自定义右侧内容 | `-`  |


### 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `click` | 点击卡片时触发 | `event: Event` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名                               | 默认值                  |
|-----------------------------------|----------------------|
| `--card-background`               | `#fff`               |
| `--card-padding`                  | `0px 0 15px 0`       |
| `--card-border-radius`            | `4px`                |
| `--card-image-width`              | `100%`               |
| `--card-row-image-width`          | `100px`              |
| `--card-image-height`             | `200px`              |
| `--card-title-color`              | `#333`               |
| `--card-title-font-size`          | `20px`               |
| `--card-title-padding`            | `0 12px`             |
| `--card-title-margin`             | `15px 0 0 0`         |
| `--card-subtitle-color`           | `rgba(0, 0, 0, 0.6)` |
| `--card-subtitle-font-size`       | `14px`               |
| `--card-subtitle-padding`         | `0 13px`             |
| `--card-subtitle-margin`          | `10px 0 0 0`         |
| `--card-description-color`        | `rgba(0, 0, 0, 0.6)` |
| `--card-description-font-size`    | `14px`               |
| `--card-description-margin`       | `20px 0 0 0`         |
| `--card-description-padding`      | `0 13px`             |
| `--card-footer-padding`           | `0 12px`             |
| `--card-footer-margin`            | `30px 0 0px 0`       |
| `--card-line-height`              | `22px`               |
| `--card-floater-toolbar-top`      | `14px`               |
| `--card-floater-toolbar-left`     | `0px`                |
| `--card-floater-toolbar-size`     | `22px`               |
| `--card-floater-toolbar-color`    | `#fff`               |
| `--card-floater-toolbar-padding`  | `0 10px`             |
