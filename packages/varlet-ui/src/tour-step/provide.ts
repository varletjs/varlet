import { ExtractPropTypes } from 'vue'
import { useParent } from '@varlet/use'
import { TOUR_BIND_STEP_KEY, TourProvider, TourStepProps } from '../tour/provide'

export interface TourStepProvider extends ExtractPropTypes<TourStepProps> {}

export function useTour() {
  const { bindParent, parentProvider, index } = useParent<TourProvider, TourStepProvider>(TOUR_BIND_STEP_KEY)

  return {
    index,
    tour: parentProvider,
    bindTour: bindParent,
  }
}
