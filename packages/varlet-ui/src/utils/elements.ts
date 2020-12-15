export function getTop(element: HTMLElement): number {
  const { top } = element.getBoundingClientRect()

  return top + (document.body.scrollTop || document.documentElement.scrollTop)
}

export function getLeft(element: HTMLElement): number {
  return element.getBoundingClientRect().left
}
