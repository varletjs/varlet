import Button from './Button.vue'
import { props as buttonProps } from './props'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'

withInstall(Button)
withPropsDefaultsSetter(Button, buttonProps)

export { buttonProps }

export const _ButtonComponent = Button

export default Button
