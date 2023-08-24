import { type ComputedRef } from 'vue'
import { useParent } from '@varlet/use'
import { GRID_BING_ITEM_KEY, GridProvider } from '../grid/provide'
import { error } from '../utils/logger'

export interface GridItemProvide {
  index: ComputedRef<number>
}

export function useGrid() {
  const { parentProvider, index, bindParent } = useParent<GridProvider, GridItemProvide>(GRID_BING_ITEM_KEY)

  if (!bindParent) {
    error('Grid', '<grid-item/> must in <grid>')
  }

  return {
    index,
    grid: parentProvider,
    bindGrid: bindParent,
  }
}
