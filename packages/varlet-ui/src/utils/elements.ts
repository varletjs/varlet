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

export function getParentScroller(el: HTMLElement) {
  let element = el

  while (element) {
    if (!element.parentNode) {
      break
    }

    element = element.parentNode as HTMLElement

    if (
      element === document.body ||
      element === document.documentElement
    ) {
      break
    }

    const { overflow, overflowX, overflowY } = window.getComputedStyle(element)
    if (
      /(scroll|auto)/.test(overflow) ||
      /(scroll|auto)/.test(overflowX) ||
      /(scroll|auto)/.test(overflowY)
    ) {
      return element
    }
  }

  return window
}
