# 电子签名

### 介绍

一个用于在屏幕上进行电子签名的组件。

### 基本使用

通过 `v-model` 绑定签名的值。

```html
<script setup>
import { ref } from 'vue'

const signature = ref('')

const reset = () => {
  signature.value = ''
}

const confirm = () => {
  console.log('签名数据：', signature.value)
}
</script>

<template>
  <var-signature v-model="signature" />
  
  <var-space>
    <var-button type="primary" @click="confirm">确认签名</var-button>
    <var-button @click="reset">重置签名</var-button>
  </var-space>
  
  <img v-if="signature" :src="signature" alt="签名预览" style="margin-top: 10px" />
</template>
```

### 自定义样式

可以通过 `stroke-style`、`line-width` 等属性自定义签名的样式。

```html
<script setup>
import { ref } from 'vue'

const signature = ref('')
</script>

<template>
  <var-signature
    v-model="signature"
    stroke-style="#2979ff"
    :line-width="3"
  />
</template>
```

### 指定图片格式

可以通过 `data-url-type` 指定生成的图片格式。

```html
<template>
  <var-signature
    v-model="signature"
    data-url-type="jpg"
  />
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 签名的值（base64格式） | _string_ | `''` |
| `stroke-style` | 画笔颜色，支持 `currentColor` | _string_ | `#000` |
| `line-width` | 画笔粗细 | _string \| number_ | `2` |
| `data-url-type` | 生成图片的格式 | _'png' \| 'jpg'_ | `'png'` |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `start` | 开始签名时触发 | `event: TouchEvent` |
| `signing` | 签名过程中触发 | `{ x: number, y: number, clientX: number, clientY: number }` |
| `end` | 结束签名时触发 | `event: Event` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `reset` | 清除签名并结束当前路径 | `-` | `void` |
| `confirm` | 保存签名，返回 base64 格式的图片数据。画布为空时返回空字符串 | `-` | `string` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--signature-height` | `200px` |
| `--signature-border-color` | `var(--color-surface-container-highest)` |
| `--signature-stroke-color` | `#fff` |

### 示例

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const signature = ref('')

const handleConfirm = async () => {
  if (!signature.value) {
    Snackbar.warning('请先签名')
    return
  }
  
  // 这里可以将签名数据上传到服务器
  console.log('签名数据：', signature.value)
  Snackbar.success('保存成功')
}
</script>

<template>
  <var-card>
    <template #title>
      请在下方签名
    </template>
    
    <var-signature
      v-model="signature"
      stroke-style="#2979ff"
      :line-width="3"
    />
    
    <template #footer>
      <var-space>
        <var-button type="primary" @click="handleConfirm">
          确认签名
        </var-button>
        <var-button @click="signature = ''">
          重新签名
        </var-button>
      </var-space>
    </template>
  </var-card>
  
  <var-paper :elevation="2" style="margin-top: 16px" v-if="signature">
    <img :src="signature" alt="签名预览" style="width: 100%" />
  </var-paper>
</template>
```

## 注意事项

1. 签名数据以 base64 格式存储，可能会占用较大空间，建议在上传服务器前进行压缩处理
2. 在移动设备上使用时，建议设置适当的画布大小以获得更好的签名体验
3. 可以通过 CSS 自定义画布的边框、圆角等样式
4. 组件会自动适应容器宽度，并在窗口大小改变时重新调整画布尺寸
5. 当 `stroke-style` 设置为 `'currentColor'` 时，将会继承父元素的文字颜色
6. 可以通过 `data-url-type` 属性选择生成 PNG 或 JPG 格式的签名图片