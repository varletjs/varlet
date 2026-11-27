import { type VirtualListRange } from './props'

export type VirtualListSizes = number | readonly number[]

export function getItemOffset(sizes: VirtualListSizes, index: number): number {
  return typeof sizes === 'number' ? index * sizes : sizes[index]
}

// The array contains cumulative offsets, including the final list boundary.
function findOffset(sizes: readonly number[], offset: number, end: boolean): number {
  let low = 0
  let high = sizes.length
  while (low < high) {
    const middle = (low + high) >>> 1
    if (sizes[middle] < offset || (!end && sizes[middle] === offset)) {
      low = middle + 1
    } else {
      high = middle
    }
  }
  return Math.max(0, low - 1)
}

export function getVirtualListRange(
  count: number,
  size: VirtualListSizes,
  viewportStart: number,
  viewportEnd: number,
  overscan: number,
): VirtualListRange {
  const start = Math.max(0, viewportStart)
  const end = Math.min(getItemOffset(size, count), viewportEnd)

  if (!count || end <= start) {
    return { start: -1, end: -1, visibleStart: -1, visibleEnd: -1 }
  }

  const visibleStart = Math.min(
    count - 1,
    typeof size === 'number' ? Math.floor(start / size) : findOffset(size, start, false),
  )
  const visibleEnd = Math.min(
    count - 1,
    typeof size === 'number' ? Math.ceil(end / size) - 1 : findOffset(size, end, true),
  )

  return {
    start: Math.max(0, visibleStart - overscan),
    end: Math.min(count - 1, visibleEnd + overscan),
    visibleStart,
    visibleEnd,
  }
}
