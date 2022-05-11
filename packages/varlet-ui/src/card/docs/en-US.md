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

### Show Image

```html
<template>
  <var-card title="Dangerous" subtitle="The girl was dangerous" src="https://varlet-varletjs.vercel.app/cat.jpg" />
</template>
```

### Horizontal

```html
<template>
  <var-card 
    title="Dangerous"
    subtitle="The way she came into the place I knew right then and there.There was something different about this girl.The way she moved her hair her face her lines.Divinity in motion as she stalked the room.I could feel the aura of her presence.Every head turned feeling passion and lust.The girl was persuasive the girl I could not trust.The girl was bad.The girl was dangerous."
    src="https://varlet-varletjs.vercel.app/cat.jpg"
    layout="row">
    <template #extra>
      <var-button text text-color="#ff9800" size="mini">Learn More</var-button>
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
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  >
    <template #extra>
      <var-space>
        <var-button text text-color="#ff9800">Share</var-button>
        <var-button text text-color="#ff9800">Explore</var-button>
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

### Full Screen

```html
<script setup>
import { ref } from 'vue'

const floating = ref(false)
</script>

<template>
  <var-card
    v-model:floating="floating"
    @click="floating = true"
    title="Dangerous"
    subtitle="The girl was dangerous"
    ripple
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  >
    <template #extra>
      <var-button text text-color="#ff9800">Share</var-button>
      <var-button text text-color="#ff9800">Explore</var-button>
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

| Prop                  | Description                                                     | Type               | Default |
|-----------------------|-----------------------------------------------------------------| ------------------ | ------- |
| `title`               | The title of Card                                               | _string_           | `-`     |
| `subtitle`            | The subtitle of Card                                            | _string_           | `-`     |
| `description`         | The description of Card                                         | _string_           | `-`     |
| `elevation`           | The shadow level of Card                                        | _string \| number_ | `2`     |
| `src`                 | The src of Image                                                | _string_           | `-`     |
| `layout`              | Arrangement mode, options `row` `column`                        | _string_           | `column` |
| `fit`                 | Fill mode, options `fill` `contain` `cover` `none` `scale-down` | _string_           | `cover` |
| `alt`                 | Alt text                                                        | _string_           | `-`     |
| `height`              | height of Image                                                 | _string \| number_ | `-`     |
| `width`               | width of Image                                                  | _string \| number_ | `-`     |
| `ripple`              | Whether to enable ripple                                        | _boolean_          | `false` |
| `floating`            | Whether to full screen                                          |_boolean_          | `false`  |
| `floatingDuration`    | Time to full screen(ms)                                         |_number_          | `250`    |

### Slots

| Slot          | Description                  | Arguments |
| ------------- |------------------------------| --------- |
| `image`       | Custom image                 | `-`       |
| `title`       | Custom title                 | `-`       |
| `subtitle`    | Custom subtitle              | `-`       |
| `description` | Custom description           | `-`       |
| `extra`       | Custom bottom content        | `-`       |
| `toolbar-close` | Custom toolbar close         | `-`  |

### Events

| Events  | Description                      | Arguments      |
| ------- | -------------------------------- | -------------- |
| `click` | Triggered when the Card is click | `event: Event` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable                                     | Default              |
|----------------------------------------------|----------------------|
| `--card-background`                          | `#fff`               |
| `--card-padding`                             | `0px 0 15px 0`       |
| `--card-border-radius`                       | `4px`                |
| `--card-image-width`                         | `100%`               |
| `--card-row-image-width`                     | `120px`              |
| `--card-image-height`                        | `200px`              |
| `--card-row-image-height`                    | `120px`              |
| `--card-title-color`                         | `#333`               |
| `--card-title-font-size`                     | `20px`               |
| `--card-title-padding`                       | `0 12px`             |
| `--card-title-margin`                        | `15px 0 0 0`         |
| `--card-title-row-margin`                    | `10px 0 0 0`         |
| `--card-subtitle-color`                      | `rgba(0, 0, 0, 0.6)` |
| `--card-subtitle-font-size`                  | `14px`               |
| `--card-subtitle-row-font-size`              | `12px`               |
| `--card-subtitle-padding`                    | `0 13px`             |
| `--card-subtitle-margin`                     | `10px 0 0 0`         |
| `--card-subtitle-row-margin`                 | `4px 0 0 0`          |
| `--card-description-color`                   | `rgba(0, 0, 0, 0.6)` |
| `--card-description-font-size`               | `14px`               |
| `--card-description-margin`                  | `20px 0 0 0`         |
| `--card-description-padding`                 | `0 13px`             |
| `--card-footer-padding`                      | `0 12px`             |
| `--card-footer-margin`                       | `30px 0 0px 0`       |
| `--card-footer-right`                        | `13px`               |
| `--card-footer-bottom`                       | `9px`               |
| `--card-line-height`                         | `22px`               |
| `--card-row-line-height`                     | `1.4`                |
| `--card-floater-toolbar-bottom`              | `16px`               |
| `--card-floater-toolbar-right`               | `16px`               |
| `--card-floater-toolbar-color`               | `#fff`               |
| `--card-floater-toolbar-close-size`          | `24px`               |
| `--card-floater-toolbar-close-padding`       | `16px`               |
| `--card-floater-toolbar-close-primary-color` | `#212121`            |

