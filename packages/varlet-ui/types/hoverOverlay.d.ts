import { VarComponent, BasicAttributes, SetPropsDefaults } from './varComponent'

export declare const hoverOverlayProps: Record<keyof HoverOverlayProps, any>

export interface HoverOverlayProps extends BasicAttributes {
  hovering?: boolean
}

export class HoverOverlay extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<HoverOverlayProps>

  $props: HoverOverlayProps
}

export class _HoverOverlayComponent extends HoverOverlay {}
