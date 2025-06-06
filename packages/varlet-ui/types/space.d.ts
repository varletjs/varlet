import { VNode } from 'vue'
import { BasicAttributes, SetPropsDefaults, VarComponent } from './varComponent'

export declare const spaceProps: Record<keyof SpaceProps, any>

export type SpaceAlign = 'stretch' | 'center' | 'start' | 'end' | 'baseline' | 'flex-start' | 'flex-end'

export type SpaceDirection = 'row' | 'column'

export type SpaceJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'flex-start' | 'flex-end'

export type SpaceInternalSize = 'mini' | 'small' | 'normal' | 'large'

export type SpaceSize = SpaceInternalSize | number | string | [number | string, number | string]

export interface SpaceProps extends BasicAttributes {
  align?: SpaceAlign
  size?: SpaceSize
  wrap?: boolean
  direction?: SpaceDirection
  justify?: SpaceJustify
  inline?: boolean
}

export class Space extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<SpaceProps>

  $props: SpaceProps

  $slots: {
    default(): VNode[]
  }
}

export class _SpaceComponent extends Space {}
