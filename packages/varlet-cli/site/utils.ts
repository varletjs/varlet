import { h, onMounted, onUnmounted } from 'vue'
import { get } from 'lodash-es'
import { StyleProvider } from '@varlet/ui'
import { mount } from '@varlet/ui/src/utils/components'
import { isNumber } from '@varlet/ui/src/utils/shared'
import { isPx } from '@varlet/ui/src/utils/elements'

export function camelize(str: string): string {
  return str.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())
}

export function bigCamelize(str: string): string {
  return camelize(str).replace(str.charAt(0), str.charAt(0).toUpperCase())
}

export function pickProps(props: any, propsKey: string): any
export function pickProps(props: any, propsKey: string[]): any
export function pickProps(props: any, propsKey: any): any {
  return Array.isArray(propsKey)
    ? propsKey.reduce((pickedProps: any, key) => {
      pickedProps[key] = props[key]
      return pickedProps
    }, {})
    : props[propsKey]
}

export function mountInstance(
  component: any,
  props: Record<string, any> = {},
  eventListener: Record<string, any> = {}
): {
  unmountInstance: () => void
} {
  const Host = {
    setup() {
      return () =>
        h(component, {
          ...props,
          ...eventListener,
        })
    },
  }

  const { unmount } = mount(Host)
  return { unmountInstance: unmount }
}

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isBool = (val: unknown): val is boolean => typeof val === 'boolean'

export function getLeft(element: HTMLElement): number {
  const { left } = element.getBoundingClientRect()

  return left + (document.body.scrollLeft || document.documentElement.scrollLeft)
}

export function getTop(element: HTMLElement): number {
  const { top } = element.getBoundingClientRect()

  return top + (document.body.scrollTop || document.documentElement.scrollTop)
}

// example 1%
export const isPercent = (value: unknown) => isString(value) && value.endsWith('%')

// example 1vw
export const isVw = (value: unknown) => isString(value) && value.endsWith('vw')

// example 1vh
export const isVh = (value: unknown) => isString(value) && value.endsWith('vh')

// example 1rem
export const isRem = (value: unknown) => isString(value) && value.endsWith('rem')

// example return 1
export const toPxNum = (value: unknown): number => {
  if (isNumber(value)) {
    return value
  }

  if (isPx(value)) {
    return +(value as string).replace('px', '')
  }

  if (isVw(value)) {
    return (+(value as string).replace('vw', '') * window.innerWidth) / 100
  }

  if (isVh(value)) {
    return (+(value as string).replace('vh', '') * window.innerHeight) / 100
  }

  if (isRem(value)) {
    const num = +(value as string).replace('rem', '')
    const rootFontSize = window.getComputedStyle(document.documentElement).fontSize

    return num * parseFloat(rootFontSize)
  }

  if (isString(value)) {
    return toNumber(value)
  }

  // % and other
  return 0
}

// example return 1px 1% 1vw 1vh 1rem null
export const toSizeUnit = (value: unknown) => {
  if (value == null) {
    return null
  }

  if (isPercent(value) || isVw(value) || isVh(value) || isRem(value)) {
    return value
  }

  return `${toPxNum(value)}px`
}

export const toNumber = (val: number | string | boolean | undefined | null): number => {
  if (val == null) return 0

  if (isString(val)) {
    val = parseFloat(val)
    val = Number.isNaN(val) ? 0 : val
    return val
  }

  if (isBool(val)) return Number(val)

  return val
}

export const isURL = (val: string) => /^(http)|(\.*\/)/.test(val)

export interface PCLocationInfo {
  language: string
  menuName: string
}

export function getPCLocationInfo(): PCLocationInfo {
  const [, language, menuName] = window.location.hash.split('/')

  return {
    language,
    menuName
  }
}

export function isPhone() {
  return /Android|webOS|iPhone|iPod|BlackBerry|Pad/i.test(navigator.userAgent)
}

export enum MenuTypes {
  TITLE = 1,
  COMPONENT = 2,
  DOCUMENTATION = 3
}

export function inIframe() {
  return window.self !== window.top
}

export function removeEmpty(object: Record<string, string> = {}) {
  return Object.keys(object).reduce((record: Record<string, string>, key) => {
    const value = object[key]
    value && (record[key] = value)
    return record
  }, {})
}

export function getHashSearch() {
  const { href } = window.location
  const hashSearch = href.slice(href.indexOf('?'))

  return new URLSearchParams(hashSearch)
}

export function watchLang(cb: (lang: string) => void, platform: 'pc' | 'mobile' = 'mobile') {
  const handleHashchange = () => {
    const language = platform === 'mobile'
      ? (getHashSearch().get('language') ?? 'zh-CN')
      : getPCLocationInfo().language

    cb(language)
  }

  addRouteListener(handleHashchange)

  handleHashchange()
}

export function watchPlatform(cb: (platform: string) => void) {
  const handleHashchange = () => {
    const platform = getHashSearch().get('platform') ?? 'mobile'
    cb(platform)
  }

  addRouteListener(handleHashchange)

  handleHashchange()
}

export function addRouteListener(cb: () => void) {
  onMounted(() => {
    window.addEventListener('hashchange', cb)
    window.addEventListener('popstate', cb)
  })
  onUnmounted(() => {
    window.removeEventListener('hashchange', cb)
    window.removeEventListener('popstate', cb)
  })
}

export function setThemes(config: Record<string, any>) {
  const themes = get(config, 'themes', {})
  Object.keys(themes).forEach((key) => {
    const theme = themes[key]
    StyleProvider({
      [`--site-config-${key}`]: theme
    })
  })
}
