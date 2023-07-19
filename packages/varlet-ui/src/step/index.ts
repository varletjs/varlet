import Step from './Step.vue'
import { withInstall } from '../utils/components'

withInstall(Step)

export { props as stepProps } from './props'

export const _StepComponent = Step

export default Step
