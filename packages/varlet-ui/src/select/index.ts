import Select from './Select.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as selectProps } from './props'

withInstall(Select)
withPropsDefaultsSetter(Select, selectProps)

export { selectProps }

export const _SelectComponent = Select

export default Select
