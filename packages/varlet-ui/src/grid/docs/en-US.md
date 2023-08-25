# Grid

### Intro

The basic components used for layout are convenient for developers to carry out page layout.

### Basic Usage

```html
<template>
  <var-grid>
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
  </var-grid>
</template>

```

### Column

```html
<template>
  <var-grid column="5">
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
  </var-grid>
</template>
```

### Square

```html
<template>
  <var-grid column="4" square>
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
  </var-grid>
</template>
```

### Gutter

```html
<template>
  <var-grid column="2" gutter="8px" :border="false">
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
  </var-grid>
</template>

```

### Direction

```html
<template>
  <var-grid column="4" direction="horizontal">
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
    <var-grid-item icon="image-outline" text="Text" />
  </var-grid>
</template>

```

### Badge

```html
<template>
  <var-grid column="4">
    <var-grid-item icon="image-outline" dot text="文字" />
    <var-grid-item icon="image-outline" badge="66" text="文字" />
    <var-grid-item icon="image-outline" badge="1" :badge-props="{ type: 'primary'}" text="文字" />
    <var-grid-item icon="image-outline" badge="1" :badge-props="{ position: 'right-bottom'}" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
    <var-grid-item icon="image-outline" text="文字" />
  </var-grid>
</template>
```

### Custom Content

```html
<template>
  <var-grid column="2" gutter="12px" :border=" false ">
    <var-grid-item>
      <var-image size="40px" :src=" cat " />
    </var-grid-item>
    <var-grid-item>
      <var-image size="40px" :src=" cat2 " />
    </var-grid-item>
    <var-grid-item>
      <var-image size="40px" :src=" cat3 " />
    </var-grid-item>
  </var-grid>
</template>
```


## API

### Props

#### Grid Props

| Prop | Description | Type             | Default       |
| ------- | --- |----------------|-----------|
| `column`    | Set Column Num  | _string \| number_ | `4` |
| `iconSize`  | Set Icon Size | _string \| number_ | `24` |
| `square`    | Set to a square, it is recommended that the number of columns be less than `4` | _boolean_ | `false` |
| `gutter`    | Set Gutter | _string \| number_ | `0` |
| `center`    | Center the content | _boolean_ | `false` |
| `border`    | Set Border | _boolean_ | `false` |
| `ripple`    | Set click water ripple effect | _boolean_ | `false` |
| `direction` | Arrangement direction of the grid content, the optional value is`horizontal`、`vertical` | _string_ | `vertical` |

#### GridItem Props

| Prop | Description | Type             | Default       |
| ------- | --- |----------------|-----------|
| `text`  | Text | _string_ | `` |
| `icon`  | Icon | _string_ | `` |
| `iconColor`  | Set Icon color | _string_ | `` |
| `badge`  | Set Badge value | _string \| number_ | `` |
| `dot`  | Set Dot | _boolean_ | `false` |
| `badgeProps`  | Badge Configuration | _BadgeProps_ | `` |



### Events
#### GridItem Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Trigger on click | `event: Event` |

### Slots

#### GridItem Slots
| Name | Description | Arguments |
| --- | --- | --- |
| `default` | Content of grid item | `-` |
| `icon` | Support for inserting a custom Icon into a component | `-` |
| `text` | Support for inserting a custom Text into a component | `-` |

### 样式变量

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable                                           | Default   |
|-----------------------------------------------| -------- |
| `--grid-item-border` | `thin solid rgba(0, 0, 0, 0.12)`  |
| `--grid-item-border-radius` | `4px`  |
| `--grid-item-padding` | `16px 8px`  |
