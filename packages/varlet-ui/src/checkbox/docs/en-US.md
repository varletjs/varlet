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
| `rules` | Validation rules, return `true` to indicate verification passes, other types of values ​​will be converted into text as user prompts. [Zod validation](#/en-US/zodValidation) is supported since `3.5.0` | _(v: any) => any \| ZodType \| Array<(v: any) => any \| ZodType>_ | `-` |

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
| `default` | Displayed text | `checked: boolean` is checked |