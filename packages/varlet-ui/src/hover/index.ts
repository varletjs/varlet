import { isFunction, camelize } from '@varlet/shared'
import type { App, Directive, Plugin, DirectiveBinding, StyleValue } from 'vue'

export type HoverValue = StyleValue | ((isHovering: boolean) => void)

function shouldDisabled(arg?: string) {
  if (!arg) {
    return false
  }

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  if (arg === 'desktop' && isMobile) {
    return true
  }

  if (arg === 'mobile' && !isMobile) {
    return true
  }

  return false
}

export type HoverHTMLElement = HTMLElement & {
  _hover: {
    value: HoverValue
    hovering: boolean
    rawStyle: StyleValue
  }
}

function getStyle(element: HoverHTMLElement) {
  const style = element.getAttribute('style')

  if (!style) return {}

  return style
    .split(';')
    .filter(Boolean)
    .reduce((style, item) => {
      const [key, value] = item.split(':').map((item) => item.trim())

      style[camelize(key) as keyof StyleValue] = value as keyof StyleValue

      return style
    }, {})
}

function updateRawStyle(element: HoverHTMLElement) {
  const { value } = element._hover

  const style = getStyle(element)

  Object.keys(value).forEach((key) => {
    const camelizedKey = camelize(key) as keyof StyleValue

    const styleValue = value[camelizedKey]

    if (styleValue != null && style[camelizedKey]) {
      element._hover.rawStyle[camelizedKey] = style[camelizedKey]
    }
  })
}

function updateStyle(element: HoverHTMLElement, styleValue: StyleValue) {
  Object.keys(styleValue).forEach((key) => {
    const value = styleValue[key as keyof StyleValue]

    if (value != null) {
      element.style[key as keyof StyleValue] = value
    }
  })
}

function clearStyle(element: HoverHTMLElement) {
  Object.keys(element._hover.value).forEach((key) => {
    element.style[key as keyof StyleValue] = ''
  })
}

function restoreStyle(element: HoverHTMLElement) {
  clearStyle(element)
  updateStyle(element, element._hover.rawStyle)

  element._hover.rawStyle = {}
}

function createHover(this: HoverHTMLElement) {
  const { value } = this._hover
  this._hover.hovering = true

  if (isFunction(value)) {
    value(this._hover.hovering)
    return
  }

  updateStyle(this, value)
}

function removeHover(this: HoverHTMLElement) {
  this._hover.hovering = false

  if (isFunction(this._hover.value)) {
    this._hover.value(this._hover.hovering)
    return
  }

  restoreStyle(this)
}

function mounted(element: HoverHTMLElement, binding: DirectiveBinding<HoverValue>) {
  const { arg, value } = binding

  if (shouldDisabled(arg)) {
    return
  }

  element._hover = {
    value,
    hovering: element._hover?.hovering ?? false,
    rawStyle: {},
  }

  updateRawStyle(element)

  element.addEventListener('mouseenter', createHover)
  element.addEventListener('mouseleave', removeHover)
}

function unmounted(element: HoverHTMLElement) {
  restoreStyle(element)
  element.removeEventListener('mouseenter', createHover)
  element.removeEventListener('mouseleave', removeHover)
}

function beforeUpdate(element: HoverHTMLElement) {
  unmounted(element)
}

function shouldUpdateStyle(element: HoverHTMLElement, binding: DirectiveBinding<HoverValue>) {
  return !isFunction(binding.value) && element._hover.hovering
}

function updated(element: HoverHTMLElement, binding: DirectiveBinding<HoverValue>) {
  mounted(element, binding)

  if (shouldUpdateStyle(element, binding)) {
    updateStyle(element, binding.value as StyleValue)
  }
}

const Hover: Directive & Plugin = {
  mounted,
  unmounted,
  beforeUpdate,
  updated,
  install(app: App) {
    app.directive('hover', this)
  },
}

export const _HoverComponent = Hover

export default Hover
