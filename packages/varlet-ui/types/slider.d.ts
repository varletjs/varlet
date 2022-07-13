import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface SliderProps extends BasicAttributes {
  modelValue?: number | Array<number>
  step?: number | string
  range?: boolean
  labelVisible?: 'always' | 'normal' | 'never'
  activeColor?: string
  trackColor?: string
  thumbColor?: string
  labelTextColor?: string
  labelColor?: string
  trackHeight?: string | number
  thumbSize?: string | number
  disabled?: boolean
  readonly?: boolean
  rules?: Array<(value: any) => any>
  onChange?: (value: number | Array<number>) => void
  onStart?: () => void
  onEnd?: (value: number | Array<number>) => void
  'onUpdate:modelValue'?: (value: number | Array<number>) => void
}

export class Slider extends VarComponent {
  $props: SliderProps
}

export class _SliderComponent extends Slider {}
