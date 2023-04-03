import { useChildren } from '@varlet/use'
import { type ColProvider } from '../col/provide'

export interface RowProvider {
  computePadding: () => void
}

export const ROW_BIND_COL_KEY = Symbol('ROW_BIND_COL_KEY')

export function useCols() {
  const { bindChildren, childProviders, length } = useChildren<RowProvider, ColProvider>(ROW_BIND_COL_KEY)

  return {
    length,
    cols: childProviders,
    bindCols: bindChildren,
  }
}
