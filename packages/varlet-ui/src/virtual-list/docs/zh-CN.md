# 虚拟滚动列表

### 介绍

用于展示大量数据的高性能滚动列表，通过虚拟滚动技术只渲染可视区域内的元素，极大提高了长列表的性能。

只有在处理大量数据（通常是几百到几千条）需要提高渲染性能时，才需要使用虚拟列表。对于大多数常见场景，普通的列表渲染就足够了。

本组件支持自动处理不定高列表项，会在渲染后自动测量并更新每个列表项的实际高度，确保滚动位置的准确性。

### 基本使用

通过 `data` 属性设置列表数据，通过 `item-height` 设置列表项高度，通过默认插槽自定义列表项内容。

```html
<template>
  <var-virtual-list :data="list" :item-height="56">
    <template #default="{ item, index }">
      <div class="list-item">
        列表项 {{ item }}
      </div>
    </template>
  </var-virtual-list>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const list = ref(
      Array.from({ length: 1000 }, (_, i) => i + 1)
    )
    
    return { list }
  }
}
</script>

<style>
.list-item {
  display: flex;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: #333;
  font-size: 16px;
}
</style>
```

### 不定高列表项

组件会自动测量并适应不同高度的列表项，`item-height` 在这种情况下作为预估高度使用。

```html
<template>
  <var-virtual-list :data="list" :item-height="80">
    <template #default="{ item, index }">
      <div class="variable-height-item" :style="{ height: item.height + 'px' }">
        <div class="item-content">列表项 {{ item.id }}</div>
        <div class="item-desc">{{ item.desc }}</div>
      </div>
    </template>
  </var-virtual-list>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    // 创建不同高度的列表项
    const list = ref(
      Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        height: Math.floor(Math.random() * 50) + 50, // 50-100px随机高度
        desc: '这是一个高度不固定的列表项，组件会自动处理滚动位置'
      }))
    )
    
    return { list }
  }
}
</script>

<style>
.variable-height-item {
  padding: 12px 16px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.item-content {
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
}

.item-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}
</style>
```

### 设置容器高度

通过 `container-height` 属性或 CSS 样式设置容器高度。

```html
<var-virtual-list
  :data="list"
  :item-height="56"
  :container-height="336"
>
  <!-- 列表项内容 -->
</var-virtual-list>
```

### 滚动到指定位置

通过 `scrollTo` 方法滚动到指定位置。

```html
<var-button @click="scrollToPosition">滚动到第50项</var-button>
<var-virtual-list ref="virtualList" :data="list" :item-height="56">
  <!-- 列表项内容 -->
</var-virtual-list>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const virtualList = ref(null)
    
    const scrollToPosition = () => {
      virtualList.value.scrollTo(50)
    }
    
    return {
      virtualList,
      scrollToPosition
    }
  }
}
</script>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `data` | 列表数据 | _any[]_ | `[]` |
| `item-height` | 列表项高度（单位：像素），对于不定高列表作为预估高度使用 | _number \| string_ | `50` |
| `buffer-size` | 缓冲区大小（上下预渲染的列表项数量） | _number_ | `5` |
| `container-height` | 容器高度（单位：像素） | _number \| string_ | `-` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `scrollTo` | 滚动到指定索引位置 | `index: number` | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `scroll` | 列表滚动时触发 | `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 列表项内容 | `{ item: any, index: number }` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--virtual-list-height` | `100%` |

