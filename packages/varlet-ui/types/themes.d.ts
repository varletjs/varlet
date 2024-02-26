import { StyleVars } from './styleProvider'

export interface ThemesToViewportOptions {
  viewportWidth?: number
  viewportUnit?: string
  unitPrecision?: number
}

interface Themes {
  dark: StyleVars
  md3Light: StyleVars
  md3Dark: StyleVars

  toViewport(theme: StyleVars, options?: ThemesToViewportOptions): StyleVars
}

export declare const Themes: Themes

export class _ThemesComponent {}
