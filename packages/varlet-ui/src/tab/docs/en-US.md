## API

### Props

| Prop       | Description            | Type               | Default |
| ---------- | ---------------------- | ------------------ | ------- |
| `name`     | tab's name             | _string \| number_ | `index` |
| `disabled` | Whether to disable tab | _boolean_          | `false` |

### Events

#### Tab Events

| Event   | Description                                                                         | Arguments                                      |
| ------- | ----------------------------------------------------------------------------------- | ---------------------------------------------- |
| `click` | Triggered when the tab is clicked, but not when the tab `disabled` status is `true` | `active: string \| number` <br> `event: Event` |

### Slots

| Name | Description | SlotProps |
| --------- | ------------- | --------- |
| `default` | tab's content | `-`       |
