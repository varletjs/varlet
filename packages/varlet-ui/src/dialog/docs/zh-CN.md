# 对话框

### 介绍
弹出一个对话框展示内容并处理用户交互。
`Dialog`提供了函数式和组件式两种使用方式，两种使用效果和参数并没有本质区别。

### 引入

```js
import { createApp } from 'vue'
import { Dialog } from '@varlet/ui'

createApp().use(Dialog)
```

### 局部引入

```js
import { Dialog } from '@varlet/ui'

export default {
  components: {
    [Dialog.Component.name]: Dialog
  }
}
```

### 函数调用
#### 基本使用

```js
Dialog('兰亭临帖 行书如行云流水')
```

#### 修改标题

```js
Dialog({
  title: '兰亭序',
  message: '兰亭临帖 行书如行云流水',
})
```

#### 隐藏按钮

```js
Dialog({
  message: '兰亭临帖 行书如行云流水',
  confirmButton: false,
  cancelButton: false,
})
```

#### 处理用户行为

可以通过`Dialog`方法的返回值获取用户行为, 返回值是一个`promise`。
包含`confirm(确认)`、`cancel(取消)`、`close(通过点击遮罩层触发关闭)`三种状态。

```js
import { Snackbar } from '@varlet/ui'

const actions = {
  confirm: () => Snackbar.success('confirm'),
  cancel: () => Snackbar.error('cancel'),
  close: () => Snackbar.info('close'),
}

actions[await Dialog('兰亭临帖 行书如行云流水')]()
```

### 异步关闭

`Dialog`可以通过`onBeforeClose`进行关闭前的拦截，可以从参数中得到用户行为和触发关闭的回调函数。

```js
import { Snackbar } from '@varlet/ui'

const actions = {
  confirm: () => Snackbar.success('confirm'),
  cancel: () => Snackbar.error('cancel'),
  close: () => Snackbar.info('close'),
}

const onBeforeClose = (action, done) => {
  Snackbar.loading('正在异步关闭')
  
  setTimeout(() => {
    actions[action]()
    done()
  }, 1000)
}

Dialog({
  message: '兰亭临帖 行书如行云流水',
  onBeforeClose
})
```

### 组件调用

#### 基本使用

```html
<var-button type="warning" block @click="show = true">基本使用</var-button>
<var-dialog
  title="兰亭序"
  message="兰亭临帖 行书如行云流水"
  v-model:show="show"
  @confirm="() => Snackbar.success('confirm')"
  @cancel="() => Snackbar.error('cancel')"
  @closed="() => Snackbar.info('closed')"
/>
```

```js
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const show = ref(false)

    return {
      show,
      Snackbar,
    }
  }
}
```

#### 异步关闭

```html
<var-button type="warning" block @click="show = true">异步关闭</var-button>
<var-dialog
  title="兰亭序"
  message="兰亭临帖 行书如行云流水"
  v-model:show="show"
  @before-close="onBeforeClose"
/>
```

```js
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const actions = {
  confirm: () => Snackbar.success('confirm'),
  cancel: () => Snackbar.error('cancel'),
  close: () => Snackbar.info('close'),
}

export default {
  setup() {
    const show = ref(false)

    const onBeforeClose = (action, done) => {
      Snackbar.loading('正在异步关闭')

      setTimeout(() => {
        actions[action]()
        done()
      }, 1000)
    }

    return {
      show,
      Snackbar,
      onBeforeClose,
    }
  }
}
```

#### 自定义插槽

```html
<var-button type="warning" block @click="show = true">自定义插槽</var-button>
<var-dialog v-model:show="show">
  <template #title>
    <var-icon name="information" color="#2979ff" />
  </template>

  <var-cell>兰亭临帖 行书如行云流水</var-cell>
  <var-cell>兰亭临帖 行书如行云流水</var-cell>
  <var-cell>兰亭临帖 行书如行云流水</var-cell>
</var-dialog>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const show = ref(false)

    return { show }
  }
}
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `v-model:show` | 是否显示对话框 | _boolean_ | `false` |
| `title` | 对话框标题 | _string_ | `提示` |
| `message` | 对话框内容 | _string_ | `-` |
| `message-align` | 对话框内容文字对齐方式，可选值 `center`, `left`, `right` | _string_ | `left` |
| `confirm-button` | 是否显示确认按钮 | _boolean_ | `true` |
| `cancel-button` | 是否显示取消按钮 | _boolean_ | `true` |
| `confirm-button-text` | 确认按钮文字 | _string_ | `确认` |
| `cancel-button-text` | 取消按钮文字 | _string_ | `取消` |
| `confirm-button-text-color` | 确认按钮文字颜色 | _string_ | `-` |
| `cancel-button-text-color` | 取消按钮文字颜色 | _string_ | `-` |
| `confirm-button-color` | 确认按钮背景颜色 | _string_ | `-` |
| `cancel-button-color` | 取消按钮背景颜色 | _string_ | `-` |
| `overlay` | 是否显示遮罩层 | _boolean_ | `true` |  
| `overlay-class` | 自定义遮罩层的class | _string_ | `-` |
| `overlay-style` | 自定义遮罩层的style | _string_ | `-` |
| `lock-scroll` | 是否禁止滚动穿透，禁止时滚动弹出层不会引发body的滚动 | _boolean_ | `true` |
| `close-on-click-overlay` | 是否点击遮罩层关闭弹出层 | _boolean_ | `true` | 
| `teleport` | 弹出层挂载的位置 | _TeleportProps['to']_ | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `open` | 打开对话框时触发 | `-` |
| `opened` | 打开对话框动画结束时触发 | `-` |
| `before-close` | 对话框关闭前触发，会阻止关闭 | `action: confirm \| cancel \| close` <br> `done: Function` |
| `close` | 关闭对话框时触发 | `-` |
| `closed` | 关闭对话框动画结束时触发 | `-` |
| `confirm` | 确认时触发 | `-` |
| `cancel` | 取消时触发 | `-` |
| `click-overlay` | 点击遮罩层时触发 | `-` |

### Dialog Options
#### 函数式调用时传入的选项
| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `title` | 对话框标题 | _string_ | `提示` |
| `message` | 对话框内容 | _string_ | `-` |
| `messageAlign` | 对话框内容文字对齐方式，可选值 `center` `left` `right` | _string_ | `left` |
| `confirmButton` | 是否显示确认按钮 | _boolean_ | `true` |
| `cancelButton` | 是否显示取消按钮 | _boolean_ | `true` |
| `confirmButtonText` | 确认按钮文字 | _string_ | `确认` |
| `cancelButtonText` | 取消按钮文字 | _string_ | `取消` |
| `confirmButtonTextColor` | 确认按钮文字颜色 | _string_ | `-` |
| `cancelButtonTextColor` | 取消按钮文字颜色 | _string_ | `-` |
| `confirmButtonColor` | 确认按钮背景颜色 | _string_ | `-` |
| `cancelButtonColor` | 取消按钮背景颜色 | _string_ | `-` |
| `overlay` | 是否显示遮罩层 | _boolean_ | `true` |  
| `overlayClass` | 自定义遮罩层的class | _string_ | `-` |
| `overlayStyle` | 自定义遮罩层的style | _string_ | `-` |
| `lockScroll` | 是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动 | _boolean_ | `true` |
| `closeOnClickOverlay` | 是否点击遮罩层关闭弹出层 | _boolean_ | `true` |
| `onOpen` | 对话框开启回调 | _() => void_ | `-` |
| `onOpened` | 对话框开启动画结束回调 | _() => void_ | `-` |
| `onBeforeClose` | 对话框关闭前回调，会阻止关闭 | _(action: confirm \| cancel \| close, done: Function) => void_ | `-` |
| `onClose` | 对话框关闭回调 | _() => void_ | `-` |
| `onClosed` | 对话框关闭动画结束回调 | _() => void_ | `-` |
| `onConfirm` | 确认回调 | _() => void_ | `-` |
| `onCancel` | 取消回调 | _() => void_ | `-` |
| `onClickOverlay` | 遮罩层点击回调 | _() => void_ | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 对话框主要内容 | `-` |
| `title` | 对话框标题 | `-` |

### 样式变量
以下为组件使用的css变量,可以使用[StyleProvider组件](#/zh-CN/style-provider)进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--dialog-width` | `280px` |
| `--dialog-background` | `#fff` |
| `--dialog-border-radius` | `2px` |
| `--dialog-title-padding` | `20px 20px 0` |
| `--dialog-title-font-size` | `var(--font-size-lg)` |
| `--dialog-message-color` | `#888` |
| `--dialog-message-padding` | `12px 20px` |
| `--dialog-message-line-height` | `24px` |
| `--dialog-message-font-size` | `var(--font-size-md)` |
| `--dialog-actions-padding` | `0 12px 12px` |
| `--dialog-button-margin-left` | `6px` |
| `--dialog-confirm-button-color` | `var(--color-primary)` |
| `--dialog-cancel-button-color` | `var(--color-primary)` |