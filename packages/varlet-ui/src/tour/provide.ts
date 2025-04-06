import { inject, provide } from 'vue'
import { error } from '@varlet/shared'
import { keyInProvides } from '@varlet/use'
import TourStep from '../tour-step'

export type TourStepProps = InstanceType<typeof TourStep>['$props']

export interface TourProvider {
  updateStepProps: (props: TourStepProps) => void
}

export const TOUR_BIND_STEP_KEY = Symbol('TOUR_BIND_STEP_KEY')

export function provideTour(tourProvider: TourProvider) {
  return provide(TOUR_BIND_STEP_KEY, tourProvider)
}

export function injectTour() {
  if (!keyInProvides(TOUR_BIND_STEP_KEY)) {
    error('TourStep', '<var-tour-step/> must in <var-tour/>')
    return { updateStepProps: null }
  }

  return inject<TourProvider>(TOUR_BIND_STEP_KEY)!
}
