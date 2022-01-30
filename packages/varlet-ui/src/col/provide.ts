import { useAtParentIndex, useParent } from '../utils/components'
import { ROW_BIND_COL_KEY, ROW_COUNT_COL_KEY, RowProvider } from '../row/provide'

export interface ColPadding {
  left: number
  right: number
}

export type SizeObject = {
  span?: number
  offset?: number
}
export type SizeDescriptor = string | number | SizeObject | undefined

export interface ColProvider {
  setPadding: (padding: ColPadding) => void
}

export function useRow() {
  const { parentProvider, bindParent } = useParent<RowProvider, ColProvider>(ROW_BIND_COL_KEY)
  const { index } = useAtParentIndex(ROW_COUNT_COL_KEY)

  if (!parentProvider || !bindParent || !index) {
    console.warn('col must in row')
  }

  return {
    index,
    row: parentProvider,
    bindRow: bindParent,
  }
}
