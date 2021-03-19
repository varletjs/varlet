# App-bar

### Install

```js
import { createApp } from 'vue'
import { AppBar } from '@varlet/ui'

createApp().use(AppBar)
```

### Basic AppBar

```html
<var-app-bar title="title" />
```

### Custom Style AppBar

```html
<var-app-bar 
  title="title" 
  title-position="center" 
  color="#ff9800" 
  :is-shadow="false" />
```

### Add Slots At Title

```html
<var-app-bar>Add the title from the slot</var-app-bar>
```

### Add Left Slot AppBar

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
        content: 'Go Back',
        position: 'top'
      })
    }

    return {
      goBack
    }
  }
}
```

### Add Right Slot AppBar

```html
<var-app-bar title="title">
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
        content: 'search',
        position: 'top'
      })
    }

    return {
      searchData
    }
  }
}
```

### Add Left And Right Slot AppBar

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
      { label: 'options1', value: 'menu1' },
      { label: 'options2', value: 'menu2' }
    ])

    const goBack = () => {
      Snackbar({
        content: 'Go Back',
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

### props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `color` | Background | _string_ | `#2979ff` |
| `text-color` | Text color  | _string_ | `#ffffff` |
| `title` | Title | _string_ | `''` |
| `title-position` | Title location,Can be set to `left`,`center`,`right` | _string_ | `left` |
| `is-shadow` | Whether to use shadows or not | _boolean_ | `true` |

### slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Customize the title content to override the `title` content | `-` |
| `left` | Insert the content to the left of the AppBar | `-` |
| `right` | Insert the content to the right of the AppBar | `-` |
