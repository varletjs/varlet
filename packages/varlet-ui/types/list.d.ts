import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
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
  onLoad?: ListenerProp<() => void>
  'onUpdate:loading'?: ListenerProp<(loading: boolean) => void>
  'onUpdate:error'?: ListenerProp<(error: boolean) => void>
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
