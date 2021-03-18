# App-bar

### Install

```js
import { createApp } from 'vue'
import { AppBar } from '@varlet/ui'

createApp().use(AppBar)
```

### Basic AppBar

```html
<var-app-bar title='title'></var-app-bar>
```

### Custom Style AppBar

```html
<var-app-bar title='title' title-text-align='center' color='#ff9800' :is-shadow='false'></var-app-bar>
```

### Add Slots At Title

```html
<var-app-bar>Add the title from the slot</var-app-bar>
```

### Add Left Slot AppBar

```html
<var-app-bar title='title'>
  <template #left>
    <var-button round @click='goBack' color='transparent' text-color='#ffffff' text>
      <var-icon name='chevron-left' :size='24' />
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

<var-app-bar title='title'>
  <template #right>
    <var-button round @click='searchData' color='transparent' text-color='#ffffff' text>
      <var-icon name='magnify' :size='24' />
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
<var-app-bar title='title'>
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
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

export default defineComponent({
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

### props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `color` | Background | _string_ | `#2979ff` |
| `text-color` | Text color  | _string_ | `#ffffff` |
| `title` | Title | _string_ | `''` |
| `title-text-align` | Title location | _string_ | `left` |
| `is-shadow` | Whether to use shadows or not | _boolean_ | `true` |

### slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Customize the title content to override the `title` content | `-` |
| `left` | Insert the content to the left of the AppBar | `-` |
| `right` | Insert the content to the right of the AppBar | `-` |
 