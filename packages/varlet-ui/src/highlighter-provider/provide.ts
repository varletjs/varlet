import { keyInProvides } from '@varlet/use'
import { inject, provide } from 'vue'
import type { Highlighter } from './props'

export interface HighlighterProvider {
  highlighter?: Highlighter
  theme?: string
}

export const HIGHLIGHTER_PROVIDER_KEY = Symbol('HIGHLIGHTER_PROVIDER_KEY')

export function provideHighlighterProvider(highlighterProvider: HighlighterProvider) {
  provide(HIGHLIGHTER_PROVIDER_KEY, highlighterProvider)
}

export function injectHighlighterProvider() {
  if (!keyInProvides(HIGHLIGHTER_PROVIDER_KEY)) {
    return { highlighter: undefined } as HighlighterProvider
  }

  return inject<HighlighterProvider>(HIGHLIGHTER_PROVIDER_KEY)!
}
