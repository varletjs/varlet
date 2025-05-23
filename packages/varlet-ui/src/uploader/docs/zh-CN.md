# 文件上传

### 介绍

提供了文件读取、图片/视频预览能力。通过监听 `after-read` 事件获取文件上传服务器。

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const files = ref([])

function handleAfterRead(file) { 
  console.log(file)
}
</script>

<template>
  <var-uploader v-model="files" @after-read="handleAfterRead"/>
</template>
```

### 文件预览

通过分析文件的 url 后缀名判断文件类型，支持图片和视频预览。

```html
<script setup>
import { ref } from 'vue'

const files = ref([
  {
    url: 'https://varletjs.org/cat.jpg',
    cover: 'https://varletjs.org/cat.jpg'
  },
  {
    url: 'https://www.runoob.com/try/demo_source/mov_bbb.mp4',
    cover: 'https://varletjs.org/cover.jpg'
  }
])
</script>

<template>
  <var-uploader v-model="files"/>
</template>
```

### 自定义预览

```html
<script setup>
import { ref } from 'vue'
import { Dialog } from '@varlet/ui'

const files = ref([
  {
    url: 'https://varletjs.org/cat.jpg',
    cover: 'https://varletjs.org/cat.jpg'
  }
])

function handlePreview(file) {
  Dialog({
    title: '自定义预览',
    message: file.url.slice(0, 100)
  })
}
</script>

<template>
  <var-uploader v-model="files" prevent-default-preview @preview="handlePreview"/>
</template>
```

### 上传状态

提供了 `loading`、 `success`、 `error` 三种上传状态，并提供了工具函数快速获取对应状态的文件。

```html
<script setup>
import { ref } from 'vue'

const files = ref([
  {
    url: 'https://varletjs.org/cat.jpg',
    cover: 'https://varletjs.org/cat.jpg',
    state: 'loading'
  },
  {
    url: 'https://varletjs.org/cat.jpg',
    cover: 'https://varletjs.org/cat.jpg',
    state: 'success'
  },
  {
    url: 'https://varletjs.org/cat.jpg',
    cover: 'https://varletjs.org/cat.jpg',
    state: 'error'
  }
])

function handleAfterRead(file) {
  file.state = 'loading'

  setTimeout(() => {
    file.state = 'success'
  }, 1000)
}
</script>

<template>
  <var-uploader v-model="files" @after-read="handleAfterRead"/>
</template>
```

### 使用进度条

```html
<script setup>
import { ref, onUnmounted } from 'vue'

const files = ref([])
let timer

function handleAfterRead(file) {
  file.state = 'loading'

  timer = window.setInterval(() => {
    if (file.progress === 100) {
      window.clearInterval(timer)
      file.state = 'success'
      return
    }

    file.progress += 10
  }, 250)
}

onUnmounted(() => {
  window.clearInterval(timer)
})
</script>

<template>
  <var-uploader v-model="files" @after-read="handleAfterRead"/>
</template>
```

### 文件数量限制

```html
<script setup>
import { ref } from 'vue'

const files = ref([])
</script>

<template>
  <var-uploader v-model="files" :maxlength="1"/>
</template>
```

### 文件大小限制

超过限制会被阻止读取，可以通过监听 `oversize` 事件获取文件。

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const files = ref([])
</script>

<template>
  <var-uploader v-model="files" :maxsize="1024" @oversize="Snackbar.warning('文件大小超出限制')" />
</template>
```

### 文件列表过滤

通过 `before-filter` 事件对文件进行过滤，返回一个被过滤之后的 `VarFile` 数组。

```html
<script setup>
import { ref } from 'vue'

const files = ref([])

function handleBeforeFilter(files) {
  return files.filter(file => file.name.endsWith('png'))
}
</script>

<template>
  <var-uploader v-model="files" multiple @before-filter="handleBeforeFilter" />
</template>

```

### 上传预处理

通过注册 `before-read` 事件对文件进行操作，返回假值阻止文件读取。

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const files = ref([])

function handleBeforeRead(file) {
  if (file.file.size <= 1 * 1024 * 1024) {
    Snackbar.success('文件小于1M，上传成功')
    return true
  } else {
    Snackbar.warning('文件大于1M，不能上传')
    return false
  }
}
</script>

<template>
  <var-uploader v-model="files" @before-read="handleBeforeRead"/>
</template>
```

### 上传按钮点击事件

通过注册 `click-action` 事件可以拦截上传按钮的点击行为，通过回调中的 `chooseFile` 方法进行手动触发浏览器选择文件操作。

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const files = ref([])

function handleClickAction(chooseFile) {
  Snackbar.loading('delay 1s')

  window.setTimeout(() => {
    Snackbar.clear()
    chooseFile()
  }, 1000)
}
</script>

<template>
  <var-uploader v-model="files" @click-action="handleClickAction" />
</template>
```

### 禁用

```html
<script setup>
import { ref } from 'vue'

const files = ref([])
</script>

<template>
  <var-uploader disabled v-model="files"/>
</template>
```

### 只读

```html
<script setup>
import { ref } from 'vue'

const files = ref([])
</script>

<template>
  <var-uploader readonly v-model="files"/>
</template>
```

### 删除前处理

删除文件之前会触发 `before-remove` 事件，返回假值阻止删除操作。

```html
<script setup>
import { ref } from 'vue'
import { Dialog } from '@varlet/ui'

const files = ref([
  {
    url: 'https://varletjs.org/cat.jpg',
    cover: 'https://varletjs.org/cat.jpg'
  }
])

async function handleBeforeRemove() {
  const action = await Dialog({
    title: '是否删除?',
    message: '删除后无法撤回'
  })

  return action === 'confirm'
}
</script>

<template>
  <var-uploader v-model="files" @before-remove="handleBeforeRemove" />
</template>
```

### 自定义上传样式

```html
<script setup>
import { ref } from 'vue'

const files = ref()
</script>

<template>
  <var-uploader v-model="files">
    <var-button type="primary">上传</var-button>
  </var-uploader>
</template>
```

### 字段校验

通过传入一个校验器数组可以对值进行校验，校验器返回 `true` 则为校验通过。
以外的值将转换为文本作为用户提示。
第二个参数是一个工具函数集合，可以快速获取符合状态的文件集合。

```html
<script setup>
import { ref } from 'vue'

const files = ref([
  {
    url: 'https://varletjs.org/cat.jpg',
    cover: 'https://varletjs.org/cat.jpg',
    state: 'error',
  },
])
</script>

<template>
  <var-uploader
    :rules="(v, u) => u.getError().length === 0 || '存在上传失败的文件'"
    v-model="files"
  />
</template>
```

### 使用 Zod 进行校验

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const files = ref([
  {
    url: 'https://varletjs.org/cat.jpg',
    cover: 'https://varletjs.org/cat.jpg',
    state: 'error',
  },
])
</script>

<template>
  <var-uploader
    :rules="
      z.array(z.any()).refine(v => v.filter(file => file.state === 'error').length === 0, '存在上传失败的文件')
    "
    v-model="files"
  />
</template>
```

### 自定义渲染

通过 `hide-list` 隐藏组件的文件列表，自定义文件列表的渲染逻辑。

```html
<script setup>
import { ref } from 'vue'

const files = ref([
  {
    url: 'https://varletjs.org/cat.jpg',
    cover: 'https://varletjs.org/cat.jpg',
    state: 'loading',
  },
  {
    url: 'https://varletjs.org/cat.jpg',
    cover: 'https://varletjs.org/cat.jpg',
    state: 'success',
  },
  {
    url: 'https://varletjs.org/cat.jpg',
    cover: 'https://varletjs.org/cat.jpg',
    state: 'error',
  },
])
</script>

<template>
  <var-space>
    <img
      class="uploader-example-file"
      v-for="f in files"
      :key="f.id"
      :src="f.cover"
    />
    <var-uploader hide-list v-model="files">
      <var-button round type="primary">
        <var-icon :size="28" name="upload" />
      </var-button>
    </var-uploader>
  </var-space>
</template>

<style>
.uploader-example-file {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 12px;
  object-fit: cover;
}
</style>
```

### 自定义删除按钮

```html
<script setup>
import { ref } from 'vue'

const files = ref([
  {
    url: 'https://varletjs.org/cat.jpg',
    cover: 'https://varletjs.org/cat.jpg'
  },
  {
    url: 'https://www.runoob.com/try/demo_source/mov_bbb.mp4',
    cover: 'https://varletjs.org/cover.jpg'
  }
])
</script>

<template>
  <var-uploader v-model="files">
    <template #remove-button="{ remove }">
      <div class="custom-remove-button">
        <var-icon color="#fff" name="window-close" @click.stop="remove"></var-icon>
      </div>
    </template>
  </var-uploader>
</template>

<style>
.custom-remove-button {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
}
</style>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 文件列表 | _VarFile[]_ | `[]` |
| `accept` | 接受的文件类型，与原生属性一致 | _string_ | `image/*` |
| `capture` | 获取文件方式，与原生属性一致 | _string_ | `-` |
| `multiple` | 是否多选文件 | _boolean_ | `false` |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `disabled` | 是否禁用 | _boolean_ | `false` |
| `elevation`| 海拔高度，可选值为 `true` `false` 和 `0-24` 的等级, 不为简单模式时生效 | _string \| number \| boolean_|   `true`    |
| `removable` | 是否可以删除 | _boolean_ | `true` |
| `maxlength` | 最大文件个数 | _string \| number_ | `-` |
| `maxsize` | 最大文件大小，单位为 `byte` | _string \| number_ | `-` |
| `previewed` | 是否允许预览 | _boolean_ | `true` |
| `prevent-default-preview` | 阻止默认预览行为 | _boolean_ | `false` |
| `ripple` | 是否开启水波纹 | _boolean_ | `true` |
| `hide-list` | 是否隐藏文件列表 | _boolean_ | `false` |
| `resolve-type` | 文件预处理类型，可选值为 `default` `file` `data-url`（`default`，图片文件包含 dataURL 编码和 File 对象，其他类型仅包含 File 对象。`file`，仅包含 File 对象。`data-url`，所有文件类型都包含 dataURL 编码和 File 对象） | _string_ | `default` |
| `validate-trigger` | 触发验证的时机， 可选值为 `onChange` `onRemove` | _UploaderValidateTrigger[]_ | `['onChange', 'onRemove']` |
| `rules` | 验证规则，返回 `true` 表示验证通过，其它类型的值将转换为文本作为用户提示。自 `3.5.0` 开始支持 [Zod 验证](#/zh-CN/zodValidation)  | _((v: VarFile[]) => any) \| ZodType \| Array<((v: VarFile[]) => any) \| ZodType>_ | `-` |

### VarFile

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `file` | 原生文件 | _File_ | `-` |
| `name` | 文件名 | _string_ | `-` |
| `url` | 文件地址 | _string_ | `-` |
| `cover` | 封面图 | _string_ | `-` |
| `fit` | 封面图填充模式，可选值为 `fill` `contain` `cover` `none` `scale-down` | _string_ | `-` |
| `state` | 文件上传状态，可选值为 `loading` `success` `error` | _string_ | `-` |
| `progress` | 文件上传进度，范围 [0, 100] | _number_ | `-` |

### VarFileUtils

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `getLoading` | 获取 `state` 等于 `loading` 的文件集合| `-` | `VarFile[]` |
| `getSuccess` | 获取 `state` 等于 `success` 的文件集合| `-` | `VarFile[]` |
| `getError` |  获取 `state` 等于 `error` 的文件集合 | `-` | `VarFile[]` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `chooseFile` | 触发选择文件动作，显示文件列表 | `-` | `-` |
| `closePreview` | 关闭预览文件弹出层 | `-` | `-` |
| `getLoading` | 获取 `state` 等于 `loading` 的文件集合| `-` | `VarFile[]` |
| `getSuccess` | 获取 `state` 等于 `success` 的文件集合| `-` | `VarFile[]` |
| `getError` |  获取 `state` 等于 `error` 的文件集合 | `-` | `VarFile[]` |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |
| `reset` | 清空绑定的值(设置为 `[]`)和校验信息 | `-` | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `before-filter` | `before-read` 前触发，对文件列表进行过滤 | `files: VarFile[]` |
| `before-read` | 文件读取前触发，返回假值阻止文件读取(支持 promise) | `file: VarFile` |
| `after-read` | 文件读取后触发 | `file: VarFile` |
| `oversize` | 文件超过限制大小时触发 | `file: VarFile` |
| `before-remove` | 文件删除前触发，返回假值阻止文件删除(支持 promise) | `file: VarFile` |
| `remove` | 文件删除时触发 | `file: VarFile` |
| `preview` | 文件预览时触发 | `file: VarFile` |
| `click-action`| 拦截上传按钮的点击行为 | `chooseFile: () => void, event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 上传按钮内容 | `-` |
| `extra-message` | 附加信息 | `-` |
| `remove-button` ***3.8.0*** | 删除按钮 | `remove: () => void` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--uploader-action-background`            | `#f7f8fa`                                                                                    |
| `--uploader-action-icon-color`            | `#888`                                                                                       |
| `--uploader-action-icon-size`             | `24px`                                                                                       |
| `--uploader-action-margin`                | `0 10px 10px 0`                                                                              |
| `--uploader-file-size`                    | `80px`                                                                                       |
| `--uploader-file-margin`                  | `0 10px 10px 0`                                                                              |
| `--uploader-file-name-background`         | `#f7f8fa`                                                                                    |
| `--uploader-file-name-color`              | `#888`                                                                                       |
| `--uploader-file-name-font-size`          | `12px`                                                                                       |
| `--uploader-file-name-padding`            | `10px`                                                                                       |
| `--uploader-file-border-radius`            | `0`                                                                                       |
| `--uploader-file-text-align`              | `center`                                                                                     |
| `--uploader-file-close-background`        | `rgba(0, 0, 0, 0.3)`                                                                         |
| `--uploader-file-close-size`              | `24px`                                                                                       |
| `--uploader-file-close-icon-font-size`    | `14px`                                                                                       |
| `--uploader-file-close-icon-color`        | `#fff`                                                                                       |
| `--uploader-file-cover-fit`               | `cover`                                                                                      |
| `--uploader-file-cover-background`        | `#f7f8fa`                                                                                    |
| `--uploader-preview-video-width`          | `100vw`                                                                                      |
| `--uploader-preview-video-height`         | `100vw`                                                                                      |
| `--uploader-file-indicator-height`        | `4px`                                                                                        |
| `--uploader-file-indicator-normal-color`  | `var(--color-disabled)`                                                                      |
| `--uploader-file-indicator-success-color` | `var(--color-success)`                                                                       |
| `--uploader-file-indicator-error-color`   | `var(--color-danger)`                                                                        |
| `--uploader-file-progress-color`   | `var(--color-primary)`                                                                        |
| `--uploader-disabled-color`               | `#ddd`                                                                                       |
| `--uploader-disabled-text-color`          | `var(--color-text-disabled)`                                                                                       |
| `--uploader-loading-background`           | `linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))` |
