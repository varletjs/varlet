import { BundledLanguage, BundledTheme } from 'shiki'
import { VarComponent, BasicAttributes, SetPropsDefaults } from './varComponent'

export declare const codeProps: Record<keyof CodeProps, any>

export type CodeLanguage = BundledLanguage

export type CodeTheme = BundledTheme

export interface CodeProps extends BasicAttributes {
  content?: string
  lang?: CodeLanguage
  theme?: CodeTheme
}

export class Code extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<CodeProps>

  $props: CodeProps
}

export class _CodeComponent extends Code {}
