# 结果

### 介绍

用于向用户展示结果。

### 基本使用

```html
<template>
  <var-result 
    type="success" 
    title="成功"
    description="嗨~ 我是结果页的一段描述~"
  >
    <template #footer>
      <var-button type="success">知道了</var-button>
    </template>
  </var-result>
</template>
```

### 类型

结果类型，可选值为 `info`，`success`，`warning`，`error`，`question`，`empty`。

```html
<script setup>
import { ref } from 'vue'

const success = ref(false)
const error = ref(false)
const info = ref(false)
const warning = ref(false)
const question = ref(false)
const empty = ref(false)
</script>

<template>
  <var-space direction="column" size="large">
    <var-button type="success" block @click="success = true">成功</var-button>
    <var-button type="warning" block @click="warning = true">警告</var-button>
    <var-button type="info" block @click="info = true">信息</var-button>
    <var-button type="danger" block @click="error = true">错误</var-button>
    <var-button 
      color="var(--result-question-color)"
      text-color="#fff"
      block 
      @click="question = true"
    >
      疑问
    </var-button>
    <var-button 
      color="var(--result-empty-color)" 
      text-color="#fff"
      block
      @click="empty = true"
    >
      空值
    </var-button>
  </var-space>
  
  <var-popup :default-style="false" v-model:show="success">
    <var-result class="result" type="success" title="成功" description="嗨~ 我是结果页的一段描述~">
      <template #footer>
        <var-button type="success" @click="success = false">知道了</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="warning">
    <var-result class="result" type="warning" title="警告" description="嗨~ 我是结果页的一段描述~">
      <template #footer>
        <var-button type="warning" @click="warning = false">知道了</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="info">
    <var-result class="result" type="info" title="信息" description="嗨~ 我是结果页的一段描述~">
      <template #footer>
        <var-button type="info" @click="info = false">知道了</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="error">
    <var-result class="result" type="error" title="错误" description="嗨~ 我是结果页的一段描述~">
      <template #footer>
        <var-button type="danger" @click="error = false">知道了</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="question">
    <var-result class="result" type="question" title="疑问" description="嗨~ 我是结果页的一段描述~">
      <template #footer>
        <var-button 
          color="var(--result-question-color)" 
          text-color="#fff" 
          @click="question = false"
        >
          知道了
        </var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="empty">
    <var-result class="result" type="empty" title="空值" description="嗨~ 我是结果页的一段描述~">
      <template #footer>
        <var-button 
          color="var(--result-empty-color)"
          text-color="#fff" 
          @click="empty = false">
          知道了
        </var-button>
      </template>
    </var-result>
  </var-popup>
</template>

<style>
.result {
  width: 75vw !important;
}
</style>
```

## API

### 属性

| 参数            | 说明                                                              | 类型       | 默认值       |
|---------------|-----------------------------------------------------------------|----------|-----------|
| `type`        | 结果状态，可选值为 `info` `success` `warning` `error` `question` `empty` | _string_ | `success` |
| `title`       | 标题                                                              | _string_ | `-`       |
| `description` | 描述                                                              | _string_ | `-`       |
| `image-size`  | 图片尺寸                                                            | _string \| number_   | `-`  |
| `animation`   | 是否开启动画，仅对 `success` 状态有效                                  | _boolean_ | `true`    |

### 插槽

| 插槽名                | 说明      | 参数 |
|--------------------|---------| ---- |
| `image`            | 自定义图标   | `-`  |
| `title`            | 自定义标题   | `-`  |
| `description`      | 自定义描述   | `-`  |
| `footer`           | 自定义底部内容 | `-`  |

### 修改背景颜色时注意

请尽可能不要修改背景色为透明或半透明，可能会影响成功状态的动画效果。

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名                                | 默认值                        |
|------------------------------------|----------------------------|
| `--result-background`              | `#fff`                     |
| `--result-info-color`              | `var(--color-info)`        |
| `--result-info-border-color`       | `rgba(0, 175, 239, 0.3)`   |
| `--result-success-color`           | `var(--color-success)`     |
| `--result-success-border-color`    | `rgba(0, 196, 143, 0.3)`   |
| `--result-error-color`             | `var(--color-danger)`      |
| `--result-error-border-color`      | `rgba(244, 67, 54, 0.3)`   |
| `--result-warning-color`           | `var(--color-warning)`     |
| `--result-warning-border-color`    | `rgba(255, 159, 0, 0.3)`   |
| `--result-question-color`          | `#607d8b`                  |
| `--result-question-border-color`   | `rgba(96, 125, 139, 0.3)`  |
| `--result-empty-color`             | `#9e9e9e`                  |
| `--result-empty-border-color`      | `rgba(158, 158, 158, 0.3)` |
| `--result-padding`                 | `24px`                     |
| `--result-border-radius`           | `3px`                      |
| `--result-title-color`             | `#444`                     |
| `--result-title-font-size`         | `32px`                     |
| `--result-title-margin`            | `15px 0 0 0`               |
| `--result-image-size`              | `80px`                     |
| `--result-title-font-weight`       | `500`                      |
| `--result-description-margin`      | `10px 0 0 0`               |
| `--result-description-font-size`   | `14px`                     |
| `--result-description-color`       | `rgba(0, 0, 0, 0.6)`       |
| `--result-description-line-height` | `1.6`                      |


