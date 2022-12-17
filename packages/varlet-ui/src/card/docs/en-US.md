# Card

### Basic Use

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

### Show Image

```html
<template>
  <var-card title="Dangerous" subtitle="The girl was dangerous" src="https://varlet.gitee.io/varlet-ui/cat.jpg"/>
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
        <var-button text type="warning">ACTION 1</var-button>
        <var-button text type="warning">ACTION 2</var-button>
      </var-space>
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
    ripple
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    v-model:floating="floating"
    @click="floating = true"
  >
    <template #extra>
      <var-button text type="warning">ACTION 1</var-button>
      <var-button text type="warning">ACTION 2</var-button>
    </template>

    <template #content>
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

## API

### Props

| Prop                | Description                                                     | Type      | Default  |
|---------------------|-----------------------------------------------------------------|-----------|----------|
| `title`             | The title of Card                                               | _string_  | `-`      |
| `subtitle`          | The subtitle of Card                                            | _string_  | `-`      |
| `description`       | The description of Card                                         | _string_  | `-`      |
| `elevation`         | The shadow level of Card                                        | _string \ | number_  | `2`     |
| `src`               | The src of Image                                                | _string_  | `-`      |
| `layout`            | Arrangement mode, options `row` `column`                        | _string_  | `column` |
| `fit`               | Fill mode, options `fill` `contain` `cover` `none` `scale-down` | _string_  | `cover`  |
| `outline`           | Whether to be outline card                                      | _boolean_ | `false`  |
| `alt`               | Alt text                                                        | _string_  | `-`      |
| `image-height`      | height of Image                                                 | _string \ | number_  | `-`     |
| `image-width`       | width of Image                                                  | _string \ | number_  | `-`     |
| `ripple`            | Whether to enable ripple                                        | _boolean_ | `false`  |
| `floating`          | Whether to full screen                                          | _boolean_ | `false`  |
| `floating-duration` | Time to full screen(ms)                                         | _number_  | `250`    |

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

### Events

| Events  | Description                      | Arguments      |
| ------- | -------------------------------- | -------------- |
| `click` | Triggered when the Card is click | `event: Event` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable                            | Default               |
|-------------------------------------|-----------------------|
| `--card-background`                 | `#fff`                |
| `--card-padding`                    | `0px 0 15px 0`        |
| `--card-border-radius`              | `4px`                 |
| `--card-outline-color`              | `rgba(0, 0, 0, 0.12)` |
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
