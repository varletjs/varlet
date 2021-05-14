import { ComponentPublicInstance, nextTick } from 'vue'
import { VueWrapper, DOMWrapper } from '@vue/test-utils'

export const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time))

export function getTouch(el: Element | Window, x: number, y: number) {
  return {
    identifier: Date.now(),
    target: el,
    pageX: x,
    pageY: y,
    clientX: x,
    clientY: y,
    radiusX: 2.5,
    radiusY: 2.5,
    rotationAngle: 10,
    force: 0.5,
  }
}

export function trigger(
  wrapper: VueWrapper<ComponentPublicInstance<any, any, any>> | DOMWrapper<Element> | Element | Window,
  eventName: string,
  x = 0,
  y = 0
) {
  const el = 'element' in wrapper ? wrapper.element : wrapper
  const touchList = [getTouch(el, x, y)]

  const event = document.createEvent('CustomEvent')
  event.initCustomEvent(eventName, true, true, {})

  Object.assign(event, {
    clientX: x,
    clientY: y,
    touches: touchList,
    targetTouches: touchList,
    changedTouches: touchList,
  })

  el.dispatchEvent(event)

  return nextTick()
}

export function scrollTo(top: number) {
  Object.defineProperty(window, 'scrollTop', { value: top, writable: true })
  return trigger(window, 'scroll')
}

export function mockOffset() {
  Object.defineProperties(HTMLElement.prototype, {
    offsetWidth: {
      get() {
        return parseFloat(window.getComputedStyle(this).width) || 0
      },
    },
    offsetHeight: {
      get() {
        return parseFloat(window.getComputedStyle(this).height) || 0
      },
    },
    clientWidth: {
      get() {
        return parseFloat(window.getComputedStyle(this).width) || 0
      },
    },
    clientHeight: {
      get() {
        return parseFloat(window.getComputedStyle(this).height) || 0
      },
    },
    offsetLeft: {
      get() {
        return parseFloat(window.getComputedStyle(this).marginLeft) || 0
      },
    },
    offsetTop: {
      get() {
        return parseFloat(window.getComputedStyle(this).marginTop) || 0
      },
    },
    offsetParent: {
      get() {
        return this.parentNode ?? {}
      },
    },
  })
}

interface Entry {
  intersectionRatio: number
  target: null | HTMLElement
}

const entry: Entry = {
  intersectionRatio: 0,
  target: null,
}

let callback: any

export function mockIntersectionObserver() {
  const originMethod = window.IntersectionObserver

  const IntersectionObserver = function (cb: any) {
    callback = cb
  }
  IntersectionObserver.prototype.observe = (el: HTMLElement) => {
    entry.target = el
  }
  IntersectionObserver.prototype.unobserve = (el: HTMLElement) => {
    entry.target = null
  }

  Object.assign(window, {
    IntersectionObserver,
  })

  return {
    mockRestore() {
      entry.intersectionRatio = 0
      entry.target = null
      window.IntersectionObserver = originMethod
    },
    trigger(intersectionRatio: number) {
      entry.intersectionRatio = intersectionRatio
      callback?.([entry])
      return entry.target
    },
  }
}

export async function triggerDrag(
  el: VueWrapper<ComponentPublicInstance<any, any, any>> | DOMWrapper<Element> | HTMLElement,
  x = 0,
  y = 0
) {
  await trigger(el, 'touchstart', 0, 0)
  await trigger(el, 'touchmove', x / 4, y / 4)
  await trigger(el, 'touchmove', x / 3, y / 3)
  await trigger(el, 'touchmove', x / 2, y / 2)
  await trigger(el, 'touchmove', x, y)
  await trigger(el, 'touchend', x, y)
}

export function mockTranslate() {
  const originMethod = window.getComputedStyle

  const XRE = /translateX\((\d+)px\)/
  const YRE = /translateY\((\d+)px\)/

  Object.assign(window, {
    getComputedStyle: (el: HTMLElement) => {
      const styles = originMethod.call(window, el)
      const x = styles.transform.match(XRE)?.[1] ?? 0
      const y = styles.transform.match(YRE)?.[1] ?? 0
      styles.transform = `matrix(1, 0, 0, 1, ${x}, ${y})`
      return styles
    },
  })

  return {
    mockRestore() {
      window.getComputedStyle = originMethod
    },
  }
}

interface MockFileReaderCtx {
  result: string
  onload: () => void
  readAsDataURL: () => void
}

export function mockFileReader(url: string) {
  const originMethod = window.FileReader

  Object.assign(window, {
    FileReader(this: MockFileReaderCtx) {
      this.onload = function () {}
      this.result = ''

      this.readAsDataURL = function () {
        this.result = url
        this.onload()
      }
    },
  })

  return {
    mockRestore() {
      window.FileReader = originMethod
    },
  }
}
