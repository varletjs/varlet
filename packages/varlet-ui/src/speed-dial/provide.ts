import { FunctionalComponent, h, mergeProps, Transition, TransitionProps } from 'vue'

export interface MaybeTransitionProps extends TransitionProps {
  transition?: string | boolean | (TransitionProps & { component?: any })
}

export const MaybeTransition: FunctionalComponent<MaybeTransitionProps> = (props, { slots }) => {
  const { transition, ...rest } = props

  const { component = Transition, ...customProps } = typeof transition === 'object' ? transition : {}
  return h(
    component,
    mergeProps(typeof transition === 'string' ? { name: transition } : (customProps as any), rest as any),
    slots
  )
}
