import type { App } from 'vue'
import { VarComponent } from './varComponent'

export type StyleVars = Record<string, string>

export interface StyleProviderProps {
  styleVars?: StyleVars
}

export class StyleProviderComponent extends VarComponent {
  $props: StyleProviderProps
}

export interface IStyleProvider {
  (options: StyleVars | null): void
  Component: typeof StyleProviderComponent

  install(app: App): void
}

export const StyleProvider: IStyleProvider

export class _StyleProviderComponent extends StyleProviderComponent {}
