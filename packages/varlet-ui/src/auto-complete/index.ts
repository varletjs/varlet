import AutoComplete from './AutoComplete.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as AutoCompleteProps } from './props'

withInstall(AutoComplete)
withPropsDefaultsSetter(AutoComplete, AutoCompleteProps)

export { AutoCompleteProps }

export const _AutoCompleteComponent = AutoComplete

export default AutoComplete
