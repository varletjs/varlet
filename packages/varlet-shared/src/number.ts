import { isBoolean, isString } from './is.js'

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

export const clamp = (num: number, min: number, max: number) => Math.min(max, Math.max(min, num))

export const clampArrayRange = (index: number, arr: Array<unknown>) => clamp(index, 0, arr.length - 1)
