import Steps from './Steps.vue'
import { withInstall } from '../utils/components'

withInstall(Steps)

export { props as stepsProps } from './props'

export const _StepsComponent = Steps

export default Steps
