import { VarComponent, BasicAttributes, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const resultProps: Record<keyof ResultProps, any>

export type ResultType = 'info' | 'success' | 'warning' | 'error' | 'question' | 'empty'

export interface ResultProps extends BasicAttributes {
  type?: ResultType
  title?: string
  description?: string
  imageSize?: string | number
  animation?: boolean
}

export class Result extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<ResultProps>

  $props: ResultProps

  $slots: {
    image(): VNode[]
    title(): VNode[]
    description(): VNode[]
    footer(): VNode[]
  }
}

export class _ResultComponent extends Result {}
