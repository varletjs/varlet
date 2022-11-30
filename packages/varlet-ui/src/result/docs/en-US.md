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
      <svg class="music" viewBox="0 0 1024 1024" width="200" height="200">
        <path
          d="M702.271724 36.807218c-262.394547-105.060192-560.331687 22.458056-665.42387 284.884594-105.124175 262.458531 22.458056 560.427662 284.884594 665.487854 262.426539 105.092183 560.363679-22.458056 665.455862-284.884595 105.124175-262.458531-22.490047-560.363679-284.916586-665.487853zM345.534148 927.803382C116.282828 835.987685 4.440431 574.808815 96.224137 345.525504 188.039835 116.274184 449.250696 4.399795 678.534007 96.247484c229.25132 91.783706 341.093717 352.994567 249.310011 582.245887-91.847689 229.283312-353.026558 341.093717-582.30987 249.310011z"
        ></path>
        <path
          d="M535.851774 452.601162a64.015056 64.015056 0 0 0-47.635392 118.784559 64.015056 64.015056 0 0 0 47.635392-118.784559z m-35.734542 89.128409a32.087507 32.087507 0 0 1-17.819283-41.620983 32.087507 32.087507 0 0 1 41.620983-17.819284 32.055515 32.055515 0 0 1-23.8017 59.440267z"
        ></path>
        <path
          d="M583.359199 333.848594a191.949193 191.949193 0 1 0-142.682234 356.38567 191.949193 191.949193 0 0 0 142.682234-356.38567z m-118.880534 296.945403a128.126087 128.126087 0 0 1-71.245142-166.355968 128.126087 128.126087 0 0 1 166.323976-71.245142 128.19007 128.19007 0 0 1 71.309125 166.387959 128.126087 128.126087 0 0 1-166.387959 71.213151z"
        ></path>
        <path
          d="M749.651183 607.152254a15.995766 15.995766 0 0 0-29.720133-11.868858v-0.031992a223.300895 223.300895 0 0 1-119.776297 122.655535 15.995766 15.995766 0 0 0 12.604664 29.400218c0.319915-0.127966 0.447881-0.383898 0.671822-0.479873a255.228444 255.228444 0 0 0 136.155961-139.67503h0.063983zM859.478114 633.897175a15.995766 15.995766 0 0 0-20.794496 8.893646 350.787151 350.787151 0 0 1-188.206184 192.684999 15.995766 15.995766 0 0 0 12.604663 29.400218c0.383898-0.191949 0.671822-0.543856 1.055721-0.703814a382.682709 382.682709 0 0 0 204.265933-209.480553 16.027758 16.027758 0 0 0-8.925637-20.794496z"
        ></path>
        <path
          d="M800.069838 610.127467a15.995766 15.995766 0 0 0-20.794496 8.893646 286.580146 286.580146 0 0 1-153.943253 157.654271h0.063983a15.995766 15.995766 0 0 0 12.540681 29.432209c0.319915-0.159958 0.511865-0.447881 0.863771-0.63983a318.859602 318.859602 0 0 0 170.194952-174.5458 16.027758 16.027758 0 0 0-8.925638-20.794496zM432.327175 285.125491a15.995766 15.995766 0 0 0-21.018437-8.381782c-0.287924 0.095975-0.447881 0.351907-0.671822 0.447882a255.228444 255.228444 0 0 0-136.155961 139.67503h-0.031991a15.995766 15.995766 0 1 0 29.688141 11.90085h0.031992A223.140937 223.140937 0 0 1 423.913402 306.175919a16.027758 16.027758 0 0 0 8.413773-21.050428zM381.940512 167.492627a16.027758 16.027758 0 0 0-21.018437-8.413773c-0.383898 0.159958-0.671822 0.511865-0.991737 0.671822a382.682709 382.682709 0 0 0-204.265934 209.480553 15.995766 15.995766 0 1 0 29.688142 11.932842 350.947109 350.947109 0 0 1 188.206184-192.653008 16.027758 16.027758 0 0 0 8.381782-21.018436z"
        ></path>
        <path
          d="M398.736066 247.279508a15.995766 15.995766 0 1 0-12.604663-29.368226c-0.319915 0.127966-0.511865 0.447881-0.83178 0.575847a318.955576 318.955576 0 0 0-170.194952 174.609783 15.995766 15.995766 0 0 0 29.656151 11.932842 286.804087 286.804087 0 0 1 153.943253-157.654271v-0.095975z"
        ></path>
      </svg>
    </template>
    <template #title>
      <h2>Looping</h2>
    </template>
    <template #description>
      <div>《You Are Not Alone》</div>
    </template>
    <template #footer>
      <var-button type="success">More</var-button>
    </template>
  </var-result>
</template>

<style>
  .music {
    animation: rotate 6s linear infinite;
  }

  .music path {
    fill: var(--color-danger);
  }

  @keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>
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

