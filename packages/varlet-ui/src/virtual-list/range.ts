import { type VirtualListRange } from './props'

export function getVirtualListRange(
  count: number,
  size: number,
  viewportStart: number,
  viewportEnd: number,
  overscan: number,
): VirtualListRange {
  const start = Math.max(0, viewportStart)
  const end = Math.min(count * size, viewportEnd)

  if (!count || end <= start) {
    return { start: -1, end: -1, visibleStart: -1, visibleEnd: -1 }
  }

  const visibleStart = Math.min(count - 1, Math.floor(start / size))
  const visibleEnd = Math.min(count - 1, Math.ceil(end / size) - 1)

  return {
    start: Math.max(0, visibleStart - overscan),
    end: Math.min(count - 1, visibleEnd + overscan),
    visibleStart,
    visibleEnd,
  }
}
