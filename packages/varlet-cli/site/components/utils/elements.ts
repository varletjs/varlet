import { isNumber, isString, toNumber, kebabCase } from '@varlet/shared'
import type { StyleVars } from '../../utils'

export function getLeft(element: HTMLElement): number {
  const { left } = element.getBoundingClientRect()

  return left + (document.body.scrollLeft || document.documentElement.scrollLeft)
}

export const isRem = (value: unknown) => isString(value) && value.endsWith('rem')

// example 1 || 1px
export const isPx = (value: unknown) => (isString(value) && value.endsWith('px')) || isNumber(value)

// example 1%
export const isPercent = (value: unknown) => isString(value) && value.endsWith('%')

// example 1vw
export const isVw = (value: unknown) => isString(value) && value.endsWith('vw')

// example 1vh
export const isVh = (value: unknown) => isString(value) && value.endsWith('vh')

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
    return null
  }

  if (isPercent(value) || isVw(value) || isVh(value) || isRem(value)) {
    return value
  }

  return `${toPxNum(value)}px`
}

export function formatStyleVars(styleVars: StyleVars | null) {
  return Object.entries(styleVars ?? {}).reduce((styles, [key, value]) => {
    const cssVar = key.startsWith('--') ? key : `--${kebabCase(key)}`
    styles[cssVar] = value

    return styles
  }, {} as StyleVars)
}

export function doubleRaf() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve)
    })
  })
}

export function supportTouch() {
  const inBrowser = typeof window !== 'undefined'
  return inBrowser && 'ontouchstart' in window
}

export const multiplySizeUnit = (value: unknown, quantity = 1) => {
  if (value == null) {
    return undefined
  }

  const legalSize = toSizeUnit(value) as string

  const unit = legalSize.match(/(vh|%|rem|px|vw)$/)![0]

  return `${parseFloat(legalSize) * quantity}${unit}`
}
