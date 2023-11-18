## API

### Props

| Prop       | Description            | Type               | Default |
| ---------- | ---------------------- | ------------------ | ------- |
| `name`     | Tab's name             | _string \| number_ | `-` |
| `disabled` | Whether to disable tab | _boolean_          | `false` |
| `ripple`   | Whether to enable ripple effect | _boolean_ | `true`  |

### Events

#### Tab Events

| Event   | Description                                                                         | Arguments                                      |
| ------- | ----------------------------------------------------------------------------------- | ---------------------------------------------- |
| `click` | Triggered when the tab is clicked, but not when the tab `disabled` status is `true` | `active: string \| number` <br> `event: Event` |

### Slots

| Name | Description | SlotProps |
| --------- | ------------- | --------- |
| `default` | Tab's content | `-`       |
