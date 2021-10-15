# Snackbar

### Intro

Used to display a quick message to a user.

### Install

```js
import { createApp } from 'vue'
import { Snackbar } from '@varlet/ui'

createApp().use(Snackbar)
```

### Scoped Install

```js
import { Snackbar } from '@varlet/ui'

export default {
  components: {
    [Snackbar.Component.name]: Snackbar
  }
}
```

### Component Call

#### Basic Usage

```html
<var-button type="primary" block @click="show = !show">Basic Usage</var-button>
<var-snackbar v-model:show="show"> "Hello, I'm a snackbar" </var-snackbar>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const show = ref(false)

    return {
      show
    }
  }
}
```

#### Multi-Line

Use `vertical` prop to change arrangement of `snackbar`. Use `Custom slot` create action of right.

```html
<var-snackbar v-model:show="show" :vertical="true">
  "Hello, I'm a snackbar"
  <template #action>
    <var-button type="primary" @click="show = !show">Close</var-button>
  </template>
</var-snackbar>
```

#### Bottom Display

Use `position` prop to change position of `snackbar`.

```html
<var-snackbar v-model:show="show" position="bottom">
  "Hello, I'm a snackbar"
  <template #action>
    <var-button type="primary" @click="show = false">Close</var-button>
  </template>
</var-snackbar>
```

#### Display Duration

Use `duration` prop to change display duration of `snackbar`.

```html
<var-snackbar v-model:show="show" :duration="1000"> "Hello, I'm a snackbar" </var-snackbar>
```

#### Forbid Click

Use `forbid-click` prop to control whether penetrating clicks are forbidden.

```html
<var-snackbar v-model:show="show" :forbid-click="true"> "Hello, I'm a snackbar" </var-snackbar>
```

### Function Call

#### Basic Usage

```javascript
Snackbar("Hello, I'm a snackbar")
```

#### Display Duration

```javascript
Snackbar({
 content: "Hello, I'm a snackbar",
 duration: 1000
})
```

#### Bottom Display

```javascript
Snackbar({
 content: "Hello, I'm a snackbar",
 position: 'bottom'
})
```

### Snackbar Type

```javascript
Snackbar.success("Hello, I'm a snackbar")
Snackbar.warning("Hello, I'm a snackbar")
Snackbar.info("Hello, I'm a snackbar")
Snackbar.error("Hello, I'm a snackbar")
Snackbar.loading("Hello, I'm a snackbar")
```

### Singleton

When using functional calls, Snackbar use singleton mode by default, if you need to pop multiple Snackbar at the same time, you can refer to the following example:

```javascript
Snackbar.allowMultiple(true)

const snackbar1 = Snackbar('First Snackbar');
const snackbar1 = Snackbar.success('Second Snackbar');

snackbar1.clear();
snackbar1.clear();
```

## API

### Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `v-model:show` | Whether to show `Snackbar` | _boolean_ | `false` |
| `type`| `Snackbar` type, Optional value is one of `success, warning, info, error, loading` | _string_ | `-` |
| `position`| `Snackbar` position, Optional value is one of `top, center, bottom` | _string_ | `top` |
| `duration`| Display duration | _number_ | `3000` |
| `content` | Custom content | _string_ | `-` |
| `content-class` | Class of custom content | _string_ | `-` |
| `vertical` | Whether to use multi-line | _boolean_ | `false` |
| `loading-type` | Loading type (see `Loading` component) | _string_ | `circle` |
| `loading-size` | Loading size (see `Loading` component) | _string_ | `normal` |
| `lock-scroll`| Whether to disable rolling penetration | _boolean_  | `false` |
| `forbid-click`| whether to penetrating clicks are forbidden | _boolean_  | `false` |
| `teleport`| The location of the Snackbar to mount | _TeleportProps['to']_  | `body` |

### Events

| Event | Description | arguments |
| ----- | -------- | -------- |
| `open` | Triggered when the `Snackbar` is open | `-` |
| `opened` | Triggered when the `Snackbar` open-animation ends | `-` |
| `close` |	Triggered when the `Snackbar` is close | `-` |
| `closed` | 	Triggered when the `Snackbar` close-animation ends | `-` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | `Snackbar` content message | `-` |
| `action` | `Snackbar` action of right | `-` |

### Methods

The `clear` method on the instance can close the current instance, and the `clear` method on the Snackbar can close all message bars.

| Name | Description	 | Arguments | Return value |
| ---- | ---- | ---- | ---- |
| `Snackbar` | Show snackbar | _options \| string_ | `snackbar instance` |
| `Snackbar.success` | Show success snackbar | _options \| string_ | `snackbar instance` |
| `Snackbar.info` | Show info snackbar | _options \| string_ | `snackbar instance` |
| `Snackbar.warning` | Show warning snackbar | _options \| string_ | `snackbar instance` |
| `Snackbar.error` | Show error snackbar | _options \| string_ | `snackbar instance` |
| `Snackbar.loading` | Show loading snackbar | _options \| string_ | `snackbar instance` |
| `Snackbar.clear` | Close snackbar | _-_ | `-` |
| `Snackbar.allowMultiple` | Whether to allow multi instance patterns | _boolean_ | `-` |

### Snackbar Options

#### Options passed in for a functional call

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `show` | Whether to show `Snackbar` | _boolean_ | `false` |
| `type`| `Snackbar` type, Optional value is one of `success, warning, info, error, loading` | _string_ | `-` |
| `position`| `Snackbar` position, Optional value is one of `top, center, bottom` | _string_ | `top` |
| `duration`| Display duration (Need to be closed manually when the `type` prop is `loading`)  | _number_ | `3000` |
| `content` | Custom content | _string_ | `-` |
| `contentClass` | Class of custom content | _string_ | `-` |
| `vertical` | Whether to use multi-line | _boolean_ | `false` |
| `loadingType` | Loading type (see `Loading` component) | _string_ | `circle` |
| `loadingSize` | Loading size (see `Loading` component) | _string_ | `normal` |
| `lockScroll`| Whether to disable rolling penetration | _boolean_  | `false` |
| `forbidClick`| whether to penetrating clicks are forbidden (Value is `true` when the `type` prop is `loading`) | _boolean_  | `false` |
| `onOpen` | Triggered when the `Snackbar` is open | _() => void_ | `-` |
| `onOpened` | Triggered when the `Snackbar` open-animation ends | _() => void_ | `-` |
| `onClose` |	Triggered when the `Snackbar` is close | _() => void_ | `-` |
| `onClosed` | 	Triggered when the `Snackbar` close-animation ends | _() => void_ | `-` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

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
