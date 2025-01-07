import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import HighlighterProvider from './HighlighterProvider.vue'
import { props as highlighterProviderProps } from './props'

withInstall(HighlighterProvider)
withPropsDefaultsSetter(HighlighterProvider, highlighterProviderProps)

export const _HighlighterProviderComponent = HighlighterProvider

export default HighlighterProvider
