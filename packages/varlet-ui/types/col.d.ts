import { VarComponent } from './varComponent'
import { SizeDescriptor } from '../src/col/provide'

export type SizeObject = {
  span?: number
  offset?: number
}
export type SizeDescriptor = string | number | SizeObject | undefined

export interface ColProps {
  span?: string | number
  offset?: string | number
  xs?: SizeDescriptor
  sm?: SizeDescriptor
  md?: SizeDescriptor
  lg?: SizeDescriptor
  xl?: SizeDescriptor
  onClick?: (e: Event) => void
}

export class Col extends VarComponent {
  $props: ColProps
}

export class _ColComponent extends Col {}
