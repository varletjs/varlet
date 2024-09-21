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

export type ColProvider = object

export function useRow() {
  const { parentProvider } = useParent<RowProvider, ColProvider>(ROW_BIND_COL_KEY)

  return {
    row: parentProvider,
  }
}
