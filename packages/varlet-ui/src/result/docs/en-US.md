# result

### Intro

It is used to show the results to users.

### Basic Use

```html

<template>
  <var-result type="success" title="Success"/>
</template>
```

### Show Description

```html

<template>
  <var-result type="success" title="Success" description="Hi, I'm a result description."/>
</template>
```

### Use Slots

```html

<template>
  <var-result>
    <template #image>
      <var-image src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </template>
    <template #title>
      <h2>Title slot</h2>
    </template>
    <template #description>
      <div>This is a slot for description.</div>
    </template>
    <template #footer>
      <var-button type="success">Button</var-button>
    </template>
  </var-result>
</template>
```

## API

### Props

| Prop          | Description                                                              | Type     | Default     |
|---------------|--------------------------------------------------------------------------|--------|---------|
| `imageSize`   | Image Size                                                               | _string \| number_ | `-`  |
| `type`        | Image type，options `info` `success` `warning` `error` `question` `empty` | _string_  | `-`     |
| `title`       | The title of Result                                                      | _string_  | `-`     |
| `description` | The description of Result                                                | _string_  | `-`     |
| `duration`    | Time for animation（ms）                                                   | _number_ | `300`   |

### Slots

| Name                | Description      | SlotProps |
|--------------------|---------| ---- |
| `image`            | Custom image   | `-`  |
| `title`            |  Custom title   | `-`  |
| `description`      |  Custom description   | `-`  |
| `footer`           | Custom bottom content | `-`  |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable                              | Default               |
|----------------------------------|-------------------|
|`--result-background`|`#fff`|
|`--result-padding`|`24px`|
|`--result-border-radius`|`3px`|
|`--result-title-color`|`#333`|
|`--result-title-font-size`|`32px`|
|`--result-title-margin`|`15px 0 0 0`|
|`--result-image-size`|`80px`|
|`--result-title-font-weight`|`500`|
|`--result-description-margin`|`10px 0 0 0`|
|`--result-description-font-size`|`14px`|
|`--result-description-color`|`#00000099`|
|`--result-description-line-height`|`1.6`|
|`--result-info-color`|`var(--color-info)`|
|`--result-info-border-color`|`#00afef4c`|
|`--result-success-color`|`var(--color-success)`|
|`--result-success-border-color`|`#00c48f4c`|
|`--result-error-color`|`var(--color-danger)`|
|`--result-error-border-color`|`#f443364d`|
|`--result-warning-color`|`var(--color-warning)`|
|`--result-warning-border-color`|`#ff9f004d`|
|`--result-question-color`|`#607d8`|
|`--result-question-border-color`|`#607D8B4D`|
|`--result-empty-color`|`#9e9e9e`|
|`--result-empty-border-color`|`#9e9e9e4d`|

