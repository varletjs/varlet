import { VarComponent, BasicAttributes } from './varComponent'

export declare const waterMarkProps: Record<string, any>

export interface Font {
  fontColor?: string
  fontSize?: string
  fontWeight?: 'normal' | 'light' | 'weight' | number
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique'
  fontFamily?: string
}

export interface WaterMarkProps extends BasicAttributes {
  width?: number
  height?: number
  content?: string
  image?: string
  rotate?: string | number
  gapX?: number
  gapY?: number
  zIndex?: number | string
  opacity?: number | string
  fullScreen?: boolean
  font?: Font
}

export class WaterMark extends VarComponent {
  $props: WaterMarkProps
}

export class _WaterMarkComponent extends WaterMark {}
