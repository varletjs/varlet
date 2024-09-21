import { useChildren } from '@varlet/use'
import { type ColProvider } from '../col/provide'
import { ComputedRef } from 'vue'

export interface RowProvider {
  average: ComputedRef<number[]>
}

export const ROW_BIND_COL_KEY = Symbol('ROW_BIND_COL_KEY')

export function useCols() {
  const { bindChildren } = useChildren<RowProvider, ColProvider>(ROW_BIND_COL_KEY)

  return {
    bindCols: bindChildren,
  }
}
