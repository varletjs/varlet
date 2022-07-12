import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export type SizeDescriptor = {
  span?: number | string
  offset?: number | string
}

export interface ColProps extends BasicAttributes {
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
