import AutoComplete from './AutoComplete.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as autoCompleteProps } from './props'

withInstall(AutoComplete)
withPropsDefaultsSetter(AutoComplete, autoCompleteProps)

export const _AutoCompleteComponent = AutoComplete

export default AutoComplete
