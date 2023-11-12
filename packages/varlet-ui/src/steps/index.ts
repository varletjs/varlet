import Steps from './Steps.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as stepsProps } from './props'

withInstall(Steps)
withPropsDefaultsSetter(Steps, stepsProps)

export { stepsProps }

export const _StepsComponent = Steps

export default Steps
