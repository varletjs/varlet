import { type ComputedRef } from 'vue'
import { useChildren } from '@varlet/use'
import { GridItemProvide } from '../grid-item/provide'

export interface GridProvider {
  iconSize: ComputedRef<string | number>
  center: ComputedRef<boolean>
  gutter: ComputedRef<number>
  border: ComputedRef<boolean>
  column: ComputedRef<number>
  square: ComputedRef<boolean>
  ripple: ComputedRef<boolean>
  direction: ComputedRef<'horizontal' | 'vertical'>
  elevation: ComputedRef<number>
}

export const GRID_BING_ITEM_KEY = Symbol('GRID_BING_ITEM_KEY')

export function useGridItem() {
  const { bindChildren, childProviders } = useChildren<GridProvider, GridItemProvide>(GRID_BING_ITEM_KEY)

  return {
    gridItem: childProviders,
    bindItem: bindChildren,
  }
}
