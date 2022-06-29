# AppBar

### Basic AppBar

Set the navigation bar title through the `title` attribute.

```html
<template>
  <var-app-bar title="title" />
</template>
```

### Custom Style

Set the position of the title and the color of the navigation bar through the `title-position` and `color` attributes.

```html
<template>
  <var-app-bar
    title="title"
    title-position="center"
    color="#00c48f"
  />
</template>
```

### Add Slots At Title

```html
<template>
  <var-app-bar>Add the title from the slot</var-app-bar>
</template>
```

### Add Left Slot

```html
<script setup>
import { Snackbar } from '@varlet/ui'

const goBack = () => {
  Snackbar({
    content: 'Go Back',
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
        text-color="#ffffff"
        @click="goBack"
      >
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
</template>
```

### Add Right Slot

```html
<script setup>
import { Snackbar } from '@varlet/ui'

const searchData = () => {
  Snackbar({
    content: 'search',
    position: 'top'
  })
}
</script>

<template>
  <var-app-bar title="title">
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

### Add Left And Right Slot

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

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
</script>

<template>
  <var-app-bar title="Title">
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

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `color` | Background | _string_ | `-` |
| `text-color` | Text color  | _string_ | `-` |
| `title` | Title | _string_ | - |
| `title-position` | Title location,Can be set to `left`,`center`,`right` | _string_ | `left` |
| `elevation` | Set altitude for navigation bar | _boolean_ | `true` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Customize the title content to override the `title` content | `-` |
| `left` | Insert the content to the left of the AppBar | `-` |
| `right` | Insert the content to the right of the AppBar | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--app-bar-color` | `var(--color-primary)` |
| `--app-bar-text-color` | `#fff` |
| `--app-bar-height` | `54px` |
| `--app-bar-title-padding` | `0 12px` |
| `--app-bar-left-gap` | `6px` |
| `--app-bar-right-gap` | `6px` |
