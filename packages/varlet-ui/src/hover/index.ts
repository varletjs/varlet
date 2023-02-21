import { isFunction } from '@varlet/shared'
import type { App, Directive, Plugin, DirectiveBinding, StyleValue } from 'vue'

export type HoverValue = StyleValue | ((isHovering: boolean) => void)

export type HoverHTMLElement = HTMLElement & {
  _hover: {
    value: HoverValue
    hovering: boolean
    rawStyle: string | null
  }
}

function updateStyle(element: HoverHTMLElement, styleValue: StyleValue) {
  Object.keys(styleValue).forEach((key) => {
    const value = styleValue[key as keyof StyleValue]

    if (value != null) {
      element.style[key as keyof StyleValue] = styleValue[key as keyof StyleValue]
    }
  })
}

function restoreStyle(element: HoverHTMLElement) {
  element._hover.rawStyle ? element.setAttribute('style', element._hover.rawStyle) : element.removeAttribute('style')
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
  element._hover = {
    value: binding.value,
    hovering: element._hover?.hovering ?? false,
    rawStyle: element.getAttribute('style'),
  }

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
