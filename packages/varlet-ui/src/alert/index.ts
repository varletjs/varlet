import Alert from './Alert.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as alertProps } from './props'

withInstall(Alert)
withPropsDefaultsSetter(Alert, alertProps)

export { alertProps }

export const _AlertComponent = Alert

export default Alert
