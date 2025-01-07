import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import Option from './Option.vue'
import { props as optionProps } from './props'

withInstall(Option)
withPropsDefaultsSetter(Option, optionProps)

export { optionProps }

export const _OptionComponent = Option

export default Option
