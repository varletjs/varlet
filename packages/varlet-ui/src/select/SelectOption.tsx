import { defineComponent, ref, type PropType } from 'vue'
import VarOption from '../option'
import { isFunction } from '@varlet/shared'
import { SelectOption } from './props'

import '../option/option.less'

export default defineComponent({
  name: 'SelectOption',
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

      const setOption = (optionSelected: boolean) => {
        label.value = isFunction(option[labelKey]) ? option[labelKey](option, optionSelected) : option[labelKey]
      }

      return (
        <VarOption
          label={label.value}
          value={option.value || option.label}
          disabled={option.disabled}
          checkedValue={option[valueKey] ? option[valueKey] : option[labelKey]}
        >
          {{
            default: ({ optionSelected }: { optionSelected: boolean }) => {
              setOption(optionSelected)
              return label.value
            },
          }}
        </VarOption>
      )
    }
  },
})
