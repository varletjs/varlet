import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as selectProps } from './props'
import Select from './Select.vue'

withInstall(Select)
withPropsDefaultsSetter(Select, selectProps)

export { selectProps }

export const _SelectComponent = Select

export default Select
