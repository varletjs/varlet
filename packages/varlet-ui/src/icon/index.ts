import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import Icon from './Icon.vue'
import { props as iconProps } from './props'

withInstall(Icon)
withPropsDefaultsSetter(Icon, iconProps)

export { iconProps }

export const _IconComponent = Icon

export default Icon
