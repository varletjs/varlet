import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as radioGroupProps } from './props'
import RadioGroup from './RadioGroup.vue'

withInstall(RadioGroup)
withPropsDefaultsSetter(RadioGroup, radioGroupProps)

export { radioGroupProps }

export const _RadioGroupComponent = RadioGroup

export default RadioGroup
