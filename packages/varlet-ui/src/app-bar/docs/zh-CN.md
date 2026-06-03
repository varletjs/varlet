# 导航栏

### 介绍

为页面提供导航功能，常用于页面顶部。

### 基本使用

```html
<template>
  <var-app-bar>
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
</template>
```

### 开启圆角

通过 `round` 属性开启圆角。

```html
<template>
  <var-app-bar round>
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
</template>
```

### 大尺寸

```html
<template>
  <var-app-bar size="large">
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
</template>
```

### 添加左右插槽

```html
<template>
  <var-app-bar>
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
</template>
```

### 弱背景色

通过 `type="surface"` 使用弱背景色外观，适合桌面端或中后台页面。

```html
<template>
  <var-app-bar type="surface" :elevation="false" border>
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
</template>
```

### 扩展内容

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-app-bar
    round
    image="https://varletjs.org/tree.jpeg"
    image-linear-gradient="to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%"
  >
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>

    <template #content>
      <var-tabs
        style="margin-top: 100px"
        color="transparent"
        active-color="#fff"
        inactive-color="#ddd"
        v-model:active="active"
      >
        <var-tab>选项卡</var-tab>
        <var-tab>选项卡</var-tab>
        <var-tab>选项卡</var-tab>
      </var-tabs>
    </template>
  </var-app-bar>
</template>
```

## API

### 属性

| 参数               | 说明                                | 类型 | 默认值     |
|------------------|-----------------------------------| ---- |---------|
| `color`          | 背景颜色                              | _string_ | `-`     |
| `text-color`     | 文字颜色                              | _string_ | `-`     |
| `type` ***3.18.0*** | 外观类型，可选值为 `primary` `surface` | _string_ | `primary` |
| `size` ***3.18.0*** | 尺寸，可选值为 `normal` `large` | _string_ | `normal` |
| `title`          | 标题                                | _string_ | -       |
| `title-position` | 标题位置，可选值为 `left` `center` `right` | _string_ | `left`  |
| `elevation` | 海拔高度，可选值为 `true` `false` 和 `0-24` 的等级 | _string \| number \| boolean_|   `true`    |
| `fixed`          | 是否固定到顶部                            | _boolean_ | `false` |
| `placeholder`  ***3.2.14***   | 是否在顶部生成相同高度的占位元素(需设置 `fixed`)  | _boolean_ | `false` |
| `z-index`          | 元素 z-index                            | _number \| string_ | `1` |
| `round`          | 是否使用圆角                            | _boolean_ | `false` |
| `border` ***3.3.2***          | 是否使用底部边框                            | _boolean_ | `false` |
| `image`          | 背景图片                            | _string_ | `-` |
| `image-linear-gradient` | 背景图片渐变色 | _string_ | `-` |
| `safe-area-top` | 是否开启顶部安全区适配 | _boolean_ | `false` |

### 插槽

| 名称 | 说明 | 参数 |
| ---- | ---- | ----|
| `default` | 自定义标题内容，会覆盖 `title` 的内容 | `-` |
| `left` | 插入至导航栏左侧的内容 | `-` |
| `right` | 插入至导航栏右侧的内容 | `-` |
| `content` | 扩展内容 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                       | 默认值 |
|---------------------------| --- |
| `--app-bar-color`         | `var(--color-primary)` |
| `--app-bar-text-color`    | `#fff` |
| `--app-bar-height`        | `54px` |
| `--app-bar-large-height` | `64px` |
| `--app-bar-surface-color` | `#fff` |
| `--app-bar-surface-text-color` | `rgba(0, 0, 0, 0.87)` |
| `--app-bar-surface-border-bottom` | `thin solid var(--color-outline)` |
| `--app-bar-title-padding` | `0 12px` |
| `--app-bar-title-font-size` | `var(--font-size-lg)` |
| `--app-bar-left-gap`      | `6px` |
| `--app-bar-right-gap`     | `6px` |
| `--app-bar-border-radius` | `4px` |
| `--app-bar-font-size` | `var(--font-size-lg)` |
| `--app-bar-border-bottom` | `thin solid var(--color-outline)` |
