import { VarComponent } from './varComponent'
import { SizeDescriptor } from '../src/col/provide'

export type SizeDescriptor = {
  span?: number
  offset?: number
}

export interface ColProps {
  span?: string | number
  offset?: string | number
  xs?: string | number | SizeDescriptor | undefined
  sm?: string | number | SizeDescriptor | undefined
  md?: string | number | SizeDescriptor | undefined
  lg?: string | number | SizeDescriptor | undefined
  xl?: string | number | SizeDescriptor | undefined
  onClick?: (e: Event) => void
}

export class Col extends VarComponent {
  $props: ColProps
}

export class _ColComponent extends Col {}
