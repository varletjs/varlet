import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as stepProps } from './props'
import Step from './Step.vue'

withInstall(Step)
withPropsDefaultsSetter(Step, stepProps)

export { stepProps }

export const _StepComponent = Step

export default Step
