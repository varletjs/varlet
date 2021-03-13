import { useAtChildrenCounter, useChildren } from '../utils/components'
import { ColProvider } from '../col/provide'

export interface RowProvider {
  computePadding: () => void
}

export const ROW_BIND_COL_KEY = Symbol('ROW_BIND_COL_KEY')
export const ROW_COUNT_COL_KEY = Symbol('ROW_COUNT_COL_KEY')

export function useCols() {
  const { bindChildren, childProviders } = useChildren<RowProvider, ColProvider>(ROW_BIND_COL_KEY)
  const { length } = useAtChildrenCounter(ROW_COUNT_COL_KEY)

  return {
    length,
    cols: childProviders,
    bindCols: bindChildren
  }
}
