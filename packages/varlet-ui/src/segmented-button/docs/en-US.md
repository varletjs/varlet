## API

### Props

`SegmentedButton` must be used as a child of `SegmentedButtons`.

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `checked-value` | Value represented by the current button | _any_ | `true` |
| `disabled` | Whether to disable the current button | _boolean_ | `false` |
| `readonly` | Whether to make the current button readonly | _boolean_ | `false` |
| `ripple` | Whether to enable ripple effect for the current button | _boolean_ | `-` |
| `checkmark` | Whether the current button displays a checkmark when checked | _boolean_ | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered when the segmented button is clicked | `e: Event` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `checkmark` | Custom checkmark icon content displayed when the segmented button is checked | `-` |
| `default` | Label content of the segmented button | `-` |
