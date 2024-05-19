import { isArray } from './is.js'

export const debounce = (fn: any, delay = 0) => {
  let timer: any

  return function (this: unknown, ...args: any[]) {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

export const throttle = (fn: any, delay = 200): (() => void) => {
  let timer: any
  let start = 0

  return function loop(this: unknown, ...args) {
    const now = Date.now()
    const elapsed = now - start

    if (!start) {
      start = now
    }

    if (timer) {
      clearTimeout(timer)
    }

    if (elapsed >= delay) {
      fn.apply(this, args)
      start = now
    } else {
      timer = setTimeout(() => {
        loop.apply(this, args)
      }, delay - elapsed)
    }
  }
}

export function call<P extends any[], R>(
  fn?: ((...arg: P) => R) | ((...arg: P) => R)[] | null,
  ...args: P
): R | R[] | undefined {
  if (isArray(fn)) {
    return fn.map((f) => f(...args))
  }

  if (fn) {
    return fn(...args)
  }
}
