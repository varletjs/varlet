import { BasicAttributes, SetPropsDefaults, VarComponent } from './varComponent'

export declare const hoverOverlayProps: Record<keyof HoverOverlayProps, any>

export interface HoverOverlayProps extends BasicAttributes {
  hovering?: boolean
  focusing?: boolean
  color?: string
}

export class HoverOverlay extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<HoverOverlayProps>

  $props: HoverOverlayProps
}

export class _HoverOverlayComponent extends HoverOverlay {}
