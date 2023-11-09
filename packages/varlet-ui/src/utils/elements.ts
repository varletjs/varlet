import {
  isNumber,
  isObject,
  isString,
  kebabCase,
  toNumber,
  isWindow,
  inBrowser,
  getRect,
  getStyle,
  getScrollTop,
  getScrollLeft,
  isNumeric,
} from '@varlet/shared'
import { error } from './logger'
import { type StyleVars } from '../style-provider'

export function getLeft(element: HTMLElement): number {
  const { left } = getRect(element)

  return left + (document.body.scrollLeft || document.documentElement.scrollLeft)
}

export function getTop(element: HTMLElement): number {
  const { top } = getRect(element)

  return top + (document.body.scrollTop || document.documentElement.scrollTop)
}

export function getTranslateY(el: HTMLElement) {
  const { transform } = getStyle(el)
  return +transform.slice(transform.lastIndexOf(',') + 2, transform.length - 1)
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
    const { overflowY, overflow } = getStyle(element)

    if (scrollRE.test(overflowY) || scrollRE.test(overflow)) {
      return element
    }
  }

  return window
}

export function getAllParentScroller(el: HTMLElement): Array<HTMLElement | Window> {
  const allParentScroller: Array<HTMLElement | Window> = []
  let element: HTMLElement | Window = el

  while (!isWindow(element)) {
    element = getParentScroller(element)
    allParentScroller.push(element)
  }

  return allParentScroller
}

export function getTarget(target: string | HTMLElement, componentName: string) {
  if (isString(target)) {
    const el = document.querySelector(target)

    if (!el) {
      error(componentName, 'target element cannot found')
    }

    return el as HTMLElement
  }

  if (isObject(target)) return target

  error(componentName, 'type of prop "target" should be a selector or an element object')
}

export function getViewportSize() {
  const { width, height } = getRect(window)

  return {
    vw: width,
    vh: height,
    vMin: Math.min(width, height),
    vMax: Math.max(width, height),
  }
}

// example 1rem
export const isRem = (value: unknown): value is string => isString(value) && value.endsWith('rem')

// example 1em
export const isEm = (value: unknown): value is string =>
  isString(value) && value.endsWith('em') && !value.endsWith('rem')

// e.g. 1 || 1px
export const isPx = (value: unknown): value is string | number =>
  (isString(value) && value.endsWith('px')) || isNumber(value)

// e.g. 1%
export const isPercent = (value: unknown): value is string => isString(value) && value.endsWith('%')

// e.g. 1vw
export const isVw = (value: unknown): value is string => isString(value) && value.endsWith('vw')

// e.g. 1vh
export const isVh = (value: unknown): value is string => isString(value) && value.endsWith('vh')

// e.g. 1vmin
export const isVMin = (value: unknown): value is string => isString(value) && value.endsWith('vmin')

// e.g. 1vmax
export const isVMax = (value: unknown): value is string => isString(value) && value.endsWith('vmax')

// e.g. calc(1px + 1px)
export const isCalc = (value: unknown): value is string => isString(value) && value.startsWith('calc(')

// e.g. var(--color-primary)
export const isVar = (value: unknown): value is string => isString(value) && value.startsWith('var(')

// e.g. return 1
export const toPxNum = (value: unknown): number => {
  if (isNumeric(value)) {
    return Number(value)
  }

  if (isPx(value)) {
    return +(value as string).replace('px', '')
  }

  if (!inBrowser()) {
    return 0
  }

  const { vw, vh, vMin, vMax } = getViewportSize()

  if (isVw(value)) {
    return (+(value as string).replace('vw', '') * vw) / 100
  }

  if (isVh(value)) {
    return (+(value as string).replace('vh', '') * vh) / 100
  }

  if (isVMin(value)) {
    return (+(value as string).replace('vmin', '') * vMin) / 100
  }

  if (isVMax(value)) {
    return (+(value as string).replace('vmax', '') * vMax) / 100
  }

  if (isRem(value)) {
    const num = +(value as string).replace('rem', '')
    const rootFontSize = getStyle(document.documentElement).fontSize

    return num * parseFloat(rootFontSize)
  }

  if (isString(value)) {
    return toNumber(value)
  }

  // % and other
  return 0
}

// e.g. return 1px 1% 1vw 1vh 1rem null var(--color-primary) calc(1px + 1px)
export const toSizeUnit = (value: unknown) => {
  if (value == null) {
    return undefined
  }

  if (isNumeric(value)) {
    return `${value}px`
  }

  return String(value)
}

export const multiplySizeUnit = (value: unknown, quantity = 1) => {
  if (value == null) {
    return undefined
  }

  const legalSize = toSizeUnit(value) as string

  const unit = legalSize.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)![0]

  return `${parseFloat(legalSize) * quantity}${unit}`
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

export function padStartFlex(style: string | undefined) {
  return style === 'start' || style === 'end' ? `flex-${style}` : style
}
