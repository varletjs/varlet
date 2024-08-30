# AutoComplete

### Intro

Autocomplete function of input field.

## API

### Props

#### AutoComplete Props

| Prop | Description | Type | Default |
| ------- | --- |----------------|-----------|
| `v-model` | The value of the binding                   | _string_ | `-` |
| `options`  | Specifies options | _AutoCompleteOption[]_ | `-` |
| `label-key` | As the key that uniquely identifies label | _string_ | `label` |
| `value-key` | As the key that uniquely identifies value | _string_ | `value` |
| `maxlength` | Maxlength               | _string \| number_ | `-` |
| `readonly` | Whether the readonly          | _boolean_ | `false` |
| `disabled` | Whether the disabled             | _boolean_ | `false` |
| `validate-trigger` | Timing to trigger validation, The optional value is `onFocus` `onBlur` `onChange` `onClick` `onClear` `onInput`                        | _AutoCompleteValidateTrigger[]_ | `['onInput', 'onClear', 'onChange']` |
| `rules` | The validation rules, return `true` to indicate that the validation passed,The remaining values are converted to text as user prompts | _Array<(v: string) => any>_ | `-` |
| `enterkeyhint` | Customize the enter key style, See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) | _string_ | `-` |
| `clearable` | Whether the clearable       | _boolean_ | `false` |
| `line` | Whether to display a dividing line     | _boolean_ | `true` |
| `hint` | Whether to use placeholder as hint       | _boolean_ | `true` |
| `text-color` | Text color                     | _string_ | `-` |
| `focus-color` | The primary color in focus  | _string_ | `-` |
| `blur-color` | The primary color in blur      | _string_ | `-` |
| `placeholder` | placeholder          | _string_ | `-` |
| `size` | Input size, The optional value is `normal` `small`     | _string_ | `normal` |
| `variant` | Input variants, The optional value is `standard` `outlined`    | _string_ | `standard` |

#### AutoCompleteOption 

| Prop | Description | Type | Default |
| ------- | --- |----------------|-----------|
| `label`    |   The text of option    | _string \| VNode \| (option: AutoCompleteOption, checked: boolean) => VNodeChild_      | `-`   |
| `value`  |    The value of option    | _any_      | `-`   |
| `disabled`    |    Whether to disable option   | _boolean_      | `-`   |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `focus` | Focus | `-` | `-` |
| `blur` | Blur | `-` | `-` |
| `validate` | Trigger validate | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clear validate messages | `-` | `-` |
| `reset` | Clear the value of the binding and validate messages | `-` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `focus` | Triggered while focusing | `-` |
| `blur` | Triggered when out of focus | `-` |
| `click` | Triggered on Click | `event: Event` |
| `clear` | Triggered on Clearance | `value: string` |
| `input` | Triggered on input | `value: string`, `event: Event` |
| `change` | Triggered on change | `value: string` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `prepend-icon` | Prepend Icon | `-` |
| `append-icon` | Append Icon | `-` |
| `clear-icon` | Clear Icon | `clear: (e: Event) => void` clear function (can be used to clear input box contents when using slots) |
| `extra-message` | Extra message | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

#### AutoComplete Variables

| Variable | Default |
| --- | --- |
| `--auto-complete-options-padding`       | `6px 0`  |