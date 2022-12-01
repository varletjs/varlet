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

### Change BackGround Color

```html

<template>
  <var-result type="success" style="--result-background: #ffe3e3"></var-result>
</template>
```

### Use Slots

```html

<template>
  <var-result title="Looping" description="《You Are Not Alone》">
    <template #image>
      <svg class="music" viewBox="0 0 48 48">
        <circle cx="24" cy="24" fill="#37474f" r="19"/>
        <circle cx="24" cy="24" fill="#263238" r="18"/>
        <g fill="#37474f">
          <path d="m41.022 29.815-17.022-5.815 5.815 17.022c5.257-1.796 9.41-5.95 11.207-11.207z"/>
          <path d="m6.978 18.185 17.022 5.815-5.815-17.022c-5.257 1.797-9.41 5.95-11.207 11.207z"/>
        </g>
        <path d="m24 17c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z" fill="var(--color-danger)"/>
        <circle cx="24" cy="24" r="1"/>
      </svg>
    </template>
    <template #footer>
      <var-button type="danger">More</var-button>
    </template>
  </var-result>
</template>

<style>
  .music {
    width: 50vw;
    animation: rotate 6s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
```

## API

### Props

| Prop          | Description                                                              | Type     | Default     |
|---------------|--------------------------------------------------------------------------|--------|---------|
| `image-size`  | Image Size                                                               | _string \| number_ | `-`  |
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

| Variable                           | Default                        |
|------------------------------------|--------------------------------|
| `--result-background`              | `#fff`                         |
| `--result-padding`                 | `24px`                         |
| `--result-border-radius`           | `3px`                          |
| `--result-title-color`             | `#333`                         |
| `--result-title-font-size`         | `32px`                         |
| `--result-title-margin`            | `15px 0 0 0`                   |
| `--result-image-size`              | `80px`                         |
| `--result-title-font-weight`       | `500`                          |
| `--result-description-margin`      | `10px 0 0 0`                   |
| `--result-description-font-size`   | `14px`                         |
| `--result-description-color`       | `rgba(0, 0, 0, 0.6)`           |
| `--result-description-line-height` | `1.6`                          |
| `--result-info-color`              | `var(--color-info)`            |
| `--result-info-border-color`       | `rgba(0, 175, 239, 0.3)`       |
| `--result-success-color`           | `var(--color-success)`         |
| `--result-success-border-color`    | `rgba(0, 196, 143, 0.3)`       |
| `--result-error-color`             | `var(--color-danger)`          |
| `--result-error-border-color`      | `rgba(244, 67, 54, 0.3)`       |
| `--result-warning-color`           | `var(--color-warning)`         |
| `--result-warning-border-color`    | `rgba(255, 159, 0, 0.3)`       |
| `--result-question-color`          | `#607d8`                       |
| `--result-question-border-color`   | `rgba(96, 125, 139, 0.3)`      |
| `--result-empty-color`             | `#9e9e9e`                      |
| `--result-empty-border-color`      | `rgba(158, 158, 158, 0.3)`     |

