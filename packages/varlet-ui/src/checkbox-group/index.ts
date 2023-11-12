import CheckboxGroup from './CheckboxGroup.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as checkboxGroupProps } from './props'

withInstall(CheckboxGroup)
withPropsDefaultsSetter(CheckboxGroup, checkboxGroupProps)

export { checkboxGroupProps }

export const _CheckboxGroupComponent = CheckboxGroup

export default CheckboxGroup
