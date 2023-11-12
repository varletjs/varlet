import Input from './Input.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as inputProps } from './props'

withInstall(Input)
withPropsDefaultsSetter(Input, inputProps)

export { inputProps }

export const _InputComponent = Input

export default Input
