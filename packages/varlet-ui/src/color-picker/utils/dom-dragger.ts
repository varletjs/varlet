export const isObject = (val: unknown): val is Record<never, never> => val !== null && typeof val === 'object'

export const isString = (val: unknown): val is string => typeof val === 'string'

export const enum NodeType {
  ELEMENT_NODE = 1,
  ATTRIBUTE_NODE = 2,
  TEXT_NODE = 3,
  CDATA_SECTION_NODE = 4,
  ENTITY_REFERENCE_NODE = 5,
  COMMENT_NODE = 6,
  PROCESSING_INSTRUCTION_NODE = 7,
  DOCUMENT_NODE = 9,
}

export interface DragEventOptions {
  drag?: (event: Event) => void
  start?: (event: Event) => void
  end?: (event: Event) => void
}

export type ScrollElement = Element | Window

export class Dragger {
  static isWindow(val: unknown): val is Window {
    return val === window
  }

  /**
   * 添加事件
   *
   *
   * @param element 如果为null将不会添加事件
   * @param event
   * @param handler
   * @param options
   */
  static addEventListener(
    element: HTMLElement | Document | Window | null,
    event: string,
    handler: EventListenerOrEventListenerObject,
    options: boolean | AddEventListenerOptions = false
  ): void {
    if (element && event && handler) {
      element.addEventListener(event, handler, options)
    }
  }

  /**
   * 移除事件
   *
   * @param element 如果为null将不会移除事件
   * @param event
   * @param handler
   * @param options
   */
  static removeEventListener(
    element: HTMLElement | Document | Window | null,
    event: string,
    handler: EventListenerOrEventListenerObject,
    options: boolean | EventListenerOptions = false
  ): void {
    if (element && event && handler) {
      element.removeEventListener(event, handler, options)
    }
  }

  /**
   * 触发拖拽事件
   *
   * @param element
   * @param options
   */
  static triggerDragEvent(element: HTMLElement, options: DragEventOptions): void {
    let isDragging = false

    const moveFn = function (event: Event) {
      options.drag?.(event)
    }

    const upFn = (event: Event) => {
      Dragger.removeEventListener(document, 'mousemove', moveFn)
      Dragger.removeEventListener(document, 'mouseup', upFn)
      Dragger.removeEventListener(document, 'touchmove', moveFn)
      Dragger.removeEventListener(document, 'touchend', upFn)
      document.onselectstart = null
      document.ondragstart = null

      isDragging = false
      options.end?.(event)
    }
    const downFn = (event: Event) => {
      if (isDragging) {
        return
      }
      document.onselectstart = () => false
      document.ondragstart = () => false
      Dragger.addEventListener(document, 'mousemove', moveFn)
      Dragger.addEventListener(document, 'mouseup', upFn)
      // Dragger.addEventListener(document, 'touchmove', moveFn)
      // Dragger.addEventListener(document, 'touchend', upFn)
      isDragging = true

      options.start?.(event)
    }
    Dragger.addEventListener(element, 'mousedown', downFn)
    Dragger.addEventListener(element, 'touchstart', downFn)
  }

  static getBoundingClientRect(element: HTMLElement): DOMRect | null {
    if (element && isObject(element) && element.nodeType === NodeType.ELEMENT_NODE) {
      return element.getBoundingClientRect()
    }

    return null
  }

  /**
   * 触发事件
   *
   * @param el
   * @param type
   */
  static triggerEvent(el: Element, type: string): void {
    if ('createEvent' in document) {
      // modern browsers, IE9+
      const e = document.createEvent('HTMLEvents')
      e.initEvent(type, false, true)
      el.dispatchEvent(e)
    }
  }

  /**
   * querySelector
   *
   * @param selectors
   * @param parentElement
   */
  static querySelector<E extends Element = Element>(selectors: string, parentElement?: HTMLElement): E | null {
    if (parentElement) {
      return parentElement.querySelector(selectors)
    }
    return document.querySelector(selectors)
  }
}
