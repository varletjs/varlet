export type Time = {
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

export interface CacheInstance<T> {
  cache: T[]

  has(key: T): boolean

  add(key: T): void

  remove(key: T): void

  clear(): void
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

export const isHTMLSupportImage = (val: string) => val.startsWith('data:image') || /\.(png|jpg|gif|jpeg|svg)$/.test(val)

export const isHTMLSupportVideo = (val: string) => val.startsWith('data:video') || /\.(mp4|webm|ogg)$/.test(val)

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isBool = (val: unknown): val is boolean => typeof val === 'boolean'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isPlainObject = (val: unknown): val is Record<string, any> =>
  Object.prototype.toString.call(val) === '[object Object]'

export const isArray = (val: unknown): val is Array<any> => Array.isArray(val)

export const isURL = (val: string) => /^(http)|(\.*\/)/.test(val)

export const isEmpty = (val: unknown) =>
  val === undefined || val === null || val === '' || (Array.isArray(val) && !val.length)

export const removeItem = (arr: Array<unknown>, item: unknown) => {
  if (arr.length) {
    const index: number = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

export const throttle = (method: any, mustRunDelay = 200): (() => void) => {
  let timer: number
  let start: number

  return function loop(this: unknown, ...args) {
    const now = Date.now()

    if (!start) {
      start = now
    }

    if (timer) {
      window.clearTimeout(timer)
    }

    if (now - start >= mustRunDelay) {
      method.apply(this, args)
      start = now
    } else {
      timer = window.setTimeout(() => {
        loop.apply(this, args)
      }, 50)
    }
  }
}

export const debounce = (method: any, delay = 200) => {
  let timer: number

  return function (this: unknown, ...args: any[]) {
    timer && window.clearTimeout(timer)
    timer = window.setTimeout(() => {
      method.apply(this, args)
    }, delay)
  }
}

export const checkIntersectionObserverAPI = (): boolean => 'IntersectionObserver' in window

export const createInViewportObserver = <T>(handler: (el: T) => void): IntersectionObserver => {
  return new IntersectionObserver((intersectionObserverEntries: IntersectionObserverEntry[]) => {
    intersectionObserverEntries.forEach((intersectionObserverEntry: IntersectionObserverEntry) => {
      if (intersectionObserverEntry.intersectionRatio > 0) {
        handler((intersectionObserverEntry.target as unknown) as T)
      }
    })
  })
}

export const createCache = <T>(max: number): CacheInstance<T> => {
  const cache: T[] = []

  return {
    cache,

    has(key: T) {
      return this.cache.includes(key)
    },

    add(key: T) {
      if (this.has(key)) {
        return
      }

      this.cache.length === max && cache.shift()
      this.cache.push(key)
    },

    remove(key: T) {
      this.has(key) && removeItem(this.cache, key)
    },

    clear() {
      this.cache.length = 0
    },
  }
}

export const linear = (value: number): number => value

export const cubic = (value: number): number => value ** 3

export const easeInOutCubic = (value: number): number =>
  value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2

export function parseFormat(format: string, time: Time): string {
  const scannedTimes = Object.values(time)
  const scannedFormats = ['DD', 'HH', 'mm', 'ss']
  const padValues = [24, 60, 60, 1000]

  scannedFormats.forEach((scannedFormat, index) => {
    if (!format.includes(scannedFormat)) {
      scannedTimes[index + 1] += scannedTimes[index] * padValues[index]
    } else {
      format = format.replace(scannedFormat, String(scannedTimes[index]).padStart(2, '0'))
    }
  })

  if (format.includes('S')) {
    const ms = String(scannedTimes[scannedTimes.length - 1]).padStart(3, '0')

    if (format.includes('SSS')) {
      format = format.replace('SSS', ms)
    } else if (format.includes('SS')) {
      format = format.replace('SS', ms.slice(0, 2))
    } else {
      format = format.replace('S', ms.slice(0, 1))
    }
  }

  return format
}

export const dt = (value: unknown, defaultText: string) => (value == null ? defaultText : value)

export const inBrowser = typeof window !== 'undefined'

export const uniq = (arr: Array<any>) => [...new Set(arr)]

export function kebabCase(str: string): string {
  const reg = /([^-])([A-Z])/g;

  return str
    .replace(reg, '$1-$2')
    .replace(reg, '$1-$2')
    .toLowerCase();
}
