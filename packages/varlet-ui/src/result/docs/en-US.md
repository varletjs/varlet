# Result

### Intro

It is used to show the results to users.

### Basic Usage

```html
<template>
  <var-result
    type="success"
    title="Success"
    description="Hi, I'm a result description."
  >
    <template #footer>
      <var-button type="success">OK</var-button>
    </template>
  </var-result>
</template>
```

### Types

Result type, optional values are `info`，`success`，`warning`，`error`，`question`，`empty`.

```html
<script setup>
import { ref } from 'vue'

const success = ref(false)
const error = ref(false)
const info = ref(false)
const warning = ref(false)
const question = ref(false)
const empty = ref(false)
</script>

<template>
  <var-space direction="column" size="large">
    <var-button type="success" block @click="success = true">Success</var-button>
    <var-button type="warning" block @click="warning = true">Warning</var-button>
    <var-button type="info" block @click="info = true">Info</var-button>
    <var-button type="danger" block @click="error = true">Error</var-button>
    <var-button
      color="var(--result-question-color)"
      text-color="#fff"
      block
      @click="question = true"
    >
      Question
    </var-button>
    <var-button
      color="var(--result-empty-color)"
      text-color="#fff"
      block
      @click="empty = true"
    >
      Empty
    </var-button>
  </var-space>

  <var-popup :default-style="false" v-model:show="success">
    <var-result class="result" type="success" title="Success" description="Hi, I'm a result description.">
      <template #footer>
        <var-button type="success" @click="success = false">OK</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="warning">
    <var-result class="result" type="warning" title="Warning" description="Hi, I'm a result description.">
      <template #footer>
        <var-button type="warning" @click="warning = false">OK</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="info">
    <var-result class="result" type="info" title="Info" description="Hi, I'm a result description.">
      <template #footer>
        <var-button type="info" @click="info = false">OK</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="error">
    <var-result class="result" type="error" title="Error" description="Hi, I'm a result description.">
      <template #footer>
        <var-button type="danger" @click="error = false">OK</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="question">
    <var-result class="result" type="question" title="Question" description="Hi, I'm a result description.">
      <template #footer>
        <var-button
          color="var(--result-question-color)"
          text-color="#fff"
          @click="question = false"
        >
          OK
        </var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup :default-style="false" v-model:show="empty">
    <var-result class="result" type="empty" title="Empty" description="Hi, I'm a result description.">
      <template #footer>
        <var-button
          color="var(--result-empty-color)"
          text-color="#fff"
          @click="empty = false">
          OK
        </var-button>
      </template>
    </var-result>
  </var-popup>
</template>

<style>
.result {
  width: 75vw !important;
}
</style>
```

### Note when modifying the background color

Please try not to modify the background color to be transparent or translucent, which may affect the animation effect of the success type.

## API

### Props

| Prop          | Description                                                              | Type     | Default   |
|---------------|--------------------------------------------------------------------------|----------|-----------|
| `type`        | Image type，options `info` `success` `warning` `error` `question` `empty` | _string_ | `success` |
| `title`       | The title of Result                                                      | _string_ | `-`       |
| `description` | The description of Result                                                | _string_ | `-`       |
| `image-size`  | Image Size                                                               | _string \| number_   | `-`  |
| `animation`    | Whether to enable animation, valid for `success` type only               | _boolean_ | `true`    |

### Slots

| Name                | Description      | SlotProps |
|--------------------|---------| ---- |
| `image`            | Custom image   | `-`  |
| `title`            |  Custom title   | `-`  |
| `description`      |  Custom description   | `-`  |
| `footer`           | Custom bottom content | `-`  |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable                           | Default                    |
|------------------------------------|----------------------------|
| `--result-background`              | `#fff`                     |
| `--result-info-color`              | `var(--color-info)`        |
| `--result-info-border-color`       | `rgba(0, 175, 239, 0.3)`   |
| `--result-success-color`           | `var(--color-success)`     |
| `--result-success-border-color`    | `rgba(0, 196, 143, 0.3)`   |
| `--result-error-color`             | `var(--color-danger)`      |
| `--result-error-border-color`      | `rgba(244, 67, 54, 0.3)`   |
| `--result-warning-color`           | `var(--color-warning)`     |
| `--result-warning-border-color`    | `rgba(255, 159, 0, 0.3)`   |
| `--result-question-color`          | `#607d8b`                  |
| `--result-question-border-color`   | `rgba(96, 125, 139, 0.3)`  |
| `--result-empty-color`             | `#9e9e9e`                  |
| `--result-empty-border-color`      | `rgba(158, 158, 158, 0.3)` |
| `--result-padding`                 | `24px`                     |
| `--result-border-radius`           | `3px`                      |
| `--result-title-color`             | `#444`                     |
| `--result-title-font-size`         | `32px`                     |
| `--result-title-margin`            | `15px 0 0 0`               |
| `--result-image-size`              | `80px`                     |
| `--result-title-font-weight`       | `500`                      |
| `--result-description-margin`      | `10px 0 0 0`               |
| `--result-description-font-size`   | `14px`                     |
| `--result-description-color`       | `rgba(0, 0, 0, 0.6)`       |
| `--result-description-line-height` | `1.6`                      |

