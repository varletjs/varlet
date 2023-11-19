import Checkbox from './Checkbox.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as checkboxProps } from './props'

withInstall(Checkbox)
withPropsDefaultsSetter(Checkbox, checkboxProps)

export { checkboxProps }

export const _CheckboxComponent = Checkbox

export default Checkbox
