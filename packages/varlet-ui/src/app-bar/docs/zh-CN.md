# 导航栏

### 基础导航栏

通过 `title` 属性设置导航栏标题。

```html
<template>
  <var-app-bar title="标题" />
</template>
```

### 自定义样式

通过 `title-position`、`color` 属性设置标题所处位置、导航栏颜色。

```html
<template>
  <var-app-bar
    title="标题"
    title-position="center"
    color="#00c48f"
  />
</template>
```

### 添加标题处插槽

```html
<template>
  <var-app-bar>从插槽处添加标题</var-app-bar>
</template>
```

### 添加左侧插槽

```html
<script setup>
import { Snackbar } from '@varlet/ui'

const goBack = () => {
  Snackbar({
    content: '返回',
    position: 'top'
  })
}
</script>

<template>
  <var-app-bar title="title">
    <template #left>
      <var-button
        round
        text
        color="transparent"
        text-color="#fff"
        @click="goBack"
      >
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
</template>
```

### 添加右侧插槽

```html
<script setup>
import { Snackbar } from '@varlet/ui'

const searchData = () => {
  Snackbar({
    content: '搜索',
    position: 'top'
  })
}
</script>

<template>
  <var-app-bar title="标题">
    <template #right>
      <var-button
        round
        text
        color="transparent"
        text-color="#ffffff"
        @click="searchData"
      >
        <var-icon name="magnify" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
</template>
```

### 添加左右插槽

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

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
</script>

<template>
  <var-app-bar title="标题">
    <template #left>
      <var-button
        round
        text
        color="transparent"
        text-color="#fff"
        @click="goBack"
      >
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-menu
        class="app-bar-example-menu"
        :offset-y="42"
        :offset-x="-20"
        v-model:show="offsetY"
      >
        <var-button
          round
          text
          color="transparent"
          text-color="#ffffff"
          @click="offsetY = true"
        >
          <var-icon name="menu" :size="24" />
        </var-button>

        <template #menu>
          <div class="app-bar-example-menu-list">
            <var-cell
              class="app-bar-example-menu-cell"
              v-for="value in menuList"
              :key="value.value"
              v-ripple
            >
              {{ value.label }}
            </var-cell>
          </div>
        </template>
      </var-menu>
    </template>
  </var-app-bar>
</template>

<style>
.app-bar-example-menu {
  background: transparent;
}

.app-bar-example-menu-list {
  background: #fff;
}

.app-bar-example-menu-cell {
  display: block;
  padding: 10px;
}
</style>
```

## API

### 属性

|参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| `color` | 背景颜色 | _string_ | `-` |
| `text-color` | 文字颜色 | _string_ | `-` |
| `title` | 标题 | _string_ | - |
| `title-position` | 标题位置，可选值为 `left` `center` `right` | _string_ | `left` |
| `elevation` | 是否给导航栏设置海拔 | _boolean_ | `true` |

### 插槽

| 名称 | 说明 | 参数 |
| ---- | ---- | ----|
| `default` | 自定义标题内容，会覆盖 `title` 的内容 | `-` |
| `left` | 插入至导航栏左侧的内容 | `-` |
| `right` | 插入至导航栏右侧的内容 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--app-bar-color` | `var(--color-primary)` |
| `--app-bar-text-color` | `#fff` |
| `--app-bar-height` | `54px` |
| `--app-bar-title-padding` | `0 12px` |
| `--app-bar-left-gap` | `6px` |
| `--app-bar-right-gap` | `6px` |
