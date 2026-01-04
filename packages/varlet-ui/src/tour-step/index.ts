import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as tourStepProps } from './props'
import TourStep from './TourStep.vue'

withInstall(TourStep)
withPropsDefaultsSetter(TourStep, tourStepProps)

export { tourStepProps }

export const _TourStepComponent = TourStep

export default TourStep
