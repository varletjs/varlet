import { defineComponent, type RenderFunction, type PropType } from 'vue'
import Checkbox from '../checkbox'
import { isFunction } from '@varlet/shared'

import '../checkbox/checkbox.less'

export default defineComponent({
  name: 'CheckboxGroupOption',
  props: {
    label: [String, Function] as PropType<string | RenderFunction>,
    checkedValue: [String, Number, Boolean, Object, Array] as PropType<any>,
    disabled: Boolean,
  },
  setup(props) {
    return () => (
      <Checkbox checkedValue={props.checkedValue} disabled={props.disabled}>
        {isFunction(props.label) ? props.label() : props.label}
      </Checkbox>
    )
  },
})
