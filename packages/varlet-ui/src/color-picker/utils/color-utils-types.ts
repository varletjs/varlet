import type { Ref } from 'vue'

export type ColorModeType = 'hsl' | 'rgb' | 'hsv' | 'hsv' | 'hex'

// Types
export type ColorInt = number
export type HSV = { h: number; s: number; v: number; a?: number }
export type RGB = { r: number; g: number; b: number; a?: number }
export type HSL = { h: number; s: number; l: number; a?: number }
export type Hex = string
export type Hexa = string
export type Color = string | number | { [key: string]: unknown }
export type InitialColor = HSV | RGB | HSL | Color | Hex | Hexa | null
export interface ProvideColorOptions {
  mode?: ColorModeType
  showAlpha?: boolean
  tab?: string
  dotSize?: number
  swatches?: string[]
  showHistory?: boolean
}
export interface CssColorObject {
  color?: Hex
}
export interface ColorPickerColor {
  alpha: number
  hex: Hex
  hsl: HSL
  hsv: HSV
  hue: number
  rgb: RGB
}
export interface position {
  left?: Ref<number>
  top?: Ref<number>
  right?: Ref<number>
  bottom?: Ref<number>
}
