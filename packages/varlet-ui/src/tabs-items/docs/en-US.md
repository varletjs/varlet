## API

### Props

| Prop             | Description                      | Type               | Default |
| ---------------- | -------------------------------- | ------------------ | ------- |
| `v-model:active` | The identity of the active tab   | _string \| number_ | `-`     |
| `can-swipe`      | Whether to allow swipe switch    | _boolean_          | `true`  |
| `animated`       | Whether to enable content switching animation | _boolean_          | `true`  |
| `loop`           | Whether to allow cycle switching | _boolean_          | `false` |

### Slots

| Name | Description | SlotProps |
| --------- | ----------------- | --------- |
| `default` | TabsItems content | `-`       |

### Methods

| Method     | Description                        | Arguments | Return |
| ---------- | ---------------------------------- | --------- | ------ |
| `getSwipe` | Get the `swipe` component instance | `-`       | `-`    |