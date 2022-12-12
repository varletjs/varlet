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

export class DOMUtils {
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
      DOMUtils.removeEventListener(document, 'mousemove', moveFn)
      DOMUtils.removeEventListener(document, 'mouseup', upFn)
      // DOMUtils.removeEventListener(document, 'touchmove', moveFn)
      // DOMUtils.removeEventListener(document, 'touchend', upFn)
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
      DOMUtils.addEventListener(document, 'mousemove', moveFn)
      DOMUtils.addEventListener(document, 'mouseup', upFn)
      // DOMUtils.addEventListener(document, 'touchmove', moveFn)
      // DOMUtils.addEventListener(document, 'touchend', upFn)
      isDragging = true

      options.start?.(event)
    }
    DOMUtils.addEventListener(element, 'mousedown', downFn)
    // DOMUtils.addEventListener(element, 'touchstart', downFn)
  }

  static getBoundingClientRect(element: HTMLElement): DOMRect | null {
    if (element && isObject(element) && element.nodeType === NodeType.ELEMENT_NODE) {
      return element.getBoundingClientRect()
    }

    return null
  }

  /**
   * 判断是否存在className样式
   *
   * @param element
   * @param className
   */
  public static hasClass(element: HTMLElement, className: string): boolean {
    if (element && isObject(element) && isString(className) && element.nodeType === NodeType.ELEMENT_NODE) {
      return element.classList.contains(className.trim())
    }
    return false
  }

  /**
   * 添加样式
   *
   * @param element
   * @param className
   */
  public static addClass(element: HTMLElement, className: string): void {
    if (element && isObject(element) && isString(className) && element.nodeType === NodeType.ELEMENT_NODE) {
      className = className.trim()
      if (!DOMUtils.hasClass(element, className)) {
        const cl = element.className
        element.className = cl ? cl + ' ' + className : className
      }
    }
  }

  /**
   * 移除样式
   *
   * @param element
   * @param className
   */
  public static removeClass(element: HTMLElement, className: string): void {
    if (
      element &&
      isObject(element) &&
      isString(className) &&
      element.nodeType === NodeType.ELEMENT_NODE &&
      typeof element.className === 'string'
    ) {
      className = className.trim()
      const classes = element.className.trim().split(' ')
      for (let i = classes.length - 1; i >= 0; i--) {
        classes[i] = classes[i].trim()
        if (!classes[i] || classes[i] === className) {
          classes.splice(i, 1)
        }
      }
      element.className = classes.join(' ')
    }
  }

  /**
   * 切换样式
   *
   * @param element
   * @param className
   * @param force
   */
  public static toggleClass(element: HTMLElement, className: string, force?: boolean): void {
    if (element && isObject(element) && isString(className) && element.nodeType === NodeType.ELEMENT_NODE) {
      element.classList.toggle(className, force)
    }
  }

  /**
   * 替换样式
   *
   * @param element
   * @param oldClassName
   * @param newClassName
   */
  public static replaceClass(element: HTMLElement, oldClassName: string, newClassName: string): void {
    if (
      element &&
      isObject(element) &&
      isString(oldClassName) &&
      isString(newClassName) &&
      element.nodeType === NodeType.ELEMENT_NODE
    ) {
      oldClassName = oldClassName.trim()
      newClassName = newClassName.trim()
      DOMUtils.removeClass(element, oldClassName)
      DOMUtils.addClass(element, newClassName)
    }
  }

  static getScrollTop(el: ScrollElement): number {
    const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset

    // iOS scroll bounce cause minus scrollTop
    return Math.max(top, 0)
  }

  static setScrollTop(el: ScrollElement, value: number): void {
    if ('scrollTop' in el) {
      el.scrollTop = value
    } else {
      el.scrollTo(el.scrollX, value)
    }
  }

  static getRootScrollTop(): number {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  }

  static setRootScrollTop(value: number): void {
    DOMUtils.setScrollTop(window, value)
    DOMUtils.setScrollTop(document.body, value)
  }

  static getElementTop(el: ScrollElement, scroller?: HTMLElement): number {
    if (DOMUtils.isWindow(el)) {
      return 0
    }

    const scrollTop = scroller ? DOMUtils.getScrollTop(scroller) : DOMUtils.getRootScrollTop()
    return el.getBoundingClientRect().top + scrollTop
  }

  static getVisibleHeight(el: ScrollElement): number {
    if (DOMUtils.isWindow(el)) {
      return el.innerHeight
    }
    return el.getBoundingClientRect().height
  }

  static isHidden(el: HTMLElement): boolean {
    if (!el) {
      return false
    }

    const style = window.getComputedStyle(el)
    const hidden = style.display === 'none'

    // 在以下情况下，offsetParent返回null:
    // 1. 元素或其父元素的display属性设置为none.
    // 2. 元素的position属性设置为fixed
    const parentHidden = el.offsetParent === null && style.position !== 'fixed'

    return hidden || parentHidden
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
   * 计算相对于中心点的旋转角度
   * @param element
   * @param event
   */
  static calcAngle(element: HTMLElement, event: MouseEvent): number {
    const rect = element.getBoundingClientRect()

    const originX = rect.left + rect.width / 2
    const originY = rect.top + rect.height / 2

    // 获得中心点和鼠标坐标连线，与y轴正半轴之间的夹角
    const x = Math.abs(originX - event.clientX)
    const y = Math.abs(originY - event.clientY)
    const z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    const cos = y / z
    const rad = Math.acos(cos) // 用反三角函数求弧度
    let angle = Math.floor(180 / (Math.PI / rad)) // 将弧度转换成角度

    if (event.clientX > originX && event.clientY > originY) {
      // 鼠标在第四象限
      angle = 180 - angle
    }

    if (event.clientX === originX && event.clientY > originY) {
      // 鼠标在y轴负方向上
      angle = 180
    }

    if (event.clientX > originX && event.clientY === originY) {
      // 鼠标在x轴正方向上
      angle = 90
    }

    if (event.clientX < originX && event.clientY > originY) {
      // 鼠标在第三象限
      angle = 180 + angle
    }

    if (event.clientX < originX && event.clientY === originY) {
      // 鼠标在x轴负方向
      angle = 270
    }

    if (event.clientX < originX && event.clientY < originY) {
      // 鼠标在第二象限
      angle = 360 - angle
    }

    return angle
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
