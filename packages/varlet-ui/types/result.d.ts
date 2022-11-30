import { VarComponent, BasicAttributes } from './varComponent'

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
}

export class _ResultComponent extends Result {}
