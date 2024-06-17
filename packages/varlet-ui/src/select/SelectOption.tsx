import { defineComponent, type PropType, ref } from 'vue'
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
    const label = ref('')
    return () => {
      const { option, labelKey, valueKey } = props

      const setOption = (selected: boolean) => {
        label.value = isFunction(option[labelKey]) ? option[labelKey](option, selected) : option[labelKey]
      }

      return (
        <Option label={label.value} value={option[valueKey]} disabled={option.disabled}>
          {{
            default: ({ selected }: { selected: boolean }) => {
              setOption(selected)
              return label.value
            },
          }}
        </Option>
      )
    }
  },
})
