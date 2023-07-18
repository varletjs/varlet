import Select from './Select.vue'
import { withInstall } from '../utils/components'

withInstall(Select)

export { props as selectProps } from './props'

export const _SelectComponent = Select

export default Select
