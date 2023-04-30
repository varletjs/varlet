import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export type SliderLabelVisible = 'always' | 'normal' | 'never'

export declare const sliderProps: Record<string, any>

export interface SliderProps extends BasicAttributes {
  modelValue?: number | Array<number>
  step?: number | string
  range?: boolean
  labelVisible?: SliderLabelVisible
  activeColor?: string
  trackColor?: string
  thumbColor?: string
  labelTextColor?: string
  labelColor?: string
  trackHeight?: string | number
  thumbSize?: string | number
  min?: string | number
  max?: string | number
  disabled?: boolean
  readonly?: boolean
  rules?: Array<(value: any) => any>
  onChange?: ListenerProp<(value: number | Array<number>) => void>
  onStart?: ListenerProp<() => void>
  onEnd?: ListenerProp<(value: number | Array<number>) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: number | Array<number>) => void>
}

export interface SliderButton {
  currentValue: number | Array<number>
}

export class Slider extends VarComponent {
  $props: SliderProps

  $slots: {
    button(data: SliderButton): VNode[]
  }
}

export class _SliderComponent extends Slider {}
