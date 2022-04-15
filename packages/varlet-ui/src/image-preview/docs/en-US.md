# ImagePreview

### Intro

Image-Preview, Support double-click magnification, Support function call and component call two ways.

### Function Call

#### Basic Usage

```html
<script setup>
import { ImagePreview } from '@varlet/ui'
import { onMounted } from 'vue'

onMounted(()=>{
  ImagePreview('https://varlet.gitee.io/varlet-ui/cat.jpg')
})

</script>

```

#### Call Back
```html
<script setup>
import { ImagePreview } from '@varlet/ui'
import { onMounted } from 'vue'

const images = [
  'https://varlet.gitee.io/varlet-ui/cat.jpg',
  'https://varlet.gitee.io/varlet-ui/cat2.jpg'
]

onMounted(()=>{
  ImagePreview({
    images,
    onChange(index) {
      console.log(index)
    }
  })
})
</script>
```


## Component Call

### Basic Use

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
const images = ref([
  'https://varlet.gitee.io/varlet-ui/cat.jpg',
  'https://varlet.gitee.io/varlet-ui/cat2.jpg',
])
</script>

<template>
  <var-button
    type="warning"
    block
    @click="show = true"
  >
    Basic Use
  </var-button>
  <var-image-preview :images="images" v-model:show="show" />
</template>
```

### Specify initial position

```html
<script setup>
import { ref } from 'vue'

const currentShow = ref(false)
const images = ref([
  'https://varlet.gitee.io/varlet-ui/cat.jpg',
  'https://varlet.gitee.io/varlet-ui/cat2.jpg',
])
</script>

<template>
 <var-button 
    type="warning" 
    block
    @click="currentShow = true"
  >
    Specify initial position
  </var-button>
  <var-image-preview
    current="https://varlet.gitee.io/varlet-ui/cat2.jpg"
    :images="images"
    v-model:show="currentShow" 
  />
</template>
```

### Display the close button

```html
<script setup>
import { ref } from 'vue'

const closeShow = ref(false)
const images = ref([
  'https://varlet.gitee.io/varlet-ui/cat.jpg',
  'https://varlet.gitee.io/varlet-ui/cat2.jpg',
])
</script>

<template>
   <var-button 
    type="warning" 
    block 
    @click="closeShow = true"
  >
    Display the close button
  </var-button>
  <var-image-preview
    closeable
    :images="images"
    v-model:show="closeShow" 
  />
</template>
```

### Listen for close event

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const closeEventShow = ref(false)
const images = ref([
  'https://varlet.gitee.io/varlet-ui/cat.jpg',
  'https://varlet.gitee.io/varlet-ui/cat2.jpg',
])
const handleCloseEvent = () => Snackbar('The shutdown event was triggered.');
</script>

<template>
  <var-button
    block
    type="warning"
    @click="closeEventShow = true"
  >
    Listen for close event
  </var-button>
  <var-image-preview 
    :images="images"
    v-model:show="closeEventShow"
    @close="handleCloseEvent" 
  />
</template>
```

### Show extra slots

```html
<script setup>
import { ref } from 'vue'

const extraSlotsShow = ref(false)
const menuShow = ref(false)
const images = ref([
  'https://varlet.gitee.io/varlet-ui/cat.jpg',
  'https://varlet.gitee.io/varlet-ui/cat2.jpg',
])
const actions = [
  {
    name: 'operate',
    icon: 'wrench'
  },
  {
    name: 'operate',
    icon: 'wrench'
  }
]
</script>

<template>
   <var-button
    block
    type="warning"
    @click="extraSlotsShow = true"
  >
    Show extra slots
  </var-button>
  <var-image-preview :images="images" v-model:show="extraSlotsShow">
    <template #extra>
      <var-icon
        name="menu"
        :size="22"
        color="#fff"
        @click="menuShow = true"
      />
      <var-action-sheet :actions="actions" v-model:show="menuShow" />
    </template>
  </var-image-preview>
</template>
```

## API

### Props

| Prop         | Description   | Type  | Default  |
| ------------ | ------------ | ------------------ | ------------ |
| `show`       | Whether or display | _boolean_ | `false` |
| `images`     | Need to preview the image URL | _string[]_ | `[]` |
| `current`    | URL from which the image preview starts | _string_ | `-` |
| `zoom`       | Double-click to zoom in | _string \| number_ | `2` |
| `closeable`  | Whether to show the close button | _boolean_ | `false` |
| `loop`       | Whether to open loop playback | _boolean_ | `true` |
| `indicator`  | Whether to show paging | _boolean_ | `true` |
| `lock-scroll` | Lock scroll | _boolean_ | `true` |
| `teleport`   | The location of the pop-up layer to mount | _TeleportProps['to']_ | `-` |

### Events

| Event | Description | Arguments |
| ----- | ---- | ----- |
| `change` | The callback function when switching images, the callback parameter is the current index | `index: number` Image indexing |
| `open`   | Triggered when Image-Preview is turned on | `-`  |
| `opened` | Triggered at the end of the open image-preview animation | `-` |
| `close`  | Triggered when Image-Preview is off | `-` |
| `closed` | Triggered when the animation that closes the image-preview ends | `-` |

### Slot

| Slot | Description | Arguments |
| --- | --- | --- |
| `indicator` | Paging indicator | `index: number` Image indexing <br> `length: number` Total number of image |
| `close-icon` | Close button | `-` |
| `extra` | Extra slots | `-` |

### ImagePreview Options

| Prop   | Description  |  Type  | Default |
| ------ | ----------- | ------ | -------- |
| `images`     | The image URL array or the URL of a single image to be previewed | _string[] \| string_ | `[]` |
| `current`    | URL from which the image preview starts | _string_ | `-` |
| `zoom`       | Double-click to zoom in | _string \| number_ | `2` |
| `closeable`  | Whether to show the close button | _boolean_ | `false` |
| `loop`       | Whether to open loop playback | _boolean_ | `true` |
| `indicator`  | Whether to show paging | _boolean_ | `true` |
| `lockScroll` | Lock scroll | _boolean_ | `true` |
| `onChange`   | The callback function when switching images, the callback parameter is the current index | _(index: number) => void_  |  `-` |
| `onOpen`   | Callback when image-preview is turned on |  _() => void_ | `-` |
| `onOpened` | Callback at the end of the animation that opened image-preview |   _() => void_ | `-` |
| `onClose`  | Callback when image-preview is closed |  _() => void_ |  `-` |
| `onClosed` | Callback at the end of the animation that closes the image-preview |  _() => void_ | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| ------ | -------- |
| `--image-preview-swipe-indicators-text-color` | `#ddd`  |
| `--image-preview-swipe-indicators-padding`    | `16px 0` |
| `--image-preview-zoom-container-background`   | `#000`  |
| `--image-preview-close-icon-top`              | `14px` |
| `--image-preview-close-icon-right`            | `14px` |
| `--image-preview-close-icon-size`             | `22px` |
| `--image-preview-close-icon-color`            | `#fff` |
| `--image-preview-extra-top`                   | `14px` |
| `--image-preview-extra-left`                  | `14px` |
