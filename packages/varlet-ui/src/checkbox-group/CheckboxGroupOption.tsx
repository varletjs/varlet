import { defineComponent, type PropType, VNode } from 'vue'
import Checkbox from '../checkbox'
import { isFunction } from '@varlet/shared'
import { type CheckboxGroupOptionLabelRender, CheckboxGroupOption } from './props'

import '../checkbox/checkbox.less'

export default defineComponent({
  name: 'CheckboxGroupOption',
  props: {
    label: [String, Function, Object] as PropType<string | VNode | CheckboxGroupOptionLabelRender>,
    value: [String, Number, Boolean, Object, Array] as PropType<any>,
    disabled: Boolean,
    checked: Boolean,
    option: Object as PropType<CheckboxGroupOption>,
  },
  setup(props) {
    return () => (
      <Checkbox checkedValue={props.value} disabled={props.disabled}>
        {isFunction(props.label) ? props.label(props.option!, props.checked) : props.label}
      </Checkbox>
    )
  },
})
