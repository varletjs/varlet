import { StyleVars } from './styleProvider'

export interface ThemesToViewportOptions {
  viewportWidth?: number
  viewportUnit?: string
  unitPrecision?: number
}

export interface ThemesToRemOptions {
  rootFontSize?: number
  unitPrecision?: number
}

interface Themes {
  dark: StyleVars
  md3Light: StyleVars
  md3Dark: StyleVars

  convert(theme: StyleVars, converter: (value: number) => string): StyleVars
  toViewport(theme: StyleVars, options?: ThemesToViewportOptions): StyleVars
  toRem(theme: StyleVars, options?: ThemesToRemOptions): StyleVars
}

export declare const Themes: Themes

export class _ThemesComponent {}
