import { defineComponent, type PropType } from 'vue'
import { isFunction } from '@varlet/shared'
import { CheckboxGroupOption } from './props'
import { createNamespace } from '../utils/components'
import Checkbox from '../checkbox'

const { name } = createNamespace('checkbox-group-option')

export default defineComponent({
  name,
  props: {
    labelKey: {
      type: String,
      required: true,
    },
    valueKey: {
      type: String,
      required: true,
    },
    option: {
      type: Object as PropType<CheckboxGroupOption>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      const { option, labelKey, valueKey } = props

      return (
        <Checkbox checkedValue={option[valueKey]} disabled={option.disabled}>
          {{
            default: ({ checked }: { checked: boolean }) =>
              isFunction(option[labelKey]) ? option[labelKey](option, checked) : option[labelKey],
          }}
        </Checkbox>
      )
    }
  },
})
