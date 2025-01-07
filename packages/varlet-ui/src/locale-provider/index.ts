import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import LocaleProvider from './LocaleProvider.vue'
import { props as localeProviderProps } from './props'

withInstall(LocaleProvider)
withPropsDefaultsSetter(LocaleProvider, localeProviderProps)

export const _LocaleProviderComponent = LocaleProvider

export default LocaleProvider
