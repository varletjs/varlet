# Card

### Basic Use

```html
<template>
  <var-card
    title="Little Prince"
    description="It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me."
  />
</template>
```

### Show Subtitle

```html
<template>
  <var-card
    title="Little Prince"
    subtitle="where little prince from"
    description="It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me."
  />
</template>
```

### Show Image

```html
<template>
  <var-card title="Little Prince" subtitle="where little prince from" src="https://varlet-varletjs.vercel.app/cat.jpg" />
</template>
```

### 横向显示

```html
<template>
  <var-card title="Little Prince" subtitle="where little prince from" src="https://varlet-varletjs.vercel.app/cat.jpg" direction="row"/>
</template>
```

### Use Slot

```html
<template>
  <var-card
    title="Little Prince"
    subtitle="where little prince from"
    description="It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me."
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  >
    <template #extra>
      <var-space>
        <var-button type="primary">Use Button</var-button>
        <var-button type="warning">Use Button</var-button>
      </var-space>
    </template>
  </var-card>
</template>
```

### Ripple Effect

```html
<template>
  <var-card
    title="Little Prince"
    subtitle="where little prince from"
    description="It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me."
    ripple
  />
</template>
```

## API

### Props

| Prop          | Description                                                     | Type               | Default |
|---------------|-----------------------------------------------------------------| ------------------ | ------- |
| `title`       | The title of Card                                               | _string_           | `-`     |
| `subtitle`    | The subtitle of Card                                            | _string_           | `-`     |
| `description` | The description of Card                                         | _string_           | `-`     |
| `elevation`   | The shadow level of Card                                        | _string \| number_ | `2`     |
| `src`         | The src of Image                                                | _string_           | `-`     |
| `direction`   | Arrangement mode, options `row` `column`                        | _string_           | `column` |
| `fit`         | Fill mode, options `fill` `contain` `cover` `none` `scale-down` | _string_           | `cover` |
| `alt`         | Alt text                                                        | _string_           | `-`     |
| `height`      | height of Image                                                 | _string \| number_ | `-`     |
| `width`       | width of Image                                                  | _string \| number_ | `-`     |
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
| `--card-padding`               | `0px 0 15px 0`         |
| `--card-border-radius`         | `4px`                |
| `--card-image-width`           | `100%`               |
| `--card-row-image-width`       | `100px`              |
| `--card-image-height`          | `200px`              |
| `--card-title-color`           | `#333`               |
| `--card-title-font-size`       | `20px`               |
| `--card-title-padding`         | `0 12px`             |
| `--card-title-margin`          | `15px 0 0 0`         |
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
