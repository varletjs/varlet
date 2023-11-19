import Switch from './Switch.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as switchProps } from './props'

withInstall(Switch)
withPropsDefaultsSetter(Switch, switchProps)

export { switchProps }

export const _SwitchComponent = Switch

export default Switch
