# BottomNavigation

### Intro

Display navigation and key actions at the bottom of the page.

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-bottom-navigation v-model:active="active">
    <var-bottom-navigation-item label="label" icon="home" />
    <var-bottom-navigation-item label="label" icon="magnify" />
    <var-bottom-navigation-item label="label" icon="heart" />
    <var-bottom-navigation-item label="label" icon="account-circle" />
  </var-bottom-navigation>
</template>
```

### Match By Name

```html
<script setup>
import { ref } from 'vue'

const active = ref('home')
</script>

<template>
  <var-bottom-navigation v-model:active="active">
    <var-bottom-navigation-item name="home" label="label" icon="home" />
    <var-bottom-navigation-item name="search" label="label" icon="magnify" />
    <var-bottom-navigation-item name="heart" label="label" icon="heart" />
    <var-bottom-navigation-item name="user" label="label" icon="account-circle" />
  </var-bottom-navigation>
</template>
```

### Show Badge

```html
<script setup>
import { ref, reactive } from 'vue'

const active = ref(0)
const badgeProps = reactive({
  type: 'primary',
  value: '66'
})
</script>

<template>
  <var-bottom-navigation v-model:active="active">
    <var-bottom-navigation-item label="label" icon="home" />
    <var-bottom-navigation-item label="label" icon="magnify" badge />
    <var-bottom-navigation-item label="label" icon="heart" :badge="badgeProps" />
    <var-bottom-navigation-item label="label" icon="account-circle" />
  </var-bottom-navigation>
</template>
```

### Custom Color

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-bottom-navigation active-color="var(--color-warning)" v-model:active="active">
    <var-bottom-navigation-item label="label" icon="home" />
    <var-bottom-navigation-item label="label" icon="magnify" />
    <var-bottom-navigation-item label="label" icon="heart" />
    <var-bottom-navigation-item label="label" icon="account-circle" />
  </var-bottom-navigation>
</template>
```

### Change Event

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const active = ref(0)

function handleChange(active) {
  Snackbar.info(`changed to ${active}`)
}
</script>

<template>
  <var-bottom-navigation v-model:active="active" @change="handleChange">
    <var-bottom-navigation-item label="label" icon="home" />
    <var-bottom-navigation-item label="label" icon="magnify" />
    <var-bottom-navigation-item label="label" icon="heart" />
    <var-bottom-navigation-item label="label" icon="account-circle" />
  </var-bottom-navigation>
</template>
```

### Click Event

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const active = ref(0)

function handleClick(active) {
  Snackbar.success(`clicked ${active}`)
}
</script>

<template>
  <var-bottom-navigation v-model:active="active">
    <var-bottom-navigation-item label="label" icon="home" @click="handleClick" />
    <var-bottom-navigation-item label="label" icon="magnify" @click="handleClick" />
    <var-bottom-navigation-item label="label" icon="heart" @click="handleClick"/>
    <var-bottom-navigation-item label="label" icon="account-circle" @click="handleClick"/>
  </var-bottom-navigation>
</template>
```

### Fab

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
const isEven = ref(true)
</script>

<template>
  <var-bottom-navigation
    class="bottom-navigation-example"
    v-model:active="active"
    @fab-click="isEven = !isEven"
  >
    <var-bottom-navigation-item label="label" icon="home" />
    <var-bottom-navigation-item label="label" icon="magnify" />
    <var-bottom-navigation-item label="label" icon="heart" />
    <var-bottom-navigation-item label="label" icon="bell" />
    <var-bottom-navigation-item v-if="!isEven" label="label" icon="account-circle" />

    <template #fab>
      <var-icon name="heart" />
    </template>
  </var-bottom-navigation>
</template>

<style>
.bottom-navigation-example {   
  margin-top: 40px;
}
</style>
```

### Variant

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-bottom-navigation variant v-model:active="active">
    <var-bottom-navigation-item label="label" icon="home" />
    <var-bottom-navigation-item label="label" icon="magnify" />
    <var-bottom-navigation-item label="label" icon="heart" />
    <var-bottom-navigation-item label="label" icon="account-circle" />
  </var-bottom-navigation>
</template>
```

## API

### Props

#### BottomNavigation Props

| Prop            | Description                                         | Type | Default |
|-----------------|-----------------------------------------------------| ---- | ---- |
| `v-model:active` | Identifier of current tab                           | _number \| string_ | `0` |
| `fixed`         |  Whether to fixed bottom                            | _boolean_ | `false` |
| `border`        | Whether to show border                              | _boolean_ | `false` |
| `safe-area`       | Whether to enable bottom safe area adaptation | _boolean_ | `false` |
| `z-index`       | Z-index                                             | _number \| string_ | `1` |
| `active-color`  | Color of active tab item                            | _string_ | `-` |
| `inactive-color` | Color of inactive tab item                          | _string_ | `-` |
| `placeholder` ***3.2.11***  | Whether to generate placeholder elements of the same height at the bottom (`fixed` required)  | _boolean_ | `false` |
| `fab-props`     | Fab button props                                    | _ButtonProps_ | `{ type: 'primary' }` |
| `variant` ***3.2.0***      | Variant mode | _boolean_ | `false` |

#### BottomNavigationItem Props

|Prop | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| `name` | Identifier | _string_ | `-` |
| `icon` | Icon name, equivalent to the [name](#/en-US/icon) of Icon component | _string_ | `-` |
| `label` | Label text content | _string_ | - |
| `namespace` | Icon namespace, extensible custom icon library, equivalent to the [namespace](#/en-US/icon)  of Icon component | _string_ | `var-icon` |
| `badge` | Logo in the upper right corner of the icon | _boolean \| BadgeProps_ | `false` |

### Events

#### BottomNavigation Events

|Event | Description | Arguments |
| ---- | ---- | ---- |
| `before-change` | The callback function before switching labels, which returns falsy value to prevent switching, supports the return of promise | `active: number \| string` |
| `change` | Triggered when switching labels | `active: number \| string` |
| `fab-click` | Triggered when clicking fab button | `-` |

#### BottomNavigationItem Events

|Event | Description | Arguments |
| ---- | ---- | ---- |
| `click` | Triggered when clicking | `active: number \| string` |

### Slots

#### BottomNavigation Slots

| Name | Description                                                | SlotProps |
| ---- |------------------------------------------------------------| ----|
| `default` | Content of bottom navigation                               | `-` |
| `fab` | Support for inserting a custom Fab button into a component | `-` |

#### BottomNavigationItem Slots

| Name | Description | SlotProps |
| ---- | ---- | ----|
| `default` | Custom label text content that overwrites the content of `label`  | `-` |
| `icon` | Custom Icon | `active: boolean` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

#### BottomNavigation Variables

| Variable | Default |
| --- | --- |
| `--bottom-navigation-height` | `50px` |
| `--bottom-navigation-variant-height` | `66px` |
| `--bottom-navigation-z-index` | `1` |
| `--bottom-navigation-background-color` | `var(--color-surface-container-high)` |
| `--bottom-navigation-border-color` | `var(--color-outline)` |
| `--bottom-navigation-fab-offset` | `4px` |

#### BottomNavigationItem Variables

| Variable | Default |
| --- | --- |
| `--bottom-navigation-item-font-size` | `var(--font-size-sm)` |
| `--bottom-navigation-item-inactive-color` | `#646566` |
| `--bottom-navigation-item-active-color` | `var(--color-primary)` |
| `--bottom-navigation-item-active-background-color` | `var(--color-surface-container-high)` |
| `--bottom-navigation-item-line-height` | `1` |
| `--bottom-navigation-item-icon-size` | `22px` |
| `--bottom-navigation-item-icon-margin-bottom` | `5px` |
| `--bottom-navigation-fab-border-radius` | `50%` |
| `--bottom-navigation-item-variant-icon-container-height` | `30px` |
| `--bottom-navigation-item-variant-icon-container-border-radius` | `100px` |
| `--bottom-navigation-item-variant-icon-container-max-width` | `58px` |
| `--bottom-navigation-item-variant-active-background-color` | `var(--color-primary-container)` |
| `--bottom-navigation-item-variant-active-color` | `var(--color-on-primary-container)` |
