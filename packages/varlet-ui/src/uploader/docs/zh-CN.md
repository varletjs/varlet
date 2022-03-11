# 文件上传

### 介绍
提供了文件读取、图片/视频预览能力。
通过监听 `after-read` 事件获取文件上传服务器。

### 引入

```js
import { createApp } from 'vue'
import { Uploader } from '@varlet/ui'

createApp().use(Uploader)
```

### 基本使用

```html
<var-uploader v-model="files" @after-read="handleAfterRead"/>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const files = ref([])

    const handleAfterRead = file => console.log(file)

    return {
      files,
      handleAfterRead
    }
  }
}
```

### 文件预览

通过分析文件的 url 后缀名判断文件类型，支持图片和视频预览。

```html
<var-uploader v-model="files"/>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const files = ref([
      {
        url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
        cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg'
      },
      {
        url: 'https://www.runoob.com/try/demo_source/mov_bbb.mp4',
        cover: 'https://varlet.gitee.io/varlet-ui/cover.jpg'
      }
    ])

    return { files }
  }
}
```

### 上传状态

提供了 `loading`、 `success`、 `error` 三种上传状态，并提供了工具函数快速获取对应状态的文件。

```html
<var-uploader v-model="files" @after-read="handleAfterRead"/>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const files = ref([
      {
        url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
        cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
        state: 'loading'
      },
      {
        url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
        cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
        state: 'success'
      },
      {
        url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
        cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
        state: 'error'
      }
    ])

    const handleAfterRead = (file) => {
      file.state = 'loading'

      setTimeout(() => {
        file.state = 'success'
      }, 1000)
    }

    return {
      files,
      handleAfterRead
    }
  }
}
```

### 文件数量限制

```html
<var-uploader v-model="files" :maxlength="1"/>
```

### 文件大小限制

超过限制会被阻止读取，可以通过监听 `oversize` 事件获取文件。

```html
<var-uploader v-model="files" :maxsize="1024" @oversize="handleOversize" />
```

```js
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const files = ref([])

    const handleOversize = () => {
      Snackbar.warning('文件大小超出限制')
    }

    return {
      files,
      handleAfterRead
    }
  },
}
```

### 上传预处理

通过注册 `before-read` 事件对文件进行操作，返回假值阻止文件读取。

```html
<var-uploader v-model="files" @before-read="handleBeforeRead"/>
```

```js
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const files = ref([])

    const handleBeforeRead = (file) => {
      if (file.file.size <= 1 * 1024 * 1024) {
        Snackbar.success('文件小于1M，上传成功')
        return true
      } else {
        Snackbar.warning('文件大于1M，不能上传')
        return false
      }
    }

    return {
      files,
      handleAfterRead
    }
  }
}
```

### 禁用

```html
<var-uploader disabled v-model="files"/>
```

### 只读

```html
<var-uploader readonly v-model="files"/>
```

### 删除前处理

删除文件之前会触发 `before-remove` 事件，返回假值阻止删除操作。

```html
<var-uploader v-model="files" @before-remove="handleBeforeRemove" />
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const files = ref([
      {
        url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
        cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg'
      }
    ])

    const handleBeforeRemove = async () => {
      const action = await Dialog({
        title: '是否删除?',
        message: '删除后无法撤回'
      })

      return action === 'confirm'
    }

    return {
      files,
      handleBeforeRemove
    }
  }
}
```

### 自定义上传样式

```html
<var-uploader v-model="files">
  <var-button type="primary">上传</var-button>
</var-uploader>
```

### 字段校验

通过传入一个校验器数组可以对值进行校验，校验器返回 `true` 则为校验通过。
以外的值将转换为文本作为用户提示。
第二个参数是一个工具函数集合，可以快速获取符合状态的文件集合。

```html
<var-uploader
  :rules="[(v, u) => u.getError(v).length === 0 || '存在上传失败的文件']"
  v-model="files"
/>
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
| `removable` | 是否可以删除 | _boolean_ | `true` |
| `maxlength` | 最大文件个数 | _string \| number_ | `-` |
| `maxsize` | 最大文件大小 | _string \| number_ | `-` |
| `previewed` | 是否允许预览 | _boolean_ | `true` |
| `ripple` | 是否开启水波纹 | _boolean_ | `true` |
| `validate-trigger` | 触发验证的时机， 可选值为 `onChange` `onRemove` | _ValidateTriggers[]_ | `['onChange', 'onRemove']` |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(v: VarFile, u: VarFileUtils) => any>_ | `-` |

### VarFile

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `file` | 原生文件 | _File_ | `-` |
| `name` | 文件名 | _string_ | `-` |
| `url` | 文件地址 | _string_ | `-` |
| `cover` | 封面图 | _string_ | `-` |
| `fit` | 封面图填充模式，可选值为 `fill` `contain` `cover` `none` `scale-down` | _string_ | `-` |
| `state` | 文件上传状态，可选值为 `loading` `success` `error` | _string_ | `-` |

### VarFileUtils

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `getLoading` | 获取 `state` 等于 `loading` 的文件集合| `VarFile[]` | `VarFile[]` |
| `getSuccess` | 获取 `state` 等于 `success` 的文件集合| `VarFile[]` | `VarFile[]` |
| `getError` |  获取 `state` 等于 `error` 的文件集合 | `VarFile[]` | `VarFile[]` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `getLoading` | 获取 `state` 等于 `loading` 的文件集合| `VarFile[]` | `VarFile[]` |
| `getSuccess` | 获取 `state` 等于 `success` 的文件集合| `VarFile[]` | `VarFile[]` |
| `getError` |  获取 `state` 等于 `error` 的文件集合 | `VarFile[]` | `VarFile[]` |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |
| `reset` | 清空绑定的值(设置为 `[]`)和校验信息 | `-` | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `before-read` | 文件读取前触发，返回假值阻止文件读取(支持 promise) | `file: VarFile` |
| `after-read` | 文件读取后触发 | `file: VarFile` |
| `oversize` | 文件超过限制大小时触发 | `file: VarFile` |
| `before-remove` | 文件删除前触发，返回假值阻止文件删除(支持 promise) | `file: VarFile` |
| `remove` | 文件删除时触发 | `file: VarFile` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 上传按钮内容 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

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
| `--uploader-disabled-color`               | `#ddd`                                                                                       |
| `--uploader-disabled-text-color`          | `var(--color-text-disabled)`                                                                                       |
| `--uploader-loading-background`           | `linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))` |
