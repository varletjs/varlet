# Floating Action Button

### Intro

Floating action button component for context menu.


### Theme Color Action Buttons

```html
<script setup>
import { ref } from 'vue'

const type = ref('primary')
</script>

<template>
  <var-select :hint="false" v-model="type">
    <var-option label="default" value="default"/>
    <var-option label="primary" value="primary"/>
    <var-option label="info" value="info"/>
    <var-option label="success" value="success"/>
    <var-option label="warning" value="warning"/>
    <var-option label="danger" value="danger"/>
  </var-select>
  <var-fab :type="type" />
</template>
```

### Trigger Position

```html
<script setup>
import { ref } from 'vue'

const position = ref('right-bottom')
</script>

<template>
  <var-radio-group v-model="position">
    <var-radio checked-value="left-top">left-top</var-radio>
    <var-radio checked-value="right-top">right-top</var-radio>
    <var-radio checked-value="left-bottom">left-bottom</var-radio>
    <var-radio checked-value="right-bottom">right-bottom</var-radio>
  </var-radio-group>
  <var-fab :position="position" />
</template>
```

### Trigger Mode

The contents of the menu are the default slots.

```html
<script setup>
import { ref } from 'vue'

const trigger = ref('click')
</script>

<template>
  <var-radio-group v-model="trigger">
    <var-radio checked-value="click">click</var-radio>
    <var-radio checked-value="hover">hover</var-radio>
  </var-radio-group>
  <var-fab :trigger="trigger">
    <var-tooltip content="Tooltip" placement="left">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    </var-tooltip>
    <var-button type="danger" round>
      <var-icon name="check" />
    </var-button>
  </var-fab>
</template>
```

### Action Menu Pop Up Direction

```html
<script setup>
import { ref } from 'vue'

const direction = ref('top')
</script>

<template>
  <var-radio-group v-model="direction">
    <var-radio checked-value="top">top</var-radio>
    <var-radio checked-value="right">right</var-radio>
    <var-radio checked-value="bottom">bottom</var-radio>
    <var-radio checked-value="left">left</var-radio>
  </var-radio-group>
  <var-fab :direction="direction">
    <var-tooltip content="Tooltip" placement="left">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    </var-tooltip>
    <var-button type="danger" round>
      <var-icon name="check" />
    </var-button>
  </var-fab>
</template>
```

### Custom Triggers

Two-way binding via `v-model:active` controls whether the action menu is expanded and closed.

```html
<script setup>
import { ref, computed } from 'vue'

const active = ref(false)
const iconName = computed(() => active.value ? 'window-close' : 'cog-outline')
function handleActive() {
  active.value = !active.value
}
</script>

<template>
  <var-fab v-model:active="active">
    <template #activator>
      <var-button round @click.stop="handleActive">
        <var-icon animation-class="fade" :name="iconName" :transition="200" />
      </var-button>
    </template>
    <var-tooltip content="camera" placement="left">
      <var-button type="warning" round>
        <var-icon name="camera-outline" />
      </var-button>
    </var-tooltip>
    <var-button type="primary" round>
      <var-icon name="phone-outline" />
    </var-button>
  </var-fab>
</template>

<style lang="less" scoped>
.fade {
  transform: scale(0.4);
}
</style>
```

### Animation On Display

Through the `activator` slot, customize the trigger.

```html
<script setup>
import { ref, computed } from 'vue'

const active = ref(false)
const show = ref(false)
const iconName = computed(() => active.value ? 'window-close' : 'cog-outline')
function handleActive() {
  active.value = !active.value
}
function handleShow() {
  show.value = !show.value
  active.value = false
}
</script>

<template>
  <var-button type="primary" @click="handleShow">
    {{ show ? 'hidden' : 'show' }}
  </var-button>

  <var-fab v-model:active="active">
    <template #activator>
      <var-button v-show="show" round @click.stop="handleActive">
        <var-icon animation-class="fade" :name="iconName" :transition="200" />
      </var-button>
    </template>
    <var-tooltip content="camera" placement="left">
      <var-button type="warning" round>
        <var-icon name="camera-outline" />
      </var-button>
    </var-tooltip>
    <var-button type="primary" round>
      <var-icon name="phone-outline" />
    </var-button>
  </var-fab>
</template>

<style lang="less" scoped>
.fade {
  transform: scale(0.4);
}
</style>
```

## API

### Props

#### Fab Props

| Prop             | Description                                                        | Type     | Default        |
|------------------|-----------------------------------------------------------------   |----------|----------------|
| `v-model:active` | Trigger activity state                                             | _boolean_ | `false`        |
| `type`           | Same as the `Button` component, optional value is `default` `primary` `info` `success` `warning` `danger` | _string_ | `primary`    |
| `color`          | Background color                                                   | _string_ | `-`           |
| `text-color`     | Text color                                                         | _string_ | `-`          |
| `icon`           | Same as `Icon` component, icon name                                | _string_ | `-`           |
| `icon-size`      | Same as `Icon` component, icon size                                | _string \| number_  | `24px`  |
| `trigger`        | Trigger mode; optional value is `click` `hover`                    | _string_ | `click`         |
| `direction`      | Action menu pop up direction; optional value is `top` `right` `bottom` `left`    | _string_ | `top`           |
| `position`       | Trigger position; optional value is `left-top` `right-top` `right-bottom` `left-bottom` | _string_ | `right-bottom` |

### Slots

#### Fab Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Menu content | `-` |
| `activator` | Trigger | `-` |


### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

#### Fab Variables

| Variable | Default |
| --- | --- |
| `--fab-padding` | `10px` |
| `--fab-button-margin` | `6px`|
| `--fab-z-index` |  `1`|
| `--fab-button-size` |  `56px`|
| `--fab-button-item-size` |  `40px`|
| `--fab-vertical-spacing` | `80px`|
| `--fab-horizontal-spacing` | `32px`|
| `--fab-transition-standard-easing` | `cubic-bezier(0.4, 0, 0.2, 1)`|
| `--fab-transition-decelerated-easing` | `cubic-bezier(0, 0, 0.2, 1)`|
| `--fab-transition-accelerated-easing` | `cubic-bezier(0.4, 0, 1, 1)`|