import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export type ResultType = 'info' | 'success' | 'warning' | 'error' | 'question' | 'empty'

export interface ResultProps extends BasicAttributes {
  imageSize?: string | number
  type?: ResultType
  title?: string
  description?: string
  duration?: number
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
