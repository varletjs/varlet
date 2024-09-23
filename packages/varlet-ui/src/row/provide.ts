import { useChildren } from '@varlet/use'
import { ComputedRef } from 'vue'

export interface RowProvider {
  average: ComputedRef<number[]>
}

export const ROW_BIND_COL_KEY = Symbol('ROW_BIND_COL_KEY')

export function useCols() {
  const { length, childProviders: cols, bindChildren } = useChildren<RowProvider, null>(ROW_BIND_COL_KEY)

  return {
    length,
    cols,
    bindCols: bindChildren,
  }
}
