# Tabs

### Intro

Use `Tabs, Tab` to switch between tabbed groups and Use `TabsItems`, `TabItem` to achieve view linkage with Tabs.

### Install

```js
import { createApp } from 'vue'
import { Tabs, Tab, TabsItems, TabItem } from '@varlet/ui'

createApp()
  .use(Tabs)
  .use(Tab)
  .use(TabsItems)
  .use(TabItem)
```

### Basic Usage

```html
<var-tabs v-model:active="active">
  <var-tab>Option1</var-tab>
  <var-tab>Option2</var-tab>
  <var-tab>Option3</var-tab>
</var-tabs>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(0)

    return { active }
  }
}
```

### Named TAB

The Tabs decide which tab is activated by default by matching the `active` to the Tab's `index`
You can also name a Tab by setting the `name` to the Tab, in which case the Tabs will match the name first.

```html
<var-tabs v-model:active="active">
  <var-tab name="Option1">Option1</var-tab>
  <var-tab name="Option2">Option2</var-tab>
  <var-tab name="Option3">Option3</var-tab>
</var-tabs>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const active = ref('Option1')

    return { active }
  }
}
```

### Modify Style

```html
<var-tabs
  elevation
  color="#2979ff"
  active-color="#fff"
  inactive-color="hsla(0, 0%, 100%, .6)"
  v-model:active="active"
>
  <var-tab>Option1</var-tab>
  <var-tab>Option2</var-tab>
  <var-tab>Option3</var-tab>
</var-tabs>
```

### Tab Disabled

```html
<var-tabs
  elevation
  color="#2979ff"
  active-color="#fff"
  inactive-color="hsla(0, 0%, 100%, .6)"
  disabled-color="#aaa"
  v-model:active="active"
>
  <var-tab>Option1</var-tab>
  <var-tab>Option2</var-tab>
  <var-tab disabled>disabled</var-tab>
</var-tabs>
```

### Enable Scroll

Start scrolling automatically when the number of tabs is `more than four`.
Click the Tab to scroll automatically to the center of the viewport.

```html
<var-tabs
  elevation
  color="#2979ff"
  active-color="#fff"
  inactive-color="hsla(0, 0%, 100%, .6)"
  v-model:active="active"
>
  <var-tab>Option1</var-tab>
  <var-tab>Option2</var-tab>
  <var-tab>Option3</var-tab>
  <var-tab>Option4</var-tab>
  <var-tab>Option5</var-tab>
  <var-tab>Option6</var-tab>
  <var-tab>Option7</var-tab>
  <var-tab>Option8</var-tab>
</var-tabs>
```

### Tab Vertical Layout

```html
<var-tabs
  elevation
  item-direction="vertical"
  color="#2979ff"
  active-color="#fff"
  inactive-color="hsla(0, 0%, 100%, .6)"
  v-model:active="active5"
>
  <var-tab>
    <var-icon class="icon" name="information" />
    <div>Option1</div>
  </var-tab>
  <var-tab>
    <var-icon class="icon" name="warning" />
    <div>Option2</div>
  </var-tab>
  <var-tab>
    <var-icon class="icon" name="error" />
    <div>Option3</div>
  </var-tab>
</var-tabs>
```

```css
.icon {
  margin-bottom: 5px;
}
```

### Tabs Vertical Layout

```html
<var-tabs
  class="vertical-tabs"
  elevation
  layout-direction="vertical"
  color="#2979ff"
  active-color="#fff"
  inactive-color="hsla(0, 0%, 100%, .6)"
  v-model:active="active"
>
  <var-tab>Option1</var-tab>
  <var-tab>Option2</var-tab>
  <var-tab>Option3</var-tab>
</var-tabs>
```

```css
.vertical-tabs {
  width: 80px;
  height: 120px;
}
```

### View Relation

```html
<var-tabs
  elevation
  color="#2979ff"
  active-color="#fff"
  inactive-color="hsla(0, 0%, 100%, .6)"
  v-model:active="active"
>
  <var-tab>Option1</var-tab>
  <var-tab>Option2</var-tab>
  <var-tab>Option3</var-tab>
</var-tabs>

<var-tabs-items v-model:active="active">
  <var-tab-item>
    The way she came into the place.
    I knew right then and there.
    there was something different about this girl.
  </var-tab-item>
  <var-tab-item>
    The girl was persuasive.
    the girl I could not trust.
    The girl was bad.
    the girl was dangerous.
    I never know.
  </var-tab-item>
  <var-tab-item>
    She's so dangerous.
    the girl is so dangerous.
    Take away my money, throw away my time.
    You can call me honey.
    but you're no damn good for me.
  </var-tab-item>
</var-tabs-items>
```

### Sticky Layout

```html
<var-tabs
  sticky
  elevation
  color="#2979ff"
  active-color="#fff"
  inactive-color="hsla(0, 0%, 100%, .6)"
  :offset-top="54"
  v-model:active="active"
>
  <var-tab>Option1</var-tab>
  <var-tab>Option2</var-tab>
  <var-tab>Option3</var-tab>
</var-tabs>
```

## API

### Props

#### Tabs Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model:active` | The `active` tab identifier matches `name` first, followed by `index` | _string_ | `index` |
| `layout-direction` | The layout direction of the tabs, optional value of `horizontal` `vertical` | _string_ | `horizontal` |
| `item-direction` | The layout direction of the tab, optional value of `horizontal` `vertical` | _string_ | `horizontal` |
| `fixed-bottom` | Whether fixed to the bottom of the window, can be used for bottom navigation | _boolean_ | `false` |
| `color` | The background color of the tabs | _string_ | `#fff` |
| `active-color` | The primary color that the tab is activates | _string_ | `#2979ff` |
| `inactive-color` | The primary color that the tab is not activated | _string_ | `#646566` |
| `disabled-color` | The primary color that the tab is disabled | _string_ | `#e0e0e0` |
| `indicator-color` | The tab activates the color of the indicator | _string_ | `#2979ff` |
| `indicator-size` | Tab activates the size of the indicator | _string \| number_ | `2px` |
| `elevation` | Whether to enable shadows | _boolean_ | `false` |
| `sticky` | Whether to enable sticky layouts | _boolean_ | `false` |
| `safeArea` | Whether to aviod affected by the IOS home indicator | _boolean_ | `false` |
| `offset-top` | Distance offset top | _string \| number_ | `0` |

#### Tab Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `name` | tab's name | _string \| number_ | `index` |
| `disabled` | Whether to disable tab | _boolean_ | `false` |

#### TabsItems Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model:active` | The identity of the active tab | _string \| number_ | `-` |
| `can-swipe` | Whether to allow swipe switch | _boolean_ | `true` |
| `loop` | Whether to allow cycle switching | _boolean_ | `false` |

#### TabItem Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `name` | view's name | _string \| number_ | `index` |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `resize` | You can call this method to redraw when a tabs changes position size | `-` | `-` |

### Events

#### Tabs Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered when the tab is clicked, but not when the tab `disabled` status is `true` | `active: string \| number` |
| `change` | Triggered when switching tab | `active: string \| number` |

#### Tab Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered when the tab is clicked, but not when the tab `disabled` status is `true` | `active: string \| number` <br> `event: Event` |

### Slots

#### Tabs Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | tabs content | `-` |

#### Tab Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | tab's content | `-` |

#### TabsItems Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | TabsItems content | `-` |

#### TabItem Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | tabItem's content | `-` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

#### Tabs Variables

| Variable | Default |
| --- | --- |
| `--tabs-item-horizontal-height` | `44px` |
| `--tabs-item-vertical-height` | `66px` |
| `--tabs-radius` | `2px` |
| `--tabs-padding` | `12px` |
| `--tabs-indicator-size` | `2px` |
| `--tabs-indicator-background` | `var(--color-primary)` |
| `--tabs-background` | `#fff` |

#### Tab Variables

| Variable | Default |
| --- | --- |
| `--tab-padding` | `12px` |
| `--tab-active-color` | `var(--color-primary)` |
| `--tab-inactive-color` | `#646566` |
| `--tab-disabled-color` | `var(--color-text-disabled)` |
| `--tab-font-size` | `var(--font-size-md)` |