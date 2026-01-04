# VirtualList

### Intro

A high-performance scrolling list for displaying large amounts of data, using virtual scrolling technology to render only elements in the visible area, greatly improving the performance of long lists.

Virtual lists should only be used when dealing with large amounts of data (typically hundreds to thousands of items) to improve rendering performance. For most common scenarios, regular list rendering is sufficient.

This component supports automatic handling of variable height list items. It measures and updates the actual height of each list item after rendering, ensuring accurate scroll positioning.

### Basic Usage

Set list data with the `data` property, set the list item height with `item-height`, and customize the list item content with the default slot.

```html
<template>
  <var-virtual-list :data="list" :item-height="56">
    <template #default="{ item, index }">
      <div class="list-item">
        List Item {{ item }}
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

### Variable Height Items

The component automatically measures and adapts to list items with different heights. In this case, `item-height` is used as an estimated height.

```html
<template>
  <var-virtual-list :data="list" :item-height="80">
    <template #default="{ item, index }">
      <div class="variable-height-item" :style="{ height: item.height + 'px' }">
        <div class="item-content">List Item {{ item.id }}</div>
        <div class="item-desc">{{ item.desc }}</div>
      </div>
    </template>
  </var-virtual-list>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    // Create list items with variable heights
    const list = ref(
      Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        height: Math.floor(Math.random() * 50) + 50, // Random height between 50-100px
        desc: 'This is a variable height list item. The component handles scroll position automatically.'
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

### Set Container Height

Set the container height with the `container-height` property or CSS styles.

```html
<var-virtual-list
  :data="list"
  :item-height="56"
  :container-height="336"
>
  <!-- List item content -->
</var-virtual-list>
```

### Scroll to Specified Position

Scroll to a specified position using the `scrollTo` method.

```html
<var-button @click="scrollToPosition">Scroll to Item 50</var-button>
<var-virtual-list ref="virtualList" :data="list" :item-height="56">
  <!-- List item content -->
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

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `data` | List data | _any[]_ | `[]` |
| `item-height` | List item height (unit: pixel), used as estimated height for variable height lists | _number \| string_ | `50` |
| `buffer-size` | Buffer size (number of pre-rendered list items above and below) | _number_ | `5` |
| `container-height` | Container height (unit: pixel) | _number \| string_ | `-` |

### Methods

| Method | Description | Parameters | Return |
| --- | --- | --- | --- |
| `scrollTo` | Scroll to the specified index position | `index: number` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `scroll` | Triggered when the list scrolls | `event: Event` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | List item content | `{ item: any, index: number }` |

### Style Variables

Here are the CSS variables used by the component, which can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--virtual-list-height` | `100%` |

