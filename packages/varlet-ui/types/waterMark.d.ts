import { VNode } from 'vue'
import { VarComponent, BasicAttributes } from './varComponent'

export declare const WatermarkProps: Record<string, any>

export interface Font {
  fontSize?: string | number
  fontVariant?: string
  fontWeight?: 'normal' | 'light' | 'weight' | number
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique'
  fontFamily?: string
}

export interface WatermarkProps extends BasicAttributes {
  width?: number
  height?: number
  content?: string
  color?: string
  image?: string
  rotate?: number
  offsetX?: number
  offsetY?: number
  gapX?: number
  gapY?: number
  zIndex?: number | string
  opacity?: number | string
  fullScreen?: boolean
  font?: Font
}

export class Watermark extends VarComponent {
  $props: WatermarkProps

  $slots: {
    content(): VNode[]
  }
}

export class _WatermarkComponent extends Watermark {}
