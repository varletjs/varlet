import Button from './Button.vue'
import { withInstall } from '../utils/components'

withInstall(Button)

export { props as buttonProps } from './props'

export const _ButtonComponent = Button

export default Button
