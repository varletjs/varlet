## API

### Props

| Prop     | Description                                         | Type     | Default |
|----------| --------------------------------------------------- |----------| ------- |
| `span`   | Number of grids occupied by columns                 | _string \| number_                                                          | `24`    |
| `offset` | Number of grids for column offsets                  | _string \| number_                                                          | `0`     |
| `direction` | The optional value of layout direction is `row` `column` |  _string_ | `row` |
| `xs`     | `<768px` Responsive columns or column props object  | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-`     |
| `sm`     | `≥768px` Responsive columns or column props object  | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-`     |
| `md`     | `≥992px` Responsive columns or column props object  | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-`     |
| `lg`     | `≥1200px` Responsive columns or column props object | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-`     |
| `xl`     | `≥1920px` Responsive columns or column props object | _string \| number \| { span?: number \| string, offset?: number \| string }_ | `-`     |

### Events

| Event   | Description                  | Arguments      |
| ------- | ---------------------------- | -------------- |
| `click` | Triggered when you click Col | `event: Event` |

### Slots

| Name | Description | SlotProps |
| --------- | ----------- | --------- |
| `default` | Col content | `-`       |
