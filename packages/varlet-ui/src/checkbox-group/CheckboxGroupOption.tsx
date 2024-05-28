import { defineComponent, type PropType } from 'vue'
import Checkbox from '../checkbox'
import { isFunction } from '@varlet/shared'
import { CheckboxGroupOption } from './props'

import '../checkbox/checkbox.less'

export default defineComponent({
  name: 'CheckboxGroupOption',
  props: {
    checked: Boolean,
    labelKey: {
      type: String,
      required: true,
    },
    valueKey: {
      type: String,
      required: true,
    },
    option: Object as PropType<CheckboxGroupOption>,
  },
  setup(props) {
    return () => {
      if (props.option == null) {
        return
      }

      return (
        <Checkbox checkedValue={props.option[props.valueKey]} disabled={props.option.disabled}>
          {isFunction(props.option[props.labelKey])
            ? props.option[props.labelKey](props.option, props.checked)
            : props.option[props.labelKey]}
        </Checkbox>
      )
    }
  },
})
