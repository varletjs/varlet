# 电子签名

### 介绍

一个用于在屏幕上进行电子签名的组件。

### 基本使用

通过 `v-model` 绑定签名的值。

```html
<script setup>
import { ref } from 'vue'

const signature = ref('')

const clear = () => {
  signature.value = ''
}

const save = () => {
  console.log('签名数据：', signature.value)
}
</script>

<template>
  <var-signature v-model="signature" />
  
  <var-space>
    <var-button type="primary" @click="save">保存签名</var-button>
    <var-button @click="clear">清除签名</var-button>
  </var-space>
  
  <img v-if="signature" :src="signature" alt="签名预览" style="margin-top: 10px" />
</template>
```

### 自定义样式

可以通过 `color`、`lineWidth` 等属性自定义签名的样式。

```html
<script setup>
import { ref } from 'vue'

const signature = ref('')
</script>

<template>
  <var-signature
    v-model="signature"
    color="#2979ff"
    line-width="3"
    background="#f5f5f5"
  />
</template>
```

### 禁用状态

通过 `disabled` 属性设置禁用状态。

```html
<template>
  <var-signature v-model="signature" disabled />
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 签名的值（base64格式） | _string_ | `''` |
| `color` | 画笔颜色 | _string_ | `#000` |
| `line-width` | 画笔粗细 | _string \| number_ | `2` |
| `background` | 画布背景色 | _string_ | `#fff` |
| `width` | 画布宽度 | _string \| number_ | `100%` |
| `height` | 画布高度 | _string \| number_ | `200` |
| `disabled` | 是否禁用 | _boolean_ | `false` |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `start` | 开始签名时触发 | `event: TouchEvent` |
| `signing` | 签名过程中触发 | `event: TouchEvent` |
| `end` | 结束签名时触发 | `event: TouchEvent` |
| `change` | 签名内容变化时触发 | `value: string` |

### 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| `clear` | 清除签名 | `-` |
| `save` | 保存签名，返回 base64 格式的图片数据 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--signature-background` | `#fff` |
| `--signature-border-color` | `#e0e0e0` |
| `--signature-border-radius` | `4px` |

### 示例

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const signature = ref('')

const handleSave = async () => {
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
      height="300"
      color="#2979ff"
      line-width="3"
    />
    
    <template #footer>
      <var-space>
        <var-button type="primary" @click="handleSave">
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

1. 签名数据以 base64 格式存储，可能会占用较大空间，建议在上传服务器前进行压缩处理。
2. 在移动设备上使用时，建议设置适当的画布大小以获得更好的签名体验。
3. 可以通过 CSS 自定义画布的边框、圆角等样式。