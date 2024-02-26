import { VNode } from 'vue'
import { VarComponent, BasicAttributes, SetPropsDefaults } from './varComponent'

export declare const watermarkProps: Record<keyof WatermarkProps, any>

export interface WatermarkFont {
  fontSize?: number
  fontVariant?: string
  fontWeight?: string
  fontStyle?: string
  fontFamily?: string
}

export interface WatermarkProps extends BasicAttributes {
  width?: number
  height?: number
  content?: string
  image?: string
  rotate?: number
  offsetX?: number
  offsetY?: number
  gapX?: number
  gapY?: number
  zIndex?: number | string
  opacity?: number | string
  fullscreen?: boolean
  font?: WatermarkFont
}

export class Watermark extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<WatermarkProps>

  $props: WatermarkProps

  $slots: {
    content(): VNode[]
  }

  resize(): void
}

export class _WatermarkComponent extends Watermark {}
