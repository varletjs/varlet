export const isString = (val: unknown): val is string => typeof val === 'string'

export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isNumeric = (val: unknown): val is number | string =>
  isNumber(val) || (isString(val) && /^[-+]?\d+$/.test(val))

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

export const isWindow = (val: unknown): val is Window => val === window

export const supportTouch = () => inBrowser() && 'ontouchstart' in window

export const inBrowser = () => typeof window !== 'undefined'

const { hasOwnProperty } = Object.prototype

export const hasOwn = (val: object, key: string | symbol): key is keyof typeof val => hasOwnProperty.call(val, key)
