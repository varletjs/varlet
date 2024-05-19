import { defineComponent } from 'vue'
import { CheckboxGroupOption } from './props'
import Checkbox from '../checkbox'
import { isFunction } from '@varlet/shared'

import '../checkbox/checkbox.less'

export default defineComponent({
  name: 'CheckboxGroupOption',
  props: {
    options: {
      type: Array<CheckboxGroupOption>,
      default: () => [],
    },
  },
  setup(props) {
    return () =>
      props.options.map((option) => (
        <Checkbox key={option.value.toString()} checkedValue={option.value} disabled={option.disabled}>
          {isFunction(option.label) ? option.label() : option.label}
        </Checkbox>
      ))
  },
})
