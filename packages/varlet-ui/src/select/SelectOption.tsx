import { defineComponent, type PropType } from 'vue'
import VarOption from '../option'
import { isFunction } from '@varlet/shared'
import { SelectOption } from './props'

import '../option/option.less'

export default defineComponent({
  name: 'SelectOption',
  props: {
    checked: Boolean,
    option: Object as PropType<SelectOption>,
  },
  setup(props) {
    return () => {
      if (props.option == null) {
        return
      }

      return (
        <VarOption
          label={isFunction(props.option.label) ? props.option.label(props.option, props.checked) : props.option.label}
          value={props.option.value}
          disabled={props.option.disabled}
        ></VarOption>
      )
    }
  },
})
