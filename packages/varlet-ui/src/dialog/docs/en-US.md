# Dialog

### Intro

A dialog pops up to display the content and handle the user interaction
`Dialog` have provided functional and component usage, and there is no essential difference between the two usage effects and parameters.

## Functional

### Basic Use

```html
<script setup>
import { Dialog } from '@varlet/ui'

const createBasic = () => Dialog('Don\'t Wanna See No Blood, Don\'t Be A Macho Man')
</script>

<template>
  <var-button type="primary" block @click="createBasic">Basic Use</var-button>
</template>
```

### Modify Title

```html
<script setup>
import { Dialog } from '@varlet/ui'

const modifyTitle = () => {
  Dialog({
    title: 'Beat It',
    message: 'Don\'t Wanna See No Blood, Don\'t Be A Macho Man',
  })
}
</script>

<template>
  <var-button type="primary" block @click="modifyTitle">Modify Title</var-button>
</template>
```

### Hide Button

```html
<script setup>
import { Dialog } from '@varlet/ui'

const hideButton = () => {
  Dialog({
    message: 'Don\'t Wanna See No Blood, Don\'t Be A Macho Man',
    confirmButton: false,
    cancelButton: false,
  })
}
</script>

<template>
  <var-button type="primary" block @click="hideButton">Hide Button</var-button>
</template>
```

### Handling user behavior

You can get user behavior from the method's return value, which is a `Promise`.
Includes `confirm`, `cancel`, and `close(click the overlay to trigger closure)`.

```html
<script setup>
import { Dialog, Snackbar } from '@varlet/ui'

const actions = {
  confirm: () => Snackbar.success('confirm'),
  cancel: () => Snackbar.error('cancel'),
  close: () => Snackbar.info('close'),
}

const createAction = async () => actions[await Dialog('Don\'t Wanna See No Blood, Don\'t Be A Macho Man')]()
</script>

<template>
  <var-button type="primary" block @click="createAction">Handling user behavior</var-button>
</template>
```

### Asynchronous closing

You can use `onBeforeClose` to intercept before closing, and you can get the user behavior from the parameters, and the callback function that triggers the shutdown.

```html
<script setup>
import { Dialog, Snackbar } from '@varlet/ui'

const actions = {
  confirm: () => Snackbar.success('confirm'),
  cancel: () => Snackbar.error('cancel'),
  close: () => Snackbar.info('close'),
}

const onBeforeClose = (action, done) => {
  Snackbar.loading('Asynchronous shutdown in progress')
  setTimeout(() => {
    actions[action]()
    done()
  }, 1000)
}

const createAction = async () => {
  Dialog({
    message: 'Don\'t Wanna See No Blood, Don\'t Be A Macho Man',
    onBeforeClose
  })
}
</script>

<template>
  <var-button type="primary" block @click="createAction">Asynchronous closing</var-button>
</template>
```

## Component Call

### Basic Use

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'
   
const show = ref(false)
</script>

<template>
  <var-button type="warning" block @click="show = true">Basic Use</var-button>
  <var-dialog
    title="Beat It"
    message="Don't Wanna See No Blood, Don't Be A Macho Man"
    v-model:show="show"
    @confirm="() => Snackbar.success('confirm')"
    @cancel="() => Snackbar.error('cancel')"
    @closed="() => Snackbar.info('closed')"
  />
</template>
```

### Asynchronous closing

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const show = ref(false)

const actions = {
  confirm: () => Snackbar.success('confirm'),
  cancel: () => Snackbar.error('cancel'),
  close: () => Snackbar.info('close'),
}

const onBeforeClose = (action, done) => {
  Snackbar.loading('Asynchronous shutdown in progress')

  setTimeout(() => {
    actions[action]()
    done()
   }, 1000)
}
</script>

<template>
  <var-button type="warning" block @click="show = true">Asynchronous closing</var-button>
  <var-dialog
    title="Beat It"
    message="Don't Wanna See No Blood, Don't Be A Macho Man"
    v-model:show="show"
    @before-close="onBeforeClose"
  />
</template>
```

### Custom Slots

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <var-button type="warning" block @click="show = true">Custom Slots</var-button>
  <var-dialog v-model:show="show">
    <template #title>
      <var-icon name="information" color="#2979ff" />
    </template>

    <var-cell>Don't Wanna See No Blood, Don't Be A Macho Man</var-cell>
    <var-cell>Don't Wanna See No Blood, Don't Be A Macho Man</var-cell>
    <var-cell>Don't Wanna See No Blood, Don't Be A Macho Man</var-cell>
  </var-dialog>
</template>
```

## API

### Props

| Prop                        | Description                                                                                                    | Type                  | Default   |
| --------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------- | --------- |
| `v-model:show`              | Whether to display a Dialog                                                                                    | _boolean_             | `false`   |
| `title`                     | Dialog title                                                                                                   | _string_              | `Hint`    |
| `message`                   | Dialog message content                                                                                         | _string_              | `-`       |
| `message-align`             | Dialog message content text alignment, optional values `center`, `left`, `right`                               | _string_              | `left`    |
| `confirm-button`            | Whether to display the confirm button                                                                          | _boolean_             | `true`    |
| `cancel-button`             | Whether to display the cancel button                                                                           | _boolean_             | `true`    |
| `confirm-button-text`       | Confirm button text                                                                                            | _string_              | `Confirm` |
| `cancel-button-text`        | Cancel button text                                                                                             | _string_              | `Cancel`  |
| `confirm-button-text-color` | Confirm button text color                                                                                      | _string_              | `-`       |
| `cancel-button-text-color`  | Cancel button text color                                                                                       | _string_              | `-`       |
| `confirm-button-color`      | Confirm button background color                                                                                | _string_              | `-`       |
| `cancel-button-color`       | Cancel button background color                                                                                 | _string_              | `-`       |
| `dialog-class`              | Dialog body class                                                                                              | _string_              | `-`       |
| `dialog-style`              | Dialog body style                                                                                              | _object_              | `-`       |
| `overlay`                   | Whether to display the overlay                                                                                 | _boolean_             | `true`    |
| `overlay-class`             | Custom overlay class                                                                                           | _string_              | `-`       |
| `overlay-style`             | Custom overlay style                                                                                           | _string_              | `-`       |
| `lock-scroll`               | Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll | _boolean_             | `true`    |
| `close-on-click-overlay`    | Whether to click the overlay to close the Dialog                                                               | _boolean_             | `true`    |
| `teleport`                  | The location of the Dialog to mount                                                                            | _TeleportProps['to']_ | `-`       |

### Events

| Event           | Description                                          | Arguments                                                  |
| --------------- | ---------------------------------------------------- | ---------------------------------------------------------- |
| `open`          | Triggered when the Dialog is open                    | `-`                                                        |
| `opened`        | Triggered when the Dialog open-animation ends        | `-`                                                        |
| `before-close`  | Triggering before the Dialog closes prevents closure | `action: confirm \| cancel \| close` <br> `done: Function` |
| `close`         | Triggered when the Dialog is close                   | `-`                                                        |
| `closed`        | Triggered when the Dialog close-animation ends       | `-`                                                        |
| `confirm`       | Trigger on confirm                                   | `-`                                                        |
| `cancel`        | Trigger on cancel                                    | `-`                                                        |
| `click-overlay` | Triggered when you click on overlay                  | `-`                                                        |

### Dialog Options

#### Options passed in for a functional call

| Option                     | Description                                                                                                    | Type                                                           | Default |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------- |
| `title`                  | Dialog title                                                                                                   | _string_                                                       | `Hint`  |
| `message`                | Dialog message content                                                                                         | _string_                                                       | `-`     |
| `messageAlign`           | Dialog message content text alignment, optional values `center` `left` `right`                                 | _string_                                                       | `left`  |
| `confirmButton`          | Whether to display the confirm button                                                                          | _boolean_                                                      | `true`  |
| `cancelButton`           | Whether to display the cancel button                                                                           | _boolean_                                                      | `true`  |
| `confirmButtonText`      | Confirm button text                                                                                            | _string_                                                       | `确认`  |
| `cancelButtonText`       | Cancel button text                                                                                             | _string_                                                       | `取消`  |
| `confirmButtonTextColor` | Confirm button text color                                                                                      | _string_                                                       | `-`     |
| `cancelButtonTextColor`  | Cancel button text color                                                                                       | _string_                                                       | `-`     |
| `confirmButtonColor`     | Confirm button background color                                                                                | _string_                                                       | `-`     |
| `cancelButtonColor`      | Cancel button background color                                                                                 | _string_                                                       | `-`     |
| `dialogClass`            | Dialog body class                                                                                              | _string_                                                       | `-`     |
| `dialogStyle`            | Dialog body style                                                                                              | _object_                                                       | `-`     |
| `overlay`                | Whether to display the overlay                                                                                 | _boolean_                                                      | `true`  |
| `overlayClass`           | Custom overlay class                                                                                           | _string_                                                       | `-`     |
| `overlayStyle`           | Custom overlay style                                                                                           | _string_                                                       | `-`     |
| `lockScroll`             | Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll | _boolean_                                                      | `true`  |
| `closeOnClickOverlay`    | Whether to click the overlay to close the Dialog                                                               | _boolean_                                                      | `true`  |
| `onOpen`                 | Dialog open callback                                                                                           | _() => void_                                                   | `-`     |
| `onOpened`               | Dialog open-animation ends callback                                                                            | _() => void_                                                   | `-`     |
| `onBeforeClose`          | Callbacks prevent closure before the Dialog closes                                                             | _(action: confirm \| cancel \| close, done: Function) => void_ | `-`     |
| `onClose`                | Dialog close callback                                                                                          | _() => void_                                                   | `-`     |
| `onClosed`               | Dialog close-animation ends callback                                                                           | _() => void_                                                   | `-`     |
| `onConfirm`              | Confirm callback                                                                                               | _() => void_                                                   | `-`     |
| `onCancel`               | Cancel callback                                                                                                | _() => void_                                                   | `-`     |
| `onClickOverlay`         | Click overlay callback                                                                                         | _() => void_                                                   | `-`     |

### Slots

| Name | Description | SlotProps |
| --------- | ---------------------- | --------- |
| `default` | Dialog content message | `-`       |
| `title`   | Dialog title           | `-`       |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable                        | Default                |
| ------------------------------- | ---------------------- |
| `--dialog-width`                | `280px`                |
| `--dialog-background`           | `#fff`                 |
| `--dialog-border-radius`        | `3px`                  |
| `--dialog-title-padding`        | `20px 20px 0`          |
| `--dialog-title-font-size`      | `var(--font-size-lg)`  |
| `--dialog-message-color`        | `#888`                 |
| `--dialog-message-padding`      | `12px 20px`            |
| `--dialog-message-line-height`  | `24px`                 |
| `--dialog-message-font-size`    | `var(--font-size-md)`  |
| `--dialog-actions-padding`      | `0 12px 12px`          |
| `--dialog-button-margin-left`   | `6px`                  |
| `--dialog-confirm-button-color` | `var(--color-primary)` |
| `--dialog-cancel-button-color`  | `var(--color-primary)` |
