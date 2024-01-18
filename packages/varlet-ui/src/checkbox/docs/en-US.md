## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model` | The value of the binding | _any_ | `false` |
| `checked-value` | Checked value | _any_ | `true` |
| `unchecked-value` | Unchecked value | _any_ | `false` |
| `checked-color` | Checked color | _string_ | `-` |
| `unchecked-color` | Unchecked color | _string_ | `-` |
| `icon-size` | Icon size | _string \| number_ | `-` |
| `disabled` | Whether the disabled | _boolean_ | `false` |
| `readonly` | Whether the readonly | _boolean_ | `false` |
| `indeterminate` | Whether indeterminate status(style has the highest priority) | _boolean_ | `false` |
| `ripple` | Whether to open ripple | _boolean_ | `true` |
| `rules` | The validation rules, return `true` to indicate that the validation passed. The remaining values are converted to text as user prompts | _Array<(value: any) => any>_ | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered on Click | `e: Event` |
| `change` | Triggered on change | `value: any` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `checked-icon` | Checked icon | `-` |
| `unchecked-icon` | Unchecked icon | `-` |
| `indeterminate-icon` | Indeterminate icon | `-` |
| `default` | Displayed text | `-` |