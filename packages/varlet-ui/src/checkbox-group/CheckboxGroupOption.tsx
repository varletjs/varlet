import { defineComponent, type PropType, VNode } from 'vue'
import Checkbox from '../checkbox'
import { isFunction } from '@varlet/shared'
import { CheckboxGroupLabelRender } from './props'

import '../checkbox/checkbox.less'

export default defineComponent({
  name: 'CheckboxGroupOption',
  props: {
    label: [String, Function, Object] as PropType<string | VNode | CheckboxGroupLabelRender>,
    checkedValue: [String, Number, Boolean, Object, Array] as PropType<any>,
    disabled: Boolean,
    checked: Boolean,
  },
  setup(props) {
    return () => (
      <Checkbox checkedValue={props.checkedValue} disabled={props.disabled}>
        {isFunction(props.label)
          ? props.label({ label: props.label, disabled: props.disabled, value: props.checkedValue }, props.checked)
          : props.label}
      </Checkbox>
    )
  },
})
