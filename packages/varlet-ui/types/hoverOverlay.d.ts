import { VarComponent, BasicAttributes } from './varComponent'

export declare const hoverOverlayProps: Record<string, any>

export interface HoverOverlayProps extends BasicAttributes {
  hovering?: boolean
}

export class HoverOverlay extends VarComponent {
  $props: HoverOverlayProps
}

export class _HoverOverlayComponent extends HoverOverlay {}
