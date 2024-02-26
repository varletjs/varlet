import { VarComponent, BasicAttributes, SetPropsDefaults } from './varComponent'
import { App, VNode } from 'vue'
import { StyleVars as ExtractedStyleVars } from './styleVars'

export declare const styleProviderProps: Record<keyof StyleProviderProps, any>

export type StyleVars = ExtractedStyleVars

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
