# Button

### Basic Use
```html
<var-button>start</var-button>
```

### Theme Color Button
```html
<var-button color="#009688">start</var-button>
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