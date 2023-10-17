import { inBrowser, isWindow } from './is.js'

export const getGlobalThis = () => {
  if (typeof globalThis !== 'undefined') {
    return globalThis
  }

  if (inBrowser()) {
    return window
  }

  return typeof global !== 'undefined' ? global : self
}

export const requestAnimationFrame = (fn: FrameRequestCallback): number => {
  const globalThis = getGlobalThis()

  return globalThis.requestAnimationFrame ? globalThis.requestAnimationFrame(fn) : globalThis.setTimeout(fn)
}

export const cancelAnimationFrame = (handle: number) => {
  const globalThis = getGlobalThis()

  globalThis.cancelAnimationFrame ? globalThis.cancelAnimationFrame(handle) : globalThis.clearTimeout(handle)
}

export const raf = () =>
  new Promise((resolve) => {
    requestAnimationFrame(resolve)
  })

export const doubleRaf = () =>
  new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve)
    })
  })

// shorthand only
export const getStyle = (element: Element) => window.getComputedStyle(element)

export const getRect = (element: Element | Window): DOMRect => {
  if (isWindow(element)) {
    const width = element.innerWidth
    const height = element.innerHeight
    const rect = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: width,
      bottom: height,
      width,
      height,
    }

    return {
      ...rect,
      toJSON: () => rect,
    }
  }

  return element.getBoundingClientRect()
}

export const inViewport = (element: HTMLElement) => {
  const { top, bottom, left, right } = getRect(element)
  const { width, height } = getRect(window)

  const xInViewport = left <= width && right >= 0
  const yInViewport = top <= height && bottom >= 0

  return xInViewport && yInViewport
}

export const toDataURL = (file: File): Promise<string> =>
  new Promise((resolve) => {
    const fileReader = new FileReader()

    fileReader.onload = () => {
      resolve(fileReader.result as string)
    }

    fileReader.readAsDataURL(file)
  })

export const preventDefault = (event: Event) => {
  if (event.cancelable === false) {
    return
  }

  event.preventDefault()
}

export const getScrollTop = (element: Element | Window) => {
  const top = 'scrollTop' in element ? element.scrollTop : element.scrollY

  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0)
}

export const getScrollLeft = (element: Element | Window) => {
  const left = 'scrollLeft' in element ? element.scrollLeft : element.scrollX

  return Math.max(left, 0)
}
