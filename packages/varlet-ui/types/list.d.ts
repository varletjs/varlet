import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface ListProps extends BasicAttributes {
  loading?: boolean
  immediateCheck?: boolean
  finished?: boolean
  error?: boolean
  offset?: string | number
  loadingText?: string
  finishedText?: string
  errorText?: string
  onLoad?: () => void
  'onUpdate:loading'?: (loading: boolean) => void
  'onUpdate:error'?: (error: boolean) => void
}

export class List extends VarComponent {
  $props: ListProps
}

export class _ListComponent extends List {}
