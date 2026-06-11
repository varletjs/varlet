### Props

| Prop | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| `name` | Item name, used as the matching identifier | _number \| string_ | `-` |
| `label` | Label text | _string_ | `-` |
| `icon` | Icon name, same as the Icon component [name](/#/en-US/icon) | _string_ | `-` |
| `namespace` | Icon namespace, same as the Icon component [namespace](/#/en-US/icon) | _string_ | `var-icon` |
| `badge` | Badge in the upper right corner of the icon, same as Badge props | _boolean \| BadgeProps_ | `false` |
| `disabled` | Whether the option is disabled | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| ---- | ---- | ---- |
| `click` | Triggered when clicking the item | `active: number \| string` |
| `mouseenter` | Triggered when the mouse enters the item | `active: number \| string` |
| `mouseleave` | Triggered when the mouse leaves the item | `active: number \| string` |

### Slots

| Name | Description | SlotProps |
| ---- | ---- | ---- |
| `default` | Custom label content, overrides `label` | `active: boolean` |
| `icon` | Custom icon | `active: boolean` |

### Style Variables

| Variable | Default |
| --- | --- |
| `--rail-navigation-item-height` | `64px` |
| `--rail-navigation-item-padding` | `6px 4px` |
| `--rail-navigation-item-indicator-width` | `56px` |
| `--rail-navigation-item-indicator-height` | `32px` |
| `--rail-navigation-item-indicator-hover-background` | `transparent` |
| `--rail-navigation-item-indicator-pressed-background` | `transparent` |
| `--rail-navigation-item-indicator-active-background` | `transparent` |
| `--rail-navigation-item-inactive-text-color` | `var(--color-on-surface-variant)` |
| `--rail-navigation-item-active-text-color` | `var(--color-primary)` |
| `--rail-navigation-item-disabled-opacity` | `var(--opacity-disabled)` |
| `--rail-navigation-item-icon-size` | `24px` |
| `--rail-navigation-item-label-font-size` | `var(--font-size-sm)` |
| `--rail-navigation-item-label-line-height` | `1.5` |
