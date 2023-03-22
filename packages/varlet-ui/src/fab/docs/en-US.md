# Fab

### Intro

The floating action button component, press to display a group of action buttons.

### Theme Color Button

```html
<script setup>
import { ref } from 'vue'

const type = ref('primary')
</script>

<template>
   <var-select v-model="type">
     <var-option label="default" value="default"/>
     <var-option label="primary" value="primary"/>
     <var-option label="info" value="info"/>
     <var-option label="success" value="success"/>
     <var-option label="warning" value="warning"/>
     <var-option label="dangerous" value="danger"/>
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

   <var-fab type="primary" :position="position" />
</template>
```

### Trigger Method

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

   <var-fab type="primary" :trigger="trigger">
    <var-button class="action" type="info" round>
      <var-icon name="account-circle" />
    </var-button>
    <var-button class="action" type="success" round>
      <var-icon name="checkbox-marked-circle" />
    </var-button>
    <var-button class="action" type="warning" round>
      <var-icon name="bell" />
    </var-button>
    <var-button class="action" type="danger" round>
      <var-icon name="delete" />
    </var-button>
  </var-fab>
</template>
```

### Action menu popup direction

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

   <var-fab type="primary" :direction="direction">
     <var-button class="action" type="info" round>
       <var-icon name="account-circle" />
     </var-button>
     <var-button class="action" type="success" round>
       <var-icon name="checkbox-marked-circle" />
     </var-button>
     <var-button class="action" type="warning" round>
       <var-icon name="bell" />
     </var-button>
     <var-button class="action" type="danger" round>
       <var-icon name="delete" />
     </var-button>
   </var-fab>
</template>

<style>
.action {
   display: flex;
   width: 40px !important;
   height: 40px !important;
}
</style>
```

### Disabled

```html
<script setup>
import { ref } from 'vue'

const disabled = ref(false)
</script>

<template>
   <var-switch v-model="disabled" />

   <var-fab type="primary" :disabled="disabled" />
</template>
```

### Trigger show/hide

```html
<script setup>
import { ref } from 'vue'

const show = ref(true)

function toggle() {
  show.value = !show.value
}
</script>

<template>
   <var-button type="primary" @click.stop="toggle">Toggle</var-button>

   <var-fab :show="show" type="primary" />
</template>
```

### Action menu expand/collapse

```html
<script setup>
import { ref } from 'vue'

const active = ref(false)

function toggle() {
   active.value = !active.value
}
</script>

<template>
   <var-button type="primary" @click.stop="toggle">Toggle</var-button>

   <var-fab v-model:active="active" type="primary">
     <var-button class="action" type="info" round>
       <var-icon name="account-circle" />
     </var-button>
     <var-button class="action" type="success" round>
       <var-icon name="checkbox-marked-circle" />
     </var-button>
     <var-button class="action" type="warning" round>
       <var-icon name="bell" />
     </var-button>
     <var-button class="action" type="danger" round>
       <var-icon name="delete" />
     </var-button>
   </var-fab>
</template>

<style>
.action {
   display: flex;
   width: 40px !important;
   height: 40px !important;
}
</style>
```

### Custom Trigger

```html
<template>
   <var-fab>
     <var-button class="action" type="info" round>
       <var-icon name="account-circle" :size="24" />
     </var-button>
     <var-button class="action" type="success" round>
       <var-icon name="checkbox-marked-circle" :size="24" />
     </var-button>
     <var-button class="action" type="warning" round>
       <var-icon name="bell" :size="24" />
     </var-button>
     <var-button class="action" type="danger" round>
       <var-icon name="delete" :size="24" />
     </var-button>

     <template #trigger="{ active }">
       <var-button class="trigger" type="primary" round>
         <var-icon :name="active ? 'heart' : 'heart-half-full'" animation-class="fade" :transition="300" :size="24" />
       </var-button>
     </template>
   </var-fab>
</template>

<style>
.trigger {
   width: 64px !important;
   height: 64px !important;
   border-radius: 8px !important;
}

.action {
   display: flex;
   width: 44px !important;
   height: 44px !important;
   border-radius: 6px !important;
}

.fade {
   transition-property: opacity, transform;
   opacity: 0;
   transform: rotate(90deg)
}
</style>
```

## API

### Props

| Prop  | Description  | Type      | Default        |
| ------- | ---- | ----- | ---- |
| `v-model:active` | Whether to activate the action menu | _boolean_ | `false` |
| `show` | Whether to show trigger | _boolean_ | `true` |
| `type` | type, optional values are `default` `primary` `info` `success` `warning` `danger` | _string_ | `primary` |
| `position` | trigger position, optional values are `left-top` `right-top` `left-bottom` `right-bottom` | _string_ | `right-bottom` |
| `direction` | Action menu popup direction, optional values are `top` `bottom` `left` `right` | _string_ | `top` |
| `trigger` | trigger method `click` `hover` | _string_ | `click` |
| `disabled` | Whether to disable | _boolean_ | `false` |
| `color` | trigger color | _string_ | `-` |
| `inactive-icon` | Inactive trigger icon | _string_ | `plus` |
| `active-icon` | trigger icon when active | _string_ | `window-close` |
| `inactive-icon-size` | Inactive trigger icon size | _string \| number_ | `-` |
| `active-icon-size` | Trigger icon size when active | _string \| number_ | `-` |
| `fixed` | Whether to use fixed positioning, set to `false` to enable absolute positioning | _boolean_ | `true` |
| `z-index` | Same as css z-index, used for custom trigger level | _string \| number_ | `90` |
| `top` | Same as css top, for custom trigger position | _string \| number_ | `-` |
| `bottom` | Same as css bottom, for custom trigger position | _string \| number_ | `-` |
| `left` | Same as css left, for custom trigger position | _string \| number_ | `-` |
| `right` | Same as css right, for custom trigger position | _string \| number_ | `-` |
| `safe-area` | Whether to enable bottom safe area adaptation	 | _boolean_ | `false` |
| `teleport` | element to which the component mounts | _TeleportProps['to']_ | `-` |

### Events

| Event | Description  | Arguments  |
| ---- | ---- | ---- |
| `click` | Triggered when the trigger is clicked, not triggered when `disabled` state is `true` | `active: boolean, event: Event` |
| `open` | Fires when the action menu is activated and opened | `-` |
| `opened` | Fires at the end of the animation that activates and opens the action menu | `-` |
| `close` | Triggered when the action menu is deactivated and closed | `-` |
| `closed` | Fires when the animation of inactivating and closing the action menu ends | `-` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Action menu | `-` |
| `trigger` | Trigger | `{ active: boolean }` |


### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable  | Default  |
| ---------- | -------- |
| `--fab-top` | `70px` |
| `--fab-bottom` | `16px` |
| `--fab-left` | `16px` |
| `--fab-right` | `16px` |
| `--fab-trigger-size` | `56px` |
| `--fab-trigger-inactive-icon-size` | `26px` |
| `--fab-trigger-active-icon-size` | `22px` |
| `--fab-actions-padding` | `10px 0` |
| `--fab-action-margin` | `6px` |
| `--fab-transition-standard-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` |