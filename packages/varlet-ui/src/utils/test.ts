import { nextTick, type ComponentPublicInstance } from 'vue'
import { getStyle, isPlainObject } from '@varlet/shared'
import { config, type DOMWrapper, type VueWrapper } from '@vue/test-utils'

export const delay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

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

export function mockDoubleRaf() {
  const originMethod = window.requestAnimationFrame

  Object.assign(window, {
    requestAnimationFrame(fn: any) {
      setTimeout(fn, 16)
    },
  })

  return {
    mockRestore() {
      window.requestAnimationFrame = originMethod
    },
  }
}

export function trigger(
  wrapper: VueWrapper<ComponentPublicInstance<any, any, any>> | DOMWrapper<Element> | Element | Window,
  eventName: string,
  x = 0,
  y = 0,
  offsetX = 0,
  offsetY = 0,
) {
  const el = 'element' in wrapper ? wrapper.element : wrapper
  const touchList = [getTouch(el, x, y)]

  const event = new CustomEvent(eventName, { bubbles: true, cancelable: true, detail: {} })

  Object.assign(event, {
    clientX: x,
    clientY: y,
    offsetX,
    offsetY,
    touches: touchList,
    targetTouches: eventName.startsWith('touch') ? touchList : undefined,
    changedTouches: eventName.startsWith('touch') ? touchList : undefined,
  })

  el.dispatchEvent(event)

  return nextTick()
}

export function triggerKeyboard(
  wrapper: VueWrapper<ComponentPublicInstance<any, any, any>> | DOMWrapper<Element> | Element | Window,
  eventName: string,
  eventInitDict: Record<string, any> = {},
) {
  const el = 'element' in wrapper ? wrapper.element : wrapper
  const event = new KeyboardEvent(eventName, eventInitDict)

  el.dispatchEvent(event)

  return nextTick()
}

export function mockOffset({
  offsetWidth,
  offsetHeight,
  clientWidth,
  clientHeight,
  offsetLeft,
  offsetTop,
}: {
  offsetWidth?: number
  offsetHeight?: number
  clientWidth?: number
  clientHeight?: number
  offsetLeft?: number
  offsetTop?: number
} = {}) {
  Object.defineProperties(HTMLElement.prototype, {
    offsetWidth: {
      get() {
        return offsetWidth ?? (parseFloat(getStyle(this).width) || 0)
      },
    },
    offsetHeight: {
      get() {
        return offsetHeight ?? (parseFloat(getStyle(this).height) || 0)
      },
    },
    clientWidth: {
      get() {
        return clientWidth ?? (parseFloat(getStyle(this).width) || 0)
      },
    },
    clientHeight: {
      get() {
        return clientHeight ?? (parseFloat(getStyle(this).height) || 0)
      },
    },
    offsetLeft: {
      get() {
        return offsetLeft ?? (parseFloat(getStyle(this).marginLeft) || 0)
      },
    },
    offsetTop: {
      get() {
        return offsetTop ?? (parseFloat(getStyle(this).marginTop) || 0)
      },
    },
    offsetParent: {
      get() {
        return this.parentNode ?? {}
      },
    },
  })
}

export function mockImageNaturalSize(naturalWidth: number, naturalHeight: number) {
  Object.defineProperties(HTMLImageElement.prototype, {
    naturalWidth: {
      get() {
        return naturalWidth
      },
    },
    naturalHeight: {
      get() {
        return naturalHeight
      },
    },
  })
}

export async function triggerDrag(
  el: VueWrapper<ComponentPublicInstance<any, any, any>> | DOMWrapper<Element> | HTMLElement,
  x = 0,
  y = 0,
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

  const XRE = /translateX\((-?\d+)px\)/
  const YRE = /translateY\(-?(\d+)px\)/

  Object.assign(window, {
    getComputedStyle: (el: HTMLElement) => {
      const styles = originMethod.call(window, el)
      const x = el.style.transform.match(XRE)?.[1] ?? 0
      const y = el.style.transform.match(YRE)?.[1] ?? 0
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

export function mockFileReader(url: string) {
  const originMethod = window.FileReader

  class FileReader {
    result = ''

    onload() {}

    readAsDataURL() {
      this.result = url
      this.onload()
    }
  }

  Object.assign(window, {
    FileReader,
  })

  return {
    mockRestore() {
      window.FileReader = originMethod
    },
  }
}

export function mockStubs() {
  const originStubs = config.global.stubs

  config.global.stubs = {}

  return {
    mockRestore() {
      config.global.stubs = originStubs
    },
  }
}

export function mockConsole(method: keyof Console, fn: any = () => {}) {
  const originMethod = console[method]

  console[method] = fn

  return {
    mockRestore() {
      console[method] = originMethod as any
    },
  }
}

export function mockScrollTo() {
  Object.assign(window, { scrollTo() {} })
  Object.defineProperty(Element.prototype, 'scrollTo', {
    value(x: ScrollToOptions | number, y?: number) {
      if (isPlainObject(x)) {
        this.scrollLeft = x.left
        this.scrollTop = x.top
      } else {
        this.scrollLeft = x
        this.scrollTop = y
      }
    },
  })
}

export function mockScrollIntoView() {
  Object.defineProperty(Element.prototype, 'scrollIntoView', {
    value() {},
  })
}

export function mockUserAgent(userAgent: string) {
  const originUserAgent = navigator.userAgent

  Object.defineProperty(window.navigator, 'userAgent', {
    configurable: true,
    get() {
      return userAgent
    },
  })

  return {
    restore() {
      Object.defineProperty(window.navigator, 'userAgent', {
        configurable: true,
        get() {
          return originUserAgent
        },
      })
    },
  }
}

export function mockCanvas() {
  Object.defineProperties(HTMLCanvasElement.prototype, {
    getContext: {
      value() {
        return {
          drawImage() {},
        }
      },
    },

    toDataURL: {
      value() {
        return 'mock data url'
      },
    },
  })
}
