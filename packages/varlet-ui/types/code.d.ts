import { VarComponent, BasicAttributes, SetPropsDefaults } from './varComponent'

export declare const codeProps: Record<keyof CodeProps, any>

export interface CodeProps extends BasicAttributes {
  code?: string
  language?: string
  theme?: string
  wordWrap?: boolean
  trim?: boolean
}

export class Code extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<CodeProps>

  $props: CodeProps
}

export class _CodeComponent extends Code {}
