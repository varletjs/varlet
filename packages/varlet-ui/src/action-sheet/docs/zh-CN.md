# 动作面板

### 介绍
弹出一个动作面板提供用户选择选项的能力。
`ActionSheet`提供了函数式和组件式两种使用方式，两种使用效果和参数并没有本质区别。
函数返回一个`Promise`，选择时返回`当前选择的action`，点击遮罩层关闭返回`close`。

### 引入

```js
import { createApp } from 'vue'
import { ActionSheet } from '@varlet/ui'

createApp().use(ActionSheet)
```

### 局部引入

```js
import { ActionSheet } from '@varlet/ui'

export default {
  components: {
    [ActionSheet.Component.name]: ActionSheet
  }
}
```

### 函数调用
#### 基本使用

```js
import { Snackbar } from '@varlet/ui'

const action = await ActionSheet({
  actions: [
    {
      name: 'Item 01',
      icon: 'account-circle',
    },
    {
      name: 'Item 02',
      icon: 'notebook',
    },
    {
      name: 'Item 03',
      icon: 'wifi',
    }
  ]
})

action !== 'close' && Snackbar(`您选择的是:${action.name}`)
```

#### 修改标题

```js
ActionSheet({
  actions: [
    {
      name: 'Item 01',
      icon: 'account-circle',
    },
    {
      name: 'Item 02',
      icon: 'notebook',
    },
    {
      name: 'Item 03',
      icon: 'wifi',
    }
  ],
  title: '选择一个你喜欢的吧'
})
```

#### 禁用选项

选项传入`disabled`可以使选项处于禁用状态

```js
ActionSheet({
  actions: [
    {
      name: 'Item 01',
      icon: 'account-circle',
    },
    {
      name: 'Item 02',
      icon: 'notebook',
    },
    {
      name: 'Item 03',
      icon: 'wifi',
      disabled: true,
    },
  ]
})
```

#### 禁用点击选项时关闭动作面板

方法传入`closeOnClickAction`可以禁用在选择选项时`ActionSheet`自动关闭的行为，用户可以多次选择，
由于`Promise`只会被`resolve`一次，所以推荐使用`onSelect`监听用户选择行为。

```js
import { Snackbar } from '@varlet/ui'

ActionSheet({
  actions: [
    {
      name: 'Item 01',
      icon: 'account-circle',
    },
    {
      name: 'Item 02',
      icon: 'notebook',
    },
    {
      name: 'Item 03',
      icon: 'wifi',
    },
  ],
  closeOnClickAction: false,
  onSelect: action => Snackbar(`您选择的是:${action.name}`),
})
```

### 自定义选项样式

选项提供了可以配置样式的参数，具体选项的参数可选项见`Action的数据结构`

```js
import { Snackbar } from '@varlet/ui'

ActionSheet({
  actions: [
    {
      name: 'Item 01',
      icon: 'account-circle',
      color: '#10ca93',
    },
    {
      name: 'Item 02',
      icon: 'notebook',
      color: '#ff9800',
    },
    {
      name: 'Item 03',
      icon: 'wifi',
      color: '#00afef',
    },
  ]
})
```

### 组件调用

#### 基本使用

```html
<var-button type="warning" block @click="show = true">基本使用</var-button>
<var-action-sheet 
  :actions="actions"
  v-model:show="show"
  @select="handleSelect"
/>
```

```js
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const show = ref(false)
    const actions = reactive([
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
      },
    ])
    
    const handleSelect = action => Snackbar(`你选择的是:${action.name}`)

    return {
      show,
      actions,
      handleSelect
    }
  }
}
```

#### 修改标题

```html
<var-button type="warning" block @click="show = true">修改标题</var-button>
<var-action-sheet 
  title="选择一个你喜欢的吧" 
  :actions="actions" 
  v-model:show="show" 
  @select="handleSelect" 
/>
```

```js
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const show = ref(false)
    const actions = reactive([
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
      },
    ])

    const handleSelect = action => Snackbar(`你选择的是:${action.name}`)

    return {
      show,
      actions,
      handleSelect
    }
  }
}
```

#### 禁用选项

```html
<var-button type="warning" block @click="show = true">禁用选项</var-button>
<var-action-sheet 
  :actions="actions" 
  v-model:show="show"
  @select="handleSelect" 
/>
```

```js
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const show = ref(false)
    const actions = reactive([
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
        disabled: true,
      },
    ])

    const handleSelect = action => Snackbar(`你选择的是:${action.name}`)

    return {
      show,
      actions,
      handleSelect
    }
  }
}
```

#### 禁用点击选项时关闭动作面板

```html
<var-button type="warning" block @click="show = true">禁用点击选项时关闭动作面板</var-button>
<var-action-sheet 
  :close-on-click-action="false"
  :actions="actions" 
  v-model:show="show" 
  @select="handleSelect"
/>
```

```js
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const show = ref(false)
    const actions = reactive([
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
      },
    ])

    const handleSelect = action => Snackbar(`你选择的是:${action.name}`)

    return {
      show,
      actions,
      handleSelect
    }
  }
}
```

#### 自定义选项样式

```html
<var-button type="warning" block @click="show = true">自定义选项样式</var-button>
<var-action-sheet 
  :close-on-click-action="false"
  :actions="actions" 
  v-model:show="show" 
  @select="handleSelect"
/>
```

```js
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const show = ref(false)
    const actions = reactive([
      {
        name: 'Item 01',
        icon: 'account-circle',
        color: '#10ca93',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
        color: '#ff9800',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
        color: '#00afef',
      },
    ])

    const handleSelect = action => Snackbar(`你选择的是:${action.name}`)

    return {
      show,
      actions,
      handleSelect
    }
  }
}
```


## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | 
| `v-model:show` | 是否显示动作面板 | _boolean_ | `false` |
| `actions` | 选项列表 | _Actions_ | `[]` |
| `title` | 动作面板标题 | _string_ | `请选择` |
| `overlay` | 是否显示遮罩层 | _boolean_ | `true` |  
| `overlay-class` | 自定义遮罩层的class | _string_ | `-` |
| `overlay-style` | 自定义遮罩层的style | _string_ | `-` |
| `lock-scroll` | 是否禁止滚动穿透，禁止时滚动弹出层不会引发body的滚动 | _boolean_ | `true` |
| `close-on-click-action` | 是否点击选项时关闭动作面板 | _boolean_ | `true` |
| `close-on-click-overlay` | 是否点击遮罩层关闭动作面板 | _boolean_ | `true` | 
| `teleport` | 动作面板挂载的位置 | _string_ | `body` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `select` | 选择选项时出发 | `action: Action` |
| `open` | 打开动作面板时触发 | `-` |
| `opened` | 打开动作面板动画结束时触发 | `-` |
| `close` | 关闭动作面板时触发 | `-` |
| `closed` | 关闭动作面板动画结束时触发 | `-` |
| `click-overlay` | 点击遮罩层时触发 | `-` |

### ActionSheet Options
#### 函数式调用时传入的选项

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `title` | 动作面板标题 | _string_ | `请选择` |
| `overlay` | 是否显示遮罩层 | _boolean_ | `true` |  
| `overlayClass` | 自定义遮罩层的class | _string_ | `-` |
| `overlayStyle` | 自定义遮罩层的style | _string_ | `-` |
| `lockScroll` | 是否禁止滚动穿透，禁止时滚动弹出层不会引发body的滚动 | _boolean_ | `true` |
| `closeOnClickOverlay` | 是否点击遮罩层关闭弹出层 | _boolean_ | `true` |
| `onOpen` | 动作面板开启回调 | _() => void_ | `-` |
| `onOpened` | 动作面板开启动画结束回调 | _() => void_ | `-` |
| `onClose` | 动作面板关闭回调 | _() => void_ | `-` |
| `onClosed` |动作面板关闭动画结束回调 | _() => void_ | `-` |
| `onSelect` | 选项选择时回调 | _(action: Action) => void_ | `-` |
| `onClickOverlay` | 遮罩层点击回调 | _() => void_ | `-` |

### ActionSheet Action

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `name` | 选项名称 | _string_ | `-` |
| `color` | 选项文字颜色 | _string_ | `-` |  
| `icon` | icon图标，支持网络图片地址 | _string_ | `-` |
| `iconSize` | 图标尺寸 | _string_ | `-` |
| `className` | 选项附加类名 | _string_ | `-` |
| `disabled` | 是否禁用选项 | _boolean_ | `false` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `actions` | 选项列表 | `-` |
| `title` | 动作面板标题 | `-` |

### 主题变量
#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

| 变量名 | 默认值 |
| --- | --- |
| `@action-sheet-border-radius` | `2px` |
| `@action-sheet-background` | `#fff` |
| `@action-sheet-title-color` | `#888` |
| `@action-sheet-title-padding` | `10px 16px` |
| `@action-sheet-title-font-size` | `14px` |
| `@action-sheet-action-item-height` | `48px` |
| `@action-sheet-action-item-padding` | `0px 18px` |
| `@action-sheet-action-item-color` | `#333` |
| `@action-sheet-action-item-disabled-color` | `@color-disabled` |
| `@action-sheet-icon-margin` | `0 0 20px 0` |
| `@action-sheet-icon-size` | `24px` |