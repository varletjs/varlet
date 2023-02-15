# Avatar

### Intro

Avatar Component

### Avatar Size

```html
<template>
  <var-space align="center">
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="small" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="large" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="78" />
  </var-space>
</template>
```

### Avatar Shape

```html
<template>
  <var-space>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" :round="false" />
  </var-space>
</template>
```

### Fit Mode

```html
<template>
  <var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <span>fill</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="cover" />
      <span>cover</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="contain" />
      <span>contain</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="none" />
      <span>none</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="scale-down" />
      <span>scale-down</span>
    </var-space>
  </var-space>
</template>
```

### Font Size

```html
<script setup>
import { ref } from 'vue'

const text = ref('VARLET')
</script>

<template>
  <var-space direction="column">
    <var-space>
      <var-avatar> {{ text }} </var-avatar>
      <var-avatar :round="false"> {{ text }} </var-avatar>
    </var-space>
    <var-input v-model="text" />
  </var-space>
</template>
```

### Background Color

```html
<template>
  <var-space>
    <var-avatar color="#4a79f5">
      <var-icon name="fire" />
    </var-avatar>
    <var-avatar :round="false" color="#eb5a3f">
      <var-icon name="fire" />
    </var-avatar>
  </var-space>
</template>
```

### Avatar Horizontal Group

```html
<template>
  <var-avatar-group>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat2.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat3.jpg" bordered />
    <var-avatar bordered>+2</var-avatar>
  </var-avatar-group>
</template>
```

### Avatar Vertical Group

```html
<template>
  <var-avatar-group vertical>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat2.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat3.jpg" bordered />
    <var-avatar bordered>+2</var-avatar>
  </var-avatar-group>
</template>
```

### Use local paths

In the file `.vue`,
the `Vue component` will not be automatically processed by the build tool like the native img module,
so you need to import the image resources manually.
Here's how the different build tools are used.

#### Vite

Automatic preprocessing with [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue#asset-url-handling).

```ts
// playground-ignore
// vite.config.js
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          'var-avatar': ['src']
        }
      }
    })
  ],
})
```

```html
<!-- playground-ignore -->
<template>
  <var-avatar src="../../assets/logo.png"/>
</template>
```

Or import separately

```html
<!-- playground-ignore -->
<script setup>
import logo from '../../assets/logo.png'
</script>

<template>
  <var-avatar :src="logo"/>
</template>
```

#### Webpack

```html
<!-- playground-ignore -->
<template>
  <var-avatar :src="require('../../assets/logo.png')"/>
</template>
```

## API

### Props

#### Avatar Props

| Prop          | Description                                                 | Type   | Default          |
|---------------|-------------------------------------------------------------|------|--------------|
| `round`       | Whether the avatar is round or not                                                | _boolean_          | `true` |
| `size`        | The size of the avatar, with optional values of `mini small normal large`                 | _string \| number_ | `normal` |
| `color`       | Background color of the avatar                                                | _string_           | `-` |
| `src`         | Address of avatar                                                   | _string_            | `-` |
| `fit`         | Filling mode of avatar image, optional value `fill contain cover none scale-down` | _string_            | `cover` |
| `bordered`    | Avatar with or without border                                                | _boolean_ | `false` |
| `border-color`| Avatar border color                                                  | _string_ | `-` |
| `loading`     | When lazy loading is enabled, the image displayed in the load                                 | _string_ | `-` |
| `error`       | When lazy loading is enabled, the image displayed when loading fails                           | _string_ | `-` |
| `lazy`        | Whether to enable lazy loading                                               | _boolean_ | `false` |

#### AvatarGroup Props

| Prop              | Description                                        | Type   | Default          |
|-------------------|-------------------------------------------|------|--------------|
| `offset`          | Avatar Offset within Avatar Group	| _number \| string_ | `-10` |
| `vertical`        | Whether the group avatars are vertically aligned | _boolean_ | `false` |

### Events

#### Avatar Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered when clicking on avatar | `event: Event` |
| `load`  | Triggered when the avatar image is successfully loaded (failure in lazy loading mode will try to load the avatar image multiple times and will only be triggered when successfully loaded) | `event: Event` |
| `error` | Triggered when the avatar image fails to load (failure in lazy loading mode will try to load the avatar image multiple times, will only be triggered at the end of the number of attempts) | `event: Event` |

### Slots

#### Avatar Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Customize avatar content | `-` |

#### AvatarGroup Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Avatar group avatar | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

#### Avatar Variables

| Variable | Default |
| --- | --- |
| `--avatar-text-color` |  `#f5f5f5`|
| `--avatar-border-radius` | `4px` |
| `--avatar-mini-size` | `28px`|
| `--avatar-small-size` |  `36px`|
| `--avatar-normal-size` |  `48px`|
| `--avatar-large-size` |  `64px`|
| `--avatar-border` |  `2px solid #fff`|
| `--avatar-background-color` |  `#bebebe`|

#### AvatarGroup Variables

| Variable | Default |
| --- | --- |
| `--avatar-group-offset` | `-10px` |