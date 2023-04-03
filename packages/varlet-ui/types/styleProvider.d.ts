import type { App } from 'vue'
import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export declare const styleProviderProps: Record<string, any>

export type StyleVars = Record<string, string>

export interface StyleProviderProps extends BasicAttributes {
  styleVars?: StyleVars
  tag?: string
}

export class StyleProviderComponent extends VarComponent {
  $props: StyleProviderProps

  $slots: {
    default(): VNode[]
  }
}

export interface IStyleProvider {
  (options: StyleVars | null): void
  Component: typeof StyleProviderComponent

  install(app: App): void
}

export const StyleProvider: IStyleProvider

export class _StyleProviderComponent extends StyleProviderComponent {}
