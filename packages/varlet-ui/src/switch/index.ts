import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as switchProps } from './props'
import Switch from './Switch.vue'

withInstall(Switch)
withPropsDefaultsSetter(Switch, switchProps)

export { switchProps }

export const _SwitchComponent = Switch

export default Switch
