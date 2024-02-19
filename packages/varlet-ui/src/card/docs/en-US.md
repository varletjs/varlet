# Card

### Intro

Display content and actions about a single subject.

### Basic Usage

```html
<template>
  <var-card
    title="Dangerous"
    description="The way she came into the place I knew right then and there.There was something different about this girl.The way she moved her hair her face her lines.Divinity in motion as she stalked the room.I could feel the aura of her presence.Every head turned feeling passion and lust.The girl was persuasive the girl I could not trust.The girl was bad.The girl was dangerous."
  />
</template>
```

### Show Subtitle

```html
<template>
  <var-card
    title="Dangerous"
    subtitle="The girl was dangerous"
    description="The way she came into the place I knew right then and there.There was something different about this girl.The way she moved her hair her face her lines.Divinity in motion as she stalked the room.I could feel the aura of her presence.Every head turned feeling passion and lust.The girl was persuasive the girl I could not trust.The girl was bad.The girl was dangerous."
  />
</template>
```

### Show Image

```html
<template>
  <var-card 
    title="Dangerous" 
    subtitle="The girl was dangerous" 
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    description="The way she came into the place I knew right then and there.There was something different about this girl.The way she moved her hair her face her lines.Divinity in motion as she stalked the room.I could feel the aura of her presence.Every head turned feeling passion and lust.The girl was persuasive the girl I could not trust.The girl was bad.The girl was dangerous."
  />
</template>
```

### Use Slot

```html
<template>
  <var-card
    title="Dangerous"
    subtitle="The girl was dangerous"
    description="The way she came into the place I knew right then and there.There was something different about this girl.The way she moved her hair her face her lines.Divinity in motion as she stalked the room.I could feel the aura of her presence.Every head turned feeling passion and lust.The girl was persuasive the girl I could not trust.The girl was bad.The girl was dangerous."
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  >
    <template #extra>
      <var-space>
        <var-button type="primary">ACTION 1</var-button>
        <var-button type="primary">ACTION 2</var-button>
      </var-space>
    </template>
  </var-card>
</template>
```

### Horizontal

```html
<template>
  <var-card
    title="Dangerous"
    subtitle="The way she came into the place I knew right then and there.There was something different about this girl.The way she moved her hair her face her lines.Divinity in motion as she stalked the room.I could feel the aura of her presence.Every head turned feeling passion and lust.The girl was persuasive the girl I could not trust.The girl was bad.The girl was dangerous."
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    layout="row"
  >
    <template #extra>
      <var-button text round>
        <var-icon name="star" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" />
      </var-button>
    </template>
  </var-card>
</template>
```

### Ripple Effect

```html
<template>
  <var-card
    title="Dangerous"
    subtitle="The girl was dangerous"
    description="The way she came into the place I knew right then and there.There was something different about this girl.The way she moved her hair her face her lines.Divinity in motion as she stalked the room.I could feel the aura of her presence.Every head turned feeling passion and lust.The girl was persuasive the girl I could not trust.The girl was bad.The girl was dangerous."
    ripple
  />
</template>
```

### Floating

```html
<script setup>
import { ref } from 'vue'

const floating = ref(false)
</script>

<template>
  <var-card
    title="Dangerous"
    subtitle="The girl was dangerous"
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    v-model:floating="floating"
  >
    <template #extra>
      <var-button type="primary" @click="floating = true">Floating</var-button>
    </template>

    <template #floating-content>
      <var-divider dashed />

      <div class="card-example-text">
        The way she came into the place I knew right then and there.There was something different about this girl.The way she moved her hair her face her lines.Divinity in motion as she stalked the room.I could feel the aura of her presence.Every head turned feeling passion and lust.The girl was persuasive the girl I could not trust.The girl was bad.The girl was dangerous.
      </div>
    </template>
  </var-card>
</template>

<style>
.card-example-text {
  padding: 14px;
  font-size: 14px;
  line-height: 28px;
}
</style>
```

### Outline

```html
<template>
  <var-card
    outline
    :elevation="0"
    title="Dangerous"
    subtitle="The girl was dangerous"
    description="The way she came into the place I knew right then and there.There was something different about this girl.The way she moved her hair her face her lines.Divinity in motion as she stalked the room.I could feel the aura of her presence.Every head turned feeling passion and lust.The girl was persuasive the girl I could not trust.The girl was bad.The girl was dangerous."
  />
</template>
```

## API

### Props

| Prop                | Description                                                     | Type     | Default  |
|---------------------|-----------------------------------------------------------------|----------|----------|
| `title`             | The title of Card                                               | _string_ | `-`      |
| `subtitle`          | The subtitle of Card                                            | _string_ | `-`      |
| `description`       | The description of Card                                         | _string_ | `-`      |
 `elevation` | Elevation level, options `true` `false` and level of `0-24` | _string \| number \| boolean_|   `true`    |
| `src`               | The src of Image                                                | _string_ | `-`      |
| `layout`            | Arrangement mode, options `row` `column`                        | _string_ | `column` |
| `fit`               | Fill mode, options `fill` `contain` `cover` `none` `scale-down` | _string_ | `cover`  |
| `outline`           | Whether to be outline card                                      | _boolean_ | `false`  |
| `alt`               | Image alt text, the same as the native attribute of the `img` tag                                                       | _string_ | `-`      |
| `image-height`      | Height of Image                                                 | _string \| number_  | `-`     |
| `image-width`       | Width of Image                                                  | _string \| number_  | `-`     |
| `ripple`            | Whether to enable ripple                                        | _boolean_ | `false`  |
| `floating`          | Whether to full screen                                         | _boolean_ | `false`  |
| `floating-duration` | Time to full screen(ms)                                         | _number_ | `250`    |

### Events

| Events  | Description                      | Arguments      |
| ------- | -------------------------------- | -------------- |
| `click` | Triggered when the card is click | `event: Event` |

### Slots

| Name | Description | SlotProps |
|-----------------|---------------------------------| --------- |
| `image`         | Custom image                    | `-`       |
| `title`         | Custom title                    | `-`       |
| `subtitle`      | Custom subtitle                 | `-`       |
| `description`   | Custom description              | `-`       |
| `floating-content`     | Content displayed when floating | `-`  |
| `extra`         | Custom bottom content           | `-`       |
| `close-button`  | Custom close button             | `-`  |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable                            | Default               |
|-------------------------------------|-----------------------|
| `--card-background`                 | `var(--color-surface-container-highest)`                |
| `--card-padding`                    | `0px 0 15px 0`        |
| `--card-border-radius`              | `4px`                 |
| `--card-outline-color`              | `var(--color-outline)` |
| `--card-image-width`                | `100%`                |
| `--card-row-image-width`            | `140px`               |
| `--card-image-height`               | `200px`               |
| `--card-row-image-height`           | `140px`               |
| `--card-title-color`                | `#333`                |
| `--card-title-font-size`            | `20px`                |
| `--card-title-padding`              | `0 12px`              |
| `--card-title-margin`               | `15px 0 0 0`          |
| `--card-title-row-margin`           | `12px 0`              |
| `--card-subtitle-color`             | `rgba(0, 0, 0, 0.6)`  |
| `--card-subtitle-font-size`         | `14px`                |
| `--card-subtitle-padding`           | `0 13px`              |
| `--card-subtitle-margin`            | `10px 0 0 0`          |
| `--card-subtitle-row-margin`        | `-8px 0 0 0`          |
| `--card-description-color`          | `rgba(0, 0, 0, 0.6)`  |
| `--card-description-font-size`      | `14px`                |
| `--card-description-margin`         | `20px 0 0 0`          |
| `--card-description-padding`        | `0 13px`              |
| `--card-footer-padding`             | `0 12px`              |
| `--card-footer-margin`              | `30px 0 0px 0`        |
| `--card-footer-right`               | `13px`                |
| `--card-footer-bottom`              | `9px`                 |
| `--card-line-height`                | `22px`                |
| `--card-row-line-height`            | `1.5`                 |
| `--card-floating-buttons-bottom`    | `16px`                |
| `--card-floating-buttons-right`     | `16px`                |
| `--card-floating-buttons-color`     | `#fff`                |
| `--card-close-button-icon-size`     | `24px`                |
| `--card-close-button-size`          | `56px`                |
| `--card-close-button-primary-color` | `#212121`             |
| `--card-close-button-text-color` | `#fff`            |
| `--card-close-button-border-radius` | `50%` |
