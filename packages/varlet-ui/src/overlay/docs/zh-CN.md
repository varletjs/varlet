# 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素。


### 基本使用

通过 `show` 控制遮罩层显示，点击遮罩时自动将 `show` 设置为 `false` 以关闭遮罩层。

```html
<script setup>
import { ref } from 'vue'
  
const show = ref(false)
</script>

<template>
  <var-button type="primary" block @click="show = true">显示遮罩层</var-button>
  <var-overlay v-model:show="show" />
</template>
```

### 嵌入内容

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <var-button type="primary" block @click="show = true">嵌入内容</var-button>
  <var-overlay v-model:show="show">
    <div class="overlay-content" @click.stop>
      素胚勾勒出青花笔锋浓转淡, 
      瓶身描绘的牡丹一如你初妆, 
      冉冉檀香透过窗心事我了然, 
      宣纸上走笔至此搁一半。
    </div>
  </var-overlay>
</template>

<style>
.overlay-content {
  padding: 20px 24px;
  width: 250px;
  background: var(--button-default-color);
}
</style>
```

### 注册事件
```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const show = ref(false)
</script>

<template>
  <var-button type="primary" block @click="show = true">点击遮罩层</var-button>
  <var-overlay
    v-model:show="show"
    @click="Snackbar.success('click')"
  />
</template>
```

## API

### 属性

| 参数             | 说明                            | 类型                    | 默认值     |
|----------------|-------------------------------|-----------------------|---------|
| `v-model:show` | 是否显示遮罩层                       | _boolean_             | `false` |
| `lock-scroll`  | 是否禁止滚动穿透，禁止时滚动遮罩层不会引发 body 的滚动 | _boolean_             | `true`  |
| `teleport`     | 遮罩层挂载的位置                      | _TeleportProps['to']_ | `-`     |

### 事件

| 事件名     | 说明       | 参数  |
|---------|----------|-----|
| `click` | 点击遮罩层时触发 | `-` |

### 插槽

| 插槽名       | 说明    | 参数  |
|-----------|-------|-----|
| `default` | 遮罩层内容 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                               | 默认值                 |
|-----------------------------------|---------------------|
| `--overlay-background-color` | `rgba(0, 0, 0, .6)` |
