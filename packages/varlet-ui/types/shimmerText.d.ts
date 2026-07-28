import { VNode } from 'vue'
import { BasicAttributes, Type as ShimmerTextType, SetPropsDefaults, VarComponent } from './varComponent'

export { ShimmerTextType }

export declare const shimmerTextProps: Record<keyof ShimmerTextProps, any>

export interface ShimmerTextProps extends BasicAttributes {
  type?: ShimmerTextType
}

export class ShimmerText extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<ShimmerTextProps>

  $props: ShimmerTextProps

  $slots: {
    default(): VNode[]
  }
}

export class _ShimmerTextComponent extends ShimmerText {}
