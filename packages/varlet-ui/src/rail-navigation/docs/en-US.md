# Rail Navigation

### Intro

Vertically displays page-level navigation destinations. The shape follows Material Design 3 Navigation Rail. The component maintains index-based active state through `v-model:active`. MD3 themes show a light state layer on hover and an expanding icon indicator when active. The default MD2 theme does not show the indicator background.

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-rail-navigation v-model:active="active">
    <var-rail-navigation-item label="Home" icon="home" />
    <var-rail-navigation-item label="Search" icon="magnify" />
    <var-rail-navigation-item label="Favorite" icon="heart" />
    <var-rail-navigation-item label="Account" icon="account-circle" />
  </var-rail-navigation>
</template>
```

### Ripple

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-rail-navigation v-model:active="active" ripple>
    <var-rail-navigation-item label="Home" icon="home" />
    <var-rail-navigation-item label="Search" icon="magnify" />
    <var-rail-navigation-item label="Favorite" icon="heart" />
    <var-rail-navigation-item label="Account" icon="account-circle" />
  </var-rail-navigation>
</template>
```

### Match By Name

```html
<script setup>
import { ref } from 'vue'

const active = ref('home')
</script>

<template>
  <var-rail-navigation v-model:active="active">
    <var-rail-navigation-item name="home" label="Home" icon="home" />
    <var-rail-navigation-item name="search" label="Search" icon="magnify" />
    <var-rail-navigation-item name="favorite" label="Favorite" icon="heart" />
    <var-rail-navigation-item name="account" label="Account" icon="account-circle" />
  </var-rail-navigation>
</template>
```

### Disabled

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-rail-navigation v-model:active="active">
    <var-rail-navigation-item label="Home" icon="home" />
    <var-rail-navigation-item label="Search" icon="magnify" disabled />
    <var-rail-navigation-item label="Favorite" icon="heart" />
    <var-rail-navigation-item label="Account" icon="account-circle" />
  </var-rail-navigation>
</template>
```

### Badge

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-rail-navigation v-model:active="active">
    <var-rail-navigation-item label="Home" icon="home" />
    <var-rail-navigation-item label="Search" icon="magnify" badge />
    <var-rail-navigation-item label="Favorite" icon="heart" :badge="{ type: 'primary', value: 6 }" />
    <var-rail-navigation-item label="Account" icon="account-circle" />
  </var-rail-navigation>
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
  <var-rail-navigation v-model:active="active" @change="handleChange">
    <var-rail-navigation-item label="Home" icon="home" />
    <var-rail-navigation-item label="Search" icon="magnify" />
    <var-rail-navigation-item label="Favorite" icon="heart" />
    <var-rail-navigation-item label="Account" icon="account-circle" />
  </var-rail-navigation>
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
  <var-rail-navigation v-model:active="active">
    <var-rail-navigation-item label="Home" icon="home" @click="handleClick" />
    <var-rail-navigation-item label="Search" icon="magnify" @click="handleClick" />
    <var-rail-navigation-item label="Favorite" icon="heart" @click="handleClick" />
    <var-rail-navigation-item label="Account" icon="account-circle" @click="handleClick" />
  </var-rail-navigation>
</template>
```

### Slots

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-rail-navigation v-model:active="active" class="rail-navigation-slots">
    <template #start>
      <var-button type="primary" fab tonal>
        <var-icon name="magnify" :size="24" />
      </var-button>
    </template>

    <var-rail-navigation-item label="Home" icon="home" />
    <var-rail-navigation-item label="Favorite" icon="heart" />
    <var-rail-navigation-item label="Account" icon="account-circle" />

    <template #end>
      <var-button outline text fab round>
        <var-icon name="cog" :size="24" />
      </var-button>
    </template>
  </var-rail-navigation>
</template>

<style>
.rail-navigation-slots {
  min-height: 400px;
}

</style>
```

### Custom Navigation

Wrap `RailNavigationItem` to integrate with `Tooltip`, `router-link`, or `a`.

```html
<script setup>
import { ref } from 'vue'

const active = ref('tooltip')
</script>

<template>
  <var-rail-navigation v-model:active="active">
    <var-tooltip content="Tooltip" placement="right">
      <var-rail-navigation-item name="tooltip" label="Tooltip" icon="information" />
    </var-tooltip>

    <router-link class="rail-navigation-link" to="/button">
      <var-rail-navigation-item name="router-link" label="Router" icon="account-circle" />
    </router-link>

    <a class="rail-navigation-link" href="https://github.com/varletjs/varlet" target="_blank" rel="noreferrer">
      <var-rail-navigation-item name="anchor" label="Link" icon="github" />
    </a>
  </var-rail-navigation>
</template>

<style>
.rail-navigation-link {
  display: block;
  width: 100%;
  color: inherit;
  text-decoration: none;
}
</style>
```

## API

### Props

#### RailNavigation Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model:active` | Index or name of active item | _number \| string_ | `0` |
| `ripple` | Whether to enable ripple | _boolean_ | `false` |

#### RailNavigationItem Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `name` | Item name, used as the matching identifier | _number \| string_ | `-` |
| `label` | Label text | _string_ | `-` |
| `icon` | Icon name, same as the Icon component [name](#/en-US/icon) | _string_ | `-` |
| `namespace` | Icon namespace, same as the Icon component [namespace](#/en-US/icon) | _string_ | `var-icon` |
| `badge` | Badge in the upper right corner of the icon, same as Badge props | _boolean \| BadgeProps_ | `false` |
| `disabled` | Whether the option is disabled | _boolean_ | `false` |

### Events

#### RailNavigation Events

| Event | Description | Arguments |
| --- | --- | --- |
| `change` | Triggered when active item changes | `active: number \| string` |

#### RailNavigationItem Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered when clicking the item | `active: number \| string` |

### Slots

#### RailNavigation Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Navigation item content | `-` |
| `start` | Start content | `-` |
| `end` | End content | `-` |

#### RailNavigationItem Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Custom label content, overrides `label` | `active: boolean` |
| `icon` | Custom icon | `active: boolean` |

### Style Variables

The following CSS variables are used by the component and can be customized through the [StyleProvider](#/en-US/style-provider) component.

#### RailNavigation Variables

| Variable | Default |
| --- | --- |
| `--rail-navigation-width` | `80px` |
| `--rail-navigation-background` | `var(--color-surface-container-high)` |
| `--rail-navigation-text-color` | `var(--color-on-surface-variant)` |
| `--rail-navigation-section-padding` | `12px 0` |
| `--rail-navigation-start-padding` | `4px 0` |
| `--rail-navigation-end-padding` | `4px 0` |
| `--rail-navigation-item-gap` | `4px` |

#### RailNavigationItem Variables

| Variable | Default |
| --- | --- |
| `--rail-navigation-item-height` | `64px` |
| `--rail-navigation-item-padding` | `6px 4px` |
| `--rail-navigation-item-indicator-width` | `56px` |
| `--rail-navigation-item-indicator-height` | `32px` |
| `--rail-navigation-item-indicator-hover-background` | `transparent` |
| `--rail-navigation-item-indicator-active-background` | `transparent` |
| `--rail-navigation-item-active-text-color` | `var(--color-primary)` |
| `--rail-navigation-item-disabled-opacity` | `var(--opacity-disabled)` |
| `--rail-navigation-item-icon-size` | `24px` |
| `--rail-navigation-item-label-font-size` | `var(--font-size-sm)` |
| `--rail-navigation-item-label-line-height` | `16px` |
