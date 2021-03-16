# 导航栏

## 使用演示

### 引入

```js
import { createApp } from 'vue'
import { AppBar } from '@varlet/ui'

createApp().use(AppBar)
```

### 基础导航栏

```html

<var-app-bar title='标题'></var-app-bar>
```

### 自定义样式导航栏

```html

<var-app-bar title='标题' title-text-align='center' color='#ff9800' :is-shadow='false'></var-app-bar>
```

### 添加标题处插槽

```html

<var-app-bar>从插槽处添加标题</var-app-bar>
```

### 添加左侧插槽导航栏

```html

<var-app-bar title='标题'>
  <template #left>
    <var-button round @click='goBack' color='transparent' text-color='#ffffff' text>
      <var-icon name='chevron-left' :size='24' />
    </var-button>
  </template>
</var-app-bar>
```

```js
import { defineComponent } from 'vue'
import { Snackbar } from '@varlet/ui'

export default defineComponent({
  setup() {
    const goBack = () => {
      Snackbar.info('返回')
    }

    return {
      goBack
    }
  }
})
```

### 添加右侧插槽导航栏

```html

<var-app-bar title='标题'>
  <template #right>
    <var-button round @click='searchData' color='transparent' text-color='#ffffff' text>
      <var-icon name='magnify' :size='24' />
    </var-button>
  </template>
</var-app-bar>
```

```js
import { defineComponent } from 'vue'
import { Snackbar } from '@varlet/ui'

export default defineComponent({
  setup() {
    const searchData = () => {
      Snackbar.info('搜索')
    }

    return {
      searchData
    }
  }
})
```

### 添加左右两侧插槽导航栏

```html

<var-app-bar title='标题'>
  <template #left>
    <var-button round @click='goBack' color='transparent' text-color='#ffffff' text>
      <var-icon name='chevron-left' :size='24' />
    </var-button>
  </template>
  <template #right>
    <var-menu :offset-y='38' :offset-x='-20' v-model:show='offsetY'>
      <var-button round @click='offsetY = true' color='transparent' text-color='#ffffff' text>
        <var-icon name='menu' :size='24' />
      </var-button>
      <template #menu>
        <div class='menu-list'>
          <var-cell v-for='value in menuList' :key='value.value' class='menu-cell' v-ripple>
            {{ value.label }}
          </var-cell>
        </div>
      </template>
    </var-menu>
  </template>
</var-app-bar>
```

```js
import { defineComponent, Ref, ref } from 'vue'
import { Snackbar } from '@varlet/ui'

type MenuRules = {
  label: string,
  value: string,
}

export default defineComponent({
  setup() {
    const offsetY: Ref<boolean> = ref(false)
    const menuList: Ref<MenuRules[]> = ref([
      { label: '选项一', value: 'menu1' },
      { label: '选项二', value: 'menu2' }
    ])

    const goBack = () => {
      Snackbar.info('返回')
    }

    return {
      offsetY,
      menuList,
      goBack
    }
  }
})
```

```css
.var-menu {
  background: transparent;
}

.menu-list {
  background: #fff;
}

.menu-list .menu-cell {
  display: block;
  padding: 10px;
}
```

### 属性

|参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| color | 背景颜色 | _string_ | `#2979ff` |
| text-color | 文字颜色 | _string_ | `#ffffff` |
| title | 标题 | _string_ | `''` |
| title-text-align | 标题位置 | _string_ | `left` |
| is-shadow | 是否使用阴影 | _boolean_ | `true` |

### 插槽

| 名称 | 说明 | 参数 |
| ---- | ---- | ----|
| default | 默认插槽，自定义标题,会覆盖`title`内容 | _ |
| left | 插入至导航栏的左侧，自定义左侧内容 | _ |
| right | 插入至导航栏的右侧，自定义右侧内容 | _ |

