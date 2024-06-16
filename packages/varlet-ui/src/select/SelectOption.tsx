import { defineComponent, type PropType } from 'vue'
import { isFunction } from '@varlet/shared'
import { SelectOption } from './props'
import { createNamespace } from '../utils/components'
import Option from '../option'

const { name } = createNamespace('select-option')

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
      type: Object as PropType<SelectOption>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      const { option, labelKey, valueKey } = props

      return (
        <Option label={option[labelKey]} value={option[valueKey]} disabled={option.disabled}>
          {{
            default: ({ selected }: { selected: boolean }) => {
              isFunction(option[labelKey]) ? option[labelKey](option, selected) : option[labelKey]
            },
          }}
        </Option>
      )
    }
  },
})
