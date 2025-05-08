# 漫游式引导

### 介绍

用于分步引导用户了解产品功能的气泡组件。

### 基本使用

```html
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const current = ref(0)
const ref1 = ref<HTMLElement>()
const ref2 = ref<HTMLElement>()
const ref3 = ref<HTMLElement>()
</script>

<template>
  <var-button type="primary" @click="open = true">开始引导</var-button>

  <var-divider />

  <var-space>
    <var-button ref="ref1">上传</var-button>
    <var-button ref="ref2" type="primary">保存</var-button>
    <var-button ref="ref3"><var-icon name="dots-vertical" /></var-button>
  </var-space>

  <var-tour v-model:open="open" v-model:current="current" closeable>
    <var-tour-step :target="ref1?.$el" title="上传文件" description="把你的文件放在这里。" />
    <var-tour-step :target="ref2?.$el" title="保存" description="保存你的更改。" />
    <var-tour-step :target="ref3?.$el" title="其他操作" description="点击查看其他。" />
  </var-tour>
</template>
```

### 非模态

使用 `:overlay="false"` 可以将引导变为非模态， 同时为了强调引导本身，建议与 `type="primary"` 组合使用。

```html
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const current = ref(0)
const ref1 = ref<HTMLElement>()
const ref2 = ref<HTMLElement>()
const ref3 = ref<HTMLElement>()
</script>

<template>
  <var-button type="primary" @click="open = true">开始引导</var-button>

  <var-divider />

  <var-space>
    <var-button ref="ref1">上传</var-button>
    <var-button ref="ref2" type="primary">保存</var-button>
    <var-button ref="ref3"><var-icon name="dots-vertical" /></var-button>
  </var-space>

  <var-tour 
    v-model:open="open" 
    v-model:current="current" 
    :overlay="false" 
    type="primary" 
    closeable
  >
    <var-tour-step :target="ref1?.$el" title="上传文件" description="把你的文件放在这里。" />
    <var-tour-step :target="ref2?.$el" title="保存" description="保存你的更改。" />
    <var-tour-step :target="ref3?.$el" title="其他操作" description="点击查看其他。" />
  </var-tour>
</template>
```

### 弹出位置

改变引导相对于目标的位置，共有 12 种位置可供选择。 当 `target` 为空时引导将会展示在正中央。

```html
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const current = ref(0)
const ref1 = ref<HTMLElement>()
const ref2 = ref<HTMLElement>()
const ref3 = ref<HTMLElement>()
</script>

<template>
  <var-button type="primary" @click="open = true">开始引导</var-button>

  <var-divider />

  <var-space>
    <var-button ref="ref1">上传</var-button>
    <var-button ref="ref2" type="primary">保存</var-button>
    <var-button ref="ref3"><var-icon name="dots-vertical" /></var-button>
  </var-space>

  <var-tour v-model:open="open" v-model:current="current" closeable>
    <var-tour-step title="上传文件" description="把你的文件放在这里。" />
    <var-tour-step 
      :target="ref2?.$el" 
      title="保存" 
      description="保存你的更改。" 
      placement="bottom-start" 
    />
    <var-tour-step 
      :target="ref3?.$el" 
      title="其他操作" 
      description="点击查看其他。" 
      placement="top" 
    />
  </var-tour>
</template>
```

### 自定义指示器

```html
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const current = ref(0)
const ref1 = ref<HTMLElement>()
const ref2 = ref<HTMLElement>()
const ref3 = ref<HTMLElement>()
</script>

<template>
  <var-button type="primary" @click="open = true">开始引导</var-button>

  <var-divider />

  <var-space>
    <var-button ref="ref1">上传</var-button>
    <var-button ref="ref2" type="primary">保存</var-button>
    <var-button ref="ref3"><var-icon name="dots-vertical" /></var-button>
  </var-space>

  <var-tour v-model:open="open" v-model:current="current" closeable>
    <var-tour-step :target="ref1?.$el" title="上传文件" description="把你的文件放在这里。" />
    <var-tour-step :target="ref2?.$el" title="保存" description="保存你的更改。" />
    <var-tour-step :target="ref3?.$el" title="其他操作" description="点击查看其他。" />
    <template #indicators="{ current, total }">
      <span>{{ current + 1 }} / {{ total }}</span>
    </template>
  </var-tour>
</template>
```

## API

### 属性

#### Tour Props

| 参数                     | 说明                                                  | 类型                           | 默认值    |
|--------------------------|-----------------------------------------------------|--------------------------------|-----------|
| `v-model:open`           | 打开引导                                              | _boolean_                      | `-`       |
| `v-model:current`        | 当前处于哪一步                                        | _number_                       | `0`       |
| `closeable`              | 是否显示关闭按钮                                      | _boolean_                      | `-`       |
| `type`                   | 类型，可选值为 `default` `primary`                     | _string_                       | `default` |
| `arrow`                  | 是否显示箭头                                          | _boolean_                      | `true`    |
| `placement`              | 弹出位置                                              | _Placement_                    | `bottom`  |
| `content-class`          | 引导卡片主体区域的 class                              | _string_                       | `-`       |
| `content-style`          | 引导卡片主体区域的 style                              | _object_                       | `-`       |
| `overlay`                | 是否显示遮罩层                                        | _boolean_                      | `true`    |
| `overlay-class`          | 自定义遮罩层的 class                                  | _string_                       | `-`       |
| `overlay-style`          | 自定义遮罩层的 style                                  | _object_                       | `-`       |
| `lock-scroll`            | 是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动 | _boolean_                      | `true`    |
| `close-on-click-overlay` | 是否点击遮罩层关闭弹出层                              | _boolean_                      | `true`    |
| `close-on-key-escape`    | 是否支持键盘 ESC 关闭弹窗                             | _boolean_                      | `true`    |
| `teleport`               | 弹出层挂载的位置                                      | _TeleportProps['to'] \| false_ | `body`    |

#### TourStep Props

| 参数                     | 说明                     | 类型                    | 默认值      |
|--------------------------|------------------------|-------------------------|-------------|
| `target`                 | 引导卡片指向的元素       | _string \| HTMLElement_ | `-`         |
| `title`                  | 标题                     | _string_                | `-`         |
| `description`            | 描述                     | _string_                | `-`         |
| `closeable`              | 是否显示关闭按钮         | _boolean_               | `undefined` |
| `arrow`                  | 是否显示箭头             | _boolean_               | `undefined` |
| `placement`              | 弹出位置                 | _Placement_             | `-`         |
| `width`                  | 引导卡片宽度             | _string \| number_      | `-`         |
| `prev-button-text`       | 上一步按钮文字           | _string_                | `next`      |
| `next-button-text`       | 下一步按钮文字           | _string_                | `previous`  |
| `prev-button-text-color` | 上一步按钮文字颜色       | _string_                | `-`         |
| `next-button-text-color` | 下一步按钮文字颜色       | _string_                | `-`         |
| `prev-button-color`      | 上一步按钮背景颜色       | _string_                | `-`         |
| `next-button-color`      | 下一步按钮背景颜色       | _string_                | `-`         |
| `content-class`          | 引导卡片主体区域的 class | _string_                | `-`         |
| `content-style`          | 引导卡片主体区域的 style | _object_                | `-`         |
| `overlay`                | 是否显示遮罩层           | _boolean_               | `undefined` |
| `overlay-class`          | 自定义遮罩层的 class     | _string_                | `-`         |
| `overlay-style`          | 自定义遮罩层的 style     | _string_                | `-`         |

### Placement

| 参数           | 说明         |
|----------------|------------|
| `top`          | 顶部中心位置 |
| `top-start`    | 顶部左侧位置 |
| `top-end`      | 顶部右侧位置 |
| `bottom`       | 底部中心位置 |
| `bottom-start` | 底部左侧位置 |
| `bottom-end`   | 底部右侧位置 |
| `right`        | 右侧中心位置 |
| `right-start`  | 右侧上方位置 |
| `right-end`    | 右侧下方位置 |
| `left`         | 左侧中心位置 |
| `left-start`   | 左侧上方位置 |
| `left-end`     | 左侧下方位置 |

### 事件

#### Tour Events

| 事件名          | 说明                | 参数              |
|-----------------|-------------------|-------------------|
| `close`         | 关闭引导时触发      | `-`               |
| `finish`        | 引导完成时触发      | `-`               |
| `change`        | 步骤改变时触发      | `current: number` |
| `click-overlay` | 点击遮罩层时触发    | `-`               |
| `key-escape`    | 点击键盘 ESC 时触发 | `-`               |

### 插槽

#### Tour Slots

| 插槽名         | 说明              | 参数                                 |
|----------------|-----------------|--------------------------------------|
| `default`      | tourStep 组件列表 | `-`                                  |
| `close-button` | 关闭按钮          | `-`                                  |
| `indicators`   | 指示器            | `{ current: number, total: number }` |

#### TourStep Slots

| 插槽名    | 说明 | 参数 |
|-----------|----|------|
| `title`   | 标题 | `-`  |
| `default` | 描述 | `-`  |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

#### Tour Variables

| 变量名                                             | 默认值                               |
|----------------------------------------------------|--------------------------------------|
| `--tour-width`                                     | `280px`                              |
| `--tour-background`                                | `var(--color-surface-container-low)` |
| `--tour-border-radius`                             | `3px`                                |
| `--tour-title-padding`                             | `20px 20px 0`                        |
| `--tour-title-color`                               | `#555`                               |
| `--tour-title-font-size`                           | `var(--font-size-lg)`                |
| `--tour-description-color`                         | `#888`                               |
| `--tour-description-padding`                       | `12px 20px`                          |
| `--tour-description-font-size`                     | `var(--font-size-md)`                |
| `--tour-description-line-height`                   | `24px`                               |
| `--tour-indicator-background-color`                | `rgba(0, 0, 0, 0.15)`                |
| `--tour-indicator-active-background-color`         | `var(--color-primary)`               |
| `--tour-actions-padding`                           | `0 12px 12px 20px`                   |
| `--tour-next-button-color`                         | `var(--color-primary)`               |
| `--tour-prev-button-color`                         | `var(--color-primary)`               |
| `--tour-close-button-right`                        | `20px`                               |
| `--tour-close-button-top`                          | `20px`                               |
| `--tour-primary-background`                        | `var(--color-primary)`               |
| `--tour-primary-title-color`                       | `var(--color-on-primary)`            |
| `--tour-primary-description-color`                 | `var(--color-on-info)`               |
| `--tour-primary-indicator-background-color`        | `rgba(255, 255, 255, 0.15)`          |
| `--tour-primary-indicator-active-background-color` | `var(--color-on-primary)`            |
| `--tour-primary-next-button-color`                 | `var(--color-on-primary)`            |
| `--tour-primary-prev-button-color`                 | `var(--color-on-primary)`            |
