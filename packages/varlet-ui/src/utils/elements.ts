import { isNumber, isString, kebabCase, toNumber } from './shared'
import type { StyleVars } from '../style-provider'

export function getLeft(element: HTMLElement): number {
  const { left } = element.getBoundingClientRect()

  return left + (document.body.scrollLeft || document.documentElement.scrollLeft)
}

export function getTop(element: HTMLElement): number {
  const { top } = element.getBoundingClientRect()

  return top + (document.body.scrollTop || document.documentElement.scrollTop)
}

export function getScrollTop(element: Element | Window): number {
  const top = 'scrollTop' in element ? element.scrollTop : element.pageYOffset

  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0)
}

export function getScrollLeft(element: Element | Window): number {
  const left = 'scrollLeft' in element ? element.scrollLeft : element.pageXOffset

  return Math.max(left, 0)
}

export async function inViewport(element: HTMLElement): Promise<boolean> {
  await doubleRaf()
  const { top, bottom, left, right } = element.getBoundingClientRect()
  const { innerWidth, innerHeight } = window

  const xInViewport = left <= innerWidth && right >= 0
  const yInViewport = top <= innerHeight && bottom >= 0

  return xInViewport && yInViewport
}

export function getTranslate(el: HTMLElement) {
  const { transform } = window.getComputedStyle(el)
  return +transform.slice(transform.lastIndexOf(',') + 2, transform.length - 1)
}

export function isHidden(el: HTMLElement) {
  const { width, height } = el.getBoundingClientRect()

  return width === 0 && height === 0
}

export function getParentScroller(el: HTMLElement): HTMLElement | Window {
  let element = el

  while (element) {
    if (!element.parentNode) {
      break
    }

    element = element.parentNode as HTMLElement

    if (element === document.body || element === document.documentElement) {
      break
    }

    const scrollRE = /(scroll|auto)/
    const { overflowY, overflow } = window.getComputedStyle(element)

    if (scrollRE.test(overflowY) || scrollRE.test(overflow)) {
      return element
    }
  }

  return window
}

export function getAllParentScroller(el: HTMLElement): Array<HTMLElement | Window> {
  const allParentScroller: Array<HTMLElement | Window> = []
  let element: HTMLElement | Window = el

  while (element !== window) {
    element = getParentScroller(element as HTMLElement)
    allParentScroller.push(element)
  }

  return allParentScroller
}

// example 1rem
export const isRem = (value: unknown): value is string => isString(value) && value.endsWith('rem')

// example 1 || 1px
export const isPx = (value: unknown): value is string | number =>
  (isString(value) && value.endsWith('px')) || isNumber(value)

// example 1%
export const isPercent = (value: unknown): value is string => isString(value) && value.endsWith('%')

// example 1vw
export const isVw = (value: unknown): value is string => isString(value) && value.endsWith('vw')

// example 1vh
export const isVh = (value: unknown): value is string => isString(value) && value.endsWith('vh')

// example return 1
export const toPxNum = (value: unknown): number => {
  if (isNumber(value)) {
    return value
  }

  if (isPx(value)) {
    return +(value as string).replace('px', '')
  }

  if (isVw(value)) {
    return (+(value as string).replace('vw', '') * window.innerWidth) / 100
  }

  if (isVh(value)) {
    return (+(value as string).replace('vh', '') * window.innerHeight) / 100
  }

  if (isRem(value)) {
    const num = +(value as string).replace('rem', '')
    const rootFontSize = window.getComputedStyle(document.documentElement).fontSize

    return num * parseFloat(rootFontSize)
  }

  if (isString(value)) {
    return toNumber(value)
  }

  // % and other
  return 0
}

// example return 1px 1% 1vw 1vh 1rem null
export const toSizeUnit = (value: unknown) => {
  if (value == null) {
    return undefined
  }

  if (isPercent(value) || isVw(value) || isVh(value) || isRem(value)) {
    return value
  }

  return `${toPxNum(value)}px`
}

export function requestAnimationFrame(fn: FrameRequestCallback): number {
  return window.requestAnimationFrame ? window.requestAnimationFrame(fn) : window.setTimeout(fn, 16)
}

export function cancelAnimationFrame(handle: number): void {
  window.cancelAnimationFrame ? window.cancelAnimationFrame(handle) : window.clearTimeout(handle)
}

export function nextTickFrame(fn: FrameRequestCallback) {
  requestAnimationFrame(() => {
    requestAnimationFrame(fn)
  })
}

export function doubleRaf() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve)
    })
  })
}

interface ScrollToOptions {
  top?: number
  left?: number
  duration?: number
  animation: (progress: number) => number
}

export function scrollTo(
  element: HTMLElement | Window,
  { top = 0, left = 0, duration = 300, animation }: ScrollToOptions
): Promise<void> {
  const startTime = Date.now()

  const scrollTop = getScrollTop(element)
  const scrollLeft = getScrollLeft(element)

  return new Promise((resolve) => {
    const frame = () => {
      const progress = (Date.now() - startTime) / duration

      if (progress < 1) {
        const nextTop = scrollTop + (top - scrollTop) * animation(progress)
        const nextLeft = scrollLeft + (left - scrollLeft) * animation(progress)

        element.scrollTo(nextLeft, nextTop)
        requestAnimationFrame(frame)
      } else {
        element.scrollTo(left, top)
        resolve()
      }
    }

    requestAnimationFrame(frame)
  })
}

export function formatStyleVars(styleVars: StyleVars | null) {
  return Object.entries(styleVars ?? {}).reduce((styles, [key, value]) => {
    const cssVar = key.startsWith('--') ? key : `--${kebabCase(key)}`
    styles[cssVar] = value

    return styles
  }, {} as StyleVars)
}
