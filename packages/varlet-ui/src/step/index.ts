import Step from './Step.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as stepProps } from './props'

withInstall(Step)
withPropsDefaultsSetter(Step, stepProps)

export { stepProps }

export const _StepComponent = Step

export default Step
