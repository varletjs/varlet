# MenuSelect

### Intro

Menu with selector function, some functions are used in the same way as [Menu](#/en-US/menu).

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const value = ref()
</script>

<template>
  <var-menu-select v-model="value">
    <var-button type="primary">{{ value ? value : 'Please Select' }}</var-button>

    <template #options>
      <var-menu-option label="Eat" />
      <var-menu-option label="Sleep" />
      <var-menu-option label="Play game" />
    </template>
  </var-menu-select>
</template>
```

### Size

```html
<script setup>
import { ref } from 'vue'
  
const valueNormal = ref()
const valueSmall = ref()
const valueMini = ref()
const valueLarge = ref()
</script>

<template>
  <var-space>
    <var-menu-select v-model="valueNormal">
      <var-button type="primary">
        {{ valueNormal ? valueNormal : 'Normal Size' }}
      </var-button>

      <template #options>
        <var-menu-option label="Eat" />
        <var-menu-option label="Sleep" />
        <var-menu-option label="Play game" />
      </template>
    </var-menu-select>

    <var-menu-select size="small" v-model="valueSmall">
      <var-button type="primary">
        {{ valueSmall ? valueSmall : 'Small Size' }}
      </var-button>

      <template #options>
        <var-menu-option label="Eat" />
        <var-menu-option label="Sleep" />
        <var-menu-option label="Play game" />
      </template>
    </var-menu-select>

    <var-menu-select size="mini" v-model="valueMini">
      <var-button type="primary">
        {{ valueMini ? valueMini : 'Mini Size' }}
      </var-button>

      <template #options>
        <var-menu-option label="Eat" />
        <var-menu-option label="Sleep" />
        <var-menu-option label="Play game" />
      </template>
    </var-menu-select>

    <var-menu-select size="large" v-model="valueLarge">
      <var-button type="primary">
        {{ valueLarge ? valueLarge : 'Large Size' }}
      </var-button>

      <template #options>
        <var-menu-option label="Eat" />
        <var-menu-option label="Sleep" />
        <var-menu-option label="Play game" />
      </template>
    </var-menu-select>
  </var-space>
</template>
```

### Value Mapping

```html
<script setup>
import { ref } from 'vue'

const value = ref()
</script>

<template>
  <var-menu-select v-model="value">
    <var-button type="primary">{{ value ? `value: ${value}` : 'Please Select' }}</var-button>

    <template #options>
      <var-menu-option label="Eat" :value="1" />
      <var-menu-option label="Sleep" :value="2" />
      <var-menu-option label="Play game" :value="3" />
    </template>
  </var-menu-select>
</template>
```

### Scrollable

Make the menu scrollable by turning on `scrollable`.

```html
<script setup>
import { ref } from 'vue'

const value = ref()
const options = ref(Array.from(
  { length: 30 }, 
  (_, index) => ({ label: `Option ${index + 1}`, value: index }))
)
</script>

<template>
  <var-menu-select scrollable v-model="value">
    <var-button type="primary">{{ value ? value : 'Please Select' }}</var-button>

    <template #options>
      <var-menu-option 
        v-for="option in options" 
        :key="option.value" 
        :label="option.label" 
      />
    </template>
  </var-menu-select>
</template>
```

### Option Disabled

```html
<script setup>
import { ref } from 'vue'

const value = ref()
</script>

<template>
  <var-menu-select scrollable v-model="value">
    <var-button type="primary">{{ value ? value : 'Please Select' }}</var-button>

    <template #options>
      <var-menu-option label="Eat" />
      <var-menu-option label="Sleep" />
      <var-menu-option label="Play game" disabled />
    </template>
  </var-menu-select>
</template>
```

### Multiple

```html
<script setup>
import { ref } from 'vue'

const value = ref([])
</script>

<template>
  <var-menu-select multiple v-model="value">
    <var-button type="primary">{{ value.length ? value : 'Please Select' }}</var-button>

    <template #options>
      <var-menu-option label="Eat" />
      <var-menu-option label="Sleep" />
      <var-menu-option label="Play game" />
      <var-menu-option label="Coding" />
      <var-menu-option label="Rest" />
    </template>
  </var-menu-select>
</template>
```

### Disable Close On Select

Close `close-on-select` disables closing the menu when selecting an option. The default behavior is to close the menu when selecting an option, which is not allowed in multi-select mode.

```html
<script setup>
import { ref } from 'vue'

const value = ref()
</script>

<template>
  <var-menu-select :close-on-select="false" v-model="value">
    <var-button type="primary">{{ value ? value : 'Please Select' }}</var-button>

    <template #options>
      <var-menu-option label="Eat" />
      <var-menu-option label="Sleep" />
      <var-menu-option label="Play game" />
    </template>
  </var-menu-select>
</template>
```

## API

### Props

#### MenuSelect Props

| Prop            | Description                                                                                                                  | Type              | Default           |
|-----------------|----------------------------------------------------------------------------|----------------------|-------------------|
| `v-model`  | The value of the binding                                                      | _any \| any[]_              | `-`         |
| `v-model:show`  | Whether to show the menu                                                                                                     |_boolean_             | `false`         |
| `size`  | Menu size, optional values `normal` `mini` `small` `large`        | _string_              | `normal`         |
| `multiple`     | Whether to select multiple                                                      | _boolean_           | `false` |
| `scrollable`     | Whether to enable scrolling                                                      | _boolean_           | `false` |
| `close-on-select`     | Whether to close the menu when selected (selected options in multi-select mode never close the menu) | _boolean_           | `true` |
| `placement`     | Menu popup placement                                                                                                         | _Placement_          | `cover-top-start` |
| `strategy`       | Menu position strategy, optional value is `absolute` `fixed` | _string_              | `absolute`           |
| `offset-x`      | The x-axis offset, relative to the menu-aligned position                                                                     | _number \| string_           | `0` |
| `offset-y`      | The y-axis offset, relative to the menu-aligned position                                                                     | _number \| string_           | `0` |
| `teleport`      | The location of the menu mount                                                                                               | _TeleportProps['to'] \| false_ | `body`            |
| `disabled`      | Whether to disable the menu                                                                                                  | _boolean_            | `false`           |
| `trigger`       | Menu trigger method, optional value is `click` `hover`, `click` is triggered when clicked, `hover` is triggered when hovered | _string_  | `click`           |
| `reference`       | The associated trigger element selector is used to specify specific child elements as trigger elements | _string_              | `-`           |
| `elevation` | Elevation level, options `true` `false` and level of `0-24` | _string \| number \| boolean_|   `true`    |
| `same-width`    | Whether to same width as trigger element                                                                                     | _boolean_ | `false`           |
| `popover-class` | Class of the popover                                                    | _string_             | `-`            |
| `close-on-click-reference` | Whether to close the menu when clicking the reference element | _boolean_ | `false` |

#### MenuOption Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `label` | The text that the option displays | _any_ | `-` |
| `value` | The value of the option binding | _any_ | `-` |
| `disabled` | Whether to disable | _boolean_ | `false` |

### Placement

| Prop | Description                             |
| ------- |-----------------------------------------|
| `top` | Top center position                     |
| `top-start` | Top left position                       |
| `top-end` | Top right position                      |
| `bottom` | Bottom center position                  |
| `bottom-start` | Bottom left position                    |
| `bottom-end` | Bottom right position                   |
| `right` | Right center position                   |
| `right-start` | Top right position                      |
| `right-end` | Bottom right position                   |
| `left` | Left center position                    |
| `left-start` | Top left position                       |
| `left-end` | Bottom left position                    |
| `cover-top` | Top center position, overlay trigger    |
| `cover-top-start` | Top left position, overlay trigger      |
| `cover-top-end` | Top right position, overlay trigger     |
| `cover-bottom` | Bottom center position, overlay trigger |
| `cover-bottom-start` | Bottom left position, overlay trigger   |
| `cover-bottom-end` | Bottom right position, overlay trigger  |
| `cover-left` | Left center position, overlay trigger   |
| `cover-right` | Right center position, overlay trigger |

### Methods

#### MenuSelect Methods

| Method   | Description                     | Arguments | Return |
| --- |---------------------------------| --- | --- |
| `open` | Open Menu                       | `-` | `-` |
| `close` | Close Menu                      | `-` | `-` |
| `resize` | This method can be called to redraw when the default slot element of Menu select changes its position and size | `-` | `-` |

### Events

#### MenuSelect Events

| Event    | Description | Arguments |
| --- | --- | --- |
| `open` | Triggered when the menu is opened | `-` |
| `opened` | Triggered when the open menu animation ends | `-` |
| `close` | Triggered when the menu is closed | `-` |
| `closed` | Triggered when the closing menu animation ends | `-` |
| `click-outside` | Triggered when clicking outside the menu | `event: Event` |

### Slots

#### MenuSelect Slots

| Name | Description | SlotProps |
| --- |----------------------| --- |
| `default` | Menu select trigger element | `-` |
| `options` | Menu select options         | `-` |

#### MenuOption Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Options to display the content | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

#### Select Variables

| Variable | Default |
| --- | --- |
| `--menu-select-menu-max-height` | `278px` |
| `--menu-select-menu-padding` | `0` |
| `--menu-select-menu-border-radius` | `2px` |
| `--menu-select-menu-background-color` | `var(--color-surface-container-high)` |

#### Option Variables

| Variable | Default |
| --- | --- |
| `--menu-option-normal-height` | `38px` |
| `--menu-option-small-height` | `30px` |
| `--menu-option-mini-height` | `24px` |
| `--menu-option-large-height` | `46px` |
| `--menu-option-padding` | `0 12px` |
| `--menu-option-normal-font-size` | `var(--font-size-md)` |
| `--menu-option-small-font-size` | `var(--font-size-sm)` |
| `--menu-option-mini-font-size` | `var(--font-size-xs)` |
| `--menu-option-large-font-size` | `var(--font-size-lg)` |
| `--menu-option-selected-background` | `var(--color-primary)` |
| `--menu-option-text-color` | `#555` |
| `--menu-option-disabled-color` | `var(--color-text-disabled)` |

