export const isString = (val: unknown): val is string => typeof val === 'string'

export const isBaseObject = (val: unknown) => Object.prototype.toString.call(val) === '[object Object]'

export const removeItem = (arr: Array<unknown>, item: unknown) => {
  if (arr.length) {
    const index: number = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

export const throttle = (method: any, mustRunDelay = 200): () => void => {
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

export const checkIntersectionObserverAPI = (): boolean => 'IntersectionObserver' in window

export const createInViewportObserver = <T>(handler: (el: T) => void): IntersectionObserver => {
  return new IntersectionObserver((intersectionObserverEntries: IntersectionObserverEntry[]) => {
    intersectionObserverEntries.forEach((intersectionObserverEntry: IntersectionObserverEntry) => {
      if (intersectionObserverEntry.intersectionRatio > 0) {
        handler(intersectionObserverEntry.target as unknown as T)
      }
    })
  })
}
