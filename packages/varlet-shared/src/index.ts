export const isString = (val: unknown): val is string => typeof val === 'string'

export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isPlainObject = (val: unknown): val is Record<string, any> =>
  Object.prototype.toString.call(val) === '[object Object]'

export const isObject = (val: unknown): val is Record<string, any> => typeof val === 'object' && val !== null

// eslint-disable-next-line
export const isFunction = (val: unknown): val is Function => typeof val === 'function'

export const isArray = (val: unknown): val is Array<any> => Array.isArray(val)

export const isURL = (val: string | undefined | null) => {
  if (!val) {
    return false
  }

  return /^(http)|(\.*\/)/.test(val)
}

export const isEmpty = (val: unknown) =>
  val === undefined || val === null || val === '' || (Array.isArray(val) && !val.length)

export const toNumber = (val: number | string | boolean | undefined | null): number => {
  if (val == null) return 0

  if (isString(val)) {
    val = parseFloat(val)
    val = Number.isNaN(val) ? 0 : val
    return val
  }

  if (isBoolean(val)) return Number(val)

  return val
}

export const removeItem = (arr: Array<unknown>, item: unknown) => {
  if (arr.length) {
    const index: number = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

export const toggleItem = (arr: Array<unknown>, item: unknown) => {
  arr.includes(item) ? removeItem(arr, item) : arr.push(item)
}

export const throttle = (method: any, mustRunDelay = 200): (() => void) => {
  let timer: number
  let start = 0

  return function loop(this: unknown, ...args) {
    const now = Date.now()
    const elapsed = now - start

    if (!start) {
      start = now
    }

    if (timer) {
      window.clearTimeout(timer)
    }

    if (elapsed >= mustRunDelay) {
      method.apply(this, args)
      start = now
    } else {
      timer = window.setTimeout(() => {
        loop.apply(this, args)
      }, mustRunDelay - elapsed)
    }
  }
}

export const inBrowser = () => typeof window !== 'undefined'

export const uniq = (arr: Array<any>) => [...new Set(arr)]

export const bigCamelize = (s: string): string => camelize(s).replace(s.charAt(0), s.charAt(0).toUpperCase())

export const camelize = (s: string): string => s.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())

export const kebabCase = (s: string): string => {
  const ret = s.replace(/([A-Z])/g, ' $1').trim()
  return ret.split(' ').join('-').toLowerCase()
}

export const find = <T>(
  arr: Array<T>,
  callback: (item: T, index: number, array: Array<T>) => any,
  from: 'start' | 'end' = 'start'
): [T, number] | [null, -1] => {
  let i = from === 'start' ? 0 : arr.length - 1

  while (arr.length > 0 && i >= 0 && i <= arr.length - 1) {
    const flag = callback(arr[i], i, arr)

    if (flag) {
      return [arr[i], i]
    }

    from === 'start' ? i++ : i--
  }

  return [null, -1]
}

export const normalizeToArray = <T>(value: T | T[]) => (isArray(value) ? value : [value])
