import { TooltipProps } from './tooltip'
import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'

export declare const ellipsisProps: Record<keyof EllipsisProps, any>

export type EllipsisExpandTrigger = 'click'

export interface EllipsisProps extends BasicAttributes {
  expand?: boolean
  expandTrigger?: EllipsisExpandTrigger
  lineClamp?: string | number
  tooltip?: boolean | TooltipProps
  'onUpdate:expand'?: ListenerProp<(expand: boolean) => void>
}

export class Ellipsis extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<EllipsisProps>

  $props: EllipsisProps

  $slots: {
    default(): VNode[]
    'tooltip-content'(): VNode[]
  }
}

export class _EllipsisComponent extends Ellipsis {}
