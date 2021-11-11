import type { ComputedRef } from 'vue'
import { useAtParentIndex, useParent } from '../utils/components'
import { StepsProvider, STEPS_BIND_STEP_KEY, STEPS_COUNT_STEP_KEY } from '../steps/provide'

export interface StepProvider {
  index: ComputedRef<number>
}

export function useSteps() {
  const { parentProvider, bindParent } = useParent<StepsProvider, StepProvider>(STEPS_BIND_STEP_KEY)
  const { index } = useAtParentIndex(STEPS_COUNT_STEP_KEY)

  if (!parentProvider || !bindParent || !index) {
    throw Error('[Varlet] Steps: <step/> must in <steps>')
  }

  return {
    index,
    steps: parentProvider,
    bindSteps: bindParent,
  }
}
