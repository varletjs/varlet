import { VarComponent, BasicAttributes, SetPropsDefaults } from './varComponent'
import { App, VNode } from 'vue'

export declare const styleProviderProps: Record<keyof StyleProviderProps, any>

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

  setPropsDefaults: SetPropsDefaults<StyleProviderProps>
}

export const StyleProvider: IStyleProvider

export class _StyleProviderComponent extends StyleProviderComponent {}
