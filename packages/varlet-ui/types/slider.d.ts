import {
  VarComponent,
  BasicAttributes,
  Direction as SliderDirection,
  ListenerProp,
  SetPropsDefaults,
} from './varComponent'
import { VNode } from 'vue'

export { SliderDirection }

export type SliderLabelVisible = 'always' | 'normal' | 'never'

export declare const sliderProps: Record<keyof SliderProps, any>

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
  direction?: SliderDirection
  rules?: Array<(value: number | Array<number>) => any>
  onChange?: ListenerProp<(value: number | Array<number>) => void>
  onStart?: ListenerProp<() => void>
  onEnd?: ListenerProp<(value: number | Array<number>) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: number | Array<number>) => void>
}

export interface SliderButton {
  currentValue: number | Array<number>
}

export class Slider extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<SliderProps>

  $props: SliderProps

  $slots: {
    button(data: SliderButton): VNode[]
  }
}

export class _SliderComponent extends Slider {}
