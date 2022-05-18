# 卡片

### 基本使用

```html
<template>
  <var-card
    title="本草纲目"
    description="如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"
  />
</template>
```

### 显示副标题

```html
<template>
  <var-card
    title="本草纲目"
    subtitle="我表情悠哉 跳个大概"
    description="如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"
  />
</template>
```

### 显示图片

```html
<template>
  <var-card
    title="本草纲目"
    subtitle="我表情悠哉 跳个大概"
    description="如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  />
</template>
```

### 横向显示

```html
<template>
  <var-card 
    title="本草纲目"
    subtitle="如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"
    src="https://varlet-varletjs.vercel.app/cat.jpg"
    layout="row">
    <template #extra>
      <var-button text round>
        <var-icon name="star" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" />
      </var-button>
    </template>
  </var-card>
</template>
```

### 使用插槽

```html
<template>
  <var-card
    title="本草纲目"
    subtitle="我表情悠哉 跳个大概"
    description="如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  >
    <template #extra>
      <var-space>
        <var-button text text-color="#ff9800">操作 1</var-button>
        <var-button text text-color="#ff9800">操作 2</var-button>
      </var-space>
    </template>
  </var-card>
</template>
```

### 水波效果

```html
<template>
  <var-card
    title="本草纲目"
    subtitle="我表情悠哉 跳个大概"
    description="如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"
    ripple
  />
</template>
```

### 漂浮

```html
<script setup>
import { ref } from 'vue'

const floating = ref(false)
</script>

<template>
  <var-card
    v-model:floating="floating"
    @click="floating = true"
    title="本草纲目"
    subtitle="我表情悠哉 跳个大概"
    ripple
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  >
    <template #extra>
      <var-button text text-color="#ff9800">操作 1</var-button>
      <var-button text text-color="#ff9800">操作 2</var-button>
    </template>

    <template #content>
      <var-divider dashed />
      
      <div class="card-example-text">
        如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~
      </div>
    </template>
  </var-card>
</template>

<style>
.card-example-text {
  padding: 14px;
  font-size: 14px;
  line-height: 28px;
}
</style>
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


### 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `click` | 点击卡片时触发 | `event: Event` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名                                          | 默认值                  |
|----------------------------------------------|----------------------|
| `--card-background`                          | `#fff`               |
| `--card-padding`                             | `0px 0 15px 0`       |
| `--card-border-radius`                       | `4px`                |
| `--card-image-width`                         | `100%`               |
| `--card-row-image-width`                     | `150px`              |
| `--card-image-height`                        | `200px`              |
| `--card-row-image-height`                    | `150px`              |
| `--card-title-color`                         | `#333`               |
| `--card-title-font-size`                     | `20px`               |
| `--card-title-padding`                       | `0 12px`             |
| `--card-title-margin`                        | `15px 0 0 0`         |
| `--card-title-row-margin`                    | `12px 0`             |
| `--card-subtitle-color`                      | `rgba(0, 0, 0, 0.6)` |
| `--card-subtitle-font-size`                  | `14px`               |
| `--card-subtitle-padding`                    | `0 13px`             |
| `--card-subtitle-margin`                     | `10px 0 0 0`         |
| `--card-subtitle-row-margin`                 | `-8px 0 0 0`         |
| `--card-description-color`                   | `rgba(0, 0, 0, 0.6)` |
| `--card-description-font-size`               | `14px`               |
| `--card-description-margin`                  | `20px 0 0 0`         |
| `--card-description-padding`                 | `0 13px`             |
| `--card-footer-padding`                      | `0 12px`             |
| `--card-footer-margin`                       | `30px 0 0px 0`       |
| `--card-footer-right`                        | `13px`               |
| `--card-footer-bottom`                       | `9px`                |
| `--card-line-height`                         | `22px`               |
| `--card-row-line-height`                     | `1.5`                |
| `--card-floater-toolbar-bottom`              | `16px`               |
| `--card-floater-toolbar-right`               | `16px`               |
| `--card-floater-toolbar-color`               | `#fff`               |
| `--card-floater-toolbar-close-size`          | `24px`               |
| `--card-floater-toolbar-close-padding`       | `16px`               |
| `--card-floater-toolbar-close-primary-color` | `#212121`            |