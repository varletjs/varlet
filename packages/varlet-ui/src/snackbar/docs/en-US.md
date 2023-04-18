# Snackbar

### Intro

Used to display a quick message to a user.

## Component Call

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <var-button type="primary" block @click="show = !show">Basic Usage</var-button>
  <var-snackbar v-model:show="show"> Hello, I'm a snackbar </var-snackbar>
</template>
```

### Multi-Line

Use `vertical` prop to change arrangement of `snackbar`. Use `Custom slot` create action of right.

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <var-snackbar v-model:show="show" :vertical="true">
    Hello, I'm a snackbar
    <template #action>
      <var-button type="primary" size="small" @click="show = !show">Close</var-button>
    </template>
  </var-snackbar>
  <var-button type="primary" block @click="show = true">Multi-Line</var-button>
</template>
```

### Bottom Display

Use `position` prop to change position of `snackbar`.

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <var-snackbar v-model:show="show" position="bottom">
    Hello, I'm a snackbar
    <template #action>
      <var-button type="primary" size="small" @click="show = false">Close</var-button>
    </template>
  </var-snackbar>
  <var-button type="primary" block @click="show = true">Bottom Display</var-button>
</template>
```

### Display Duration

Use `duration` prop to change display duration of `snackbar`.

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <var-snackbar v-model:show="show" :duration="10000">
    Hello, I'm a snackbar
  </var-snackbar>
  <var-button type="primary" block @click="show = true">
    Display Duration
  </var-button>
</template>
```

### Custom Icon

Use `icon` slot realization custom icons.

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <var-snackbar v-model:show="show">
    Hello, I'm a snackbar
    <template #icon>
      <var-icon name="heart-outline" />
    </template>
  </var-snackbar>
  <var-button type="primary" block @click="show = true">
    Custom Icon
  </var-button>
</template>
```

### Forbid Click

Use `forbid-click` prop to control whether penetrating clicks are forbidden.

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <var-snackbar v-model:show="show" :forbid-click="true">
    Hello, I'm a snackbar
  </var-snackbar>
  <var-button type="primary" block @click="show = true">
    Display Duration
  </var-button>
</template>
```

## Function Call

### Basic Usage

```html
<script setup>
import { Snackbar } from '@varlet/ui'
</script>

<template>
  <var-button type="warning" block @click="Snackbar("Hello, I'm a snackbar")">Basic Usage</var-button>
</template>
```

### Display Duration

```html
<script setup>
import { Snackbar } from '@varlet/ui'

function createSnackbar() {
  Snackbar({
    content: "Hello, I'm a snackbar",
    duration: 1000
  })
}
</script>

<template>
  <var-button type="warning" block @click="createSnackbar">Display Duration</var-button>
</template>
```

### Bottom Display

```html
<script setup>
import { Snackbar } from '@varlet/ui'

function createSnackbar() {
  Snackbar({
    content: "Hello, I'm a snackbar",
    position: 'bottom'
  })
}
</script>

<template>
  <var-button type="warning" block @click="createSnackbar">Bottom Display</var-button>
</template>
```

### Custom

```html
<script setup>
import { Snackbar } from '@varlet/ui'

function createSnackbar() {
  Snackbar({
    content: 'Hello, World',
    icon: h(VarIcon, { name: 'heart', style: { paddingRight: '12px' } }),
    action: h(VarButton, { size: 'small', type: 'primary' }, 'Varlet'),
  })
}
</script>

<template>
  <var-button type="warning" block @click="createSnackbar">Custom</var-button>
</template>
```

### Snackbar Type

```html
<script setup>
import { Snackbar } from '@varlet/ui'

function createSnackbar(type) {
  Snackbar[type]("Hello, I'm a snackbar")
  if (type === 'loading') {
    setTimeout(() => {
      Snackbar.success("loading success")
    }, 2000)
  }
}
</script>

<template>
  <var-space direction="column" size="large">
    <var-button 
      type="success" 
      block 
      @click="createSnackbar('success')"
    >
      success
    </var-button>
    <var-button 
      type="warning" 
      block 
      @click="createSnackbar('warning')"
    >
      warning
    </var-button>
    <var-button 
      type="info" 
      block 
      @click="createSnackbar('info')"
    >
      info
    </var-button>
    <var-button 
      type="danger" 
      block 
      @click="createSnackbar('error')"
    >
      error
    </var-button>
    <var-button 
      type="primary" 
      block 
      @click="createSnackbar('loading')"
    >
      loading
    </var-button>
  </var-space>
</template>
```

### Multiple

When using functional calls, Snackbar use singleton mode by default, if you need to pop multiple Snackbar at the same time, you can refer to the following example:

```html
<script setup>
import { Snackbar } from '@varlet/ui'

function openMultiple() {
  Snackbar.allowMultiple(true)

  const snackbar1 = Snackbar('Snackbar 1');
  Snackbar.success('Snackbar 2');

  setTimeout(() => {
    snackbar1.clear()
  }, 1000)
}
</script>

<template>
  <var-button type="primary" block @click="openMultiple">Multiple</var-button>
</template>
```

## API

### Props

| Prop | Description                                                                        | Type | Default |
| ----- |------------------------------------------------------------------------------------| -------- | ---------- |
| `v-model:show` | Whether to show `Snackbar`                                                         | _boolean_ | `false` |
| `type`| `Snackbar` type, Optional value is one of `success, warning, info, error, loading` | _string_ | `-` |
| `position`| `Snackbar` position, Optional value is one of `top, center, bottom`                | _string_ | `top` |
| `duration`| Display duration                                                                   | _number_ | `3000` |
| `content` | Custom content                                                                     | _string_ | `-` |
| `content-class` | Class of custom content                                                            | _string_ | `-` |
| `vertical` | Whether to use multi-line                                                          | _boolean_ | `false` |
| `loading-type` | Loading type (see `Loading` component)                                             | _string_ | `circle` |
| `loading-size` | Loading size (see `Loading` component)                                             | _string_ | `normal` |
| `loading-color`  | loading color (see `Loading` component)                                            |_string_|`current_color`|
| `loading-radius` | Loading radius (see `Loading` component)                                           | _string \| number_  | `-` |
| `lock-scroll`| Whether to disable rolling penetration                                             | _boolean_  | `false` |
| `forbid-click`| whether to penetrating clicks are forbidden                                        | _boolean_  | `false` |
| `teleport`| The location of the Snackbar to mount                                              | _TeleportProps['to']_  | `body` |

### Events

| Event | Description | arguments |
| ----- | -------- | -------- |
| `open` | Triggered when the `Snackbar` is open | `-` |
| `opened` | Triggered when the `Snackbar` open-animation ends | `-` |
| `close` | Triggered when the `Snackbar` is close | `-` |
| `closed` | Triggered when the `Snackbar` close-animation ends | `-` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | `Snackbar` content message | `-` |
| `icon` | `Snackbar` icon | `-` |
| `action` | `Snackbar` action of right | `-` |

### Methods

The `clear` method on the instance can close the current instance, and the `clear` method on the Snackbar can close all message bars.

| Method | Description | Arguments | Return |
| ---- | ---- | ---- | ---- |
| `Snackbar` | Show snackbar | _options \| string_ | `snackbar instance` |
| `Snackbar.success` | Show success snackbar | _options \| string_ | `snackbar instance` |
| `Snackbar.info` | Show info snackbar | _options \| string_ | `snackbar instance` |
| `Snackbar.warning` | Show warning snackbar | _options \| string_ | `snackbar instance` |
| `Snackbar.error` | Show error snackbar | _options \| string_ | `snackbar instance` |
| `Snackbar.loading` | Show loading snackbar | _options \| string_ | `snackbar instance` |
| `Snackbar.clear` | Close snackbar | _-_ | `-` |
| `Snackbar.allowMultiple` | Whether to allow multi instance patterns | _boolean_ | `-` |
| `Snackbar.setDefaultOptions` | Set default option configuration | _options_ | `-` |
| `Snackbar.resetDefaultOptions` | Reset default option configuration | _-_ | `-` |

### Snackbar Options

#### Options passed in for a functional call

| Option          | Description                                                                                     | Type | Default |
|-----------------|-------------------------------------------------------------------------------------------------| -------- | ---------- |
| `type`          | `Snackbar` type, Optional value is one of `success, warning, info, error, loading`              | _string_ | `-` |
| `position`      | `Snackbar` position, Optional value is one of `top, center, bottom`                             | _string_ | `top` |
| `duration`      | Display duration (Need to be closed manually when the `type` prop is `loading`)                 | _number_ | `3000` |
| `content`       | Custom content                                                                                  | _string_ | `-` |
| `icon`          | Custom icon                                                                                     | _string \| VNode_ | `-`               |
| `action`        | Customize action of right                                                                       | _string \| VNode_ | `-`               |
| `contentClass`  | Class of custom content                                                                         | _string_ | `-` |
| `vertical`      | Whether to use multi-line                                                                       | _boolean_ | `false` |
| `loadingType`   | Loading type (see `Loading` component)                                                          | _string_ | `circle` |
| `loadingSize`   | Loading size (see `Loading` component)                                                          | _string_ | `normal` |
| `loadingColor`  | Loading color (see `Loading` component)                                                         | _string_ | `currentColor` |
| `loadingRadius` | Loading radius (see `Loading` component)                                                        | _string \| number_  | `-` |
| `lockScroll`    | Whether to disable rolling penetration                                                          | _boolean_  | `false` |
| `forbidClick`   | whether to penetrating clicks are forbidden (Value is `true` when the `type` prop is `loading`) | _boolean_  | `false` |
| `onOpen`        | Triggered when the `Snackbar` is open                                                           | _() => void_ | `-` |
| `onOpened`      | Triggered when the `Snackbar` open-animation ends                                               | _() => void_ | `-` |
| `onClose`       | Triggered when the `Snackbar` is close                                                          | _() => void_ | `-` |
| `onClosed`      | Triggered when the `Snackbar` close-animation ends                                              | _() => void_ | `-` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--snackbar-width` | `256px` |
| `--snackbar-color` | `rgba(255, 255, 255, .87)` |
| `--snackbar-border-radius` | `4px` |
| `--snackbar-background` | `#333` |
| `--snackbar-font-size` | `var(--font-size-md)` |
| `--snackbar-margin` | `6px 24px` |
| `--snackbar-border-color` | `currentColor` |
| `--snackbar-success-background` | `var(--color-success)` |
| `--snackbar-info-background` | `var(--color-info)` |
| `--snackbar-error-background` | `var(--color-danger)` |
| `--snackbar-warning-background` | `var(--color-warning)` |
| `--snackbar-content-padding` | `14px 16px` |
| `--snackbar-action-margin` | `0 16px 0 0` |
