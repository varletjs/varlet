import { ComputedRef } from 'vue'
import { useAtParentIndex, useParent } from '../utils/components'
import { ROW_BIND_COL_KEY, ROW_COUNT_COL_KEY, RowProvider } from '../row/provode'

export interface ColPadding {
  left: number
  right: number
}

export interface ColProvider {
  span: ComputedRef<number>
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
    bindRow: bindParent
  }
}
