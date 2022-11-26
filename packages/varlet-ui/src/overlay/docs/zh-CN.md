# 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素。


### 基础用法

```html
<script setup>
import { ref } from 'vue'
  
const baseOverlay = ref(false)
</script>

<template>
  <var-space>
    <var-button @click="baseOverlay = true">基础用法</var-button>
  </var-space>

  <var-overlay v-model:show="baseOverlay" />
</template>

```

### 嵌入内容

```html
<script setup>
import { ref } from 'vue'

const contentOverlay = ref(false)
</script>

<template>
  <var-space>
    <var-button @click="contentOverlay = true">嵌入内容</var-button>
  </var-space>

  <var-overlay v-model:show="contentOverlay">
    <div class="popup-example-block">
      素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆, 冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。
    </div>
  </var-overlay>
</template>

<style>
.popup-example-block {
  padding: 20px 24px;
  width: 250px;
  background: #fff;
  border-radius: 5px;
}
</style>
```

### 遮罩层样式

```html
<script setup>
import { ref } from 'vue'
  
const overlayClass = ref(false)
const overlayStyle = ref(false)
</script>

<template>
  <var-space direction="column" :size="[10, 0]">
    <var-button type="primary" block @click="overlayClass = true">
      遮罩层 class
    </var-button>
    <var-button type="primary" block @click="overlayStyle = true">
      遮罩层 style
    </var-button>
  </var-space>
  
  <var-overlay 
    v-model:show="overlayClass"
    overlay-class="popup-example-custom-overlay"
  />

  <var-overlay
    v-model:show="overlayStyle"
    :overlay-style="{backgroundColor: 'rgba(0, 0, 0, 0.3)'}"
  />
</template>

<style>
.popup-example-custom-overlay {
  background: rgba(0, 0, 0, 0.3) !important;
}

.popup-example-block {
  padding: 20px 24px;
  width: 250px;
}
</style>
```

### 注册事件
```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const clickOverlay = ref(false)
</script>

<template>
  <var-button type="primary" block @click="event = true">
    注册事件
  </var-button>

  <var-overlay
    v-model:show="event"
    @click-overlay="()=> Snackbar.success('click')"
  />
</template>

```

## API

### 属性

| 参数                       | 说明                                               | 类型                    | 默认值      |
|--------------------------|--------------------------------------------------|-----------------------|----------|
| `v-model:show`           | 是否显示遮罩层                                          | _boolean_             | `false`  |
| `overlay-class`          | 自定义遮罩层的 class                                    | _string_              | `-`      |
| `overlay-style`          | 自定义遮罩层的 style                                    | _object_              | `-`      |

### 事件

| 事件名             | 说明           | 参数  |
|-----------------|--------------|-----|
| `click-overlay` | 点击遮罩层时触发     | `-` |

### 插槽

| 插槽名       | 说明    | 参数  |
|-----------|-------|-----|
| `default` | 遮罩层内容 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名                                | 默认值                 |
|------------------------------------|---------------------|
| `--popup-overlay-background-color` | `rgba(0, 0, 0, .6)` |
