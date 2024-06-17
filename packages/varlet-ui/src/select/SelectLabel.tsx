import { defineComponent, type PropType } from 'vue'
import { createNamespace } from '../utils/components'
import { SelectOptionLabel } from './props'

const { name } = createNamespace('select-label')

export default defineComponent({
  name,
  props: {
    label: {
      type: Object as PropType<SelectOptionLabel>,
      required: true,
    },
  },
  setup(props) {
    return () => props.label
  },
})
