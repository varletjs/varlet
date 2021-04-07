# 导航栏

### 引入

```js
import { createApp } from 'vue'
import { AppBar } from '@varlet/ui'

createApp().use(AppBar)
```

### 基础导航栏

通过设置`title`属性自定义导航栏标题

```html
<var-app-bar title="标题"></var-app-bar>
```

### 自定义样式导航栏

通过设置`title-position`属性自定义标题所处位置，设置`color`属性自定义导航栏颜色，设置`is-shasow`属性定义导航栏是否显示阴影

```html
<var-app-bar 
  title="标题" 
  title-position="center" 
  color="#ff9800" 
  :is-shadow="false" />
```

### 添加标题处插槽

```html
<var-app-bar>从插槽处添加标题</var-app-bar>
```

### 添加左侧插槽导航栏

```html
<var-app-bar title="title">
  <template #left>
    <var-button
      round
      text
      color="transparent"
      text-color="#ffffff"
      @click="goBack">
      <var-icon name="chevron-left" :size="24" />
    </var-button>
  </template>
</var-app-bar>
```

```js
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const goBack = () => {
      Snackbar({
        content: '返回',
        position: 'top'
      })
    }

    return {
      goBack
    }
  }
}
```

### 添加右侧插槽导航栏

```html
<var-app-bar title="标题">
  <template #right>
    <var-button
      round
      text
      color="transparent"
      text-color="#ffffff"
      @click="searchData">
      <var-icon name="magnify" :size="24" />
    </var-button>
  </template>
</var-app-bar>
```

```js
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const searchData = () => {
      Snackbar({
        content: '搜索',
        position: 'top'
      })
    }

    return {
      searchData
    }
  }
}
```

### 添加左右两侧插槽导航栏

```html
<var-app-bar title="标题">
  <template #left>
    <var-button
      round
      text
      color="transparent"
      text-color="#ffffff"
      @click="goBack">
      <var-icon name="chevron-left" :size="24" />
    </var-button>
  </template>

  <template #right>
    <var-menu :offset-y="38" :offset-x="-20" v-model:show="offsetY">
      <var-button
        round
        text
        color="transparent"
        text-color="#ffffff"
        @click="offsetY = true">
        <var-icon name="menu" :size="24" />
      </var-button>

      <template #menu>
        <div class="menu-list">
          <var-cell
            class="menu-cell"
            v-for="value in menuList"
            :key="value.value"
            v-ripple>
            {{ value.label }}
          </var-cell>
        </div>
      </template>
    </var-menu>
  </template>
</var-app-bar>
```

```js
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const offsetY = ref(false)
    const menuList = ref([
      { label: '选项一', value: 'menu1' },
      { label: '选项二', value: 'menu2' }
    ])

    const goBack = () => {
      Snackbar({
        content: '返回',
        position: 'top'
      })
    }

    return {
      offsetY,
      menuList,
      goBack
    }
  }
}
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
| `color` | 背景颜色 | _string_ | `#2979ff` |
| `text-color` | 文字颜色 | _string_ | `#ffffff` |
| `title` | 标题 | _string_ | `_` |
| `title-position` | 标题位置,可选值为 `left`,`center`,`right` | _string_ | `left` |
| `is-shadow` | 是否使用阴影 | _boolean_ | `true` |

### 插槽

| 名称 | 说明 | 参数 |
| ---- | ---- | ----|
| `default` | 自定义标题内容,会覆盖`title`的内容 | `_` |
| `left` | 插入至导航栏左侧的内容 | `_` |
| `right` | 插入至导航栏右侧的内容 | `_` |

