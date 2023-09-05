import config from '@config'
import AppType from './appType'
import { Themes, StyleProvider } from '@varlet/ui'
import { onMounted, onUnmounted } from 'vue'
import { get } from 'lodash-es'

interface PCLocationInfo {
  language: string
  menuName: string
  hash: string
}

export type Theme = 'lightTheme' | 'darkTheme'

export type StyleVars = Record<string, string>

export function getPCLocationInfo(): PCLocationInfo {
  const [, language, path] = window.location.hash.split('/')
  const [menuName, hash = ''] = path?.split('#') ?? []

  return {
    language,
    menuName,
    hash,
  }
}

function getHashSearch() {
  const { href } = window.location
  const hashSearch = href.slice(href.indexOf('?'))

  return new URLSearchParams(hashSearch)
}

export function getBrowserTheme(): Theme {
  const themeKey = get(config, 'themeKey')
  const darkThemeConfig = get(config, 'darkTheme')

  if (!darkThemeConfig) {
    return 'lightTheme'
  }

  const storageTheme = window.localStorage.getItem(themeKey) as Theme

  if (!storageTheme) {
    const preferTheme = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'darkTheme' : 'lightTheme'
    window.localStorage.setItem(themeKey, preferTheme)

    return preferTheme
  }

  return storageTheme
}

export function watchLang(cb: (lang: string) => void, platform: 'pc' | 'mobile' = 'mobile') {
  const handleHashchange = () => {
    const language = platform === 'mobile' ? getHashSearch().get('language') ?? 'zh-CN' : getPCLocationInfo().language
    cb(language)
  }

  useRouteListener(handleHashchange)
  handleHashchange()
}

export function withSiteConfigNamespace(styleVars: Record<string, any>) {
  return Object.entries(styleVars).reduce((styleVars, [key, value]) => {
    styleVars[`--site-config-${key}`] = value as string
    return styleVars
  }, {} as StyleVars)
}

export function watchPlatform(cb: (platform: string) => void) {
  const handleHashchange = () => {
    const platform = getHashSearch().get('platform') ?? 'mobile'
    cb(platform)
  }

  useRouteListener(handleHashchange)
  handleHashchange()
}

export function useRouteListener(cb: () => void) {
  onMounted(() => {
    window.addEventListener('hashchange', cb)
    window.addEventListener('popstate', cb)
  })
  onUnmounted(() => {
    window.removeEventListener('hashchange', cb)
    window.removeEventListener('popstate', cb)
  })
}

export function watchDarkMode(dark: StyleVars, cb?: (theme: Theme) => void) {
  watchTheme((theme) => {
    const siteStyleVars = withSiteConfigNamespace(get(config, theme, {}))
    const darkStyleVars = { ...siteStyleVars, ...Themes.dark, ...dark }
    StyleProvider(theme === 'darkTheme' ? darkStyleVars : siteStyleVars)
    setColorScheme(theme)
    cb?.(theme)
  })
}

export function setColorScheme(theme: Theme) {
  document.documentElement.style.setProperty('color-scheme', theme === 'darkTheme' ? 'dark' : 'light')
}

export function watchTheme(
  cb: (theme: Theme, from: 'pc' | 'mobile' | 'default' | 'playground') => void,
  shouldUnmount = true
) {
  const handleThemeChange = (event: MessageEvent) => {
    const { data } = event
    if (data.action === 'theme-change') {
      cb(data.data, data.from)
    }
  }

  window.addEventListener('message', handleThemeChange)

  if (shouldUnmount) {
    onUnmounted(() => {
      window.removeEventListener('message', handleThemeChange)
    })
  }

  cb(getBrowserTheme(), 'default')
}

export { AppType, StyleProvider }
