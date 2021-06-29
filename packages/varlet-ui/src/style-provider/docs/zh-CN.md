# 样式定制

组件库通过[css变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)来组织样式，每个组件都有对应的样式变量，
您可以通过css文件覆盖的方式直接替换根节点上的样式变量, 或者使用StyleProvider组件。

### 基本样式变量

以下是组件库一些基本的样式变量

```css
:root {
  --font-size-xs: 10px;
  --font-size-sm: 12px;
  --font-size-md: 14px;
  --font-size-lg: 16px;
  --icon-size-xs: 16px;
  --icon-size-sm: 18px;
  --icon-size-md: 20px;
  --icon-size-lg: 22px;
  --color-primary: #3a7afe;
  --color-info: #00afef;
  --color-success: #00c48f;
  --color-warning: #ff9f00;
  --color-danger: #f44336;
  --color-disabled: #e0e0e0;
  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);
}
```

### 运行时修改样式

可能您有在程序运行时替换样式的需求，比如一键换肤之类的，组件库提供了StyleProvider组件来辅助管理样式，
组件提供了`组件式调用`和`函数式调用`和两种调用方式。

### 引入

```js
import { createApp } from 'vue'
import { StyleProvider } from '@varlet/ui'

createApp().use(StyleProvider)
```

### 局部引入

```js
import { StyleProvider } from '@varlet/ui'

export default {
  components: {
    [StyleProvider.Component.name]: StyleProvider
  }
}
```

### 组件式调用

组件式调用可以有范围性的定制组件样式，避免了全局污染，需要注意是有些使用`teleport`传送到`StyleProvider`外的元素将不会生效。

```html
<var-style-provider :style-vars="styleVars">
  <var-rate v-model="state.score" />
  <var-switch v-model="state.license" />
  <var-button 
    style="margin-top: 10px" 
    type="primary"
    block
    @click="toggleTheme"
  >
    切换样式变量
  </var-button>
</var-style-provider>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const state = reactive({
      score: 5,
      license: true,
    })
    const primaryTheme = {
      '--theme-name': 'primary',
      '--rate-primary-color': 'var(--color-primary)',
      '--button-primary-color': 'var(--color-primary)',
      '--switch-handle-active-background': 'var(--color-primary)',
      '--switch-track-active-background': 'var(--color-primary)',
    }
    const successTheme = {
      '--theme-name': 'success',
      '--rate-primary-color': 'var(--color-success)',
      '--button-primary-color': 'var(--color-success)',
      '--switch-handle-active-background': 'var(--color-success)',
      '--switch-track-active-background': 'var(--color-success)',
    }
    const styleVars = ref(primaryTheme)

    const toggleTheme = () => {
      styleVars.value = styleVars.value['--theme-name'] === 'primary' ? successTheme : primaryTheme
    }

    return {
      state,
      styleVars,
      toggleTheme
    }
  }
}
```

### 函数式调用

函数式的调用是直接更新`:root`上的变量，适合需要全局更新样式的情况。

```html
<var-button type="primary" block @click="toggleRootTheme">切换根节点样式变量</var-button>
```

```js
export default {
  setup() {
    const toggleRootTheme = () => {
      const color = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--color-primary')
        .trim()
      
      StyleProvider({
        '--color-primary': color === '#3a7afe' ? '#000' : '#3a7afe',
      })
    }

    return { toggleRootTheme }
  }
}
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `style-vars` | css变量 | _Record<string, string>_ | `{}` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 组件内容 | `-` |