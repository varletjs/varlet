# Ripple Directive

### Intro
Causes the element to generate a ripple spread effect when clicked.

### Basic Use

```html
<template>
  <div class="ripple-example-block var-elevation--2" v-ripple>click</div>
</template>

<style>
.ripple-example-block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  user-select: none;
  cursor: pointer;
  color: #888;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: background-color 0.25s;
}
</style>
```

### Custom Color

```html
<template>
  <div class="ripple-example-block var-elevation--2" v-ripple="{ color: '#2979ff' }">click</div>
</template>

<style>
.ripple-example-block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  user-select: none;
  cursor: pointer;
  color: #888;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: background-color 0.25s;
}
</style>
```

### Disabled Status

```html
<template>
  <div class="ripple-example-block var-elevation--2" v-ripple="{ disabled: true }">click</div>
</template>

<style>
.ripple-example-block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: #888;
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: background-color 0.25s;
}
</style>
```

## API

### Options

| Option | Description | Type | Default | 
| --- | --- | --- | --- | 
| `color` | Ripple color | _string_ | `currentColor` |
| `disabled` | Whether to disable ripple | _boolean_ | `false` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--ripple-cubic-bezier` | `cubic-bezier(0.68, 0.01, 0.62, 0.6)` |
| `--ripple-color` | `currentColor` |

