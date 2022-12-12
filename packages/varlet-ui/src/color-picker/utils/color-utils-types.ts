import type { Ref } from 'vue'

export type ColorModeType = 'hsl' | 'rgb' | 'hsv' | 'hsv' | 'hex'

// Types
export type ColorInt = number
export type HSV = { h: number; s: number; v: number }
export type HSVA = HSV & { a: number }
export type RGB = { r: number; g: number; b: number }
export type RGBA = RGB & { a: number }
export type HSL = { h: number; s: number; l: number }
export type HSLA = HSL & { a: number }
export type Hex = string
export type Hexa = string
export type Color = string | number | { [key: string]: unknown }
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
  hexa: Hexa
  hsl: HSL
  hsla: HSLA
  hsv: HSV
  hsva: HSVA
  hue: number
  rgb: RGB
  rgba: RGBA
}
export interface position {
  left?: Ref<number>
  top?: Ref<number>
  right?: Ref<number>
  bottom?: Ref<number>
}
