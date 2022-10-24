import config from '@config'
import AppType from './appType'
import { onMounted, onUnmounted } from 'vue'
import { kebabCase } from '@varlet/shared'
import { get } from 'lodash-es'

interface PCLocationInfo {
  language: string
  menuName: string
}

export type Theme = 'lightTheme' | 'darkTheme'

export type StyleVars = Record<string, string>

const mountedVarKeys: string[] = []

function formatStyleVars(styleVars: StyleVars | null) {
  return Object.entries(styleVars ?? {}).reduce((styles, [key, value]) => {
    const cssVar = key.startsWith('--') ? key : `--${kebabCase(key)}`
    styles[cssVar] = value

    return styles
  }, {} as StyleVars)
}

export function StyleProvider(styleVars: StyleVars | null = {}) {
  mountedVarKeys.forEach((key) => document.documentElement.style.removeProperty(key))
  mountedVarKeys.length = 0

  const styles: StyleVars = formatStyleVars(styleVars)
  Object.entries(styles).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
    mountedVarKeys.push(key)
  })
}

export function getPCLocationInfo(): PCLocationInfo {
  const [, language, menuName] = window.location.hash.split('/')

  return {
    language,
    menuName,
  }
}

function getHashSearch() {
  const { href } = window.location
  const hashSearch = href.slice(href.indexOf('?'))

  return new URLSearchParams(hashSearch)
}

function addRouteListener(cb: () => void) {
  onMounted(() => {
    window.addEventListener('hashchange', cb)
    window.addEventListener('popstate', cb)
  })
  onUnmounted(() => {
    window.removeEventListener('hashchange', cb)
    window.removeEventListener('popstate', cb)
  })
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

export function watchPlatform(cb: (platform: string) => void) {
  const handleHashchange = () => {
    const platform = getHashSearch().get('platform') ?? 'mobile'
    cb(platform)
  }

  addRouteListener(handleHashchange)

  handleHashchange()
}

export function watchLang(cb: (lang: string) => void, platform: 'pc' | 'mobile' = 'mobile') {
  const handleHashchange = () => {
    const language = platform === 'mobile' ? getHashSearch().get('language') ?? 'zh-CN' : getPCLocationInfo().language

    cb(language)
  }

  addRouteListener(handleHashchange)

  handleHashchange()
}

export function watchDarkMode(dark: StyleVars, cb?: (theme: Theme) => void) {
  watchTheme((theme) => {
    StyleProvider(theme === 'darkTheme' ? dark : null)

    cb?.(theme)
  })
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

export { AppType }
