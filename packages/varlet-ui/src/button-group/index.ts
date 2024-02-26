import ButtonGroup from './ButtonGroup.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as buttonGroupProps } from './props'

withInstall(ButtonGroup)
withPropsDefaultsSetter(ButtonGroup, buttonGroupProps)

export { buttonGroupProps }

export const _ButtonGroupComponent = ButtonGroup

export default ButtonGroup
