# Tour

### Intro

A popup component for guiding users through a product.

### Basic Usage

```html
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const current = ref(0)
const ref1 = ref<HTMLElement>()
const ref2 = ref<HTMLElement>()
const ref3 = ref<HTMLElement>()
</script>

<template>
  <var-button type="primary" @click="open = true">Begin Tour</var-button>

  <var-divider />

  <var-space>
    <var-button ref="ref1">Upload</var-button>
    <var-button ref="ref2" type="primary">Save</var-button>
    <var-button ref="ref3"><var-icon name="dots-vertical" /></var-button>
  </var-space>

  <var-tour v-model:open="open" v-model:current="current" closeable>
    <var-tour-step :target="ref1?.$el" title="Upload File" description="Put your files here." />
    <var-tour-step :target="ref2?.$el" title="Save" description="Save your changes." />
    <var-tour-step :target="ref3?.$el" title="Other Actions " description="Click to see other actions." />
  </var-tour>
</template>
```

### Non Modal

Use `:overlay="false"` to make Tour non-modal. At the meantime it is recommended to use with `type="primary"` to emphasize the guide itself.

```html
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const current = ref(0)
const ref1 = ref<HTMLElement>()
const ref2 = ref<HTMLElement>()
const ref3 = ref<HTMLElement>()
</script>

<template>
  <var-button type="primary" @click="open = true">Begin Tour</var-button>

  <var-divider />

  <var-space>
    <var-button ref="ref1">Upload</var-button>
    <var-button ref="ref2" type="primary">Save</var-button>
    <var-button ref="ref3"><var-icon name="dots-vertical" /></var-button>
  </var-space>

  <var-tour 
    v-model:open="open" 
    v-model:current="current" 
    :overlay="false" 
    type="primary" 
    closeable
  >
    <var-tour-step :target="ref1?.$el" title="Upload File" description="Put your files here." />
    <var-tour-step :target="ref2?.$el" title="Save" description="Save your changes." />
    <var-tour-step :target="ref3?.$el" title="Other Actions" description="Click to see other actions." />
  </var-tour>
</template>
```

### Placement

Change the placement of the guide relative to the target, there are 12 placements available. When target is empty the guide will show in the center.

```html
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const current = ref(0)
const ref1 = ref<HTMLElement>()
const ref2 = ref<HTMLElement>()
const ref3 = ref<HTMLElement>()
</script>

<template>
  <var-button type="primary" @click="open = true">Begin Tour</var-button>

  <var-divider />

  <var-space>
    <var-button ref="ref1">Upload</var-button>
    <var-button ref="ref2" type="primary">Save</var-button>
    <var-button ref="ref3"><var-icon name="dots-vertical" /></var-button>
  </var-space>

  <var-tour v-model:open="open" v-model:current="current" closeable>
    <var-tour-step title="Upload File" description="Put your files here." />
    <var-tour-step 
      :target="ref2?.$el" 
      title="Save" 
      description="Save your changes." 
      placement="bottom-start" 
    />
    <var-tour-step 
      :target="ref3?.$el" 
      title="Other Actions" 
     description="Click to see other actions." 
      placement="top" 
    />
  </var-tour>
</template>
```

### Custom Indicator

```html
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const current = ref(0)
const ref1 = ref<HTMLElement>()
const ref2 = ref<HTMLElement>()
const ref3 = ref<HTMLElement>()
</script>

<template>
  <var-button type="primary" @click="open = true">Begin Tour</var-button>

  <var-divider />

  <var-space>
    <var-button ref="ref1">Upload</var-button>
    <var-button ref="ref2" type="primary">Save</var-button>
    <var-button ref="ref3"><var-icon name="dots-vertical" /></var-button>
  </var-space>

  <var-tour v-model:open="open" v-model:current="current" closeable>
    <var-tour-step :target="ref1?.$el" title="Upload File" description="Put your files here." />
    <var-tour-step :target="ref2?.$el" title="Save" description="Save your changes." />
    <var-tour-step :target="ref3?.$el" title="Other Actions" description="Click to see other actions." />
    <template #indicators="{ current, total }">
      <span>{{ current + 1 }} / {{ total }}</span>
    </template>
  </var-tour>
</template>
```

## API

### Props

#### Tour Props

| Prop                     | Description                                                                                                  | Type                           | Default   |
|--------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------|-----------|
| `v-model:open`           | Open tour                                                                                                    | _boolean_                      | `-`       |
| `v-model:current`        | What is the current step                                                                                     | _number_                       | `0`       |
| `closeable`              | Whether to show a close button                                                                               | _boolean_                      | `-`       |
| `type`                   | Type，can be set to `default` `primary`                                                                       | _string_                       | `default` |
| `arrow`                  | Whether to display the arrow                                                                                 | _boolean_                      | `true`    |
| `placement`              | Tour popup placement                                                                                         | _Placement_                    | `bottom`  |
| `content-class`          | Tour body class                                                                                              | _string_                       | `-`       |
| `content-style`          | Tour body style                                                                                              | _object_                       | `-`       |
| `overlay`                | Whether to display the overlay                                                                               | _boolean_                      | `true`    |
| `overlay-class`          | Custom overlay class                                                                                         | _string_                       | `-`       |
| `overlay-style`          | Custom overlay style                                                                                         | _string_                       | `-`       |
| `lock-scroll`            | Whether to disable scrolling penetration, scrolling the Tour when disabled will not cause the body to scroll | _boolean_                      | `true`    |
| `close-on-click-overlay` | Whether to click the overlay to close the Tour                                                               | _boolean_                      | `true`    |
| `close-on-key-escape`    | Whether to support keyboard ESC to close the Tour                                                            | _boolean_                      | `true`    |
| `teleport`               | The location of the tooltip mount                                                                            | _TeleportProps['to'] \| false_ | `body`    |

#### TourStep Props

| Prop                     | Description                              | Type                    | Default     |
|--------------------------|------------------------------------------|-------------------------|-------------|
| `target`                 | Get the element the guide card points to | _string \| HTMLElement_ | `-`         |
| `title`                  | Tour title                               | _string_                | `-`         |
| `description`            | Tour Description                         | _string_                | `-`         |
| `closeable`              | Whether to show a close button           | _boolean_               | `undefined` |
| `arrow`                  | Whether to display the arrow             | _boolean_               | `undefined` |
| `placement`              | Tour popup placement                     | _Placement_             | `-`         |
| `width`                  | Tour width                               | _string \| number_      | `-`         |
| `prev-button-text`       | Previous button text                     | _string_                | `next`      |
| `next-button-text`       | Next button text                         | _string_                | `previous`  |
| `prev-button-text-color` | Previous button text color               | _string_                | `-`         |
| `next-button-text-color` | Next button text color                   | _string_                | `-`         |
| `prev-button-color`      | Previous button background color         | _string_                | `-`         |
| `next-button-color`      | Next button background color             | _string_                | `-`         |
| `content-class`          | Tour body class                          | _string_                | `-`         |
| `content-style`          | Tour body style                          | _object_                | `-`         |
| `overlay`                | Whether to display the overlay           | _boolean_               | `undefined` |
| `overlay-class`          | Custom overlay class                     | _string_                | `-`         |
| `overlay-style`          | Custom overlay style                     | _string_                | `-`         |


### Placement

| Prop           | Description            |
|----------------|------------------------|
| `top`          | Top center position    |
| `top-start`    | Top left position      |
| `top-end`      | Top right position     |
| `bottom`       | Bottom center position |
| `bottom-start` | Bottom left position   |
| `bottom-end`   | Bottom right position  |
| `right`        | Right center position  |
| `right-start`  | Top right position     |
| `right-end`    | Bottom right position  |
| `left`         | Left center position   |
| `left-start`   | Top left position      |
| `left-end`     | Bottom left position   |

### Events

#### Tour Events

| Event           | Description                         | Prop              |
|-----------------|-------------------------------------|-------------------|
| `close`         | Triggered when the Tour is close    | `-`               |
| `finish`        | Triggered when the Tour is finished | `-`               |
| `change`        | Triggered when step are change      | `current: number` |
| `click-overlay` | Triggered when clicking on overlay  | `-`               |
| `key-escape`    | Triggered when click keyboard ESC   | `-`               |

### Slots

#### Tour Slots

| Name           | Description             | Prop                                 |
|----------------|-------------------------|--------------------------------------|
| `default`      | TourStep component list | `-`                                  |
| `close-button` | Close button            | `-`                                  |
| `indicators`   | Indicators              | `{ current: number, total: number }` |

#### TourStep Slots

| Name      | Description | Prop |
|-----------|-------------|------|
| `title`   | Title       | `-`  |
| `default` | Description | `-`  |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

#### Tour Variables

| Variable                                           | Default                              |
|----------------------------------------------------|--------------------------------------|
| `--tour-width`                                     | `280px`                              |
| `--tour-background`                                | `var(--color-surface-container-low)` |
| `--tour-border-radius`                             | `3px`                                |
| `--tour-title-padding`                             | `20px 20px 0`                        |
| `--tour-title-color`                               | `#555`                               |
| `--tour-title-font-size`                           | `var(--font-size-lg)`                |
| `--tour-description-color`                         | `#888`                               |
| `--tour-description-padding`                       | `12px 20px`                          |
| `--tour-description-font-size`                     | `var(--font-size-md)`                |
| `--tour-description-line-height`                   | `24px`                               |
| `--tour-indicator-background-color`                | `rgba(0, 0, 0, 0.15)`                |
| `--tour-indicator-active-background-color`         | `var(--color-primary)`               |
| `--tour-actions-padding`                           | `0 12px 12px 20px`                   |
| `--tour-next-button-color`                         | `var(--color-primary)`               |
| `--tour-prev-button-color`                         | `var(--color-primary)`               |
| `--tour-close-button-right`                        | `20px`                               |
| `--tour-close-button-top`                          | `20px`                               |
| `--tour-primary-background`                        | `var(--color-primary)`               |
| `--tour-primary-title-color`                       | `var(--color-on-primary)`            |
| `--tour-primary-description-color`                 | `var(--color-on-info)`               |
| `--tour-primary-indicator-background-color`        | `rgba(255, 255, 255, 0.15)`          |
| `--tour-primary-indicator-active-background-color` | `var(--color-on-primary)`            |
| `--tour-primary-next-button-color`                 | `var(--color-on-primary)`            |
| `--tour-primary-prev-button-color`                 | `var(--color-on-primary)`            |
