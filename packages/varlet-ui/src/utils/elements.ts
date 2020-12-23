type ScrollElement = HTMLElement | Window

export function getTop(element: HTMLElement): number {
  const { top } = element.getBoundingClientRect()

  return top + (document.body.scrollTop || document.documentElement.scrollTop)
}

export function getLeft(element: HTMLElement): number {
  return element.getBoundingClientRect().left
}

export function inViewport(element: HTMLElement) {
  const { top, bottom, left, right } = element.getBoundingClientRect()

  const xInViewport = left < window.innerWidth && right > 0
  const yInViewport = top < window.innerHeight && bottom > 0

  return xInViewport && yInViewport
}

export function getScroller(el: HTMLElement, root: ScrollElement = window) {
  let element = el

  while (
    element &&
    element.tagName !== 'HTML' &&
    element.nodeType === 1 &&
    element !== root
  ) {
    const { overflowY } = window.getComputedStyle(element)

    if (['scroll', 'auto'].includes(overflowY)) {
      if (element.tagName !== 'BODY') {
        return element
      }

      const { overflowY: htmlOverflowY } = window.getComputedStyle(element.parentNode as Element)

      if (['scroll', 'auto'].includes(htmlOverflowY)) {
        return element
      }
    }
    element = element.parentNode as HTMLElement
  }

  return root
}
