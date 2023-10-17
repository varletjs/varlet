export const debounce = (fn: any, delay = 0) => {
  let timer: number

  return function (this: unknown, ...args: any[]) {
    if (timer) {
      window.clearTimeout(timer)
    }

    timer = window.setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

export const throttle = (fn: any, delay = 200): (() => void) => {
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

    if (elapsed >= delay) {
      fn.apply(this, args)
      start = now
    } else {
      timer = window.setTimeout(() => {
        loop.apply(this, args)
      }, delay - elapsed)
    }
  }
}
