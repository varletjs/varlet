import { useParent } from '@varlet/use'
import { ROW_BIND_COL_KEY, RowProvider } from '../row/provide'

export interface ColPadding {
  left: number
  right: number
  top: number
  bottom: number
}

export type ColSizeDescriptor = {
  span?: number | string
  offset?: number | string
}

export function useRow() {
  const { index, bindParent, parentProvider } = useParent<RowProvider, null>(ROW_BIND_COL_KEY)

  return {
    index,
    row: parentProvider,
    bindRow: bindParent,
  }
}
