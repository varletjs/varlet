import { isEmpty } from 'lodash-es'
import '../styles/common.less'
import { isString } from '@varlet/shared'
import type { App, Directive, Plugin, DirectiveBinding, CSSProperties } from 'vue'

export type StyleCacheInstance = CSSProperties | string

export type HoverHTMLElement = HTMLElement & { _style: string; _hover: StyleCacheInstance }

function setStringStyle(element: HoverHTMLElement, styleName: '_style' | '_hover', clearable = false) {
  if (!element[styleName]) return

  const styleList = (element[styleName] as string).split(';')

  styleList.forEach((item) => {
    const [key, value] = item.split(':')

    element.style[key as any] = clearable ? '' : value
  })
}

function setHoverStyle(element: HoverHTMLElement, clearable = false) {
  if (!element._hover || isEmpty(element._hover)) return

  if (isString(element._hover)) {
    setStringStyle(element, '_hover', clearable)
  } else {
    Object.keys(element._hover).forEach((key) => {
      element.style[key as any] = clearable ? '' : element._hover[key]
    })
  }
}

function createHover(this: HoverHTMLElement) {
  setHoverStyle(this)
}

function removeHover(this: HoverHTMLElement) {
  setHoverStyle(this, true)

  setStringStyle(this, '_style')
}

function mounted(element: HoverHTMLElement, binding: DirectiveBinding) {
  element._style = element.getAttribute('style') || ''
  element._hover = binding.value

  element.addEventListener('mouseover', createHover)
  element.addEventListener('mouseout', removeHover)
}

function unmounted(element: HoverHTMLElement) {
  element.removeEventListener('mouseover', createHover)
  element.removeEventListener('mouseout', removeHover)
}

function updated(element: HoverHTMLElement, binding: DirectiveBinding<string>) {
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
