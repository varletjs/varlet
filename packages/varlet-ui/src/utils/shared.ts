export interface CacheInstance<T> {
  cache: T[]

  has(key: T): boolean

  add(key: T): void

  remove(key: T): void

  clear(): void
}

export const isHTMLSupportImage = (val: string | undefined | null) => {
  if (val == null) {
    return false
  }

  return val.startsWith('data:image') || /\.(png|jpg|gif|jpeg|svg)$/.test(val)
}

export const isHTMLSupportVideo = (val: string | undefined | null) => {
  if (val == null) {
    return false
  }

  return val.startsWith('data:video') || /\.(mp4|webm|ogg)$/.test(val)
}

export const removeItem = (arr: Array<unknown>, item: unknown) => {
  if (arr.length) {
    const index: number = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
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

export const dt = (value: unknown, defaultText: string | undefined) => (value == null ? defaultText : value)
