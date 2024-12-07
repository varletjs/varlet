import { assert as _assert } from 'rattail'

export * from 'rattail'

export function assert(condition: boolean, source: string, message: string): asserts condition {
  return _assert(condition, `Varlet [${source}]: ${message}`)
}

export function warn(source: string, message: string): void {
  console.warn(`Varlet [${source}]: ${message}`)
}

export function error(source: string, message: string): void {
  console.error(`Varlet [${source}]: ${message}`)
}

export const isURL = (val: string | undefined | null) => {
  if (!val) {
    return false
  }

  return /^(http)|(\.*\/)/.test(val)
}
