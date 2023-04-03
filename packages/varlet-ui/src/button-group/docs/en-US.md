## API

### Props

| Prop           | Description                                                                                       | Type       | Default       |
|--------------|------------------------------------------------------------------------------------------|----------|-----------|
| `type`       | Button Group type, Can be set to `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `size`       | Button Group size, Can be set to `normal` `mini` `small` `large`                         | _string_ | `normal`  |
| `mode`       | Button Group mode, Can be set to `normal` `text` `outline`                               | _string_ | `normal`  |
| `vertical`   | Whether to be vertical button  group                                                     | _boolean_ | `false`   |
| `elevation` | Elevation of Button Group, options `true` `false` and level of `0-24` | _string \| number \| boolean_|   `true`    |
| `color`      | Button Group background color                                                            | _string_ | `-`       |
| `text-color`    | Button Group Text color                                                                  | _string_  | `-`            |

### Slots

| Name | Description          | SlotProps |
| ----- |----------------------| -------- |
| `default` | Button group content | `-` |