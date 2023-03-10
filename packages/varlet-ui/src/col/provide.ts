import { useParent } from '@varlet/use'
import { ROW_BIND_COL_KEY, RowProvider } from '../row/provide'

export interface ColPadding {
  left: number
  right: number
}

export type ColSizeDescriptor = {
  span?: number | string
  offset?: number | string
}

export interface ColProvider {
  setPadding: (padding: ColPadding) => void
}

export function useRow() {
  const { parentProvider, index, bindParent } = useParent<RowProvider, ColProvider>(ROW_BIND_COL_KEY)

  if (!parentProvider || !bindParent || !index) {
    console.warn('col must in row')
  }

  return {
    index,
    row: parentProvider,
    bindRow: bindParent,
  }
}
