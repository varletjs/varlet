# Card

### Intro

```js
import { createApp } from 'vue'
import { Card } from '@varlet/ui'

createApp().use(Card)
```

### Basic Use

```html
<var-card
  title="Little Prince"
  description="It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me."
/>
```

### Show Subtitle

```html
<var-card
  title="Little Prince"
  subtitle="where little prince from"
  description="It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me."
/>
```

### Show Image

```html
<var-card title="Little Prince" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
```

### Use Slot

```html
<var-card
  title="Little Prince"
  subtitle="where little prince from"
  description="It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me."
  src="https://varlet.gitee.io/varlet-ui/cat.jpg"
>
  <template #extra>
    <var-button type="primary" style="margin-right: 10px">Use Button</var-button>
    <var-button type="warning">Use Button</var-button>
  </template>
</var-card>
```

### Ripple Effect

```html
<var-card
  title="Little Prince"
  subtitle="where little prince from"
  description="It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me."
  ripple
/>
```

## API

### 属性

| Prop          | Description                                                     | Type               | Default |
| ------------- | --------------------------------------------------------------- | ------------------ | ------- |
| `title`       | The title of Card                                               | _string_           | `-`     |
| `subtitle`    | The subtitle of Card                                            | _string_           | `-`     |
| `description` | The description of Card                                         | _string_           | `-`     |
| `elevation`   | The shadow level of Card                                        | _string \| number_ | `2`     |
| `src`         | The src of Image                                                | _string_           | `-`     |
| `fit`         | Fillmode, opitions `fill` `contain` `cover` `none` `scale-down` | _string_           | `cover` |
| `alt`         | Alt text                                                        | _string_           | `-`     |
| `height`      | Heigth of Image                                                 | _string \| number_ | `-`     |
| `ripple`      | Whether to enable ripple                                        | _boolean_          | `false` |

### Slots

| Slot          | Description           | Arguments |
| ------------- | --------------------- | --------- |
| `image`       | Custom image          | `-`       |
| `title`       | Custom title          | `-`       |
| `subtitle`    | Custom subtitle       | `-`       |
| `description` | Custom description    | `-`       |
| `extra`       | Custom bottom content | `-`       |

### Events

| Events  | Description                      | Arguments      |
| ------- | -------------------------------- | -------------- |
| `click` | Triggered when the Card is click | `event: Event` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable                       | Default              |
| ------------------------------ | -------------------- |
| `--card-background`            | `#fff`         |
| `--card-padding`               | `5px 0 15px 0`         |
| `--card-border-radius`         | `4px`                |
| `--card-image-width`           | `100%`               |
| `--card-image-height`          | `200px`              |
| `--card-title-color`           | `#333`               |
| `--card-title-font-size`       | `20px`               |
| `--card-title-padding`         | `0 12px`             |
| `--card-title-margin`          | `10px 0 0 0`         |
| `--card-subtitle-color`        | `rgba(0, 0, 0, 0.6)` |
| `--card-subtitle-font-size`    | `14px`               |
| `--card-subtitle-padding`      | `0 13px`             |
| `--card-subtitle-margin`       | `10px 0 0 0`         |
| `--card-description-color`     | `rgba(0, 0, 0, 0.6)` |
| `--card-description-font-size` | `14px`               |
| `--card-description-margin`    | `20px 0 0 0`         |
| `--card-description-padding`   | `0 13px`             |
| `--card-footer-padding`        | `0 12px`             |
| `--card-footer-margin`         | `30px 0 0px 0`       |
| `--card-line-height`           | `22px`               |
