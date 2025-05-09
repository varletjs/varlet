import { VNode } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const listProps: Record<keyof ListProps, any>

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
  static setPropsDefaults: SetPropsDefaults<ListProps>

  $props: ListProps

  $slots: {
    default(): VNode[]
    loading(): VNode[]
    error(): VNode[]
    finished(): VNode[]
  }
}

export class _ListComponent extends List {}
