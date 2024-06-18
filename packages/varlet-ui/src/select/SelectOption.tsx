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
    const isSelected = ref()

    const setSelected = (selected: boolean) => {
      isSelected.value = selected
    }

    const renderLabel = (selected: boolean) => {
      const label = props.option[props.labelKey]
      return isFunction(label) ? label(props.option, selected) : label
    }

    return () => (
      <Option
        label={renderLabel(isSelected.value)}
        value={props.option[props.valueKey]}
        disabled={props.option.disabled}
      >
        {{
          default: ({ selected }: { selected: boolean }) => {
            setSelected(selected)
            return renderLabel(selected)
          },
        }}
      </Option>
    )
  },
})
