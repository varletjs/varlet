### Props

| Prop | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| `name` | Identifier | _string_ | `-` |
| `icon` | Icon name, equivalent to the [name](/#/en-US/icon) of Icon component | _string_ | `-` |
| `label` | Label text content | _string_ | - |
| `namespace` | Icon namespace, extensible custom icon library, equivalent to the [namespace](/#/en-US/icon)  of Icon component | _string_ | `var-icon` |
| `badge` | Logo in the upper right corner of the icon | _boolean \| BadgeProps_ | `false` |

### Events

| Event | Description | Arguments |
| ---- | ---- | ---- |
| `click` | Trigger on click | `active: number \| string` |

### Slots

| Name | Description | SlotProps |
| ---- | ---- | ----|
| `default` | Custom label text content that overwrites the content of `label`  | `-` |
| `icon` | Custom Icon | `active: boolean` |