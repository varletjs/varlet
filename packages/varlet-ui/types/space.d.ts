import { VarComponent } from './varComponent'

export type SpaceAlign = 'stretch' | 'center' | 'start' | 'end' | 'baseline' | 'initial' | 'inherit'

export type SpaceDirection = 'row' | 'column'

export type SpaceJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between'

export type SpaceSize = 'mini' | 'small' | 'normal' | 'large' | number | string | [number | string, number | string]

export interface SpaceProps {
  align?: SpaceAlign
  size?: SpaceSize
  warp?: boolean
  direction?: SpaceDirection
  justify?: SpaceJustify
  inline?: boolean
}

export class Space extends VarComponent {
  $props: SpaceProps
}

export class _SpaceComponent extends Space {}
