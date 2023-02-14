import { TooltipProps } from './tooltip'
import { VarComponent, BasicAttributes } from './varComponent'

export declare const EllipsisProps: Record<string, any>

export type EllipsisExpandTrigger = 'click'

export interface EllipsisProps extends BasicAttributes {
  expandTrigger?: EllipsisExpandTrigger
  lineClamp?: string | number
  tooltip?: boolean | TooltipProps
}

export class Ellipsis extends VarComponent {
  $props: EllipsisProps

  $slots: {
    default(): VNode[]
    'tooltip-content'(): VNode[]
  }
}

export class _EllipsisComponent extends Ellipsis {}
