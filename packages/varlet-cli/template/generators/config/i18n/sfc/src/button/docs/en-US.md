# Button

### Basic Use
```html
<va-button>start</va-button>
```

```vue
import BasicUse from '../example/BasicUse'
```

### Theme Color Button
```html
<va-button color="#009688">start</va-button>
```

```vue
import ModifyColor from '../example/ModifyColor'
```

## API

### Props

| Prop  | Description | Type | Default |
| --- | --- | --- | --- | 
| `color` | Button background color | _string_ | `default` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered when the button is clicked | `event: Event` |

### Slots

| Slot      | Description | Arguments |
|-----------| --- | --- |
| `default` | Button content | `-` |