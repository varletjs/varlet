import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

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

  $slots: {
    default(): VNode[]
    loading(): VNode[]
    error(): VNode[]
    finished(): VNode[]
  }
}

export class _ListComponent extends List {}
