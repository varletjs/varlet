import { VarComponent, BasicAttributes, SetPropsDefaults } from './varComponent'

export declare const highlighterProps: Record<keyof HighlighterProviderProps, any>

export interface CodeToHtmlOptions {
  lang: string
  theme: string
}

export interface Highlighter {
  codeToHtml: (code: string, options: CodeToHtmlOptions) => Promise<string>
}

export interface HighlighterProviderProps extends BasicAttributes {
  highlighter?: Highlighter
  theme?: string
  tag?: string
}

export class HighlighterProvider extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<HighlighterProviderProps>

  $props: HighlighterProviderProps
}

export class _HighlighterProviderComponent extends HighlighterProvider {}
