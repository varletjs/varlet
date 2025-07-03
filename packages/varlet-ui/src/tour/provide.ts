import { ComputedRef } from 'vue'
import { useChildren } from '@varlet/use'
import TourStep from '../tour-step'
import { TourStepProvider } from '../tour-step/provide'

export type TourStepProps = InstanceType<typeof TourStep>['$props']

export interface TourProvider {
  current: ComputedRef<number>
  // updateStepProps: (props: TourStepProps) => void
}

export const TOUR_BIND_STEP_KEY = Symbol('TOUR_BIND_STEP_KEY')

export function useTourSteps() {
  const { childProviders, length, bindChildren } = useChildren<TourProvider, TourStepProvider>(TOUR_BIND_STEP_KEY)

  return {
    length,
    tourSteps: childProviders,
    bindTourStep: bindChildren,
  }
}
