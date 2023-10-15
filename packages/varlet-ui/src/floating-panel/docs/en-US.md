# FloatingPanel

### Intro
A panel floating at the bottom of the page, allowing users to freely drag up and down through content, is often used to provide additional functionality or information.

### Basic Usage
The default height of the FloatingPanel is `100px`, allowing dragging to expand or shrink the panel, and the default maximum height of the expansion is `60%` of the screen.

```html
<template>
  <var-floating-panel>
    <div style="text-align: center; padding: 5px 15px">
      <p>Drag panel</p>
    </div>
  </var-floating-panel>
</template>
```

### Custom Anchors
The anchor position of the FloatingPanel can be set via the `anchors` property (the default two anchors are at `100px` and `60%` of the screen), and the display anchor of the current panel can be controlled by `v-model:anchor`.

For example, dock the height of the panel at 100px, 40% screen height, and 80% screen height:

```html
<script setup>
const anchors = ref([100, window.innerHeight * 0.4, window.innerHeight * 0.8])
const anchor = ref(100)
</script>

<template>
  <var-floating-panel v-model:anchor="anchor" :anchors="anchors">
    <div style="text-align: center; padding: 15px">
      <p>The panel anchor height is  {{ Math.floor(anchor) }} px</p>
    </div>
  </var-floating-panel>
</template>
```

### Drag Head Only
By default, both the head area and the content area of a FloatingPanel can be dragged. If you want to disable dragging of the content area, set the `content-draggable` property to `false`.

```html
<template>
  <var-floating-panel :content-draggable="false">
    <var-cell v-for="i in 26" :key="i" :title="String.fromCharCode(i + 64)" border> 
    </var-cell>
  </var-floating-panel>
</template>
```

## API

### Props

| Prop  | Description  | Type      | Default        |
| ------- | ---- | ----- | ---- |
| `v-model:anchor` | The panel initially displays the anchor point, or the first value of the `anchors` attribute if not passed | _number \| string_ | `-`  |
| `anchors` | Custom anchors which unit is `px` | _number[]_ | `[100, window.innerHeight * 0.6]`  |
| `content-draggable` | Whether to allow to drag panel content area | _boolean_ | `true`  |
| `duration` | Transition duration which unit is `ms` | _number \| string_ | `300`  |
| `elevation` | Elevation level, options `true` `false` and level of `0-24` | _string \| number \| boolean_|   `true`    |
| `teleport`       | The location of the ejector layer mount              | _TeleportProps['to'] \| false_ | `false`  |
| `lock-scroll`    | Whether to disable scroll through, when disabled, the scrolling popup layer does not cause the body to scroll   | _boolean_   | `false`   |
| `safe-area` | Whether to enable bottom safe area adaptation | _boolean_ | `false`  |

### Events

| Event | Description  | Arguments  |
| ---- | ---- | ---- |
| `anchor-change` | Triggered after moving to an anchor | `height: number` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Custom panel content | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable  | Default  |
| ---------- | -------- |
| `--floating-panel-z-index` | `999` |
| `--floating-panel-border-top` | `none` |
| `--floating-panel-border-radius` | `2px` |
| `--floating-panel-background` | `#fff` |
| `--floating-panel-header-height` | `30px` |
| `--floating-panel-bar-width` | `20px` |
| `--floating-panel-bar-height` | `3px` |
| `--floating-panel-bar-border-radius` | `10px` |
| `--floating-panel-bar-background` | `#ddd` |