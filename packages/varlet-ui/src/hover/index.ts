import { isFunction, camelize, inMobile } from '@varlet/shared'
import { type App, type Directive, type Plugin, type DirectiveBinding } from 'vue'

export type HoverValue = Record<string, any> | ((isHovering: boolean) => void)

function shouldDisabled(arg?: string) {
  if (!arg) {
    return false
  }

  if (arg === 'desktop' && inMobile()) {
    return true
  }

  if (arg === 'mobile' && !inMobile()) {
    return true
  }

  return false
}

export type HoverHTMLElement = HTMLElement & {
  _hover: {
    value: HoverValue
    hovering: boolean
    rawStyle: Record<string, any>
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

      style[camelize(key)] = value

      return style
    }, {} as Record<string, any>)
}

function updateRawStyle(element: HoverHTMLElement) {
  const { value } = element._hover

  const style = getStyle(element)

  Object.keys(value as Record<string, any>).forEach((key) => {
    const camelizedKey = camelize(key)

    const styleValue = (value as Record<string, any>)[camelizedKey]

    if (styleValue != null && style[camelizedKey]) {
      element._hover.rawStyle[camelizedKey] = style[camelizedKey]
    }
  })
}

function updateStyle(element: HoverHTMLElement, styleValue: Record<string, any>) {
  Object.keys(styleValue).forEach((key) => {
    const value = styleValue[key]

    if (value != null) {
      element.style[key as any] = value
    }
  })
}

function clearStyle(element: HoverHTMLElement) {
  Object.keys(element._hover.value as Record<string, any>).forEach((key) => {
    const value = (element._hover.value as Record<string, any>)[key]

    if (element?._hover == null) {
      return
    }

    if (value != null) {
      element.style[key as any] = ''
    }
  })
}

function restoreStyle(element: HoverHTMLElement) {
  clearStyle(element)
  updateStyle(element, element._hover.rawStyle)
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

function unmounted(element: HoverHTMLElement, binding: DirectiveBinding<HoverValue>) {
  if (shouldDisabled(binding.arg)) {
    return
  }

  restoreStyle(element)
  element.removeEventListener('mouseenter', createHover)
  element.removeEventListener('mouseleave', removeHover)
}

function beforeUpdate(element: HoverHTMLElement, binding: DirectiveBinding<HoverValue>) {
  if (!element._hover) {
    // issue #942
    return
  }

  unmounted(element, binding)
}

function shouldUpdateStyle(element: HoverHTMLElement, binding: DirectiveBinding<HoverValue>) {
  return !isFunction(binding.value) && element._hover.hovering
}

function updated(element: HoverHTMLElement, binding: DirectiveBinding<HoverValue>) {
  mounted(element, binding)

  if (shouldUpdateStyle(element, binding)) {
    updateStyle(element, binding.value as Record<string, any>)
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
