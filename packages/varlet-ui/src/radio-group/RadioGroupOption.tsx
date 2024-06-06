import { defineComponent, type PropType } from 'vue'
import { isFunction } from '@varlet/shared'
import { RadioGroupOption } from './props'
import { createNamespace } from '../utils/components'
import Radio from '../radio'

const { name } = createNamespace('radio-group-option')

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
      type: Object as PropType<RadioGroupOption>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      const { option, labelKey, valueKey } = props

      return (
        <Radio checkedValue={option[valueKey]} disabled={option.disabled}>
          {{
            default: ({ checked }: { checked: boolean }) =>
              isFunction(option[labelKey]) ? option[labelKey](option, checked) : option[labelKey],
          }}
        </Radio>
      )
    }
  },
})
