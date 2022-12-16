import { type SpaceDirection, type SpaceJustify } from './props'

export interface SpaceMarginOptions {
  direction: SpaceDirection
  justify: SpaceJustify
  index: number
  lastIndex: number
}

export function half(value: string) {
  return `calc(${value} / 2)`
}
export function computeMargin(y: string, x: string, options: SpaceMarginOptions) {
  const { direction, justify, index, lastIndex } = options

  let margin = '0'

  if (direction === 'row') {
    if (justify === 'start' || justify === 'center' || justify === 'end') {
      if (index !== lastIndex) {
        margin = `${half(y)} ${x} ${half(y)} 0`
      } else {
        margin = `${half(y)} 0`
      }
    } else if (justify === 'space-around') {
      margin = `${half(y)} ${half(x)}`
    } else if (justify === 'space-between') {
      if (index === 0) {
        margin = `${half(y)} ${half(x)} ${half(y)} 0`
      } else if (index === lastIndex) {
        margin = `${half(y)} 0 ${half(y)} ${half(x)}`
      } else {
        margin = `${half(y)} ${half(x)}`
      }
    }
  }

  if (direction === 'column' && index !== lastIndex) {
    margin = `0 0 ${y} 0`
  }

  return margin
}
