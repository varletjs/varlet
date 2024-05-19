import { isString, removeItem } from '@varlet/shared'

export interface CacheInstance<T> {
  cache: T[]

  has(key: T): boolean

  add(key: T): void

  remove(key: T): void

  clear(): void
}

export const isHTMLSupportImage = (val: unknown): val is string => {
  if (!isString(val)) {
    return false
  }

  return val.startsWith('data:image') || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(val)
}

export const isHTMLSupportVideo = (val: unknown): val is string => {
  if (!isString(val)) {
    return false
  }

  return val.startsWith('data:video') || /\.(mp4|webm|ogg)$/.test(val)
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

export const padStart = (str: string | undefined, maxLength: number, fillString = ''): string => {
  if (str === undefined) {
    str = ''
  }
  if (str.length >= maxLength) {
    return str
  }

  const len = maxLength - str.length
  const repeatCount = Math.floor(len / fillString.length)

  return fillString.repeat(repeatCount) + fillString.slice(0, len % fillString.length) + str
}
