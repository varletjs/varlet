import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export declare const resultProps: Record<string, any>

export type ResultType = 'info' | 'success' | 'warning' | 'error' | 'question' | 'empty'

export interface ResultProps extends BasicAttributes {
  type?: ResultType
  title?: string
  description?: string
  imageSize?: string | number
  animation?: boolean
}

export class Result extends VarComponent {
  $props: ResultProps

  $slots: {
    image(): VNode[]
    title(): VNode[]
    description(): VNode[]
    footer(): VNode[]
  }
}

export class _ResultComponent extends Result {}
