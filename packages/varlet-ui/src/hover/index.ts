import { isObject, isFunction } from '@varlet/shared'
import type { App, Directive, Plugin, DirectiveBinding, StyleValue } from 'vue'

export type HoverOptions = StyleValue | ((isHovering: boolean) => boolean)

export type HoverHTMLElement = HTMLElement & { _hover: { rawStyle: string; value: HoverOptions } }

function createHover(this: HoverHTMLElement) {
  const { value } = this._hover

  if (isFunction(value)) {
    value(true)
  } else if (isObject(value)) {
    Object.keys(value).forEach((key) => {
      this.style[key as keyof StyleValue] = value[key as keyof StyleValue]
    })
  }
}

function removeHover(this: HoverHTMLElement) {
  const { rawStyle, value } = this._hover

  if (isFunction(value)) {
    value(false)
  } else if (isObject(value)) {
    Object.keys(value).forEach((key) => {
      this.style[key as keyof StyleValue] = ''
    })
  }

  if (!rawStyle) return

  const rawStyleList = rawStyle.split(';')

  rawStyleList.forEach((item) => {
    const [key, value] = item.split(':')

    this.style[key as any] = value
  })
}

function mounted(element: HoverHTMLElement, binding: DirectiveBinding<HoverOptions>) {
  element._hover = {
    rawStyle: element.getAttribute('style') || '',
    value: binding.value,
  }

  element.addEventListener('mouseenter', createHover)
  element.addEventListener('mouseleave', removeHover)
}

function unmounted(element: HoverHTMLElement) {
  element.removeEventListener('mouseenter', createHover)
  element.removeEventListener('mouseleave', removeHover)
}

function updated(element: HoverHTMLElement, binding: DirectiveBinding<HoverOptions>) {
  mounted(element, binding)
}

const Hover: Directive & Plugin = {
  mounted,
  unmounted,
  updated,
  install(app: App) {
    app.directive('hover', this)
  },
}

export const _HoverComponent = Hover

export default Hover
